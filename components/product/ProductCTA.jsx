'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: 'easeOut' },
})

export default function ProductCTA() {
  const { lang } = useLang()
  const t = i18n[lang].productDetail

  return (
    <section className="bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <motion.div {...fadeUp()}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">{t.ctaOverline}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-snug max-w-lg">{t.ctaH2}</h2>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-md">{t.ctaP}</p>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-dark text-white text-sm font-semibold hover:bg-primary transition-colors duration-300"
            >
              {t.ctaBtn1}
              <ArrowUpRight size={15} />
            </Link>
            <Link
              href="/urunler"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-300 text-dark text-sm font-semibold hover:border-dark transition-colors duration-200"
            >
              {t.ctaBtn2}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
