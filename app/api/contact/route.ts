import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Build WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `*New Enquiry from V C M V Website*\n\n` +
        `*Name:* ${name}\n` +
        `*Company:* ${company || "—"}\n` +
        `*Email:* ${email}\n` +
        `*Phone:* ${phone || "—"}\n` +
        `*Service:* ${service || "—"}\n\n` +
        `*Message:*\n${message}`
    );

    const whatsappUrl = `https://wa.me/919962869428?text=${whatsappMessage}`;

    // In a production deployment, you would also send an email here using
    // a service like Resend, Nodemailer, or SendGrid. Example:
    //
    // await sendEmail({
    //   to: "monish@vcmv.in",
    //   subject: `Website Enquiry from ${name}`,
    //   html: `<p>${message}</p>`,
    // });

    return NextResponse.json({
      success: true,
      whatsappUrl,
      message:
        "Enquiry received. You will be redirected to WhatsApp to complete submission.",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry. Please try again." },
      { status: 500 }
    );
  }
}
