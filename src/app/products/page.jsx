import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import TestimonialsMarquee from '../../components/sections/TestimonialsMarquee';
import Link from 'next/link';
import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6';
import heroImg from '../../assets/images/banner/automation.webp';
import mlSuiteImg from '../../assets/images/product/maplibrarysuite/maplibrarysuite-banner.webp';
import mmClassesImg from '../../assets/images/product/mapmyclasses/mapmyclasses-banner.png';

export const metadata = {
  title: "Products & Platforms | Kotnani Global Solutions",
  description: "Explore proprietary software and enterprise digital platforms developed by Kotnani Global Solutions including MapMyClasses and MapLibrarySuite.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/products.html",
  },
  openGraph: {
    title: "Products & Platforms | Kotnani Global Solutions",
    description: "Explore proprietary software and enterprise digital platforms developed by Kotnani Global Solutions including MapMyClasses and MapLibrarySuite.",
    url: "https://www.kotnaniglobal.com/products.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Products & Platforms | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Products & Platforms | Kotnani Global Solutions",
    description: "Explore proprietary software and enterprise digital platforms developed by Kotnani Global Solutions including MapMyClasses and MapLibrarySuite.",
    images: ["/images/banner/home-hero.webp"],
  },
};

const productsList = [
  {
    title: 'MapMyClasses',
    slug: 'mapmyclasses',
    tag: 'Education & Scheduling Platform',
    desc: 'Smart timetable scheduling, attendance tracking, faculty allocation, and institutional management built for modern educational environments.',
    image: mmClassesImg,
    features: [
      'Automated conflict-free class & room scheduling',
      'Real-time student & faculty attendance tracking',
      'Examination timetable orchestration',
      'Comprehensive institutional performance analytics',
    ],
  },
  {
    title: 'MapLibrarySuite',
    slug: 'maplibrarysuite',
    tag: 'Digital Library Management',
    desc: 'Complete digital library cataloging, RFID book circulation, member management, and resource indexing system for universities and public libraries.',
    image: mlSuiteImg,
    features: [
      'MARC-21 & Z39.50 compliant cataloging',
      'Automated issue, return & fine calculation',
      'Digital repository & e-book access portal',
      'Barcode & RFID gate hardware integration',
    ],
  },
  {
    title: 'PublishGridIQ',
    slug: 'maplibrarysuite',
    tag: 'Publishing & Workflow Engine',
    desc: 'End-to-end editorial workflow management, manuscript submission, peer review tracking, and digital content distribution platform.',
    image: mlSuiteImg,
    features: [
      'Automated author manuscript onboarding',
      'Reviewer assignment & blind peer-review cycles',
      'Multi-format digital publication export (EPUB, PDF, XML)',
      'Royalties & distribution tracking',
    ],
  },
  {
    title: 'ThePro3DStudio',
    slug: 'mapmyclasses',
    tag: '3D Visualisation & Rendering Platform',
    desc: 'Enterprise 3D modeling, AR/VR asset generation, product visualization, and interactive rendering platform for retail and manufacturing.',
    image: mmClassesImg,
    features: [
      'Photorealistic 3D product asset pipelines',
      'Web-based interactive 360° product viewers',
      'AR-ready GLTF/USDZ 3D models',
      'Cloud batch rendering & asset management',
    ],
  },
];

export default function ProductsPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Platforms & Products"
        title="Enterprise Platforms Built for Impact"
        desc="Proprietary software, automation engines, and intelligent platforms engineered by KGS to solve domain-specific operational challenges."
        bgImage={heroImg}
        bgImageAlt="KGS Enterprise Products"
        actions={[
          { label: 'Schedule a Demo', href: '#contact-form', variant: 'primary' },
          { label: 'View Case Studies', to: '/case-studies', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Products List */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="products-list-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Proprietary Technology
            </span>
            <h2 id="products-list-heading" className="mb-4 font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Software Solutions That Power Modern Operations
            </h2>
            <p className="font-body text-base font-medium leading-relaxed text-neutral-700 md:text-lg">
              Our software products combine domain-tested operational workflows with modern architecture to help institutions and businesses automate recurring activities and achieve measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {productsList.map((prod, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/50 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-kgs-primary/40 hover:bg-white hover:shadow-xl"
              >
                {/* Media */}
                <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100 border-b border-neutral-200/60">
                  <img
                    src={prod.image?.src || prod.image}
                    alt={prod.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <span className="mb-3 inline-block rounded-full bg-white px-3 py-1 font-heading text-xs font-semibold text-kgs-primary border border-kgs-primary/20">
                      {prod.tag}
                    </span>
                    <h3 className="mb-3 font-heading text-2xl font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors">
                      <Link href={`/products/${prod.slug}`}>{prod.title}</Link>
                    </h3>
                    <p className="mb-6 font-body text-sm font-medium leading-relaxed text-neutral-600">
                      {prod.desc}
                    </p>

                    <ul className="mb-8 space-y-2.5">
                      {prod.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 font-body text-xs font-medium text-neutral-700">
                          <FaCircleCheck className="mt-0.5 shrink-0 text-kgs-primary" size={13} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-neutral-200/70">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="inline-flex items-center gap-2 font-heading text-xs font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors"
                    >
                      <span>Explore {prod.title}</span>
                      <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <TestimonialsMarquee />

      {/* 5. Contact Form */}
      <ServiceContactForm
        title="Schedule a Platform Walkthrough or Demo"
        desc="Discover how KGS proprietary platforms can be integrated into your enterprise workflow."
      />
    </main>
  );
}
