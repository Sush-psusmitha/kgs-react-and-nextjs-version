import { notFound } from 'next/navigation';
import Hero from '../../../components/sections/Hero';
import ClientLogosMarquee from '../../../components/sections/ClientLogosMarquee';
import Breadcrumb from '../../../components/ui/Breadcrumb';
import ProductIntro from '../../../components/sections/ProductIntro';
import TechGrid from '../../../components/sections/TechGrid';
import ProductRoleAgents from '../../../components/sections/ProductRoleAgents';
import ProductEngines from '../../../components/sections/ProductEngines';
import ProductTransformations from '../../../components/sections/ProductTransformations';
import ProductTrustStats from '../../../components/sections/ProductTrustStats';
import TestimonialsMarquee from '../../../components/sections/TestimonialsMarquee';
import FaqSection from '../../../components/sections/FaqSection';
import ServiceContactForm from '../../../components/sections/ServiceContactForm';
import { productsDetailData, getProductBySlug, getAllProductSlugs } from '../../../content/productsDetail';

/**
 * Static generation for all product slugs
 */
export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({
    slug,
  }));
}

/**
 * Dynamic metadata generation per product
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const title = `${product.name || product.hero?.title} | Kotnani Global Solutions`;
  const description = product.hero?.description || product.intro?.description?.[0] || 'Kotnani Global Solutions Products';
  const canonicalUrl = `https://www.kotnaniglobal.com/products/${slug}.html`;
  const rawBanner = product.hero?.bannerImage;
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
 * Product Detail Page Template (/products/[slug])
 */
export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* 1. Hero Section */}
      <Hero
        tag={product.hero?.badge || 'PRODUCT'}
        title={product.hero?.title}
        desc={product.hero?.description}
        bgImage={product.hero?.bannerImage}
        actions={[
          {
            label: product.hero?.primaryCta?.text || 'Join Bootcamp',
            href: product.hero?.primaryCta?.link || '#contact',
            variant: 'primary',
          },
          {
            label: product.hero?.secondaryCta?.text || 'Explore Features',
            href: product.hero?.secondaryCta?.link || '#features',
            variant: 'outline',
          },
        ]}
      />

      {/* 2. Client Logos Marquee (right after Hero) */}
      <ClientLogosMarquee />

      {/* 3. Breadcrumb Navigation (#FFF5F6 Background Color) */}
      <Breadcrumb
        bg="#FFEDEF"
        items={
          product.hero?.breadcrumb
            ? product.hero.breadcrumb.map((b) => ({ label: b.label, to: b.href }))
            : [
                { label: 'Home', to: '/' },
                { label: 'Products', to: '/#products' },
                { label: product.name },
              ]
        }
      />

      {/* 4. Product Intro & Stats */}
      {product.intro && (
        <ProductIntro
          badge={product.intro.badge}
          title={product.intro.title}
          paragraphs={product.intro.description}
          image={product.intro.image}
          stats={product.intro.stats}
          compliance={product.intro.compliance}
          primaryCta={{ text: 'Learn More', link: '#faq' }}
          secondaryCta={{ text: 'Get Started', link: '#contact' }}
        />
      )}

      {/* 5. Capabilities / The Problem We Solve */}
      {product.capabilities && (
        <div id="features">
          <TechGrid
            tag={product.capabilities.badge}
            heading={product.capabilities.title}
            desc={product.capabilities.description}
            cards={product.capabilities.items.map((item) => ({
              icon: item.icon,
              title: item.title,
              desc: item.description,
            }))}
          />
        </div>
      )}

      {/* 6. Role-Based AI Agents */}
      {product.roleAgents && (
        <ProductRoleAgents
          badge={product.roleAgents.badge}
          title={product.roleAgents.title}
          description={product.roleAgents.description}
          tabs={product.roleAgents.tabs}
          mockupImage={product.roleAgents.mockupImage}
          accreditations={product.roleAgents.accreditations}
        />
      )}

      {/* 7. One Platform. Two Powerful Engines. */}
      {product.engines && (
        <ProductEngines
          badge={product.engines.badge}
          title={product.engines.title}
          description={product.engines.description}
          tabs={product.engines.tabs}
        />
      )}

      {/* 8. Four Transformations */}
      {product.transformations && (
        <ProductTransformations
          badge={product.transformations.badge}
          title={product.transformations.title}
          description={product.transformations.description}
          tabs={product.transformations.tabs}
          platformImage={product.transformations.platformImage}
        />
      )}

      {/* 9. Trust & Why Choose Us */}
      {product.trustStats && (
        <ProductTrustStats
          badge={product.trustStats.badge}
          title={product.trustStats.title}
          description={product.trustStats.description}
          bgImage={product.trustStats.bgImage}
          items={product.trustStats.items}
        />
      )}

      {/* 10. Testimonials (Client logos omitted here as they are displayed under Hero) */}
      {product.testimonials && (
        <TestimonialsMarquee
          title={product.testimonials.title}
          items={product.testimonials.items}
          showLogos={false}
        />
      )}

      {/* 11. FAQ Section (after Testimonials) */}
      {product.faq && (
        <div id="faq">
          <FaqSection
            faq={{
              tag: product.faq.badge,
              title: product.faq.title,
              desc: product.faq.subtitle,
              cards: product.faq.items,
            }}
          />
        </div>
      )}

      {/* 12. Contact Form */}
      <div id="contact">
        <ServiceContactForm
          title={product.contact?.title || 'The Right Time To Rethink Your Library Management System Is Now.'}
          desc={
            product.contact?.description ||
            'Connect with our solution experts to see how MapLibrarySuite can help your institution build a more organized, efficient, and accessible library.'
          }
          defaultService={product.contact?.defaultService || product.name}
        />
      </div>
    </>
  );
}
