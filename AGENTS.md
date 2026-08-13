# Repository Guidelines

## Overview

This is a Next.js App Router site for Define Skin, Hair & Laser Clinic. It uses
React, TypeScript, CSS Modules, and centralized clinic copy in
`content/clinic.ts`.

## Project layout

- `app/` contains routes, the root layout, and global styles.
- `components/` contains reusable UI components and their colocated CSS Modules.
- `content/clinic.ts` is the source of truth for clinic names, services, contact
  information, doctors, and other business copy.
- `public/` contains images and static assets.

## Development

Use Node.js 20.11.1 (or another version compatible with `>=20.9.0`).

```bash
npm install
npm run dev
npm run lint
npm run build
```

Run `npm run lint` after code changes. Run `npm run build` for changes that
affect routing, metadata, imports, types, or production rendering.

## Change conventions

- Use TypeScript and function components.
- Prefer CSS Modules for component-specific styling; reserve `app/globals.css`
  for global tokens, resets, and site-wide rules.
- Keep each component's styles in its colocated `*.module.css` file.
- Reuse existing components and design patterns before adding new abstractions.
- Make responsive behavior intentional, including the mobile booking bar where
  relevant.
- Reference public assets with root-relative paths such as `/logo.jpg`.
- Keep user-facing clinic data in `content/clinic.ts`; do not duplicate phone
  numbers, addresses, doctor details, or service labels across components.

## Quality and safety

- Preserve existing routes: `/`, `/home`, `/services`, `/about`,
  `/book-appointment`, and `/contact-us`.
- Maintain accessible semantic HTML, keyboard-friendly controls, meaningful alt
  text, and visible focus states.
- Avoid unrelated formatting, dependency upgrades, or generated-file changes.
- Do not overwrite user changes already present in the working tree.
