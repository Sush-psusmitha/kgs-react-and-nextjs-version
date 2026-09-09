import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import { FaLocationDot, FaBuilding, FaClock, FaPhone } from 'react-icons/fa6';
import heroImg from '../../assets/images/banner/automation.webp';
import indiaFlag from '../../assets/images/icon/india-flag.png';
import usaFlag from '../../assets/images/icon/usa-icon.svg';
import uaeFlag from '../../assets/images/icon/uae-flag.png';
import spainFlag from '../../assets/images/icon/spain-flag.png';

export const metadata = {
  title: "Locations | Kotnani Global Solutions",
  description: "Find Kotnani Global Solutions delivery centers and client offices across India, the United States, Europe, and the UAE.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/locations.html",
  },
  openGraph: {
    title: "Locations | Kotnani Global Solutions",
    description: "Find Kotnani Global Solutions delivery centers and client offices across India, the United States, Europe, and the UAE.",
    url: "https://www.kotnaniglobal.com/locations.html",
    images: [
      {
        url: "/images/banner/about.webp",
        width: 1200,
        height: 630,
        alt: "Locations | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Locations | Kotnani Global Solutions",
    description: "Find Kotnani Global Solutions delivery centers and client offices across India, the United States, Europe, and the UAE.",
    images: ["/images/banner/about.webp"],
  },
};

const offices = [
  {
    flag: indiaFlag,
    country: 'India (Headquarters & Global Delivery)',
    city: 'Bengaluru & Visakhapatnam',
    address: 'KGS Tech Center, Outer Ring Road, Bengaluru, Karnataka 560103',
    timeZone: 'IST (UTC +5:30)',
    focus: 'Core Engineering, AI Lab, 24/7 Global BPO Center',
  },
  {
    flag: usaFlag,
    country: 'United States',
    city: 'New York & Chicago',
    address: 'KGS Americas Solutions, 5th Avenue, New York, NY 10018',
    timeZone: 'EST / CST (UTC -5 / -6)',
    focus: 'Client Engagements, Enterprise Consulting & Account Management',
  },
  {
    flag: uaeFlag,
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Dubai Internet City, Building 3, Dubai, UAE',
    timeZone: 'GST (UTC +4)',
    focus: 'Middle East Regional Operations & Logistics Hub',
  },
  {
    flag: spainFlag,
    country: 'Europe',
    city: 'Madrid, Spain',
    address: 'Paseo de la Castellana, Madrid, Spain',
    timeZone: 'CET (UTC +1)',
    focus: 'European Client Services & Multilingual Support',
  },
];

export default function LocationsPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Global Presence"
        title="Global Offices and Regional Presence"
        desc="Strategically situated delivery centers and client partner nodes across time zones to ensure resilient, round-the-clock enterprise support."
        bgImage={heroImg}
        bgImageAlt="KGS Global Locations"
        actions={[
          { label: 'Contact Us', href: '#contact-form', variant: 'primary' },
          { label: 'View Case Studies', to: '/case-studies', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Locations Grid */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="locations-heading">
        <div className="mx-auto w-[92%] max-w-[1920px]">
          <div className="mb-14 max-w-3xl">
            <span className="mb-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Where We Operate
            </span>
            <h2 id="locations-heading" className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Worldwide Delivery & Client Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-8 shadow-xs transition duration-300 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-5 flex items-center gap-3">
                  {office.flag && (
                    <img
                      src={office.flag?.src || office.flag}
                      alt=""
                      className="h-7 w-auto object-contain rounded-xs"
                    />
                  )}
                  <div>
                    <h3 className="font-heading text-xl font-bold text-neutral-900">{office.country}</h3>
                    <p className="font-body text-xs font-semibold text-kgs-primary">{office.city}</p>
                  </div>
                </div>

                <div className="space-y-3 font-body text-sm font-medium text-neutral-700">
                  <div className="flex items-start gap-2.5">
                    <FaLocationDot className="mt-1 shrink-0 text-neutral-400" size={14} />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FaClock className="shrink-0 text-neutral-400" size={14} />
                    <span>{office.timeZone}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <FaBuilding className="mt-1 shrink-0 text-neutral-400" size={14} />
                    <span>{office.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Form */}
      <ServiceContactForm
        title="Schedule a Visit or Meeting"
        desc="Connect directly with our local leadership team at any of our global locations."
      />
    </main>
  );
}
