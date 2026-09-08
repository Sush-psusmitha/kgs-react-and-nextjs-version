'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import ArrowButton from '../ui/ArrowButton'
import useInView from '../../hooks/useInView'
import './CaseStudyCarousel.css'

/**
 * The "success stories" slider — reusable across Home, service,
 * and industry pages.
 */
function CaseStudyCarousel({ heading = 'Success Stories From Our Clients', eyebrow = 'Client Stories', slides = [] }) {
  const [ref, isInView] = useInView()
  const trackRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const scrollByCard = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild
    const amount = (card?.offsetWidth ?? 720) + 30
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  // Autoplay every 3s, paused on hover
  useEffect(() => {
    if (isPaused) return
    const id = setInterval(() => {
      const track = trackRef.current
      if (!track) return
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollByCard(1)
      }
    }, 3000)
    return () => clearInterval(id)
  }, [isPaused])

  if (!slides || slides.length === 0) return null

  return (
    <section
      ref={ref}
      className={`cs-section transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
      aria-labelledby="csHeading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="mb-2 block font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary">{eyebrow}</span>
            <h2 id="csHeading" className="font-heading text-2xl font-bold text-neutral-900 nav:text-3xl">{heading}</h2>
          </div>
          <ArrowButton to="/case-studies" variant="primary">Visit Case Studies</ArrowButton>
        </div>

        <div className="cs-slider-container">
          <div ref={trackRef} role="list" className="cs-slider">
            {slides.map(({ image, alt, title, to }) => (
              <Link key={title} href={to} role="listitem" className="cs-slide-card">
                <div className="cs-slide-card-img-wrap">
                  <img src={image?.src || image} alt={alt || title} loading="lazy" className="cs-slide-card-img" />
                </div>
                <div className="cs-slide-card-content">
                  <span className="cs-slide-card-tag">Success story</span>
                  <h3 className="cs-slide-card-title">{title}</h3>
                  <span className="inline-flex items-center gap-2 rounded-[5px] bg-kgs-primary px-5 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-kgs-primary/90">
                    Read more
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="cs-slider-nav">
          <button type="button" aria-label="Previous success story" onClick={() => scrollByCard(-1)} className="cs-nav-btn cs-nav-btn--prev">
            <FaChevronLeft size={16} />
          </button>
          <button type="button" aria-label="Next success story" onClick={() => scrollByCard(1)} className="cs-nav-btn cs-nav-btn--next">
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyCarousel
