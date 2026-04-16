'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'
import _logo from '../../assets/logos/logo.webp'
const logo = _logo?.src ?? _logo

function FlagTR({ size = 20 }) {
  return (
    <svg width={size} height={size * 0.667} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2 }}>
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="12" cy="10" r="5.5" fill="white" />
      <circle cx="13.5" cy="10" r="4.3" fill="#E30A17" />
      <polygon points="19,10 21.5,6.8 21.5,13.2" fill="white" transform="rotate(-20,19,10)" />
    </svg>
  )
}

function FlagGB({ size = 20 }) {
  return (
    <svg width={size} height={size * 0.667} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2 }}>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="white" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V40 M0,20 H60" stroke="white" strokeWidth="12" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  )
}

export default function Header({ solid = true }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null) // dropdown açık olan label
  const [openDropdown, setOpenDropdown] = useState(null)
  const closeTimer = useRef(null)
  const { lang, setLang } = useLang()
  const t = i18n[lang]

  const isLight = solid || scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }, 350)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openDd = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }
  const closeDd = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid || scrolled
            ? 'bg-white border-b border-slate-200 shadow-sm'
            : 'bg-black/30 backdrop-blur-sm border-b border-white/8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 xl:h-24">

            {/* ── Logo ── */}
            <Link href="/" className="shrink-0">
              <img
                src={logo}
                alt="HC Dijital"
                className={`h-8 sm:h-9 lg:h-11 xl:h-14 w-auto object-contain transition-all duration-300 ${isLight ? '' : 'brightness-0 invert'}`}
              />
            </Link>

            {/* ── Sağ Alan ── */}
            <div className="flex items-center gap-3">

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1">
                {t.nav.map((link) => {
                  const active = link.internal && (pathname === link.href || (link.dropdown && link.dropdown.some(d => pathname === d.href)))
                  const hasDropdown = link.dropdown && link.dropdown.length > 0

                  if (hasDropdown) {
                    return (
                      <div
                        key={link.label}
                        className="relative"
                        onMouseEnter={() => openDd(link.label)}
                        onMouseLeave={closeDd}
                      >
                        {/* Trigger */}
                        <button
                          className={`relative flex items-center gap-1 px-3 py-2 rounded-lg text-[12px] lg:px-4 lg:py-2.5 lg:text-[13px] xl:px-5 xl:py-3 xl:text-[15px] font-medium transition-all duration-200 group ${
                            isLight
                              ? active ? 'text-dark' : 'text-dark/60 hover:text-dark hover:bg-dark/5'
                              : active ? 'text-white font-semibold' : 'text-white/90 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            size={13}
                            className={`transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                          />
                          <span className={`absolute bottom-1.5 left-5 right-5 h-[1.5px] transition-transform duration-300 origin-left rounded-full ${isLight ? 'bg-primary/50' : 'bg-white/50'} ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                        </button>

                        {/* Dropdown panel */}
                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 6 }}
                              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56"
                              onMouseEnter={() => openDd(link.label)}
                              onMouseLeave={closeDd}
                            >
                              {/* Caret */}
                              <div className="flex justify-center -mb-px">
                                <div className="w-3 h-3 bg-dark rotate-45 rounded-sm" />
                              </div>
                              {/* Panel */}
                              <div className="bg-dark rounded-2xl overflow-hidden shadow-2xl shadow-black/25">
                                {link.dropdown.map((item, idx) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`group flex flex-col px-5 py-4 transition-colors duration-150 ${
                                      idx < link.dropdown.length - 1 ? 'border-b border-white/8' : ''
                                    } ${
                                      pathname === item.href
                                        ? 'bg-white/10'
                                        : 'hover:bg-white/6'
                                    }`}
                                  >
                                    <span className={`text-[13px] font-semibold transition-colors duration-150 ${
                                      pathname === item.href ? 'text-white' : 'text-white/70 group-hover:text-white'
                                    }`}>
                                      {item.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  // Normal link
                  return link.internal ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-3 py-2 rounded-lg text-[12px] lg:px-4 lg:py-2.5 lg:text-[13px] xl:px-5 xl:py-3 xl:text-[15px] font-medium transition-all duration-200 group ${
                        isLight
                          ? active ? 'text-dark' : 'text-dark/60 hover:text-dark hover:bg-dark/5'
                          : active ? 'text-white font-semibold' : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                      <span className={`absolute bottom-1.5 left-5 right-5 h-[1.5px] transition-transform duration-300 origin-left rounded-full ${isLight ? 'bg-primary/50' : 'bg-white/50'} ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`relative px-3 py-2 rounded-lg text-[12px] lg:px-4 lg:py-2.5 lg:text-[13px] xl:px-5 xl:py-3 xl:text-[15px] font-medium transition-all duration-200 group ${isLight ? 'text-dark/60 hover:text-dark hover:bg-dark/5' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
                    >
                      {link.label}
                      <span className={`absolute bottom-1.5 left-5 right-5 h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full ${isLight ? 'bg-primary/50' : 'bg-white/50'}`} />
                    </a>
                  )
                })}
              </nav>

              {/* Dikey ayırıcı */}
              <div className={`hidden md:block w-px h-6 mx-2 ${isLight ? 'bg-dark/15' : 'bg-white/20'}`} />

              {/* Dil seçici */}
              <button
                onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                className={`hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-[14px] font-bold tracking-wider uppercase transition-colors ${isLight ? 'text-dark/60 hover:text-dark hover:bg-dark/5' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
                aria-label="Dil değiştir"
              >
                {lang === 'tr' ? <FlagTR size={22} /> : <FlagGB size={22} />}
                {lang}
              </button>

              {/* CTA Butonu */}
              <Link
                href="/iletisim"
                className={`hidden md:inline-flex items-center px-4 py-2 rounded-full text-[12px] lg:px-5 lg:py-2.5 lg:text-[13px] xl:px-7 xl:py-3 xl:text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 ${isLight ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-white text-dark hover:bg-white/90'}`}
              >
                {t.headerCta}
              </Link>

              {/* Mobil dil değiştirici */}
              <button
                onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                className={`md:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[12px] font-bold tracking-wider uppercase transition-colors ${isLight ? 'text-dark/60 hover:text-dark hover:bg-dark/5' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
                aria-label="Dil değiştir"
              >
                {lang === 'tr' ? <FlagTR size={18} /> : <FlagGB size={18} />}
                {lang}
              </button>

              {/* Mobil hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${isLight ? 'text-dark hover:bg-dark/5' : 'text-white drop-shadow-sm hover:bg-white/10'}`}
                aria-label="Menüyü aç"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.18 }}
                  >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* ── Mobil Menü ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-white flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100">
              <img src={logo} alt="HC Dijital" className="h-10 w-auto object-contain" />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-xl text-dark/60 hover:text-dark hover:bg-dark/5 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col px-6 gap-1 flex-1 justify-end pb-10 overflow-y-auto">
              {t.nav.map((link) => {
                const hasDropdown = link.dropdown && link.dropdown.length > 0
                const isExpanded = mobileExpanded === link.label

                if (hasDropdown) {
                  return (
                    <div key={link.label}>
                      {/* Ana item — toggle */}
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                        className="w-full flex items-center justify-between px-4 py-4 rounded-xl text-[22px] font-semibold text-dark/50 hover:text-dark transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {/* Alt linkler */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col pl-4 pb-2 gap-1">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                                  className={`flex items-center px-4 py-3 rounded-xl text-[18px] font-semibold transition-colors ${
                                    pathname === item.href ? 'text-primary' : 'text-dark/40 hover:text-dark'
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                const active = link.internal && pathname === link.href
                return link.internal ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-4 py-4 rounded-xl text-[22px] font-semibold transition-colors ${active ? 'text-dark' : 'text-dark/50 hover:text-dark'}`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-4 rounded-xl text-[22px] font-semibold text-dark/50 hover:text-dark transition-colors"
                  >
                    {link.label}
                  </a>
                )
              })}
            </nav>

            <div className="px-5 pb-8 pt-4 border-t border-slate-100">
              <Link
                href="/iletisim"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-3.5 rounded-full bg-primary text-white font-semibold text-[15px] hover:bg-primary-dark transition-colors"
              >
                {t.headerCta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
