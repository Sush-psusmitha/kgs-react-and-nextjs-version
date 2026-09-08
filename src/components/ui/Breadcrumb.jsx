import Link from 'next/link'

/**
 * `items` is an array of { label, to? } — the last item is the current
 * page (no link, rendered as .breadcrumb-current); earlier items link
 * only if they have a `to` (the old site's "Services" middle crumb has no
 * link, just a label — it's not clickable there either).
 *
 * Keeps the schema.org BreadcrumbList markup from the old site.
 */
function Breadcrumb({ items, white = false, primary = false, bg = '', bgColor = '' }) {
  let bgClass = 'bg-[#FFEDEF]'
  const customBg = bg || bgColor

  if (customBg) {
    bgClass = customBg.startsWith('#') || customBg.startsWith('rgb') ? `bg-[${customBg}] text-neutral-900` : `${customBg} text-neutral-900`
  } else if (primary) {
    bgClass = 'bg-kgs-primary text-white'
  } else if (white) {
    bgClass = 'bg-white text-neutral-900'
  }

  return (
    <div className={`py-6 sm:py-7 ${bgClass}`}>
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <nav aria-label="Breadcrumb">
          <ol
            itemScope
            itemType="https://schema.org/BreadcrumbList"
            className="flex flex-wrap items-center gap-2.5"
          >
            {items.map(({ label, to }, index) => {
              const isLast = index === items.length - 1
              return (
                <li
                  key={label}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  className="flex items-center gap-2.5"
                >
                  {index > 0 && (
                    <span aria-hidden="true" className={primary ? 'text-white/60' : 'text-neutral-400'}>
                      &bull;
                    </span>
                  )}
                  {isLast ? (
                    <span
                      aria-current="page"
                      itemProp="name"
                      className={`font-body text-sm font-bold ${primary ? 'text-white' : 'text-kgs-primary'}`}
                    >
                      {label}
                    </span>
                  ) : to ? (
                    <Link
                      href={to}
                      itemProp="item"
                      className={`font-body text-sm font-semibold transition-colors ${
                        primary
                          ? 'text-white/90 hover:text-white underline-offset-4 hover:underline'
                          : 'text-neutral-900 hover:text-kgs-primary'
                      }`}
                    >
                      <span itemProp="name">{label}</span>
                    </Link>
                  ) : (
                    <span
                      itemProp="name"
                      className={`font-body text-sm font-semibold ${primary ? 'text-white/90' : 'text-neutral-900'}`}
                    >
                      {label}
                    </span>
                  )}
                  <meta itemProp="position" content={String(index + 1)} />
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default Breadcrumb
