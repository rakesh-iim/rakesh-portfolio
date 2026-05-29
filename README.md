# Rakesh Kumar Behera — Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-fde68a.svg?style=flat-square)](LICENSE)
[![Built with Vite](https://img.shields.io/badge/built%20with-Vite-34d399?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18-fbbf24?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-r169-34d399?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-fbbf24?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-fde68a?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-34d399?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

A 3D animated, glassmorphism portfolio site built with React, Vite, React Three Fiber, Framer Motion, and Tailwind CSS — minimal executive aesthetic in emerald + amber.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Customizing content

All profile content lives in [`src/data/profile.ts`](src/data/profile.ts).
Edit that single file to update text, experience, projects, testimonials, skills, education, or certifications.

## Sections

- **Hero** — name, headline, live availability pill, contact chips, key metrics
- **About** — bio + three pillars (Strategy, Data, Leadership)
- **Experience** — vertical timeline across Mr Gardenr, IIM Sambalpur, SunsysTechsol, TCS, and IGIT
- **Projects** — selected case competitions, club events, enterprise work
- **Skills** — five grouped cards: Strategy, Operations, Analytics, Leadership, Technical
- **Education** — IIM MBA, IGIT B.Tech, school
- **Certifications** — Azure, Data Analyst, OCI, PCAP, AutoCAD, Lean Six Sigma
- **Testimonials** — draft placeholders, ready to fill in
- **Contact** — email and LinkedIn CTAs

## Stack

- **Vite + React 18 + TypeScript** — fast modern build
- **React Three Fiber + Drei** — 3D scene with refracting glass shapes
- **Framer Motion** — entry and scroll animations
- **Tailwind CSS** — glassmorphism design system
- **Lucide React** — icon set

## Deploy

```bash
npx vercel
```

Or drop the contents of `dist/` onto Netlify, Cloudflare Pages, or any static host.

## License

[MIT](LICENSE) © Rakesh Kumar Behera
