<img src="./spiderman-banner.gif" width="100%" alt="Spider-Man Banner" />

<img height="120" src="https://img.shields.io/badge/TECH_STACK-111827?style=for-the-badge" alt="TECH STACK" />

![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Android Studio](https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=androidstudio&logoColor=white)
![Apache](https://img.shields.io/badge/Apache-D22128?style=for-the-badge&logo=apache&logoColor=white)
![XAMPP](https://img.shields.io/badge/XAMPP-FB7A24?style=for-the-badge&logo=xampp&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

# Jandel Lobos — Developer Portfolio

Bold, dark, single-page resume & portfolio site. Built with **React + Vite + Tailwind CSS v4**,
**Lucide icons**, and lightweight **Framer Motion** reveals. Ready for **Vercel** deployment.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Editing your content (one file)

Almost everything editable lives in **`src/data/portfolio.js`**:

| What | Where |
|---|---|
| Name, title, bio, email, phone, location | `profile` |
| Nav links | `navLinks` |
| Skill groups | `skillGroups` |
| Projects (leave `live`/`source` as `""` to hide that button) | `projects` + `projectFilters` |
| Education / experience (newest first) | `education`, `experience` |
| Certifications (section auto-hides when empty) | `certifications` |
| GitHub / LinkedIn (link auto-hides while empty) | `socials` |
| Contact form endpoint (empty = mailto fallback) | `contactForm` |
| Per-project `role` / `highlights` for the case-study modal | `projects` |
| WhatsApp number, digits only | `profile.whatsapp` |
| FAQ entries (edit answers to match reality) | `faqs` |
| Real testimonials only (section hides while empty) | `testimonials` |

## Case-study modals

Every project card has a **Details** button opening an accessible dialog
(Escape/backdrop close, focus management, scroll lock). The modal shows
confirmed data plus optional `role` and `highlights` fields — add those to
any project in `src/data/portfolio.js` and the sections appear automatically.

## Share image & SEO

- `public/og-image.png` (1200×630) is referenced by Open Graph / Twitter
  meta in `index.html`. Regenerate it if you rebrand.
- `public/robots.txt` + `public/sitemap.xml` use the live Vercel URL —
  update them if you attach a custom domain.
- `<Analytics />` (`@vercel/analytics`) is mounted in `src/App.jsx`.
  Enable **Web Analytics** in the Vercel project dashboard to see traffic.

## Adding your resume PDF

1. Export your resume as PDF.
2. Save it as **`public/resume.pdf`** (overwrites nothing — the file doesn't exist yet).
3. Both “Download Resume” buttons (hero + resume section) point at `/resume.pdf` via
   `profile.resumePdfPath` and will start working automatically.
4. Until the file exists, the Resume section shows a setup note instead of a dead button.

## Contact form status

The form works in two modes, controlled by `contactForm.endpoint` in
`src/data/portfolio.js`:

- **Empty (default):** validates the fields and opens the visitor's own
  email app (`mailto:`) with the message pre-filled. Honest fallback.
- **With an endpoint:** POSTs name/email/message as JSON and shows
  sending / success / error states. To enable it, create a free form at
  [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com)
  and paste the endpoint URL into `contactForm.endpoint`.

## Project structure

```
public/                 # favicon, logo, resume.pdf (you add this)
src/
  assets/               # profile.jpg, logo
  components/           # Header, Hero, About, Skills, Projects, ProjectCard,
                        # Resume, Contact, Footer, SectionHeading, Reveal
  data/portfolio.js     # ALL editable content
  App.jsx               # section composition
  index.css             # Tailwind v4 theme + fonts + a11y base styles
  main.jsx
index.html              # title, meta, Open Graph
vercel.json             # Vercel build config
```

## Deployment (Vercel)

1. Push this folder to a GitHub repo.
2. In Vercel: **New Project → Import** the repo (framework preset: Vite).
3. Build command `npm run build`, output directory `dist/` (already in `vercel.json`).
4. Deploy. Update `siteMeta.url` in `src/data/portfolio.js` with the live URL.

## Notes

- Only confirmed details are shown: no invented credentials, metrics, or testimonials.
- Project links render only when a real URL exists in the data file.
- Reduced-motion preferences, keyboard focus states, and semantic landmarks are built in.
