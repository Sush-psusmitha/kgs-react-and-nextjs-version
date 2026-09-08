'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  FaCalendarDays, FaBookOpen, FaDiagramProject, FaCubes, FaChevronRight,
  FaBuilding, FaUsers, FaBriefcase, FaTrophy, FaLocationDot, FaLeaf,
  FaLightbulb, FaChartLine, FaFileLines, FaQuoteRight, FaHandshake,
  FaChevronDown, FaXmark,
} from 'react-icons/fa6'

import kgsLogoWhite from '../../assets/images/common/KGS-logo-white.svg'
import kgsLogoBlack from '../../assets/images/common/kgs-logo-black.svg'
import promoExpertise from '../../assets/images/common/automation.webp'
import promoPlatforms from '../../assets/images/common/ai-blog-title-01.webp'
import promoCompany from '../../assets/images/common/qualified-to-excel.webp'
import promoResources from '../../assets/images/common/case-studies-bg.png'

import services from '../../content/services'
import industries from '../../content/industries'

// Services/industries used to live here as private arrays — now shared
// with Home's grids via content/services.js and content/industries.js.
const SERVICES_COL_1 = services.slice(0, 7)
const SERVICES_COL_2 = services.slice(7)
const INDUSTRIES_COL_1 = industries.slice(0, 5)
const INDUSTRIES_COL_2 = industries.slice(5)

const PLATFORMS = [
  { icon: FaCalendarDays, label: 'MapMyClasses', sub: 'Smart class scheduling & management', to: '/products/mapmyclasses' },
  { icon: FaBookOpen, label: 'MapLibrarySuite', sub: 'Digital library management system', to: '/products/maplibrarysuite' },
  { icon: FaDiagramProject, label: 'PublishGridIQ', sub: 'End-to-end publishing workflow', to: '/products/publishgridiq' },
  { icon: FaCubes, label: 'ThePro3DStudio', sub: '3D visualisation & rendering studio', to: '/products/thepro3dstudio' },
]
const PARTNERS = ['AWS', 'Google Cloud', 'Microsoft', 'ServiceNow', 'More partners']

const COMPANY_LINKS = [
  { icon: FaBuilding, label: 'About Us', sub: 'Mission, vision & values', to: '/about' },
  { icon: FaUsers, label: 'Leadership', sub: 'Meet our leadership team', to: '/management-team' },
  { icon: FaBriefcase, label: 'Careers', sub: 'Explore open roles', to: '/careers' },
  { icon: FaTrophy, label: 'Certifications', sub: 'Certifications & recognition', to: '/certifications' },
  { icon: FaLocationDot, label: 'Locations', sub: 'Where we operate globally', to: '/locations' },
  { icon: FaLeaf, label: 'CSR Initiatives', sub: 'Social & environmental impact', to: '/corporate-social-responsibility' },
]

const RESOURCE_LINKS = [
  { icon: FaLightbulb, label: 'Insights', sub: 'Articles & thought leadership', to: '/insights' },
  { icon: FaChartLine, label: 'Case Studies', sub: 'Real-world results', to: '/case-studies' },
  { icon: FaFileLines, label: 'Whitepapers', sub: 'Research & reports', to: '#' },
  { icon: FaCalendarDays, label: 'News & Events', sub: 'Announcements & happenings', to: '/news-and-events' },
  { icon: FaQuoteRight, label: 'Testimonials', sub: 'What our clients say', to: '/testimonials' },
  { icon: FaHandshake, label: 'Customers', sub: 'Brands that trust KGS', to: '/customers' },
]

function GridLink({ icon: Icon, label, sub, to, onClick }) {
  return (
    <Link
      href={to}
      onClick={onClick}
      className="group flex items-start gap-2.5 rounded-lg p-1.5 hover:bg-neutral-100"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-kgs-primary/10 text-kgs-primary">
        <Icon size={14} />
      </span>
      <span>
        <span className="block font-heading text-[11px] min-[1280px]:text-[13px] font-semibold text-neutral-900 group-hover:text-kgs-primary">
          {label}
        </span>
        {sub && <span className="block font-body text-[11px] text-neutral-700">{sub}</span>}
      </span>
    </Link>
  )
}

function PromoCard({ image, title, desc, to }) {
  return (
    <Link href={to} className="group relative block overflow-hidden rounded-xl">
      <img src={image?.src || image} alt="" className="h-40 w-full object-cover transition-transform group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h4 className="font-heading text-sm font-bold text-white">{title}</h4>
        <p className="mt-1 font-body text-xs text-white/70">{desc}</p>
      </div>
    </Link>
  )
}

function MobSectionLabel({ children }) {
  return (
    <div className="mt-4 mb-1 font-heading text-xs font-bold uppercase tracking-wide text-neutral-400 first:mt-0">
      {children}
    </div>
  )
}

function MobAccordion({ name, label, openSection, onToggle, children }) {
  const isOpen = openSection === name
  return (
    <div className="border-b border-neutral-100">
      <button
        onClick={() => onToggle(name)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 font-heading text-base font-semibold text-neutral-900"
      >
        {label}
        <FaChevronDown size={13} className={isOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  )
}

function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const headerRef = useRef(null)

  const toggleMenu = (name) => setOpenMenu((current) => (current === name ? null : name))
  const closeMenu = () => setOpenMenu(null)

  const toggleMobileSection = (name) => setMobileSection((current) => (current === name ? null : name))
  const closeMobileMenu = () => {
    setIsMobileOpen(false)
    setMobileSection(null)
  }

  const isSolid = isScrolled || openMenu !== null

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu()
      }
    }
    function handleEscape(event) {
      if (event.key === 'Escape') closeMenu()
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40)
    }
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1100) closeMenu()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const navLinkClass = `flex items-center gap-1.5 whitespace-nowrap font-weight text-[15px] hover:opacity-70 ${isSolid ? 'text-neutral-900' : 'text-white'}`

  const currentLogo = isSolid ? kgsLogoBlack : kgsLogoWhite

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isSolid ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >

      <nav className="relative px-6 md:px-10">
        <div className="flex h-17 items-center justify-between">
          <Link href="/" aria-label="Kotnani Global Solutions home" onClick={closeMenu}>
            <img src={currentLogo?.src || currentLogo} alt="Kotnani Global Solutions" className="h-8" />
          </Link>

          <ul className="hidden items-center gap-8 text-md font-bold nav:flex">
            <li>
              <button
                onClick={() => toggleMenu('expertise')}
                aria-expanded={openMenu === 'expertise'}
                className={openMenu === 'expertise' ? 'flex items-center gap-1.5 text-kgs-primary' : navLinkClass}
              >
                Our Expertise
                <FaChevronDown size={11} className={openMenu === 'expertise' ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleMenu('platforms')}
                aria-expanded={openMenu === 'platforms'}
                className={openMenu === 'platforms' ? 'flex items-center gap-1.5 text-kgs-primary' : navLinkClass}
              >
                Platforms
                <FaChevronDown size={11} className={openMenu === 'platforms' ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleMenu('company')}
                aria-expanded={openMenu === 'company'}
                className={openMenu === 'company' ? 'flex items-center gap-1.5 text-kgs-primary' : navLinkClass}
              >
                Our Company
                <FaChevronDown size={11} className={openMenu === 'company' ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleMenu('resources')}
                aria-expanded={openMenu === 'resources'}
                className={openMenu === 'resources' ? 'flex items-center gap-1.5 text-kgs-primary' : navLinkClass}
              >
                Resources
                <FaChevronDown size={11} className={openMenu === 'resources' ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
            </li>
          </ul>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="hidden rounded-full bg-kgs-primary px-5 py-2 text-sm font-semibold text-white hover:opacity-90 nav:inline-block"
          >
            Contact Us
          </Link>

          <button
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileOpen}
            className={isSolid ? 'text-2xl text-neutral-900 nav:hidden' : 'text-2xl text-white nav:hidden'}
          >
            ☰
          </button>
        </div>

        {/* ── Our Expertise: Services + Industries ── */}
        {openMenu === 'expertise' && (
          <div className="fixed left-0 top-17 w-screen border-t-[3px] border-kgs-primary bg-white shadow-2xl">
            <div className="mx-auto max-w-[1920px] px-[3%]">
              <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-[1fr_1fr_340px]">
                <div>
                  <h4 className="mb-3 border-b-2 border-kgs-primary pb-2 font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary w-fit">Services</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {[...SERVICES_COL_1, ...SERVICES_COL_2].map((item) => (
                      <GridLink key={item.label} {...item} onClick={closeMenu} />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 border-b-2 border-kgs-primary pb-2 font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary w-fit">Industries</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {[...INDUSTRIES_COL_1, ...INDUSTRIES_COL_2].map((item) => (
                      <GridLink key={item.label} {...item} onClick={closeMenu} />
                    ))}
                  </div>
                </div>
                <PromoCard
                  image={promoExpertise}
                  title="Enterprise Services That Power Growth"
                  desc="Integrated business services that strengthen operations, improve efficiency, and enable smarter decisions."
                  to="/contact"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── Platforms ── */}
        {openMenu === 'platforms' && (
          <div className="fixed left-0 top-17 w-screen border-t-[3px] border-kgs-primary bg-white shadow-2xl">
            <div className="mx-auto max-w-[1920px] px-[8%]">
              <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-[1fr_1fr_340px]">
                <div>
                  <h4 className="mb-3 border-b-2 border-kgs-primary pb-2 font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary w-fit">Platforms</h4>
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
                    {PLATFORMS.map((item) => (
                      <GridLink key={item.label} {...item} onClick={closeMenu} />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 border-b-2 border-kgs-primary pb-2 font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary w-fit">Cloud Expertise</h4>
                  <ul className="flex flex-col gap-1">
                    {PARTNERS.map((name) => (
                      <li key={name}>
                        <a href="#" className="flex items-center justify-between rounded-lg p-2 text-sm text-neutral-900 hover:bg-neutral-100">
                          {name} <FaChevronRight size={11} className="text-neutral-400" />
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="#" className="block rounded-lg p-2 text-sm font-semibold text-kgs-primary hover:bg-neutral-100">
                        All Partnerships
                      </a>
                    </li>
                  </ul>
                </div>

                <PromoCard
                  image={promoPlatforms}
                  title="Technology Platforms That Accelerate Innovation"
                  desc="Intelligent platforms that simplify operations, automate workflows, and help businesses scale with confidence."
                  to="/customers"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── Our Company ── */}
        {openMenu === 'company' && (
          <div className="fixed left-0 top-17 w-screen border-t-[3px] border-kgs-primary bg-white shadow-2xl">
            <div className="mx-auto max-w-[1920px] px-[8%]">
              <div className="grid grid-cols-1 gap-x-12 gap-y-4 py-12 lg:grid-cols-[2fr_1fr]">
                <div>
                  <h4 className="mb-3 border-b-2 border-kgs-primary pb-2 font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary w-fit">Who We Are</h4>
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                    {COMPANY_LINKS.map((item) => (
                      <GridLink key={item.label} {...item} onClick={closeMenu} />
                    ))}
                  </div>
                </div>
                <PromoCard
                  image={promoCompany}
                  title="The People, Purpose, and Principles Behind KGS"
                  desc="Discover our journey, leadership, culture, and commitment to building lasting client partnerships."
                  to="/about"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── Resources ── */}
        {openMenu === 'resources' && (
          <div className="fixed left-0 top-17 w-screen border-t-[3px] border-kgs-primary bg-white shadow-2xl">
            <div className="mx-auto max-w-[1920px] px-[8%]">
              <div className="grid grid-cols-1 gap-x-12 gap-y-4 py-12 lg:grid-cols-[2fr_1fr]">
                <div>
                  <h4 className="mb-3 border-b-2 border-kgs-primary pb-2 font-heading text-xs font-bold uppercase tracking-wide text-kgs-primary w-fit">Resources</h4>
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                    {RESOURCE_LINKS.map((item) => (
                      <GridLink key={item.label} {...item} onClick={closeMenu} />
                    ))}
                  </div>
                </div>
                <PromoCard
                  image={promoResources}
                  title="Insights That Inspire Better Business Decisions"
                  desc="Explore blogs, case studies, and research that help businesses innovate and grow with confidence."
                  to="/insights"
                />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── Mobile menu ── */}
      {isMobileOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 z-50 bg-black/50 nav:hidden"
        />
      )}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[85vw] max-w-sm overflow-y-auto bg-white shadow-2xl transition-transform duration-300 nav:hidden ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
          <img src={kgsLogoBlack?.src || kgsLogoBlack} alt="Kotnani Global Solutions" className="h-7" />
          <button onClick={closeMobileMenu} aria-label="Close menu" className="text-2xl text-neutral-900">
            <FaXmark />
          </button>
        </div>

        <nav className="px-5 py-4">
          <Link href="/" onClick={closeMobileMenu} className="block py-3 font-heading text-base font-semibold text-neutral-900">
            Home
          </Link>

          <MobAccordion name="expertise" label="Our Expertise" openSection={mobileSection} onToggle={toggleMobileSection}>
            <MobSectionLabel>Services</MobSectionLabel>
            {[...SERVICES_COL_1, ...SERVICES_COL_2].map(({ label, to }) => (
              <Link key={to} href={to} onClick={closeMobileMenu} className="block py-2 text-sm text-neutral-700">
                {label}
              </Link>
            ))}

            <MobSectionLabel>Industries</MobSectionLabel>
            {[...INDUSTRIES_COL_1, ...INDUSTRIES_COL_2].map(({ label, to }) => (
              <Link key={to} href={to} onClick={closeMobileMenu} className="block py-2 text-sm text-neutral-700">
                {label}
              </Link>
            ))}

            <MobSectionLabel>Products</MobSectionLabel>
            {PLATFORMS.map(({ label, to }) => (
              <Link key={to} href={to} onClick={closeMobileMenu} className="block py-2 text-sm text-neutral-700">
                {label}
              </Link>
            ))}
          </MobAccordion>

          <MobAccordion name="company" label="Our Company" openSection={mobileSection} onToggle={toggleMobileSection}>
            {COMPANY_LINKS.map(({ label, to }) => (
              <Link key={to} href={to} onClick={closeMobileMenu} className="block py-2 text-sm text-neutral-700">
                {label}
              </Link>
            ))}
          </MobAccordion>

          <MobAccordion name="resources" label="Resources" openSection={mobileSection} onToggle={toggleMobileSection}>
            {RESOURCE_LINKS.map(({ label, to }) => (
              <Link key={to} href={to} onClick={closeMobileMenu} className="block py-2 text-sm text-neutral-700">
                {label}
              </Link>
            ))}
          </MobAccordion>

          <Link href="/contact" onClick={closeMobileMenu} className="block py-4 font-heading text-base font-semibold text-neutral-900">
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-2 block rounded-full bg-kgs-primary px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Start Free Trial
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
