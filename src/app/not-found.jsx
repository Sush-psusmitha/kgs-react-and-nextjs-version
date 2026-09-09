import Link from 'next/link';
import Image from 'next/image';
import { FaHouse, FaArrowRight } from 'react-icons/fa6';
import heroBgPattern from '../assets/images/blog/blog-inner.png';

export const metadata = {
  title: "Page Not Found | Kotnani Global Solutions",
  description: "The page you are looking for might have been removed or is temporarily unavailable.",
  alternates: {
    canonical: "https://www.kotnaniglobal.com/404.html",
  },
  openGraph: {
    title: "Page Not Found | Kotnani Global Solutions",
    description: "The page you are looking for might have been removed or is temporarily unavailable.",
    url: "https://www.kotnaniglobal.com/404.html",
    images: [
      {
        url: "/images/banner/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Page Not Found | Kotnani Global Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Page Not Found | Kotnani Global Solutions",
    description: "The page you are looking for might have been removed or is temporarily unavailable.",
    images: ["/images/banner/home-hero.webp"],
  },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#9E0C52] px-6 pt-24 pb-20 text-center">
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

      <div className="relative z-10 max-w-xl">
        {/* Animated-style 404 number badge */}
        <div className="mb-6 inline-flex items-center justify-center gap-2 font-heading text-7xl font-black text-white sm:text-8xl md:text-9xl tracking-tight">
          <span>4</span>
          <span className="text-white/80 animate-pulse">0</span>
          <span>4</span>
        </div>

        <h1 className="mb-4 font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Oops… Page Not Found!
        </h1>
        <p className="mx-auto mb-10 max-w-md font-body text-base font-medium leading-relaxed text-white/85">
          It seems this page no longer exists. We will try to get you back on track. We apologize for the inconvenience.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-heading text-xs font-bold text-neutral-900 shadow-xl transition hover:bg-neutral-900 hover:text-white"
          >
            <FaHouse size={12} />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-heading text-xs font-bold text-white backdrop-blur-xs transition hover:bg-white hover:text-neutral-900"
          >
            <span>Explore Services</span>
            <FaArrowRight size={11} />
          </Link>
        </div>
      </div>
    </main>
  );
}
