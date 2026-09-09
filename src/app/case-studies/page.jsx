import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { allCaseStudies, CASE_STUDY_CATEGORIES } from '../../content/caseStudies/index';
import heroImg from '../../assets/images/banner/case-studies-bg.png';

export const metadata = {
  title: "Case Studies | Kotnani Global Solutions",
  description: "Explore real-world case studies and success stories where KGS delivered measurable improvements in efficiency, accuracy, and performance across global enterprises.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/case-studies.html",
  },
  openGraph: {
    title: "Case Studies | Kotnani Global Solutions",
    description: "Explore real-world case studies and success stories where KGS delivered measurable improvements in efficiency, accuracy, and performance across global enterprises.",
    url: "https://www.kotnaniglobal.com/case-studies.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Case Studies | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Case Studies | Kotnani Global Solutions",
    description: "Explore real-world case studies and success stories where KGS delivered measurable improvements in efficiency, accuracy, and performance across global enterprises.",
    images: ["/images/banner/home-hero.webp"],
  },
};

export default function CaseStudiesRootPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Success Stories"
        title="Real Problems, Real Outcomes"
        desc="Explore the engagements where KGS turned operational strain into measurable advantage. Each story is told plainly, with the results first."
        bgImage={heroImg}
        bgImageAlt="KGS Case Studies"
        actions={[
          { label: 'Explore Our Work', href: '#projects-grid', variant: 'primary' },
          { label: 'Discuss Your Requirement', href: '#contact-form', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Logos Marquee */}
      <ClientLogosMarquee />

      {/* 3. Case Studies Grid */}
      <section id="projects-grid" className="py-16 md:py-24 bg-white" aria-labelledby="cs-root-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-12 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Portfolio
            </span>
            <h2 id="cs-root-heading" className="mb-4 font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Projects We Excelled
            </h2>
            <p className="font-body text-base font-medium leading-relaxed text-neutral-700 md:text-lg">
              Explore how our specialised teams delivered high-impact business process automation, data engineering, and data governance solutions for market leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allCaseStudies.map((cs, idx) => {
              const href = `/case-studies/${cs.categorySlug}/${cs.slug}`;
              const imageSrc = cs.heroImage?.src || cs.heroImage;

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
                          alt={cs.heroImageAlt || cs.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="mb-3 inline-block rounded-full bg-kgs-primary/10 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wider text-kgs-primary">
                        {cs.tag || cs.categoryName}
                      </span>

                      <h3 className="mb-4 font-heading text-lg font-bold leading-snug text-neutral-900 group-hover:text-kgs-primary transition-colors line-clamp-2 md:text-xl">
                        <Link href={href}>{cs.title}</Link>
                      </h3>

                      {/* Primary Stat Badge */}
                      {cs.stats && cs.stats[0] && (
                        <div className="mb-4 rounded-xl bg-white border border-neutral-200/60 p-3.5 flex items-center gap-3">
                          <p className="font-heading text-xl font-bold text-neutral-900">
                            <span>{cs.stats[0].count}</span>
                            <span className="text-kgs-primary">{cs.stats[0].symbol}</span>
                          </p>
                          <p className="font-body text-xs font-semibold text-neutral-600 leading-tight">
                            {cs.stats[0].label}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-neutral-200/70">
                      <Link
                        href={href}
                        className="inline-flex items-center gap-2 font-heading text-xs font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors"
                      >
                        <span>Read full case study</span>
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

      {/* 4. Consultation CTA */}
      <ServiceContactForm
        title="Ready to Achieve Similar Results?"
        desc="Let's discuss how KGS can support your operations with tailored workflows, technology, and dedicated execution teams."
      />
    </main>
  );
}
