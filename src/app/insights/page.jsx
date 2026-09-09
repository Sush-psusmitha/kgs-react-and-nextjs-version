import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import Link from 'next/link';
import { FaArrowRight, FaCalendarDays } from 'react-icons/fa6';
import { allInsights, INSIGHT_CATEGORIES } from '../../content/insights/index';
import heroImg from '../../assets/images/blog/blog-inner.png';

export const metadata = {
  title: "Insights & Articles | Kotnani Global Solutions",
  description: "Read the latest insights, articles, and thought leadership from Kotnani Global Solutions on BPO, AI, data, automation, and industry trends.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/insights.html",
  },
  openGraph: {
    title: "Insights & Articles | Kotnani Global Solutions",
    description: "Read the latest insights, articles, and thought leadership from Kotnani Global Solutions on BPO, AI, data, automation, and industry trends.",
    url: "https://www.kotnaniglobal.com/insights.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Insights & Articles | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Insights & Articles | Kotnani Global Solutions",
    description: "Read the latest insights, articles, and thought leadership from Kotnani Global Solutions on BPO, AI, data, automation, and industry trends.",
    images: ["/images/banner/home-hero.webp"],
  },
};

export default function InsightsRootPage() {
  const featuredArticle = allInsights[0];

  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Insights & Thought Leadership"
        title="Research, Stories, and Lessons"
        desc="Practical thinking for enterprise leaders deciding how to build, automate, and scale with intelligence."
        bgImage={heroImg}
        bgImageAlt="KGS Insights"
        actions={[
          { label: 'Read Featured', href: '#articles-grid', variant: 'primary' },
          { label: 'Explore Topics', href: '#topics-section', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Articles Grid */}
      <section id="articles-grid" className="py-16 md:py-24 bg-white" aria-labelledby="insights-root-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-12 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Latest Publications
            </span>
            <h2 id="insights-root-heading" className="mb-4 font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Featured Articles & Analysis
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allInsights.map((art, idx) => {
              const href = `/insights/${art.categorySlug}/${art.slug}`;
              const imageSrc = art.heroImage?.src || art.heroImage;

              return (
                <article
                  key={idx}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/50 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-kgs-primary/40 hover:bg-white hover:shadow-xl"
                >
                  <div>
                    {/* Media */}
                    <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100 border-b border-neutral-200/60">
                      {imageSrc && (
                        <img
                          src={imageSrc}
                          alt={art.heroImageAlt || art.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3 flex items-center justify-between text-xs font-medium text-neutral-500">
                        <span className="font-bold text-kgs-primary">
                          {art.categoryName}
                        </span>
                        {art.publishedDate && (
                          <div className="flex items-center gap-1.5">
                            <FaCalendarDays size={11} className="text-kgs-primary" />
                            <span>{art.publishedDate}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="mb-3 font-heading text-lg font-bold leading-snug text-neutral-900 group-hover:text-kgs-primary transition-colors line-clamp-2 md:text-xl">
                        <Link href={href}>{art.title}</Link>
                      </h3>

                      <p className="line-clamp-3 font-body text-sm font-medium leading-relaxed text-neutral-600">
                        {art.metaDescription}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-neutral-200/70">
                      <Link
                        href={href}
                        className="inline-flex items-center gap-2 font-heading text-xs font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors"
                      >
                        <span>Read article</span>
                        <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Topics / Categories Section */}
      <section id="topics-section" className="py-14 bg-neutral-50/70 border-t border-neutral-200/60">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-8">
            <h3 className="font-heading text-xl font-bold text-neutral-900">
              Browse Topics by Category
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {INSIGHT_CATEGORIES.map((cat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 font-heading text-xs font-semibold text-neutral-800 shadow-2xs hover:border-kgs-primary hover:text-kgs-primary transition-colors"
              >
                <span>{cat.name}</span>
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-500 font-bold">
                  {cat.count}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <ServiceContactForm
        title="Stay Connected with KGS Insights"
        desc="Connect with our practice leaders and industry analysts to explore how these trends apply to your enterprise."
      />
    </main>
  );
}
