import 'dotenv/config';
export const env = {
  port: Number(process.env.PORT) || 5000,
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  smtp: { host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT) || 587, user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  contactTo: process.env.CONTACT_TO
};
export const mailConfigured = Boolean(env.smtp.host && env.smtp.user && env.smtp.pass && env.contactTo);
