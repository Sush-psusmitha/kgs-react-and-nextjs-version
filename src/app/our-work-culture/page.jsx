import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import { FaUsers, FaGraduationCap, FaTrophy, FaHeart, FaCircleCheck } from 'react-icons/fa6';
import heroImg from '../../assets/images/banner/work-culture-bg.webp';

export const metadata = {
  title: "Our Work Culture | Kotnani Global Solutions",
  description: "Discover the work culture at KGS — a people-first environment built on integrity, collaboration, continuous learning, and delivering measurable impact.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/our-work-culture.html",
  },
  openGraph: {
    title: "Our Work Culture | Kotnani Global Solutions",
    description: "Discover the work culture at KGS — a people-first environment built on integrity, collaboration, continuous learning, and delivering measurable impact.",
    url: "https://www.kotnaniglobal.com/our-work-culture.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Our Work Culture | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Work Culture | Kotnani Global Solutions",
    description: "Discover the work culture at KGS — a people-first environment built on integrity, collaboration, continuous learning, and delivering measurable impact.",
    images: ["/images/banner/home-hero.webp"],
  },
};

const pillars = [
  { icon: FaUsers, title: 'Hire Sharp People. Then Trust Them.', desc: 'We give talented individuals the autonomy, resources, and psychological safety to make bold decisions and lead client success.' },
  { icon: FaGraduationCap, title: 'Continuous Upskilling & Growth', desc: 'From certified AI training to leadership incubators, continuous learning is part of our weekly routine.' },
  { icon: FaTrophy, title: 'Nobody Wins Alone Here', desc: 'Collaboration is our superpower. Cross-functional teams work together seamlessly across time zones.' },
  { icon: FaHeart, title: 'People-First Well-being', desc: 'Comprehensive healthcare coverage, flexible work-life support, and community engagement initiatives.' },
];

export default function WorkCulturePage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Life at KGS"
        title="A Better Way to Work and Grow"
        desc="A people-first environment built on trust, continuous learning, and delivering measurable impact for global clients."
        bgImage={heroImg}
        bgImageAlt="KGS Work Culture"
        actions={[
          { label: 'Explore Careers', to: '/careers', variant: 'primary' },
          { label: 'Meet the Team', to: '/management-team', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Culture Pillars */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="culture-pillars-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Our Ethos
            </span>
            <h2 id="culture-pillars-heading" className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Built on Respect, Performance, and Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-6 transition duration-300 hover:bg-white hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-kgs-primary/10 text-kgs-primary">
                  <item.icon size={22} />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900">{item.title}</h3>
                <p className="font-body text-sm font-medium leading-relaxed text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Career Progression */}
      <section className="py-16 bg-neutral-900 text-white" aria-labelledby="progression-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-12 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Career Trajectory
            </span>
            <h2 id="progression-heading" className="font-heading text-3xl font-bold text-white md:text-4xl">
              Your Career Is the Real Project
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-800/70 p-6">
              <span className="font-heading text-2xl font-bold text-kgs-primary">01</span>
              <h3 className="mt-3 mb-2 font-heading text-lg font-bold text-white">Join the Team</h3>
              <p className="font-body text-sm font-normal text-neutral-300">Intensive onboarding, culture immersion, and tooling mastery.</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-800/70 p-6">
              <span className="font-heading text-2xl font-bold text-kgs-primary">02</span>
              <h3 className="mt-3 mb-2 font-heading text-lg font-bold text-white">Master the Process</h3>
              <p className="font-body text-sm font-normal text-neutral-300">Hands-on delivery under senior guidance and mentorship.</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-800/70 p-6">
              <span className="font-heading text-2xl font-bold text-kgs-primary">03</span>
              <h3 className="mt-3 mb-2 font-heading text-lg font-bold text-white">Lead the Practice</h3>
              <p className="font-body text-sm font-normal text-neutral-300">Lead teams, optimize workflows, and interface with clients.</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-800/70 p-6">
              <span className="font-heading text-2xl font-bold text-kgs-primary">04</span>
              <h3 className="mt-3 mb-2 font-heading text-lg font-bold text-white">Grow Together</h3>
              <p className="font-body text-sm font-normal text-neutral-300">Shape company strategy, innovate products, and mentor the next cohort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Form */}
      <ServiceContactForm
        title="Want to Be Part of Our Team?"
        desc="Explore career opportunities at KGS across technology, operations, engineering, and data science."
      />
    </main>
  );
}
