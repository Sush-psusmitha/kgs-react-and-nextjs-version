'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import useInView from '../../hooks/useInView'
import industries from '../../content/industries'
import './IndustriesShowcase.css'

import banking from '../../assets/images/home/industries-one.png'
import retail from '../../assets/images/home/industires-two.png'
import customsBrokerage from '../../assets/images/home/ind-03-custom-brokerage.webp'
import energyUtilities from '../../assets/images/home/ind-04-energy-utilities.webp'
import realEstate from '../../assets/images/home/ind-05-real-estate.webp'
import mortgage from '../../assets/images/home/ind-06-mortgage.webp'
import logistics from '../../assets/images/home/ind-07-logistics.webp'
import ecommerce from '../../assets/images/home/ind-08-ecommerce.webp'
import manufacturing from '../../assets/images/home/ind-09-manufacturing.webp'
import insurance from '../../assets/images/home/ind-10-insurance.webp'

const HOME_DETAILS = {
  'banking-finance': { image: banking, desc: 'Improve financial accuracy, compliance, and efficiency across critical banking processes.', trust: '12+ Banks' },
  retail: { image: retail, desc: 'Enhance retail efficiency and customer experiences across high-volume commerce functions.', trust: '300+ Ecommerce Websites' },
  'customs-brokerage': { image: customsBrokerage, desc: 'Simplify customs documentation and compliance for faster cross-border trade.', trust: '50+ Brokers' },
  'energy-utilities': { image: energyUtilities, desc: 'Optimize billing accuracy, data management, compliance, and service performance.', trust: '20+ Utility Providers' },
  'real-estate': { image: realEstate, desc: 'Streamline property workflows and documentation for efficient portfolio management.', trust: '150+ Realty Firms' },
  mortgage: { image: mortgage, desc: 'Accelerate mortgage processing while maintaining accuracy across the lending lifecycle.', trust: '80+ Lenders' },
  logistics: { image: logistics, desc: 'Boost shipment visibility and documentation across complex global supply chains.', trust: '100+ Logistics Partners' },
  ecommerce: { image: ecommerce, desc: 'Consolidate marketplace, order, and customer functions to support scalable growth.', trust: '250+ Online Stores' },
  manufacturing: { image: manufacturing, desc: 'Strengthen procurement, supplier coordination, and reporting across the manufacturing value chain.', trust: '40+ Manufacturers' },
  insurance: { image: insurance, desc: 'Augment claims, underwriting, and policy administration with greater accuracy and consistency.', trust: '30+ Insurers' },
}

const homeIndustries = industries.map((industry) => ({ ...industry, ...HOME_DETAILS[industry.slug] }))

function IndustriesShowcase() {
  const [sectionRef, isInView] = useInView()
  const [activeSlug, setActiveSlug] = useState(homeIndustries[0].slug)
  const cardRefs = useRef({})

  const handlePillClick = (slug) => {
    setActiveSlug(slug)
    cardRefs.current[slug]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="indHeading"
      className={`ind-section transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <div className="ind-top">
          <h2 id="indHeading" className="mb-8 font-heading text-2xl font-bold text-neutral-900 nav:text-3xl">
            Industries We Serve
          </h2>

          <div role="tablist" aria-label="Industries" className="ind-pills-track">
            {homeIndustries.map(({ slug, label }) => (
              <button
                key={slug}
                type="button"
                role="tab"
                aria-selected={activeSlug === slug}
                onClick={() => handlePillClick(slug)}
                className={`ind-pill ${activeSlug === slug ? 'ind-pill--active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="ind-body">
          <div className="ind-text">
            <h3 className="mb-3 font-heading text-xl font-bold text-neutral-900">
              Sector Expertise for Evolving Business Needs
            </h3>
            <p className="mb-6 font-body leading-relaxed font-medium text-neutral-700">
              KGS delivers industry-specific solutions aligned with business priorities and regulatory requirements.
            </p>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 rounded-[5px] border-[1.5px] border-kgs-primary px-6 py-3 font-heading text-sm font-semibold text-kgs-primary transition-colors hover:bg-kgs-primary hover:text-white"
            >
              View All
            </Link>
          </div>

          <div role="list" className="ind-cards">
            {homeIndustries.map(({ slug, label, desc, image, trust, to }) => (
              <Link
                key={slug}
                href={to}
                role="listitem"
                ref={(el) => { cardRefs.current[slug] = el }}
                className="ind-card"
              >
                <img src={image?.src || image} alt="" loading="lazy" className="ind-card-img" />
                <div className="ind-card-content">
                  <h4 className="ind-card-title">{label}</h4>
                  <p className="ind-card-desc">{desc}</p>
                </div>
                <div className="ind-card-footer">
                  <p className="ind-card-trust">
                    <span className="ind-card-trust-label">Trusted by</span>{trust}
                  </p>
                  <span className="ind-card-cta">
                    Learn more <FaArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesShowcase
