import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import { FaLeaf, FaHandsHoldingChild, FaSolarPanel, FaHeartPulse } from 'react-icons/fa6';
import heroImg from '../../assets/images/banner/qualified-to-excel.webp';

export const metadata = {
  title: "Corporate Social Responsibility | Kotnani Global Solutions",
  description: "Committed to responsible growth — discover KGS sustainability initiatives, community welfare, education support, and environmental conservation.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/corporate-social-responsibility.html",
  },
  openGraph: {
    title: "Corporate Social Responsibility | Kotnani Global Solutions",
    description: "Committed to responsible growth — discover KGS sustainability initiatives, community welfare, education support, and environmental conservation.",
    url: "https://www.kotnaniglobal.com/corporate-social-responsibility.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Corporate Social Responsibility | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Corporate Social Responsibility | Kotnani Global Solutions",
    description: "Committed to responsible growth — discover KGS sustainability initiatives, community welfare, education support, and environmental conservation.",
    images: ["/images/banner/home-hero.webp"],
  },
};

const csrProjects = [
  {
    icon: FaSolarPanel,
    tag: 'Renewable Energy',
    title: 'Solar-Powered Delivery Facilities',
    desc: 'Our flagship development centers operate on 50%+ renewable energy, significantly cutting greenhouse gas emissions.',
  },
  {
    icon: FaLeaf,
    tag: 'Environment',
    title: 'Urban Afforestation & Tree Planting',
    desc: 'Annual greening initiatives planting thousands of native saplings in urban ecosystems and community parks.',
  },
  {
    icon: FaHeartPulse,
    tag: 'Community Health',
    title: 'Free Medical Camps & Health Checkups',
    desc: 'Providing preventive health screenings, eye checkups, and diagnostic camps for underserved local neighborhoods.',
  },
  {
    icon: FaHandsHoldingChild,
    tag: 'Education',
    title: 'Digital Literacy for Rural Students',
    desc: 'Donating computers, software tools, and digital library systems to rural schools to foster tech literacy.',
  },
];

export default function CSRPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Social Impact"
        title="Committed to Responsible Growth"
        desc="Balancing enterprise performance with environmental sustainability, social equity, and meaningful community investment."
        bgImage={heroImg}
        bgImageAlt="KGS Corporate Social Responsibility"
        actions={[
          { label: 'Partner With Us', href: '#contact-form', variant: 'primary' },
          { label: 'View ESG Services', to: '/services/esg-consulting', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. CSR Projects Grid */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="csr-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Giving Back
            </span>
            <h2 id="csr-heading" className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Initiatives That Create Real Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {csrProjects.map((p, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-8 shadow-xs transition duration-300 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-kgs-primary/10 text-kgs-primary">
                    <p.icon size={22} />
                  </div>
                  <span className="rounded-full bg-kgs-primary/10 px-3 py-1 font-heading text-xs font-semibold text-kgs-primary">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-neutral-900">{p.title}</h3>
                <p className="font-body text-base font-medium leading-relaxed text-neutral-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Form */}
      <ServiceContactForm
        title="Join Hands in Our CSR Initiatives"
        desc="Collaborate with KGS on community empowerment, environmental restoration, and youth digital literacy programs."
      />
    </main>
  );
}
