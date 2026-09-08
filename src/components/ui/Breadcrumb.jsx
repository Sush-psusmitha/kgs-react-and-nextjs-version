import Link from 'next/link'

/**
 * `items` is an array of { label, to? } — the last item is the current
 * page (no link, rendered as .breadcrumb-current); earlier items link
 * only if they have a `to` (the old site's "Services" middle crumb has no
 * link, just a label — it's not clickable there either).
 *
 * Keeps the schema.org BreadcrumbList markup from the old site.
 */
function Breadcrumb({ items, white = false }) {
  return (
    <div className={`py-7 ${white ? 'bg-white' : 'bg-[#FFEDEF]'}`}>
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
                  {index > 0 && <span aria-hidden="true" className="text-neutral-400">&bull;</span>}
                  {isLast ? (
                    <span aria-current="page" itemProp="name" className="font-body text-sm font-bold text-kgs-primary">
                      {label}
                    </span>
                  ) : to ? (
                    <Link href={to} itemProp="item" className="font-body text-sm font-semibold text-neutral-900 hover:text-kgs-primary">
                      <span itemProp="name">{label}</span>
                    </Link>
                  ) : (
                    <span itemProp="name" className="font-body text-sm font-semibold text-neutral-900">{label}</span>
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
