import React from 'react';

export default function CaseStudyStats({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="pb-14 md:pb-16" aria-label="Key statistics">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-neutral-200/80 pt-10 md:pt-12">
          {stats.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="flex-1 min-w-[140px] text-center">
                <p className="mb-2 font-heading text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-5xl">
                  <span>{typeof item.count === 'number' ? item.count.toLocaleString() : item.count}</span>
                  <span className="text-kgs-primary">{item.symbol}</span>
                </p>
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-neutral-600 sm:text-[13px]">
                  {item.label}
                </p>
              </div>

              {idx < stats.length - 1 && (
                <div
                  className="hidden h-12 w-px bg-neutral-200/80 md:block"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
