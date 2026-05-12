import { createTransporter, hasMailerConfig } from "../config/mailer.js";

export async function submitContact(req, res, next) {
  try {
    const { name, email, phone, interest, message } = req.body;
    const payload = { name, email, phone, interest, message, submittedAt: new Date().toISOString() };

    if (hasMailerConfig()) {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        replyTo: email,
        subject: `New ApexFit inquiry: ${interest}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\nMessage: ${message}`
      });
    } else {
      console.log("Contact inquiry received:", payload);
    }

    res.status(201).json({ message: "Thanks. Your free trial request has been received." });
  } catch (error) {
    next(error);
  }
}
