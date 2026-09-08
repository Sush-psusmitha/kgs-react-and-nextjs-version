# Migration Progress

Living tracker. Update this whenever work stops, so picking the project back
up — in a new session, after a break, or as a different person — means
reading this file, not re-deriving status from scratch. See `CLAUDE.md` for
stable project context (tech stack, architecture, reference links).

## Current phase

**Phase 7 — Service detail template** (schema confirmed against 4 real
pages, not started building yet)

## Current task

Build `ServicePage.jsx` + wire the `/services/:slug` dynamic route, starting
with just Hero + Breadcrumb + Intro using `business-process-automation`'s
real data, before adding the remaining 8 sections one at a time.

## Service page template — confirmed schema

Checked section classes across all 14 service `.html` files (not just one) —
100% identical section set. Full read of one page end-to-end (previously
only read 950 of 1332 lines — the missing back third turned out to contain
two whole sections). **11 sections total**, not the 7 originally assumed:

Hero → Breadcrumb → Intro → Tech-capabilities grid (8 cards) → Platform/
partner logos → "Why Us" slider (8 cards) → Case studies carousel →
Testimonials slider → FAQ accordion → "Our Blogs" grid (3 related articles)
→ embedded contact form (name/email/country/phone/service/message + canvas
CAPTCHA, posts to `contact-handler.php`).

Shared vs. per-service, confirmed by diffing 4 pages
(business-process-automation, cybersecurity, healthcare, generative-ai):

- **Per-service** (real data files needed): Hero copy, Intro copy+image,
  the 8 tech-capability cards, the 8 "Why Us" cards, FAQ, testimonials
  (confirmed **not** shared — each page's quotes reference that specific
  service's domain, e.g. cybersecurity's mention "cybersecurity posture")
- **Shared, no per-page data needed**: Platform/partner logos (identical
  10-logo list on all 4 pages checked — same AWS/Microsoft/Oracle/SAP/etc.
  set), the contact form component
- **Shared component + shared filtered dataset**: Case studies carousel —
  extracted `content/caseStudies.js` (all 13 real case studies, tagged by
  `services`/`industries` slug arrays) so Home and every service/industry
  page filter from one source instead of each hardcoding its own slide
  list. Home was refactored to pull from this instead of inline images.
- **Flagged, not yet decided**: "Our Blogs" grid — the automation page
  shows *cybersecurity* articles, looks like unfinished/mismatched content
  in the old site rather than something to faithfully reproduce

## Proposed build order for the service template

1. [x] Extract `content/caseStudies.js`, refactor Home to use it
2. [x] Route + `ServicePage` shell: Hero + Breadcrumb + Intro, using
       `business-process-automation`'s real data — confirmed working.
       **Gotcha hit and fixed**: `src/content/services.js` (flat nav list)
       and `src/content/services/index.js` (slug→detail lookup) collided —
       `import from '../content/services'` resolves to the `.js` file over
       the same-named folder, so `ServicePage` was silently indexing the
       wrong thing (an array, with a string key — always `undefined`,
       so *every* slug fell through to `NotFound`, including the one with
       real data). Fixed by renaming the detail folder to
       `content/servicesDetail/`. Worth remembering: never let a file and
       a folder share a name in the same directory.
3. [ ] Tech-capabilities grid + Platform logos (shared component)
4. [ ] "Why Us" slider + Case studies carousel (filtered from shared data)
5. [ ] Testimonials + FAQ
6. [ ] Contact form — its own focused piece (canvas CAPTCHA, validation,
       same `contact-handler.php` contract as the old site)
7. [ ] "Our Blogs" — last, pending the content-mismatch decision above

## Completed

- [x] Step 1 audit of the old 70-page static site at `../kgs-react`
      (full report: see artifact link in `CLAUDE.md`)
- [x] Reconciled the audit's 20 confirmed layout groups against the 22 Figma
      layouts — 21 match existing page types, 1 (`Products-Home`) is new,
      4 old page types (legal x2, 404, sitemap) have no matching Figma frame yet
- [x] Framework decision: Vite + React + Tailwind v4 + React Router
      (chosen over the audit's Next.js recommendation, for learning purposes —
      see `CLAUDE.md` for the reasoning). Next.js concepts to learn later,
      once this project's patterns feel solid, are listed in `CLAUDE.md`.
- [x] Vite project scaffolded at `kgs-web` (React 19, JavaScript not
      TypeScript, ESLint) — sibling folder to `kgs-react`, not nested inside it
- [x] Tailwind v4 wired in (`@tailwindcss/vite` plugin, `@import "tailwindcss"`)
- [x] KGS brand design tokens added via Tailwind's `@theme` in `src/index.css`:
      `--color-kgs-primary` (#F8485E), `--color-kgs-footer-bg` (#28262B),
      `--font-heading`/`--font-body` (Montserrat, via Google Fonts link in
      `index.html` — old site self-hosts `.ttf` files instead, revisit if a
      performance pass matters later), and a custom `--breakpoint-nav: 1100px`
      (the header's desktop/mobile switch needed more room than Tailwind's
      default `md` breakpoint gives it)
- [x] React Router installed and wired: `Layout.jsx` (`<Outlet />` shell),
      `Home.jsx` and `NotFound.jsx` as first routes in `App.jsx`
- [x] **Header** (`components/layout/Header.jsx`) — full rebuild, not a
      placeholder: transparent-over-hero by default, flips to solid
      white + dark logo + dark text when a dropdown opens OR the page is
      scrolled (`isSolid = isScrolled || openMenu !== null`, one derived
      value driving header bg/text/logo). All 4 dropdowns are real
      `position: fixed; width: 100vw` panels docked flush under the header
      (`top-17`), matching the old site's `.mega-dropdown`/`.company-dropdown`
      mechanism exactly, not a centered floating card. Mobile menu is a
      slide-in drawer with the old site's exact accordion grouping (Products
      nests *inside* the "Our Expertise" accordion, not as its own item).
      Nav content (services/industries/platforms/company/resources links)
      is data-driven (arrays of `{icon, label, to}` objects, mapped) —
      now shared via `content/services.js` / `content/industries.js`
      (originally private to `Header.jsx`, extracted once Home needed the
      same lists).
- [x] **Footer** (`components/layout/Footer.jsx`) — real content and images
      pulled from the old site (address, phone, social icons, popular
      services, ISO badges), not the AI-brand-logos row yet (no icon-library
      equivalent exists for ChatGPT/Claude/Gemini/Grok/Perplexity logos —
      images exist in `common/` if picked back up later)

## Home — post-review fixes (found by checking the running page against the old site)

Three sections were visually checked against the old site and rebuilt after
turning out to be structurally wrong, not just cosmetically off — in each
case a Tailwind-only first pass was replaced with a real hand-written CSS
file once the reference turned out to need per-item variants across
multiple breakpoints (see "Components built" below for which sections have
a co-located `.css` file now). This pattern — Tailwind for simple
utilities, real CSS once a section has this much interlocking
per-breakpoint state — is worth applying to the service template too if
the same shape of complexity shows up there.

### Home page section breakdown (9 sections, header/footer already built)

| # | Section | Status |
|---|---|---|
| 1 | Hero (+ letter-flip title animation) | done — `components/sections/Hero.jsx`, shared (Service/Industry/About reuse it) |
| 2 | Stats strip (4 static cards) | done — `components/home/Stats.jsx` |
| 3 | Services grid (10 cards, shared data) | done — `components/home/ServicesGrid.jsx`, consumes `content/services.js` |
| 4 | Client logos | done — `components/home/Clients.jsx` |
| 5 | AI services bento (4 asymmetric cards) | done + corrected — `AiServicesBento.jsx` + `.css`. First pass had all 4 cards using the same `justify-content` and a flat `opacity-40` image dim; real version has per-card `justify-content`, a separate `::before` scrim (present on only 2 of 4 cards, direction flipped per card), full-opacity images |
| 6 | Trust/architecture blurb | done — `components/home/TrustBlurb.jsx` |
| 7 | Industries tabs + cards | done + corrected — `IndustriesShowcase.jsx` + `.css`. First pass was a small light-tile grid with dark text; real version is large full-bleed photo cards (83% width, scroll-snapping, white text over a 4-stop gradient) — got the entire visual theme backwards initially. Pill-click-scrolls-to-card works; scrolling the cards back to sync the active pill (bidirectional) was **not** ported |
| 8 | Case studies slider | done + corrected — `CaseStudyCarousel.jsx` + `.css`, built **shared** (`slides`/`heading`/`eyebrow` props). First pass was a small vertical tile; real card is image-left/content-right, 90% width up to 1150px, restructures to stacked below 992px |
| 9 | Latest News & Insights | done — `components/home/NewsInsights.jsx` |

All 9 sections are wired into `Home.jsx` and have been checked against the
running old site at least once — 3 of them needed a real rebuild after
that check (see above), the rest looked right as first built.

## Pages converted

0 of 70 fully signed off — Home is functionally complete and has been
visually checked/corrected section by section, but hasn't had a final
full read-through pass since the three CSS rewrites above landed.

## Components built

**Shared** (used by more than one page, or built to be):
- `Header` — full mega menu, mobile drawer, transparent/solid scroll state
- `Footer` — real content and images
- `Layout` — route shell (`<Header />`, `<Outlet />`, `<Footer />`)
- `sections/Hero` — Home now; Service/Industry/About will reuse it
  (confirmed shared in the old CSS itself). `tag`/`description` are both
  optional props since not every page shows both.
- `sections/CaseStudyCarousel` — takes `slides`/`heading`/`eyebrow` as
  props (+ co-located `CaseStudyCarousel.css`); Home uses it now,
  service/industry pages will pass their own filtered slide lists
- `ui/FlipText` — letter-by-letter flip-in title animation
- `ui/ArrowButton` — the `.btn-arrow` CTA shape/variants, used site-wide
- `hooks/useInView` — scroll-reveal hook (IntersectionObserver, reveals
  once, doesn't re-hide on scroll-back), used by every Home section below
  the hero

**Home-only** (`components/home/`): `Stats`, `ServicesGrid`, `Clients`,
`AiServicesBento` (+ `.css`), `TrustBlurb`, `IndustriesShowcase` (+ `.css`),
`NewsInsights`

**Shared data** (`src/content/`): `services.js` (14 items), `industries.js`
(10 items), `caseStudies.js` (all 13 real case studies, tagged by
`services`/`industries` slug arrays for filtering) — Header and Home both
import from these instead of each hand-typing the same lists

## Templates built

None yet in the "one component, many pages" sense — Home is a one-off
page, not a template. The service detail page (in progress) is where the
real template pattern starts: schema confirmed against 4 real pages, see
the "Service page template" section above.

## Known issues (from the audit — decisions still needed, see `CLAUDE.md` for detail)

- management-team.html: only 1 of 5 team members live in the old site — publish rest or not?
- testimonials.html: disabled filter/pagination system — rebuild or retire?
- `Products-Home` in Figma has no old-site content to migrate — needs new copy
- Legal pages, 404, sitemap.html not confirmed in Figma scope — ask design owner
- About.html header: coded as transparent in the old site despite a CSS
  comment scoping that variant to "home + services/industries" only —
  decided to keep it as coded (transparent), matching the actual markup
- Footer's "Ask AI about KGS" row (ChatGPT/Claude/Gemini/Grok/Perplexity)
  not yet built anywhere — no icon-library equivalent, needs the actual
  logo images (already copied to `common/`) if picked up later
- Old mobile menu's bottom CTA says "Start Free Trial", inconsistent with
  desktop's "Contact Us" — kept as coded for exact parity, flagged as a
  possible original-site copy-paste leftover worth a decision later

## SEO issues carried from the old site (address during content/schema work, not urgent now)

- No `sitemap.xml` anywhere in the old site
- JSON-LD only on 8 of 70 old pages
- No Organization/WebSite/FAQPage/Service schema anywhere in the old site
- Vite + React Router has no built-in per-route `<title>`/metadata API
  (unlike the Next.js path originally recommended) — plan is a trivial
  `document.title` set per page for now, real meta/schema work deferred to
  the migration plan's SEO phase

## Next step

Wire the `/services/:slug` route and build the `ServicePage` shell
(Hero + Breadcrumb + Intro only, using `business-process-automation`'s
real data) — step 2 in the service-template build order above.
