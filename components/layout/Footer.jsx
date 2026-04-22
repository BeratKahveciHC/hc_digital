'use client'

import Link from 'next/link'
import { ArrowUpRight, MapPin, Mail } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'
import _logo from '../../assets/logos/logo.webp'
const logo = _logo?.src ?? _logo

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/hc-dijital-sağlık-teknolojileri/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const { lang } = useLang()
  const t = i18n[lang].footer

  return (
    <footer className="bg-dark isolate">

      {/* ── Üst büyük tagline ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight lg:whitespace-nowrap">
              {t.taglineLine1}{' '}
              <span className="text-white/30">{t.taglineLine2}</span>{' '}
              {t.taglineLine3}
            </h2>
          </div>

        </div>
      </div>

      {/* ── Orta grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo & Açıklama */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-flex mb-4 -ml-3">
            <img src={logo} alt="HC Dijital" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" />
          </Link>
          <p className="text-sm text-white/35 leading-relaxed">
            {t.description}
          </p>

          {/* Sosyal medya */}
          <div className="flex items-center gap-2.5 mt-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:border-white/30 hover:bg-white/8 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Sayfalar */}
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/20 mb-6">
            {t.pagesTitle}
          </p>
          <ul className="flex flex-col gap-3.5">
            {t.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-white/45 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ürünler */}
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/20 mb-6">
            {t.productsTitle}
          </p>
          <ul className="flex flex-col gap-3.5">
            {t.products.map((p) => (
              <li key={p.to}>
                <Link
                  href={p.to}
                  className="group inline-flex items-center gap-1.5 text-sm text-white/45 hover:text-white transition-colors duration-200"
                >
                  {p.label}
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim & Adres */}
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/20 mb-6">
            {t.contactTitle}
          </p>
          <ul className="flex flex-col gap-5">

            <li className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-white/40 shrink-0 mt-0.5">
                <MapPin size={13} />
              </div>
              <div>
                <p className="text-xs text-white/20 uppercase tracking-widest font-semibold mb-1">{t.addressLabel}</p>
                <a
                  href="https://maps.google.com/?q=Ayazağa,+Vadis+Istanbul+Park+Etabı,+Kemerburgaz+Cad.+D:7A+Blok,+Sarıyer,+İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/45 leading-relaxed hover:text-white/75 transition-colors duration-200"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {t.address}
                </a>
              </div>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-white/40 shrink-0">
                <Mail size={13} />
              </div>
              <a
                href="mailto:info@hcdijital.com.tr"
                className="text-sm text-white/45 hover:text-white transition-colors duration-200"
              >
                info@hcdijital.com.tr
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* ── Alt bar ── */}
      <div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} {t.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/kvkk" className="text-xs text-white/20 hover:text-white/50 transition-colors duration-200">
              {t.privacy}
            </Link>
            <Link href="/gizlilik" className="text-xs text-white/20 hover:text-white/50 transition-colors duration-200">
              {t.cookies}
            </Link>
            <Link href="/cerez" className="text-xs text-white/20 hover:text-white/50 transition-colors duration-200">
              {lang === 'en' ? 'Cookie Policy' : 'Çerez Politikası'}
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
