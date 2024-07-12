import {NextRequest} from 'next/server';
import Together from 'together-ai';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const message = searchParams.get('message');
    const style = searchParams.get('style') || 'Standard'; // 默认值为 'Standard'
    const paragraphs = searchParams.get('paragraphs') || '1 paras'; // 默认值为 '1 paras'
    const language = searchParams.get('language') || 'English'; // 默认值为 'English'
    const mode = searchParams.get('mode') || 'Direct'; // 默认值为 'Direct'

    if (!message) {
        return new Response(JSON.stringify({error: 'Message parameter is required'}), {
            status: 400,
            headers: {'Content-Type': 'application/json'}
        });
    }

    const together = new Together({
        apiKey: process.env.TOGETHER_API_KEY!,
    });

    const encoder = new TextEncoder();

    // 生成的详细 prompt
    let prompt = `
You are a large language AI rewrite built by aiparagraphgenerator.net. You are given a user message, and please rewrite a clean, concise, and accurate version in paragraphs for the message.

Please rewrite the User Input into ${paragraphs} paragraphs, each between 30 to 50 words. The paragraphs should be informative and written in ${style} style. The rewrite should be in ${language} and follow a ${mode} approach, maintaining the user's tone and style.

Do not include any introductory or concluding remarks. Only provide the rewritten content. Ensure that there is a blank line between each paragraph when user input is multiple paragraphs.
`;

    try {
        const stream = await together.chat.completions.create({
            model: 'meta-llama/Llama-3-8b-chat-hf',
            messages: [
                {role: "system", content: prompt},
                {role: 'user', content: message},
            ],
            stream: true,
        });

        const readableStream = new ReadableStream({
            async start(controller) {
                for await (const chunk of stream) {
                    const content = chunk.choices[0]?.delta?.content || '';
                    if (content) {
                        controller.enqueue(encoder.encode(`data: ${JSON.stringify({content})}\n\n`));
                    }
                }
                controller.enqueue(encoder.encode('event: end\ndata: End of stream\n\n'));
                controller.close();
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
        return new Response(
            encoder.encode(`event: error\ndata: ${JSON.stringify({error: 'Failed to fetch data from Together API'})}\n\n`),
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