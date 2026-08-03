# mattmulenga.com

Personal site for Matthew Mulenga — software engineer, Saskatoon SK.

React 18 + Vite + Tailwind CSS v4. Single static page, no backend.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

Deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Where things are

| Path | What |
| --- | --- |
| `src/data/content.js` | Every piece of copy on the site. Edit here, not in components. |
| `src/styles/main.css` | Tailwind `@theme` tokens, base styles, the few extracted component classes. |
| `src/components/` | One component per page section. Presentational only. |
| `src/App.jsx` | Page composition and section order. |
| `public/` | Static assets — résumé PDF and OG image go here. |

## Before launch

Add the résumé PDF, add a real GitHub URL, and write the linked case study.
