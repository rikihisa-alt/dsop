import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { typeCode } = (await req.json()) as { userId?: string; typeCode: string };

    // Stripe integration - activate when environment variables are set
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey || stripeKey === "your-stripe-secret-key") {
      return NextResponse.json(
        { error: "Stripe is not configured. Set STRIPE_SECRET_KEY in environment variables." },
        { status: 503 }
      );
    }

    const { default: Stripe } = await import("stripe");
    const stripe = new Stripe(stripeKey);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_URL}/result/${typeCode}/detail?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/result/${typeCode}`,
      metadata: { typeCode },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
