import Link from 'next/link'

import heroBg from '../../assets/images/services/customs-brokerage/custom-brokerage.webp'
import introImage from '../../assets/images/services/customs-brokerage/fs-custom-brokerage.webp'

// TechGrid Capability Icons
import iconCustomsDoc from '../../assets/images/services/customs-brokerage/icons/customs-documentation.svg'
import iconHsTariff from '../../assets/images/services/customs-brokerage/icons/hs-tariff-classification.svg'
import iconDutyTax from '../../assets/images/services/customs-brokerage/icons/duty-and-tax-calculation.svg'
import iconTradeCompliance from '../../assets/images/services/customs-brokerage/icons/trade-compliance.svg'
import iconImportExport from '../../assets/images/services/customs-brokerage/icons/import-and-export-processing.svg'
import iconValuation from '../../assets/images/services/customs-brokerage/icons/customs-valuation.svg'
import iconFtaDuty from '../../assets/images/services/customs-brokerage/icons/fta-and-duty-optimization.svg'
import iconDeniedParty from '../../assets/images/services/customs-brokerage/icons/denied-party-screening.svg'

// WhyUs Icons
import iconFasterClearance from '../../assets/images/services/customs-brokerage/icons/faster-customs-clearance.svg'
import iconLowerRisk from '../../assets/images/services/customs-brokerage/icons/lower-compliance-risk.svg'
import iconReducedDuty from '../../assets/images/services/customs-brokerage/icons/reduced-duty-spend.svg'
import iconStrongerCompliance from '../../assets/images/services/customs-brokerage/icons/stronger-trade-compliance.svg'
import iconBusinessGrowth from '../../assets/images/services/customs-brokerage/icons/built-for-business-growth.svg'
import iconAuditReady from '../../assets/images/services/customs-brokerage/icons/audit-ready-documentation.svg'
import iconMultiCountry from '../../assets/images/services/customs-brokerage/icons/multi-country-expertise.svg'
import iconCostControl from '../../assets/images/services/customs-brokerage/icons/greater-cost-control.svg'

// Related Blogs Images
import blogImg1 from '../../assets/images/blog/it-blog-title-01.webp'
import blogImg2 from '../../assets/images/blog/it-blog-title-03.webp'
import blogImg3 from '../../assets/images/blog/it-blog-title-05.webp'

const customsBrokerage = {
  slug: 'customs-brokerage',
  breadcrumbLabel: 'Custom Brokerage',

  hero: {
    tag: 'Custom Brokerage',
    title: 'Customs Brokerage Services for International Trade',
    bgImage: heroBg,
    actions: [
      { label: 'Talk to an Expert', href: 'tel:+918022450187', variant: 'primary' },
      { label: 'See Our Capabilities', to: '/contact', variant: 'outline' },
    ],
  },

  intro: {
  title: 'Get Accurate Customs Brokerage for Global Trade',
  paragraphs: [
    (
      <>
        International trade demands accuracy at every stage. KGS manages{' '}
        <Link 
          href="/services/customs-brokerage" 
          className="font-bold text-kgs-primary hover:underline"
        >
          customs documentation
        </Link>
        , <b>tariff classification</b>, and <strong>duty calculations</strong> through experienced customs brokers, enabling faster customs clearance, fewer disruptions, and smoother cross-border trade.
      </>
    ),
    (
      <>
        Improved documentation accuracy and proactive classification reduce border delays while giving your teams greater predictability in{' '}
        <Link href="/about" className="font-semibold text-kgs-primary hover:underline">
          shipment timelines
        </Link>{' '}
        and landed costs.
      </>
    ),
  ],
  image: introImage,
  imageAlt: 'KGS customs brokerage team',
},

  techGrid: {
    tag: 'What we do',
    heading: 'Customs Brokerage Solutions for Compliant Shipments',
    desc: 'Our portfolio combines strategy, development, deployment, and governance to address complex business challenges across customer experience and enterprise productivity.',
    cards: [
      {
        icon: iconCustomsDoc,
        title: 'Customs Documentation',
        desc: 'Our team prepares accurate customs documentation and filing records that support timely clearance and reduce your documentation errors.',
      },
      {
        icon: iconHsTariff,
        title: 'HS Tariff Classification',
        desc: 'At KGS, you get reliable HS code classification that assign the correct tariff codes, supporting compliant declarations and accurate duty assessment.',
      },
      {
        icon: iconDutyTax,
        title: 'Duty & Tax Calculation',
        desc: 'We calculate duties, taxes, and applicable charges with precision, giving you greater visibility into landed costs and regulatory obligations.',
      },
      {
        icon: iconTradeCompliance,
        title: 'Trade Compliance',
        desc: 'Our domain-certified team manages regulatory requirements through regulatory reviews, screening, and filing practices that support compliant cross-border trade.',
      },
      {
        icon: iconImportExport,
        title: 'Import & Export Processing',
        desc: 'Our import and export customs clearance specialists manage filings from submission through release to keep freight moving efficiently.',
      },
      {
        icon: iconValuation,
        title: 'Customs Valuation',
        desc: 'KGS provides you with accurate customs valuation backed by complete documentation and accepted valuation methods that withstand regulatory review.',
      },
      {
        icon: iconFtaDuty,
        title: 'FTA & Duty Optimization',
        desc: 'We review trade agreements and duty structures to identify legitimate savings while maintaining full compliance with applicable regulations.',
      },
      {
        icon: iconDeniedParty,
        title: 'Denied Party Screening',
        desc: 'Our screening process checks transactions against restricted party lists before shipment, strengthening compliance across international trade.',
      },
    ],
  },

  platformLogos: {
    heading: 'Make Smarter Customs Decisions for Stronger Trade Performance.',
    desc: 'AI enhances customs brokerage through faster documentation, classification, and compliance. KGS implements intelligent automation for customs documentation and filings, identifying classification risks before submission, while real-time analytics improve duty visibility, compliance, and customs clearance.',
  },

  whyUs: [
    {
      icon: iconFasterClearance,
      title: 'Faster Customs Clearance',
      desc: 'Complete, accurate filings support faster clearance and reduce shipment delays at the border.',
    },
    {
      icon: iconLowerRisk,
      title: 'Lower Compliance Risk',
      desc: 'Accurate tariff classification and valuation reduce exposure to penalties, disputes, and costly rework.',
    },
    {
      icon: iconReducedDuty,
      title: 'Reduced Duty Spend',
      desc: 'FTA reviews and duty consulting identify legitimate opportunities to lower landed costs.',
    },
    {
      icon: iconStrongerCompliance,
      title: 'Stronger Trade Compliance',
      desc: 'Ongoing oversight keeps compliance aligned with changing regulations across international markets.',
    },
    {
      icon: iconBusinessGrowth,
      title: 'Built for Business Growth',
      desc: 'Additional shipment volumes, new trade lanes, and changing demand are handled without disrupting clearance timelines.',
    },
    {
      icon: iconAuditReady,
      title: 'Audit-Ready Documentation',
      desc: 'Clear, traceable records strengthen audit readiness and support confident responses during regulatory reviews.',
    },
    {
      icon: iconMultiCountry,
      title: 'Multi-Country Expertise',
      desc: 'Consistent delivery across jurisdictions simplify cross-border trade through a single accountable partner.',
    },
    {
      icon: iconCostControl,
      title: 'Greater Cost Control',
      desc: 'Accurate duty assessment, valuation, and compliance improve financial predictability across import and export activity.',
    },
  ],

  testimonials: [
    {
      quote: 'KGS brought greater structure and consistency to our customs brokerage operations. Their team improved documentation accuracy, streamlined customs workflows, and helped us manage growing shipment volumes while maintaining compliance across multiple international trade lanes.',
      role: 'Vice President, Customs Brokerage Operations',
      company: 'Global Freight Forwarding Company',
    },
    {
      quote: 'Our import and export operations involve thousands of customs transactions every month. KGS strengthened our operational processes, improved shipment visibility, and reduced administrative effort, allowing our specialists to focus on complex trade compliance requirements.',
      role: 'Director, Global Trade Operations',
      company: 'International Logistics Provider',
    },
    {
      quote: 'What impressed us most was KGS’s understanding of customs brokerage and international trade operations. Their team integrated seamlessly with our business, improved turnaround times, and consistently delivered high-quality operational support across multiple countries.',
      role: 'Chief Operating Officer',
      company: 'Customs Brokerage & Supply Chain Company',
    },
    {
      quote: 'KGS helped us improve the accuracy of customs documentation, strengthen trade compliance processes, and manage operational exceptions more efficiently. Their expertise has enabled us to deliver faster and more reliable service to our customers.',
      role: 'Head of Customs & Trade Compliance',
      company: 'Global Import & Export Organization',
    },
    {
      quote: 'As our international business expanded, customs operations became increasingly complex. KGS adapted quickly to our requirements, improved coordination across ports and trade lanes, and helped us maintain operational efficiency while meeting regulatory expectations.',
      role: 'Director, International Trade Services',
      company: 'Global Manufacturing Enterprise',
    },
    {
      quote: 'KGS has become a trusted extension of our customs brokerage team. Their proactive communication, operational discipline, and deep understanding of cross-border trade have significantly improved process visibility and customer service across our logistics network.',
      role: 'Senior Vice President, Global Logistics & Customs',
      company: 'Third-Party Logistics Provider',
    },
    {
      quote: 'KGS consistently delivers dependable customs brokerage support backed by strong process expertise and attention to detail. Their ability to scale operations, manage documentation efficiently, and support evolving trade requirements has made them an invaluable long-term partner.',
      role: 'Chief Executive Officer',
      company: 'International Customs & Logistics Services Company',
    },
  ],

  faq: [
    {
      question: 'What do your customs brokerage services include?',
      answer: 'Our work cover import and export clearance, tariff classification, duty calculation, customs documentation, regulatory filings, and post-entry support. The service is tailored to your products, trade lanes, and compliance requirements, providing a consistent approach across high-volume and multi-country trade.',
    },
    {
      question: 'How do you maintain customs compliance across multiple countries?',
      answer: 'Our specialists monitor regulatory changes and apply country-specific requirements across all active trade lanes. Standardized review processes, accurate classifications, and documented quality checks strengthen compliance while reducing filing errors and regulatory risk.',
    },
    {
      question: 'Do you support both import and export customs clearance?',
      answer: 'Yes. KGS provides import and export customs clearance services, including declarations, supporting documentation, duty assessments, and regulatory filings. Dedicated specialists coordinate the entire clearance process while maintaining compliance with origin and destination requirements.',
    },
    {
      question: 'How do you improve customs accuracy and reduce delays?',
      answer: 'Accurate tariff classification, complete filing records, and structured quality reviews reduce documentation errors that commonly delay shipments. Combined with efficient filing, this approach supports faster clearance and more predictable cross-border movement.',
    },
    {
      question: 'Can you integrate with our existing trade and logistics platforms?',
      answer: 'Yes. KGS works with MIC Customs Solutions, E2open (Amber Road), Descartes, CargoWise One, and SAP GTS, allowing customs brokerage workflows to align with your existing trade environment. This approach preserves established processes while improving visibility and consistency across customs activities.',
    },
    {
      question: 'How do you prepare businesses for customs audits and regulatory reviews?',
      answer: 'Complete documentation, traceable records, and disciplined compliance practices strengthen readiness and support regulatory reviews. Supporting information remains organized throughout the shipment lifecycle, providing clear documentation whenever customs authorities request additional evidence.',
    },
  ],

  relatedBlogs: [
    {
      image: blogImg1,
      imageAlt: 'How Zero Trust Architecture Closes the Gaps Legacy Security Missed',
      title: 'How Zero Trust Architecture Closes the Gaps Legacy Security Missed',
      desc: 'Perimeter defenses assume everything inside the network is safe.',
      tags: ['Cybersecurity', 'Zero Trust'],
      metaTags: ["Expert's View", 'Featured Article'],
      to: '/insights',
    },
    {
      image: blogImg2,
      imageAlt: "Building DevSecOps Pipelines That Don't Slow Teams Down",
      title: "Building DevSecOps Pipelines That Don't Slow Teams Down",
      desc: 'Security gates get skipped when they cost developers time.',
      tags: ['DevSecOps', 'CI/CD'],
      metaTags: ["Expert's View", 'Featured Article'],
      to: '/insights',
    },
    {
      image: blogImg3,
      imageAlt: 'Securing APIs at Scale Without Breaking Integrations',
      title: 'Securing APIs at Scale Without Breaking Integrations',
      desc: 'Every new endpoint is a new attack surface.',
      tags: ['API Security', 'Cloud'],
      metaTags: ["Expert's View", 'Featured Article'],
      to: '/insights',
    },
  ],

  contactForm: {
    title: 'Your Partner for Premier Customs Brokerage Services',
    desc: 'Contact our specialists for solutions aligned with your business goals.',
    defaultService: 'Custom Brokerage',
  },
}

export default customsBrokerage
