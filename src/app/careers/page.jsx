import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import { FaBriefcase, FaGlobe, FaGraduationCap, FaScaleBalanced, FaArrowRight, FaLocationDot, FaClock } from 'react-icons/fa6';
import heroImg from '../../assets/images/banner/automation.webp';

export const metadata = {
  title: "Careers | Kotnani Global Solutions",
  description: "Explore career opportunities at Kotnani Global Solutions — join a team of 550+ global experts in AI, engineering, BPO, data, and operations.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/careers.html",
  },
  openGraph: {
    title: "Careers | Kotnani Global Solutions",
    description: "Explore career opportunities at Kotnani Global Solutions — join a team of 550+ global experts in AI, engineering, BPO, data, and operations.",
    url: "https://www.kotnaniglobal.com/careers.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Careers | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Careers | Kotnani Global Solutions",
    description: "Explore career opportunities at Kotnani Global Solutions — join a team of 550+ global experts in AI, engineering, BPO, data, and operations.",
    images: ["/images/banner/home-hero.webp"],
  },
};

const jobs = [
  {
    title: 'AI Solutions Engineer',
    dept: 'Technology & AI',
    location: 'Bengaluru / Hybrid',
    type: 'Full-time',
    desc: 'Design and deploy production-grade LLM applications, retrieval-augmented generation (RAG) pipelines, and autonomous workflow agents.',
  },
  {
    title: 'Senior Data Engineer (ETL / ELT)',
    dept: 'Data Engineering',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    desc: 'Build scalable real-time and batch data pipelines integrating 30+ enterprise data sources into modern cloud warehouses.',
  },
  {
    title: 'Healthcare Revenue Cycle Specialist',
    dept: 'Healthcare BPO',
    location: 'Visakhapatnam / On-site',
    type: 'Full-time',
    desc: 'Manage medical coding, prior authorizations, claim submissions, and denial management workflows with high accuracy.',
  },
  {
    title: 'Freight Operations Coordinator',
    dept: 'Logistics',
    location: 'Bengaluru / Shift',
    type: 'Full-time',
    desc: 'Coordinate track-and-trace monitoring, freight bill audits, exception handling, and carrier performance reporting.',
  },
  {
    title: 'Cybersecurity Analyst (SOC / SIEM)',
    dept: 'Information Security',
    location: 'Bengaluru / On-site',
    type: 'Full-time',
    desc: 'Monitor SIEM alerts, perform vulnerability assessments, and safeguard enterprise infrastructure and client data.',
  },
];

const perks = [
  { icon: FaGlobe, title: 'Global Client Exposure', desc: 'Work directly on enterprise-scale projects for Fortune 500 and global market leaders.' },
  { icon: FaGraduationCap, title: 'Certified Upskilling', desc: 'Sponsored certifications, AI hackathons, and continuous technical training.' },
  { icon: FaBriefcase, title: 'High Ownership & Growth', desc: 'Merit-based promotions, fast-track leadership tracks, and autonomy in execution.' },
  { icon: FaScaleBalanced, title: 'Balanced Well-being', desc: 'Comprehensive medical insurance, mental health support, and hybrid flexibility.' },
];

export default function CareersPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Join Our Team"
        title="Build Your Future at Kotnani Global Solutions"
        desc="Be part of a high-energy, people-first team delivering mission-critical AI, engineering, and operations solutions to global enterprises."
        bgImage={heroImg}
        bgImageAlt="Careers at KGS"
        actions={[
          { label: 'View Openings', href: '#openings', variant: 'primary' },
          { label: 'Our Work Culture', to: '/our-work-culture', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Open Positions */}
      <section id="openings" className="py-16 md:py-24 bg-white" aria-labelledby="jobs-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Opportunities
            </span>
            <h2 id="jobs-heading" className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Open Positions Across Global Teams
            </h2>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between gap-6 rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-6 md:p-8 transition duration-300 hover:border-kgs-primary/40 hover:bg-white hover:shadow-lg lg:flex-row lg:items-center"
              >
                <div className="max-w-3xl">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-kgs-primary/10 px-3 py-1 font-heading text-xs font-semibold text-kgs-primary">
                      {job.dept}
                    </span>
                    <span className="flex items-center gap-1 font-body text-xs font-medium text-neutral-500">
                      <FaLocationDot size={12} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 font-body text-xs font-medium text-neutral-500">
                      <FaClock size={12} />
                      {job.type}
                    </span>
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="font-body text-sm font-medium leading-relaxed text-neutral-600">
                    {job.desc}
                  </p>
                </div>

                <a
                  href="#contact-form"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-heading text-xs font-bold text-white transition hover:bg-kgs-primary"
                >
                  <span>Apply Now</span>
                  <FaArrowRight size={11} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Join Us */}
      <section className="py-16 md:py-24 bg-neutral-50/70 border-t border-neutral-200/60" aria-labelledby="perks-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Benefits & Culture
            </span>
            <h2 id="perks-heading" className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Why Join Kotnani Global Solutions?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-kgs-primary/10 text-kgs-primary">
                  <p.icon size={22} />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900">{p.title}</h3>
                <p className="font-body text-sm font-medium leading-relaxed text-neutral-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Application Form */}
      <ServiceContactForm
        title="Submit Your Resume / Profile"
        desc="Don't see a specific opening matching your profile? Send us your resume and we will reach out when relevant opportunities open."
      />
    </main>
  );
}
