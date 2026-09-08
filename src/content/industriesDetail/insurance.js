import Link from 'next/link'

import heroBg from '../../assets/images/industries/insurance/insurance.webp'
import cardImg1 from '../../assets/images/industries/insurance/claims-processing.webp'
import cardImg2 from '../../assets/images/industries/insurance/policy-administration.webp'
import cardImg3 from '../../assets/images/industries/insurance/underwriting-support.webp'
import cardImg4 from '../../assets/images/industries/insurance/new-business-processing.webp'
import cardImg5 from '../../assets/images/industries/insurance/commisions-management.webp'
import cardImg6 from '../../assets/images/industries/insurance/customer-servicing.webp'
import aiImage from '../../assets/images/common/ai.png'

const insurance = {
  slug: 'insurance',
  breadcrumbLabel: "Insurance",

  hero: {
    tag: "Insurance",
    title: "Settle Claims Faster. Bind More Business",
    desc: "Strengthen claims, policy, underwriting, commissions, and customer support with scalable insurance support built around speed, accuracy, and policyholder experience.",
    bgImage: heroBg,
    actions: [
      { label: 'Get Started', to: '/contact', variant: 'primary' },
      { label: 'See success stories', to: '/case-studies', variant: 'outline' },
    ],
  },

  intro: {
    title: "Faster Policy and Claims Processing, Backed by Data and Expertise",
    desc: "KGS advances policy lifecycle efficiency through structured workflows, analytics, and automation, accelerating claims, reducing application delays, and freeing underwriters for higher-value decisions.",
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
        imageAlt: "Claims Processing",
        title: "Claims Processing",
        desc: "Accelerate claims processing from FNOL through settlement while maintaining accuracy and responsiveness.",
        tags: ["Claims Intake","Claims Validation","Workflow Management","Settlement Support"],
      },
      {
        image: cardImg2,
        imageAlt: "Policy Administration",
        title: "Policy Administration",
        desc: "Maintain current policy records through policy administration covering issuance, endorsements, renewals, and changes.",
        tags: ["Policy Issuance","Endorsements","Renewals","Policy Changes"],
      },
      {
        image: cardImg3,
        imageAlt: "Underwriting Support",
        title: "Underwriting Support",
        desc: "Free up your underwriters for risk assessment by providing insurance underwriting support that covers recurring administrative tasks.",
        tags: ["Data Gathering","Application Review","Risk Data Support","Underwriting Administration"],
      },
      {
        image: cardImg4,
        imageAlt: "New Business Processing",
        title: "New Business Processing",
        desc: "Shorten application-to-binding timelines through structured validation, workflow tracking, and issuance support.",
        tags: ["Application Processing","Data Validation","Workflow Tracking","Policy Binding Support"],
      },
      {
        image: cardImg5,
        imageAlt: "Commissions Management",
        title: "Commissions Management",
        desc: "Keep producer payments accurate by managing commissions through calculation, validation, reconciliation, and administration.",
        tags: ["Commission Calculation","Validation","Reconciliation","Producer Support"],
      },
      {
        image: cardImg6,
        imageAlt: "Customer Servicing",
        title: "Customer Servicing",
        desc: "Address policyholder inquiries efficiently through customer support spanning recurring servicing requirements.",
        tags: ["Policyholder Support","Service Requests","Query Resolution","Customer Assistance"],
      },
    ],
  },

  aiCapabilities: {
    heading: "Our AI Capabilities for Insurance",
    tabs: [
      {
        title: "AI Agent Platform",
        label: "Make Routine Insurance Work Move Faster",
        desc: "KGS uses AI agents and automation to:",
        bullets: ["Retrieve policy information across connected systems","Coordinate recurring claims workflows","Flag exceptions requiring human review","Route defined process actions"],
        footnote: "Routine tasks move faster, giving claims professionals and underwriters greater capacity while retaining human oversight for complex decisions, approvals, and insurance judgment.",
        image: aiImage,
      },
      {
        title: "Insurance Intelligence &amp; Predictive Analytics",
        label: "Turn Insurance Data into Earlier Performance Insight",
        desc: "We apply analytics across claims, policyholder, and underwriting data to:",
        bullets: ["Identify claims and policy patterns","Track processing cycle times","Detect anomalies requiring investigation","Inform risk and performance decisions"],
        footnote: "Teams gain clearer visibility into processing trends, emerging risks, potential leakage, and bottlenecks requiring timely action across the insurance lifecycle.",
        image: aiImage,
      },
      {
        title: "Workflow Automation",
        label: "Take Repetitive Work Out of the Policy Lifecycle",
        desc: "Structured insurance workflows can create significant administrative effort at scale. KGS applies automation to:",
        bullets: ["Standardize recurring process steps","Automate rule-based validations","Route exceptions to the appropriate teams","Connect activities across existing insurance systems"],
        footnote: "This improves consistency and turnaround while giving experienced insurance professionals more capacity for risk, judgment, and customer outcomes.",
        image: aiImage,
      },
    ],
  },

  faq: {
    title: "Answers for Commonly Asked Questions",
    desc: "Find answers to common questions about how KGS supports claims, policy administration, underwriting, and customer servicing here.",
    ctaTitle: "Still Have Questions?",
    ctaDesc: "Share your bottlenecks with KGS and explore solutions tailored to your priorities.",
    ctaLabel: "Book a consultation",
    items: [
      {
            "question": "Can KGS work within our existing policy administration system?",
            "answer": "Yes. KGS works across platforms, including Guidewire, Duck Creek, Sapiens, and Majesco. Teams operate within existing core systems, avoiding unnecessary technology migration and disruption."
      },
      {
            "question": "Can KGS support both personal and commercial lines?",
            "answer": "Yes. KGS supports personal, commercial, and specialty lines across the policy lifecycle, with workflows adapted to different underwriting, servicing, and operational requirements."
      },
      {
            "question": "Can KGS scale during catastrophe events or renewal peaks?",
            "answer": "Yes. Delivery capacity can scale around catastrophe events, renewal seasons, and other periods of variable insurance volume, helping protect processing cycle times when workloads increase."
      },
      {
            "question": "How does KGS maintain speed without compromising accuracy?",
            "answer": "KGS combines specialized workflows, automation where appropriate, and dual-layer review to remove bottlenecks while maintaining processing accuracy."
      },
      {
            "question": "How does KGS protect policyholder information?",
            "answer": "KGS insurance compliance services follow ISO 27001:2022 practices, including access controls, encryption, data policies, and audit trails, supporting GDPR and HIPAA requirements."
      }
],
  },

  contactForm: {
    title: "Move at the Speed You Promise Policyholders",
    desc: ". Tell us where processing slows down, and we’ll show how insurance to move faster while maintaining accuracy.",
    defaultService: "Insurance",
  },
}

export default insurance
