import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import { FaStar, FaQuoteLeft } from 'react-icons/fa6';
import heroImg from '../../assets/images/banner/qualified-to-excel.webp';

export const metadata = {
  title: "Testimonials & Reviews | Kotnani Global Solutions",
  description: "Read what our clients say about Kotnani Global Solutions — testimonials and reviews reflecting the impact of our BPO and technology services.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/testimonials.html",
  },
  openGraph: {
    title: "Testimonials & Reviews | Kotnani Global Solutions",
    description: "Read what our clients say about Kotnani Global Solutions — testimonials and reviews reflecting the impact of our BPO and technology services.",
    url: "https://www.kotnaniglobal.com/testimonials.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Testimonials & Reviews | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Testimonials & Reviews | Kotnani Global Solutions",
    description: "Read what our clients say about Kotnani Global Solutions — testimonials and reviews reflecting the impact of our BPO and technology services.",
    images: ["/images/banner/home-hero.webp"],
  },
};

const reviews = [
  {
    quote: 'KGS helped us create a much more structured loan processing environment. Applications reach our lending teams with more complete information, documentation gaps are identified earlier, and outstanding activities are easier to track.',
    author: 'VP, Lending Operations',
    company: 'Banking & Financial Services Institution',
  },
  {
    quote: 'KGS helped us bring greater consistency to high-volume banking operations that previously required significant manual coordination. Routine transactions now move through more structured workflows, exceptions are identified earlier.',
    author: 'VP, Banking Operations',
    company: 'Tier-1 Banking Institution',
  },
  {
    quote: 'KGS helped us standardise data transformation processes that had developed independently across our environment. Processing is more structured, failures are easier to identify, and our analytics teams receive more consistent data.',
    author: 'VP of Data Engineering',
    company: 'Global Enterprise Logistics',
  },
  {
    quote: 'KGS helped us establish much greater consistency across energy data that previously sat in different systems and formats. Our teams spend less time correcting information and have greater confidence in the data.',
    author: 'Chief Data Officer',
    company: 'Multi-Region Energy & Utility Provider',
  },
  {
    quote: 'KGS helped us establish a more consistent view of risk and compliance across business functions. Controls and supporting evidence are easier to track, findings have clearer ownership, and management has much better visibility.',
    author: 'Chief Risk & Compliance Officer',
    company: 'Financial Services Group',
  },
  {
    quote: 'MapMyClasses gives our institution a more connected way to manage scheduling, classrooms, faculty allocation, and student attendance. It eliminated scheduling conflicts and reduced administrative workload by over 60%.',
    author: 'Dean of Academic Affairs',
    company: 'Higher Education University System',
  },
];

export default function TestimonialsPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Client Feedback"
        title="Real Words From Real Clients"
        desc="Discover how our specialized domain expertise and intelligent execution deliver measurable business outcomes across industries."
        bgImage={heroImg}
        bgImageAlt="KGS Testimonials"
        actions={[
          { label: 'View Case Studies', to: '/case-studies', variant: 'primary' },
          { label: 'Get in Touch', href: '#contact-form', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Testimonials Grid */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="testimonials-grid-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Client Stories
            </span>
            <h2 id="testimonials-grid-heading" className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Proven Impact Across Enterprise Engagements
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-8 shadow-xs transition duration-300 hover:bg-white hover:shadow-lg"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="mb-4 flex items-center gap-1 text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={15} />
                    ))}
                  </div>

                  <p className="mb-6 font-body text-base font-medium leading-relaxed text-neutral-700">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200/70">
                  <h3 className="font-heading text-base font-bold text-neutral-900">{r.author}</h3>
                  <p className="font-body text-xs font-medium text-neutral-500">{r.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Form */}
      <ServiceContactForm
        title="Experience the KGS Advantage"
        desc="Let's discuss how KGS can support your operations with tailored workflows and dedicated delivery teams."
      />
    </main>
  );
}
