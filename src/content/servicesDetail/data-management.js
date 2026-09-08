import Link from 'next/link'

import heroBg from '../../assets/images/services/data-management/data-management.webp'
import introImage from '../../assets/images/services/data-management/fs-data-management.webp'

// TechGrid Capability Icons
import iconDataEntry from '../../assets/images/services/data-management/icons/data-entry-and-digitization.svg'
import iconDataCleansing from '../../assets/images/services/data-management/icons/data-cleansing-and-deduplication.svg'
import iconDataProcessing from '../../assets/images/services/data-management/icons/data-processing-and-transformation.svg'
import iconDataEnrichment from '../../assets/images/services/data-management/icons/data-enrichment-and-validation.svg'
import iconCatalogProduct from '../../assets/images/services/data-management/icons/catalog-and-product-data.svg'
import iconDatabaseMaint from '../../assets/images/services/data-management/icons/database-maintenance.svg'
import iconMasterDataMgmt from '../../assets/images/services/data-management/icons/master-data-management.svg'
import iconRecordsMgmt from '../../assets/images/services/data-management/icons/records-management.svg'

// WhyUs Icons
import iconConfidentDecisions from '../../assets/images/services/data-management/icons/confident-decisions.svg'
import iconAccuracyScale from '../../assets/images/services/data-management/icons/accuracy-at-scale.svg'
import iconSpecialistsFocus from '../../assets/images/services/data-management/icons/specialists-focus-on-higher-value-work.svg'
import iconCleanDataStaysClean from '../../assets/images/services/data-management/icons/clean-data-that-stays-clean.svg'
import iconScalesBusiness from '../../assets/images/services/data-management/icons/scales-with-your-business.svg'
import iconQualityBuiltIn from '../../assets/images/services/data-management/icons/quality-built-into-every-process.svg'
import iconSecureDesign from '../../assets/images/services/data-management/icons/secure-by-design.svg'
import iconResultsMeasure from '../../assets/images/services/data-management/icons/results-you-can-measure.svg'

// Related Blogs Images
import blogImg1 from '../../assets/images/blog/it-blog-title-01.webp'
import blogImg2 from '../../assets/images/blog/it-blog-title-03.webp'
import blogImg3 from '../../assets/images/blog/it-blog-title-05.webp'

const dataManagement = {
  slug: 'data-management',
  breadcrumbLabel: 'Data Management',

  hero: {
    tag: 'Data Management',
    title: 'Make Better Business Decisions on Accurate, Consistent Data',
    desc: 'Get your enterprise data accurate, governed, and ready to use.',
    bgImage: heroBg,
    actions: [
      { label: 'Talk to an Expert', href: 'tel:+918022450187', variant: 'primary' },
      { label: 'Audit Your Data', to: '/contact', variant: 'outline' },
    ],
  },

  intro: {
    title: 'One Trusted View Across Every System',
    paragraphs: [
      (
        <>
          From master data management and cloud data migration to ongoing governance and maintenance, KGS creates a single source of truth for your customers, products, vendors, and business records, ensuring every team works with the same information.
        </>
      ),
      (
        <>
          Teams can make faster, confident decisions, while shared data standards improve alignment across departments. It also ensures information remains reliable and scalable as the business grows.
        </>
      ),
    ],
    image: introImage,
    imageAlt: 'KGS data management and governance team collaborating',
  },

  techGrid: {
    tag: 'What we do',
    heading: 'Get More Business Value from Your Data',
    desc: 'Get comprehensive support for data management, governance, integration, and quality management across every business system and data source.',
    cards: [
      {
        icon: iconDataEntry,
        title: 'Data Entry & Digitization',
        desc: 'We convert paper records, scanned files, and legacy documents into structured digital assets that remain searchable, accessible, and ready for operational use.',
      },
      {
        icon: iconDataCleansing,
        title: 'Data Cleansing & Deduplication',
        desc: 'Our specialists eliminate duplicate records, correct inaccuracies, and standardize datasets, ensuring reporting, analytics, and daily operations rely on trustworthy information.',
      },
      {
        icon: iconDataProcessing,
        title: 'Data Processing & Transformation',
        desc: 'KGS formats, transforms, and prepares raw information to meet the requirements of downstream systems, reducing manual effort and improving usability.',
      },
      {
        icon: iconDataEnrichment,
        title: 'Data Enrichment & Validation',
        desc: 'We complete missing fields and validate records against trusted sources to improve completeness, accuracy, and long-term reliability.',
      },
      {
        icon: iconCatalogProduct,
        title: 'Catalog & Product Data',
        desc: 'Organizations depend on consistent product information. KGS standardizes catalogs and synchronizes listings to maintain accuracy across sales channels and marketplaces.',
      },
      {
        icon: iconDatabaseMaint,
        title: 'Database Maintenance',
        desc: 'We ensure records remain accurate, up to date, and ready for use through continuous monitoring, quality checks, and ongoing maintenance.',
      },
      {
        icon: iconMasterDataMgmt,
        title: 'Master Data Management',
        desc: 'Through master data management services, KGS establishes a trusted version of customer, vendor, and product data to improve consistency across systems.',
      },
      {
        icon: iconRecordsMgmt,
        title: 'Records Management',
        desc: 'KGS organizes documents and business records into structured, audit-ready repositories that make retrieval fast, reliable, and straightforward.',
      },
    ],
  },

  platformLogos: {
    heading: 'Built Around Your Data. Designed for Your Business.',
    desc: 'You don’t need to replace your technology stack to improve your data. KGS delivers enterprise data management and data engineering services that integrate seamlessly with your existing platforms, processes, and teams.',
  },

  whyUs: [
    {
      icon: iconConfidentDecisions,
      title: 'Confident Decisions',
      desc: 'Reliable data removes uncertainty from reporting, planning, and day-to-day operations, giving leadership teams confidence in every decision.',
    },
    {
      icon: iconAccuracyScale,
      title: 'Accuracy at Scale',
      desc: 'KGS maintains exceptional accuracy standards across millions of records, delivering consistent results regardless of data volume or business complexity.',
    },
    {
      icon: iconSpecialistsFocus,
      title: 'Specialists Focus on Higher-Value Work',
      desc: 'Internal teams spend less time correcting records and more time driving initiatives that improve performance, customer experience, and business outcomes.',
    },
    {
      icon: iconCleanDataStaysClean,
      title: 'Clean Data That Stays Clean',
      desc: 'One-time cleanup projects rarely last. Continuous management ensures data quality remains consistent long after implementation.',
    },
    {
      icon: iconScalesBusiness,
      title: 'Scales With Your Business',
      desc: 'KGS scales from thousands to millions of records, supporting big data management initiatives without compromising quality or turnaround times.',
    },
    {
      icon: iconQualityBuiltIn,
      title: 'Quality Built into Every Process',
      desc: 'Automated validation and human review work together to identify discrepancies before they affect reporting, analytics, or downstream systems.',
    },
    {
      icon: iconSecureDesign,
      title: 'Secure by Design',
      desc: 'Every engagement with KGS operates under ISO 27001:2022 standards with role-based access controls, encryption, and complete audit visibility.',
    },
    {
      icon: iconResultsMeasure,
      title: 'Results You Can Measure',
      desc: 'Most organizations begin to see measurable improvements in data quality, consistency, and operational efficiency within the first month.',
    },
  ],

  testimonials: [
    {
      quote: 'Our business depended on data from multiple systems that rarely aligned. KGS created a structured data management framework that improved accuracy, eliminated duplication, and gave every business function greater confidence in the information they use every day.',
      role: 'Vice President, Enterprise Data Management',
      company: 'Global Retail Enterprise',
    },
    {
      quote: 'KGS brought discipline to our data operations by improving governance, master data management, and quality controls. Their expertise has enabled us to build a reliable data foundation that supports analytics, compliance, and long-term business growth.',
      role: 'Director, Data Governance',
      company: 'Healthcare Organization',
    },
    {
      quote: 'We needed a partner that understood both data and business operations. KGS streamlined our data management processes, improved consistency across enterprise systems, and delivered a level of accuracy that has significantly enhanced operational efficiency.',
      role: 'Chief Information Officer',
      company: 'Manufacturing Company',
    },
    {
      quote: 'KGS became an extension of our enterprise data team from the very beginning. Their structured approach to data quality, validation, and governance has improved trust in our information while reducing the effort required to manage it.',
      role: 'Head of Master Data Management',
      company: 'Global Logistics Company',
    },
    {
      quote: 'What impressed us most was KGS’s ability to solve complex data challenges without disrupting our business. They modernized our data management practices, strengthened governance, and gave us a scalable foundation for future digital initiatives.',
      role: 'Senior Vice President, Digital Transformation',
      company: 'Consumer Goods Enterprise',
    },
    {
      quote: 'KGS has helped us establish a single source of trusted business information across multiple departments. Their professionalism, technical expertise, and commitment to data excellence have made them an invaluable long-term partner.',
      role: 'Chief Analytics & Data Officer',
      company: 'Global Technology Services Company',
    },
  ],

  faq: [
    {
      question: 'Do you provide one-time projects or ongoing services?',
      answer: 'Both. KGS supports one-time data initiatives and ongoing engagements. Services can cover data cleanup, migration, quality management, integration, and governance, tailored to your operational requirements, data volumes, and long-term priorities.',
    },
    {
      question: 'Can you support cloud migrations?',
      answer: 'Yes. We offer cloud data migration services to securely and accurately move information between platforms. Our specialists manage validation, mapping, and transfer processes while minimizing operational disruption and maintaining data integrity.',
    },
    {
      question: 'How do you maintain data quality over time?',
      answer: 'Our data quality services combine continuous monitoring, validation rules, standardization, and governance practices. KGS establishes measurable quality standards to maintain accurate, consistent, and reliable information as data changes across systems throughout its lifecycle.',
    },
    {
      question: 'Do you support governance initiatives?',
      answer: 'Yes. Our specialists establish ownership, accountability, policies, and controls. We develop data governance frameworks aligned with organizational requirements to maintain consistent standards across enterprise data environments.',
    },
    {
      question: 'Can you integrate data from multiple systems?',
      answer: 'Yes. Our ETL processes consolidate information from multiple applications, databases, and platforms. KGS manages extraction, transformation, and integration to create consistent, accessible data across connected enterprise systems.',
    },
    {
      question: 'How do you ensure compliance and security?',
      answer: 'KGS incorporates security controls, access management, audit trails, and governance practices into every engagement. Our approach supports regulatory requirements while protecting sensitive information across enterprise data environments.',
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
    title: 'Your Partner for Enterprise Data Management',
    desc: 'Contact our specialists for solutions aligned with your business goals.',
    defaultService: 'Data Management',
  },
}

export default dataManagement
