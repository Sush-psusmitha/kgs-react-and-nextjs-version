import { enhanceRevenueCycleManagementData } from './healthcare-bpo';
import { globalFreightOperationsData } from './logistics-bpo';
import { INSIGHT_CATEGORIES } from './categories';

export const allInsights = [
  enhanceRevenueCycleManagementData,
  globalFreightOperationsData,
];

export function getInsight(categorySlug, slug) {
  return (
    allInsights.find(
      (item) => item.categorySlug === categorySlug && item.slug === slug
    ) || null
  );
}

export function getAllInsightParams() {
  return allInsights.map((item) => ({
    category: item.categorySlug,
    slug: item.slug,
  }));
}

export function getFeaturedInsights() {
  return allInsights.slice(0, 3);
}

export function getRelatedInsights(categorySlug, currentSlug) {
  const current = getInsight(categorySlug, currentSlug);
  if (current?.similarPosts && current.similarPosts.length > 0) {
    return current.similarPosts;
  }
  return allInsights
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 3);
}

export { INSIGHT_CATEGORIES };
