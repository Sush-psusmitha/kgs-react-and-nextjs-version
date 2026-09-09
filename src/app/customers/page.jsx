import Hero from '../../components/sections/Hero';
import ClientLogosMarquee from '../../components/sections/ClientLogosMarquee';
import TestimonialsMarquee from '../../components/sections/TestimonialsMarquee';
import ServiceContactForm from '../../components/sections/ServiceContactForm';
import heroImg from '../../assets/images/banner/case-studies-bg.png';

export const metadata = {
  title: "Customers & Partners | Kotnani Global Solutions",
  description: "Relationships, not transactions — discover global enterprises and industry brands that trust Kotnani Global Solutions.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/customers.html",
  },
  openGraph: {
    title: "Customers & Partners | Kotnani Global Solutions",
    description: "Relationships, not transactions — discover global enterprises and industry brands that trust Kotnani Global Solutions.",
    url: "https://www.kotnaniglobal.com/customers.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Customers & Partners | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Customers & Partners | Kotnani Global Solutions",
    description: "Relationships, not transactions — discover global enterprises and industry brands that trust Kotnani Global Solutions.",
    images: ["/images/banner/home-hero.webp"],
  },
};

export default function CustomersPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        tag="Our Clientele"
        title="Relationships, Not Transactions"
        desc="Trusted by 600+ enterprises worldwide to deliver mission-critical operations, software engineering, and intelligent automation."
        bgImage={heroImg}
        bgImageAlt="KGS Customers"
        actions={[
          { label: 'View Case Studies', to: '/case-studies', variant: 'primary' },
          { label: 'Client Testimonials', to: '/testimonials', variant: 'secondary' },
        ]}
      />

      {/* 2. Client Marquee */}
      <ClientLogosMarquee />

      {/* 3. Client Testimonials Marquee */}
      <TestimonialsMarquee />

      {/* 4. Contact Form */}
      <ServiceContactForm
        title="Join Our Growing Enterprise Roster"
        desc="Discover how KGS can support your operations with disciplined execution, dedicated teams, and intelligent technology."
      />
    </main>
  );
}
