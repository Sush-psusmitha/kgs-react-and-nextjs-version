import dataManagementIcon from '../../assets/images/blog/icon/data-management.png';
import outsourcingIcon from '../../assets/images/blog/icon/outsoucring.png';
import softwareIcon from '../../assets/images/blog/icon/software.png';
import automationIcon from '../../assets/images/blog/icon/automation.png';
import cybersecurityIcon from '../../assets/images/blog/icon/cybersecurity.png';

export const INSIGHT_CATEGORIES = [
  {
    name: 'Healthcare BPO',
    slug: 'healthcare-bpo',
    count: 12,
    icon: outsourcingIcon,
  },
  {
    name: 'Logistics BPO',
    slug: 'logistics-bpo',
    count: 12,
    icon: outsourcingIcon,
  },
  {
    name: 'Data Management',
    slug: 'data-management',
    count: 10,
    icon: dataManagementIcon,
  },
  {
    name: 'Automation',
    slug: 'business-process-automation',
    count: 14,
    icon: automationIcon,
  },
  {
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    count: 8,
    icon: cybersecurityIcon,
  },
  {
    name: 'Software Development',
    slug: 'software-development',
    count: 9,
    icon: softwareIcon,
  },
  {
    name: 'Generative AI',
    slug: 'generative-ai',
    count: 12,
    icon: automationIcon,
  },
  {
    name: 'Finance & Accounting',
    slug: 'finance-accounting-outsourcing',
    count: 11,
    icon: outsourcingIcon,
  },
];

export function getCategoryBySlug(slug) {
  return INSIGHT_CATEGORIES.find((c) => c.slug === slug) || null;
}
