import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import FaqSection from '../../components/sections/FaqSection';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import TestimonialsMarquee from '../../components/sections/TestimonialsMarquee';
import Link from 'next/link';
import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6';
import services from '../../content/services';
import heroImg from '../../assets/images/service/service-hero.png';

export const metadata = {
  title: "Services | Kotnani Global Solutions",
  description: "Kotnani Global Solutions (KGS) delivers world-class BPO, technology, and professional services across Banking, Logistics, Healthcare, Energy, and more — powering enterprise growth globally.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/services.html",
  },
  openGraph: {
    title: "Services | Kotnani Global Solutions",
    description: "Kotnani Global Solutions (KGS) delivers world-class BPO, technology, and professional services across Banking, Logistics, Healthcare, Energy, and more — powering enterprise growth globally.",
    url: "https://www.kotnaniglobal.com/services.html",
    images: [
      {
        url: "/images/service/service-hero.png",
        width: 1200,
        height: 630,
        alt: "Services | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Services | Kotnani Global Solutions",
    description: "Kotnani Global Solutions (KGS) delivers world-class BPO, technology, and professional services across Banking, Logistics, Healthcare, Energy, and more — powering enterprise growth globally.",
    images: ["/images/service/service-hero.png"],
  },
};

const serviceCards = [
  {
    title: 'Gen AI Services',
    slug: 'generative-ai',
    desc: 'Apply AI models, LLMs, workflow automation, and custom intelligent applications to transform core business processes.',
    highlights: ['Custom LLM Integration', 'Intelligent Document Processing', 'AI Chatbots & Virtual Assistants'],
  },
  {
    title: 'Data Management',
    slug: 'data-management',
    desc: 'Standardise, clean, govern, and integrate enterprise datasets across complex business systems.',
    highlights: ['Data Governance & Quality', 'Master Data Management', 'Database Migration & Cleanup'],
  },
  {
    title: 'Logistics',
    slug: 'logistics',
    desc: 'Streamline freight operations, track-and-trace workflows, bill audits, and customs documentation.',
    highlights: ['Freight Audit & Payment', 'Dispatch & Tracking Support', 'Carrier Performance Analytics'],
  },
  {
    title: 'Data Science & BI',
    slug: 'data-science-business-intelligence',
    desc: 'Turn operational and financial data into interactive dashboards, predictive analytics, and actionable intelligence.',
    highlights: ['Interactive PowerBI & Tableau Dashboards', 'Predictive Modeling', 'KPI Automation'],
  },
  {
    title: 'Legal Process Outsourcing (LPO)',
    slug: 'legal-process-outsourcing',
    desc: 'Support contract review, legal research, compliance monitoring, and e-discovery with high accuracy.',
    highlights: ['Contract Lifecycle Management', 'Regulatory Compliance Review', 'Document Indexing'],
  },
  {
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    desc: 'Protect business applications, endpoints, networks, and sensitive data with end-to-end security services.',
    highlights: ['Vulnerability Assessments', 'SOC & SIEM Monitoring', 'Incident Response & Hardening'],
  },
  {
    title: 'Software Development',
    slug: 'software-development',
    desc: 'Build scalable web, mobile, and cloud software applications tailored to enterprise workflows.',
    highlights: ['Custom Web & Mobile Apps', 'API & Microservices Architecture', 'Cloud Deployment & DevOps'],
  },
  {
    title: 'ESG Consulting',
    slug: 'esg-consulting',
    desc: 'Manage ESG data collection, carbon accounting, sustainability reporting, and regulatory disclosures.',
    highlights: ['Carbon Footprint Accounting', 'BRSR & CSRD Compliance', 'ESG Data Integration'],
  },
  {
    title: 'Business Process Automation',
    slug: 'business-process-automation',
    desc: 'Automate repetitive workflows, claims handling, document intake, and back-office operations.',
    highlights: ['Robotic Process Automation (RPA)', 'Workflow Orchestration', 'Exception Routing'],
  },
  {
    title: 'Finance & Accounting',
    slug: 'finance-accounting',
    desc: 'Support accounts payable, accounts receivable, general ledger, reconciliations, and financial reporting.',
    highlights: ['AP & AR Processing', 'Bank & Ledger Reconciliation', 'Financial Statement Preparation'],
  },
  {
    title: 'Data Engineering',
    slug: 'data-engineering',
    desc: 'Design and build resilient ETL/ELT data pipelines, data warehouses, and modern data platforms.',
    highlights: ['ETL / ELT Pipeline Architecture', 'Cloud Data Warehousing', 'Real-Time Streaming'],
  },
  {
    title: 'Healthcare Services',
    slug: 'healthcare',
    desc: 'Accelerate revenue cycle management, medical coding, claims processing, and prior authorization.',
    highlights: ['Revenue Cycle Analytics', 'Medical Billing & Coding', 'Claims Denial Management'],
  },
  {
    title: 'Insurance BPO',
    slug: 'insurance',
    desc: 'Deliver scalable policy administration, claims triage, underwriting support, and customer servicing.',
    highlights: ['Policy Intake & Issuance', 'Claims Adjudication Support', 'Fraud & Risk Detection'],
  },
  {
    title: 'Customs Brokerage',
    slug: 'customs-brokerage',
    desc: 'Ensure smooth cross-border customs clearance, tariff classification, and trade compliance.',
    highlights: ['HS Code Classification', 'Import/Export Declarations', 'Duty & Tariff Optimization'],
  },
];

const servicesFaqs = [
  {
    q: 'How does KGS structure its service engagements?',
    a: 'We offer flexible engagement models tailored to client needs — including dedicated resource teams, managed service SLAs, and project-based milestones with scalable capacity.',
  },
  {
    q: 'Can KGS integrate with our existing enterprise software and tools?',
    a: 'Yes. Our teams seamlessly integrate into client ERPs, CRMs, ticketing systems, databases, cloud platforms, and proprietary software securely.',
  },
  {
    q: 'How does KGS ensure data security and compliance?',
    a: 'KGS maintains ISO 9001 and ISO 27001 certifications, adhering to GDPR, HIPAA, SOC 2, and strict NDA protocols with secure VPN and zero-trust access controls.',
  },
  {
    q: 'What is the typical ramp-up time for a new service engagement?',
    a: 'Depending on process complexity, onboarding and transition generally take between 1 to 3 weeks, including knowledge transfer, SOP documentation, and pilot validation.',
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero
        tag="Services & Solutions"
        title="Business Services for Changing Priorities"
        desc="Specialised capabilities across technology, data, engineering, finance, and business operations to support better enterprise performance."
        bgImage={heroImg}
        bgImageAlt="KGS Business Services"
        actions={[
          { label: 'Get Started', href: '#contact-form', variant: 'primary' },
          { label: 'Explore Case Studies', to: '/case-studies', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Intro Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="services-intro-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              What We Do
            </span>
            <h2 id="services-intro-heading" className="mb-6 font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Services That Support Better Business Operations
            </h2>
            <p className="font-body text-base font-medium leading-relaxed text-neutral-700 md:text-lg">
              Business requirements change as organisations grow. KGS provides specialised services across AI, data, engineering, finance, healthcare, cybersecurity, and operational workflows — delivering consistent execution, measurable efficiency, and scalable capacity.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section className="pb-20 md:pb-28 bg-white" aria-labelledby="all-services-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-12">
            <span className="mb-2 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Core Capabilities
            </span>
            <h2 id="all-services-heading" className="font-heading text-2xl font-bold text-neutral-900 md:text-3xl">
              Our Expertise Across Business Functions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((svc, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-8 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-kgs-primary/40 hover:bg-white hover:shadow-lg"
              >
                <div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors">
                    <Link href={`/services/${svc.slug}`}>{svc.title}</Link>
                  </h3>
                  <p className="mb-6 font-body text-sm font-medium leading-relaxed text-neutral-600">
                    {svc.desc}
                  </p>

                  <ul className="mb-8 space-y-2.5">
                    {svc.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 font-body text-xs font-medium text-neutral-700">
                        <FaCircleCheck className="mt-0.5 shrink-0 text-kgs-primary" size={13} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-200/70">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-2 font-heading text-xs font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors"
                  >
                    <span>Explore service details</span>
                    <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials Marquee */}
      <TestimonialsMarquee />

      {/* 6. FAQs */}
      <FaqSection
        title="Answers to Common Questions About Our Services"
        subtitle="FAQs"
        faqs={servicesFaqs}
      />

      {/* 7. Contact Form */}
      <ServiceContactForm
        title="Let's Discuss What Your Business Needs"
        desc="Whether the requirement involves a specific process, technology capability, or broader business function, KGS can bring the relevant expertise and delivery support."
      />
    </main>
  );
}
