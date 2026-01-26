import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Nirvaana Website" <${process.env.MAIL_USER}>`,
      to: "nirvaanabysunrise@gmail.com",
      replyTo: email,
      subject: "Enquiry through form",
      html: `
        <h2>New Website Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return new Response("Mail failed", { status: 500 });
  }
}
