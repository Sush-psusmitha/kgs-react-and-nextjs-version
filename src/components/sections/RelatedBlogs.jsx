import Link from 'next/link'
import ArrowButton from '../ui/ArrowButton'

/**
 * Related Articles / Blogs Section (.svcblog-section in kgs-og)
 * Displays a 3-card grid of thought leadership / insights articles related to the service.
 */
function RelatedBlogs({
  label = 'Our Blogs',
  heading = 'Get Insights on the Latest Articles',
  viewAllTo = '/insights',
  articles = [],
}) {
  if (!articles || articles.length === 0) return null

  return (
    <section className="bg-white py-16 nav:py-24" aria-labelledby="svcblogHeading">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="mb-2 block font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary">
              {label}
            </span>
            <h2 id="svcblogHeading" className="font-heading text-2xl font-bold text-neutral-900 nav:text-3xl">
              {heading}
            </h2>
          </div>
          <ArrowButton to={viewAllTo} variant="primary">
            View All
          </ArrowButton>
        </div>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map(({ image, imageAlt = '', title, desc, tags = [], metaTags = [], to }) => (
            <Link
              key={title}
              href={to || '/insights'}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-kgs-primary/50 hover:shadow-xl"
            >
              {/* Image */}
              <div className="aspect-16/10 w-full overflow-hidden bg-neutral-100">
                <img
                  src={image?.src || image}
                  alt={imageAlt || title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <h3 className="mb-3 font-heading text-lg font-bold leading-snug text-neutral-900 group-hover:text-kgs-primary transition-colors">
                    {title}
                  </h3>
                  <p className="mb-5 font-body text-sm leading-relaxed text-neutral-600 line-clamp-2">
                    {desc}
                  </p>

                  {/* Topic Tags */}
                  {tags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-neutral-100 px-2.5 py-1 font-heading text-[11px] font-semibold text-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Meta Tags */}
                  {metaTags.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {metaTags.map((metaTag) => (
                        <span
                          key={metaTag}
                          className="rounded-md bg-[#FFEDEF] px-2.5 py-1 font-heading text-[11px] font-semibold text-kgs-primary"
                        >
                          {metaTag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 rounded-[5px] bg-kgs-primary px-5 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-kgs-primary/90">
                    Read more &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedBlogs
