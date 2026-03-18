import { useRef, useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, BarChart2, Code2, Brain, FileBarChart, Lightbulb, FlaskConical } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'

const serviceIcons = [BarChart2, Code2, Brain, FileBarChart, Lightbulb, FlaskConical]

export default function Services() {
  const { lang } = useLang()
  const t = i18n[lang].services

  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const updateScrollState = () => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
    const max = el.scrollWidth - el.clientWidth
    setScrollProgress(max > 0 ? el.scrollLeft / max : 0)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    setTimeout(updateScrollState, 100)
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * 460, behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-24 overflow-hidden" id="servisler">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Başlık ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              {t.overline}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-dark leading-[1.1] tracking-tight max-w-lg">
              {t.h2}
            </h2>
          </div>

          {/* Ok butonlar */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll(-1)}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? 'border-dark/25 text-dark hover:bg-dark hover:text-white hover:border-dark'
                  : 'border-slate-200 text-slate-300 cursor-default'
              }`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? 'border-dark/25 text-dark hover:bg-dark hover:text-white hover:border-dark'
                  : 'border-slate-200 text-slate-300 cursor-default'
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>

      {/* ── Kayan Kartlar ── */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollBehavior: 'smooth',
          paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))',
          paddingRight: '1.5rem',
        }}
      >
        {t.items.map((service, i) => {
          const Icon = serviceIcons[i]
          return (
            <div
              key={i}
              className="group shrink-0 w-96 bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/80 rounded-3xl p-9 flex flex-col justify-between transition-all duration-300 select-none"
            >
              <div>
                {/* İkon */}
                <div className="w-12 h-12 rounded-2xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  <Icon size={20} />
                </div>

                <h3 className="text-xl font-bold text-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Dekoratif numara */}
              <div className="mt-10 text-6xl font-black text-slate-100 leading-none select-none group-hover:text-slate-200 transition-colors duration-300">
                0{i + 1}
              </div>
            </div>
          )
        })}

        {/* Discovery kartı */}
        <Link
          to="/servisler"
          className="group shrink-0 w-80 bg-dark hover:bg-primary rounded-3xl p-9 flex flex-col justify-between transition-colors duration-300"
        >
          <div>
            <h3 className="text-2xl font-bold text-white leading-snug mb-5" style={{ whiteSpace: 'pre-line' }}>
              {t.discoveryTitle}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              {t.discoveryDesc}
            </p>
          </div>
          <div className="mt-10 flex items-center gap-2 text-sm font-semibold text-white/60 group-hover:text-white transition-colors duration-200">
            <span>{t.discoveryLink}</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </Link>

        {/* Sağ boşluk */}
        <div className="shrink-0 w-6 lg:w-12" />
      </div>

      {/* ── Scroll çizgisi ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8">
        <div className="relative h-0.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 right-0 bg-primary rounded-full origin-left"
            style={{
              transform: `scaleX(${scrollProgress})`,
              willChange: 'transform',
            }}
          />
        </div>
      </div>

    </section>
  )
}
