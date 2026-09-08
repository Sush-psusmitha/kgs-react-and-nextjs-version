'use client'

import Link from 'next/link'
import ArrowButton from '../ui/ArrowButton'
import useInView from '../../hooks/useInView'
import services from '../../content/services'

import generativeAi from '../../assets/images/home/generative-ai.webp'
import dataManagement from '../../assets/images/home/data-management.webp'
import dataScience from '../../assets/images/home/data-science.webp'
import legalProcessing from '../../assets/images/home/legal-processing.webp'
import cybersecurity from '../../assets/images/home/cybersecurity.webp'
import softwareDevelopment from '../../assets/images/home/software-development.webp'
import esg from '../../assets/images/home/esg.webp'
import automation from '../../assets/images/home/automation.webp'
import financeAccounting from '../../assets/images/home/finance-accounting.webp'
import dataEngineering from '../../assets/images/home/data-engineering.webp'

const HOME_IMAGES = {
  'generative-ai': generativeAi,
  'data-management': dataManagement,
  'data-science-business-intelligence': dataScience,
  'legal-process-outsourcing': legalProcessing,
  cybersecurity: cybersecurity,
  'software-development': softwareDevelopment,
  'esg-consulting': esg,
  'business-process-automation': automation,
  'finance-accounting': financeAccounting,
  'data-engineering': dataEngineering,
}

const homeServices = services.filter((service) => HOME_IMAGES[service.slug])

function ServicesGrid() {
  const [ref, isInView] = useInView()

  return (
    <section
      ref={ref}
      className={`py-16 transition-all duration-700 ${isInView ? 'opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 nav:text-3xl">
            Business Services Built for Modern Enterprises
          </h2>
          <ArrowButton to="/services" variant="outline-dark">All services</ArrowButton>
        </div>

        <div className="grid grid-cols-2 gap-4 nav:grid-cols-5">
          {homeServices.map(({ label, to, slug }) => (
            <Link
              key={slug}
              href={to}
              className="group relative block aspect-5/4 overflow-hidden rounded-xl"
            >
              <img
                src={HOME_IMAGES[slug]?.src || HOME_IMAGES[slug]}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-4 font-heading text-sm font-bold text-white nav:text-base">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
