'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowUpRight, Clock, Smartphone, BarChart3, Zap, ShieldCheck, TrendingUp, Brain, FileText, Users } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'

import _airxHero    from '../../assets/images/products/airx-hero.webp'
import _tercumedHero from '../../assets/images/products/tercumed-hero.webp'
import _butceHero    from '../../assets/images/products/butce-hero.webp'
const s = (x) => x?.src ?? x
const airxHero    = s(_airxHero)
const tercumedHero = s(_tercumedHero)
const butceHero   = s(_butceHero)

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
    image: butceHero,
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
    <section className="relative w-full h-svh overflow-hidden bg-dark">

      {/* ── Slayt görseli ── */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={slide.id + '-bg'}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.32, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={title}
            className="w-full h-full object-cover object-center md:object-top"
            style={{ animation: `kenBurns ${SLIDE_DURATION}ms ease-out forwards` }}
          />

          {/* Gradient katmanları */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/15 md:from-black/85 md:via-black/35 md:to-black/10" />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent md:from-black/50" />
          <div className="absolute inset-0 bg-linear-to-r from-black/55 via-transparent to-transparent md:from-black/45" />
        </motion.div>
      </AnimatePresence>

      {/* ── Header padding ── */}
      <div className="relative z-10 flex flex-col h-full pt-16 md:pt-20">

        {/* ── Progress çizgileri (üst) ── */}
        <div className="flex items-center gap-1.5 px-6 lg:px-12 pt-3">
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
        <div className="flex-1 flex flex-col justify-end pb-8 md:pb-14 lg:pb-16 xl:pb-20 px-5 md:px-6 lg:px-12">

          {/* Sol metin + Sağ özellikler */}
          <div className="flex items-end justify-between gap-6 lg:gap-8">

            {/* Sol: metin içeriği */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={slide.id + '-content'}
                custom={direction}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-xl"
              >
                {/* Kategori */}
                <div className="mb-3 lg:mb-4">
                  <span className="inline-flex items-center px-3 py-1 lg:py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/15 text-[10px] lg:text-[11px] font-bold tracking-[0.18em] text-white/90 uppercase">
                    {slide.category[lang]}
                  </span>
                </div>

                {/* Başlık */}
                <h1
                  className="font-bold text-white leading-[1.05] tracking-tight mb-3 lg:mb-4"
                  style={{ whiteSpace: 'pre-line', fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}
                >
                  {title}
                </h1>

                {/* Tagline */}
                <p
                  className="font-medium text-white/75 leading-snug mb-3 max-w-xl"
                  style={{ whiteSpace: 'pre-line', fontSize: 'clamp(0.8rem, 2vw, 1.25rem)' }}
                >
                  {slide.tagline[lang]}
                </p>

                {/* Açıklama */}
                <p className="text-[11px] md:text-xs lg:text-sm text-white/50 leading-relaxed mb-5 lg:mb-7 max-w-lg hidden sm:block">
                  {slide.description[lang]}
                </p>

                {/* CTA */}
                <Link
                  href={slide.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-full bg-white text-dark text-sm font-semibold hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                >
                  {slide.cta[lang]}
                  <ArrowUpRight size={15} />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Sağ: özellik kartları */}
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={slide.id + '-features'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="hidden lg:flex flex-col gap-2 lg:gap-2.5 w-56 xl:w-72 shrink-0"
              >
                {slide.features.map((f, i) => {
                  const Icon = f.icon
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 xl:px-5 xl:py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/20"
                    >
                      <div className="shrink-0 w-9 h-9 xl:w-11 xl:h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shadow-inner">
                        <Icon size={16} className="text-white xl:hidden" />
                        <Icon size={20} className="text-white hidden xl:block" />
                      </div>
                      <div>
                        <p className="text-[12px] xl:text-[13px] font-bold text-white leading-tight tracking-wide">{f.label[lang]}</p>
                        <p className="text-[11px] xl:text-[12px] text-white/60 leading-snug mt-0.5 xl:mt-1">{f.desc[lang]}</p>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Navigasyon (alt) ── */}
          <div className="flex items-center justify-between mt-4 lg:mt-8 xl:mt-10">

            {/* Slayt sayacı */}
            <div className="flex items-baseline gap-1">
              <span className="text-xl lg:text-2xl font-black text-white tabular-nums leading-none">
                {String(current + 1).padStart(2, '0')}
              </span>
              <span className="text-white/30 text-xs lg:text-sm font-medium">
                / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Ok butonları */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 lg:w-11 lg:h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                aria-label="Önceki"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 lg:w-11 lg:h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                aria-label="Sonraki"
              >
                <ChevronRight size={16} />
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
