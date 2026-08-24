import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

import kgsLogoWhite from '../../assets/images/common/KGS-logo-white.svg'
import isoBadge27001 from '../../assets/images/common/footer-iso2.png'
import isoBadge9001 from '../../assets/images/common/footer-iso.png'

import facebook from '../../assets/images/common/facebook.png'
import twitter from '../../assets/images/common/twiter.png'
import instagram from '../../assets/images/common/instagram.png'
import linkedin from '../../assets/images/common/linkdin.png'
import youtube from '../../assets/images/common/youtube.png'
import whatsapp from '../../assets/images/common/whatsapp.png'

import chatgpt from '../../assets/images/common/chatgpt.png'
import claude from '../../assets/images/common/claude.png'
import gemini from '../../assets/images/common/gemini.png'
import grok from '../../assets/images/common/grok-ai.png'
import perplexity from '../../assets/images/common/perplexity.png'

const socialLinks = [
  { icon: facebook, label: 'Facebook' },
  { icon: twitter, label: 'X / Twitter' },
  { icon: instagram, label: 'Instagram' },
  { icon: linkedin, label: 'LinkedIn' },
  { icon: youtube, label: 'YouTube' },
  { icon: whatsapp, label: 'WhatsApp' },
]

const aiLinks = [
  { icon: chatgpt, label: 'Ask ChatGPT about KGS' },
  { icon: claude, label: 'Ask Claude about KGS' },
  { icon: gemini, label: 'Ask Gemini about KGS' },
  { icon: grok, label: 'Ask Grok about KGS' },
  { icon: perplexity, label: 'Ask Perplexity about KGS' },
]

const quickLinks = [
  { to: '/sitemap', label: 'Sitemap' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/our-work-culture', label: 'Values' },
  { to: '/customers', label: 'Customers' },
  { to: '/about', label: 'About Us' },
  { to: '/management-team', label: 'Leadership' },
  { to: '/careers', label: 'Careers' },
  { to: '/locations', label: 'Locations' },
  { to: '/contact', label: 'Contact Us' },
]

const popularServices = [
  { to: '/services/generative-ai', label: 'Gen AI Services' },
  { to: '/services/data-management', label: 'Data Management' },
  { to: '/services/finance-accounting', label: 'Finance & Accounting' },
  { to: '/services/healthcare', label: 'Healthcare BPO' },
  { to: '/services/data-engineering', label: 'Data Engineering' },
  { to: '/services/software-development', label: 'Software Development' },
  { to: '/services/cybersecurity', label: 'Cybersecurity' },
]

// Small red underline under each column heading — same look as the old
// site's .footer-col-title::after, done with Tailwind's `after:` variant
// instead of a separate ::after rule in a stylesheet.
const colTitle =
  "relative inline-block pb-2.5 mb-3 font-heading text-lg font-bold text-white " +
  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-7 after:rounded-full after:bg-kgs-primary"

const footerLink = 'font-body text-sm font-medium text-white hover:text-kgs-primary transition-colors'

function Footer() {
  return (
    <footer className="bg-kgs-footer-bg pt-13">
      <div className="mx-auto max-w-[1920px] rounded-[20px] bg-kgs-footer-bg px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 pb-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1.5fr_1fr_1fr] lg:gap-12">

          {/* Brand + contact */}
          <div>
            <Link to="/" aria-label="Kotnani Global Solutions home" className="mb-5 inline-block">
              <img src={kgsLogoWhite} alt="Kotnani Global Solutions" className="h-8" />
            </Link>

            <p className="mb-5 max-w-[300px] font-body font-medium leading-relaxed text-white">
              34/1, Rashtriya Vidyalaya Rd, Basavanagudi, Bengaluru, Karnataka 560004
            </p>

            <a
              href="tel:+918022450187"
              className="mb-4 flex items-center gap-3 font-heading font-bold text-white hover:text-kgs-primary transition-colors"
            >
              <FaPhone className="text-kgs-primary" /> +91 8022450187
            </a>
            <a
              href="mailto:collaboratewith@kotnaniglobal.com"
              className="mb-5 flex items-center gap-3 font-heading font-bold text-white hover:text-kgs-primary transition-colors"
            >
              <FaEnvelope className="text-kgs-primary" /> Write to us
            </a>

            <p className="mb-2.5 font-body text-sm text-white">Follow us on</p>
            <div className="flex flex-wrap items-center gap-2.5">
              {socialLinks.map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  target="_blank"
                  rel="noopener"
                  className="transition-transform hover:-translate-y-0.5 hover:opacity-80"
                >
                  <img src={icon} alt="" className="h-[22px] w-[22px] object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h3 className={colTitle}>Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-5">
              <ul className="flex flex-col gap-[18px]">
                {quickLinks.slice(0, 5).map(({ to, label }) => (
                  <li key={to}><Link to={to} className={footerLink}>{label}</Link></li>
                ))}
              </ul>
              <ul className="flex flex-col gap-[18px]">
                {quickLinks.slice(5).map(({ to, label }) => (
                  <li key={to}><Link to={to} className={footerLink}>{label}</Link></li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Popular services */}
          <nav aria-label="Popular services">
            <h3 className={colTitle}>Popular Services</h3>
            <ul className="flex flex-col gap-[18px]">
              {popularServices.map(({ to, label }) => (
                <li key={to}><Link to={to} className={footerLink}>{label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* ISO badges + Ask AI */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-nowrap items-center gap-2.5">
              <img src={isoBadge27001} alt="ISO 27001:2022 Certified — Information Security Management" className="h-10 w-auto shrink-0 object-contain" />
              <img src={isoBadge9001} alt="ISO 9001:2015 Certified — Quality Management System" className="h-10 w-auto shrink-0 object-contain" />
            </div>

            <div>
              <p className="mb-2.5 font-body text-sm text-white">Ask AI about KGS</p>
              <div className="flex flex-nowrap items-center gap-2.5">
                {aiLinks.map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    target="_blank"
                    rel="noopener"
                    className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] transition-all hover:-translate-y-0.5 hover:border-kgs-primary/50"
                  >
                    <img src={icon} alt="" className="h-full w-full object-cover" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] py-5">
          <p className="font-body text-xs font-medium leading-relaxed text-white/75">
            <strong className="text-white">&copy;2026 Kotnani Global Solutions. All Rights Reserved.</strong>{' '}
            The information on this website cannot be commercially used without the prior consent of Kotnani Global
            Solutions. Third-party logos displayed on the website are not owned by us, and are displayed only for
            representation purpose. The ownership and copyright of Logos belong to their respective organizations.{' '}
            <Link to="/terms-and-conditions" className="underline underline-offset-2 hover:text-kgs-primary">
              Terms &amp; Conditions
            </Link>{' '}
            |{' '}
            <Link to="/privacy-policy" className="underline underline-offset-2 hover:text-kgs-primary">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
