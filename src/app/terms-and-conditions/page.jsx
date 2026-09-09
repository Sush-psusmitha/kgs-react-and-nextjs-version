import Link from 'next/link';
import Image from 'next/image';
import heroBgPattern from '../../assets/images/blog/blog-inner.png';

export const metadata = {
  title: "Terms & Conditions | Kotnani Global Solutions",
  description: "Review the Terms and Conditions governing use of the Kotnani Global Solutions website and engagement with our services.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/terms-and-conditions.html",
  },
  openGraph: {
    title: "Terms & Conditions | Kotnani Global Solutions",
    description: "Review the Terms and Conditions governing use of the Kotnani Global Solutions website and engagement with our services.",
    url: "https://www.kotnaniglobal.com/terms-and-conditions.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terms & Conditions | Kotnani Global Solutions",
    description: "Review the Terms and Conditions governing use of the Kotnani Global Solutions website and engagement with our services.",
    images: ["/images/banner/home-hero.webp"],
  },
};

export default function TermsConditionsPage() {
  return (
    <main>
      {/* 1. Signature KGS Hero Banner for Header Visibility */}
      <section className="relative overflow-hidden bg-[#9E0C52] pt-28 pb-14 md:pt-36 md:pb-20 text-left">
        {/* Background Texture Pattern */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-90">
          <Image
            src={heroBgPattern}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 mx-auto w-[92%] max-w-[1920px]">
          <span className="mb-4 inline-block rounded-full bg-white/15 border border-white/25 px-4 py-1.5 font-heading text-xs font-semibold text-white tracking-wide backdrop-blur-xs">
            Terms of Use
          </span>
          <h1 className="mb-4 font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="max-w-2xl font-body text-sm font-medium text-white/85 sm:text-base">
            Please review these terms and conditions carefully before accessing our website or engaging with our business solutions.
          </p>

          {/* Inline Breadcrumb */}
          <nav className="mt-6 flex items-center gap-2 font-body text-xs text-white/75" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Terms & Conditions</span>
          </nav>
        </div>
      </section>

      {/* 2. Terms Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-[92%] max-w-[1000px]">
          <div className="mb-10 border-b border-neutral-200 pb-4">
            <p className="font-body text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Effective Date: January 01, 2026
            </p>
          </div>

          <div className="space-y-10 font-body text-base font-medium leading-[1.8] text-neutral-700">
            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-neutral-900 md:text-2xl">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-neutral-900 md:text-2xl">
                2. Intellectual Property
              </h2>
              <p>
                All content, brand trademarks, logos, service marks, graphics, designs, and proprietary software platforms (including MapMyClasses and MapLibrarySuite) displayed on this website are the intellectual property of Kotnani Global Solutions or its licensors and are protected under copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-neutral-900 md:text-2xl">
                3. Service Engagements
              </h2>
              <p>
                Client engagements, deliverables, service level agreements (SLAs), and pricing are governed by individual Master Services Agreements (MSAs) executed between KGS and the respective client organization.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-neutral-900 md:text-2xl">
                4. Limitation of Liability
              </h2>
              <p>
                In no event shall Kotnani Global Solutions, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-neutral-900 md:text-2xl">
                5. Governing Law
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding shall be subject to the exclusive jurisdiction of the courts in Bengaluru, India.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-neutral-900 md:text-2xl">
                6. Contact Us
              </h2>
              <p>
                For legal questions regarding these Terms, contact <a href="mailto:legal@kotnaniglobal.com" className="text-kgs-primary hover:underline">legal@kotnaniglobal.com</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
