import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref to attach to an element, and whether that element has
 * scrolled into view — once true, it stays true (the old site's
 * revealOnScroll() reveals each section once and never re-hides it on
 * scroll-back, so this matches that behavior rather than toggling).
 *
 * This replaces what the old site hand-duplicated four separate times
 * across script.js and page-specific inline <script> blocks (see the
 * migration audit, Section 07) — one hook, used by every section that
 * wants a scroll-reveal instead of a fresh IntersectionObserver each time.
 *
 * Usage:
 *   const [ref, isInView] = useInView()
 *   <section ref={ref} className={isInView ? 'opacity-100' : 'opacity-0'}>
 */
function useInView({ threshold = 0.15, rootMargin = '0px' } = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect() // reveal once, don't keep watching
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isInView]
}

export default useInView
