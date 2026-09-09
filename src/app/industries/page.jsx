import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import IndustryAiCapabilities from '../../components/sections/IndustryAiCapabilities';
import FaqSection from '../../components/sections/FaqSection';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import TestimonialsMarquee from '../../components/sections/TestimonialsMarquee';
import Link from 'next/link';
import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6';
import industries from '../../content/industries';
import heroImg from '../../assets/images/banner/industries.png';

export const metadata = {
  title: "Industries | Kotnani Global Solutions",
  description: "Practical industry knowledge, technology, and business services for organisations managing changing operational and market demands across Banking, Logistics, Energy, Healthcare, and more.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/industries.html",
  },
  openGraph: {
    title: "Industries | Kotnani Global Solutions",
    description: "Practical industry knowledge, technology, and business services for organisations managing changing operational and market demands across Banking, Logistics, Energy, Healthcare, and more.",
    url: "https://www.kotnaniglobal.com/industries.html",
    images: [
      {
        url: "/images/banner/industries.png",
        width: 1200,
        height: 630,
        alt: "Industries | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Industries | Kotnani Global Solutions",
    description: "Practical industry knowledge, technology, and business services for organisations managing changing operational and market demands across Banking, Logistics, Energy, Healthcare, and more.",
    images: ["/images/banner/industries.png"],
  },
};

const industryCards = [
  {
    title: 'Banking & Finance',
    slug: 'banking-finance',
    desc: 'Support loan processing, fraud monitoring, account reconciliations, regulatory compliance, and transaction operations.',
    highlights: ['25,000+ Monthly Loan Applications', 'AML & KYC Compliance Reviews', 'Payment Settlement Workflows'],
  },
  {
    title: 'Energy & Utilities',
    slug: 'energy-utilities',
    desc: 'Modernise meter data management, asset monitoring, grid operations data, and regulatory reporting.',
    highlights: ['100,000+ Grid Assets Monitored', '20M+ Energy Records Standardised', 'Smart Meter Data Validation'],
  },
  {
    title: 'Logistics & Supply Chain',
    slug: 'logistics',
    desc: 'Enhance track-and-trace visibility, freight bill audits, dispatch coordination, and customs documentation.',
    highlights: ['Multi-Modal Shipment Tracking', 'Automated Freight Auditing', 'Carrier Settlement Support'],
  },
  {
    title: 'Mortgage & Lending',
    slug: 'mortgage',
    desc: 'Accelerate loan onboarding, title reviews, document indexing, appraisal reviews, and post-closing audits.',
    highlights: ['Underwriting Document Checks', 'Title & Escrow Verification', 'Post-Close Quality Control'],
  },
  {
    title: 'Customs Brokerage',
    slug: 'customs-brokerage',
    desc: 'Ensure accurate HS code classification, duty optimization, and rapid cross-border clearance processing.',
    highlights: ['Tariff & Duty Classification', 'Automated Entry Filing', 'Trade Compliance Governance'],
  },
  {
    title: 'Retail & E-Commerce',
    slug: 'ecommerce',
    desc: 'Optimise catalog management, order fulfillment support, multi-channel customer service, and returns processing.',
    highlights: ['Catalog & Inventory Sync', 'Order Exception Management', '24/7 Omnichannel Support'],
  },
];

const industryFaqs = [
  {
    q: 'How does KGS ensure domain compliance across regulated industries?',
    a: 'Our teams work within established regulatory frameworks (HIPAA, GDPR, SOX, FERC/NERC, PCI-DSS) with trained specialists, standard operating procedures, and automated validation checkpoints.',
  },
  {
    q: 'Can KGS support custom proprietary industry platforms?',
    a: 'Yes. Our teams are trained in major industry platforms as well as proprietary client software and legacy enterprise systems.',
  },
  {
    q: 'How are quality standards maintained across complex industry workflows?',
    a: 'We implement multi-tier quality checks, error-sampling audits, and real-time SLA dashboards with targeted 99%+ processing accuracy.',
  },
];

export default function IndustriesPage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero
        tag="Industry Solutions"
        title="Industry Expertise That Supports Better Business"
        desc="Practical industry knowledge, technology, and business services for organisations managing changing operational and market demands."
        bgImage={heroImg}
        bgImageAlt="KGS Industry Expertise"
        actions={[
          { label: 'Get Started', href: '#contact-form', variant: 'primary' },
          { label: 'View Case Studies', to: '/case-studies', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Intro Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="ind-intro-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Domain Experience
            </span>
            <h2 id="ind-intro-heading" className="mb-6 font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Building Stronger Businesses Across Industries
            </h2>
            <p className="font-body text-base font-medium leading-relaxed text-neutral-700 md:text-lg">
              Every industry has different operating pressures, regulations, customer expectations, and business priorities. KGS brings relevant industry knowledge and specialised execution support to help companies streamline critical processes and scale with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Industry Cards Grid */}
      <section className="pb-20 md:pb-28 bg-white" aria-labelledby="industries-grid-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-12">
            <span className="mb-2 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Sectors We Serve
            </span>
            <h2 id="industries-grid-heading" className="font-heading text-2xl font-bold text-neutral-900 md:text-3xl">
              Experience That Understands How Industries Work
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industryCards.map((ind, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-8 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-kgs-primary/40 hover:bg-white hover:shadow-lg"
              >
                <div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors">
                    <Link href={`/industries/${ind.slug}`}>{ind.title}</Link>
                  </h3>
                  <p className="mb-6 font-body text-sm font-medium leading-relaxed text-neutral-600">
                    {ind.desc}
                  </p>

                  <ul className="mb-8 space-y-2.5">
                    {ind.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 font-body text-xs font-medium text-neutral-700">
                        <FaCircleCheck className="mt-0.5 shrink-0 text-kgs-primary" size={13} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-200/70">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-2 font-heading text-xs font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors"
                  >
                    <span>Explore industry practice</span>
                    <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industry AI Capabilities */}
      <IndustryAiCapabilities />

      {/* 6. Testimonials Marquee */}
      <TestimonialsMarquee />

      {/* 7. FAQs */}
      <FaqSection
        title="Clear Answers to Common Questions"
        subtitle="Industry FAQs"
        faqs={industryFaqs}
      />

      {/* 8. Contact Form */}
      <ServiceContactForm
        title="Let's Talk About Your Business Requirements"
        desc="Every organisation has different priorities. KGS brings relevant industry experience and specialised capabilities to support the work that matters most."
      />
    </main>
  );
}
