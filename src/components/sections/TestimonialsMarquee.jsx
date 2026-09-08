'use client'

import { useEffect, useRef, useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa6'
import ArrowButton from '../ui/ArrowButton'
import useInView from '../../hooks/useInView'
import './TestimonialsMarquee.css'

import targetLogo from '../../assets/images/clients/target.webp'
import vansLogo from '../../assets/images/clients/vans.webp'
import flipkartLogo from '../../assets/images/clients/flipkart.png'
import fossilLogo from '../../assets/images/clients/fossil.webp'
import kohlsLogo from '../../assets/images/clients/kohl-s.webp'
import walmartLogo from '../../assets/images/clients/walmart.webp'
import nikeLogo from '../../assets/images/clients/nike.webp'
import pumaLogo from '../../assets/images/clients/puma.webp'
import amazonLogo from '../../assets/images/clients/amazon.png'
import accentureLogo from '../../assets/images/clients/accenture.webp'

const CLIENT_LOGOS = [
  { src: targetLogo, alt: 'Target' },
  { src: vansLogo, alt: 'Vans' },
  { src: flipkartLogo, alt: 'Flipkart' },
  { src: fossilLogo, alt: 'Fossil' },
  { src: kohlsLogo, alt: "Kohl's" },
  { src: walmartLogo, alt: 'Walmart' },
  { src: nikeLogo, alt: 'Nike' },
  { src: pumaLogo, alt: 'Puma' },
  { src: amazonLogo, alt: 'Amazon' },
  { src: accentureLogo, alt: 'Accenture' },
]

/**
 * Testimonials & Client Logos section (.stt-section in kgs-og)
 * Features an auto-scrolling row of testimonial cards and an infinite marquee of client logos.
 */
function TestimonialsMarquee({
  label = 'Testimonials',
  title = 'Across industries and continents, the same line keeps surfacing',
  items = [],
}) {
  const [ref, isInView] = useInView()
  const trackRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || !items || items.length === 0) return

    const interval = setInterval(() => {
      const track = trackRef.current
      if (!track) return

      const card = track.firstElementChild
      const cardWidth = (card?.offsetWidth ?? 380) + 24 // card width + gap
      const maxScrollLeft = track.scrollWidth - track.clientWidth

      if (track.scrollLeft >= maxScrollLeft - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: cardWidth, behavior: 'smooth' })
      }
    }, 3800)

    return () => clearInterval(interval)
  }, [isPaused, items])

  if (!items || items.length === 0) return null

  return (
    <section
      ref={ref}
      aria-labelledby="sttHeading"
      className={`bg-white py-24 transition-opacity duration-700 nav:py-20 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="mx-auto w-[92%] max-w-[1920px]">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="mb-2 block font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary">
              {label}
            </span>
            <h2 id="sttHeading" className="font-heading text-2xl font-bold text-neutral-900 nav:text-3xl">
              {title}
            </h2>
          </div>
          <ArrowButton to="/testimonials" variant="primary">
            View More Testimonials
          </ArrowButton>
        </div>

        {/* Testimonials Auto-scroll Cards */}
        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
        >
          {items.map(({ quote, role, company }, idx) => (
            <div
              key={idx}
              className="group relative flex w-[350px] shrink-0 flex-col justify-between rounded-2xl border border-neutral-200 bg-neutral-50/70 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-kgs-primary/50 hover:bg-white hover:shadow-xl md:w-[420px]"
            >
              <div className="mb-6">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-kgs-primary/10 text-kgs-primary">
                  <FaQuoteRight size={16} />
                </span>
                <p className="font-body text-sm leading-relaxed font-medium
                 text-neutral-600">
                  {quote}
                </p>
              </div>
              <div className="border-t border-neutral-200/80 pt-4">
                <span className="block font-heading text-sm font-bold text-neutral-900">
                  {role}
                </span>
                <span className="block font-body text-xs font-semibold text-neutral-700">
                  {company}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Infinite Marquee */}
        <div className="stt-marquee-wrapper mt-12 overflow-hidden border-t border-b border-neutral-100 py-4">
          <div className="stt-marquee-track items-center gap-20">
            {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, idx) => (
              <img
                key={idx}
                src={logo.src?.src || logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-20 w-auto max-w-[170px] object-contain transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsMarquee
