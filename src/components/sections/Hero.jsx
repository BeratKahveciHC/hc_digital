import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'

const statsValues = ['1.200+', '40+', '10+']

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
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-dark">
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

      <div className="relative z-20 flex w-full flex-col items-center px-6 py-24 text-center">
        {/* Floresan lamba */}
        <div className="mb-14 flex w-full flex-col items-center">
          <FluorescentLamp />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.15em] text-white/50 uppercase"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky" />
          </span>
          {t.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-bold leading-[1.05] tracking-tight text-white"
        >
          <span className="mb-4 block text-xl font-medium text-white/40 md:text-2xl">{t.h1Line1}</span>
          <span className="block text-5xl whitespace-nowrap text-sky md:text-7xl lg:text-8xl">{t.h1Line2}</span>
          <span className="block text-5xl md:text-7xl lg:text-8xl">{t.h1Line3}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/40 md:text-lg"
        >
          {t.paragraph}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex items-center gap-4"
        >
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-dark shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky hover:text-white"
          >
            {t.ctaPrimary}
            <ArrowRight size={15} />
          </Link>
          <a
            href="#urunler"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors duration-200 hover:text-white"
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
          {statsValues.map((value, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-black tracking-tight text-white">{value}</p>
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
