'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroBgPattern from '../../assets/images/blog/blog-inner.png';

export default function CaseStudyHero({
  tag,
  title,
  categoryName,
  categorySlug,
  heroImage,
  heroImageAlt,
}) {
  return (
    <section
      className="relative overflow-hidden bg-[#000000] pt-28 pb-14 md:pt-36 md:pb-20"
      aria-labelledby="csh-title"
    >
      {/* Background Texture Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-90">
        <Image
          src={heroBgPattern}
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto w-[92%] max-w-[1920px] grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left Text */}
        <div className="flex flex-col items-start">
          {tag && (
            <span className="mb-5 inline-flex items-center rounded-full bg-white/15 border border-white/25 px-4 py-1.5 font-heading text-xs font-semibold text-white tracking-wide backdrop-blur-xs">
              {tag}
            </span>
          )}

          <h1
            id="csh-title"
            className="mb-6 font-heading text-2xl font-bold leading-[1.2] text-white sm:text-3xl md:text-3xl lg:text-[32px] xl:text-[35px]"
          >
            {title}
          </h1>

          {/* Breadcrumb */}
          <nav
            className="flex flex-wrap items-center gap-2 font-body text-xs sm:text-sm text-white/80"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="font-medium text-white/80 transition-colors hover:text-white"
            >
              Home
            </Link>
            <span className="text-white/40">/</span>
            <Link
              href="/case-studies"
              className="font-medium text-white/80 transition-colors hover:text-white"
            >
              Case Studies
            </Link>
            <span className="text-white/40">/</span>
            <span className="font-medium text-white/90">{categoryName || tag}</span>
            <span className="text-white/40">/</span>
            <span className="font-semibold text-white bg-white/20 px-2.5 py-0.5 rounded-full text-xs">
              Success Story
            </span>
          </nav>
        </div>

        {/* Right Media */}
        {heroImage && (
          <div className="overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
            <img
              src={typeof heroImage === 'string' ? heroImage : heroImage.src || heroImage}
              alt={heroImageAlt || title}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
