import heroBg from '../../assets/images/services/business-process-automation/automation.webp'
import introImage from '../../assets/images/services/business-process-automation/fs-automation.webp'

import iconRpa from '../../assets/images/services/business-process-automation/icons/robotic-process-automation.svg'
import iconStp from '../../assets/images/services/business-process-automation/icons/straight-through-processing.svg'
import iconWorkflow from '../../assets/images/services/business-process-automation/icons/workflow-management.svg'
import iconConversationalAi from '../../assets/images/services/business-process-automation/icons/conversational-ai-agents.svg'
import iconProcessDiscovery from '../../assets/images/services/business-process-automation/icons/process-discovery.svg'
import iconExceptionMgmt from '../../assets/images/services/business-process-automation/icons/exception-management.svg'
import iconDecisionIntelligence from '../../assets/images/services/business-process-automation/icons/decision-intelligence.svg'
import iconCoe from '../../assets/images/services/business-process-automation/icons/automation-center-of-excellence.svg'

import iconMoreTime from '../../assets/images/services/business-process-automation/icons/more-time-for-high-value-work.svg'
import iconAccuracy from '../../assets/images/services/business-process-automation/icons/reliable-process-accuracy.svg'
import iconExceptionHandling from '../../assets/images/services/business-process-automation/icons/intelligent-exception-handling.svg'
import iconReturns from '../../assets/images/services/business-process-automation/icons/returns-you-can-measure.svg'
import iconCapacity from '../../assets/images/services/business-process-automation/icons/capacity-that-grows-with-demand.svg'
import iconFasterPath from '../../assets/images/services/business-process-automation/icons/faster-path-to-production.svg'
import iconTeamsFocused from '../../assets/images/services/business-process-automation/icons/teams-focused-on-what-matters.svg'
import iconSecurity from '../../assets/images/services/business-process-automation/icons/enterprise-grade-security.svg'

import blogImg1 from '../../assets/images/blog/it-blog-title-01.webp'
import blogImg2 from '../../assets/images/blog/it-blog-title-03.webp'
import blogImg3 from '../../assets/images/blog/it-blog-title-05.webp'

const businessProcessAutomation = {
  slug: 'business-process-automation',
  breadcrumbLabel: 'Automation',

  hero: {
    tag:'Automation',
    title: 'Turn Everyday Processes into Measurable Business Value',
    bgImage: heroBg,
    actions: [
      { label: 'Talk to an Expert', href: 'tel:+918022450187', variant: 'primary' },
      { label: 'Discover Opportunities', to: '/contact', variant: 'outline' },
    ],
  },

  intro: {
    title: 'Automation Intended for Business Complexity',
    paragraphs: [
      'Every business operates differently. KGS automates existing systems, streamlining routine tasks and complex exceptions to improve productivity, accuracy, scalability, and overall business performance.',
      'The right processes can run faster with less manual intervention, giving your teams more capacity for work that requires human judgment.',
    ],
    image: introImage,
    imageAlt: 'KGS automation and operations team in a discussion',
  },

  techGrid: {
    tag: 'What we do',
    heading: 'Automation That Deliver Measurable Business Results',
    desc: 'Our automation solutions simplify your complex workflows, eliminate repetitive work, and create intelligent processes that improve speed, accuracy, and operational performance across the enterprise.',
    cards: [
      { icon: iconRpa, title: 'Robotic Process Automation', desc: "KGS's reliable robotic automation services execute repetitive, rule-based activities consistently across applications, improving productivity while reducing manual effort." },
      { icon: iconStp, title: 'Straight-Through Processing', desc: 'We automate complete transaction journeys so routine work moves from start to finish without manual intervention, delivering faster processing and greater consistency.' },
      { icon: iconWorkflow, title: 'Workflow Automation', desc: 'Our workflow automation connect people, systems, and approvals into streamlined digital workflows that keep work progressing without unnecessary delays.' },
      { icon: iconConversationalAi, title: 'Conversational AI Agents', desc: 'We deliver responsive customer and employee experiences through AI-powered agents that resolve common requests and intelligently route complex conversations.' },
      { icon: iconProcessDiscovery, title: 'Process Discovery', desc: "KGS's process analysis reveal workflow patterns, identifies improvement opportunities, and prioritizes high-impact automation initiatives across your organization." },
      { icon: iconExceptionMgmt, title: 'Exception Management', desc: 'Our specialists design intelligent automation that identifies exceptions, applies the right business logic, and directs complex cases through the appropriate review path.' },
      { icon: iconDecisionIntelligence, title: 'Decision Intelligence', desc: 'We bring AI-driven decision-making into your everyday processes with intelligent workflows that evaluate information instantly, enabling faster business outcomes.' },
      { icon: iconCoe, title: 'Automation Center of Excellence', desc: 'Establish governance, delivery standards, and scalable operating models that enable enterprise automation services to expand confidently across the organization.' },
    ],
  },

  platformLogos: {
    heading: 'Go Beyond Conventional Automation',
    desc: 'KGS combines intelligent automation, Generative AI, and process mining to bring intelligence to complex workflows. Automated workflows keep work moving across teams, while intelligent document processing reduces repetitive effort and improves the flow of information across the business.',
  },

  whyUs: [
    { icon: iconMoreTime, title: 'More Time for High-Value Work', desc: 'Automation eliminates repetitive tasks, allowing your skilled teams to focus on strategic work that drives greater business impact.' },
    { icon: iconAccuracy, title: 'Reliable Process Accuracy', desc: 'Robotic automation execute your routine tasks consistently, reducing manual errors and improving operational reliability.' },
    { icon: iconExceptionHandling, title: 'Intelligent Exception Handling', desc: 'Our intelligent automation solutions recognize process exceptions and route them through the right workflows without disrupting business continuity.' },
    { icon: iconReturns, title: 'Returns You Can Measure', desc: "Track productivity gains, reduced processing time, and operational improvements with KGS's automation solutions designed around measurable business outcomes." },
    { icon: iconCapacity, title: 'Capacity That Grows with Demand', desc: 'Expand operations through automation that support increasing workloads without proportional increases in manual effort.' },
    { icon: iconFasterPath, title: 'Faster Path to Production', desc: 'Our proven pilot approach validates business outcomes within weeks, providing the confidence to scale automation across the enterprise.' },
    { icon: iconTeamsFocused, title: 'Teams Focused on What Matters', desc: "Your routine work shifts to automation, freeing up your employees' time for analysis, problem-solving, and customer-focused initiatives." },
    { icon: iconSecurity, title: 'Enterprise-Grade Security', desc: 'We operate within ISO 27001:2022-governed environments, supported by role-based access controls and comprehensive audit trails.' },
  ],

  testimonials: [
    {
      quote: 'KGS helped us identify repetitive processes that were slowing our business down and transformed them into intelligent automated workflows. The result has been faster operations, improved accuracy, and a workforce that can focus on higher-value activities instead of manual tasks.',
      role: 'Chief Operating Officer',
      company: 'Global Manufacturing Company',
    },
    {
      quote: 'We wanted automation that delivered measurable business outcomes rather than isolated process improvements. KGS designed solutions that integrated seamlessly with our existing systems, reduced manual intervention, and significantly improved operational efficiency across multiple departments.',
      role: 'Vice President, Business Transformation',
      company: 'Financial Services Organization',
    },
    {
      quote: 'KGS approached automation with a clear understanding of our business processes. They simplified complex workflows, eliminated repetitive work, and provided complete visibility into every stage of the operation. The improvements have exceeded our expectations.',
      role: 'Director, Operational Excellence',
      company: 'Healthcare Enterprise',
    },
    {
      quote: 'Our teams were spending far too much time on repetitive administrative work. KGS implemented intelligent automation that improved turnaround times, reduced processing errors, and created a more consistent operating model without disrupting our day-to-day business.',
      role: 'Head of Shared Services',
      company: 'Global Retail Company',
    },
    {
      quote: 'What impressed us most was KGS’s ability to balance technology with practical execution. Their automation specialists worked closely with our teams, understood our operational challenges, and delivered solutions that created immediate business value.',
      role: 'Chief Information Officer',
      company: 'Logistics & Supply Chain Company',
    },
    {
      quote: 'KGS has become a trusted automation partner. Their structured delivery approach, technical expertise, and commitment to continuous improvement have helped us modernize business processes while maintaining complete operational control.',
      role: 'Senior Vice President, Digital Operations',
      company: 'Consumer Goods Enterprise',
    },
    {
      quote: 'Automation with KGS has fundamentally changed how we operate. Routine work is completed faster, process visibility has improved significantly, and our employees can now dedicate more time to innovation, customer engagement, and strategic initiatives.',
      role: 'Chief Digital Officer',
      company: 'Global Professional Services Firm',
    },
  ],

  faq: [
    {
      question: 'How Do You Identify the Right Processes for Automation?',
      answer: 'KGS begins with a structured assessment of your business workflows to identify opportunities with the greatest operational and financial impact.',
    },
    {
      question: 'Will Automation Integrate with Our Existing Business Systems?',
      answer: 'Yes. Our solutions integrate with ERP platforms, CRM systems, finance applications, and other enterprise technologies without requiring extensive changes to your existing environment. This approach protects your current technology investments while improving process efficiency across connected systems.',
    },
    {
      question: 'How Long Does It Take to See Results from an Automation Initiative?',
      answer: 'Most organizations begin to see measurable improvements after the initial pilot, often within 4 to 6 weeks. Our phased delivery approach validates performance early, establishes measurable outcomes, and provides a structured foundation for scaling automation across the enterprise.',
    },
    {
      question: 'How Does KGS Automate Processes That Involve Exceptions or Business Decisions?',
      answer: 'Many enterprise workflows involve approvals, exceptions, and unstructured information that extend beyond predefined rules. KGS combines intelligent automation, AI-driven decision-making, and intelligent document processing to execute complex workflows while maintaining accuracy, consistency, and operational continuity.',
    },
    {
      question: 'Do You Support Governance Initiatives?',
      answer: 'We enable security and embedded governance throughout the delivery lifecycle. KGS follows ISO 27001:2022 practices, including role-based access controls, comprehensive audit trails, and governance frameworks, to support secure automation across business-critical operations.',
    },
    {
      question: 'What Business Outcomes Can Organizations Expect from Your Automation Services?',
      answer: 'KGS advances automation to reduce manual effort, improve consistency, and increase operational capacity. Tailored workflows, and AI-driven execution shorten turnaround times, strengthen performance, and generate measurable business outcomes over the long term.',
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
    title: 'Your Partner for Trusted Automation Services',
    desc: 'Contact our specialists for solutions aligned with your business goals.',
    defaultService: 'Automation',
  },
}

export default businessProcessAutomation
