import bannerImage from '../../assets/images/product/mapmyclasses/mapmyclasses-banner.png';
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

export const mapmyclassesData = {
  slug: 'mapmyclasses',
  name: 'MapMyClasses',
  hero: {
    badge: 'PRODUCT',
    title: "The World's First Agentic Education Operating System",
    description:
      'MapMyClasses connects teachers, students, parents, and administrators through one intelligent education platform. It personalizes learning while making school operations more connected, efficient, and seamless.',
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
      { label: 'MapMyClasses', href: '/products/mapmyclasses' },
    ],
  },
  intro: {
    badge: 'ABOUT MAPMYCLASSES',
    title: 'Education Has Changed. Your Platform Should Too.',
    description: [
      'Education no longer fits neatly inside a classroom, timetable, or single learning system.',
      'Students expect flexible access to learning. Teachers need better ways to personalize instruction and engage learners. Parents want greater visibility. Administrators need connected systems that reduce operational complexity.',
      'MapMyClasses brings learning, communication, assessment, resources, and academic administration into one multilingual digital environment. From online classrooms and personalized learning paths to interactive sessions, attendance, schedules, notifications, and assessments, it connects the activities that keep an institution moving.',
    ],
    image: productIntroImg,
    stats: [
      { value: '600+', label: 'Active Clients' },
      { value: '12500+', label: 'Projects Delivered' },
      { value: '40%', label: 'Higher Conversion Rates' },
      { value: '$700m', label: 'Revenue Boosted' },
    ],
    compliance: [
      { name: 'AICTE', image: aicteImg },
      { name: 'NEAT', image: neatImg },
      { name: 'NBA', image: nbaImg },
      { name: 'NAAC', image: naacImg },
    ],
  },
  capabilities: {
    badge: 'THE PROBLEM WE SOLVE',
    title: 'Every School Is Drowning In The Same Problems',
    description:
      'These are not small inefficiencies. They are structural failures that cost institutions time, money and, most importantly, student potential. MapMyClasses was built because the education system deserved something better. Not a prettier dashboard. A genuinely smarter institution.',
    items: [
      {
        icon: aiReadyFoundationIcon,
        title: 'AI-Ready Data Fabric',
        description:
          'Connect learning, student, classroom, assessment, and administrative information within one structured environment so the right information supports the right activity.',
      },
      {
        icon: decisionIntelligenceIcon,
        title: 'Reasoning Engine',
        description:
          'Use intelligent workflows to support more personalized learning, teaching assistance, assessment activities, and academic decision-making.',
      },
      {
        icon: responsibleAiIcon,
        title: 'Trust & Governance Layer',
        description:
          'Keep learning and institutional information within structured workflows designed around controlled access, consistent processes, and responsible use.',
      },
      {
        icon: aiWorkflowIcon,
        title: 'Autonomous Applications',
        description:
          'Extend intelligent assistance across the people who use the platform every day, from teaching and learning to administration and parent engagement.',
      },
    ],
  },
  roleAgents: {
    badge: 'ROLE-BASED INTELLIGENCE',
    title: 'Everyone Gets Their Own AI Agent.',
    description:
      'Education works differently for every stakeholder. A teacher needs support with teaching. A student needs support with learning. An administrator needs support with operations. A parent needs support with visibility and communication. MapMyClasses brings intelligent assistance into each of those experiences.',
    tabs: [
      {
        id: 'teach',
        name: 'Teacher',
        agentName: 'TeachAgent',
        tagline: 'Your AI-powered teaching partner',
        description:
          'Support lesson preparation, content creation, personalized learning activities, assessments, and classroom engagement so teachers can spend more time teaching and less time managing repetitive work.',
        features: [
          "Bloom's taxonomy-aligned lesson planning in minutes",
          'Automated rubric and quiz generation from course content',
          'Real-time student engagement and intervention alerts',
          'Interactive assignments with immediate feedback',
        ],
      },
      {
        id: 'study',
        name: 'Student',
        agentName: 'StudyAgent',
        tagline: 'Your AI-powered learning companion',
        description:
          'Support students with personalized learning paths, recommendations, interactive resources, assessments, and learning activities designed around their individual progress.',
        features: [
          'Adaptive practice modules calibrated to learning pace',
          'Interactive English language & pronunciation modules',
          '24/7 homework assistance and doubt-solving assistance',
          'Collaborative group project boards and shared workspaces',
        ],
      },
      {
        id: 'admin',
        name: 'Admin',
        agentName: 'AdminAgent',
        tagline: 'Your AI-powered administrative partner',
        description:
          'Bring greater structure to recurring academic administration, from attendance and schedules to assessments, notifications, and institutional workflows.',
        features: [
          'Unified timetable, exam, and attendance management',
          'Automated fee reconciliation and secure digital payments',
          'Accreditation documentation for NAAC, NBA, and AICTE',
          'Campus-wide resource planning and utilization analytics',
        ],
      },
      {
        id: 'parent',
        name: 'Parent',
        agentName: 'ParentAgent',
        tagline: 'Your AI-powered parent engagement partner',
        description:
          'Help parents stay connected with relevant academic information, classroom activity, schedules, assessments, and communication throughout the learner journey.',
        features: [
          'Real-time attendance, grades, and behavioral updates',
          'Direct messaging channels with teachers and coordinators',
          'Upcoming examination and project deadline alerts',
          'Transparent fee payment records and receipts',
        ],
      },
    ],
    mockupImage: browserMockupImg,
    accreditations: [
      { name: 'AICTE', image: aicteImg },
      { name: 'NEAT', image: neatImg },
      { name: 'NBA', image: nbaImg },
      { name: 'NAAC', image: naacImg },
    ],
  },
  engines: {
    badge: 'CORE CAPABILITIES',
    title: 'One Platform. Two Powerful Engines.',
    description:
      'MapMyClasses brings two tightly integrated engines together on one platform: an Education ERP for the activities that run the institution and an AI-powered LMS for teaching and learning.',
    tabs: [
      {
        id: 'erp',
        label: 'ERP Solutions',
        items: [
          {
            number: '01',
            title: 'Attendance Management',
            description:
              'Track attendance across classrooms and academic activities with biometric, mobile, and digital registers.',
          },
          {
            number: '02',
            title: 'Timetable & Schedule Management',
            description:
              'Keep classroom, laboratory, faculty allocation, and examination schedules organized and accessible in real time.',
          },
          {
            number: '03',
            title: 'Assessment & Scoreboard Monitoring',
            description:
              'Maintain complete visibility into continuous evaluations, semester exams, grading rubrics, and report cards.',
          },
          {
            number: '04',
            title: 'Notifications & Alerts',
            description:
              'Keep students, teachers, and parents informed about important academic circulars, holidays, and emergency updates.',
          },
          {
            number: '05',
            title: 'Secure Payments',
            description:
              'Support streamlined digital fee collection, automated invoice generation, installment plans, and reconciliations.',
          },
          {
            number: '06',
            title: 'Academic Records Management',
            description:
              'Maintain student dossiers, transcript histories, transfer certificates, and compliance archives in one secure place.',
          },
        ],
      },
      {
        id: 'lms',
        label: 'LMS Solutions',
        items: [
          {
            number: '01',
            title: 'Lesson Planner',
            description:
              "Structured, AI-assisted lesson planning that saves teachers hours every week and aligns to Bloom's taxonomy automatically.",
          },
          {
            number: '02',
            title: 'Group Work & Collaboration',
            description:
              'Collaborative projects, breakout rooms, and peer review activities that build teamwork while tracking individual contributions.',
          },
          {
            number: '03',
            title: 'AI Educational Tools',
            description:
              'Automate content creation, personalize practice pathways, and assist grading with intelligence built into daily workflows.',
          },
          {
            number: '04',
            title: 'English Language Module',
            description:
              'Vocabulary, grammar, pronunciation, and writing skills developed through AI-driven exercises with real-time audio analysis.',
          },
          {
            number: '05',
            title: 'Content & Resource Sharing',
            description:
              'A centralized multimedia library of lectures, notes, slides, and videos that every learner can access securely 24/7.',
          },
          {
            number: '06',
            title: 'Question Bank & Auto-Quizzing',
            description:
              'Create custom tests and diagnostic assessments from a deep, structured repository aligned with state and national curricula.',
          },
        ],
      },
    ],
  },
  transformations: {
    badge: 'TRANSFORMATION IMPACT',
    title: 'One Platform. Four Transformations.',
    description:
      'MapMyClasses connects the people at the center of education through one learning and administration environment.',
    platformImage: platformImg,
    tabs: [
      {
        id: 'administrator',
        role: 'For the Administrator',
        heading: 'From Overwhelmed To In Control',
        description:
          'Bring recurring academic administration into a more connected environment. Attendance, timetables, examinations, notifications, scoreboards, payments, and other institutional activities can be managed through structured digital workflows rather than disconnected processes.',
        metrics: [
          { value: '90%', label: 'Less Administrative Friction' },
          { value: '39%', label: 'Better Operational Visibility' },
          { value: '100%', label: 'More Connected Academic Management' },
        ],
      },
      {
        id: 'teacher',
        role: 'For the Teacher',
        heading: 'From Routine Delivery To More Engaging Teaching',
        description:
          'Give teachers tools that support more than simply delivering lessons. Online classrooms, interactive sessions, content sharing, assessments, personalized learning, and direct student communication create more opportunities to adapt teaching around learner needs.',
        metrics: [
          { value: '90%', label: 'More Interactive Teaching' },
          { value: '39%', label: 'Better Student Communication' },
          { value: '100%', label: 'More Time For Teaching' },
        ],
      },
      {
        id: 'student',
        role: 'For the Student',
        heading: 'From Passive Learning To Personalized Progress',
        description:
          'Give students a learning environment that extends beyond the traditional classroom. Access classrooms and resources from anywhere, follow personalized learning paths, participate in interactive sessions, and engage with assessments designed to support individual progress.',
        metrics: [
          { value: '90%', label: 'Flexible Access To Learning' },
          { value: '39%', label: 'Personalized Learning Journeys' },
          { value: '100%', label: 'Greater Student Engagement' },
        ],
      },
      {
        id: 'parent',
        role: 'For the Parent',
        heading: 'From Limited Visibility To Connected Engagement',
        description:
          'Parents should not have to wait for occasional updates to understand the learning journey. MapMyClasses creates opportunities for more timely communication around academic activities, schedules, assessments, and other relevant information.',
        metrics: [
          { value: '90%', label: 'Better Academic Visibility' },
          { value: '39%', label: 'More Timely Communication' },
          { value: '100%', label: 'Stronger Parent Engagement' },
        ],
      },
    ],
  },
  trustStats: {
    badge: 'WHY CHOOSE MAPMYCLASSES',
    title: '30 Years Of Trust. A Future Built On Intelligence',
    description:
      'These are not estimates. They are outcomes from real institutions using MapMyClasses every day, measured at term close and term over term.',
    bgImage: whyChooseUsImg,
    items: [
      {
        title: '25+ Years',
        description:
          'Of educational technology experience behind our delivery teams and the MapMyClasses platform.',
      },
      {
        title: '90% Reduction',
        description:
          'In administrative task time through agentic automation and one-platform workflows.',
      },
      {
        title: '59% Faster',
        description:
          "Lesson planning for teachers, with Bloom's-aligned outputs ready in minutes, not hours.",
      },
      {
        title: '100% Adaptive',
        description:
          'Personalised learning paths for every student, adaptive in real time to performance and gaps.',
      },
      {
        title: '40% Increase',
        description:
          'In parental engagement when communication happens proactively through automated portals.',
      },
      {
        title: '3+ Countries',
        description:
          'And growing — India, UAE, and Ghana — with localized curriculum onboarding and round-the-clock support.',
      },
    ],
  },
  testimonials: {
    badge: 'TESTIMONIALS',
    title:
      'Across classrooms, institutions, and learning environments, the same need keeps surfacing. Better-connected education.',
    items: [
      {
        quote:
          'MapMyClasses gives our institution a more connected way to manage learning, communication, and academic activities.',
        role: 'Academic Administrator',
        company: 'Higher Secondary School Group',
      },
      {
        quote:
          'The platform gives teachers more flexibility to create interactive learning experiences while keeping students connected to their classrooms and resources.',
        role: 'Academic Coordinator',
        company: 'International Academy',
      },
      {
        quote:
          'Personalized learning makes it easier to support students with different learning needs instead of relying on one approach for everyone.',
        role: 'School Administrator',
        company: 'Progressive Public School',
      },
      {
        quote:
          'Having learning resources, classrooms, assessments, and communication within one environment simplifies the overall learning experience.',
        role: 'Education Technology Lead',
        company: 'Multi-campus Institution',
      },
      {
        quote:
          'The platform creates a stronger connection between teachers and students beyond the traditional classroom.',
        role: 'Institutional Head',
        company: 'State College System',
      },
      {
        quote:
          'MapMyClasses gives administrators greater structure around recurring academic activities while keeping the learning experience at the center.',
        role: 'Operations Lead, Education',
        company: 'Educational Trust',
      },
      {
        quote:
          'The combination of flexible learning access and connected administration gives our institution a stronger digital foundation.',
        role: 'Academic Operations Director',
        company: 'Global Schools Network',
      },
    ],
  },
  faq: {
    badge: 'FAQ',
    title: 'Clean Answers for Complex Questions.',
    subtitle:
      'Education platforms need to work for the people using them every day. Here are answers to the questions institutions should ask before choosing a learning and school management platform.',
    consultation: {
      title: 'Still Have Questions?',
      description:
        "Let's discuss what your institution needs from its learning and administration environment.",
      ctaText: 'Book a Consultation',
      ctaLink: '#contact',
    },
    items: [
      {
        question: 'What is MapMyClasses?',
        answer:
          'MapMyClasses is an intelligent, agentic Education Operating System that unifies classroom learning, personalized student paths, teacher lesson planning, parent updates, and comprehensive academic ERP administration in one multilingual environment.',
      },
      {
        question: 'Who is MapMyClasses designed for?',
        answer:
          'MapMyClasses is built for K-12 schools, higher education colleges, multi-campus university groups, private coaching academies, and international school networks seeking a modern, all-in-one digital education ecosystem.',
      },
      {
        question: 'How do the AI Agents assist teachers and students?',
        answer:
          "TeachAgent helps educators draft Bloom's-aligned lesson plans, rubrics, and quizzes in minutes. StudyAgent provides learners with 24/7 practice questions, speech analysis for language learning, and customized remediation paths.",
      },
      {
        question: 'Can MapMyClasses handle offline and online hybrid classrooms?',
        answer:
          'Yes. It seamlessly integrates physical classroom attendance, schedules, and grading with virtual interactive classrooms, digital assignments, recorded lecture libraries, and remote student submissions.',
      },
      {
        question: 'How does the platform assist school administrators and finance teams?',
        answer:
          'AdminAgent automates complex class scheduling, exam timetables, fee tracking, installment reminders, online payment gateway collections, and generation of official compliance documents.',
      },
      {
        question: 'Does MapMyClasses support accreditation reporting like NAAC, NBA, and AICTE?',
        answer:
          'Yes. The system automatically maintains student records, outcome-based education metrics, and institutional reporting templates aligned with NAAC, NBA, AICTE, and NEAT requirements.',
      },
      {
        question: 'How is student and institution data protected?',
        answer:
          'MapMyClasses is built with enterprise-grade data encryption, granular role-based access control (RBAC), daily backups, and strict compliance with global student data privacy regulations.',
      },
      {
        question: 'What is the onboarding and setup process for new institutions?',
        answer:
          'Our implementation team handles end-to-end data migration from legacy spreadsheets/ERPs, organizes role-based workshops for staff and faculty, and provides 24/7 dedicated support throughout the academic year.',
      },
    ],
  },
  contact: {
    badge: 'GET STARTED',
    title: 'The Right Time To Rethink Your Education Platform Is Now.',
    description:
      'Education has moved beyond the classroom. The institutions ready for what comes next need a connected platform that supports teachers, students, parents, and administrators through the same learning environment.',
    defaultService: 'Automation',
  },
};
