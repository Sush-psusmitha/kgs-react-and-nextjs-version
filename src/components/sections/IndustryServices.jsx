/**
 * Industry Services Section (matches kgs-og .indpg-services-section)
 */
function IndustryServices({ heading = 'Services We Offer', cards = [] }) {
  if (!cards || cards.length === 0) return null

  return (
    <section className="bg-white py-16 nav:py-20" aria-labelledby="indpgServicesHeading">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        {/* Header */}
        <div className="mb-10 nav:mb-12">
          <h2
            id="indpgServicesHeading"
            className="font-heading text-2xl font-bold text-neutral-900 nav:text-3xl"
          >
            {heading}
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ image, imageAlt, title, desc, tags = [] }) => (
            <div
              key={title}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200/90 bg-white transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              {/* Image with hover zoom */}
              {image && (
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={image?.src || image}
                    alt={imageAlt || title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2.5 font-heading text-base font-bold text-neutral-900">
                  {title}
                </h3>
                <p className="mb-5 font-body text-sm font-medium leading-relaxed text-neutral-700">
                  {desc}
                </p>

                {/* Tags */}
                {tags && tags.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustryServices
