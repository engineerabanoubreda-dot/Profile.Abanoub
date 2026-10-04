# Abanoub Reda Gamil: Portfolio

Personal portfolio built with **Next.js (App Router), TypeScript and Tailwind CSS v4**.
Single page with light/dark mode, a project showcase, and a working contact form (`POST /api/contact`).

No database is used: the contact form sends an email over SMTP, so Prisma/PostgreSQL were deliberately left out.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint` (type-check).

## Editing content

All personal content lives in **`src/data/site.ts`**: profile, skills, projects, training, certificates.
Components in `src/components/` only render that data.

- **Project links:** add `links: [{ label: "Code", href: "https://github.com/..." }]` to a project and a link appears on its card. None are set yet because no repository or demo URLs were provided.
- **CV:** replace `public/Abanoub_Reda_Gamil_CV.pdf` (keep the filename, or update `profile.cv`).
- **Colors / fonts:** CSS variables at the top of `src/app/globals.css`. One accent color, two themes.

## Contact form

`POST /api/contact` accepts JSON `{ name, email, message }`.

| Status | Meaning |
| --- | --- |
| 200 | Sent (or silently dropped if the hidden honeypot field was filled) |
| 400 | Body is not valid JSON |
| 422 | Validation failed, response includes per-field `errors` |
| 429 | More than 5 requests / 10 min from one IP (in-memory limit) |
| 502 | SMTP delivery failed |
| 503 | SMTP is not configured (production only) |

Validation rules are shared by the form and the API in `src/lib/validation.ts`.

Set these in `.env.local` (or your host's environment settings). Never commit them.

| Variable | Purpose |
| --- | --- |
| `CONTACT_TO_EMAIL` | Inbox that receives messages |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | SMTP account. For Gmail use `smtp.gmail.com`, port `465` and an [App Password](https://support.google.com/accounts/answer/185833) |
| `NEXT_PUBLIC_SITE_URL` | Public URL, used for SEO metadata, sitemap and social preview |

In development, if SMTP is not configured, messages are logged to the terminal instead of sent.
The in-memory rate limit is per server instance, which is fine for a personal site.

## Deploying

Works on Vercel out of the box: import the GitHub repo, add the environment variables above, deploy.
Any Node host works too (`npm run build && npm start`).

## Structure

```
src/
  app/            layout, page, API route, sitemap, robots, social image
  components/     Header, Hero, About, Skills, Projects, Education, Certificates, Contact...
  data/site.ts    all content
  lib/            validation + mailer
public/           CV PDF
```

## Notes on the content

Everything shown comes from the CV, LinkedIn export and portfolio PDF. Dataset sizes and R² scores are as written in the portfolio PDF.
