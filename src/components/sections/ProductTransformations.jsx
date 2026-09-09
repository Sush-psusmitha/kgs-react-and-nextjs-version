'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Four Transformations Interactive Section (matches kgs-og .ppl-section)
 */
export default function ProductTransformations({
  badge,
  title,
  description,
  tabs = [],
  platformImage,
}) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || 'librarian');

  if (!tabs || tabs.length === 0) return null;

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section className="bg-gradient-to-b from-neutral-50 via-white to-neutral-50 py-16 md:py-20" aria-labelledby="pplHeading">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <span className="mb-4 inline-block rounded-full bg-[#FFEDEF] px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary">
              {badge}
            </span>
          )}
          <h2 id="pplHeading" className="mb-4 font-heading text-2xl font-bold leading-tight text-neutral-900 md:text-3xl lg:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="font-body text-base font-medium leading-relaxed text-neutral-700">
              {description}
            </p>
          )}

          {/* Role Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3" role="tablist" aria-label="Choose a role">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              const roleName = tab.id.charAt(0).toUpperCase() + tab.id.slice(1);
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`rounded-full px-6 py-2.5 font-heading text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-kgs-primary text-white shadow-[0_8px_20px_-4px_rgba(235,31,61,0.35)]'
                      : 'bg-white text-neutral-700 border border-neutral-200 hover:border-kgs-primary/40 hover:bg-neutral-100/80'
                  }`}
                >
                  {roleName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Transformation Active Card */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFEDEF] px-3.5 py-1 text-xs font-bold text-kgs-primary uppercase tracking-wide">
                <span className="h-1.5 w-1.5 rounded-full bg-kgs-primary" />
                {currentTab.role}
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold leading-snug text-neutral-900 sm:text-2xl lg:text-3xl">
                {currentTab.heading}
              </h3>
              <p className="mt-4 font-body text-base font-medium leading-relaxed text-neutral-700">
                {currentTab.description}
              </p>

              {/* 3 Metrics Pills */}
              {currentTab.metrics && (
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {currentTab.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col rounded-xl bg-neutral-50 p-4 border border-neutral-200/60 text-center transition-all hover:border-kgs-primary/30 hover:bg-[#FFF8F9]"
                    >
                      <span className="font-heading text-2xl font-extrabold text-kgs-primary lg:text-3xl">
                        {m.value}
                      </span>
                      <span className="mt-1 font-body text-xs font-semibold text-neutral-600">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Media Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 p-2 shadow-inner">
                <img
                  src={platformImage?.src || platformImage}
                  alt={currentTab.heading}
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
