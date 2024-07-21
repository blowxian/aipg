import {NextRequest} from 'next/server';
import Together from 'together-ai';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

function parseCookies(cookieHeader: string | null) {
    if (!cookieHeader) return {};
    return Object.fromEntries(
        cookieHeader.split('; ').map(c => {
            const [key, ...v] = c.split('=');
            return [key, decodeURIComponent(v.join('='))];
        })
    );
}

function getUserIdFromCookies(cookies: { [key: string]: string }) {
    const userCookie = cookies['user'];
    if (userCookie) {
        try {
            const user = JSON.parse(userCookie);
            return user.id; // 或者使用其他唯一标识符
        } catch {
            return 'anonymous'; // 如果解析失败则返回匿名用户
        }
    }
    return 'anonymous'; // 默认值为匿名用户
}

async function checkUserSubscription(userId: string) {
    const subscription = await prisma.subscription.findFirst({
        where: {
            userId: userId,
            isActive: true,
            expiryDate: {
                gte: new Date()
            }
        }
    });

    if (subscription) {
        if (subscription.aipgQuota <= 0) {
            return {hasAccess: false, reason: 'No remaining quota'};
        }
        return {hasAccess: true, subscription};
    } else {
        const user = await prisma.user.findUnique({where: {id: userId}});
        if (!user) {
            return {hasAccess: false, reason: 'User not found'};
        }

        const today = new Date();
        const isSameDay = user.lastUsageDate && user.lastUsageDate.toDateString() === today.toDateString();

        if (!isSameDay) {
            await prisma.user.update({
                where: {id: userId},
                data: {dailyUsageCount: 0, lastUsageDate: today}
            });
        }

        if (user.dailyUsageCount >= 6) {
            return {hasAccess: false, reason: 'Daily usage limit exceeded'};
        }

        return {hasAccess: true, user};
    }
}

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const message = searchParams.get('message');
    const style = searchParams.get('style') || 'Standard'; // 默认值为 'Standard'
    const paragraphs = searchParams.get('paragraph') || '1'; // 默认值为 '1 paras'
    const language = searchParams.get('language') || 'English'; // 默认值为 'English'
    const mode = searchParams.get('mode') || 'Direct'; // 默认值为 'Direct'

    if (!message) {
        return new Response(JSON.stringify({ error: 'Message parameter is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const together = new Together({
        apiKey: process.env.TOGETHER_API_KEY!,
    });

    const encoder = new TextEncoder();

    // 生成的详细 prompt
    const prompt = `
You are a large language AI rewrite built by aiparagraphgenerator.net. You are given a user message, and please rewrite a clean, concise, and accurate version in paragraphs for the message.

Please rewrite the User Input into ${paragraphs} paragraphs, each between 30 to 50 words. The paragraphs should be informative and written in ${style} style. The rewrite should be in ${language} and follow a ${mode} approach, maintaining the user's tone and style.

Do not include any introductory or concluding remarks. Only provide the rewritten content.${Number(paragraphs) > 1 ? " Ensure that there is a blank line between each paragraph when user input is multiple paragraphs." : ""}
    `;

    try {
        // 从 cookie 中获取用户信息
        const cookies = parseCookies(req.headers.get('cookie'));
        const userId = getUserIdFromCookies(cookies);

        console.log('User ID:', userId);

        // 校验用户权限
        const {hasAccess, reason, subscription, user} = await checkUserSubscription(userId);
        if (!hasAccess) {
            return new Response(JSON.stringify({error: `Access denied: ${reason}`}), {
                status: 403,
                headers: {'Content-Type': 'application/json'}
            });
        }

        const stream = await together.chat.completions.create({
            model: 'meta-llama/Llama-3-8b-chat-hf',
            messages: [
                { role: "system", content: prompt },
                { role: 'user', content: message },
            ],
            stream: true,
        });

        let inputCharCount = prompt.length + message.length;
        let outputCharCount = 0;
        let generatedContent = '';

        const readableStream = new ReadableStream({
            async start(controller) {
                for await (const chunk of stream) {
                    const content = chunk.choices[0]?.delta?.content || '';
                    if (content) {
                        generatedContent += content;
                        outputCharCount += content.length;
                        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
                    }
                }
                controller.enqueue(encoder.encode('event: end\ndata: End of stream\n\n'));
                controller.close();

                // 在控制台中输出统计结果
                console.log(`Input Characters: ${inputCharCount}`);
                console.log(`Output Characters: ${outputCharCount}`);

                try {
                    // 保存 AIPG 使用记录到数据库
                    console.log('Attempting to save AIPG usage to database...');
                    await prisma.aipgUsage.create({
                        data: {
                            userId: userId,
                            inputMessage: message,
                            selectedStyle: style,
                            selectedParagraph: paragraphs,
                            selectedLanguage: language,
                            generationType: mode,
                            generatedContent: generatedContent,
                            inputCharCount: inputCharCount,
                            outputCharCount: outputCharCount,
                        },
                    });

                    if (subscription) {
                        // 更新订阅配额
                        await prisma.subscription.update({
                            where: {id: subscription.id},
                            data: {aipgQuota: {decrement: 1}}
                        });
                    } else if (user) {
                        // 更新未订阅用户的每日使用次数
                        await prisma.user.update({
                            where: {id: user.id},
                            data: {dailyUsageCount: {increment: 1}}
                        });
                    }

                    console.log('AIPG usage saved to database successfully.');
                } catch (dbError) {
                    console.error('Error saving AIPG usage to database:', dbError);
                }
            },
        });

        return new Response(readableStream, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(
            encoder.encode(`event: error\ndata: ${JSON.stringify({ error: 'Failed to fetch data from Together API' })}\n\n`),
            {
                headers: {
                    'Content-Type': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive',
                },
            }
        );
    }
}