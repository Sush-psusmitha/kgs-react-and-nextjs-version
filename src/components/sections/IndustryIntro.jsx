import ArrowButton from '../ui/ArrowButton'

/**
 * Industry Intro Section with Stats Grid (matches kgs-og .indpg-intro-section)
 */
function IndustryIntro({ title, desc, ctaText = 'Get Started', ctaLink = '/contact', stats = [] }) {
  if (!title && (!stats || stats.length === 0)) return null

  return (
   <section
  className="bg-[linear-gradient(to_bottom,#FFEDEF,#F4F4F4)] py-16 nav:py-10"
  aria-labelledby="indpgIntroHeading"
>
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Intro Content */}
          <div className="max-w-2xl">
            {title && (
              <h2 id="indpgIntroHeading" className="mb-5 font-heading text-2xl font-bold text-neutral-900 nav:text-3xl leading-tight">
                {title}
              </h2>
            )}
            {desc && (
              <p className="mb-8 font-body text-base leading-relaxed font-medium text-neutral-700">
                {desc}
              </p>
            )}
            {ctaLink && (
              <ArrowButton to={ctaLink} variant="outline-primary">
                {ctaText}
              </ArrowButton>
            )}
          </div>

          {/* Right Column: Stats Grid */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-2 rounded-[14px] bg-white p-6 md:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_32px_-18px_rgba(16,15,23,0.15)]"
                >
                  <span className="text-xs md:text-sm font-semibold text-neutral-500">
                    {label}
                  </span>
                  <span className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-kgs-primary">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default IndustryIntro
