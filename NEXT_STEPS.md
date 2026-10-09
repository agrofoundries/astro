# NEXT_STEPS.md — PRECASTPRO Website

## Priority Queue

### Immediate (Phase 1 completion)
1. ✅ Wait for `create-next-app` to complete
2. Move logo to `public/images/logo.jpg`
3. Inspect generated `package.json` — verify Next.js, React, TypeScript versions
4. Inspect `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`
5. Inspect scaffolded `app/` directory
6. Run `npm run dev` and confirm successful start

### Next (Phase 2 — Design System)
1. Install `lucide-react`
2. Configure `next/font/google` for Manrope + Inter
3. Define CSS variables in `globals.css` with brand tokens
4. Extend Tailwind config with brand colors, spacing, fonts
5. Create `docs/DESIGN_SYSTEM.md`
6. Build reusable UI components: Button, SectionHeading, Accordion

### Then (Phase 3 — Foundation)
1. Implement root `layout.tsx` with fonts, metadata, global structure
2. Implement header component
3. Implement footer component
4. Verify dev server and production build

### Following (Phase 4–6 — Layout + Homepage)
1. Build header with desktop + mobile navigation
2. Build 20-section homepage following the business story
3. Generate/source imagery for each section

### Later (Phase 7–10)
1. Build subpages (Products, Applications, etc.)
2. Build Request a Quote form with validation
3. Responsive QA at all breakpoints
4. Production build, linting, type checking
5. Final handoff report

## Blockers
- None identified yet
