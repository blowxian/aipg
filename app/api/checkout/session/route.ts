// /app/api/checkout/session/route.ts

import Stripe from 'stripe';
import {NextRequest, NextResponse} from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
    const formData = await req.formData();  // 获取 POST 请求体中的 userId 和 plan

    const userId = formData.get('userId')?.toString();
    const plan = formData.get('plan')?.toString();
    const locale = formData.get('locale')?.toString();
    console.log('userId:', userId, 'plan:', plan, 'locale:', locale);

    // 根据 plan 动态设置 price ID
    let priceId: string;
    switch (plan) {
        case 'weekly':
            priceId = 'price_1Pea9ERsqc5wnJW18S6sgHcZ';
            // priceId = 'price_1PeG9pRsqc5wnJW1RfOnOBHn';  // 周度订阅的 price_id
            break;
        case 'monthly':
            priceId = 'price_1PeGAoRsqc5wnJW1aIvVyDCy';  // 月度订阅的 price_id
            break;
        case 'yearly':
            priceId = 'price_1PeGBLRsqc5wnJW1drvddq1X';  // 年度订阅的 price_id
            break;
        default:
            return NextResponse.json({error: 'Invalid plan specified'});
    }

    try {
        // 创建 Checkout 会话
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${req.headers.get('origin')}/${locale}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.get('origin')}/${locale}/checkout/cancel`,
            automatic_tax: {enabled: true},
            metadata: {
                userId: userId,  // 将 userId 添加到 metadata 中
                plan: plan  // 可选: 将 plan 添加到 metadata 中以跟踪
            }
        } as any);
        return NextResponse.redirect(session.url as any, 303);
    } catch (err: any) {
        return NextResponse.json({error: err.message});
    }
}