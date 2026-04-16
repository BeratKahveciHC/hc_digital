'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'
import { products } from '../../data/products'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: 'easeOut' },
})

export default function ProductRelated({ currentSlug }) {
  const { lang } = useLang()
  const t = i18n[lang].productDetail
  const related = products.filter((p) => p.slug !== currentSlug).slice(0, 3)

  return (
    <section className="bg-white py-24 md:py-28 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <motion.div {...fadeUp()}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">{t.relatedOverline}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">{t.relatedH2}</h2>
          </motion.div>
          <Link
            href="/urunler"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 border-b border-slate-300 pb-0.5 hover:text-dark hover:border-dark transition-colors duration-200"
          >
            {t.allProducts}
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((rel, i) => {
            const rd = lang === 'en' && rel.en ? { ...rel, ...rel.en } : rel
            return (
              <motion.div key={rel.slug} {...fadeUp(i * 0.07)}>
                <Link
                  href={`/urunler/${rel.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 bg-white h-full"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img src={rel.image} alt={rd.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-white/95 backdrop-blur-sm text-[10px] font-bold tracking-wide ${rel.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${rel.dot}`} />
                        {rd.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-base font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-200">{rd.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-2">{rd.description}</p>
                    <div className="mt-5 pt-5 border-t border-slate-100 flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-primary transition-colors duration-200">
                      {t.explore}
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
