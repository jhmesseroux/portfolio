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

## Architecture

### Routing (App Router)

- `app/(portfolio)/` — Route group for main portfolio pages (home, projects, experiences, skills)
- `app/dooke/` — Dooke app landing and download pages
- `app/mentorship/` — Mentorship page
- `app/review/` — Reviews page
- `app/api/` — API routes

### Data Fetching

Pages are **async Server Components** that fetch from an external REST API at `NEXT_PUBLIC_API_URL`. Endpoints consumed: `/experiences`, `/projects`, `/educations`, `/reviews`, `/skills`. There is no CMS or local content — all portfolio data comes from this backend.

### Key Directories

- `components/portfolio/` — Portfolio-specific components (Header, Projects, Experiences, Footer)
- `components/global/` — Reusable components (GoToTop, Avatar, FadeInImage, Skeleton)
- `components/icons/` — Custom SVG icon components (socials/, coding/)
- `context/` — React Context providers (ThemeContext for dark/light mode)
- `interfaces/` — TypeScript type definitions for API responses
- `helpers/` — Utility functions (`cn`, `copyToClipboard`, `openDownloadLink`, `estimateReadingTime`)

### Styling

- Tailwind CSS with class-based dark mode (`dark` class on `<html>`)
- CSS variables for brand colors defined in `app/globals.css` (`--brand-color: #8b55f5`, `--brand-color-2: #f16fa1`)
- `cn()` utility (clsx + tailwind-merge) for conditional class merging
- CSS modules used sparingly (e.g., SquareLoading)

### Theme System

`ThemeContext` reads localStorage and system preference via `useLayoutEffect`, toggles `dark` class on `<html>`. Client component (`'use client'`).

### Error Tracking

Sentry is integrated across client, server, and edge runtimes. Config in `sentry.*.config.ts` files. Tunnel route at `/monitoring` bypasses ad blockers.

## Lint Rules

ESLint enforces `no-console: error` and `no-unused-vars: error` — do not leave `console.log` or unused variables in code.

## Path Alias

`@/*` maps to the project root (e.g., `@/components/...`, `@/helpers/...`).

## Environment Variables

See `.env.template` — requires `NEXT_PUBLIC_API_URL` for the backend API.
