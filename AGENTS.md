<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Landing Page (Public Marketing Site)

Single source of truth for all AI agents working on `landing-page/`.

---

## 0. Operating Principles

- **Read before write**: Inspect components in `src/components/` and `src/app/` before modifying them.
- **Scope discipline**: Solve only what was requested. Avoid arbitrary visual restyling or unnecessary dependency additions.
- **Root-cause over patching**: Fix layout, responsive, or TypeScript errors cleanly at the source.
- **Targeted verification**: Verify changes via `pnpm run build` or `pnpm run lint` inside `landing-page/`.

---

## 1. Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router), React 19, TypeScript.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) + DaisyUI v5 (`daisyui`).
- **Icons**: FontAwesome free (`@fortawesome/fontawesome-free`) using `<i class="fa-solid fa-..."></i>` for consistency with ERP admin panel. Do NOT introduce new icon packages (e.g. lucide, feather, heroicons).
- **Directory Structure**:
  - `src/app/`: App router routes (`page.tsx`), global styles (`globals.css`), and layout/metadata (`layout.tsx`).
  - `src/components/`: Reusable landing page sections (`Hero.tsx`, `Features.tsx`, `Pricing.tsx`, etc.).
  - `public/`: Static assets (images, logos, app showcase mockups).

---

## 2. Mandatory Invariants (Strict Zero-Tolerance)

1. **Component Modularity & Clean Structure**:
   - Keep page sections modular under `src/components/`. Do not bloat `src/app/page.tsx` with inline section layouts.
   - Separate reusable interactive widgets (e.g. `FloatingTelegram.tsx`) into dedicated component files.

2. **Styling & Design System Consistency**:
   - Use Tailwind utility classes and DaisyUI v5 component classes (`btn`, `card`, `badge`, etc.) consistently.
   - Maintain full responsiveness across mobile (`sm`), tablet (`md`), and desktop (`lg`/`xl`) breakpoints.
   - Preserve existing dark/light theme support and color schemes defined in `globals.css`.

3. **SEO, Performance & Metadata**:
   - Keep OpenGraph, Twitter cards, viewport, and title/description metadata up-to-date in `src/app/layout.tsx`.
   - Use Next.js `<Image>` from `next/image` for image assets to prevent layout shifts and optimize bandwidth.
   - Avoid unneeded client-side hooks (`"use client"`) when a component can be rendered as a React Server Component (RSC).

4. **Zero New Dependencies (Ponytail Invariant)**:
   - NEVER run `pnpm add` or `npm install` without explicit user permission.
   - Reuse existing Tailwind, DaisyUI, and FontAwesome primitives.

---

## 3. Targeted Verification

Inside `landing-page/`:
- **Lint Check**: `pnpm run lint`
- **Production Build**: `pnpm run build`
