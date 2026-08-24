# Migration Progress

Living tracker. Update this whenever work stops, so picking the project back
up — in a new session, after a break, or as a different person — means
reading this file, not re-deriving status from scratch. See `CLAUDE.md` for
stable project context (tech stack, architecture, reference links).

## Current phase

**Phase 2 — Project setup** (in progress)

## Current task

Install and wire up React Router — Tailwind v4 is done.

## Completed

- [x] Step 1 audit of the old 70-page static site at `../kgs-react`
      (full report: see artifact link in `CLAUDE.md`)
- [x] Reconciled the audit's 20 confirmed layout groups against the 22 Figma
      layouts — 21 match existing page types, 1 (`Products-Home`) is new,
      4 old page types (legal x2, 404, sitemap) have no matching Figma frame yet
- [x] Framework decision: Vite + React + Tailwind v4 + React Router
      (chosen over the audit's Next.js recommendation, for learning purposes —
      see `CLAUDE.md` for the reasoning)
- [x] Vite project scaffolded at `kgs-web` (React 19, JavaScript not
      TypeScript, ESLint) — sibling folder to `kgs-react`, not nested inside it

## Remaining — immediate next steps, in order

1. [x] Install and wire up Tailwind v4 (`@tailwindcss/vite` plugin in
       `vite.config.js`, `@import "tailwindcss";` in `src/index.css`) —
       confirmed via file check
2. [ ] Install `react-router-dom`, wire up the first routes by hand
3. [ ] Build Header + Footer components (confirmed identical across all old
       pages except path depth — lowest-risk starting point)
4. [ ] Pick and convert one representative page as the learning example —
       recommended: a service detail page (highest leverage, 14 pages
       depend on getting this template right)
5. [ ] Generalize into a reusable `ServicePage` template + `content/services/`
       data files, then repeat for industry/case-study/insight templates

## Pages converted

0 of 70

## Components built

None yet

## Templates built

None yet

## Known issues (from the audit — decisions still needed, see `CLAUDE.md` for detail)

- management-team.html: only 1 of 5 team members live in the old site — publish rest or not?
- testimonials.html: disabled filter/pagination system — rebuild or retire?
- `Products-Home` in Figma has no old-site content to migrate — needs new copy
- Legal pages, 404, sitemap.html not confirmed in Figma scope — ask design owner

## SEO issues carried from the old site (address during content/schema work, not urgent now)

- No `sitemap.xml` anywhere in the old site
- JSON-LD only on 8 of 70 old pages
- No Organization/WebSite/FAQPage/Service schema anywhere in the old site

## Next step

Install `react-router-dom` and wire up the first routes (item 2 above).
