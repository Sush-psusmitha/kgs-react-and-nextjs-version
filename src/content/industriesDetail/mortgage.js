import Link from 'next/link'

import heroBg from '../../assets/images/industries/mortgage/mortgage.webp'
import cardImg1 from '../../assets/images/industries/mortgage/mortgage-data-management.webp'
import cardImg2 from '../../assets/images/industries/mortgage/loan-origination-support.webp'
import cardImg3 from '../../assets/images/industries/mortgage/underwriting-support.webp'
import cardImg4 from '../../assets/images/industries/mortgage/mortgage-quality-control.webp'
import cardImg5 from '../../assets/images/industries/mortgage/mortgage-analytics.webp'
import cardImg6 from '../../assets/images/industries/mortgage/mortgage-process-automation.webp'
import aiImage from '../../assets/images/common/ai.png'

const mortgage = {
  slug: 'mortgage',
  breadcrumbLabel: "Mortgage",

  hero: {
    tag: "Mortgage",
    title: "Move Every Loan Forward with Greater Speed and Control",
    desc: "Streamline your lending workflows with accurate data, intelligent automation, and scalable capacity from origination through closing.",
    bgImage: heroBg,
    actions: [
      { label: 'Get Started', to: '/contact', variant: 'primary' },
      { label: 'See success stories', to: '/case-studies', variant: 'outline' },
    ],
  },

  intro: {
    title: "Make Mortgage Processing Faster and More Accurate with AI",
    desc: "KGS boosts digital capabilities through data management, analytics, and automation, improving borrower information accuracy, accelerating underwriting workflows, reducing processing delays, and keeping loans moving.",
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
    heading: "Mortgage Services We Provide",
    cards: [
      {
        image: cardImg1,
        imageAlt: "Mortgage Data Management",
        title: "Mortgage Data Management",
        desc: "Maintain accurate borrower, property, and loan records through structured data processing practices.",
        tags: ["Data Cleansing","Data Validation","Data Enrichment","Data Standardisation"],
      },
      {
        image: cardImg2,
        imageAlt: "Loan Origination Support",
        title: "Loan Origination Support",
        desc: "Fast-track applications through loan origination support covering borrower verification, setup, and workflow coordination.",
        tags: ["Application Review","Data Validation","Loan Setup","Workflow Support"],
      },
      {
        image: cardImg3,
        imageAlt: "Underwriting Support",
        title: "Underwriting Support",
        desc: "Expand underwriter capacity through our underwriting services covering verification, reviews, exceptions, and checks.",
        tags: ["File Review","Data Verification","Exception Tracking","Quality Checks"],
      },
      {
        image: cardImg4,
        imageAlt: "Mortgage Quality Control",
        title: "Mortgage Quality Control",
        desc: "Catch inconsistencies earlier through mortgage quality control services spanning pre-closing and post-closing reviews.",
        tags: ["Pre-Closing QC","Post-Closing QC","Data Validation","Exception Review"],
      },
      {
        image: cardImg5,
        imageAlt: "Mortgage Analytics",
        title: "Mortgage Analytics",
        desc: "Convert borrower, property, and pipeline data into actionable insights through analytics services.",
        tags: ["Pipeline Analytics","KPI Dashboards","Risk Analytics","Performance Reporting"],
      },
      {
        image: cardImg6,
        imageAlt: "Mortgage Process Automation",
        title: "Mortgage Process Automation",
        desc: "Lessen repetitive tasks through mortgage workflow automation, improving routing, consistency, integration, and turnaround.",
        tags: ["Workflow Automation","Data Validation","Exception Routing","System Integration"],
      },
    ],
  },

  aiCapabilities: {
    heading: "Our AI Capabilities for Mortgage",
    tabs: [
      {
        title: "AI Agent Platform",
        label: "Keep Mortgage Workflows Moving with Less Manual Coordination",
        desc: "Teams use AI agents and workflow automation to:",
        bullets: ["Retrieve borrower and loan information across systems","Track recurring lending activities","Flag exceptions requiring human review","Coordinate defined processing steps"],
        footnote: "Automation accelerates routine work across the lending lifecycle, giving underwriters and processors greater capacity while preserving human oversight for credit assessment, risk decisions, and judgment.",
        image: aiImage,
      },
      {
        title: "Mortgage Intelligence &amp; Analytics",
        label: "See Pipeline Risks Before They Become Closing Delays",
        desc: "KGS applies analytics and AI models across loan, borrower, property, and business data to:",
        bullets: ["Identify patterns across mortgage pipelines","Surface anomalies and process exceptions","Monitor turnaround times and performance","Support risk and capacity decisions"],
        footnote: "Mortgage teams gain earlier visibility into where loans are progressing and where intervention may be required.",
        image: aiImage,
      },
      {
        title: "Workflow Automation",
        label: "Reduce Repetitive Work Across the Mortgage Lifecycle",
        desc: "Recurring validations, status updates, quality checks, and workflow routing can consume significant team capacity. KGS applies automation to:",
        bullets: ["Standardize repeatable mortgage workflows","Automate structured validation activities","Route exceptions to the appropriate teams","Connect activities across existing systems"],
        footnote: "This improves processing consistency and helps mortgage professionals focus on exceptions, borrowers, and decisions that require human expertise.",
        image: aiImage,
      },
    ],
  },

  faq: {
    title: "Answers for Commonly Asked Questions",
    desc: "Find answers to common questions about how KGS manages loan processing, borrower data, underwriting support, and closing timelines here.",
    ctaTitle: "Still Have Questions?",
    ctaDesc: "Share your lending challenges with KGS and explore solutions aligned with your priorities.",
    ctaLabel: "Book a consultation",
    items: [
      {
            "question": "Can KGS support different stages of the mortgage lifecycle?",
            "answer": "Yes. KGS can support recurring process requirements across loan origination, underwriting support, quality control, mortgage data management, analytics, and related workflows."
      },
      {
            "question": "How does KGS improve mortgage data quality?",
            "answer": "KGS applies data cleansing, validation, enrichment, standardization, and quality controls to improve the accuracy and consistency of borrower, property, loan, and transaction information."
      },
      {
            "question": "Can KGS work with our existing mortgage technology?",
            "answer": "Yes. KGS can work within established enterprise applications and connect workflows across existing systems based on integration, access, security, and governance requirements."
      },
      {
            "question": "Where can automation improve mortgage workflows?",
            "answer": "Automation can support structured, repetitive activities such as data validation, workflow routing, status updates, exception handling, quality checks, and recurring administrative processes."
      },
      {
            "question": "Can KGS support mortgage analytics?",
            "answer": "Yes. KGS provides BI dashboards, performance, predictive analytics, and reporting capabilities to improve visibility into loan pipelines, turnaround times, risks, and performance."
      }
],
  },

  contactForm: {
    title: "Keep Every Mortgage Moving Towards Closing",
    desc: "Tell us where loans stall, and we’ll show how the right process improvements can accelerate closing timelines.",
    defaultService: "Mortgage",
  },
}

export default mortgage
