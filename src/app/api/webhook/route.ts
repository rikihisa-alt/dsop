import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeKey || !webhookSecret || stripeKey === "your-stripe-secret-key") {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 503 }
    );
  }

  try {
    const { default: Stripe } = await import("stripe");
    const stripe = new Stripe(stripeKey);

    const event = stripe.webhooks.constructEvent(body, sig!, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const { typeCode } = session.metadata as { typeCode: string };

      // In production: update user's purchase status in Supabase
      console.log(`Purchase completed for type: ${typeCode}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 400 });
  }
}
