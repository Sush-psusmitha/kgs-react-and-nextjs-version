'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaCircleCheck, FaHouse, FaMagnifyingGlass, FaBars } from 'react-icons/fa6';

/**
 * Role-Based AI Agents Interactive Section (matches kgs-og .pui-section)
 */
export default function ProductRoleAgents({
  badge,
  title,
  description,
  tabs = [],
  mockupImage,
  accreditations = [],
}) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || 'librarian');

  if (!tabs || tabs.length === 0) return null;

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section className="bg-neutral-50/60 py-16 md:py-20" aria-labelledby="puiHeading">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Role Details and Tabs */}
          <div className="lg:col-span-6">
            {badge && (
              <span className="mb-4 inline-block rounded-full bg-[#FFEDEF] px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary">
                {badge}
              </span>
            )}
            <h2 id="puiHeading" className="mb-4 font-heading text-2xl font-bold leading-tight text-neutral-900 md:text-3xl lg:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mb-8 font-body text-base font-medium leading-relaxed text-neutral-700">
                {description}
              </p>
            )}

            {/* Role Tab Buttons */}
            <div className="mb-8 flex flex-wrap gap-2.5" role="tablist" aria-label="Choose a role">
              {tabs.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`rounded-full px-5 py-2.5 font-heading text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-kgs-primary text-white shadow-[0_8px_20px_-4px_rgba(235,31,61,0.35)]'
                        : 'bg-white text-neutral-700 border border-neutral-200/80 hover:border-kgs-primary/40 hover:bg-neutral-100/80'
                    }`}
                  >
                    {tab.name}
                  </button>
                );
              })}
            </div>

            {/* Active Role Panel */}
            <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
              <span className="inline-block rounded bg-[#FFEDEF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
                {currentTab.agentName}
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold text-neutral-900 sm:text-2xl">
                {currentTab.tagline}
              </h3>
              <p className="mt-3 font-body text-sm sm:text-base font-medium leading-relaxed text-neutral-700">
                {currentTab.description}
              </p>

              {currentTab.features && currentTab.features.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {currentTab.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCircleCheck className="mt-1 shrink-0 text-kgs-primary" size={16} />
                      <span className="font-body text-sm font-medium text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Right Column: Browser Mockup Frame & Accreditations */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[580px] overflow-hidden rounded-2xl border border-neutral-300/80 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              {/* Browser Bar */}
              <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56]"></span>
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]"></span>
                <span className="h-3 w-3 rounded-full bg-[#27C93F]"></span>
                <div className="mx-3 flex flex-1 items-center justify-between rounded-md bg-white px-3 py-1 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <FaHouse size={11} />
                    <span className="text-[11px] font-medium text-neutral-600">kgs-maplibrarysuite.app</span>
                  </div>
                  <FaMagnifyingGlass size={10} />
                </div>
                <FaBars className="text-neutral-500" size={12} />
              </div>

              {/* Browser Mockup Body */}
              <div className="relative bg-gradient-to-b from-neutral-50 to-neutral-100 p-4 sm:p-6 flex items-center justify-center min-h-[320px]">
                {mockupImage ? (
                  <img
                    src={mockupImage?.src || mockupImage}
                    alt="Platform Mockup"
                    className="h-auto w-full rounded-lg object-contain shadow-sm"
                  />
                ) : (
                  <div className="text-center p-8">
                    <span className="font-heading text-lg font-bold text-neutral-800">MapLibrarySuite App</span>
                    <p className="mt-1 text-sm text-neutral-500">Connected Digital Experience</p>
                  </div>
                )}
              </div>
            </div>

            {/* Accreditations Logos */}
            {accreditations && accreditations.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                {accreditations.map((acc, idx) => (
                  <div
                    key={idx}
                    className="flex h-12 items-center justify-center rounded-lg bg-white px-4 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-neutral-100 transition-all hover:scale-105"
                  >
                    <img
                      src={acc.image?.src || acc.image}
                      alt={acc.name}
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
