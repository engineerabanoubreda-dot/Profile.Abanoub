# Abanoub Reda Gamil — Portfolio

React (Vite) portfolio, published on GitHub Pages. A small Express API for the contact form lives in `backend/` and is optional; the site works fully without it.

## Repository structure
```
.
├── .github/workflows/deploy.yml   # builds frontend/ and deploys to GitHub Pages
├── frontend/
│   ├── index.html                 # Vite entry point
│   ├── vite.config.js             # base: './' (works under /<repo-name>/)
│   ├── public/                    # favicon, og-image, robots.txt, Abanoub_Reda_CV.pdf
│   └── src/ (components, pages, styles, assets, data/content.js)
├── backend/                       # optional Express contact API (NOT hosted on GitHub Pages)
├── .env.example · .gitignore · package.json · README.md
```
All text, projects and links are edited in `frontend/src/data/content.js`.

## Before you push
Put your CV at `frontend/public/Abanoub_Reda_CV.pdf`. Without it, the Download CV buttons return a 404.

## Create the repository and push
1. On github.com click **New repository**. Name it, for example, `portfolio`. Leave it **Public** and do not add a README.
2. In the project folder run:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/engineerabanoubreda-dot/portfolio.git
git push -u origin main
```
(Replace `portfolio` if you chose another name.)

## Enable GitHub Pages
1. Open the repository, then **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open the **Actions** tab. The "Deploy to GitHub Pages" workflow runs on every push to `main` (the first push may have run before you enabled Pages; if so, open the workflow and click **Re-run all jobs**, or use **Run workflow**).

## Find the public URL
After the workflow turns green, the URL is shown in **Settings → Pages**, and on the `deploy` job in the Actions run. The format is:

```
https://<github-username>.github.io/<repository-name>/
```
For the repository above: `https://engineerabanoubreda-dot.github.io/portfolio/`. A repository named `engineerabanoubreda-dot.github.io` is served at the root `https://engineerabanoubreda-dot.github.io/` instead.

## Contact form
- Default (GitHub Pages): the form opens the visitor's email app with the message prefilled, addressed to the email in `content.js`.
- Optional API: deploy `backend/` to Render, Railway or similar, set its environment variables (see `backend/.env.example`), then add a repository variable **Settings → Secrets and variables → Actions → Variables → `VITE_API_URL`** with the API's URL and re-run the workflow. If the API is down, the form falls back to the email app automatically.

## Local development
```bash
npm run install:all
npm run dev:frontend    # http://localhost:5173
npm run dev:backend     # optional, http://localhost:5000
npm run build           # production build in frontend/dist
```
Never commit `.env` files; only `.env.example` files are tracked.

## Notes
- The site is a single page with in-page anchors (#about, #projects…), so there is no client-side routing to break on refresh.
- Optionally replace `frontend/public/og-image.svg` with a 1200×630 PNG and set absolute `og:image` / `og:url` tags in `frontend/index.html` once your URL is known.
