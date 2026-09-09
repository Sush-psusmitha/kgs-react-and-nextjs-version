import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import heroImg from '../../assets/images/banner/qualified-to-excel.webp';
import ceoImg from '../../assets/images/ceo.png';

export const metadata = {
  title: "Management Team | Kotnani Global Solutions",
  description: "Meet the leadership team at Kotnani Global Solutions — experienced professionals guiding strategy, innovation, and client success across global markets.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/management-team.html",
  },
  openGraph: {
    title: "Management Team | Kotnani Global Solutions",
    description: "Meet the leadership team at Kotnani Global Solutions — experienced professionals guiding strategy, innovation, and client success across global markets.",
    url: "https://www.kotnaniglobal.com/management-team.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Management Team | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Management Team | Kotnani Global Solutions",
    description: "Meet the leadership team at Kotnani Global Solutions — experienced professionals guiding strategy, innovation, and client success across global markets.",
    images: ["/images/banner/home-hero.webp"],
  },
};

const leaders = [
  {
    name: 'Mr. Prasad Rao Kotnani',
    role: 'Founder & Chief Executive Officer',
    image: ceoImg,
    bio: 'Guiding KGS strategic vision and global expansion with over 20 years of experience across enterprise BPO, global delivery centers, and digital transformation.',
    focus: 'Strategic Growth, Global Operations & Client Value',
  },
  {
    name: 'Executive Leadership',
    role: 'Managing Director - Technology & AI',
    image: ceoImg,
    bio: 'Spearheading AI adoption, intelligent document processing, and cloud engineering across enterprise engagements.',
    focus: 'AI Innovation, Cloud Architecture & Tech Strategy',
  },
  {
    name: 'Operations Leadership',
    role: 'Head of Global Delivery & Quality',
    image: ceoImg,
    bio: 'Overseeing multi-location delivery centers, ISO compliance, workforce readiness, and SLA governance.',
    focus: 'Operational Excellence, Quality Assurance & Security',
  },
];

export default function ManagementTeamPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Leadership Team"
        title="Meet the Minds Behind Kotnani Global"
        desc="Experienced leaders guiding strategy, innovation, and client success across global markets."
        bgImage={heroImg}
        bgImageAlt="KGS Leadership Team"
        actions={[
          { label: 'Work With Us', href: '#contact-form', variant: 'primary' },
          { label: 'Explore Careers', to: '/careers', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Leadership Profiles */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="team-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Executive Guidance
            </span>
            <h2 id="team-heading" className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              The Leadership in Charge
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/50 shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={leader.image?.src || leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 font-heading text-xl font-bold text-neutral-900">
                    {leader.name}
                  </h3>
                  <p className="mb-4 font-body text-xs font-bold text-kgs-primary uppercase tracking-wide">
                    {leader.role}
                  </p>
                  <p className="mb-4 font-body text-sm font-medium leading-relaxed text-neutral-600">
                    {leader.bio}
                  </p>
                  <div className="rounded-xl bg-neutral-100 p-3 border border-neutral-200/60">
                    <span className="block font-heading text-[11px] font-bold text-neutral-500 uppercase">Focus</span>
                    <span className="font-body text-xs font-semibold text-neutral-800">{leader.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Form */}
      <ServiceContactForm
        title="Connect with Our Leadership"
        desc="Have an enterprise initiative or strategic partnership in mind? Let's begin the conversation."
      />
    </main>
  );
}
