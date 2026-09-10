import services from '../content/services'
import industries from '../content/industries'
import { getAllProductSlugs } from '../content/productsDetail/index'
import { allCaseStudies } from '../content/caseStudies/index'
import { allInsights } from '../content/insights/index'

export const dynamic = 'force-static'

const BASE_URL = 'https://www.kotnaniglobal.com'

export default async function sitemap() {
  const currentDate = new Date().toISOString()

  // 1. Static Pages (21 URLs)
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/products',
    '/case-studies',
    '/insights',
    '/careers',
    '/contact',
    '/locations',
    '/certifications',
    '/customers',
    '/corporate-social-responsibility',
    '/management-team',
    '/news-and-events',
    '/our-work-culture',
    '/privacy-policy',
    '/sitemap',
    '/terms-and-conditions',
    '/testimonials',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Services Dynamic Pages
  const serviceRoutes = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // 3. Industries Dynamic Pages
  const industryRoutes = industries.map((ind) => ({
    url: `${BASE_URL}/industries/${ind.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // 4. Products Dynamic Pages
  const productRoutes = getAllProductSlugs().map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // 5. Case Studies Dynamic Pages
  const caseStudyRoutes = allCaseStudies.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.categorySlug}/${cs.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // 6. Insights Dynamic Pages
  const insightRoutes = allInsights.map((art) => ({
    url: `${BASE_URL}/insights/${art.categorySlug}/${art.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...productRoutes,
    ...caseStudyRoutes,
    ...insightRoutes,
  ]
}
