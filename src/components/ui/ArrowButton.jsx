import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

// Matches the static site's .btn-arrow / .btn-arrow--* variants, used as the
// CTA button shape site-wide (hero buttons, section CTAs, card links).
const VARIANTS = {
  primary: 'border-transparent bg-kgs-primary text-white hover:bg-kgs-primary/90',
  outline: 'border-white/55 bg-transparent text-white hover:border-white hover:bg-white/10',
  'outline-primary': 'border-kgs-primary bg-transparent text-kgs-primary hover:bg-kgs-primary hover:text-white',
  'outline-dark': 'border-neutral-900/25 bg-transparent text-neutral-900 hover:border-kgs-primary hover:bg-kgs-primary hover:text-white',
  dark: 'border-transparent bg-neutral-900 text-white hover:bg-black',
}

function ArrowButton({ to, href, variant = 'primary', className = '', children }) {
  const classes = `group inline-flex items-center gap-0 whitespace-nowrap rounded-[5px] border-[1.5px] px-6 py-3 font-heading text-sm font-semibold transition-colors duration-300 ${VARIANTS[variant]} ${className}`

  const arrow = (
    <FaArrowRight
      size={13}
      className="ml-0 w-0 -translate-x-2 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:w-[13px] group-hover:translate-x-0 group-hover:opacity-100"
    />
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {arrow}
      </a>
    )
  }

  return (
    <Link href={to || '/'} className={classes}>
      {children}
      {arrow}
    </Link>
  )
}

export default ArrowButton
