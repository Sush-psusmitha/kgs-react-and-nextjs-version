import Hero from '../components/sections/Hero'
import CaseStudyCarousel from '../components/sections/CaseStudyCarousel'
import Stats from '../components/home/Stats'
import ServicesGrid from '../components/home/ServicesGrid'
import Clients from '../components/home/Clients'
import AiServicesBento from '../components/home/AiServicesBento'
import TrustBlurb from '../components/home/TrustBlurb'
import IndustriesShowcase from '../components/home/IndustriesShowcase'
import NewsInsights from '../components/home/NewsInsights'

import heroBg from '../assets/images/home/home-hero.webp'
import caseStudies from '../content/caseStudies'

export const metadata = {
  title: "Kotnani Global Solutions | Build Smarter Business Through AI-Driven Operations",
  description: "Scale operations, automate workflows, and harness enterprise AI with Kotnani Global Solutions.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/",
  },
  openGraph: {
    title: "Kotnani Global Solutions | Build Smarter Business Through AI-Driven Operations",
    description: "Scale operations, automate workflows, and harness enterprise AI with Kotnani Global Solutions.",
    url: "https://www.kotnaniglobal.com/",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Kotnani Global Solutions | Build Smarter Business Through AI-Driven Operations",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kotnani Global Solutions | Build Smarter Business Through AI-Driven Operations",
    description: "Scale operations, automate workflows, and harness enterprise AI with Kotnani Global Solutions.",
    images: ["/images/banner/home-hero.webp"],
  },
}

const HOME_SLUGS = [
  'banking-operations-management',
  'energy-data-management',
  'grid-operations',
  'financial-performance-analytics',
  'bank-loan-processing',
  'etl-elt-development',
]
const homeCaseStudySlides = HOME_SLUGS.map((slug) => caseStudies.find((cs) => cs.slug === slug)).filter(Boolean)

export default function HomePage() {
  return (
    <>
      <Hero
        tag="Trusted by 600+ Global Enterprises"
        title="Build Smarter Business Through AI-Driven Operations"
        bgImage={heroBg.src || heroBg}
        actions={[
          { label: 'Talk to an Expert', href: 'tel:+918022450187', variant: 'primary' },
          { label: 'See How We Work', to: '/case-studies', variant: 'outline' },
        ]}
      />
      <Stats />
      <ServicesGrid />
      <Clients />
      <AiServicesBento />
      <TrustBlurb />
      <IndustriesShowcase />
      <CaseStudyCarousel
        eyebrow="Client Stories"
        heading="Success Stories From Our Clients"
        slides={homeCaseStudySlides}
      />
      <NewsInsights />
    </>
  )
}
