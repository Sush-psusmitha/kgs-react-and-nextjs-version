'use client'

import { useEffect, useRef, useState } from 'react'
import bgImage from '../../assets/images/common/why-choose-bg.png'

/**
 * Dark full-bleed "Why Us" section — 8 white cards in a horizontally
 * auto-scrolling row over a photo background with a dark gradient overlay.
 * Auto-advances every 3.5 seconds, pauses on hover, and smoothly loops back to the start.
 */
function WhyUsSlider({ cards = [] }) {
  const trackRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || !cards || cards.length === 0) return

    const interval = setInterval(() => {
      const track = trackRef.current
      if (!track) return

      const card = track.firstElementChild
      const cardWidth = (card?.offsetWidth ?? 280) + 20 // card width + gap
      const maxScrollLeft = track.scrollWidth - track.clientWidth

      if (track.scrollLeft >= maxScrollLeft - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: cardWidth, behavior: 'smooth' })
      }
    }, 3200)

    return () => clearInterval(interval)
  }, [isPaused, cards])

  if (!cards || cards.length === 0) return null

  return (
    <section
      className="relative overflow-hidden py-16 nav:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <img
        src={bgImage?.src || bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />

      <div className="relative z-10">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <h2 className="mb-10 max-w-xl font-heading text-2xl font-bold text-white nav:text-3xl">
            <span className="text-kgs-primary">Why</span> Us
          </h2>
        </div>

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto px-[5%] pb-4 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
        >
          {cards.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group flex w-72 shrink-0 flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <span className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#F4F4F4] transition-colors duration-300 group-hover:bg-kgs-primary">
                <img
                  src={icon?.src || icon}
                  alt=""
                  className="h-9 w-9 object-contain transition-[filter] duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </span>
              <h3 className="mb-3 font-heading text-base font-bold text-neutral-900">{title}</h3>
              <p className="font-body text-sm font-medium leading-relaxed text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSlider
