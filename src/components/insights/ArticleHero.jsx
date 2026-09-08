'use client';

import Image from 'next/image';
import Link from 'next/link';
import heroBgPattern from '../../assets/images/blog/blog-inner.png';

/**
 * Exact replica of kgs-og .art-hero and overlapping .art-banner
 */
export default function ArticleHero({
  categoryName,
  categorySlug,
  title,
  author = { name: 'Priya Nair', initials: 'PN' },
  publishedDate = '10 December, 2026',
  heroImage,
  heroImageAlt,
}) {
  const initials =
    author.initials ||
    (author.name
      ? author.name
          .split(' ')
          .map((n) => n[0])
          .join('')
          .substring(0, 2)
          .toUpperCase()
      : 'KG');

  return (
    <>
      {/* ── 1. ART HERO SECTION (#9E0C52 bg + blog-inner.png pattern) ── */}
      <section
        className="relative overflow-hidden bg-[#9E0C52] pt-28 pb-36 md:pt-36 md:pb-48 text-left"
        aria-labelledby="art-title"
      >
        {/* Background Overlay Pattern Image */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src={heroBgPattern}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 mx-auto w-[92%] max-w-[1920px]">
          {/* Category Pill (.cth-tag) */}
          <Link
            href={`/insights/${categorySlug}`}
            className="mb-4 inline-block rounded-[5px] bg-[#17171A] px-4 py-1.5 font-heading text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            {categoryName}
          </Link>

          {/* Article Title (.art-hero-title) */}
          <h1
            id="art-title"
            className="mb-5 max-w-[920px] font-heading text-3xl font-bold leading-[1.08] text-white sm:text-3xl md:text-3xl lg:text-4xl xl:text-[56px]"
          >
            {title}
          </h1>

          {/* Breadcrumbs (.art-breadcrumb) */}
          <nav className="mb-6 flex flex-wrap items-center gap-2 font-body text-[13px] md:text-sm text-white" aria-label="Breadcrumb">
            <Link href="/" className="font-medium text-white/70 transition-opacity hover:text-white hover:opacity-100">
              Home
            </Link>
            <span className="text-white/40" aria-hidden="true">
              &bull;
            </span>
            <Link href="/insights" className="font-medium text-white/70 transition-opacity hover:text-white hover:opacity-100">
              Insights
            </Link>
            <span className="text-white/40" aria-hidden="true">
              &bull;
            </span>
            <Link href={`/insights/${categorySlug}`} className="font-medium text-white/70 transition-opacity hover:text-white hover:opacity-100">
              {categoryName}
            </Link>
            <span className="text-white/40" aria-hidden="true">
              &bull;
            </span>
            <span className="font-semibold text-white" aria-current="page">
              {title}
            </span>
          </nav>

          {/* Meta bar (.art-hero-meta) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-7 pt-2 text-sm text-white font-medium">
            {/* Posted by + Avatar */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs text-white/90">Posted by</span>
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#EA2858] to-[#9E0C52] font-heading text-xs font-bold text-white shadow-sm"
                aria-hidden="true"
              >
                {initials}
              </div>
              <span className="text-sm font-semibold text-white">{author.name}</span>
            </div>

            {/* Separator bar */}
            <div className="hidden sm:block h-5 w-px bg-white/20" aria-hidden="true" />

            {/* Published on + Date */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs text-white/90">Published on</span>
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <rect x="1.5" y="2.5" width="12" height="11" rx="1.5" stroke="#ffffff" strokeWidth="1.2" />
                  <path d="M1.5 6h12" stroke="#ffffff" strokeWidth="1.2" />
                  <path d="M5 1.5V4M10 1.5V4" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span>{publishedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ART BANNER (Top overlaps hero by ~20%) ── */}
      {heroImage && (
        <div className="relative z-10 mx-auto w-[92%] max-w-[1920px] -mt-20 sm:-mt-28 md:-mt-36">
          <div className="overflow-hidden rounded-xl md:rounded-2xl  bg-white">
            <Image
              src={heroImage}
              alt={heroImageAlt || title}
              width={1920}
              height={780}
              className="w-full aspect-[16/6.5] max-h-[500px] object-cover"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
