import FlipText from '../ui/FlipText'
import ArrowButton from '../ui/ArrowButton'

/**
 * The full-bleed hero used on Home, Service detail, Industry detail, and
 * About pages.
 */
function Hero({ tag, title, description, desc, actions = [], bgImage, bgImageAlt = '' }) {
  const imageSrc = bgImage?.src || bgImage
  const heroDescription = description || desc

  return (
    <section className="hero relative flex min-h-[500px] items-center overflow-hidden bg-black py-20 nav:min-h-screen">
      <img
        src={imageSrc}
        alt={bgImageAlt}
        aria-hidden="true"
        className="animate-ken-burns absolute inset-0 h-full w-full object-cover object-[right_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1920px]">
        <div className="animate-hero-fade-up max-w-[85%] nav:mt-16 nav:max-w-[60%]">
          {tag && (
            <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-kgs-primary shadow-[0_0_0_3px_rgba(248,72,94,0.25)]" />
              {tag}
            </span>
          )}

          <FlipText
            as="h1"
            text={title}
            className="mb-6 mt-2 block font-heading text-3xl font-bold leading-tight text-white nav:text-5xl"
          />

          {heroDescription && (
            <p className="mb-10 max-w-155 font-body text-base leading-relaxed text-white/86 nav:text-lg">
              {heroDescription}
            </p>
          )}

          {actions.length > 0 && (
            <div className="flex flex-wrap items-center gap-4">
              {actions.map(({ label, to, href, variant }) => (
                <ArrowButton key={label} to={to} href={href} variant={variant}>
                  {label}
                </ArrowButton>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
