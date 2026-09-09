import Link from 'next/link';
import Image from 'next/image';
import heroBgPattern from '../../assets/images/blog/blog-inner.png';

export const metadata = {
  title: "Privacy Policy | Kotnani Global Solutions",
  description: "Read the Kotnani Global Solutions Privacy Policy to understand how we collect, use, and protect your personal information in compliance with applicable laws.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/privacy-policy.html",
  },
  openGraph: {
    title: "Privacy Policy | Kotnani Global Solutions",
    description: "Read the Kotnani Global Solutions Privacy Policy to understand how we collect, use, and protect your personal information in compliance with applicable laws.",
    url: "https://www.kotnaniglobal.com/privacy-policy.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Privacy Policy | Kotnani Global Solutions",
    description: "Read the Kotnani Global Solutions Privacy Policy to understand how we collect, use, and protect your personal information in compliance with applicable laws.",
    images: ["/images/banner/home-hero.webp"],
  },
};

export default function PrivacyPolicyPage() {
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
            Legal & Compliance
          </span>
          <h1 className="mb-4 font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="max-w-2xl font-body text-sm font-medium text-white/85 sm:text-base">
            How Kotnani Global Solutions collects, uses, and protects your personal information in compliance with global standards.
          </p>

          {/* Inline Breadcrumb */}
          <nav className="mt-6 flex items-center gap-2 font-body text-xs text-white/75" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>
        </div>
      </section>

      {/* 2. Legal Content */}
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
                1. Introduction
              </h2>
              <p>
                Kotnani Global Solutions (&quot;KGS&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy and security of personal information entrusted to us by clients, employees, website visitors, and partners. This Privacy Policy outlines how we collect, use, disclose, and safeguard personal information in compliance with applicable data protection laws, including GDPR, HIPAA, and CCPA.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-neutral-900 md:text-2xl">
                2. Information We Collect
              </h2>
              <p className="mb-3">We may collect personal information in several ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Direct Interactions:</strong> Contact details such as name, email address, phone number, company name, and job title submitted via contact forms, inquiries, or career applications.</li>
                <li><strong>Automated Data:</strong> Technical details including IP address, browser type, device information, operating system, pages visited, and referring URLs collected via cookies and analytics.</li>
                <li><strong>Client Business Data:</strong> Information processed on behalf of enterprise clients under strict Master Services Agreements (MSA) and Non-Disclosure Agreements (NDA).</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-neutral-900 md:text-2xl">
                3. How We Use Your Information
              </h2>
              <p className="mb-3">Information collected is utilized for legitimate business purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding to business inquiries, proposals, and consultation requests.</li>
                <li>Delivering, managing, and improving our BPO, AI, data engineering, and software services.</li>
                <li>Evaluating candidate applications and recruitment processes.</li>
                <li>Ensuring security, preventing fraud, and complying with legal and regulatory obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-neutral-900 md:text-2xl">
                4. Data Security & Storage
              </h2>
              <p>
                KGS maintains ISO 27001:2022 certified Information Security Management Systems (ISMS). We enforce end-to-end data encryption (at rest and in transit), zero-trust network architectures, role-based access controls, and regular independent vulnerability assessments.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-neutral-900 md:text-2xl">
                5. Your Rights
              </h2>
              <p>
                Depending on your jurisdiction, you may have rights to access, rectify, erase, restrict processing, or request portability of your personal data. To exercise these rights, contact our Data Protection Officer at <a href="mailto:privacy@kotnaniglobal.com" className="text-kgs-primary hover:underline">privacy@kotnaniglobal.com</a>.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold text-neutral-900 md:text-2xl">
                6. Contact Us
              </h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please contact:
              </p>
              <div className="mt-3 rounded-xl bg-neutral-50 p-4 border border-neutral-200">
                <p className="font-semibold text-neutral-900">Kotnani Global Solutions - Legal & Compliance</p>
                <p className="text-sm">Email: <a href="mailto:legal@kotnaniglobal.com" className="text-kgs-primary hover:underline">legal@kotnaniglobal.com</a></p>
                <p className="text-sm">Address: KGS Tech Center, Outer Ring Road, Bengaluru, Karnataka 560103, India</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
