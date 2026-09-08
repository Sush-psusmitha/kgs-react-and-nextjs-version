'use client'

import useInView from '../../hooks/useInView'

const STATS = [
  { title: 'Global Delivery Model', desc: 'Round-the-clock service delivery supported by teams across multiple regions.' },
  { title: 'Deep Domain Expertise', desc: 'Experienced specialists across AI, data, finance, logistics, and security.' },
  { title: 'Proven Experience', desc: 'More than 30 years of experience across complex business environments.' },
  { title: 'Information Security & Compliance', desc: 'ISO 27001:2022 certified with GDPR- and HIPAA-aligned practices.' },
]

function Stats() {
  const [ref, isInView] = useInView()

  return (
    <section
      ref={ref}
      aria-label="KGS at a glance"
      className={`bg-[#F4F4F4] py-9 transition-all duration-700 ${isInView ? 'opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto grid w-[92%] max-w-[1920px] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 nav:grid-cols-4">
        {STATS.map(({ title, desc }) => (
          <div key={title}>
            <h2 className="mb-2 font-heading text-lg font-bold text-neutral-900">{title}</h2>
            <p className="font-body text-sm leading-relaxed text-neutral-700 font-medium">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
