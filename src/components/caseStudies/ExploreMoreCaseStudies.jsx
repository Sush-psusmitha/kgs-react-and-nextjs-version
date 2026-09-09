import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export default function ExploreMoreCaseStudies({ caseStudies, currentCategorySlug }) {
  if (!caseStudies || caseStudies.length === 0) return null;

  return (
    <section className="bg-neutral-50/70 py-16 md:py-20 border-t border-neutral-200/70" aria-labelledby="csHeading">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="csHeading" className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl">
              Explore More Case Studies
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 font-heading text-xs font-bold text-neutral-800 transition hover:border-kgs-primary hover:bg-kgs-primary hover:text-white"
          >
            <span>Visit Case Studies</span>
            <FaArrowRight size={11} />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, idx) => {
            const catSlug = cs.categorySlug || currentCategorySlug || 'business-process-automation';
            const itemSlug = cs.slug;
            const href = `/case-studies/${catSlug}/${itemSlug}`;

            // Resolve image source
            let imgSrc = cs.heroImage || cs.imgSrc || cs.image;
            if (typeof imgSrc === 'string' && imgSrc.startsWith('../../images/')) {
              imgSrc = '/' + imgSrc.replace('../../images/', 'images/');
            }

            return (
              <article
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Media */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  {imgSrc && (
                    <img
                      src={typeof imgSrc === 'string' ? imgSrc : imgSrc.src || imgSrc}
                      alt={cs.imgAlt || cs.heroImageAlt || cs.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="mb-3 inline-block rounded-full bg-neutral-100 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wider text-neutral-600">
                      {cs.tag || 'Success story'}
                    </span>

                    <h3 className="font-heading text-base font-bold leading-snug text-neutral-900 group-hover:text-kgs-primary transition-colors line-clamp-2 md:text-lg">
                      <Link href={href}>{cs.title}</Link>
                    </h3>
                  </div>

                  {/* Button Link */}
                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 font-heading text-xs font-bold text-neutral-800 group-hover:text-kgs-primary transition-colors"
                    >
                      <span>Read more</span>
                      <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
