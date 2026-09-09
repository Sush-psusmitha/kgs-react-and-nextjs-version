import {
  bankLoanProcessingData,
  bankingOperationsManagementData,
} from './business-process-automation';
import {
  etlEltDevelopmentData,
  gridOperationsData,
} from './data-engineering';
import {
  bankingGovernanceRiskAndComplianceData,
  energyDataManagementData,
} from './data-management';
import { CASE_STUDY_CATEGORIES, getCaseStudyCategoryBySlug } from './categories';

export const allCaseStudies = [
  bankLoanProcessingData,
  bankingOperationsManagementData,
  etlEltDevelopmentData,
  gridOperationsData,
  bankingGovernanceRiskAndComplianceData,
  energyDataManagementData,
];

export function getCaseStudy(categorySlug, slug) {
  return (
    allCaseStudies.find(
      (item) => item.categorySlug === categorySlug && item.slug === slug
    ) || null
  );
}

export function getAllCaseStudyParams() {
  return allCaseStudies.map((item) => ({
    category: item.categorySlug,
    slug: item.slug,
  }));
}

export function getFeaturedCaseStudies() {
  return allCaseStudies.slice(0, 3);
}

export function getRelatedCaseStudies(categorySlug, currentSlug) {
  // Priority 1: Same category
  const sameCategory = allCaseStudies.filter(
    (item) => item.categorySlug === categorySlug && item.slug !== currentSlug
  );
  // Priority 2: Other active categories
  const otherCategory = allCaseStudies.filter(
    (item) => item.categorySlug !== categorySlug && item.slug !== currentSlug
  );
  return [...sameCategory, ...otherCategory].slice(0, 3);
}

export { CASE_STUDY_CATEGORIES, getCaseStudyCategoryBySlug };
