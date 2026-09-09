'use client';

import Image from 'next/image';

/**
 * Trust & Why Choose Us Section with Background Image (matches kgs-og .pwc-section)
 */
export default function ProductTrustStats({
  badge,
  title,
  description,
  bgImage,
  items = [],
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 md:py-24 text-white" aria-labelledby="pwcHeading">
      {/* Background Graphic */}
      {bgImage && (
        <img
          src={bgImage?.src || bgImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity pointer-events-none -z-0"
        />
      )}

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/80 to-neutral-950/95" />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1920px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <span className="mb-4 inline-block rounded-full bg-kgs-primary/20 border border-kgs-primary/30 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-[#FF6B81]">
              {badge}
            </span>
          )}
          <h2 id="pwcHeading" className="mb-4 font-heading text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="font-body text-base font-normal leading-relaxed text-neutral-300">
              {description}
            </p>
          )}
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-kgs-primary/50 hover:bg-white/[0.09] hover:shadow-[0_20px_40px_-15px_rgba(235,31,61,0.25)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-heading text-xl font-bold text-white group-hover:text-[#FF6B81] transition-colors">
                  {item.title}
                </span>
                <span className="h-2 w-2 rounded-full bg-kgs-primary group-hover:scale-125 transition-transform" />
              </div>
              <p className="font-body text-sm font-normal leading-relaxed text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
