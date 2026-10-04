import { useState } from 'react';
import { profile } from '../data/content.js';
const API = import.meta.env.VITE_API_URL;

function mailtoHref(data) {
  const body = encodeURIComponent(`${data.message}\n\n${data.name} (${data.email})`);
  return `mailto:${profile.email}?subject=${encodeURIComponent(data.subject || 'Portfolio message')}&body=${body}`;
}

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle', msg: '' });
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.website) return; // honeypot
    // Works without a backend: fall back to the visitor's mail app.
    if (!API) {
      window.location.href = mailtoHref(data);
      return;
    }
    setStatus({ state: 'sending', msg: 'Sending…' });
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    try {
      const res = await fetch(`${API}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), signal: ctrl.signal });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || 'Request failed');
      form.reset();
      setStatus({ state: 'ok', msg: 'Message sent. I will reply by email.' });
    } catch (err) {
      // API unavailable: hand the message over to the visitor's email app instead.
      setStatus({ state: 'error', msg: 'The message service is not reachable right now. Opening your email app instead.' });
      window.location.href = mailtoHref(data);
    } finally {
      clearTimeout(timer);
    }
  }
  return (
    <section className="section" id="contact" aria-labelledby="contact-h">
      <div className="wrap two-col">
        <div>
          <h2 id="contact-h">Contact</h2>
          <p>Open to internships and junior roles in data, machine learning and development.</p>
          <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        </div>
        <form onSubmit={onSubmit}>
          <label>Name<input name="name" required maxLength="100" autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required maxLength="150" autoComplete="email" /></label>
          <label>Subject<input name="subject" maxLength="150" /></label>
          <label>Message<textarea name="message" rows="5" required maxLength="3000" /></label>
          <input name="website" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />
          <button className="btn primary" type="submit" disabled={status.state === 'sending'}>Send message</button>
          <p role="status" className={`form-msg ${status.state}`}>{status.msg}</p>
        </form>
      </div>
    </section>
  );
}
