import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import { FaEnvelope, FaPhone, FaLocationDot, FaComments, FaHeadset } from 'react-icons/fa6';
import heroImg from '../../assets/images/banner/qualified-to-excel.webp';

export const metadata = {
  title: "Contact Us | Kotnani Global Solutions",
  description: "Connect with Kotnani Global Solutions — speak with our practice experts, discuss enterprise solutions, or request global delivery support.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/contact.html",
  },
  openGraph: {
    title: "Contact Us | Kotnani Global Solutions",
    description: "Connect with Kotnani Global Solutions — speak with our practice experts, discuss enterprise solutions, or request global delivery support.",
    url: "https://www.kotnaniglobal.com/contact.html",
    images: [
      {
        url: "/images/banner/about.webp",
        width: 1200,
        height: 630,
        alt: "Contact Us | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Us | Kotnani Global Solutions",
    description: "Connect with Kotnani Global Solutions — speak with our practice experts, discuss enterprise solutions, or request global delivery support.",
    images: ["/images/banner/about.webp"],
  },
};

const contactChannels = [
  {
    icon: FaComments,
    title: 'Chat to Sales',
    desc: 'Speak to our friendly solutions team about your business priorities.',
    contact: 'sales@kotnaniglobal.com',
    href: 'mailto:sales@kotnaniglobal.com',
  },
  {
    icon: FaHeadset,
    title: 'Support & Inquiries',
    desc: 'We are here to help existing clients and answer operational questions.',
    contact: 'support@kotnaniglobal.com',
    href: 'mailto:support@kotnaniglobal.com',
  },
  {
    icon: FaLocationDot,
    title: 'Visit Our Global Hubs',
    desc: 'Schedule a visit to our development and delivery facilities.',
    contact: 'Bengaluru, India | New York, USA',
    href: '/locations',
  },
  {
    icon: FaPhone,
    title: 'Call Us Directly',
    desc: 'Monday to Friday, round-the-clock enterprise dispatch.',
    contact: '+1 (800) KGS-GLOBAL',
    href: 'tel:+18005474562',
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Get in Touch"
        title="We're Happy to Assist You"
        desc="Whether you're exploring managed services, AI automation, or custom engineering, our global team is ready to assist."
        bgImage={heroImg}
        bgImageAlt="Contact KGS"
        actions={[
          { label: 'Send a Message', href: '#contact-form', variant: 'primary' },
          { label: 'Our Locations', to: '/locations', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Channels */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="channels-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Connect With Us
            </span>
            <h2 id="channels-heading" className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              How Can We Help You Today?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactChannels.map((c, idx) => (
              <a
                key={idx}
                href={c.href}
                className="group rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-6 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-kgs-primary/40 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-kgs-primary/10 text-kgs-primary group-hover:bg-kgs-primary group-hover:text-white transition-colors">
                  <c.icon size={22} />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900">{c.title}</h3>
                <p className="mb-4 font-body text-sm font-medium leading-relaxed text-neutral-600">{c.desc}</p>
                <span className="font-heading text-xs font-bold text-kgs-primary group-hover:underline">
                  {c.contact}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Form */}
      <ServiceContactForm
        title="Send Us a Detailed Message"
        desc="Fill out the form below and an enterprise practice lead will get back to you within 24 hours."
      />
    </main>
  );
}
