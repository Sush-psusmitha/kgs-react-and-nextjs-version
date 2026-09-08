import Link from 'next/link'

import heroBg from '../../assets/images/industries/energy-utilities/energy-utilities.webp'
import cardImg1 from '../../assets/images/industries/energy-utilities/utility-data-management.webp'
import cardImg2 from '../../assets/images/industries/energy-utilities/meter-data-management.webp'
import cardImg3 from '../../assets/images/industries/energy-utilities/billing-revenue-operations.webp'
import cardImg4 from '../../assets/images/industries/energy-utilities/asset-data-management.webp'
import cardImg5 from '../../assets/images/industries/energy-utilities/utility-analytics-reporting.webp'
import cardImg6 from '../../assets/images/industries/energy-utilities/utility-process-automation.webp'
import aiImage from '../../assets/images/common/ai.png'

const energyUtilities = {
  slug: 'energy-utilities',
  breadcrumbLabel: "Energy & Utilities",

  hero: {
    tag: "Energy & Utilities",
    title: "Run Your Utility Services Smoothly",
    desc: "Advance billing, meter data management, asset records, reporting, and core utility workflows through industry knowledge and intelligent technology.",
    bgImage: heroBg,
    actions: [
      { label: 'Get Started', to: '/contact', variant: 'primary' },
      { label: 'See success stories', to: '/case-studies', variant: 'outline' },
    ],
  },

  intro: {
    title: "Better Data for Better Utility Services",
    desc: "KGS elevates data management across customers, meters, assets, and billing systems through analytics and automation, improving data accuracy, streamlining recurring workflows, enhancing revenue visibility, and improving service performance.",
    ctaText: 'Get Started',
    ctaLink: '/contact',
    stats: [
      {
            "label": "Satisfied Clients",
            "value": "600+"
      },
      {
            "label": "Projects Delivered",
            "value": ">17k"
      },
      {
            "label": "Saved for Clients",
            "value": "$100m"
      },
      {
            "label": "Client Retention",
            "value": "96%"
      }
],
  },

  services: {
    heading: "Services We Offer",
    cards: [
      {
        image: cardImg1,
        imageAlt: "Utility Data Management",
        title: "Utility Data Management",
        desc: "Refine customer, meter, and asset information through structured data management and governance.",
        tags: ["Data Cleansing","Data Validation","Data Standardisation","Data Governance"],
      },
      {
        image: cardImg2,
        imageAlt: "Meter Data Management",
        title: "Meter Data Management",
        desc: "Keep high-volume meter information accurate and usable with structured validation, exception management, reconciliation, and quality controls.",
        tags: ["Meter Data Validation","Exception Management","Usage Reconciliation","Data Quality"],
      },
      {
        image: cardImg3,
        imageAlt: "Billing &amp; Revenue Operations",
        title: "Billing & Revenue Operations",
        desc: "Enhance billing accuracy through account reconciliation, receivables, and revenue reporting.",
        tags: ["Billing Reconciliation","Accounts Receivable","Revenue Reporting","Account Validation"],
      },
      {
        image: cardImg4,
        imageAlt: "Asset Data Management",
        title: "Asset Data Management",
        desc: "Establish consistent infrastructure records through asset management, data enrichment, standardization, and controls.",
        tags: ["Asset Records","Data Enrichment","Master Data","Quality Control"],
      },
      {
        image: cardImg5,
        imageAlt: "Utility Analytics &amp; Reporting",
        title: "Utility Analytics & Reporting",
        desc: "Convert consumption and asset data into actionable insights through analytics and forecasting.",
        tags: ["BI Dashboards","Usage Analytics","KPI Reporting","Forecasting"],
      },
      {
        image: cardImg6,
        imageAlt: "Utility Process Automation",
        title: "Utility Process Automation",
        desc: "Reduce repetitive tasks through workflow automation, intelligent routing, validation, and system integration.",
        tags: ["Workflow Automation","Data Validation","Exception Routing","System Integration"],
      },
    ],
  },

  aiCapabilities: {
    heading: "Our AI Capabilities for Energy &amp; Utilities",
    tabs: [
      {
        title: "AI Agent Platform",
        label: "Accelerate Utility Decision-Making",
        desc: "Utility teams work across connected systems to investigate exceptions and manage recurring activities. KGS uses AI agents and automation to:",
        bullets: ["Retrieve customer, meter, and asset information","Coordinate recurring service workflows","Flag exceptions requiring human review","Route defined business actions"],
        footnote: "Teams access critical information faster while retaining human oversight across essential decisions.",
        image: aiImage,
      },
      {
        title: "Predictive Analytics",
        label: "Use Utility Data to Anticipate What Comes Next",
        desc: "KGS applies analytics and AI models across consumption, asset, customer, and organizational data to improve forward-looking visibility by:",
        bullets: ["Identifying unusual consumption patterns","Analyzing historical performance trends","Supporting demand and usage forecasting","Highlighting anomalies for further investigation"],
        footnote: "Better visibility helps utility teams move from reactive reporting toward earlier, data-informed decisions.",
        image: aiImage,
      },
      {
        title: "Workflow Automation",
        label: "Reduce Manual Effort Across Recurring Utility Processes",
        desc: "High-volume validation, reconciliation, reporting, and exception workflows can consume valuable team capacity. KGS applies automation to:",
        bullets: ["Standardize repetitive process steps","Automate recurring validation activities","Route exceptions to the appropriate teams","Connect workflows across existing systems"],
        footnote: "Automation improves consistency and turnaround times while allowing skilled teams to focus on exceptions and business priorities.",
        image: aiImage,
      },
    ],
  },

  faq: {
    title: "Answers for Commonly Asked Questions",
    desc: "Find answers to common questions about how KGS manages meter data, billing, assets, and reporting.",
    ctaTitle: "Still have questions?",
    ctaDesc: "Discuss your utility challenges with KGS and explore solutions aligned with your priorities.",
    ctaLabel: "Book a consultation",
    items: [
      {
            "question": "Can KGS support large volumes of utility data?",
            "answer": "Yes. KGS supports high-volume data environments with structured validation, cleansing, governance, and quality controls designed to maintain consistency as data management requirements grow."
      },
      {
            "question": "How can KGS improve meter and consumption data quality?",
            "answer": "KGS can apply validation rules, reconciliation, exception management, and data-quality processes to identify inconsistencies and improve the reliability of meter and consumption information through meter data management."
      },
      {
            "question": "Can KGS work with our existing utility systems?",
            "answer": "Yes. KGS can work within established technology environments and integrate workflows across existing systems based on the organization&rsquo;s architecture, access, and governance requirements."
      },
      {
            "question": "Where can automation improve utility operations?",
            "answer": "Automation can support repetitive, rule-based activities such as data validation, reconciliation, exception routing, recurring reporting, and workflow coordination across utility systems."
      },
      {
            "question": "Can KGS support utility reporting and analytics?",
            "answer": "Yes. KGS combines data management, analytics, dashboards, and reporting capabilities to help utility teams track service performance, consumption patterns, exceptions, and business KPIs."
      }
],
  },

  contactForm: {
    title: "Build Stronger Systems Behind Every Utility Service",
    desc: "Tell us where visibility falls short, and we’ll identify how better data management can improve performance.",
    defaultService: "Energy & Utilities",
  },
}

export default energyUtilities
