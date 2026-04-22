'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { news } from '../../data/news'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const fadeUp = () => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
})

function formatDate(dateStr, lang) {
  const date = new Date(dateStr)
  return date.toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const HERO_INTERVAL = 4500

function HeroCarousel({ items, lang }) {
  const [idx, setIdx] = useState(0)
  const item = items[idx]
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length)
  const next = () => setIdx((i) => (i + 1) % items.length)

  // Otomatik geçiş
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), HERO_INTERVAL)
    return () => clearInterval(t)
  }, [items.length])

  return (
    <div className="flex flex-col gap-4 pb-6 h-150 md:h-160">

      {/* Üst: içerik */}
      <motion.div
        key={idx + '-text'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="flex flex-col gap-1.5 flex-1 min-h-0"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 text-white/70 text-[10px] font-bold tracking-wide">
            {item.category[lang]}
          </span>
          <span className="flex items-center gap-1 text-white/30 text-[11px]">
            <CalendarDays size={11} />
            {formatDate(item.date, lang)}
          </span>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-white leading-snug line-clamp-2">
          {item.title[lang]}
        </h2>

        <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
          {item.summary[lang]}
        </p>

        <Link
          href={`/haberler/${item.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white transition-colors duration-200 shrink-0 mt-auto"
        >
          {lang === 'en' ? 'Read more' : 'Devamını oku'}
          <ArrowUpRight size={13} />
        </Link>
      </motion.div>

      {/* Alt: görsel — sabit yükseklik */}
      <motion.div
        key={idx + '-img'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className={`w-full rounded-xl overflow-hidden shrink-0 ${item.imageFit === 'contain' ? 'bg-white' : 'bg-white/5 h-80'}`}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.title[lang]}
            className={`w-full ${item.imageFit === 'contain' ? 'h-auto max-h-80 block' : 'h-full object-cover'}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl font-black text-white/10 select-none">HC</span>
          </div>
        )}
      </motion.div>

      {/* Nav */}
      <div className="flex items-center gap-3">
        <button onClick={prev} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all duration-200">
          <ChevronLeft size={14} />
        </button>
        <div className="flex gap-1.5">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`rounded-full transition-all duration-300 ${i === idx ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'}`} />
          ))}
        </div>
        <button onClick={next} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all duration-200">
          <ChevronRight size={14} />
        </button>
        <span className="ml-auto text-white/25 text-xs">{idx + 1} / {items.length}</span>
      </div>

    </div>
  )
}

export default function NewsPage() {
  const { lang } = useLang()

  const sorted = [...news].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="bg-white text-dark">
      <Header />

      {/* ── Banner ── */}
      <section className="bg-dark pt-20 relative overflow-hidden pb-0">
        <div aria-hidden className="pointer-events-none select-none absolute inset-0 flex items-center justify-center -rotate-12">
          <span className="text-[55vw] font-black text-white/4 leading-none tracking-tighter">HC</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 md:pt-10 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/30 font-medium mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">
              {lang === 'en' ? 'Home' : 'Ana Sayfa'}
            </Link>
            <span>/</span>
            <span className="text-white/60">{lang === 'en' ? 'News' : 'Haberler'}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Sol: başlık */}
            <div className="flex flex-col justify-between pb-8">
              <div className="flex flex-col justify-between h-full gap-6">
                {/* Üst: label + başlık + açıklama */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div style={{ height: '1px', width: '24px', background: 'linear-gradient(to right, #1b5fc1, #4EA8FF)' }} />
                    <span style={{ fontFamily:"'Albert Sans',sans-serif", fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', background:'linear-gradient(to right,#1b5fc1,#4EA8FF)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                      {lang === 'en' ? 'HC Digital' : 'HC Dijital'}
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight">
                    {lang === 'en' ? 'News' : 'Haberler'}
                  </h1>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {lang === 'en'
                      ? 'Follow the latest developments at HC Digital — all in one place, always up to date.'
                      : 'HC Dijital\'deki son gelişmeleri takip edin — hepsi tek yerde, her zaman güncel.'}
                  </p>
                </div>

                {/* Alt: son haberler mini listesi */}
                <div className="flex flex-col border-t border-white/10 pt-6 gap-0">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/25 mb-4">
                    {lang === 'en' ? 'Recent' : 'Son Haberler'}
                  </p>
                  {sorted.slice(0, 4).map((item, i) => (
                    <Link
                      key={item.slug}
                      href={`/haberler/${item.slug}`}
                      className="group flex items-start gap-3 py-3 border-b border-white/8 last:border-0 hover:border-white/20 transition-colors duration-200"
                    >
                      <span className="text-[10px] font-bold text-white/20 mt-0.5 shrink-0 w-4">{i + 1}</span>
                      <span className="text-xs text-white/50 group-hover:text-white/80 leading-snug transition-colors duration-200 line-clamp-2">
                        {item.title[lang]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sağ: carousel */}
            {sorted.length > 0 && <HeroCarousel items={sorted.slice(0, 5)} lang={lang} />}
          </div>
        </div>
      </section>

      {/* ── Haber Listesi ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {sorted.length === 0 ? (
            <p className="text-slate-400 text-center py-24">
              {lang === 'en' ? 'No news yet.' : 'Henüz haber yok.'}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map((item, i) => (
                <motion.div
                  key={item.slug}
                  {...fadeUp(0.05 + i * 0.06)}
                >
                  <Link
                    href={`/haberler/${item.slug}`}
                    className="group flex flex-col h-full rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Görsel */}
                    {item.image ? (
                      <div className={`${item.imageFit === 'contain' ? 'overflow-hidden bg-white' : 'aspect-video overflow-hidden bg-slate-100'}`}>
                        <img
                          src={item.image}
                          alt={item.title[lang]}
                          className={`w-full ${item.imageFit === 'contain' ? 'h-auto block' : 'h-full object-cover group-hover:scale-105 transition-transform duration-500'}`}
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-linear-to-br from-dark to-primary/80 flex items-center justify-center">
                        <span className="text-5xl font-black text-white/10 tracking-tighter select-none">HC</span>
                      </div>
                    )}

                    {/* İçerik */}
                    <div className="flex flex-col flex-1 p-6 gap-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/8 text-primary text-[11px] font-bold tracking-wide">
                          {item.category[lang]}
                        </span>
                        <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
                          <CalendarDays size={12} />
                          {formatDate(item.date, lang)}
                        </span>
                      </div>

                      <h2 className="text-base font-bold text-dark leading-snug group-hover:text-primary transition-colors duration-200">
                        {item.title[lang]}
                      </h2>

                      <p className="text-sm text-slate-500 leading-relaxed flex-1">
                        {item.summary[lang]}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mt-2">
                        <span>{lang === 'en' ? 'Read more' : 'Devamını oku'}</span>
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
