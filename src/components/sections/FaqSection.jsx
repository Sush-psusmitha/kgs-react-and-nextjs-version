'use client'

import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import ArrowButton from '../ui/ArrowButton'
import useInView from '../../hooks/useInView'

/**
 * FAQ section (.svcfaq-section in kgs-og)
 * Left column: Title, description, and "Need More Clarity?" consultation CTA card.
 * Right column: Accordion items with smooth expand/collapse.
 */
function FaqSection({
  title = 'Frequently Asked Questions',
  desc = 'Find answers to common questions about KGS, our services, processes, and approach.',
  ctaTitle = 'Need More Clarity?',
  ctaDesc = 'Talk to our automation expert directly and get answers specific to your business.',
  ctaLabel = 'Book a Consultation',
  ctaTo = '/contact',
  items = [],
  faq,
}) {
  const [ref, isInView] = useInView()
  const [openIndex, setOpenIndex] = useState(0) // First item open by default matching old site

  // Normalize items whether passed via `items` or `faq`
  const faqObject = (faq && !Array.isArray(faq) && typeof faq === 'object') ? faq : null
  const displayTitle = faqObject?.title || title
  const displayDesc = faqObject?.desc || desc
  const displayCtaTitle = faqObject?.ctaTitle || ctaTitle
  const displayCtaDesc = faqObject?.ctaDesc || ctaDesc
  const displayCtaLabel = faqObject?.ctaLabel || ctaLabel
  const displayCtaTo = faqObject?.ctaTo || ctaTo

  const rawItems = (items && items.length > 0)
    ? items
    : Array.isArray(faq)
    ? faq
    : faqObject?.items || faqObject?.cards || []

  const toggleItem = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  if (!rawItems || rawItems.length === 0) return null

  return (
    <section
      ref={ref}
      aria-labelledby="svcfaqHeading"
      className={`bg-[linear-gradient(to_bottom,#FFEDEF,#F4F4F4)] py-16 transition-opacity duration-700 nav:py-24 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <h2 id="svcfaqHeading" className="mb-4 font-heading text-2xl font-bold text-neutral-900 nav:text-3xl">
                {displayTitle}
              </h2>
              <p className="font-body font-medium text-base leading-relaxed text-neutral-700">
                {displayDesc}
              </p>
            </div>

            {/* Need More Clarity Card */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900">
                {displayCtaTitle}
              </h3>
              <p className="mb-6 font-body text-sm font-medium leading-relaxed text-neutral-600">
                {displayCtaDesc}
              </p>
              <ArrowButton to={displayCtaTo} variant="primary">
                {displayCtaLabel}
              </ArrowButton>
            </div>
          </div>

          {/* Right column (Accordion) */}
          <div className="flex flex-col gap-4">
            {rawItems.map((item, idx) => {
              const itemQuestion = item.question || item.q || item.title || ''
              const itemAnswer = item.answer || item.a || item.desc || ''
              const isOpen = openIndex === idx
              return (
                <div
                  key={itemQuestion || idx}
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-kgs-primary/40 bg-white shadow-md'
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left font-heading text-base font-bold text-neutral-900"
                  >
                    <span>{itemQuestion}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full 
                  bg-neutral-100 
                  font-medium
              text-neutral-900 transition-all duration-300 ${isOpen ? 'rotate-180 text-white bg-red-400' : ''}`}
                    >
                      <FaChevronDown size={12} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-neutral-100 px-6 pb-6 pt-2">
                      <p className="font-body text-sm font-medium leading-relaxed text-neutral-600">
                        {itemAnswer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
