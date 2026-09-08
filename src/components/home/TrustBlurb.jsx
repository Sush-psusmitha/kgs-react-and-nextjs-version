'use client'

import useInView from '../../hooks/useInView'
import archImage from '../../assets/images/home/ai-driven.png'

function TrustBlurb() {
  const [ref, isInView] = useInView()

  return (
    <section
      ref={ref}
      aria-labelledby="archHeading"
      className={`py-16 transition-all duration-700 ${isInView ? 'opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto grid w-[92%] max-w-[1920px] grid-cols-1 items-center gap-10 nav:grid-cols-2 nav:gap-16">
        <div>
          <h2 id="archHeading" className="mb-5 font-heading text-2xl font-bold text-neutral-900 nav:text-3xl">
            Built on Trust. Driven by Excellence.
          </h2>
          <p className="mb-4 font-body leading-relaxed font-medium text-neutral-700">
            KGS combines global delivery excellence, intelligent technologies, and deep domain expertise to manage
            critical business functions for organizations worldwide.
          </p>
          <p className="font-body leading-relaxed font-medium text-neutral-700">
            Backed by decades of experience, KGS delivers scalable solutions across AI, data, finance, cybersecurity,
            and specialized industry services, enabling enterprises to improve performance, strengthen resilience,
            and achieve measurable business outcomes.
          </p>
        </div>
        <img
          src={archImage?.src || archImage}
          alt="KGS team celebrating together"
          loading="lazy"
          className="w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  )
}

export default TrustBlurb
