import { notFound } from 'next/navigation'
import Hero from '../../../components/sections/Hero'
import Breadcrumb from '../../../components/ui/Breadcrumb'
import IndustryIntro from '../../../components/sections/IndustryIntro'
import IndustryServices from '../../../components/sections/IndustryServices'
import IndustryAiCapabilities from '../../../components/sections/IndustryAiCapabilities'
import CaseStudyCarousel from '../../../components/sections/CaseStudyCarousel'
import FaqSection from '../../../components/sections/FaqSection'
import ServiceContactForm from '../../../components/sections/ServiceContactForm'
import industryDetails from '../../../content/industriesDetail'
import caseStudies from '../../../content/caseStudies'

/**
 * Static generation for all known industry slugs
 */
export async function generateStaticParams() {
  return Object.keys(industryDetails).map((slug) => ({
    slug,
  }))
}

/**
 * Dynamic metadata generation per industry
 */
export async function generateMetadata({ params }) {
  const { slug } = await params
  const industry = industryDetails[slug]

  if (!industry) {
    return {
      title: 'Industry Not Found',
    }
  }

  const title = `${industry.breadcrumbLabel || industry.hero?.title} | Kotnani Global Solutions`
  const description = industry.hero?.desc || industry.intro?.desc || 'Kotnani Global Solutions Industry Solutions'
  const canonicalUrl = `https://www.kotnaniglobal.com/industries/${slug}.html`
  const rawBanner = industry.hero?.bannerImage
  const ogImage = typeof rawBanner === 'string' ? rawBanner : (rawBanner?.src || '/images/banner/industries.png')

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

/**
 * Dynamic Industry Detail Page Template
 */
export default async function IndustryDetailPage({ params }) {
  const { slug } = await params
  const industry = industryDetails[slug]

  if (!industry) {
    notFound()
  }

  // Filter shared case-studies dataset matching this industry
  const relatedCaseStudies = caseStudies.filter((cs) => cs.industries?.includes(slug))

  return (
    <>
      {/* 1. Hero */}
      {industry.hero && <Hero {...industry.hero} />}

      {/* 2. Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: 'Industries', to: '/industries' },
          { label: industry.breadcrumbLabel || industry.hero?.title },
        ]}
      />

      {/* 3. Industry Stats & Overview Intro */}
      {industry.intro && <IndustryIntro {...industry.intro} />}

      {/* 4. Services We Offer */}
      {industry.services && <IndustryServices {...industry.services} />}

      {/* 5. AI Capabilities */}
      {industry.aiCapabilities && <IndustryAiCapabilities {...industry.aiCapabilities} />}

      {/* 6. Case Studies Carousel */}
      {relatedCaseStudies.length > 0 && (
        <CaseStudyCarousel
          heading="Empower Your Business with AI. Discover success stories."
          eyebrow="Client Success"
          slides={relatedCaseStudies}
        />
      )}

      {/* 7. FAQ Section */}
      {industry.faq && (
        <FaqSection faq={industry.faq} />
      )}

      {/* 8. Contact Form */}
      {industry.contactForm && (
        <ServiceContactForm
          title={industry.contactForm.title}
          desc={industry.contactForm.desc}
          defaultService={industry.contactForm.defaultService}
        />
      )}
    </>
  )
}