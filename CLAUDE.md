# KGS React Rebuild — Project Context

This file is auto-loaded into every Claude Code session opened in this folder.
It exists so a new session (or a teammate) has the same context this one built
up, without re-deriving it. See `MIGRATION.md` for live progress; this file is
for things that don't change day to day.

## What this project is

A from-scratch React rebuild of the Kotnani Global Solutions (KGS) marketing
site, currently a 70-page static HTML/CSS/JS site living at `../kgs-react`
(sibling folder — untouched, kept as the reference source of truth for content,
copy, and current behavior). This is explicitly a **learning project**: the
owner knows React fundamentals, HTML/CSS/JS, Tailwind basics, and Git, but not
yet a production-scale React architecture. The working style is Claude
explains and guides step by step; the owner writes the application code
themselves. Claude may draft project documentation/config (like this file) but
should not write app code into `src/` unless explicitly asked.

## Reference material

- **Original static site:** `../kgs-react` (relative to this folder) — 70 HTML
  pages, one 15k-line CSS file, ~1.3k-line JS file. Read from here for exact
  copy, class names, and current behavior when converting a page.
- **Migration audit artifact:** https://claude.ai/code/artifact/a5ae529c-221d-4d94-b7b4-63339e7a6d55
  — full read-only inventory of the static site: page-by-page layout groups,
  reusable-component candidates, CSS/JS/SEO findings, architecture comparison.
  Read this before re-deriving anything about the old site's structure.
- **Figma design file:** https://www.figma.com/design/1g2nA2sE3aJc2UelQQSuiV/KGS-for-Developer?node-id=577-221&p=f&t=n5wqZtSLXpDZm9bJ-0
  — 22 layouts driving the visual redesign (see mapping below).

## Tech stack decision

**Vite + React + Tailwind v4 + React Router** — chosen over Next.js.
Next.js was the audit's SEO-driven recommendation (native static
pre-rendering for 70+ pages), but this project prioritizes learning the
underlying patterns by hand — routing, data-driven templates, component
boundaries — before a framework does it automatically. Revisit this decision
once the architecture feels natural; moving to Next.js later, or adding
prerendering to this Vite setup, both remain open.

- Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.js` /
  `postcss.config.js` needed — v4 scans the project automatically)
- React Router will be added and wired by hand (not yet installed) —
  deliberately, so routing concepts are learned rather than hidden in a
  framework's folder convention
- The old site's PHP contact form backend (`contact-handler.php`) stays as-is
  regardless of frontend framework — a client-only React app cannot send email
  itself. The new contact form should POST to the same endpoint contract
  (`FormData` → JSON `{success, message, errors?}`) unless told otherwise.

## The 70-page site, in 20 confirmed layout groups

Full detail in the audit artifact (link above). Summary — 6 high-volume
templates cover 60 pages, the rest are one-off company/legal/system pages:

| Layout | Pages | Notes |
|---|---|---|
| Home | 1 | |
| Service detail | 14 | |
| Industry detail | 10 | |
| Case-study detail | 13 | |
| Insight article ("Blog" in Figma) | 8 | more categories exist as empty folders — content still being written |
| Listing pages | 4 | services/industries/case-studies/insights index pages |
| Product detail | 4 | confirmed one shared template via Figma's single `Product-Page` frame |
| About | 1 | uses the transparent/overlay header despite being a "company" page — confirmed intentional, keep as coded |
| 9 one-off company pages | 9 | careers, certifications, CSR, customers, locations, management-team, news-and-events, our-work-culture, testimonials — each genuinely different, not one shared template |
| Legal | 2 | privacy-policy, terms-and-conditions — these two *do* share one template |
| 404, Sitemap | 2 | simplest pages on the site |
| Contact | 1 | canvas CAPTCHA + office cards, bespoke |

**New page, not a migration:** Figma includes `Products-Home`, a products
listing page that doesn't exist on the live site today — needs new copy, not
extraction from existing HTML.

**Unconfirmed with whoever owns the Figma file:** legal pages, 404, and
sitemap.html have no matching Figma frame — may be intentionally out of scope
for the visual redesign (kept simple), unconfirmed.

## Reusable components already identified in the old site

(Confirm each still makes sense as its own component before building — this
list is from reading the old HTML, not a plan to copy classes/markup verbatim.)

- **Header / Footer / mobile menu / search overlay** — identical across every old page bar path depth
- **PageHero** (eyebrow tag + H1 + one-line description, sometimes a stat row or bg-color override) — reappears under 7+ different class names in the old site
- **FAQAccordion** — single-open accordion, appears on service/industry/product pages
- **TabPanel** — click-to-swap content, same mechanic used for industry AI-capability tabs, product benefit tabs, product platform tabs
- **StatCounter** (count-up on scroll) — was hand-duplicated 4 separate times in the old JS; one component + hook fixes that
- **TestimonialsSlider**, **CaseStudyCarousel**, **ClientLogoMarquee** — each appears on 2-3 page types
- **Card family** (service / industry / case-study / blog / job) — same shape (image, tag, title, link), different content
- **"KGS Advantages" promo card** — literally identical markup on 2 old pages (certifications, customers)

## Known content/data issues in the source site (carry decisions forward, don't silently fix or silently copy)

- `management-team.html`: only the CEO is live; a 4-person leadership grid is
  fully coded but commented out — decide whether to publish the rest
  before building the Our-Team template
- `testimonials.html`: ships a static 6-card grid; a full filter+pagination
  system exists but is disabled in both markup and script — decide rebuild vs. retire
- Old `contact-handler.php` emails a hardcoded personal Gmail address, not a
  business one — flag for whoever owns that file, unrelated to this rebuild
- No `sitemap.xml` exists anywhere in the old site; only a human-readable
  `sitemap.html` — generate a real one as part of this rebuild
- JSON-LD/schema only exists on 8 of 70 old pages (the finished insight
  articles) — treat structured data as new work to add per template, not
  something to preserve as-is
- Old asset folder has known messes not to carry forward as-is:
  `images/dummy/` mirrors the whole real asset tree (stray staging copy),
  `images/industires/` is a sitewide typo, `images/client/` vs
  `images/clients/` duplicate in purpose
