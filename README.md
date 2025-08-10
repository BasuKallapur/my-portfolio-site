# Basavaraj C Kallapur — Portfolio

A modern, responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. It showcases profile, experience, projects, skills, and a contact form with smooth animations via Framer Motion.

## Tech Stack
- React 18 + TypeScript
- Vite 5 (bundler)
- Tailwind CSS 3 (utility-first styling)
- Framer Motion (animations)
- Lucide React (icons)
- ESLint (linting)

## Features
- Responsive, dark-mode-ready UI
- Sections: Header, Hero, About, Experience & Education, Projects, Skills, Contact, Footer
- Project modal with details and technology badges
- Smooth, GPU-accelerated animations
- Accessible anchor navigation and semantic HTML

## Getting Started

### Prerequisites
- Node.js 18 or newer
- npm (comes with Node.js)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Vite will print a local URL (default `http://localhost:5173`).

### Lint
```bash
npm run lint
```

### Production Build
```bash
npm run build
```
Artifacts are emitted to the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## Project Structure (high level)
```
my-portfolio-site/
├─ public/
│  ├─ profile-latest.jpeg
│  └─ imageOfMe.jpeg
├─ src/
│  ├─ components/
│  │  ├─ Header.tsx
│  │  ├─ Hero.tsx
│  │  ├─ About.tsx
│  │  ├─ Experience.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Skills.tsx
│  │  ├─ Contact.tsx
│  │  └─ Footer.tsx
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ index.html
├─ vite.config.ts
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ tsconfig*.json
```

## Configuration Notes
- Tailwind is configured with `darkMode: 'class'` and scans `index.html` and `src/**/*.{js,ts,jsx,tsx}`.
- Static assets under `public/` are served from the site root (e.g., `/profile-latest.jpeg`).

## Deploying to Vercel
You can host this as a static site on Vercel.

1. Push the repository to GitHub/GitLab/Bitbucket.
2. In the Vercel dashboard, create a New Project and import this repository.
3. Framework Preset: **Vite** (or **Other** if not detected).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Start the deployment. Vercel will build and serve the static output.

No server-side code is required. The contact form currently logs to the console in development; integrate an API or service (e.g., EmailJS, serverless function) if you need message delivery.

## Accessibility & SEO (Quick Tips)
- Add/update meta description, Open Graph, and Twitter cards in `index.html` as needed.
- Ensure link and button texts remain descriptive.
- Keep color contrast sufficient in both light and dark modes.

## License
All rights reserved by the project owner unless stated otherwise. 