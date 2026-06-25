# Ekatva — Coming Soon Landing Page

Premium spiritual wellness platform launch page built with React, Vite, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run oxlint |

## Project Structure

```
src/
├── components/
│   ├── common/       # Logo, ornaments, particles, effects
│   ├── layout/       # SEO, Footer
│   ├── sections/     # Page sections (Hero, Services, etc.)
│   └── ui/           # shadcn-style primitives
├── hooks/            # useToast
├── lib/              # Utils, animations, constants
└── theme/            # Color tokens (colors.ts)
public/assets/        # Images and logo
```

## Customization

**Colors:** Edit `src/theme/colors.ts` — all UI colors flow from theme CSS variables.

**Launch date:** Edit `src/lib/constants.ts` (`LAUNCH_DATE`).

**Assets:** Replace files in `public/assets/` with final designs.

## Tech Stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui (Radix primitives)
- React Helmet Async (SEO)
- React Countdown

## Launch

Countdown targets **July 5, 2026 00:00:00 IST**.
