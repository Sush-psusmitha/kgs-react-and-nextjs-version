/**
 * The 8-card "what we do" grid — shared shell (tag/heading/desc/cards all
 * per-service props), same 4→3→2→1 responsive column pattern and hover
 * behavior on every service page.
 */
function TechGrid({ tag, heading, desc, cards = [] }) {
  if (!cards || cards.length === 0) return null

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-[92%] max-w-3xl text-center">
        {tag && (
          <span className="mb-4 inline-block rounded-full bg-[#FFEDEF] px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary">
            {tag}
          </span>
        )}
        <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900 nav:text-3xl">{heading}</h2>
        <p className="font-body leading-relaxed text-neutral-700 font-medium">{desc}</p>
      </div>

      <div className="mx-auto mt-10 grid w-[92%] max-w-[1920px] grid-cols-2 gap-6 min-[992px]:grid-cols-3 min-[1501px]:grid-cols-4">
        {cards.map(({ icon, title, desc: cardDesc }) => (
          <div
            key={title}
            className="group flex flex-col items-center rounded-[5px] border border-neutral-200 bg-neutral-100 p-8 text-center transition-colors hover:border-kgs-primary hover:bg-gradient-to-b hover:from-[#FFEDEF] hover:to-neutral-100"
          >
            <span className="mb-3.5 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded transition-colors group-hover:bg-kgs-primary">
              <img
                src={icon?.src || icon}
                alt=""
                className="h-[52px] w-[52px] transition-[filter] group-hover:brightness-0 group-hover:invert"
              />
            </span>
            <h3 className="mb-2.5 font-heading text-base font-bold text-neutral-900">{title}</h3>
            <p className="font-body text-sm leading-relaxed font-medium text-neutral-700">{cardDesc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechGrid
