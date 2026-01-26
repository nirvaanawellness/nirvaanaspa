import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const phone = formData.get("phone");
    const languages = formData.get("languages");
    const experience = formData.get("experience");
    const role = formData.get("role");
    const file = formData.get("cv") as File;

    if (!file) {
      return new Response("No CV uploaded", { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Nirvaana Careers" <${process.env.MAIL_USER}>`,
      to: "nirvaanabysunrise@gmail.com",
      subject: `New Job Application – ${role}`,
      html: `
        <h2>New Career Application</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Languages:</b> ${languages}</p>
        <p><b>Experience:</b> ${experience} years</p>
        <p><b>Role Applied For:</b> ${role}</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        },
      ],
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("CAREER MAIL ERROR:", error);
    return new Response("Failed to send CV", { status: 500 });
  }
}
