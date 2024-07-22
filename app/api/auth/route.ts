import {NextRequest, NextResponse} from 'next/server';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const {name, avatar, email} = await req.json();

        // 查找用户
        let user = await prisma.user.findUnique({
            where: {email},
        });

        if (!user) {
            // 如果用户不存在，创建新用户
            user = await prisma.user.create({
                data: {
                    email,
                    name,
                    profileImage: avatar,
                },
            });
        }

        // 记录用户登录活动
        await prisma.userSession.create({
            data: {
                userId: user.id,
                loginTime: new Date(),
            },
        });

        // 检查用户是否有有效订阅
        const activeSubscription = await prisma.subscription.findFirst({
            where: {
                userId: user.id,
                isActive: true,
                expiryDate: {
                    gte: new Date(),
                },
            },
        });

        const hasActiveSubscription = !!activeSubscription;

        // 设置 cookie 包含 user.id 和订阅信息
        const response = NextResponse.json({message: 'User information saved and session recorded.'}, {status: 200} as any);
        response.cookies.set('user' as any, JSON.stringify({
            id: user.id,
            name: user.name,
            avatar: user.profileImage,
            email: user.email,
            hasActiveSubscription: hasActiveSubscription,
        }) as any, {secure: true, sameSite: 'strict', path: '/', maxAge: 60 * 60 * 24 * 7} as any);

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: 'Internal server error'}, {status: 500} as any);
    }
}