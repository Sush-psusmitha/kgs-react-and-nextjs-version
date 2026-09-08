import Link from 'next/link'

import heroBg from '../../assets/images/services/logistics/logistics.webp'
import introImage from '../../assets/images/services/logistics/fs-logistics.webp'

// TechGrid Capability Icons
import iconFreightBill from '../../assets/images/services/logistics/icons/freight-bill-audit-and-payment.svg'
import iconTrackTrace from '../../assets/images/services/logistics/icons/end-to-end-track-and-trace.svg'
import iconCustomsSupport from '../../assets/images/services/logistics/icons/customs-brokerage-support.svg'
import iconOrderMgmt from '../../assets/images/services/logistics/icons/order-management.svg'
import iconBillOfLading from '../../assets/images/services/logistics/icons/bill-of-lading-processing.svg'
import iconEdiMgmt from '../../assets/images/services/logistics/icons/edi-transaction-management.svg'
import iconCustomerCarrier from '../../assets/images/services/logistics/icons/customer-and-carrier-support.svg'
import iconSupplyChainAnalytics from '../../assets/images/services/logistics/icons/supply-chain-analytics.svg'

// WhyUs Icons
import iconRoundTheClock from '../../assets/images/services/logistics/icons/round-the-clock-logistics-support.svg'
import iconPlatformExpertise from '../../assets/images/services/logistics/icons/platform-expertise.svg'
import iconExceptionMgmt from '../../assets/images/services/logistics/icons/exception-management.svg'
import iconAccuracyDriven from '../../assets/images/services/logistics/icons/accuracy-driven.svg'
import iconScalableCapacity from '../../assets/images/services/logistics/icons/scalable-capacity.svg'
import iconCostRecovery from '../../assets/images/services/logistics/icons/cost-recovery.svg'
import iconFasterCycles from '../../assets/images/services/logistics/icons/faster-cycles.svg'
import iconCompleteTransparency from '../../assets/images/services/logistics/icons/complete-transparency.svg'

// Related Blogs Images
import blogImg1 from '../../assets/images/blog/optimising-global-frieght-oparation.png'
import blogImg2 from '../../assets/images/blog/reducing-logistics-cards.png'
import blogImg3 from '../../assets/images/blog/logistics-blog-title-08.webp'

const logistics = {
  slug: 'logistics',
  breadcrumbLabel: 'Logistics',

  hero: {
    tag: 'Logistics',
    title: 'Enhance Logistics Control Across Your Supply Chain',
    bgImage: heroBg,
    actions: [
      { label: 'Talk to an Expert', href: 'tel:+918022450187', variant: 'primary' },
      { label: 'Learn More', to: '/contact', variant: 'outline' },
    ],
  },

  intro: {
    title: 'Better Logistics for Faster, Smoother Shipments',
    paragraphs: [
      (
        <>
          From shipment coordination and documentation to carrier support and analytics, we deliver logistics management services that seamlessly integrate with your existing systems, teams, and workflows, keeping your supply chain efficient as your business grows.
        </>
      ),
      (
        <>
          We offer shipment visibility and proactive exception management to reduce delays and keep deliveries on schedule.
        </>
      ),
    ],
    image: introImage,
    imageAlt: 'KGS logistics and supply chain operations team',
  },

  techGrid: {
    tag: 'What we do',
    heading: 'Logistics Solutions for Your High-Performance Supply Chain',
    desc: 'We provide freight, customs compliance, warehousing, and analytics, backed by adaptable capabilities tailored to evolving business requirements.',
    cards: [
      {
        icon: iconFreightBill,
        title: 'Freight Bill Audit & Payment',
        desc: 'We identify billing discrepancies and carrier overcharges early, improving cost control and strengthening supply chain efficiency across your freight operations.',
      },
      {
        icon: iconTrackTrace,
        title: 'End-to-End Track & Trace',
        desc: 'KGS provides around-the-clock shipment tracking, proactive exception management, and timely updates to keep deliveries visible, responsive, and on schedule.',
      },
      {
        icon: iconCustomsSupport,
        title: 'Customs Brokerage Support',
        desc: 'At KGS, we offer accurate logistics documentation, tariff classifications, and duty calculations to maintain compliance, reduce border delays, and keep shipments moving.',
      },
      {
        icon: iconOrderMgmt,
        title: 'Order Management',
        desc: 'We manage orders from purchase through confirmation with accuracy and visibility, maintaining organized workflows and consistent fulfillment as volumes grow.',
      },
      {
        icon: iconBillOfLading,
        title: 'Bill of Lading Processing',
        desc: 'We digitize, validate, and structure bills of lading to improve data accuracy, maintain reliable records, and support downstream logistics processes.',
      },
      {
        icon: iconEdiMgmt,
        title: 'EDI Transaction Management',
        desc: 'Our EDI transaction management services ensure reliable data exchange across trading partners, detect discrepancies early, and maintain seamless system communication.',
      },
      {
        icon: iconCustomerCarrier,
        title: 'Customer & Carrier Support',
        desc: 'We provide multilingual support for shippers, carriers, and consignees, resolving queries quickly and keeping shipments moving without unnecessary operational delays.',
      },
      {
        icon: iconSupplyChainAnalytics,
        title: 'Supply Chain Analytics',
        desc: 'We transform shipment data into actionable insights through carrier dashboards, cost analyses, and KPI reporting to support informed supply chain decisions.',
      },
    ],
  },

  platformLogos: {
    heading: 'Powered by the Right Technology. Driven by the Right Expertise.',
    desc: 'From automating repetitive tasks to forecasting delays and optimizing routes, KGS applies AI where it delivers measurable business value. Our solutions enable faster decision-making, improve operational performance, reduce inefficiencies, and build more resilient, responsive supply chain.',
  },

  whyUs: [
    {
      icon: iconRoundTheClock,
      title: '24/7 Logistics Support',
      desc: 'Our specialists provide round-the-clock logistics support across every time zone, ensuring uninterrupted service for businesses that rely on time-sensitive logistics.',
    },
    {
      icon: iconPlatformExpertise,
      title: 'Platform Expertise',
      desc: 'We work confidently in CargoWise, Manhattan, MercuryGate, and SAP from day one, supporting modern transportation solutions across complex supply chain environments.',
    },
    {
      icon: iconExceptionMgmt,
      title: 'Exception Management',
      desc: 'KGS identifies and addresses potential delays, discrepancies, and service interruptions early, before they impact customers or business performance.',
    },
    {
      icon: iconAccuracyDriven,
      title: 'Accuracy Driven',
      desc: 'We minimize customs and billing errors through disciplined processes, reducing delays, penalties, and avoidable logistics costs.',
    },
    {
      icon: iconScalableCapacity,
      title: 'Scalable Capacity',
      desc: 'KGS scales resources to support seasonal demand, new trade lanes, and business growth through cost-effective logistics process outsourcing.',
    },
    {
      icon: iconCostRecovery,
      title: 'Cost Recovery',
      desc: 'Freight audit specialists identify carrier overcharges and recover costs that often exceed the investment made in the engagement.',
    },
    {
      icon: iconFasterCycles,
      title: 'Faster Cycles',
      desc: 'Our logistics specialists streamline workflows to shorten order-to-delivery timelines and improve efficiency throughout the transportation network.',
    },
    {
      icon: iconCompleteTransparency,
      title: 'Complete Transparency',
      desc: 'We deliver weekly reports on turnaround times, accuracy, exceptions, and performance metrics, giving stakeholders complete visibility into logistics performance.',
    },
  ],

  testimonials: [
    {
      quote: 'KGS quickly became an extension of our logistics operations team. They brought structure to high-volume workflows, improved shipment visibility, and helped us manage exceptions before they affected our customers. Their responsiveness and operational discipline have made a measurable difference to our supply chain performance.',
      role: 'Vice President, Global Logistics Operations',
      company: 'International Freight & Logistics Company',
    },
    {
      quote: 'We were looking for a partner that understood logistics beyond technology. KGS streamlined transportation workflows, improved coordination across carriers and warehouses, and helped us reduce manual effort without disrupting ongoing operations. Their ability to scale with our business has been invaluable.',
      role: 'Director, Transportation Management',
      company: 'Third-Party Logistics Provider',
    },
    {
      quote: 'Our distribution network has become significantly more efficient since partnering with KGS. Their team improved shipment tracking, inventory visibility, and operational reporting while helping us maintain service levels during periods of rapid growth. They consistently deliver with accuracy and accountability.',
      role: 'Chief Supply Chain Officer',
      company: 'Global Retail Enterprise',
    },
    {
      quote: 'KGS brought greater consistency to our logistics operations by improving process visibility, strengthening operational controls, and providing dependable support across multiple fulfillment locations. Their structured approach has reduced operational bottlenecks and improved delivery performance.',
      role: 'Chief Operating Officer',
      company: 'Supply Chain Solutions Company',
    },
    {
      quote: 'Managing seasonal demand used to put enormous pressure on our logistics teams. KGS adapted quickly, scaled resources when required, and maintained the same level of quality throughout peak operations. They have become a trusted long-term partner for our logistics organization.',
      role: 'Head of Distribution Operations',
      company: 'Consumer Goods Manufacturer',
    },
    {
      quote: 'KGS understands the realities of logistics operations where every shipment, every update, and every exception matters. Their proactive communication, operational expertise, and commitment to execution have helped us improve customer satisfaction while increasing overall efficiency.',
      role: 'Regional Logistics Director',
      company: 'Global E-commerce Company',
    },
    {
      quote: 'What differentiates KGS is their ability to combine operational knowledge with a strong focus on continuous improvement. They helped us simplify complex logistics processes, improve decision-making through better reporting, and build a more resilient supply chain capable of supporting future growth.',
      role: 'Senior Vice President, Supply Chain & Fulfillment',
      company: 'Global Manufacturing Enterprise',
    },
  ],

  faq: [
    {
      question: 'How do you price logistics support services?',
      answer: 'Our logistics management services are priced based on project scope, transaction volumes, and dedicated resource requirements. Every engagement is tailored to align with your business objectives and service expectations.',
    },
    {
      question: 'Can we begin with a single service and expand later?',
      answer: 'Yes. Many organizations start with freight audits or tracking support before expanding into additional areas. This phased approach allows businesses to evaluate outcomes before expanding logistics support.',
    },
    {
      question: 'Do you work directly with our carriers and freight partners?',
      answer: 'Yes. We collaborate directly with carriers, freight forwarders, and logistics partners while following your established processes. Our teams provide consistent support while maintaining accountability at every stage.',
    },
    {
      question: 'Can you support seasonal volume increases?',
      answer: 'Absolutely. Our delivery model is designed to absorb seasonal demand spikes and volume fluctuations without affecting service levels. This flexibility makes our logistics support services ideal for organizations with changing business requirements.',
    },
    {
      question: 'Do you support domestic and international freight?',
      answer: 'Yes. We support domestic, cross-border, air, ocean, and multimodal freight movements. Our experience in international logistics services enables us to support organizations operating across complex supply chains.',
    },
    {
      question: 'How do you protect shipment data?',
      answer: 'All shipment information is managed in accordance with ISO 27001:2022 standards and protected through encryption, role-based access controls, and detailed audit logging procedures.',
    },
  ],

  relatedBlogs: [
    {
      image: blogImg1,
      imageAlt: 'Optimizing Global Freight Operations with Automation',
      title: 'Optimizing Global Freight Operations with Automation',
      desc: 'Automation reclaims the time, accuracy, and visibility freight operators need to compete.',
      tags: ['Freight Operations', 'Automation'],
      metaTags: ["Expert's View", 'Featured Article'],
      to: '/insights',
    },
    {
      image: blogImg2,
      imageAlt: 'Why Skipping Freight Bill Audits Can Quietly Reduce Margins',
      title: 'Why Skipping Freight Bill Audits Can Quietly Reduce Margins',
      desc: 'A freight bill audit identifies overcharges, billing errors, and rate discrepancies that quietly erode margins.',
      tags: ['Freight Audit', 'Cost Recovery'],
      metaTags: ["Expert's View", 'Featured Article'],
      to: '/insights',
    },
    {
      image: blogImg3,
      imageAlt: 'How Is AI Reshaping Freight Operations?',
      title: 'How Is AI Reshaping Freight Operations?',
      desc: 'AI improves route optimization, demand forecasting, and exception management through measurable applications.',
      tags: ['Freight Operations', 'AI'],
      metaTags: ["Expert's View", 'Featured Article'],
      to: '/insights',
    },
  ],

  contactForm: {
    title: 'Your Partner for Reliable Logistics Services',
    desc: 'Contact our specialists for solutions aligned with your business goals.',
    defaultService: 'Logistics',
  },
}

export default logistics
