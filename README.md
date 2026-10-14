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

## Adding your resume PDF

1. Export your resume as PDF.
2. Save it as **`public/resume.pdf`** (overwrites nothing — the file doesn't exist yet).
3. Both “Download Resume” buttons (hero + resume section) point at `/resume.pdf` via
   `profile.resumePdfPath` and will start working automatically.
4. Until the file exists, the Resume section shows a setup note instead of a dead button.

## Contact form status

No form backend is connected. Submitting the form validates the fields and opens the
visitor's own email app (`mailto:`) with the message pre-filled. To use a real backend
later (e.g. Formspree, Web3Forms, or a serverless function), wire it up in
`src/components/Contact.jsx` → `handleSubmit`.

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
