import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import { FaShieldHalved, FaAward, FaLock, FaFileShield, FaCertificate } from 'react-icons/fa6';
import heroImg from '../../assets/images/banner/case-studies-bg.png';

export const metadata = {
  title: "Certifications & Compliance | Kotnani Global Solutions",
  description: "Globally certified for quality and security under ISO 9001:2015, ISO 27001:2022, GDPR, HIPAA, and industry compliance frameworks.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/certifications.html",
  },
  openGraph: {
    title: "Certifications & Compliance | Kotnani Global Solutions",
    description: "Globally certified for quality and security under ISO 9001:2015, ISO 27001:2022, GDPR, HIPAA, and industry compliance frameworks.",
    url: "https://www.kotnaniglobal.com/certifications.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Certifications & Compliance | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Certifications & Compliance | Kotnani Global Solutions",
    description: "Globally certified for quality and security under ISO 9001:2015, ISO 27001:2022, GDPR, HIPAA, and industry compliance frameworks.",
    images: ["/images/banner/home-hero.webp"],
  },
};

const certs = [
  {
    icon: FaAward,
    badge: 'Quality Standard',
    title: 'ISO 9001:2015 Quality Management System',
    desc: 'Certified quality management processes ensuring rigorous SLA governance, customer satisfaction tracking, continuous improvement, and operational accuracy across all delivery centers.',
  },
  {
    icon: FaShieldHalved,
    badge: 'Information Security',
    title: 'ISO 27001:2022 Information Security Standards',
    desc: 'Comprehensive information security management system (ISMS) governing data confidentiality, integrity, vulnerability management, access controls, and zero-trust infrastructure.',
  },
  {
    icon: FaLock,
    badge: 'Data Privacy',
    title: 'GDPR Compliance',
    desc: 'Strict adherence to European Union General Data Protection Regulation requirements governing customer consent, cross-border data transfer, encryption, and subject rights.',
  },
  {
    icon: FaFileShield,
    badge: 'Healthcare Security',
    title: 'HIPAA & HITECH Compliance',
    desc: 'Full compliance with Protected Health Information (PHI) safeguarding protocols, business associate agreements (BAA), and administrative safeguards for healthcare operations.',
  },
];

export default function CertificationsPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Trust & Standards"
        title="Globally Certified for Quality and Security"
        desc="Rigorous international certifications, data privacy safeguards, and operational quality frameworks protecting our clients' critical processes."
        bgImage={heroImg}
        bgImageAlt="KGS Certifications & Standards"
        actions={[
          { label: 'Discuss Security Requirements', href: '#contact-form', variant: 'primary' },
          { label: 'View Case Studies', to: '/case-studies', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Certifications Grid */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="certs-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Accreditations
            </span>
            <h2 id="certs-heading" className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Enterprise Compliance & Quality Frameworks
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {certs.map((c, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-8 shadow-xs transition duration-300 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-kgs-primary/10 text-kgs-primary">
                    <c.icon size={22} />
                  </div>
                  <span className="rounded-full bg-kgs-primary/10 px-3 py-1 font-heading text-xs font-semibold text-kgs-primary">
                    {c.badge}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-neutral-900">{c.title}</h3>
                <p className="font-body text-base font-medium leading-relaxed text-neutral-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Form */}
      <ServiceContactForm
        title="Need Specific Compliance Details?"
        desc="Request our security compliance briefs, audit attestations, and NDA documentation."
      />
    </main>
  );
}
