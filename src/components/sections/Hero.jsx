import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'


function TypewriterNeon({ words }) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 90)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 55)
      } else {
        setWordIndex((i) => (i + 1) % words.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, wordIndex, words])

  return (
    <span
      style={{
        color: '#7dd3fc',
        textShadow: '0 0 8px #38bdf8, 0 0 20px #38bdf8, 0 0 45px #0ea5e9, 0 0 80px #0284c7',
      }}
    >
      {displayed}
      <span
        className="animate-pulse"
        style={{
          display: 'inline-block',
          width: '3px',
          marginLeft: '4px',
          background: '#38bdf8',
          boxShadow: '0 0 8px #38bdf8, 0 0 20px #38bdf8',
          verticalAlign: 'baseline',
          height: '0.85em',
        }}
      />
    </span>
  )
}

const statsData = [
  { target: 1200, suffix: '+', format: (n) => n >= 1000 ? Math.floor(n / 1000) + '.' + String(Math.floor(n % 1000)).padStart(3, '0') : String(Math.floor(n)) },
  { target: 40,   suffix: '+', format: (n) => String(Math.floor(n)) },
  { target: 10,   suffix: '+', format: (n) => String(Math.floor(n)) },
]

function CountUp({ target, suffix, format, delay = 0 }) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      started.current = true
      const duration = 1800
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(eased * target)
        if (progress < 1) requestAnimationFrame(tick)
        else setValue(target)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(timer)
  }, [target, delay])

  return <>{format(value)}{suffix}</>
}

function FluorescentLamp() {
  return (
    <div className="relative flex flex-col items-center w-full">

      {/* Aşağı yayılan ışık konisi */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(119vw,1100px)] md:w-[min(140vw,1100px)] h-192 pointer-events-none origin-center"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(210,228,255,0.45) 0%, rgba(200,222,255,0.28) 15%, rgba(185,212,255,0.14) 35%, rgba(170,205,255,0.06) 58%, rgba(155,195,255,0.02) 78%, transparent 100%)',
          clipPath: 'polygon(18% 0%, 82% 0%, 118% 100%, -18% 100%)',
          filter: 'blur(32px)',
        }}
      />

      {/* Tüp arka glow */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-[min(75vw,700px)] md:w-[min(88vw,700px)] h-1 rounded-full blur-md origin-center"
        style={{ background: 'rgba(180,210,255,1)' }}
      />

      {/* Tüpün kendisi — ortadan iki yana uzama */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 z-20 w-[min(75vw,700px)] md:w-[min(88vw,700px)] rounded-full origin-center"
        style={{
          height: '1.5px',
          background: 'linear-gradient(to right, transparent 0%, rgba(230,240,255,0.95) 10%, rgba(255,255,255,1) 50%, rgba(230,240,255,0.95) 90%, transparent 100%)',
          boxShadow: '0 0 6px 2px rgba(200,225,255,0.95), 0 0 20px 7px rgba(160,200,255,0.65), 0 0 45px 16px rgba(120,180,255,0.38), 0 0 80px 30px rgba(100,170,255,0.15)',
        }}
      />

      {/* Tüp uç ışıkları */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
        className="absolute top-0 z-10 flex items-center justify-between w-[min(75vw,700px)] md:w-[min(88vw,700px)]"
      >
        <div className="w-2 h-2 rounded-full blur-sm" style={{ background: 'rgba(180,210,255,0.8)' }} />
        <div className="w-2 h-2 rounded-full blur-sm" style={{ background: 'rgba(180,210,255,0.8)' }} />
      </motion.div>

    </div>
  )
}

export default function Hero() {
  const { lang } = useLang()
  const t = i18n[lang].hero

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center md:justify-evenly overflow-hidden bg-dark">
      {/* Nokta desen */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Alt geçiş */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-linear-to-t from-dark to-transparent" />

      <div className="relative z-20 flex w-full flex-col items-center px-6 py-24 md:py-0 text-center">
        {/* Floresan lamba */}
        <div className="mb-14 flex w-full flex-col items-center">
          <FluorescentLamp />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-bold leading-[1.05] tracking-tight text-white"
        >
          <span className="mb-4 block text-xl font-bold text-white md:text-2xl">{t.h1Line1}</span>
          <span className="block text-5xl whitespace-nowrap md:text-7xl lg:text-8xl"><TypewriterNeon words={t.h1Line2} /></span>
          <span className="block text-5xl md:text-7xl lg:text-8xl">{t.h1Line3}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-8 max-w-xl text-base font-bold leading-relaxed text-white md:text-lg"
        >
          {t.paragraph}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex items-center gap-4 md:gap-8"
        >
          <Link
            to="/iletisim"
            className="btn-neon inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] md:px-7 md:py-3 md:text-[16px] font-semibold text-dark shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90 whitespace-nowrap"
          >
            {t.ctaPrimary}
            <ArrowRight size={13} className="md:hidden" />
            <ArrowRight size={15} className="hidden md:block" />
          </Link>
          <a
            href="#urunler"
            className="btn-neon inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[13px] md:px-7 md:py-3 md:text-[16px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 whitespace-nowrap"
          >
            {t.ctaSecondary}
            <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-16 flex items-center justify-center gap-14 border-t border-white/8 pt-8"
        >
          {statsData.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-black tracking-tight text-white">
                <CountUp {...stat} delay={1050 + i * 150} />
              </p>
              <p className="mt-1 text-xs font-medium text-white/35">{t.statsLabels[i]}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-6 text-xs tracking-wide text-white/20"
        >
          {t.trustText}
        </motion.p>
      </div>

    </section>
  )
}
