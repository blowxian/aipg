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

        // 设置 cookie 包含 user.id
        const response = NextResponse.json({message: 'User information saved and session recorded.'}, {status: 200});
        response.cookies.set('user', JSON.stringify({
            id: user.id,
            name: user.name,
            avatar: user.profileImage,
            email: user.email
        }), {secure: true, sameSite: 'strict', path: '/', maxAge: 60 * 60 * 24 * 7});

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: 'Internal server error'}, {status: 500});
    }
}
