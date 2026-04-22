'use client'
import { useEffect } from 'react'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'

import _istinye    from '../../assets/brands/istinye.webp'
import _livHospital from '../../assets/brands/liv-hospital.webp'
import _medicalPark from '../../assets/brands/medical-park.webp'
import _mlpcare     from '../../assets/brands/mlpcare.webp'
import _tasarim5e   from '../../assets/brands/5e-tasarim.webp'
import _cafrost     from '../../assets/brands/cafrost.webp'
import _brainco        from '../../assets/brands/brainco.webp'
import _bilisimVadisi  from '../../assets/brands/bilisim-vadisi.webp'
import _okanUni        from '../../assets/brands/okan-universitesi.webp'
const s = (x) => x?.src ?? x
const logos = [
  { name: 'İstinye Üniversitesi',       src: s(_istinye),       url: 'https://www.istinye.edu.tr' },
  { name: 'LIV Hospital',               src: s(_livHospital),   url: 'https://www.livhospital.com' },
  { name: 'Medical Park',               src: s(_medicalPark),   url: 'https://www.medicalpark.com.tr' },
  { name: 'MLP Care',                   src: s(_mlpcare),       url: 'https://www.mlpcare.com' },
  { name: '5E Tasarım',                 src: s(_tasarim5e),     url: 'https://www.5etasarim.com.tr' },
  { name: 'Cafrost',                    src: s(_cafrost),       url: 'https://cafrost.de' },
  { name: 'Brainco',                    src: s(_brainco),       url: 'https://brainco.com.tr' },
  { name: 'Bilişim Vadisi',             src: s(_bilisimVadisi), url: 'https://www.bilisimvadisi.com.tr' },
  { name: 'İstanbul Okan Üniversitesi', src: s(_okanUni),       url: 'https://www.okan.edu.tr' },
]

export default function LogoMarquee() {
  const { lang } = useLang()
  const t = i18n[lang].logoMarquee

  useEffect(() => {
    logos.forEach((logo) => {
      const img = new Image()
      img.src = logo.src
    })
  }, [])

  return (
    <section className="relative bg-slate-50 overflow-hidden">

      {/* Alt geçiş — LogoMarquee (slate-50) → Services (white) */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white to-transparent pointer-events-none z-20" />

      <div className="relative py-10">

        <div className="flex items-center justify-center gap-4 mb-6 px-8">
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-slate-300 max-w-32" />
          <span
            style={{
              fontFamily: "'Albert Sans', sans-serif",
              fontSize: 'clamp(0.65rem, 2vw, 1.05rem)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              background: 'linear-gradient(to right, #1b5fc1, #4EA8FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t.label}
          </span>
          <div className="flex-1 h-px bg-linear-to-l from-transparent to-slate-300 max-w-32" />
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-slate-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-slate-50 to-transparent pointer-events-none" />

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee shrink-0">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex gap-6 items-center px-3" aria-hidden={copy === 1 || undefined}>
                  {logos.map((logo, i) => <LogoItem key={i} logo={logo} />)}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function LogoItem({ logo }) {
  return (
    <a
      href={logo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 bg-white border border-slate-200 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:border-slate-400 flex items-center justify-center w-52 h-24 p-3"
    >
      <img
        src={logo.src}
        alt={logo.name}
        className="w-full h-full object-contain"
        loading="eager"
      />
    </a>
  )
}
