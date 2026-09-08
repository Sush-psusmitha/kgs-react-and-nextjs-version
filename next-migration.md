# Kotnani Global Solutions (KGS) — Next.js Migration & Learning Guide

> **Living Documentation**: This document outlines the migration from the original 70-page static website (`kgs-og`) to the modern **Next.js (App Router)** web application (`kgs-web`). It is designed as a learning companion explaining Next.js architecture, the migration steps taken so far, and the exact roadmap for building every remaining layout and page.

---

## Table of Contents
1. [Next.js Core Concepts & Mental Model](#1-nextjs-core-concepts--mental-model)
2. [Vite/CRA vs Next.js App Router Comparison](#2-vitecra-vs-nextjs-app-router-comparison)
3. [Architecture & Project Directory Structure](#3-architecture--project-directory-structure)
4. [Step-by-Step: What Has Been Migrated](#4-step-by-step-what-has-been-migrated)
5. [The Complete 11-Section Service Detail Template](#5-the-complete-11-section-service-detail-template)
6. [The 22 Layout Groups & 70 Pages Catalog](#6-the-22-layout-groups--70-pages-catalog)
7. [How to Build New Pages (Interactive Tutorial)](#7-how-to-build-new-pages-interactive-tutorial)
8. [SEO, Performance & Best Practices](#8-seo-performance--best-practices)

---

## 1. Next.js Core Concepts & Mental Model

### 1.1 Why Next.js App Router for KGS?
The original KGS website (`kgs-og`) is a 70-page static site. In a traditional client-side React app (like Vite + React Router), the browser downloads an empty HTML shell (`<div id="root"></div>`) and runs JavaScript to render the page. This causes two big issues for enterprise marketing websites:
1. **SEO & Social Previews**: Search engine crawlers (Google, Bing) and social platforms (LinkedIn, Twitter) see blank HTML before client JavaScript executes.
2. **First Contentful Paint (FCP)**: Users on slow mobile connections must wait for all JavaScript bundles to download and parse before seeing text or images.

**Next.js App Router solves this by pre-rendering every page into full HTML on the server or during build time (SSG / Static Site Generation)**, while preserving smooth client-side React interactivity.

### 1.2 Server Components vs. Client Components
In Next.js App Router, **all components are React Server Components (RSC) by default**.

| Feature | Server Component (Default) | Client Component (`'use client'`) |
|---|---|---|
| **Where it renders** | On the server / build time | In the browser (and pre-rendered to HTML) |
| **JS bundle size** | 0 KB sent to browser | Sends JS to browser for hydration |
| **Allowed features** | `async/await`, database/file access | `useState`, `useEffect`, `useRef`, onClick, browser APIs |
| **Best used for** | Static sections, data fetching, wrappers, SEO metadata | Interactive menus, carousels, tabs, animations |

> **Golden Rule**: Keep components as Server Components by default. Only add `'use client'` at the top of a file if that component uses React state (`useState`), effects (`useEffect`), refs (`useRef`), DOM event listeners (`onClick`, `onScroll`), or browser APIs (`IntersectionObserver`, `HTMLCanvasElement`).

---

## 2. Vite/CRA vs Next.js App Router Comparison

```
+------------------------------------+---------------------------------------+
| Vite / React Router                | Next.js App Router                    |
+------------------------------------+---------------------------------------+
| <BrowserRouter>, <Routes>, <Route> | Folder structure inside src/app/      |
| import { Link } from 'react-router'| import Link from 'next/link'          |
| <Link to="/about">                 | <Link href="/about">                  |
| useParams() hook                   | async function Page({ params })       |
| <Outlet /> in Layout.jsx           | {children} in src/app/layout.jsx      |
| index.html <head> <title>          | export const metadata = { ... }       |
| document.title = "..."             | export async function generateMetadata|
| 404 Route path="*"                 | src/app/not-found.jsx                 |
| Dynamic imports / bundle split     | Automatic per-route code splitting   |
+------------------------------------+---------------------------------------+
```

---

## 3. Architecture & Project Directory Structure

```text
kgs-web/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── globals.css               # Brand theme tokens & animations
│   │   ├── layout.jsx                # Root HTML shell (Header, Footer, Montserrat font)
│   │   ├── not-found.jsx             # Global 404 page
│   │   ├── page.jsx                  # Home page (/)
│   │   └── services/
│   │       └── [slug]/
│   │           └── page.jsx          # Dynamic Service Detail template (/services/:slug)
│   ├── assets/
│   │   └── images/                   # Local image and icon assets (blog, clients, common, services)
│   ├── components/
│   │   ├── home/                     # Home-specific components
│   │   │   ├── AiServicesBento.jsx   # ('use client') Bento grid with hover states
│   │   │   ├── Clients.jsx           # ('use client') Client logo showcase
│   │   │   ├── IndustriesShowcase.jsx# ('use client') Interactive tabs & scroll cards
│   │   │   ├── NewsInsights.jsx      # ('use client') News & blog preview cards
│   │   │   ├── ServicesGrid.jsx      # ('use client') 10-card service grid
│   │   │   ├── Stats.jsx             # ('use client') 4 static value props
│   │   │   └── TrustBlurb.jsx        # ('use client') Enterprise trust section
│   │   ├── layout/
│   │   │   ├── Header.jsx            # ('use client') Mega menu & mobile drawer
│   │   │   └── Footer.jsx            # Multi-column footer & ISO certifications
│   │   ├── sections/                 # Shared reusable page sections
│   │   │   ├── CaseStudyCarousel.jsx # ('use client') Autoplay carousel
│   │   │   ├── FaqSection.jsx        # ('use client') Accordion FAQ + consultation card
│   │   │   ├── Hero.jsx              # Ken-Burns animated hero with CTA
│   │   │   ├── PlatformLogos.jsx     # Cloud partner logos
│   │   │   ├── RelatedBlogs.jsx      # 3-card related articles grid
│   │   │   ├── ServiceContactForm.jsx# ('use client') Canvas CAPTCHA contact form
│   │   │   ├── TechGrid.jsx          # 8-card capability grid
│   │   │   ├── TestimonialsMarquee.jsx# ('use client') Auto-scroll cards + infinite logo marquee
│   │   │   └── WhyUsSlider.jsx       # ('use client') 8-card auto-scrolling slider
│   │   └── ui/                       # Atomic UI primitives
│   │       ├── ArrowButton.jsx       # Animated arrow CTA button
│   │       ├── Breadcrumb.jsx        # Breadcrumb with schema.org JSON-LD markup
│   │       └── FlipText.jsx          # ('use client') Letter flip animation
│   ├── content/                      # Structured data sources
│   │   ├── caseStudies.js            # All 13 case studies with service/industry tags
│   │   ├── industries.js             # 10 industry definitions
│   │   ├── services.js               # 14 service definitions
│   │   └── servicesDetail/           # Per-service deep content files
│   │       ├── business-process-automation.js
│   │       └── index.js              # Slug-to-detail lookup
│   └── hooks/
│       └── useInView.js              # IntersectionObserver scroll-reveal hook
├── public/                           # Static public files (favicon.svg, icons.svg)
├── next.config.mjs                   # Next.js compiler settings
├── postcss.config.mjs                # PostCSS with @tailwindcss/postcss
├── package.json                      # Next.js & React 19 dependencies
└── next-migration.md                 # This living guide
```

---

## 4. Step-by-Step: What Has Been Migrated

### Step 1: Framework Conversion to Next.js App Router
- Replaced `vite` and `react-router-dom` with `next@15` and `react@19`.
- Created `postcss.config.mjs` with `@tailwindcss/postcss` for Tailwind CSS v4 support.

### Step 2: Root Layout & Typography (`src/app/layout.jsx`)
- Configured Google Font `Montserrat` via `next/font/google` with CSS variable `--font-montserrat`.
- Defined global `metadata` object for default page title and description.
- Wrapped the entire application in `<Header />` and `<Footer />`.

### Step 3: Global Styling & Tokens (`src/app/globals.css`)
- Ported KGS brand tokens via Tailwind CSS v4 `@theme`:
  - `--color-kgs-primary: #F8485E`
  - `--color-kgs-footer-bg: #28262B`
  - `--breakpoint-nav: 1100px` (desktop mega-menu breakpoint)
- Ported keyframe animations: `hero-ken-burns`, `hero-letter-flip-in`, and `hero-fade-up`.

### Step 4: Home Page (`src/app/page.jsx`)
- Composed all 9 sections from the original static homepage into a high-performance Next.js page.

### Step 5: Full 11-Section Service Detail Template (`src/app/services/[slug]/page.jsx`)
- Built the 100% data-driven Service Detail template covering all 11 sections matching `kgs-og`.

---

## 5. The Complete 11-Section Service Detail Template

All 14 service pages in `kgs-og` share an identical 11-section architecture:

| # | Section | Component | Interactivity | Data Source |
|---|---|---|---|---|
| 1 | **Hero** | `Hero.jsx` | Ken Burns + Letter-flip | `service.hero` |
| 2 | **Breadcrumb** | `Breadcrumb.jsx` | Static Schema.org | `service.breadcrumbLabel` |
| 3 | **Service Intro** | `section` + `ArrowButton` | Hover zoom | `service.intro` |
| 4 | **Tech Capabilities (8 cards)** | `TechGrid.jsx` | Hover icon invert | `service.techGrid` |
| 5 | **Platform Logos** | `PlatformLogos.jsx` | Static 10 logos | `service.platformLogos` |
| 6 | **Why Us (8 cards)** | `WhyUsSlider.jsx` | **Auto-scrolls**, hover pause | `service.whyUs` |
| 7 | **Case Studies Carousel** | `CaseStudyCarousel.jsx` | Autoplay slider | `content/caseStudies.js` (filtered by slug) |
| 8 | **Testimonials + Client Marquee** | `TestimonialsMarquee.jsx` | **Auto-scrolls** + Infinite CSS marquee | `service.testimonials` |
| 9 | **FAQ Accordion** | `FaqSection.jsx` | Click-to-toggle accordion + Consultation CTA card | `service.faq` |
| 10 | **Our Blogs / Insights** | `RelatedBlogs.jsx` | 3-card hover scale | `service.relatedBlogs` |
| 11 | **Get In Touch Form** | `ServiceContactForm.jsx` | Canvas CAPTCHA + Validation | `service.contactForm` |

---

## 6. The 22 Layout Groups & 70 Pages Catalog

The original static site (`kgs-og`) has **70 HTML pages** belonging to **22 unique layouts**:

| # | Layout Group | Count | Static URL / Folder | Next.js Route Pattern |
|---|---|---|---|---|
| 1 | **Home** | 1 | `index.html` | `src/app/page.jsx` |
| 2 | **Service Detail** | 14 | `services/*.html` | `src/app/services/[slug]/page.jsx` |
| 3 | **Industry Detail** | 10 | `industries/*.html` | `src/app/industries/[slug]/page.jsx` |
| 4 | **Case Study Detail** | 13 | `case-studies/*/*.html` | `src/app/case-studies/[category]/[slug]/page.jsx` |
| 5 | **Insight / Blog Article** | 8 | `insights/*/*.html` | `src/app/insights/[category]/[slug]/page.jsx` |
| 6 | **Services Listing** | 1 | `services.html` | `src/app/services/page.jsx` |
| 7 | **Industries Listing** | 1 | `industries.html` | `src/app/industries/page.jsx` |
| 8 | **Case Studies Listing** | 1 | `case-studies.html` | `src/app/case-studies/page.jsx` |
| 9 | **Insights / Blogs Listing** | 1 | `insights.html` | `src/app/insights/page.jsx` |
| 10 | **Product Detail** | 4 | `product/*.html` | `src/app/products/[slug]/page.jsx` |
| 11 | **Products Listing** *(Figma)* | 1 | New page | `src/app/products/page.jsx` |
| 12 | **About Us** | 1 | `about.html` | `src/app/about/page.jsx` |
| 13 | **Careers** | 1 | `careers.html` | `src/app/careers/page.jsx` |
| 14 | **Certifications** | 1 | `certifications.html` | `src/app/certifications/page.jsx` |
| 15 | **CSR Initiatives** | 1 | `corporate-social-responsibility.html` | `src/app/corporate-social-responsibility/page.jsx` |
| 16 | **Customers** | 1 | `customers.html` | `src/app/customers/page.jsx` |
| 17 | **Locations** | 1 | `locations.html` | `src/app/locations/page.jsx` |
| 18 | **Management Team** | 1 | `management-team.html` | `src/app/management-team/page.jsx` |
| 19 | **News & Events** | 1 | `news-and-events.html` | `src/app/news-and-events/page.jsx` |
| 20 | **Our Work Culture** | 1 | `our-work-culture.html` | `src/app/our-work-culture/page.jsx` |
| 21 | **Testimonials** | 1 | `testimonials.html` | `src/app/testimonials/page.jsx` |
| 22 | **Legal & System (3 pages)** | 3 | `privacy-policy.html`, `terms-and-conditions.html`, `sitemap.html` | `src/app/privacy-policy/page.jsx`, `src/app/terms-and-conditions/page.jsx`, `src/app/sitemap/page.jsx` |

---

## 7. How to Build New Pages (Interactive Tutorial)

### Adding a New Service Page (e.g. `cybersecurity`)
Because we designed the `ServiceDetail` template to be **100% data-driven**, you do not need to create a new component or route. Simply follow these two steps:

#### Step 1: Create the Data File
Create `src/content/servicesDetail/cybersecurity.js`:
```javascript
import heroBg from '../../assets/images/services/cybersecurity/hero.webp'
import introImg from '../../assets/images/services/cybersecurity/intro.webp'

const cybersecurity = {
  slug: 'cybersecurity',
  breadcrumbLabel: 'Cybersecurity',
  hero: { ... },
  intro: { ... },
  techGrid: { ... },
  platformLogos: { ... },
  whyUs: [ ... ],
  testimonials: [ ... ],
  faq: [ ... ],
  relatedBlogs: [ ... ],
  contactForm: { ... },
}

export default cybersecurity
```

#### Step 2: Register the Service in `src/content/servicesDetail/index.js`
```javascript
import businessProcessAutomation from './business-process-automation'
import cybersecurity from './cybersecurity'

const serviceDetails = {
  [businessProcessAutomation.slug]: businessProcessAutomation,
  [cybersecurity.slug]: cybersecurity,
}

export default serviceDetails
```

---

## 8. SEO, Performance & Best Practices

1. **Metadata API**: Always export `metadata` on static pages or `generateMetadata` on dynamic pages.
2. **Dynamic Routes Pre-rendering**: Always export `generateStaticParams()` in `[slug]/page.jsx` files so Next.js builds static HTML files for every page ahead of time.
3. **Internal Links**: Always use `<Link href="...">` from `next/link` for internal navigation so Next.js can prefetch routes in the viewport.
4. **Clean Code Separation**: Keep business data in `src/content/`, reusable layout blocks in `src/components/sections/`, and pages minimal and clean in `src/app/`.
