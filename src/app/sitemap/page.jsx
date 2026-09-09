import Link from 'next/link';
import Image from 'next/image';
import heroBgPattern from '../../assets/images/blog/blog-inner.png';
import {
  FaBuilding,
  FaCubes,
  FaIndustry,
  FaGears,
  FaChartLine,
  FaBookOpen,
  FaScaleBalanced,
  FaArrowRight,
  FaCircleCheck,
} from 'react-icons/fa6';

export const metadata = {
  title: "Sitemap | Kotnani Global Solutions",
  description: "Browse the complete structured sitemap of Kotnani Global Solutions — all pages categorized across Company, Services, Industries, Products, Case Studies, Insights, and Legal.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/sitemap.html",
  },
  openGraph: {
    title: "Sitemap | Kotnani Global Solutions",
    description: "Browse the complete structured sitemap of Kotnani Global Solutions — all pages categorized across Company, Services, Industries, Products, Case Studies, Insights, and Legal.",
    url: "https://www.kotnaniglobal.com/sitemap.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Sitemap | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sitemap | Kotnani Global Solutions",
    description: "Browse the complete structured sitemap of Kotnani Global Solutions — all pages categorized across Company, Services, Industries, Products, Case Studies, Insights, and Legal.",
    images: ["/images/banner/home-hero.webp"],
  },
};

const sitemapData = [
  {
    category: 'Company & Culture',
    icon: FaBuilding,
    description: 'Learn about our journey, leadership team, global delivery hubs, and work culture.',
    links: [
      { title: 'Home', href: '/', desc: 'Kotnani Global Solutions homepage and core overview' },
      { title: 'About Us', href: '/about', desc: 'Mission, vision, core values, and corporate history' },
      { title: 'Management Team', href: '/management-team', desc: 'Executive leadership bios and practice heads' },
      { title: 'Our Work Culture', href: '/our-work-culture', desc: 'Life at KGS, values, and career development' },
      { title: 'Certifications & Compliance', href: '/certifications', desc: 'ISO 9001, ISO 27001, GDPR, and HIPAA accreditations' },
      { title: 'Corporate Social Responsibility', href: '/corporate-social-responsibility', desc: 'ESG commitments, solar initiatives, and community impact' },
      { title: 'Global Locations', href: '/locations', desc: 'Delivery centers in India, USA, Spain, and UAE' },
      { title: 'Careers', href: '/careers', desc: 'Open roles, job openings, and career growth' },
      { title: 'Customers & Brands', href: '/customers', desc: 'Enterprise clientele and brands that trust KGS' },
      { title: 'Testimonials & Reviews', href: '/testimonials', desc: 'Client feedback and verified 5-star reviews' },
      { title: 'News & Events', href: '/news-and-events', desc: 'Annual summits, media releases, and announcements' },
    ],
  },
  {
    category: 'Services & Capabilities',
    icon: FaGears,
    description: 'Specialised business process outsourcing, technology transformation, and AI workflows.',
    links: [
      { title: 'Services Hub', href: '/services', desc: 'Overview of all KGS enterprise service capabilities' },
      { title: 'Business Process Automation', href: '/services/business-process-automation', desc: 'Intelligent automation, RPA, and back-office orchestration' },
      { title: 'Customs Brokerage Services', href: '/services/customs-brokerage', desc: 'Tariff classification, entry filings, and cross-border trade' },
      { title: 'Generative AI Services', href: '/services/generative-ai', desc: 'Enterprise LLMs, agentic workflows, and document AI' },
      { title: 'Data Management Services', href: '/services/data-management', desc: 'Master data governance, quality audits, and data cleansing' },
      { title: 'Logistics Operations', href: '/services/logistics', desc: 'Freight tracking, invoice audit, and dispatch coordination' },
    ],
  },
  {
    category: 'Industry Practices',
    icon: FaIndustry,
    description: 'Tailored domain solutions built for regulated and fast-growing enterprise sectors.',
    links: [
      { title: 'Industries Hub', href: '/industries', desc: 'Overview of all industry sectors and domain practices' },
      { title: 'Banking & Financial Services', href: '/industries/banking-finance', desc: 'Loan operations, KYC/AML review, and payment processing' },
      { title: 'Energy & Utilities', href: '/industries/energy-utilities', desc: 'Grid asset tracking, meter data management, and compliance' },
      { title: 'Mortgage & Lending', href: '/industries/mortgage', desc: 'Loan onboarding, title review, and underwriting support' },
      { title: 'E-Commerce & Retail', href: '/industries/ecommerce', desc: 'Catalog data management, order servicing, and omnichannel support' },
      { title: 'Insurance Services', href: '/industries/insurance', desc: 'Claims triage, policy intake, and underwriting assistance' },
    ],
  },
  {
    category: 'Platforms & Products',
    icon: FaCubes,
    description: 'Proprietary enterprise software products and digital operations platforms.',
    links: [
      { title: 'Platforms & Products Hub', href: '/products', desc: 'Overview of proprietary software developed by KGS' },
      { title: 'MapMyClasses', href: '/products/mapmyclasses', desc: 'Smart academic scheduling, attendance, and campus management' },
      { title: 'MapLibrarySuite', href: '/products/maplibrarysuite', desc: 'Digital library cataloging, RFID tracking, and circulation system' },
    ],
  },
  {
    category: 'Case Studies & Success Stories',
    icon: FaChartLine,
    description: 'Real-world results, measurable outcomes, and enterprise transformation projects.',
    links: [
      { title: 'Case Studies Hub', href: '/case-studies', desc: 'Search and filter all enterprise case studies by industry' },
      { title: 'Bank Loan Processing', href: '/case-studies/business-process-automation/bank-loan-processing', desc: 'Streamlined 25,000+ monthly loan applications for a top bank' },
      { title: 'Banking Operations Management', href: '/case-studies/business-process-automation/banking-operations-management', desc: 'Streamlined 1M+ monthly transactions across 50+ workflows' },
      { title: 'ETL & ELT Pipeline Development', href: '/case-studies/data-engineering/etl-elt-development', desc: 'Built 60+ pipelines processing 25M+ records daily' },
      { title: 'Utility Grid Operations', href: '/case-studies/data-engineering/grid-operations', desc: 'Improved real-time visibility across 100,000+ grid assets' },
      { title: 'Banking Governance, Risk & Compliance', href: '/case-studies/data-management/banking-governance-risk-and-compliance', desc: 'Standardised 150+ risk & compliance controls for a global bank' },
      { title: 'Energy Data Management', href: '/case-studies/data-management/energy-data-management', desc: 'Standardised 20M+ energy records with 99%+ accuracy' },
    ],
  },
  {
    category: 'Insights & Thought Leadership',
    icon: FaBookOpen,
    description: 'Practical analysis, research articles, and expert perspectives on AI and BPO.',
    links: [
      { title: 'Insights Hub', href: '/insights', desc: 'Read latest publications, articles, and whitepapers' },
      { title: 'Using Revenue Cycle Analytics to Drive Better Decisions', href: '/insights/healthcare-bpo/enhance-revenue-cycle-management-using-analytics', desc: 'Strategies for reducing patient claim denials and optimizing billing' },
      { title: 'Optimizing Global Freight Operations with Automation', href: '/insights/logistics-bpo/global-freight-operations', desc: 'Eliminating freight friction and automating logistics audits' },
    ],
  },
  {
    category: 'Contact & Legal',
    icon: FaScaleBalanced,
    description: 'Direct inquiries, support channels, terms of service, and privacy policies.',
    links: [
      { title: 'Contact Us', href: '/contact', desc: 'Global contact numbers, email channels, and consultation booking' },
      { title: 'Privacy Policy', href: '/privacy-policy', desc: 'GDPR compliance, data privacy, and security disclosures' },
      { title: 'Terms & Conditions', href: '/terms-and-conditions', desc: 'Website usage terms, intellectual property, and agreements' },
      { title: 'Visual Sitemap', href: '/sitemap', desc: 'Complete interactive site directory (Current Page)' },
    ],
  },
];

export default function SitemapPage() {
  const totalPages = sitemapData.reduce((acc, cat) => acc + cat.links.length, 0);

  return (
    <main>
      {/* 1. Signature KGS Hero Banner for Header Visibility */}
      <section className="relative overflow-hidden bg-[#9E0C52] pt-28 pb-14 md:pt-36 md:pb-20 text-left">
        {/* Background Texture Pattern */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-90">
          <Image
            src={heroBgPattern}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 mx-auto w-[92%] max-w-[1920px]">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block rounded-full bg-white/15 border border-white/25 px-4 py-1.5 font-heading text-xs font-semibold text-white tracking-wide backdrop-blur-xs">
              Site Directory
            </span>
            <span className="rounded-full bg-white/25 px-3 py-1 font-heading text-xs font-bold text-white">
              {totalPages} Pages Available
            </span>
          </div>

          <h1 className="mb-4 font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
            Sitemap
          </h1>
          <p className="max-w-2xl font-body text-sm font-medium text-white/85 sm:text-base">
            A complete structured directory of every page across Kotnani Global Solutions — click any link to navigate directly.
          </p>

          {/* Inline Breadcrumb */}
          <nav className="mt-6 flex items-center gap-2 font-body text-xs text-white/75" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Sitemap</span>
          </nav>
        </div>
      </section>

      {/* 2. Categorized Sitemap Directory */}
      <section className="py-16 md:py-24 bg-white" aria-label="Sitemap Directory">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="space-y-16">
            {sitemapData.map((group, groupIdx) => (
              <div key={groupIdx} className="border-b border-neutral-200 pb-16 last:border-b-0 last:pb-0">
                {/* Category Header */}
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-kgs-primary/10 text-kgs-primary">
                      <group.icon size={20} />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-neutral-900 md:text-3xl">
                        {group.category}
                      </h2>
                      <p className="font-body text-xs font-medium text-neutral-500 sm:text-sm">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-neutral-100 px-3.5 py-1 font-heading text-xs font-bold text-neutral-600 border border-neutral-200">
                    {group.links.length} Pages
                  </span>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.href}
                      className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-5 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-kgs-primary/50 hover:bg-white hover:shadow-md"
                    >
                      <div>
                        <div className="mb-2 flex items-start justify-between gap-2">
                          <h3 className="font-heading text-base font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors line-clamp-1">
                            {link.title}
                          </h3>
                          <FaArrowRight
                            size={12}
                            className="mt-1 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-kgs-primary"
                          />
                        </div>
                        <p className="font-body text-xs font-medium leading-relaxed text-neutral-500 line-clamp-2">
                          {link.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-2 border-t border-neutral-200/60 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                        <span className="truncate">{link.href}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
