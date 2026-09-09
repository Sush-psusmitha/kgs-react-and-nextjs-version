import { notFound } from 'next/navigation';
import CaseStudyHero from '../../../../components/caseStudies/CaseStudyHero';
import CaseStudyAbout from '../../../../components/caseStudies/CaseStudyAbout';
import CaseStudyStats from '../../../../components/caseStudies/CaseStudyStats';
import CaseStudyBody from '../../../../components/caseStudies/CaseStudyBody';
import CaseStudyTestimonial from '../../../../components/caseStudies/CaseStudyTestimonial';
import ExploreMoreCaseStudies from '../../../../components/caseStudies/ExploreMoreCaseStudies';
import { getCaseStudy, getAllCaseStudyParams, getRelatedCaseStudies } from '../../../../content/caseStudies/index';

/**
 * Static generation for all case study pages
 */
export async function generateStaticParams() {
  return getAllCaseStudyParams();
}

/**
 * Dynamic metadata generation per case study
 */
export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const cleanSlug = slug.replace(/\.html$/, '');
  const caseStudy = getCaseStudy(category, cleanSlug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  const title = caseStudy.metaTitle || `${caseStudy.title} | Kotnani Global Solutions`;
  const description = caseStudy.metaDescription || 'Kotnani Global Solutions Case Studies & Success Stories';
  const canonicalUrl = `https://www.kotnaniglobal.com/case-studies/${category}/${cleanSlug}.html`;
  const rawBanner = caseStudy.hero?.bannerImage;
  const ogImage = typeof rawBanner === 'string' ? rawBanner : (rawBanner?.src || '/images/banner/home-hero.webp');

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Dynamic Case Study Detail Page
 */
export default async function CaseStudyDetailPage({ params }) {
  const { category, slug } = await params;
  const cleanSlug = slug.replace(/\.html$/, '');
  const caseStudy = getCaseStudy(category, cleanSlug);

  if (!caseStudy) {
    notFound();
  }

  const relatedCaseStudies = getRelatedCaseStudies(category, cleanSlug);

  return (
    <>
      {/* 1. Hero Section */}
      <CaseStudyHero
        tag={caseStudy.tag}
        title={caseStudy.title}
        categoryName={caseStudy.categoryName}
        categorySlug={caseStudy.categorySlug}
        heroImage={caseStudy.heroImage}
        heroImageAlt={caseStudy.heroImageAlt}
      />

      {/* 2. About The Client */}
      <CaseStudyAbout aboutClient={caseStudy.aboutClient} />

      {/* 3. Key Stats */}
      <CaseStudyStats stats={caseStudy.stats} />

      {/* 4. Narrative (Challenge + Solution + Sticky Media) & The Results */}
      <CaseStudyBody
        challenge={caseStudy.challenge}
        solution={caseStudy.solution}
        results={caseStudy.results}
        sidebarImage={caseStudy.sidebarImage}
        sidebarImageAlt={caseStudy.heroImageAlt}
        relatedCaseStudies={relatedCaseStudies}
        currentCategorySlug={caseStudy.categorySlug}
      />

      {/* 5. Client Testimonial */}
      <CaseStudyTestimonial testimonial={caseStudy.testimonial} />

      {/* 6. Explore More Case Studies */}
      <ExploreMoreCaseStudies
        caseStudies={relatedCaseStudies}
        currentCategorySlug={caseStudy.categorySlug}
      />
    </>
  );
}
