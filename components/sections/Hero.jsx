'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowUpRight, Clock, Smartphone, BarChart3, Zap, ShieldCheck, TrendingUp, Brain, FileText, Users } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'

import _airxHero    from '../../assets/images/products/airx-hero.webp'
import _tercumedHero from '../../assets/images/products/tercumed-hero.webp'
import _butce2       from '../../assets/images/products/butce-2.webp'
const s = (x) => x?.src ?? x
const airxHero    = s(_airxHero)
const tercumedHero = s(_tercumedHero)
const butce2      = s(_butce2)

const SLIDE_DURATION = 5500

const slides = [
  {
    id: 'airx',
    category: { tr: 'İK & Zaman Yönetimi', en: 'HR & Time Management' },
    title: 'AirX IKYS',
    tagline: {
      tr: 'Zaman takibini düzene otur,\nekibini tek ekrandan yönet.',
      en: 'Organize time tracking,\nmanage your team from one screen.',
    },
    description: {
      tr: 'Personel takibi, vardiya planlaması ve izin yönetimini tek platformda birleştiren iş gücü çözümü.',
      en: 'A workforce platform combining attendance, shift scheduling and leave management in one place.',
    },
    image: airxHero,
    href: '/urunler/airx-ikys',
    cta: { tr: 'Ürünü İncele', en: 'Explore Product' },
    features: [
      { icon: Clock,       label: { tr: 'Anında Kurulum',       en: 'Instant Setup'       }, desc: { tr: 'Aynı gün devreye alın', en: 'Go live same day'    } },
      { icon: Smartphone,  label: { tr: 'Mobil Erişim',         en: 'Mobile Access'       }, desc: { tr: 'iOS & Android desteği', en: 'iOS & Android ready' } },
      { icon: BarChart3,   label: { tr: 'Otomatik Raporlama',   en: 'Auto Reporting'      }, desc: { tr: 'Excel / PDF çıktısı',   en: 'Excel / PDF export' } },
    ],
  },
  {
    id: 'tercumed',
    category: { tr: 'Yapay Zekâ / Sağlık', en: 'AI / Healthcare' },
    title: 'Tercümed',
    tagline: {
      tr: 'Tıbbi belgeleri saniyeler içinde\nanlaşılır dile çevir.',
      en: 'Translate medical documents\ninto clear language in seconds.',
    },
    description: {
      tr: 'Taburculuk belgesi, onam formu gibi tıbbi belgelerdeki dil engelini kaldıran yapay zekâ çözümü.',
      en: 'AI-powered solution removing language barriers in discharge summaries and consent forms.',
    },
    image: tercumedHero,
    href: '/urunler/tercumed',
    cta: { tr: 'Ürünü İncele', en: 'Explore Product' },
    features: [
      { icon: Zap,         label: { tr: 'Anında Çeviri',        en: 'Instant Translation'  }, desc: { tr: '30+ dil desteği',        en: '30+ languages'       } },
      { icon: ShieldCheck, label: { tr: 'Klinik Doğruluk',      en: 'Clinical Accuracy'    }, desc: { tr: '%95+ terminoloji isabeti', en: '95%+ term accuracy'  } },
      { icon: FileText,    label: { tr: 'PDF & Word Çıktı',     en: 'PDF & Word Output'    }, desc: { tr: 'Hazır belgeler, 3 adımda', en: 'Ready files, 3 steps' } },
    ],
  },
  {
    id: 'butce',
    category: { tr: 'Finans / Sağlık', en: 'Finance / Healthcare' },
    title: 'Hastane Bütçe\nYönetim Sistemi',
    tagline: {
      tr: 'Bütçe yönetiminde\nyeni nesil.',
      en: 'Next generation\nin budget management.',
    },
    description: {
      tr: 'Otomatik gider–gelir takibi, gerçek zamanlı öngörüler ve AI destekli raporlarla stratejik kararlar.',
      en: 'Strategic decisions with automated tracking, real-time insights and AI-powered reports.',
    },
    image: butce2,
    href: '/urunler/butce-yonetim',
    cta: { tr: 'Ürünü İncele', en: 'Explore Product' },
    features: [
      { icon: TrendingUp,  label: { tr: 'AI Öngörü Motoru',     en: 'AI Forecast Engine'  }, desc: { tr: 'Sapmalar önceden tespit',  en: 'Detect deviations early' } },
      { icon: Brain,       label: { tr: 'Akıllı Raporlama',     en: 'Smart Reporting'     }, desc: { tr: '1 tıkla yönetim kurulu',   en: '1-click board report'    } },
      { icon: Users,       label: { tr: 'Birim Bazlı Analiz',   en: 'Unit-Based Analysis' }, desc: { tr: 'ERP & HBYS entegrasyonu',  en: 'ERP & HIS integration'   } },
    ],
  },
]

export default function Hero() {
  const { lang } = useLang()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef(null)
  const progressRef = useRef(null)

  const goTo = useCallback((index, dir = 1) => {
    setDirection(dir)
    setCurrent(index)
  }, [])

  const next = useCallback(() => {
    const nextIndex = (current + 1) % slides.length
    goTo(nextIndex, 1)
  }, [current, goTo])

  const prev = useCallback(() => {
    const prevIndex = (current - 1 + slides.length) % slides.length
    goTo(prevIndex, -1)
  }, [current, goTo])

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
      setDirection(1)
    }, SLIDE_DURATION)
    return () => clearInterval(intervalRef.current)
  }, [current])

  const slide = slides[current]
  const title = typeof slide.title === 'object' ? slide.title[lang] : slide.title

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '4%' : '-4%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? '-4%' : '4%',
      opacity: 0,
    }),
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-dark">

      {/* ── Slayt görseli ── */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={slide.id + '-bg'}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.32, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ animation: `kenBurns ${SLIDE_DURATION}ms ease-out forwards` }}
          />

          {/* Gradient katmanları */}
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/10" />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-black/45 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* ── Header padding ── */}
      <div className="relative z-10 flex flex-col min-h-screen pt-20 md:pt-24">

        {/* ── Progress çizgileri (üst) ── */}
        <div className="flex items-center gap-1.5 px-6 lg:px-12 pt-4">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className="relative flex-1 h-0.5 rounded-full bg-white/20 overflow-hidden cursor-pointer"
              aria-label={`Slayt ${i + 1}`}
            >
              {i === current && (
                <motion.div
                  key={s.id + '-progress'}
                  className="absolute inset-0 h-full bg-white rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                />
              )}
              {i < current && (
                <div className="absolute inset-0 h-full bg-white/60 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* ── İçerik (alt kısım) ── */}
        <div className="flex-1 flex flex-col justify-end pb-16 md:pb-20 px-6 lg:px-12">

          {/* Sol metin + Sağ özellikler */}
          <div className="flex items-end justify-between gap-8">

            {/* Sol: metin içeriği */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={slide.id + '-content'}
                custom={direction}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-xl"
              >
                {/* Kategori */}
                <div className="mb-5">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/15 text-[11px] font-bold tracking-[0.18em] text-white/90 uppercase">
                    {slide.category[lang]}
                  </span>
                </div>

                {/* Başlık */}
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-5"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {title}
                </h1>

                {/* Tagline */}
                <p
                  className="text-base sm:text-lg md:text-xl font-medium text-white/75 leading-snug mb-4 max-w-xl"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {slide.tagline[lang]}
                </p>

                {/* Açıklama */}
                <p className="text-sm md:text-base text-white/50 leading-relaxed mb-8 max-w-lg">
                  {slide.description[lang]}
                </p>

                {/* CTA */}
                <Link
                  href={slide.href}
                  className="inline-flex items-center gap-2.5 px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-white text-dark text-sm md:text-base font-semibold hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                >
                  {slide.cta[lang]}
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Sağ: özellik kartları */}
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={slide.id + '-features'}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:flex flex-col gap-3 w-72 xl:w-80 shrink-0"
              >
                {slide.features.map((f, i) => {
                  const Icon = f.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/20"
                    >
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shadow-inner">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-white leading-tight tracking-wide">{f.label[lang]}</p>
                        <p className="text-[12px] text-white/60 leading-snug mt-1">{f.desc[lang]}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Navigasyon (alt) ── */}
          <div className="flex items-center justify-between mt-10 md:mt-12">

            {/* Slayt sayacı */}
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-white tabular-nums leading-none">
                {String(current + 1).padStart(2, '0')}
              </span>
              <span className="text-white/30 text-sm font-medium">
                / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Ok butonları */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                aria-label="Önceki"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                aria-label="Sonraki"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ken Burns keyframe */}
      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.07); }
        }
      `}</style>
    </section>
  )
}
