'use client'

import Link from 'next/link'
import useInView from '../../hooks/useInView'

import puma from '../../assets/images/home/puma.webp'
import snap from '../../assets/images/home/snap.webp'
import flipkart from '../../assets/images/home/flipkart.png'
import fossil from '../../assets/images/home/fossil.webp'
import walmart from '../../assets/images/home/walmart.webp'
import dk from '../../assets/images/home/dk.webp'
import wayfair from '../../assets/images/home/wayfair.png'
import pearson from '../../assets/images/home/pearson.webp'
import brightRiver from '../../assets/images/home/bright-river.webp'
import vtu from '../../assets/images/home/Vtu.webp'
import nmis from '../../assets/images/home/nmis.webp'

const LOGOS = [
  { src: puma, alt: 'Puma' },
  { src: snap, alt: 'Snap Inc.' },
  { src: flipkart, alt: 'Flipkart' },
  { src: fossil, alt: 'Fossil' },
  { src: walmart, alt: 'Walmart' },
  { src: dk, alt: 'dk' },
  { src: wayfair, alt: 'wayfair' },
  { src: pearson, alt: 'pearson' },
  { src: brightRiver, alt: 'bright river' },
  { src: vtu, alt: 'Vtu' },
  { src: nmis, alt: 'nmis' },
]

function Clients() {
  const [ref, isInView] = useInView()

  return (
    <section
      ref={ref}
      aria-labelledby="clientsHeading"
      className={`py-16 text-center transition-all duration-700 ${isInView ? 'opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <h2 id="clientsHeading" className="mb-10 font-heading text-2xl font-bold text-neutral-900 nav:text-3xl">
          Trusted by 600+ Global Enterprises
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {LOGOS.map(({ src, alt }) => (
            <img key={alt} src={src?.src || src} alt={alt} loading="lazy" className="h-25 w-auto" />
          ))}
        </div>
        <Link href="/customers" className="mt-8 inline-block font-heading text-sm font-semibold text-kgs-primary hover:underline">
          View All &rarr;
        </Link>
      </div>
    </section>
  )
}

export default Clients
