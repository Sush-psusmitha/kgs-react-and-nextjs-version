import Link from 'next/link'

import heroBg from '../../assets/images/services/generative-ai/generative-ai.webp'
import introImage from '../../assets/images/services/generative-ai/fs-gen-ai-services.webp'

// TechGrid Capability Icons
import iconConversationalAi from '../../assets/images/services/generative-ai/icons/conversational-ai-agents.svg'
import iconPredictiveIntel from '../../assets/images/services/generative-ai/icons/predictive-intelligence-and-analytics.svg'
import iconEnterpriseContent from '../../assets/images/services/generative-ai/icons/enterprise-content-generation.svg'
import iconCustomCopilots from '../../assets/images/services/generative-ai/icons/custom-ai-copilots.svg'
import iconKnowledgeManagement from '../../assets/images/services/generative-ai/icons/knowledge-management-and-ai-search.svg'
import iconWorkflowAutomation from '../../assets/images/services/generative-ai/icons/ai-workflow-automation.svg'
import iconStrategyConsulting from '../../assets/images/services/generative-ai/icons/ai-strategy-and-consulting.svg'
import iconResponsibleAi from '../../assets/images/services/generative-ai/icons/responsible-ai-and-governance.svg'

// WhyUs Icons
import iconBuiltForProduction from '../../assets/images/services/generative-ai/icons/built-for-production.svg'
import iconDesignedData from '../../assets/images/services/generative-ai/icons/designed-around-your-data.svg'
import iconValueEarly from '../../assets/images/services/generative-ai/icons/value-demonstrated-early.svg'
import iconGovernanceDayOne from '../../assets/images/services/generative-ai/icons/governance-from-day-one.svg'
import iconAccountable from '../../assets/images/services/generative-ai/icons/accountable-from-discovery-to-deployment.svg'
import iconClearFits from '../../assets/images/services/generative-ai/icons/clear-about-where-ai-fits.svg'
import iconSecureDesign from '../../assets/images/services/generative-ai/icons/secure-by-design.svg'
import iconProvenScaling from '../../assets/images/services/generative-ai/icons/proven-before-scaling.svg'

// Related Blogs Images
import blogImg1 from '../../assets/images/blog/it-blog-title-01.webp'
import blogImg2 from '../../assets/images/blog/it-blog-title-03.webp'
import blogImg3 from '../../assets/images/blog/it-blog-title-05.webp'

const generativeAi = {
  slug: 'generative-ai',
  breadcrumbLabel: 'Gen AI Services',

  hero: {
    tag: 'Gen AI Services',
    title: 'Transform Enterprise Operations with Generative AI Services',
    desc: 'Move from AI experimentation to measurable business results.',
    bgImage: heroBg,
    actions: [
      { label: 'Talk to an Expert', href: 'tel:+918022450187', variant: 'primary' },
      { label: 'Explore AI Use Cases', to: '/contact', variant: 'outline' },
    ],
  },

  intro: {
    title: 'Drive Business Results with AI',
    paragraphs: [
      (
        <>
          KGS provides secure, flexible AI services to automate workflows, improve customer experiences, accelerate decisions, and generate insights from enterprise data. Each solution integrates with existing systems, supports compliance, and delivers measurable business value.
        </>
      ),
      (
        <>
          We design every solution to work within your existing security and compliance posture, so adoption doesn&apos;t mean starting from scratch.
        </>
      ),
    ],
    image: introImage,
    imageAlt: 'KGS generative AI and enterprise AI team collaborating',
  },

  techGrid: {
    tag: 'What we do',
    heading: 'AI for Your Business-Critical Work',
    desc: 'We bring together strategy, development, deployment, and governance to address complex business challenges across customer experience and enterprise productivity.',
    cards: [
      {
        icon: iconConversationalAi,
        title: 'Conversational AI & Intelligent Agents',
        desc: 'Our specialists develop intelligent agents that manage customer interactions, employee requests, and support functions across channels with speed and accuracy.',
      },
      {
        icon: iconPredictiveIntel,
        title: 'Predictive Intelligence & Analytics',
        desc: 'KGS uses forecasting models to identify demand patterns, performance risks, and emerging trends, turning enterprise data into actionable insights.',
      },
      {
        icon: iconEnterpriseContent,
        title: 'Enterprise Content Intelligence',
        desc: 'Our specialists create brand-aligned content at scale using secure language models, with outputs reviewed against governance and quality standards.',
      },
      {
        icon: iconCustomCopilots,
        title: 'Custom AI Copilots',
        desc: 'We deploy secure AI assistants with Custom LLM development and AI integration services, connecting enterprise systems to improve productivity.',
      },
      {
        icon: iconKnowledgeManagement,
        title: 'Knowledge Management & AI Search',
        desc: 'Our AI specialists implement Retrieval Augmented Generation (RAG) to provide accurate, sourced answers from enterprise knowledge repositories.',
      },
      {
        icon: iconWorkflowAutomation,
        title: 'AI Workflow Automation',
        desc: 'KGS combines AI and automation to streamline workflows and decisions. Our AI automation services improve efficiency while maintaining governance.',
      },
      {
        icon: iconStrategyConsulting,
        title: 'AI Strategy & Consulting',
        desc: 'We identify high-impact use cases and creates adoption roadmaps based on value, feasibility, and implementation readiness.',
      },
      {
        icon: iconResponsibleAi,
        title: 'Responsible AI & Governance',
        desc: 'KGS implements AI governance, monitoring, and controls to support compliance requirements and maintain secure, accountable AI deployments.',
      },
    ],
  },

  platformLogos: {
    heading: 'Your Business. Our AI Expertise. Proven Results.',
    desc: 'We combine deep technical expertise with a robust ecosystem of AI models, cloud platforms, and enterprise technologies to deliver secure, scalable, and production-ready solutions. Every engagement is aligned with client requirements for performance, compliance, privacy, and long-term business value.',
  },

  whyUs: [
    {
      icon: iconBuiltForProduction,
      title: 'Built for Production',
      desc: 'Organizations rely on KGS to deploy solutions that perform meaningful work in production environments and deliver measurable business value.',
    },
    {
      icon: iconDesignedData,
      title: 'Designed Around Your Data',
      desc: 'Every implementation uses your business data, workflows, and operating requirements to ensure outputs remain relevant, accurate, and actionable.',
    },
    {
      icon: iconValueEarly,
      title: 'Value Demonstrated Early',
      desc: 'Focused pilots establish business impact quickly, helping leadership evaluate progress using clearly defined success metrics.',
    },
    {
      icon: iconGovernanceDayOne,
      title: 'Governance From Day One',
      desc: 'Every deployment includes security controls, approval mechanisms, and oversight practices that support responsible AI adoption.',
    },
    {
      icon: iconAccountable,
      title: 'Accountable From Discovery to Deployment',
      desc: 'As a generative AI development company, KGS remains responsible for outcomes throughout discovery, implementation, and ongoing optimization.',
    },
    {
      icon: iconClearFits,
      title: 'Clear About Where AI Fits',
      desc: 'Our teams identify where AI can create value and communicate openly when a use case is unlikely to deliver meaningful results.',
    },
    {
      icon: iconSecureDesign,
      title: 'Secure by Design',
      desc: 'Solutions operate within private environments aligned with ISO 27001:2022 standards, ensuring customer data remains protected at all times.',
    },
    {
      icon: iconProvenScaling,
      title: 'Proven Before Scaling',
      desc: 'Every engagement begins with a practical use case that demonstrates measurable results before broader deployment decisions are made.',
    },
  ],

  testimonials: [
    {
      quote: 'We needed an AI partner that understood enterprise realities rather than simply demonstrating technology. KGS developed practical Generative AI solutions that integrated seamlessly with our existing systems, improved knowledge accessibility, and accelerated decision-making across multiple business functions.',
      role: 'Vice President, Enterprise Technology',
      company: 'Global Financial Services Company',
    },
    {
      quote: 'Implementing Generative AI across a regulated environment required the right balance between innovation and governance. KGS delivered exactly that. Their structured approach, technical expertise, and focus on security helped us confidently adopt AI while maintaining operational control.',
      role: 'Head of Digital Transformation',
      company: 'Healthcare Enterprise',
    },
    {
      quote: 'Our employees were spending too much time searching for information and responding to repetitive requests. KGS built AI-powered knowledge assistants that significantly improved response times while giving our teams faster access to trusted business information.',
      role: 'Director, Knowledge Management',
      company: 'International Consulting Organization',
    },
    {
      quote: 'KGS approached AI as a business transformation initiative rather than a technology project. They worked closely with our stakeholders, delivered scalable solutions, and helped us automate content generation, document analysis, and internal support processes with measurable results.',
      role: 'Chief Information Officer',
      company: 'Global Manufacturing Enterprise',
    },
    {
      quote: 'What impressed us most was KGS’s ability to translate complex AI concepts into practical business outcomes. Every solution was designed around our operational goals, allowing us to improve efficiency while maintaining complete visibility into how AI supported our business.',
      role: 'Senior Vice President, Innovation & Strategy',
      company: 'Retail Technology Company',
    },
    {
      quote: 'KGS became a trusted partner throughout our AI journey. Their expertise, responsiveness, and deep understanding of enterprise operations enabled us to scale Generative AI across multiple departments with confidence. The results have exceeded our expectations in both productivity and user adoption.',
      role: 'Chief Executive Officer',
      company: 'Global Business Services Organization',
    },
  ],

  faq: [
    {
      question: 'How long does it take to put an AI solution into production?',
      answer: 'A focused pilot typically takes four to six weeks. KGS evaluates performance, data readiness, adoption, and business impact before broader deployment. Timelines vary based on system integrations, governance requirements, and the complexity of existing infrastructure.',
    },
    {
      question: 'Will our data be used to train public AI models?',
      answer: 'No. Your data remains under your ownership. KGS uses private AI environments with strict security controls, access management, and continuous monitoring. Customer information is never used to train public models, protecting sensitive data and supporting enterprise compliance requirements.',
    },
    {
      question: 'How accurate are AI-generated responses?',
      answer: 'Accuracy depends on data quality, governance, and the use case. Through the development of Retrieval Augmented Generation (RAG), KGS grounds responses in approved enterprise information, supported by validation, approval workflows, and continuous monitoring to maintain reliability, transparency, and consistency.',
    },
    {
      question: 'Can Generative AI work with our existing systems?',
      answer: 'Yes. We provide AI integration services for CRM, ERP, HRMS, ITSM, document management platforms, and knowledge repositories. AI capabilities integrate with existing workflows to automate repetitive tasks, improve information access, and increase productivity without replacing established technology.',
    },
    {
      question: 'What Industries Benefit Most from Generative AI?',
      answer: 'Financial services, healthcare, retail, manufacturing, logistics, and legal services see high returns from Generative AI through process automation, predictive analysis, knowledge retrieval, and personalized customer interactions.',
    },
    {
      question: 'How Do You Ensure Responsible and Compliant AI Adoption?',
      answer: 'Our framework incorporates security controls, approval workflows, model monitoring, and human oversight. Deployments align with organizational policies and applicable requirements, including ISO 27001:2022, GDPR, and HIPAA, supporting secure, accountable, and compliant AI adoption.',
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
    title: 'Your Partner for Enterprise AI Success',
    desc: 'Contact our specialists for solutions aligned with your business goals.',
    defaultService: 'Gen AI Services',
  },
}

export default generativeAi
