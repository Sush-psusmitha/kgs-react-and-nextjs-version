'use client'

import Link from 'next/link'
import useInView from '../../hooks/useInView'

import featured from '../../assets/images/home/optimising-global-frieght-oparation.png'
import papersReport from '../../assets/images/home/home-insights-papers-report.webp'
import newsEvents from '../../assets/images/home/home-insights-news-events.webp'
import caseStudies from '../../assets/images/home/home-insights-case-studies.webp'

const SECONDARY = [
  { tag: 'Blogs', title: 'How Agentic AI Is Transforming Business through LLM?', image: papersReport, to: '/insights' },
  { tag: 'News & Events', title: 'KGS Expands Its Global Delivery Operations Across Countries', image: newsEvents, to: '/news-and-events' },
  { tag: 'Papers & Reports', title: "It's Our Privilege to Present The Enterprise Data Strategy Playbook", image: caseStudies, to: '#' },
]

function NewsInsights() {
  const [ref, isInView] = useInView()

  return (
    <section
      ref={ref}
      aria-labelledby="nwiHeading"
      className={`py-16 transition-all duration-700 ${isInView ? 'opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <div className="mb-8">
          <span className="mb-2 block font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary">Insights & News</span>
          <h2 id="nwiHeading" className="font-heading text-2xl font-bold text-neutral-900 nav:text-3xl">Latest News &amp; Expert Insights</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 nav:grid-cols-2">
          <Link href="/insights/logistics-bpo/global-freight-operations" className="group flex flex-col overflow-hidden rounded-xl border border-neutral-100 shadow-sm transition-shadow hover:shadow-md">
            <img src={featured?.src || featured} alt="How KGS Reduced Global Freight Friction with Intelligent Process Automation" loading="lazy" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="p-6">
              <span className="mb-2 block font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary">Top Rated Article</span>
              <h3 className="mb-3 font-heading text-lg font-bold text-neutral-900">How KGS Reduced Global Freight Friction with Intelligent Process Automation</h3>
              <span className="font-heading text-sm font-semibold text-kgs-primary">Read more &rarr;</span>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            {SECONDARY.map(({ tag, title, image, to }) => (
              <Link key={title} href={to} className="group flex gap-4 overflow-hidden rounded-xl border border-neutral-100 p-3 shadow-sm transition-shadow hover:shadow-md">
                <img src={image?.src || image} alt="" loading="lazy" className="h-20 w-24 shrink-0 rounded-lg object-cover" />
                <div>
                  <span className="mb-1 block font-heading text-[11px] font-bold uppercase tracking-wide text-kgs-primary">{tag}</span>
                  <h4 className="font-heading text-sm font-semibold leading-snug text-neutral-900">{title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsInsights
