// /app/api/checkout/verify-payment.ts
import {PrismaClient} from '@prisma/client';
import Stripe from 'stripe';
import {NextRequest, NextResponse} from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const session_id = searchParams.get('session_id') || '';

    try {
        if (!session_id) {
            return NextResponse.json({success: false, message: 'Invalid session ID.'});
        }

        const session = await stripe.checkout.sessions.retrieve(session_id);
        if (session.payment_status === 'paid') {
            // 从 session metadata 获取 userId，并确保它是整数
            const userId = session.metadata?.userId;

            console.log('userId:', userId);

            // 检查用户是否已有订阅
            const existingSubscription = await prisma.subscription.findFirst({
                where: {userId: userId}
            });

            if (!existingSubscription) {
                // 创建新的订阅记录
                await prisma.subscription.create({
                    data: {
                        userId: userId as string,
                        planVersion: 'Standard', // 假设订阅级别为 "Standard"
                        aipgQuota: 1000, // 假设配额为 1000
                        expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 订阅期限为一个月
                        isActive: true,
                    }
                });
            }

            return NextResponse.json({success: true, session});
        } else {
            return NextResponse.json({success: false, message: 'Payment not completed'});
        }
    } catch (error: any) {
        console.error('Error handling payment verification:', error);
        return NextResponse.json({success: false, message: error.message});
    }
}