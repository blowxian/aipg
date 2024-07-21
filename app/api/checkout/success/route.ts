// /pages/api/payment_success.ts
import {NextApiRequest, NextApiResponse} from 'next';
import {PrismaClient} from '@prisma/client';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const session = await stripe.checkout.sessions.retrieve(req.query.session_id as string, {
                expand: ['line_items'],
            });
            const userId = session.metadata?.userId;
            const priceId = session.line_items?.data[0]?.price.id;

            // 通过 priceId 判断订阅的类型（按月或按年）
            const tier = priceId === process.env.MONTHLY_PRICE_ID ? 'Monthly' : 'Annual';

            const startDate = new Date();
            const endDate = new Date(
                tier === 'Annual'
                    ? new Date(startDate).setFullYear(startDate.getFullYear() + 1)
                    : new Date(startDate).setMonth(startDate.getMonth() + 1)
            );

            const subscription = await prisma.subscription.create({
                data: {
                    userId: parseInt(userId),
                    status: 'active',
                    tier,
                    startDate,
                    endDate: new Date(endDate),
                },
            } as any);

            res.redirect(303, `/checkout/success?subscriptionId=${subscription.id}`);
        } catch (err: any) {
            res.status(500).json({error: err.message});
        }
    } else {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
    }
}