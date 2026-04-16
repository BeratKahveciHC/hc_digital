'use client'
import { useRef, useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, BarChart2, Code2, Brain, FileBarChart, Lightbulb, FlaskConical } from 'lucide-react'
import Link from 'next/link'
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
    <section className="bg-white py-24" id="servisler">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Başlık ── */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-5xl md:text-9xl font-black leading-tight mb-4 pt-2"
            style={{
              background: 'linear-gradient(to right, #0c122d 0%, #1b5fc1 40%, #4EA8FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t.overline}
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
            {t.h2}
          </p>

          {/* Ok butonlar */}
          <div className="hidden md:flex items-center gap-2 mt-8">
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
        className="flex gap-4 overflow-x-auto pb-4 mt-14"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth', paddingLeft: '24px' }}
      >
        {t.items.map((service, i) => {
          const Icon = serviceIcons[i]
          return (
            <div
              key={i}
              className="group shrink-0 w-80 lg:w-[calc((100vw-96px)/4)] bg-white hover:bg-primary border border-slate-200 hover:border-primary rounded-3xl p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 select-none"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center text-primary mb-6 group-hover:bg-white/15 group-hover:border-white/20 group-hover:text-white transition-all duration-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-dark group-hover:text-white mb-4 transition-colors duration-300">{service.title}</h3>
                <p className="text-sm text-slate-500 group-hover:text-white/70 leading-relaxed transition-colors duration-300">{service.description}</p>
              </div>
              <div
                className="mt-10 text-6xl font-black leading-none select-none transition-all duration-300 text-primary/15 group-hover:text-white/25"
              >
                0{i + 1}
              </div>
            </div>
          )
        })}

        {/* Discovery kartı */}
        <Link
          href="/servisler"
          className="group shrink-0 w-80 lg:w-[calc((100vw-96px)/4)] bg-primary hover:bg-sky rounded-3xl p-8 lg:p-10 flex flex-col justify-between transition-colors duration-300"
        >
          <div>
            <h3 className="text-2xl font-bold text-white leading-snug mb-5" style={{ whiteSpace: 'pre-line' }}>
              {t.discoveryTitle}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">{t.discoveryDesc}</p>
          </div>
          <div className="mt-10 flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-200">
            <span>{t.discoveryLink}</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </Link>
        <div className="shrink-0 w-6" />
      </div>

      {/* ── Scroll çizgisi ── */}
      <div className="mt-8 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="relative h-0.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 right-0 bg-primary rounded-full origin-left"
            style={{ transform: `scaleX(${scrollProgress})`, willChange: 'transform' }}
          />
        </div>
      </div>

    </section>
  )
}
