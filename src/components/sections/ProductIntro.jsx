'use client';

import Image from 'next/image';
import ArrowButton from '../ui/ArrowButton';

/**
 * Product Intro Section with Content, Image, Compliance Badges, and 4 Stats (matches kgs-og .pdi-section)
 */
export default function ProductIntro({
  badge,
  title,
  paragraphs = [],
  image,
  stats = [],
  compliance = [],
  primaryCta = { text: 'Learn More', link: '#faq' },
  secondaryCta = { text: 'Get Started', link: '#contact' },
}) {
  if (!title) return null;

  return (
    <section className="bg-gradient-to-b from-[#FFEDEF] via-[#FAF6F6] to-white py-16 md:py-8" aria-labelledby="pdiHeading">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        {/* Top: 2-Column Content + Image */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7">
            {badge && (
              <span className="mb-4 inline-block rounded-full bg-[#FFEDEF] px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary">
                {badge}
              </span>
            )}
            <h2 id="pdiHeading" className="mb-6 font-heading text-2xl font-bold leading-tight text-neutral-900 md:text-3xl lg:text-4xl">
              {title}
            </h2>
            <div className="space-y-4 font-body text-base font-medium leading-relaxed text-neutral-700">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <ArrowButton to={primaryCta.link} variant="primary">
                  {primaryCta.text}
                </ArrowButton>
              )}
              {secondaryCta && (
                <ArrowButton to={secondaryCta.link} variant="outline-dark">
                  {secondaryCta.text}
                </ArrowButton>
              )}
            </div>

            {/* Compliance Badges */}
            {compliance && compliance.length > 0 && (
              <div className="mt-8 pt-6 border-t border-neutral-200/60">
                <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                  Compliant & recommended
                </span>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {compliance.map((badgeItem, idx) => (
                    <div
                      key={idx}
                      className="flex h-10 items-center justify-center rounded-lg bg-white px-3.5 py-1.5 shadow-sm border border-neutral-200/70"
                    >
                      <Image
                        src={badgeItem.image}
                        alt={badgeItem.name}
                        width={75}
                        height={30}
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Featured Image */}
          {image && (
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                <Image
                  src={image}
                  alt={title}
                  width={660}
                  height={700}
                  className="h-auto w-full rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        {/* Bottom: 4 Stats Cards */}
        {stats && stats.length > 0 && (
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-xl border border-neutral-200/70 bg-white p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-kgs-primary/30 hover:shadow-[0_16px_32px_-12px_rgba(235,31,61,0.12)]"
              >
                <span className="font-heading text-3xl font-extrabold text-kgs-primary md:text-4xl lg:text-5xl">
                  {value}
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 md:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
