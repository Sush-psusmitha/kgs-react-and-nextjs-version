'use client';

import targetLogo from '../../assets/images/clients/target.webp';
import vansLogo from '../../assets/images/clients/vans.webp';
import flipkartLogo from '../../assets/images/clients/flipkart.png';
import fossilLogo from '../../assets/images/clients/fossil.webp';
import kohlsLogo from '../../assets/images/clients/kohl-s.webp';
import walmartLogo from '../../assets/images/clients/walmart.webp';
import nikeLogo from '../../assets/images/clients/nike.webp';
import pumaLogo from '../../assets/images/clients/puma.webp';
import amazonLogo from '../../assets/images/clients/amazon.png';
import accentureLogo from '../../assets/images/clients/accenture.webp';
import './TestimonialsMarquee.css';

const CLIENT_LOGOS = [
  { src: targetLogo, alt: 'Target' },
  { src: vansLogo, alt: 'Vans' },
  { src: flipkartLogo, alt: 'Flipkart' },
  { src: fossilLogo, alt: 'Fossil' },
  { src: kohlsLogo, alt: "Kohl's" },
  { src: walmartLogo, alt: 'Walmart' },
  { src: nikeLogo, alt: 'Nike' },
  { src: pumaLogo, alt: 'Puma' },
  { src: amazonLogo, alt: 'Amazon' },
  { src: accentureLogo, alt: 'Accenture' },
];

/**
 * Standalone Client Logos Infinite Marquee (used after Hero in product page)
 */
export default function ClientLogosMarquee({ className = '' }) {
  return (
    <div className={`overflow-hidden border-b border-neutral-100 bg-white py-6 ${className}`}>
      <div className="stt-marquee-wrapper">
        <div className="stt-marquee-track items-center gap-16 md:gap-20">
          {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, idx) => (
            <img
              key={idx}
              src={logo.src?.src || logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-10 md:h-14 w-auto max-w-[140px] md:max-w-[170px] object-contain transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
