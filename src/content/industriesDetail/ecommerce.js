import Link from 'next/link'

import heroBg from '../../assets/images/industries/ecommerce/ecommerce.webp'
import cardImg1 from '../../assets/images/industries/ecommerce/product-data-management.webp'
import cardImg2 from '../../assets/images/industries/ecommerce/product-catalog-management.webp'
import cardImg3 from '../../assets/images/industries/ecommerce/marketplace-management.webp'
import cardImg4 from '../../assets/images/industries/ecommerce/order-management.webp'
import cardImg5 from '../../assets/images/industries/ecommerce/ecommerce-analytics.webp'
import cardImg6 from '../../assets/images/industries/ecommerce/ecommerce-process-automation.webp'
import aiImage from '../../assets/images/common/ai.png'

const ecommerce = {
  slug: 'ecommerce',
  breadcrumbLabel: "E-commerce",

  hero: {
    tag: "E-commerce",
    title: "Handle Every Order with Speed and Accuracy",
    desc: "Strengthen product data, marketplace management, finance, analytics, and customer workflows with scalable support built for fast-moving digital commerce.",
    bgImage: heroBg,
    actions: [
      { label: 'Get Started', to: '/contact', variant: 'primary' },
      { label: 'See success stories', to: '/case-studies', variant: 'outline' },
    ],
  },

  intro: {
    title: "Grow Your eCommerce Brand, Hassle-Free",
    desc: "As catalogs and orders grow, KGS enhances solutions through data, analytics, and automation, improving product accuracy, inventory visibility, marketplace coordination, and scalability.",
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
        imageAlt: "Product Data Management",
        title: "Product Data Management",
        desc: "Keep product information accurate, complete, and consistent across catalogs, marketplaces, and digital commerce platforms.",
        tags: ["Product Data","Data Enrichment","Attribute Management","Data Validation"],
      },
      {
        image: cardImg2,
        imageAlt: "Product Catalog Management",
        title: "Product Catalog Management",
        desc: "Maintain structured, search-ready product catalogs as SKUs, categories, attributes, and channel requirements continue to expand.",
        tags: ["SKU Management","Categorisation","Attribute Mapping","Catalogue Updates"],
      },
      {
        image: cardImg3,
        imageAlt: "Marketplace Management",
        title: "Marketplace Management",
        desc: "Maintain consistent listings across sales channels through marketplace management, product updates, validation, and coordination.",
        tags: ["Product Listings","Marketplace Updates","Listing Validation","Channel Management"],
      },
      {
        image: cardImg4,
        imageAlt: "Order Management",
        title: "Order Management",
        desc: "Systemize order management from purchase through fulfillment, keeping order data accurate and exceptions visible.",
        tags: ["Order Processing","Order Validation","Exception Management","Order Reconciliation"],
      },
      {
        image: cardImg5,
        imageAlt: "E-commerce Analytics",
        title: "E-commerce Analytics",
        desc: "Convert product, customer, order, and sales data into commercial insights through analytics and reporting.",
        tags: ["Sales Analytics","Product Analytics","KPI Dashboards","Performance Reporting"],
      },
      {
        image: cardImg6,
        imageAlt: "E-commerce Process Automation",
        title: "E-commerce Process Automation",
        desc: "Reduce repetitive tasks through automation across product data, orders, reporting, and connected workflows.",
        tags: ["Workflow Automation","Data Validation","Exception Routing","System Integration"],
      },
    ],
  },

  aiCapabilities: {
    heading: "Our AI Capabilities for E-commerce",
    tabs: [
      {
        title: "AI Agent Platform",
        label: "Put AI to Work Across High-Volume Commerce Operations",
        desc: "Product, order, and customer workflows span multiple commerce platforms. KGS employs AI agents and e-commerce automation to:",
        bullets: ["Retrieve information across connected systems","Coordinate recurring product and order workflows","Flag exceptions requiring attention","Route defined commerce activities"],
        footnote: "Teams spend less time on repetitive tasks while retaining control over exceptions, approvals, and critical commercial decisions.",
        image: aiImage,
      },
      {
        title: "Commerce Intelligence &amp; Analytics",
        label: "Turn Commerce Data into Faster Business Insight",
        desc: "KGS uses analytics across product, order, sales, and customer data to:",
        bullets: ["Reveal sales and product performance patterns","Detect anomalies across commerce data","Track commercial KPIs","Guide faster merchandising decisions"],
        footnote: "E-commerce teams gain sharper visibility into performance trends, emerging changes, and areas requiring timely commercial action across sales channels.",
        image: aiImage,
      },
      {
        title: "Workflow Automation",
        label: "Reduce Repetitive Work Across E-commerce Processes",
        desc: "KGS automates structured, high-volume activities that can slow commerce operations as the business grows. This includes:",
        bullets: ["Automating recurring data validation","Standardizing product and order workflows","Routing exceptions to the appropriate teams","Connecting activities across existing systems"],
        footnote: "Automation improves consistency and turnaround times while giving internal teams more capacity for growth-focused work.",
        image: aiImage,
      },
    ],
  },

  faq: {
    title: "Answers for Commonly Asked Questions",
    desc: "Find answers to common questions about how KGS supports catalogs, orders, and marketplace performance here..",
    ctaTitle: "Still Have Questions?",
    ctaDesc: "Share your commerce challenges with KGS and explore solutions tailored to them",
    ctaLabel: "Book a consultation",
    items: [
      {
            "question": "Can KGS manage large and frequently changing product catalogs?",
            "answer": "Yes. KGS supports high-volume product data, catalog updates, categorization, attribute management, validation, and enrichment across growing e-commerce environments."
      },
      {
            "question": "Can KGS support multiple marketplaces and sales channels?",
            "answer": "Yes. KGS can support product and operational workflows across multiple marketplaces and digital commerce channels while maintaining consistent data and defined processes."
      },
      {
            "question": "How does KGS improve e-commerce data quality?",
            "answer": "KGS applies structured cleansing, validation, standardization, enrichment, and quality controls to improve the accuracy and consistency of product and enterprise data."
      },
      {
            "question": "Can KGS integrate with our existing e-commerce systems?",
            "answer": "Yes. KGS can work within established technology environments and connect workflows across existing business systems based on integration, access, and governance requirements."
      },
      {
            "question": "Where can automation improve e-commerce operations?",
            "answer": "Automation can reduce repetitive effort across product data validation, catalog workflows, order processing, exception routing, reporting, and other structured, high-volume activities."
      }
],
  },

  contactForm: {
    title: "Keep E-commerce Growth Moving Without Slowdowns",
    desc: "Discuss your eCommerce challenges with KGS and explore solutions built for your products, orders, and growth.",
    defaultService: "E-commerce",
  },
}

export default ecommerce
