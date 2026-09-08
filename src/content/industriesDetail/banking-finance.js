import Link from 'next/link'

import heroBg from '../../assets/images/industries/banking-finance/banking.webp'
import accountsPayableImg from '../../assets/images/industries/banking-finance/accounts-payable.webp'
import accountsReceivableImg from '../../assets/images/industries/banking-finance/accounts-recievable.webp'
import generalLedgerImg from '../../assets/images/industries/banking-finance/general-ledger-accounting.webp'
import financialReportingImg from '../../assets/images/industries/banking-finance/financial-reporting.webp'
import monthEndCloseImg from '../../assets/images/industries/banking-finance/month-end-close.webp'
import payrollAccountingImg from '../../assets/images/industries/banking-finance/payroll-accounting.webp'
import aiImage from '../../assets/images/common/ai.png'

const bankingFinance = {
  slug: 'banking-finance',
  breadcrumbLabel: 'Banking & Finance',

  hero: {
    tag: 'Banking & Finance',
    title: 'Create Clarity That Drives Better Business Outcomes',
    desc: 'Strengthen your critical financial workflows to improve efficiency, maintain control, and support scalable operations.',
    bgImage: heroBg,
    actions: [
      { label: 'Get Started', to: '/contact', variant: 'primary' },
      { label: 'See success stories', to: '/case-studies', variant: 'outline' },
    ],
  },

  intro: {
    title: 'Accurate, Controlled Financial Management That Scales',
    desc: 'KGS advances high-volume financial processes through structured workflows, automation, and data capabilities that improve accuracy, accelerate processing, and increase visibility across transactions.',
    ctaText: 'Get Started',
    ctaLink: '/contact',
    stats: [
      { label: 'Satisfied Clients', value: '600+' },
      { label: 'Operational Savings', value: '$100m+' },
      { label: 'Projects Delivered', value: '>17k' },
      { label: 'Client Retention', value: '96%' },
    ],
  },

  services: {
    heading: 'Services We Offer',
    cards: [
      {
        image: accountsPayableImg,
        imageAlt: 'Accounts Payable',
        title: 'Accounts Payable',
        desc: 'Streamline high-volume payables through payment processing covering invoices, approvals, settlements, and vendor reconciliation.',
        tags: ['Invoice Processing', 'Vendor Reconciliation', 'Payment Processing', 'AP Reporting'],
      },
      {
        image: accountsReceivableImg,
        imageAlt: 'Accounts Receivable',
        title: 'Accounts Receivable',
        desc: 'Improve cash flow through accurate billing, collections, cash application, and timely reconciliation across customer accounts.',
        tags: ['Billing Support', 'AR Reconciliation', 'Cash Application', 'Collections Support'],
      },
      {
        image: generalLedgerImg,
        imageAlt: 'General Ledger & Accounting',
        title: 'General Ledger & Accounting',
        desc: 'Keep financial records accurate through bank reconciliation covering journals, ledgers, balances, and account-level controls.',
        tags: ['Journal Entries', 'Ledger Maintenance', 'Account Reconciliation', 'Balance Review'],
      },
      {
        image: financialReportingImg,
        imageAlt: 'Financial Reporting',
        title: 'Financial Reporting',
        desc: 'Gain clearer financial visibility through analytics covering performance, cash flow, KPIs, and reporting.',
        tags: ['Management Reporting', 'Financial Statements', 'KPI Reporting', 'Financial Analysis'],
      },
      {
        image: monthEndCloseImg,
        imageAlt: 'Month-End Close',
        title: 'Month-End Close',
        desc: 'Accelerate period-end close through disciplined reconciliations, account reviews, journal processing, and structured financial reporting.',
        tags: ['Close Reconciliation', 'Account Review', 'Journal Support', 'Close Reporting'],
      },
      {
        image: payrollAccountingImg,
        imageAlt: 'Payroll Accounting',
        title: 'Payroll Accounting',
        desc: 'Maintain accurate payroll accounting by controlling records, performing reconciliations, providing tax support, and producing recurring financial reports.',
        tags: ['Payroll Reconciliation', 'Payroll Records', 'Tax Support', 'Payroll Reporting'],
      },
    ],
  },

  aiCapabilities: {
    heading: 'Our AI Capabilities',
    tabs: [
      {
        title: 'AI Agent Platform',
        label: 'Bring AI into High-Volume Financial Workflows',
        desc: 'AI agents bring intelligent automation into financial workflows, increasing team capacity. KGS uses AI agents to:',
        bullets: [
          'Retrieve information across connected systems',
          'Complete recurring operational tasks',
          'Flag exceptions requiring human attention',
          'Coordinate defined financial workflows',
        ],
        footnote: 'Teams gain more capacity for higher-value work while maintaining human oversight for financial judgment, governance, and accountability.',
        image: aiImage,
      },
      {
        title: 'Data Intelligence & Analytics',
        label: 'Turn Financial Data into Clearer Business Insight',
        desc: 'KGS applies AI-driven analytics across transactional, customer, portfolio, and operational data to make financial information more actionable by:',
        bullets: [
          'Identifying patterns across complex financial datasets',
          'Surfacing anomalies for further investigation',
          'Monitoring financial and operational performance',
          'Supporting faster, data-informed decisions',
        ],
        footnote: 'This creates clearer visibility into performance, exceptions, and emerging risks across financial operations.',
        image: aiImage,
      },
      {
        title: 'Workflow Automation',
        label: 'Take Repetitive Work Out of Financial Operations',
        desc: 'KGS automates structured, rule-based financial activities that consume time and create unnecessary processing effort. This includes:',
        bullets: [
          'Automating recurring reconciliation and validation activities',
          'Standardizing repeatable workflow steps',
          'Routing exceptions to the appropriate teams',
          'Connecting activities across existing business systems',
        ],
        footnote: 'The result? More consistent execution, shorter processing cycles, and greater capacity for higher-value financial work.',
        image: aiImage,
      },
    ],
  },

  faq: {
    title: 'Answers for Commonly Asked Questions',
    desc: 'Find answers to common questions about how KGS supports financial processes here.',
    ctaTitle: 'Still have questions?',
    ctaDesc: 'Discuss your finance requirements with KGS and explore solutions aligned with your priorities.',
    ctaLabel: 'Book a Consultation',
    items: [
      {
        question: 'Can we start with one finance function before expanding?',
        answer: 'Yes. KGS can begin with a defined function, such as accounts payable, accounts receivable, reconciliation, reporting, or month-end close, through financial process outsourcing, then expand as business requirements evolve.',
      },
      {
        question: 'Can KGS work within our existing financial systems?',
        answer: 'Yes. KGS works with QuickBooks, Xero, NetSuite, SAP, and Oracle, connecting solutions to established systems while maintaining business continuity.',
      },
      {
        question: 'How does KGS maintain accuracy across financial operations?',
        answer: 'Documented procedures, structured reviews, reconciliations, and financial controls maintain accuracy across transaction processing, bank reconciliation services, ledger management, and financial reporting cycles consistently.',
      },
      {
        question: 'Can KGS support multi-entity financial operations?',
        answer: 'Yes. We support multiple entities, currencies, and jurisdictions through standardized workflows, centralized controls, consistent reporting practices, and clear global financial visibility.',
      },
      {
        question: 'Can the KGS team scale as transaction volumes change?',
        answer: 'Yes. KGS adjusts capacity as transaction volumes, entities, seasonal demand, and business requirements change, keeping recurring finance workflows consistent without service interruptions.',
      },
    ],
  },

  contactForm: {
    title: 'Build Greater Certainty into Financial Management',
    desc: 'Tell us where processes slow down, and we’ll show how to improve turnaround times across lending, compliance, and financial workflows.',
    defaultService: 'Banking & Finance',
  },
}

export default bankingFinance
