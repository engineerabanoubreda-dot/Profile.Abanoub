import nodemailer from "nodemailer";
import type { ContactInput } from "./validation";

export function isMailConfigured() {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.CONTACT_TO_EMAIL,
  );
}

/** Remove line breaks so user input can never inject extra mail headers. */
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function sendContactEmail({ name, email, message }: ContactInput) {
  const port = Number(process.env.SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Portfolio contact form" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: oneLine(email),
    subject: `Portfolio message from ${oneLine(name)}`,
    text: `Name: ${oneLine(name)}\nEmail: ${oneLine(email)}\n\n${message}`,
  });
}
