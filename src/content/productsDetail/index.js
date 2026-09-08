import { maplibrarysuiteData } from './maplibrarysuite';
import { mapmyclassesData } from './mapmyclasses';

export const productsDetailData = {
  maplibrarysuite: maplibrarysuiteData,
  mapmyclasses: mapmyclassesData,
};

export function getProductBySlug(slug) {
  return productsDetailData[slug] || null;
}

export function getAllProductSlugs() {
  return Object.keys(productsDetailData);
}
