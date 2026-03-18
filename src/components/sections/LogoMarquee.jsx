import { useEffect } from 'react'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'

const logos = [
  { name: 'İstinye Üniversitesi', src: '/brands/istinye.webp' },
  { name: 'LIV Hospital',         src: '/brands/liv-hospital.webp' },
  { name: 'Medical Park',         src: '/brands/medical-park.webp' },
  { name: 'MLP Care',             src: '/brands/mlpcare.webp' },
  { name: '5E Tasarım',           src: '/brands/5e-tasarim.webp' },
  { name: 'Cafrost',              src: '/brands/cafrost.webp' },
  { name: 'Brainco',              src: '/brands/brainco.webp' },
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

      <div className="relative py-16">

        <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 mb-10">
          {t.label}
        </p>

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
    <div className="shrink-0 bg-white border border-slate-200 rounded-2xl transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:border-slate-300 flex items-center justify-center w-52 h-24 p-3">
      <img
        src={logo.src}
        alt={logo.name}
        className="w-full h-full object-contain"
        loading="eager"
      />
    </div>
  )
}
