'use client';

import Image from 'next/image';
import { FaQuoteLeft, FaCircleCheck } from 'react-icons/fa6';

/**
 * Rich Article Content Renderer
 */
export default function ArticleBody({ sections = [] }) {
  if (!sections || sections.length === 0) return null;

  return (
    <article className="prose-neutral max-w-none space-y-12">
      {sections.map((section, idx) => (
        <section key={section.id || idx} id={section.id} className="scroll-mt-28">
          {/* Section Heading */}
          {section.heading && (
            <h2 className="mb-5 font-heading text-xl font-bold leading-snug text-neutral-900 sm:text-2xl lg:text-3xl">
              {section.heading}
            </h2>
          )}

          {/* Paragraphs */}
          {section.paragraphs && (
            <div className="space-y-4 font-body text-base font-medium leading-relaxed text-neutral-700 md:text-md">
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          )}

          {/* Blockquote Callout Box */}
          {section.callout && (
            <div className="my-8 rounded-2xl border-l-4 border-kgs-primary bg-gradient-to-r from-[#FFF5F6] to-neutral-50 p-6 sm:p-8">
              <FaQuoteLeft className="mb-3 text-kgs-primary/40" size={28} />
              <blockquote className="font-heading text-base font-semibold italic leading-relaxed text-neutral-900 sm:text-lg">
                "{section.callout.quote}"
              </blockquote>
              {section.callout.author && (
                <cite className="mt-3 block font-body text-xs font-bold uppercase tracking-wider text-kgs-primary not-italic">
                  — {section.callout.author}
                </cite>
              )}
            </div>
          )}

          {/* Custom Bullet List */}
          {section.listItems && (
            <ul className="my-6 space-y-3.5">
              {section.listItems.map((item, lIdx) => (
                <li key={lIdx} className="flex items-start gap-3">
                  <FaCircleCheck className="mt-1 shrink-0 text-kgs-primary" size={17} />
                  <span className="font-body text-base font-medium leading-relaxed text-neutral-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* In-article Image */}
          {section.image && (
            <figure className="my-8 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-3 shadow-sm">
              <Image
                src={section.image}
                alt={section.imageAlt || ''}
                width={900}
                height={500}
                className="h-auto w-full rounded-xl object-cover"
              />
              {section.imageCaption && (
                <figcaption className="mt-2.5 text-center font-body text-xs font-medium text-neutral-500">
                  {section.imageCaption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Key Takeaways Box */}
          {section.takeaways && (
            <div className="my-8 rounded-2xl border border-neutral-200/80 bg-neutral-50/80 p-6 sm:p-8 shadow-sm">
              <span className="mb-4 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
                Key Takeaways
              </span>
              <ul className="space-y-3">
                {section.takeaways.map((t, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-kgs-primary" />
                    <span className="font-body text-sm font-medium leading-relaxed text-neutral-800">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </article>
  );
}
