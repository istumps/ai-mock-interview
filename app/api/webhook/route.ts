import { stripe } from '@/lib/stripe';
import { db } from '@/utils/db';    
import { headers } from "next/headers";
import { NextResponse } from 'next/server';
import { UserSubscription } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import Stripe from 'stripe';

export async function POST(req: Request) {
    const body = await req.text();
    const signature = headers().get("Stripe-Signature") as string; 
    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (error) {
        console.error("Webhook Error: ", error);
        return new NextResponse("Webhook Error", { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    console.log('Session data: ', session);

    console.log(`Processing event type: ${event.type}`);

    if (event.type === "checkout.session.completed") {
    
        try {
            console.log('Retrieving subscription for session: ', session.subscription);
            const subscription = await stripe.subscriptions.retrieve(
                session.subscription as string
            );

            console.log('Subscription retrieved: ', subscription);
            
            const insertResult = await db.insert(UserSubscription).values({
                userEmail: session.customer_email as string,
                stripeCustomerId: subscription.customer as string, 
                stripeSubscriptionId: subscription.id,
                stripePirceId: subscription.items.data[0].price.id,  
                StripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString(),
            });

            console.log('Insert result: ', insertResult);
            console.log('Subscription data saved to database.');
        } catch (error) {
            console.error("Error saving subscription data: ", error);
            console.error("Detailed Error: ", error.message, error.stack);
            return new NextResponse("Error saving subscription data", { status: 500 });
        }
    }

    if (event.type === "invoice.payment_succeeded") {
        try {
            console.log('Retrieving subscription for session: ', session.subscription);
            const subscription = await stripe.subscriptions.retrieve(
                session.subscription as string
            );

            console.log('Subscription retrieved: ', subscription);

            const updateResult = await db.update(UserSubscription).set({
                stripePirceId: subscription.items.data[0].price.id,  
                StripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString(), 
            }).where(eq(UserSubscription.stripeSubscriptionId, subscription.id));

            console.log('Update result: ', updateResult);
            console.log('Subscription data updated in the database.');
        } catch (error) {
            console.error("Error updating subscription data: ", error);
            console.error("Detailed Error: ", error.message, error.stack);
            return new NextResponse("Error updating subscription data", { status: 500 });
        }
    }

    return new NextResponse(null, { status: 200 });
}
