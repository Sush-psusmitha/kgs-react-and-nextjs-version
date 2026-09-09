import { notFound } from 'next/navigation';
import ArticleHero from '../../../../components/insights/ArticleHero';
import ArticleBody from '../../../../components/insights/ArticleBody';
import ArticleSidebar from '../../../../components/insights/ArticleSidebar';
import SimilarPosts from '../../../../components/insights/SimilarPosts';
import { getInsight, getAllInsightParams } from '../../../../content/insights';

/**
 * Static generation for all insight articles
 */
export async function generateStaticParams() {
  return getAllInsightParams();
}

/**
 * Dynamic metadata generation per insight article
 */
export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const cleanSlug = slug.replace(/\.html$/, '');
  const insight = getInsight(category, cleanSlug);

  if (!insight) {
    return {
      title: 'Insight Not Found',
    };
  }

  const title = insight.metaTitle || `${insight.title} | Kotnani Global Solutions`;
  const description = insight.metaDescription || 'Kotnani Global Solutions Insights & Articles';
  const canonicalUrl = `https://www.kotnaniglobal.com/insights/${category}/${cleanSlug}.html`;
  const rawBanner = insight.hero?.bannerImage || insight.featuredImage;
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
      publishedTime: insight.publishedDate,
      authors: [insight.author?.name || 'Kotnani Global Solutions'],
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
 * Dynamic Insight Detail Page Template
 */
export default async function InsightDetailPage({ params }) {
  const { category, slug } = await params;
  const cleanSlug = slug.replace(/\.html$/, '');
  const insight = getInsight(category, cleanSlug);

  if (!insight) {
    notFound();
  }

  return (
    <>
      {/* 1. Article Hero & Banner */}
      <ArticleHero
        categoryName={insight.categoryName}
        categorySlug={insight.categorySlug}
        title={insight.title}
        author={insight.author}
        publishedDate={insight.publishedDate}
        readTime={insight.readTime}
        heroImage={insight.heroImage}
        heroImageAlt={insight.heroImageAlt}
      />

      {/* 2. Article Body & Sticky Sidebar */}
      <section className="bg-white py-14 md:py-20" aria-label="Article content">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Main Content (Left, 8 Cols on LG / XL) */}
            <div className="lg:col-span-8 xl:col-span-8">
              <ArticleBody sections={insight.sections} />
            </div>

            {/* Sidebar (Right, 4 Cols on LG / XL) */}
            <div className="lg:col-span-4 xl:col-span-4">
              <ArticleSidebar
                tableOfContents={insight.tableOfContents}
                featuredPosts={insight.featuredPosts}
                currentCategorySlug={insight.categorySlug}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Similar / Related Posts */}
      {insight.similarPosts && insight.similarPosts.length > 0 && (
        <SimilarPosts posts={insight.similarPosts} />
      )}
    </>
  );
}
