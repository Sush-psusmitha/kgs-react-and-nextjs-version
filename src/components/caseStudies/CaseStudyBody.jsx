import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaChartLine } from 'react-icons/fa6';
import sidebarDefaultImg from '../../assets/images/case-studies/case-studies-sidebar.png';
import checkIcon from '../../assets/images/case-studies/check.png';

export default function CaseStudyBody({
  challenge,
  solution,
  results,
  sidebarImage,
  sidebarImageAlt,
  relatedCaseStudies = [],
  currentCategorySlug,
}) {
  const displaySidebarImg = sidebarImage || sidebarDefaultImg;

  // Split results into 2 columns if more than 3 items
  const resultItems = results?.items || [];
  const midPoint = Math.ceil(resultItems.length / 2);
  const leftResults = resultItems.slice(0, midPoint);
  const rightResults = resultItems.slice(midPoint);

  return (
    <section className="pb-16 md:pb-20" aria-label="Case study narrative and results">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        {/* 2-Column: Challenge + Solution Narrative & Sticky Sidebar */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-10 lg:gap-16">
          {/* Left 70%: Content Blocks */}
          <div className="flex flex-col gap-10 lg:col-span-7">
            {/* The Challenge */}
            {challenge && (
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900 md:text-3xl">
                  {challenge.heading || 'The Challenge'}
                </h2>
                <div className="space-y-4 font-body text-base font-medium leading-[1.78] text-neutral-700 md:text-md">
                  {challenge.paragraphs?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            {/* What Did KGS Do / Solution */}
            {solution && (
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900 md:text-3xl">
                  {solution.heading || 'What Did KGS Do'}
                </h2>
                <div className="space-y-4 font-body text-base font-medium leading-[1.78] text-neutral-700 md:text-md">
                  {solution.paragraphs?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right 30%: Sticky Media & Related Case Studies */}
          <div className="flex flex-col gap-6 lg:col-span-3 lg:sticky lg:top-24">
            {/* Sidebar Image */}
            <div className="overflow-hidden rounded-2xl shadow-sm border border-neutral-100 bg-neutral-100">
              <img
                src={typeof displaySidebarImg === 'string' ? displaySidebarImg : displaySidebarImg.src || displaySidebarImg}
                alt={sidebarImageAlt || 'Specialists reviewing operations and workflows'}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Related Case Studies Widget */}
            {relatedCaseStudies && relatedCaseStudies.length > 0 && (
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-5 shadow-xs">
                <div className="mb-4 flex items-center gap-2 border-b border-neutral-200/80 pb-3">
                  <FaChartLine className="text-kgs-primary" size={15} />
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-900">
                    Related Case Studies
                  </h3>
                </div>

                <div className="flex flex-col divide-y divide-neutral-200/70">
                  {relatedCaseStudies.slice(0, 3).map((item, idx) => {
                    const catSlug = item.categorySlug || currentCategorySlug || 'business-process-automation';
                    const itemSlug = item.slug;
                    const itemHref = `/case-studies/${catSlug}/${itemSlug}`;

                    return (
                      <article key={idx} className="group py-3 first:pt-0 last:pb-0">
                        <span className="mb-1 block font-heading text-[11px] font-semibold text-kgs-primary">
                          {item.categoryName || item.tag || 'Case Study'}
                        </span>
                        <h4 className="font-heading text-xs font-bold leading-snug text-neutral-900 transition-colors group-hover:text-kgs-primary">
                          <Link href={itemHref}>
                            {item.title}
                          </Link>
                        </h4>
                        <Link
                          href={itemHref}
                          className="mt-2 inline-flex items-center gap-1.5 font-heading text-[11px] font-semibold text-neutral-600 transition-colors group-hover:text-kgs-primary"
                        >
                          <span>Read story</span>
                          <FaArrowRight size={9} className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200/80 text-center">
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-kgs-primary hover:underline"
                  >
                    <span>View all case studies</span>
                    <FaArrowRight size={10} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full Width: The Results */}
        {results && resultItems.length > 0 && (
          <div className="mt-14 pt-10 border-t border-neutral-200/80 md:mt-16">
            <h2 className="mb-8 font-heading text-2xl font-bold text-neutral-900 md:text-3xl">
              {results.heading || 'The Results'}
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
              {/* Column 1 */}
              <ul className="flex flex-col gap-4.5">
                {leftResults.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <img
                      src={checkIcon?.src || checkIcon}
                      alt=""
                      aria-hidden="true"
                      className="mt-1 h-4.5 w-4.5 shrink-0 object-contain"
                    />
                    <span
                      className="font-body text-base font-medium leading-relaxed text-neutral-700"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="flex flex-col gap-4.5">
                {rightResults.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <img
                      src={checkIcon?.src || checkIcon}
                      alt=""
                      aria-hidden="true"
                      className="mt-1 h-4.5 w-4.5 shrink-0 object-contain"
                    />
                    <span
                      className="font-body text-base font-medium leading-relaxed text-neutral-700"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
