# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jean Hilaire Messeroux built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Deployed on Vercel.

## Commands

- **`pnpm dev`** — Start dev server (localhost:3000)
- **`pnpm build`** — Production build (includes Sentry source map upload)
- **`pnpm lint`** — ESLint with `next/core-web-vitals` config
- **`pnpm start`** — Start production server

Package manager is **pnpm** (not npm or yarn).

## Architecture — Feature-Sliced Design (FSD)

The codebase follows FSD: `app/` is the thin routing layer, `features/` holds domain slices, `shared/` holds cross-feature code.

### Layers

- **`app/`** — Next.js App Router routes only (pages, layouts, metadata, data fetching). Pages are async Server Components that compose feature components. Next.js special files (`page.tsx`, `layout.tsx`, …) keep their required default exports; everything else in the repo uses **named exports only**.
- **`features/<name>/`** — One folder per domain feature:
  - `index.ts` — public API of the feature (the only entry app code should import from)
  - `ui/` — presentation components
  - `logic/` — hooks with business logic (suffix `.hook.ts`)
  - `state/` — React context providers
  - `types/` — TypeScript types for the feature's API data
  - `utils/` — feature-scoped utilities (suffix `.util.ts`)
- **`shared/`** — Reusable, feature-agnostic code:
  - `shared/ui/` — generic components (Input, Skeleton, FadeInImage, GoToTop, ToggleFocus, …)
  - `shared/icons/` — icon barrel: generic icons re-exported from **lucide-react** (aliased to `*Icon` names); custom SVGs only for brand logos lucide doesn't ship (GitHub, LinkedIn, WhatsApp, stack logos, …). Always import icons from `@/shared/icons`.
  - `shared/utils/` — `cn()`, misc helpers, `seo.ts` (`buildMeta`)
  - `shared/api/` — `fetchAPI()` wrapper (ISR, `revalidate: 86400`)

### Features

`theme` (ThemeProvider + switcher), `navigation` (navbar, menu tabs, mobile sidebar + sidebar context, footer), `hero` (header, small header, avatar, medias, CTA), `projects`, `experiences`, `skills`, `educations`, `certifications`, `reviews` (recommendations carousel + review form), `dooke` (app download).

### Import conventions

- **Components are imported via deep paths** (`@/features/projects/ui/projects`), never via feature barrels. Reason: with the App Router, every `'use client'` module a barrel re-exports becomes a client reference for the importing page — importing one component through a barrel measurably bloated route bundles (~+50 kB). This is a deliberate Next.js adaptation of the FSD template.
- **Types** may be imported from the feature barrel with `import type { ... } from '@/features/x'` (erased at compile time).
- Inside a feature, use relative imports (`../types`, `./review-card`)
- Icons always via `@/shared/icons`

### Conventions (from the FSD template)

- Files kebab-case; components PascalCase; hooks `use-*.hook.ts`; utils `*.util.ts`
- Named exports only (except Next.js special files)
- Max ~300 lines per file — split UI/logic when larger (see `features/reviews`)
- Keep components dumb; put logic in `logic/` hooks

### Data Fetching

Pages fetch from an external REST API at `NEXT_PUBLIC_API_URL`/`API_URL` via `shared/api`. Endpoints: `/experiences`, `/projects`, `/educations`, `/reviews`, `/skills`. No CMS — all portfolio data comes from this backend. Remote images are served from Cloudinary and Cloudflare R2 (allowlisted in `next.config.js`).

### Styling

- Tailwind CSS with class-based dark mode (`dark` class on `<html>`); content globs cover `app/`, `features/`, `shared/`
- CSS variables for brand colors in `app/globals.css` (`--brand-color: #8b55f5`, `--brand-color-2: #f16fa1`)
- `cn()` utility (clsx + tailwind-merge) for conditional class merging
- framer-motion is loaded via `LazyMotion` + `m` with `domMax` features (layout animations) — never import `motion` directly

### Theme System

`features/theme/state/theme-context.tsx` reads localStorage and system preference, toggles `dark` class on `<html>`. Client component.

### Error Tracking

Sentry across client, server, and edge runtimes (`sentry.*.config.ts`), `tracesSampleRate: 0.2` everywhere, no session replay. Tunnel route at `/monitoring` bypasses ad blockers.

## Lint Rules

ESLint enforces `no-console: error` and `no-unused-vars: error` — do not leave `console.log` or unused variables in code.

## Path Alias

`@/*` maps to the project root (e.g., `@/features/...`, `@/shared/...`).

## Environment Variables

See `.env.template` — requires `NEXT_PUBLIC_API_URL` for the backend API.
