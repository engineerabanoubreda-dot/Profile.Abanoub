import nodemailer from 'nodemailer';
import { env, mailConfigured } from '../config/env.js';
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v, max) => String(v ?? '').trim().slice(0, max);

export async function sendContact(req, res) {
  const { name, email, subject, message, website } = req.body || {};
  if (website) return res.json({ ok: true }); // honeypot
  const d = { name: clean(name, 100), email: clean(email, 150), subject: clean(subject, 150), message: clean(message, 3000) };
  if (!d.name || !emailRe.test(d.email) || !d.message) return res.status(400).json({ error: 'Name, a valid email and a message are required.' });
  if (!mailConfigured) return res.status(503).json({ error: 'Email service is not configured on the server.' });
  try {
    const t = nodemailer.createTransport({ host: env.smtp.host, port: env.smtp.port, secure: env.smtp.port === 465, auth: { user: env.smtp.user, pass: env.smtp.pass } });
    await t.sendMail({ from: `"Portfolio contact" <${env.smtp.user}>`, to: env.contactTo, replyTo: `${d.name} <${d.email}>`, subject: `[Portfolio] ${d.subject || 'New message'}`, text: `From: ${d.name} <${d.email}>\n\n${d.message}` });
    res.json({ ok: true });
  } catch (err) {
    console.error('Mail error:', err.message);
    res.status(502).json({ error: 'Could not send the message. Please try again later.' });
  }
}
