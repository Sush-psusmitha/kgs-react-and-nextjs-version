import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import TestimonialsMarquee from '../../components/sections/TestimonialsMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import { FaBullseye, FaEye, FaHandshake, FaShieldHalved, FaLightbulb, FaAward } from 'react-icons/fa6';
import heroImg from '../../assets/images/banner/qualified-to-excel.webp';

export const metadata = {
  title: "About Us | Kotnani Global Solutions",
  description: "The people, purpose, and principles behind KGS — building smarter, safer, scalable business solutions across global enterprise markets.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/about.html",
  },
  openGraph: {
    title: "About Us | Kotnani Global Solutions",
    description: "The people, purpose, and principles behind KGS — building smarter, safer, scalable business solutions across global enterprise markets.",
    url: "https://www.kotnaniglobal.com/about.html",
    images: [
      {
        url: "/images/banner/about.webp",
        width: 1200,
        height: 630,
        alt: "About Us | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us | Kotnani Global Solutions",
    description: "The people, purpose, and principles behind KGS — building smarter, safer, scalable business solutions across global enterprise markets.",
    images: ["/images/banner/about.webp"],
  },
};

const timeline = [
  { year: '2014', title: 'From One Client to a Growing Vision', desc: 'Started with specialized healthcare BPO services, laying the foundation for operational precision.' },
  { year: '2016', title: 'Building a Global Delivery Presence', desc: 'Expanded delivery centers across India and client partnership nodes in the United States.' },
  { year: '2019', title: 'Taking on Challenges Others Avoided', desc: 'Launched enterprise data management, freight logistics audit, and mortgage support practices.' },
  { year: '2021', title: 'AI and Automation Enter the Picture', desc: 'Integrated Intelligent Automation (RPA) and machine learning into daily document workflows.' },
  { year: '2023', title: 'Proprietary Platforms Launched', desc: 'Released enterprise SaaS products including MapMyClasses and MapLibrarySuite.' },
  { year: '2026', title: 'Agentic AI & GCC Delivery Model', desc: 'Pioneered Autonomous AI workflows, enterprise GCC incubation, and global digital transformation.' },
];

const values = [
  { icon: FaBullseye, title: 'Operational Discipline', desc: 'We deliver measurable accuracy, rigorous SLAs, and consistent excellence in every process.' },
  { icon: FaHandshake, title: 'Client Partnership', desc: 'We act as an extension of your leadership team, aligning directly with your strategic goals.' },
  { icon: FaShieldHalved, title: 'Integrity & Security', desc: 'Zero-compromise data governance certified under ISO 27001, GDPR, and HIPAA compliance.' },
  { icon: FaLightbulb, title: 'Continuous Innovation', desc: 'Harnessing generative AI, intelligent automation, and modern data platforms to solve complex challenges.' },
];

export default function AboutPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="About KGS"
        title="Engineering the Future of Intelligent Business"
        desc="KGS is a global business transformation partner combining specialized domain expertise, intelligent automation, and disciplined delivery to power enterprise growth."
        bgImage={heroImg}
        bgImageAlt="About Kotnani Global Solutions"
        actions={[
          { label: 'Explore Leadership', to: '/management-team', variant: 'primary' },
          { label: 'View Case Studies', to: '/case-studies', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Who We Are */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="about-who-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
                Who We Are
              </span>
              <h2 id="about-who-heading" className="mb-6 font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
                Building Smarter, Safer, Scalable Business Solutions
              </h2>
              <p className="mb-4 font-body text-base font-medium leading-relaxed text-neutral-700 md:text-lg">
                Kotnani Global Solutions (KGS) was founded on a straightforward principle: high-stakes business operations deserve exceptional execution, deep domain knowledge, and transparent accountability.
              </p>
              <p className="font-body text-base font-medium leading-relaxed text-neutral-600">
                From our origins in specialized process outsourcing to our position today as a technology-enabled business transformation company, we help global enterprises navigate changing market demands through intelligent automation, resilient data engineering, and dedicated operational teams.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-6 text-center">
                <p className="font-heading text-4xl font-bold text-neutral-900 mb-2">
                  <span>600</span><span className="text-kgs-primary">+</span>
                </p>
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  Global Clients Served
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-6 text-center">
                <p className="font-heading text-4xl font-bold text-neutral-900 mb-2">
                  <span>550</span><span className="text-kgs-primary">+</span>
                </p>
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  Domain Specialists
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-6 text-center">
                <p className="font-heading text-4xl font-bold text-neutral-900 mb-2">
                  <span>99.4</span><span className="text-kgs-primary">%</span>
                </p>
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  SLA Accuracy Rate
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-6 text-center">
                <p className="font-heading text-4xl font-bold text-neutral-900 mb-2">
                  <span>4</span><span className="text-kgs-primary">+</span>
                </p>
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  Global Delivery Hubs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="py-16 bg-neutral-50/70 border-y border-neutral-200/60" aria-labelledby="mission-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 md:p-10 border border-neutral-200/80 shadow-xs">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-kgs-primary/10 text-kgs-primary">
                <FaBullseye size={22} />
              </div>
              <h3 className="mb-3 font-heading text-2xl font-bold text-neutral-900">Our Mission</h3>
              <p className="font-body text-base font-medium leading-relaxed text-neutral-700">
                To empower global enterprises by delivering high-precision business process operations, intelligent automation, and transformative technology solutions that accelerate growth and eliminate friction.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 md:p-10 border border-neutral-200/80 shadow-xs">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-kgs-primary/10 text-kgs-primary">
                <FaEye size={22} />
              </div>
              <h3 className="mb-3 font-heading text-2xl font-bold text-neutral-900">Our Vision</h3>
              <p className="font-body text-base font-medium leading-relaxed text-neutral-700">
                To be the most trusted global enterprise partner for intelligent operations, renowned for domain depth, technological innovation, and measurable client impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="values-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              What Drives Us
            </span>
            <h2 id="values-heading" className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Principles Behind Our Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-6 transition duration-300 hover:bg-white hover:shadow-md">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-kgs-primary/10 text-kgs-primary">
                  <v.icon size={18} />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900">{v.title}</h3>
                <p className="font-body text-sm font-medium leading-relaxed text-neutral-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Timeline */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white" aria-labelledby="journey-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Our Journey
            </span>
            <h2 id="journey-heading" className="font-heading text-3xl font-bold text-white md:text-4xl">
              Everyone Has a Story. Here Is Ours.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-800 bg-neutral-800/60 p-6 backdrop-blur-xs">
                <span className="mb-3 inline-block font-heading text-2xl font-bold text-kgs-primary">
                  {item.year}
                </span>
                <h3 className="mb-2 font-heading text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="font-body text-sm font-normal leading-relaxed text-neutral-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <TestimonialsMarquee />

      {/* 8. Contact Form */}
      <ServiceContactForm
        title="Ready to Scale With KGS?"
        desc="Connect with our solutions team to explore how our specialized operations model can support your organization."
      />
    </main>
  );
}
