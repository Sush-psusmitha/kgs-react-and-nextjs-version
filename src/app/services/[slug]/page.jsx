import { notFound } from 'next/navigation'
import Hero from '../../../components/sections/Hero'
import Breadcrumb from '../../../components/ui/Breadcrumb'
import ArrowButton from '../../../components/ui/ArrowButton'
import TechGrid from '../../../components/sections/TechGrid'
import PlatformLogos from '../../../components/sections/PlatformLogos'
import WhyUsSlider from '../../../components/sections/WhyUsSlider'
import CaseStudyCarousel from '../../../components/sections/CaseStudyCarousel'
import TestimonialsMarquee from '../../../components/sections/TestimonialsMarquee'
import FaqSection from '../../../components/sections/FaqSection'
import RelatedBlogs from '../../../components/sections/RelatedBlogs'
import ServiceContactForm from '../../../components/sections/ServiceContactForm'
import serviceDetails from '../../../content/servicesDetail'
import caseStudies from '../../../content/caseStudies'

/**
 * Static generation for all known service slugs
 */
export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }))
}

/**
 * Dynamic metadata generation per service
 */
export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = serviceDetails[slug]

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  const firstP = service.intro?.paragraphs?.[0]
  const description = typeof firstP === 'string' ? firstP : (service.techGrid?.desc || service.hero?.title || 'Kotnani Global Solutions Enterprise Services')

  return {
    title: `${service.breadcrumbLabel || service.hero?.title} | Kotnani Global Solutions`,
    description,
  }
}

/**
 * Service Detail Page Template (11 full sections matching kgs-og)
 */
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  const service = serviceDetails[slug]

  if (!service) {
    notFound()
  }

  // Filter shared case-studies dataset matching this service
  const relatedCaseStudies = caseStudies.filter((cs) => cs.services?.includes(slug))

  return (
    <>
      {/* 1. Hero */}
      <Hero
        tag={service.hero?.tag}
        title={service.hero?.title}
        desc={service.hero?.desc}
        bgImage={service.hero?.bgImage?.src || service.hero?.bgImage}
        actions={service.hero?.actions}
      />

      {/* 2. Breadcrumb */}
      <Breadcrumb
        white
        items={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
          { label: service.breadcrumbLabel },
        ]}
      />

      {/* 3. Service Intro */}
      <section className="py-16 nav:py-15" aria-labelledby="svcIntroHeading">
        <div className="mx-auto grid w-[92%] max-w-[1920px] grid-cols-1 items-center gap-12 nav:grid-cols-2 nav:gap-16">
          <div>
            <h2 id="svcIntroHeading" className="mb-6 font-heading text-2xl font-bold leading-tight text-neutral-900 nav:text-3xl">
              {service.intro.title}
            </h2>
            {service.intro.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="mb-4 font-body text-base leading-relaxed text-neutral-700 font-medium">
                {paragraph}
              </p>
            ))}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ArrowButton to="/about" variant="outline-primary">
                About Us
              </ArrowButton>
              <ArrowButton to="/contact" variant="primary">
                Get Started
              </ArrowButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={service.intro.image?.src || service.intro.image}
              alt={service.intro.imageAlt}
              loading="lazy"
              className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 4. Tech Capabilities (8 Cards Grid) */}
      <TechGrid
        tag={service.techGrid.tag}
        heading={service.techGrid.heading}
        desc={service.techGrid.desc}
        cards={service.techGrid.cards}
      />

      {/* 5. Platform Logos */}
      <PlatformLogos
        heading={service.platformLogos.heading}
        desc={service.platformLogos.desc}
      />

      {/* 6. Why Us Slider (Auto-scroll) */}
      <WhyUsSlider cards={service.whyUs} />

      {/* 7. Case Studies Carousel (Filtered by Service) */}
      {relatedCaseStudies.length > 0 && (
        <CaseStudyCarousel
          eyebrow="Client Success"
          heading="Empower Your Business with AI. Discover success stories."
          slides={relatedCaseStudies}
        />
      )}

      {/* 8. Testimonials & Client Logos Marquee */}
      {service.testimonials && service.testimonials.length > 0 && (
        <TestimonialsMarquee items={service.testimonials} />
      )}

      {/* 9. FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <FaqSection items={service.faq} />
      )}

      {/* 10. Our Blogs (Related Insights) */}
      {service.relatedBlogs && service.relatedBlogs.length > 0 && (
        <RelatedBlogs articles={service.relatedBlogs} />
      )}

      {/* 11. Embedded Contact Form */}
      <ServiceContactForm
        title={service.contactForm?.title || 'Your Partner for Trusted Enterprise Services'}
        desc={service.contactForm?.desc || 'Contact our specialists for solutions aligned with your business goals.'}
        defaultService={service.contactForm?.defaultService || service.breadcrumbLabel}
      />
    </>
  )
}
