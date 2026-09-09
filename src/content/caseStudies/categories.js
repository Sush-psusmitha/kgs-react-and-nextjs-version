export const CASE_STUDY_CATEGORIES = [
  {
    name: 'Business Process Automation',
    slug: 'business-process-automation',
    count: 4,
  },
  {
    name: 'Data Engineering',
    slug: 'data-engineering',
    count: 2,
  },
  {
    name: 'Data Management',
    slug: 'data-management',
    count: 5,
  },
  {
    name: 'Data Science & BI',
    slug: 'data-science-business-intelligence',
    count: 2,
  },
  {
    name: 'Generative AI',
    slug: 'generative-ai',
    count: 0,
  },
  {
    name: 'Software Development',
    slug: 'software-development',
    count: 0,
  },
  {
    name: 'Healthcare BPO',
    slug: 'healthcare-bpo',
    count: 0,
  },
  {
    name: 'Logistics BPO',
    slug: 'logistics-bpo',
    count: 0,
  },
  {
    name: 'Insurance BPO',
    slug: 'insurance-bpo',
    count: 0,
  },
  {
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    count: 0,
  },
  {
    name: 'Customs Brokerage',
    slug: 'customs-brokerage',
    count: 0,
  },
  {
    name: 'ESG Consulting',
    slug: 'esg-consulting',
    count: 0,
  },
];

export function getCaseStudyCategoryBySlug(slug) {
  return CASE_STUDY_CATEGORIES.find((c) => c.slug === slug) || null;
}
