import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import { FaCalendarDays, FaArrowRight } from 'react-icons/fa6';
import heroImg from '../../assets/images/events/event-banner.png';
import event1Img from '../../assets/images/events/event-one.webp';
import event2Img from '../../assets/images/events/event-two.webp';
import event3Img from '../../assets/images/events/event-three.webp';

export const metadata = {
  title: "News & Events | Kotnani Global Solutions",
  description: "Follow the latest launches, milestones, summits, partnerships, and industry events shaping Kotnani Global Solutions.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/news-and-events.html",
  },
  openGraph: {
    title: "News & Events | Kotnani Global Solutions",
    description: "Follow the latest launches, milestones, summits, partnerships, and industry events shaping Kotnani Global Solutions.",
    url: "https://www.kotnaniglobal.com/news-and-events.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "News & Events | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "News & Events | Kotnani Global Solutions",
    description: "Follow the latest launches, milestones, summits, partnerships, and industry events shaping Kotnani Global Solutions.",
    images: ["/images/banner/home-hero.webp"],
  },
};

const events = [
  {
    title: 'KGS Annual Global Leadership Summit 2026',
    date: 'January 15, 2026',
    category: 'Company Summit',
    image: event1Img,
    desc: 'Bringing together global practice leaders, clients, and technology partners to celebrate milestones and outline the autonomous AI roadmap.',
  },
  {
    title: 'AI in Action: Enterprise Automation Forum',
    date: 'February 20, 2026',
    category: 'Tech Conference',
    image: event2Img,
    desc: 'Interactive panels and live demonstrations showcasing how enterprise leaders apply Gen AI and Agentic workflows to eliminate friction.',
  },
  {
    title: 'New Delivery Facility Inauguration in Bengaluru',
    date: 'March 05, 2026',
    category: 'Infrastructure',
    image: event3Img,
    desc: 'Expanding global capacity with our 50% solar-powered state-of-the-art innovation center housing 300+ AI and engineering specialists.',
  },
];

export default function NewsEventsPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Happenings & Announcements"
        title="Follow the Launches, Milestones, and Events Shaping KGS"
        desc="Stay updated with the latest news, summits, community drives, and industry participation from Kotnani Global Solutions."
        bgImage={heroImg}
        bgImageAlt="KGS News and Events"
        actions={[
          { label: 'Explore Events', href: '#events-grid', variant: 'primary' },
          { label: 'Read Insights', to: '/insights', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Events Grid */}
      <section id="events-grid" className="py-16 md:py-24 bg-white" aria-labelledby="events-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Recent Happenings
            </span>
            <h2 id="events-heading" className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Company Updates & Events
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((ev, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/50 shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100 border-b border-neutral-200/60">
                    <img
                      src={ev.image?.src || ev.image}
                      alt={ev.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between text-xs font-medium text-neutral-500">
                      <span className="font-bold text-kgs-primary">{ev.category}</span>
                      <div className="flex items-center gap-1.5">
                        <FaCalendarDays size={11} className="text-kgs-primary" />
                        <span>{ev.date}</span>
                      </div>
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors">
                      {ev.title}
                    </h3>
                    <p className="font-body text-sm font-medium leading-relaxed text-neutral-600">
                      {ev.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-neutral-200/70">
                    <a
                      href="#contact-form"
                      className="inline-flex items-center gap-2 font-heading text-xs font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors"
                    >
                      <span>Learn more</span>
                      <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Form */}
      <ServiceContactForm
        title="Have a Media or Partnership Inquiry?"
        desc="Connect with our corporate communications team for press inquiries, event participation, and keynote requests."
      />
    </main>
  );
}
