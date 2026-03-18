import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'

export default function Header({ white = false }) {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang } = useLang()
  const t = i18n[lang]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    // Mobil tarayıcıların yükleme sırasında fırlattığı sahte scroll event'lerini atlamak için kısa gecikme
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

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          white
            ? scrolled
              ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
              : 'bg-white border-b border-slate-100'
            : scrolled
              ? 'bg-dark/80 backdrop-blur-md border-b border-white/10'
              : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* ── Logo ── */}
            <Link to="/" className="shrink-0">
              <img
                src="/logos/logo.png"
                alt="HC Dijital"
                className={`h-35 w-auto object-contain transition-all duration-300 ${white ? '' : 'brightness-0 invert'}`}
              />
            </Link>

            {/* ── Sağ Alan: Nav + Language + CTA ── */}
            <div className="flex items-center gap-2">

              {/* Nav */}
              <nav className="hidden md:flex items-center gap-1">
                {t.nav.map((link) => {
                  const active = link.internal && pathname === link.href
                  return link.internal ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`relative px-4 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-200 group ${
                        white
                          ? active ? 'text-dark' : 'text-slate-500 hover:text-dark hover:bg-slate-50'
                          : active ? 'text-white' : 'text-white/70 hover:text-white hover:bg-white/8'
                      }`}
                    >
                      {link.label}
                      <span className={`absolute bottom-1.5 left-4 right-4 h-[1.5px] transition-transform duration-300 origin-left rounded-full ${white ? 'bg-dark/40' : 'bg-white/50'} ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`relative px-4 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-200 group ${
                        white ? 'text-slate-500 hover:text-dark hover:bg-slate-50' : 'text-white/70 hover:text-white hover:bg-white/8'
                      }`}
                    >
                      {link.label}
                      <span className={`absolute bottom-1.5 left-4 right-4 h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full ${white ? 'bg-dark/40' : 'bg-white/50'}`} />
                    </a>
                  )
                })}
              </nav>

              {/* Dikey ayırıcı */}
              <div className={`hidden md:block w-px h-5 mx-1 ${white ? 'bg-slate-200' : 'bg-white/15'}`} />

              {/* Dil seçici */}
              <button
                onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[12px] font-bold tracking-wider uppercase transition-colors ${
                  white ? 'text-dark hover:bg-slate-100' : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Dil değiştir"
              >
                <Globe size={15} />
                {lang}
              </button>

              {/* CTA Butonu */}
              <Link
                to="/iletisim"
                className={`hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-[14px] font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 ${
                  white ? 'bg-dark text-white hover:bg-primary' : 'bg-white text-dark hover:bg-white/90'
                }`}
              >
                {t.headerCta}
              </Link>

              {/* Mobil dil değiştirici — Globe ikonu */}
              <button
                onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                className={`md:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[12px] font-bold tracking-wider uppercase transition-colors ${white ? 'text-dark hover:bg-slate-100' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                aria-label="Dil değiştir"
              >
                <Globe size={15} />
                {lang}
              </button>

              {/* Mobil hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${white ? 'text-dark hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
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
          <>
            {/* Tam ekran menü paneli */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 bg-dark flex flex-col md:hidden"
            >
              {/* Panel başlık */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-white/8">
                <img src="/logos/logo.png" alt="HC Dijital" className="h-24 w-auto object-contain brightness-0 invert" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Linkler */}
              <nav className="flex flex-col px-6 gap-1 flex-1 justify-end pb-10">
                {t.nav.map((link, i) => {
                  const active = link.internal && pathname === link.href
                  return link.internal ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center px-4 py-4 rounded-xl text-[22px] font-semibold transition-colors ${active ? 'text-white' : 'text-white/50 hover:text-white'}`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center px-4 py-4 rounded-xl text-[22px] font-semibold text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                })}
              </nav>

              {/* Alt CTA */}
              <div className="px-5 pb-8 pt-4 border-t border-white/8">
                <Link
                  to="/iletisim"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3.5 rounded-full bg-white text-dark font-semibold text-[15px] hover:bg-white/90 transition-colors"
                >
                  {t.headerCta}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
