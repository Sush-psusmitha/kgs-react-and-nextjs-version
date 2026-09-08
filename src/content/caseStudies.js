import bankLoan from '../assets/images/case-studies/finance-blog-title-03.webp'
import bankingOps from '../assets/images/case-studies/finance-blog-title-06.webp'
import bankingPayments from '../assets/images/case-studies/finance-blog-title-04.webp'
import utilityProcess from '../assets/images/case-studies/ind-04-energy-utilities.webp'
import etlElt from '../assets/images/case-studies/logistics-blog-title-08.webp'
import gridOps from '../assets/images/case-studies/energy-utilities.webp'
import governanceRisk from '../assets/images/case-studies/finance-blog-title-05.webp'
import energyData from '../assets/images/case-studies/ind-04-energy-utilities.webp'
import financialData from '../assets/images/case-studies/finance-blog-title-02.webp'
import utilityAsset from '../assets/images/case-studies/energy-utilities.webp'
import utilityGovernance from '../assets/images/case-studies/energy-utilities.webp'
import financialPerformance from '../assets/images/case-studies/finance-blog-title-01.webp'
import performanceAnalytics from '../assets/images/case-studies/ind-04-energy-utilities.webp'

/**
 * The 13 real case studies in the old site (out of ~20+ planned — most
 * category folders under case-studies/ are still empty, per the audit).
 * `services` and `industries` are slug arrays so any page's carousel can
 * filter to what's relevant to it — e.g. the business-process-automation
 * service page shows only the 4 studies tagged 'business-process-automation',
 * the banking-finance industry page shows everything tagged 'banking-finance'.
 * Home shows a hand-picked cross-section (see Home.jsx), not a filtered set.
 */
const caseStudies = [
  {
    slug: 'bank-loan-processing',
    to: '/case-studies/business-process-automation/bank-loan-processing',
    title: 'A Financial Institution Streamlined 25,000+ Monthly Loan Applications',
    image: bankLoan,
    alt: 'Bank loan origination and processing',
    services: ['business-process-automation'],
    industries: ['banking-finance'],
  },
  {
    slug: 'banking-operations-management',
    to: '/case-studies/business-process-automation/banking-operations-management',
    title: 'A Multi-Entity Bank Streamlined 1M+ Monthly Transactions to Improve Processing Accuracy',
    image: bankingOps,
    alt: 'Banking operations management',
    services: ['business-process-automation'],
    industries: ['banking-finance'],
  },
  {
    slug: 'banking-payment-operations',
    to: '/case-studies/business-process-automation/banking-payment-operations',
    title: 'A Global Bank Streamlined 2M+ Monthly Payment Transactions',
    image: bankingPayments,
    alt: 'Banking payment operations',
    services: ['business-process-automation'],
    industries: ['banking-finance'],
  },
  {
    slug: 'utility-process-operations',
    to: '/case-studies/business-process-automation/utility-process-operations',
    title: 'A Multi-Region Utility Provider Streamlined 500,000+ Monthly Service Transactions',
    image: utilityProcess,
    alt: 'Utility service operations',
    services: ['business-process-automation'],
    industries: ['energy-utilities'],
  },
  {
    slug: 'etl-elt-development',
    to: '/case-studies/data-engineering/etl-elt-development',
    title: 'A Global Logistics Enterprise Built 60+ ETL and ELT Workflows to Process 25M+ Records Daily',
    image: etlElt,
    alt: 'Freight and logistics operations',
    services: ['data-engineering'],
    industries: ['logistics'],
  },
  {
    slug: 'grid-operations',
    to: '/case-studies/data-engineering/grid-operations',
    title: 'A Multi-Region Utility Provider Improved Visibility Across 100,000+ Grid Assets',
    image: gridOps,
    alt: 'Utility grid operations infrastructure',
    services: ['data-engineering'],
    industries: ['energy-utilities'],
  },
  {
    slug: 'banking-governance-risk-and-compliance',
    to: '/case-studies/data-management/banking-governance-risk-and-compliance',
    title: 'A Global Bank Standardised 150+ Risk & Compliance Controls',
    image: governanceRisk,
    alt: 'Banking governance, risk and compliance',
    services: ['data-management'],
    industries: ['banking-finance'],
  },
  {
    slug: 'energy-data-management',
    to: '/case-studies/data-management/energy-data-management',
    title: 'A Multi-Region Energy Provider Standardised 20M+ Energy Records',
    image: energyData,
    alt: 'Energy data management operations',
    services: ['data-management'],
    industries: ['energy-utilities'],
  },
  {
    slug: 'financial-data-management',
    to: '/case-studies/data-management/financial-data-management',
    title: 'A Global Financial Institution Standardised 10M+ Financial Records',
    image: financialData,
    alt: 'Financial data management operations',
    services: ['data-management'],
    industries: ['banking-finance'],
  },
  {
    slug: 'utility-asset-management',
    to: '/case-studies/data-management/utility-asset-management',
    title: 'A Utility Provider Centralised 250,000+ Asset Records',
    image: utilityAsset,
    alt: 'Utility asset management infrastructure',
    services: ['data-management'],
    industries: ['energy-utilities'],
  },
  {
    slug: 'utility-governance-compliance',
    to: '/case-studies/data-management/utility-governance-compliance',
    title: 'A Multi-Region Utility Provider Standardised 120+ Regulatory Controls',
    image: utilityGovernance,
    alt: 'Utility regulatory compliance oversight',
    services: ['data-management'],
    industries: ['energy-utilities'],
  },
  {
    slug: 'financial-performance-analytics',
    to: '/case-studies/data-science-business-intelligence/financial-performance-analytics',
    title: 'A Global Financial Institution Unified 75+ Financial KPIs Into a Connected Performance View',
    image: financialPerformance,
    alt: 'Financial performance analytics dashboards',
    services: ['data-science-business-intelligence'],
    industries: ['banking-finance'],
  },
  {
    slug: 'performance-analytics',
    to: '/case-studies/data-science-business-intelligence/performance-analytics',
    title: 'A Multi-Region Utility Provider Unified 80+ Performance KPIs',
    image: performanceAnalytics,
    alt: 'Utility performance analytics dashboards',
    services: ['data-science-business-intelligence'],
    industries: ['energy-utilities'],
  },
]

export default caseStudies
