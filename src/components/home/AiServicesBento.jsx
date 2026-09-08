'use client'

import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import useInView from '../../hooks/useInView'
import './AiServicesBento.css'

import genAi from '../../assets/images/home/gen-ai.png'
import workflowAutomation from '../../assets/images/home/workflow-automation.png'
import customAnalytics from '../../assets/images/home/custom-analytics.png'
import businessIntelligence from '../../assets/images/home/business-intelligence.png'

const CARDS = [
  {
    variant: 'dark',
    title: 'Generative AI',
    desc: 'Deploy production-ready AI solutions, intelligent assistants, and enterprise copilots tailored to your business environment and strategic objectives.',
    to: '/services/generative-ai',
    image: genAi,
  },
  {
    variant: 'teal',
    title: 'Workflow Automation',
    desc: 'Reduce repetitive tasks and improve process efficiency through intelligent automation that combines AI capabilities with business logic.',
    to: '/services/business-process-automation',
    image: workflowAutomation,
  },
  {
    variant: 'grey',
    title: 'Custom Analytics',
    desc: 'Transform your enterprise data into actionable insights with advanced analytics, predictive models, and executive dashboards.',
    to: '/services/data-science-business-intelligence',
    image: customAnalytics,
  },
  {
    variant: 'dark-abstract',
    title: 'Business Intelligence',
    desc: 'Improve enterprise visibility with business intelligence solutions that enable informed decision-making across the organization.',
    to: '/services/data-science-business-intelligence',
    image: businessIntelligence,
  },
]

function AiServicesBento() {
  const [ref, isInView] = useInView()

  return (
    <section
      ref={ref}
      aria-labelledby="aiServicesHeading"
      className={`ai-services-section bg-[linear-gradient(to_bottom,#FFEDEF,#F4F4F4)] transition-all duration-700 ${
        isInView ? 'opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mx-auto w-[92%] max-w-[1920px] py-8 text-center">
        <div className="mb-10 max-w-5xl mx-auto">
          <h2 id="aiServicesHeading" className="mb-3 font-heading text-2xl font-bold text-neutral-900 nav:text-3xl">
            Accelerate Your Business Performance With Enterprise AI
          </h2>
          <p className="font-body text-neutral-700 font-medium">
            We bring together enterprise AI, intelligent automation, and business expertise to restructure your
            enterprise processes, improve decision-making, and deliver measurable business outcomes.
          </p>
        </div>

        <div className="ai-services-grid">
          {CARDS.map(({ variant, title, desc, to, image }) => (
            <Link key={title} href={to} className={`ai-card ai-card--${variant}`}>
              <img src={image?.src || image} alt="" loading="lazy" className="ai-card-bg-img" />
              <div className="ai-card-content">
                <h3 className="ai-card-title">{title}</h3>
                <p className="ai-card-desc">{desc}</p>
                <span className="ai-card-link">
                  Learn more <FaArrowRight size={12} className="arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AiServicesBento
