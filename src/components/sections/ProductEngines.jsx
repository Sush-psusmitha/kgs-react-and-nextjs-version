'use client';

import { useState } from 'react';

/**
 * Two Powerful Engines Section (matches kgs-og .pbn-section)
 */
export default function ProductEngines({
  badge,
  title,
  description,
  tabs = [],
}) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || 'management');

  if (!tabs || tabs.length === 0) return null;

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="pbnHeading">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <span className="mb-4 inline-block rounded-full bg-[#FFEDEF] px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary">
              {badge}
            </span>
          )}
          <h2 id="pbnHeading" className="mb-4 font-heading text-2xl font-bold leading-tight text-neutral-900 md:text-3xl lg:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="font-body text-base font-medium leading-relaxed text-neutral-700">
              {description}
            </p>
          )}

          {/* Engine Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3" role="tablist" aria-label="Choose an engine">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`rounded-full px-6 py-3 font-heading text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-kgs-primary text-white shadow-[0_8px_20px_-4px_rgba(235,31,61,0.35)]'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80 hover:text-neutral-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Engine Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentTab.items?.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-kgs-primary/40 hover:bg-white hover:shadow-[0_16px_36px_-12px_rgba(235,31,61,0.1)]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-heading text-2xl font-extrabold text-neutral-300 transition-colors group-hover:text-kgs-primary">
                    {item.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-neutral-300 transition-colors group-hover:bg-kgs-primary" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-sm font-medium leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
