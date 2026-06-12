import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["marutidalvi2816@gmail.com"],
      subject: `Portfolio Contact Form - ${name}`,

      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    if (result.error) {
  return NextResponse.json(
    { success: false, error: result.error },
    { status: 500 }
  );
}

   return NextResponse.json({
  success: true,
  id: result.data?.id,
});
  } catch (error) {
    return NextResponse.json(
      { success: false, error },
      { status: 500 }
    );
  }
}