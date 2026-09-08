'use client'

import { useState } from 'react'
import defaultAiImage from '../../assets/images/common/ai.png'

/**
 * Industry AI Capabilities Interactive Tabbed Component (matches kgs-og .indpg-ai-section)
 */
function IndustryAiCapabilities({ heading = 'Our AI Capabilities', tabs = [] }) {
  const [activeTab, setActiveTab] = useState(0)

  if (!tabs || tabs.length === 0) return null

  const current = tabs[activeTab] || tabs[0]

  return (
    <section className="bg-neutral-100 py-16 nav:py-20" aria-labelledby="indpgAiHeading">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <h2
          id="indpgAiHeading"
          className="mb-8 font-heading text-2xl font-bold text-neutral-900 nav:text-3xl"
        >
          {heading}
        </h2>

        {/* Tabbed Card Container */}
        <div className="overflow-hidden rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row" role="tablist">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx
              return (
                <button
                  key={tab.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 px-6 py-4.5 text-center font-heading text-sm md:text-base transition-colors duration-200 border-b sm:border-b-0 sm:border-r border-neutral-200/60 last:border-r-0 ${
                    isActive
                      ? 'bg-kgs-primary font-bold text-white shadow-sm'
                      : 'bg-white font-semibold text-neutral-800 hover:bg-neutral-50 hover:text-kgs-primary'
                  }`}
                >
                  {tab.title}
                </button>
              )
            })}
          </div>

          {/* Active Tab Panel Content */}
          <div className="flex flex-col items-center gap-8 bg-white p-6 sm:p-8 md:p-12 lg:flex-row lg:gap-14">
            {/* Left Content (65%) */}
            <div className="w-full lg:w-[65%]">
              {current.label && (
                <span className="mb-3.5 block font-heading text-base md:text-lg font-bold text-kgs-primary">
                  {current.label}
                </span>
              )}
              {current.desc && (
                <p className="mb-4 font-body text-sm md:text-base font-medium leading-relaxed text-neutral-700">
                  {current.desc}
                </p>
              )}
              {current.bullets && current.bullets.length > 0 && (
                <ul className="mb-4 space-y-2.5">
                  {current.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="relative pl-5 font-body text-sm md:text-base font-medium leading-relaxed text-neutral-700 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-kgs-primary"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              {current.footnote && (
                <p className="font-body text-sm md:text-base font-medium leading-relaxed text-neutral-700">
                  {current.footnote}
                </p>
              )}
            </div>

            {/* Right Media (35%) */}
            <div className="flex w-full items-center justify-center lg:w-[35%]">
              <img
                src={current.image?.src || current.image || defaultAiImage.src}
                alt="AI Capabilities"
                className="w-full max-w-[240px] md:max-w-[280px] object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryAiCapabilities
