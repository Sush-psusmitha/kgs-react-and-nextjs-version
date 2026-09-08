import bannerImage from '../../assets/images/product/maplibrarysuite/maplibrarysuite-banner.webp';
import productIntroImg from '../../assets/images/product/maplibrarysuite/product-intro.png';
import browserMockupImg from '../../assets/images/product/maplibrarysuite/browser-mockup.png';
import platformImg from '../../assets/images/product/maplibrarysuite/platform.png';
import whyChooseUsImg from '../../assets/images/product/maplibrarysuite/why-choose-us.png';

import aiReadyFoundationIcon from '../../assets/images/product/maplibrarysuite/icons/ai-ready-foundation.svg';
import decisionIntelligenceIcon from '../../assets/images/product/maplibrarysuite/icons/decision-intelligence.svg';
import responsibleAiIcon from '../../assets/images/product/maplibrarysuite/icons/responsible-ai-and-governance.svg';
import aiWorkflowIcon from '../../assets/images/product/maplibrarysuite/icons/ai-workflow-automation.svg';

import aicteImg from '../../assets/images/product/maplibrarysuite/aicte.png';
import naacImg from '../../assets/images/product/maplibrarysuite/naac.png';
import nbaImg from '../../assets/images/product/maplibrarysuite/nba.png';
import neatImg from '../../assets/images/product/maplibrarysuite/neat.png';

export const maplibrarysuiteData = {
  slug: 'maplibrarysuite',
  name: 'MapLibrarySuite',
  hero: {
    badge: 'PRODUCT',
    title: 'The Smarter Way to Manage Modern Libraries',
    description:
      'MapLibrarySuite connects librarians, students, faculty, and administrators through one intelligent library platform.',
    bannerImage: bannerImage,
    primaryCta: {
      text: 'Join Bootcamp',
      link: '#contact',
    },
    secondaryCta: {
      text: 'Explore Features',
      link: '#features',
    },
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/#products' },
      { label: 'MapLibrarySuite', href: '/products/maplibrarysuite' },
    ],
  },
  intro: {
    badge: 'ABOUT MAPLIBRARYSUITE',
    title: 'Library Operations Have Changed Your Platform Should Too',
    description: [
      'Modern libraries manage more than books on shelves. They manage physical and digital resources, circulation, acquisitions, user access, inventory, searches, notifications, and growing expectations for anytime access. Manual processes make these activities harder to coordinate and harder to scale.',
      'MapLibrarySuite brings core library operations into one centralized digital environment. From cataloging and circulation to online search, automated reminders, fine tracking, and resource availability, the platform gives library teams the tools they need to operate efficiently while giving patrons an easier way to find and use resources.',
      'Whether managing a single institutional library or a multi-department digital resource hub, MapLibrarySuite helps you move away from disjointed processes and toward structured, automated, and connected library management.',
    ],
    image: productIntroImg,
    stats: [
      { value: '600+', label: 'Active Clients' },
      { value: '12500+', label: 'Projects Completed' },
      { value: '40%', label: 'Conversion Rate Increase' },
      { value: '$700m', label: 'Revenue Generated' },
    ],
  },
  capabilities: {
    badge: 'THE PROBLEM WE SOLVE',
    title: 'Every Library Is Drowning In The Same Problems',
    description:
      'These are not small inefficiencies. They are structural challenges that affect library staff, resources, users, and institutional efficiency. MapLibrarySuite was built to replace fragmented library processes with a more connected digital environment.',
    items: [
      {
        icon: aiReadyFoundationIcon,
        title: 'AI-Ready Data Fabric',
        description:
          'Connect catalogue, circulation, acquisition, inventory, user, and resource information within one structured environment so library teams can work from consistent information.',
      },
      {
        icon: decisionIntelligenceIcon,
        title: 'Reasoning Engine',
        description:
          'Automate routine circulation rules, due-date notifications, fine calculations, and resource availability updates with reliable background workflows.',
      },
      {
        icon: responsibleAiIcon,
        title: 'Trust & Governance Layer',
        description:
          'Maintain clear auditability, role-based permissions, resource security, and transparent data access across library members and staff.',
      },
      {
        icon: aiWorkflowIcon,
        title: 'Autonomous Applications',
        description:
          'Provide self-service search, real-time status visibility, multi-device access, and digital resource discovery for patrons and faculty.',
      },
    ],
  },
  roleAgents: {
    badge: 'ROLE-BASED INTELLIGENCE',
    title: 'Everyone Gets Their Own AI Agent.',
    description:
      'Library operations involve different stakeholders with different needs. A librarian needs support with administration. A student needs fast access to resources. An administrator needs visibility into library operations. A faculty member needs efficient resource discovery and access. MapLibrarySuite creates a more connected digital experience for each.',
    tabs: [
      {
        id: 'librarian',
        name: 'Librarian',
        agentName: 'LibrarianAgent',
        tagline: 'Your AI-powered library operations partner',
        description:
          'Support cataloging, circulation, acquisitions, inventory checks, fine calculations, and overdue reminders through structured workflows that reduce administrative overhead.',
        features: [
          'Streamlined catalogue and accession record management',
          'Automated circulation, return, and renewal processing',
          'Quick fine calculations and notification triggers',
          'Periodic inventory check and status reports',
        ],
      },
      {
        id: 'student',
        name: 'Student',
        agentName: 'StudyAgent',
        tagline: 'Your personal resource and study assistant',
        description:
          'Help students find books, research materials, journals, and digital documents quickly with intelligent search, availability checks, and reservation alerts.',
        features: [
          'Unified search across physical and digital catalogues',
          'Instant resource availability and shelf location checks',
          'Automated loan due reminders and reservation alerts',
          'Mobile and web access from anywhere on campus',
        ],
      },
      {
        id: 'faculty',
        name: 'Faculty',
        agentName: 'FacultyAgent',
        tagline: 'Curriculum-aligned discovery and recommendation engine',
        description:
          'Empower educators and researchers to discover subject-specific literature, recommend reading lists to classes, and request new acquisitions seamlessly.',
        features: [
          'Course-aligned resource discovery and reading list curation',
          'Direct requisition requests for new physical and digital titles',
          'Multi-user concurrent access to scholarly references',
          'Usage insights on course reserve materials',
        ],
      },
      {
        id: 'admin',
        name: 'Admin',
        agentName: 'AdminAgent',
        tagline: 'Institutional governance and resource analytics',
        description:
          'Provide complete operational visibility into utilization, asset loss prevention, accreditation reporting, and institutional compliance standards.',
        features: [
          'Accreditation ready metrics for NAAC, NBA, AICTE, and NEAT',
          'Departmental budget allocation and acquisition tracking',
          'Comprehensive audit trails and role-based access governance',
          'Enterprise multi-branch library system orchestration',
        ],
      },
    ],
    mockupImage: browserMockupImg,
    accreditations: [
      { name: 'AICTE', image: aicteImg },
      { name: 'NAAC', image: naacImg },
      { name: 'NBA', image: nbaImg },
      { name: 'NEAT', image: neatImg },
    ],
  },
  engines: {
    badge: 'CORE CAPABILITIES',
    title: 'One Platform. Two Powerful Engines.',
    description:
      'MapLibrarySuite brings two tightly integrated engines together on one platform: a Library Management Engine for running core library operations and a Digital Access Engine for helping users discover and access resources.',
    tabs: [
      {
        id: 'management',
        label: 'Library Management Solutions',
        items: [
          {
            number: '01',
            title: 'Catalogue Management',
            description:
              'Enter, organize, and maintain detailed information about library resources with standardized classification and metadata fields.',
          },
          {
            number: '02',
            title: 'Circulation Management',
            description:
              'Manage checkouts and returns while keeping availability information accurate across all users in real time.',
          },
          {
            number: '03',
            title: 'Acquisition Management',
            description:
              'Track resource requests, purchase orders, vendor invoices, and accessioning workflows without manual paperwork.',
          },
          {
            number: '04',
            title: 'Inventory Management',
            description:
              'Audit physical collections, flag missing items, and monitor condition reports through fast barcode/RFID scanning.',
          },
          {
            number: '05',
            title: 'Fine Management',
            description:
              'Automate late-fee computations, receipt generation, payment history tracking, and student clearance checks.',
          },
          {
            number: '06',
            title: 'Member Management',
            description:
              'Manage student, faculty, and guest patron profiles, borrowing privileges, membership validity, and ID cards.',
          },
        ],
      },
      {
        id: 'digital',
        label: 'Digital Library Solutions',
        items: [
          {
            number: '01',
            title: 'Online Catalogue',
            description:
              'Allow patrons to search, browse, and filter the entire library collection from any desktop or mobile browser.',
          },
          {
            number: '02',
            title: 'Advanced Search',
            description:
              'Filter by title, author, subject, publication year, ISBN, and availability for rapid resource discovery.',
          },
          {
            number: '03',
            title: 'Anytime, Anywhere Access',
            description:
              'Enable students and faculty to check account status, renew loans, and place holds 24/7 beyond library hours.',
          },
          {
            number: '04',
            title: 'Multilingual & Multi-User Access',
            description:
              'Support diverse language materials and simultaneous patron queries without performance degradation.',
          },
          {
            number: '05',
            title: 'Automated Notifications',
            description:
              'Send automated email and SMS notifications for reservation availability, due date reminders, and overdue alerts.',
          },
          {
            number: '06',
            title: 'Real-Time Availability',
            description:
              'Ensure patrons see immediate on-shelf vs. checked-out status before making a trip to the physical library stacks.',
          },
        ],
      },
    ],
  },
  transformations: {
    badge: 'TRANSFORMATION IMPACT',
    title: 'One Platform. Four Transformations.',
    description:
      'MapLibrarySuite connects the people at the center of modern library operations through one digital environment.',
    platformImage: platformImg,
    tabs: [
      {
        id: 'librarian',
        role: 'For the Librarian',
        heading: 'From Manual Administration To Connected Operations',
        description:
          'Bring cataloging, circulation, acquisitions, inventory, fines, and administrative activities into one structured environment. Automated processes reduce repetitive work while centralized information gives library teams greater visibility across daily library functions.',
        metrics: [
          { value: '75%', label: 'Reduction In Routine Admin Time' },
          { value: '99%', label: 'Catalogue & Inventory Accuracy' },
          { value: '100%', label: 'Connected Circulation Workflows' },
        ],
      },
      {
        id: 'student',
        role: 'For the Student',
        heading: 'From Searching Shelves To Finding Resources Faster',
        description:
          'Give students a direct, searchable digital gateway to the library collection. They can check availability, review account details, receive reminders, and access digital resources whenever they need them.',
        metrics: [
          { value: '90%', label: 'Faster Resource Discovery' },
          { value: '24/7', label: 'Anytime Digital Library Access' },
          { value: '80%', label: 'Decrease In Overdue Return Delays' },
        ],
      },
      {
        id: 'faculty',
        role: 'For the Faculty',
        heading: 'From Resource Hunting To Better Discovery',
        description:
          'Help faculty access relevant reference materials, recommend titles for coursework, track acquisition requests, and support students with direct access to institutional academic resources.',
        metrics: [
          { value: '3x', label: 'Faster Course Reserve Setup' },
          { value: '85%', label: 'Higher Research Resource Utilization' },
          { value: '100%', label: 'Transparent Acquisition Requisitions' },
        ],
      },
      {
        id: 'admin',
        role: 'For the Administrator',
        heading: 'From Limited Visibility To Greater Control',
        description:
          'Equip academic leadership and library directors with real-time analytics, compliance reporting for NAAC/NBA accreditations, multi-branch visibility, and complete budget oversight.',
        metrics: [
          { value: '100%', label: 'Accreditation-Ready Reporting' },
          { value: '60%', label: 'Operational Cost Optimization' },
          { value: '360°', label: 'Institutional Library Visibility' },
        ],
      },
    ],
  },
  trustStats: {
    badge: 'WHY CHOOSE MAPLIBRARYSUITE',
    title: '30 Years Of Trust. A Future Built On Intelligence',
    description:
      'These are not estimates. They are outcomes from institutions using modern digital library workflows to improve access, administration, and resource management.',
    bgImage: whyChooseUsImg,
    items: [
      {
        title: 'Centralized',
        description:
          'Library resources managed through one connected digital environment.',
      },
      {
        title: 'Automated',
        description:
          'Circulation, returns, fine calculations, notifications, and inventory updates supported through digital workflows.',
      },
      {
        title: 'Searchable',
        description:
          'Online catalogue access makes resource discovery faster and easier for users across devices.',
      },
      {
        title: 'Scalable',
        description:
          'Built to support growing collections, multi-department libraries, and expanding digital resources.',
      },
      {
        title: 'Compliant',
        description:
          'Supports institutional reporting requirements including NAAC, NBA, and AICTE documentation standards.',
      },
      {
        title: 'Reliable',
        description:
          'Backed by decades of domain expertise in educational and enterprise technology solutions.',
      },
    ],
  },
  testimonials: {
    badge: 'TESTIMONIALS',
    title:
      'Across schools, colleges, institutions, and library teams, the same need keeps surfacing. Better-connected library management.',
    items: [
      {
        quote:
          'MapLibrarySuite gives our library team a more structured way to manage resources, circulation, and everyday operations.',
        author: 'Library Administrator',
        designation: 'Higher Education Institution',
      },
      {
        quote:
          'The centralized catalogue makes it easier for our users to find resources without relying on manual searches.',
        author: 'Academic Librarian',
        designation: 'University Campus',
      },
      {
        quote:
          'Automating routine circulation activities reduces administrative work and gives our team more time to support patrons.',
        author: 'Chief Librarian',
        designation: 'Engineering College',
      },
      {
        quote:
          'Online search and availability updates make the library more accessible to students beyond standard library hours.',
        author: 'Dean of Academic Affairs',
        designation: 'Autonomous Institution',
      },
      {
        quote:
          'The reporting tools helped us prepare accurate documentation for accreditation reviews without weeks of manual effort.',
        author: 'Director of Libraries',
        designation: 'Multi-disciplinary University',
      },
      {
        quote:
          'Our students love the quick search and automated notifications. It transformed how they engage with library resources.',
        author: 'Head of Department',
        designation: 'Science & Technology College',
      },
      {
        quote:
          'Switching to MapLibrarySuite brought transparency to acquisitions and unified all five departmental libraries.',
        author: 'Registrar',
        designation: 'State University',
      },
    ],
  },
  faq: {
    badge: 'FAQ',
    title: 'Clean Answers for Complex Questions.',
    subtitle:
      'Modern library platforms need to support both operational efficiency and convenient resource access. Here are answers to the questions institutions should ask before choosing a digital library management system.',
    consultation: {
      title: 'Still Have Questions?',
      description:
        "Let's discuss what your institution needs from its library management and digital resource environment.",
      ctaText: 'Book a Consultation',
      ctaLink: '#contact',
    },
    items: [
      {
        question: 'What is MapLibrarySuite?',
        answer:
          'MapLibrarySuite is a digital library management system designed to centralize cataloging, circulation, inventory, user management, and digital resource access in one connected environment.',
      },
      {
        question: 'Who is MapLibrarySuite designed for?',
        answer:
          'It is built for schools, colleges, universities, research institutions, public libraries, and enterprise corporate resource centers looking to modernize library workflows.',
      },
      {
        question: 'Can MapLibrarySuite manage both physical and digital resources?',
        answer:
          'Yes. MapLibrarySuite supports physical book collections, periodicals, journals, media assets, e-books, research documents, and institutional repository records.',
      },
      {
        question: 'How does MapLibrarySuite improve catalogue search for students and faculty?',
        answer:
          'It provides a responsive online public access catalogue (OPAC) with advanced filtering, real-time availability checks, title reservations, and mobile access.',
      },
      {
        question: 'Does the platform support automated notifications and reminders?',
        answer:
          'Yes. The system automatically sends email and SMS notifications for loan due dates, overdue items, reservation ready status, and fine receipts.',
      },
      {
        question: 'Can MapLibrarySuite handle fine calculations and membership rules?',
        answer:
          'Yes. Flexible rule engines allow configuring borrowing limits, loan durations, grace periods, and fine rates tailored to different patron categories (students, faculty, researchers).',
      },
      {
        question: 'Does MapLibrarySuite support accreditation reporting like NAAC, NBA, and AICTE?',
        answer:
          'Yes. The platform includes standard compliance reporting templates for collection metrics, daily circulation logs, per-student book ratios, and digital utilization reports.',
      },
      {
        question: 'How does deployment and data migration work for existing libraries?',
        answer:
          'Our onboarding team assists with bulk data migration from legacy spreadsheets, MARC records, or older ILS systems with zero downtime and comprehensive staff training.',
      },
    ],
  },
  contact: {
    badge: 'GET STARTED',
    title: 'The Right Time To Rethink Your Library Management System Is Now.',
    description:
      'Connect with our solution experts to see how MapLibrarySuite can help your institution build a more organized, efficient, and accessible library.',
    defaultService: 'MapLibrarySuite',
  },
};
