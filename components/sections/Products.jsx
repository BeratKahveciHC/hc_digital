'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { products } from '../../data/products'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'

export default function Products() {
  const { lang } = useLang()
  const t = i18n[lang].productsSection
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + products.length) % products.length)
  const next = () => setActive((i) => (i + 1) % products.length)

  const getPos = (i) => {
    let diff = i - active
    if (diff > products.length / 2) diff -= products.length
    if (diff < -products.length / 2) diff += products.length
    if (diff === 0)  return 'center'
    if (diff === 1)  return 'right'
    if (diff === 2)  return 'far-right'
    if (diff === -1) return 'left'
    if (diff === -2) return 'far-left'
    return 'hidden'
  }

  return (
    <section className="relative bg-white py-24 overflow-hidden" id="urunler">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Başlık ── */}
        <div className="flex flex-col items-center text-center mb-16">
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
            {t.h2Line1} {t.h2Line2}
          </p>
          <Link
            href="/urunler"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 border-b border-slate-300 pb-0.5 hover:text-dark hover:border-dark transition-colors duration-200"
          >
            {t.allProducts}
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* ── Kart Fanı ── */}
        <div className="relative flex items-center justify-center h-96 sm:h-110 md:h-120 lg:h-136 xl:h-150 2xl:h-170">

          {products.map((product, i) => {
            const pos = getPos(i)
            if (pos === 'hidden') return null
            const p = lang === 'en' && product.en ? { ...product, ...product.en } : product

            const variants = {
              'center':     { x: '0%',   rotate: 0,   scale: 1,    filter: 'blur(0px)',   opacity: 1,    zIndex: 20 },
              'left':       { x: '-58%', rotate: -12, scale: 0.87, filter: 'none', opacity: 0.85, zIndex: 15 },
              'far-left':   { x: '-95%', rotate: -22, scale: 0.74, filter: 'none', opacity: 0.65, zIndex: 10 },
              'right':      { x: '58%',  rotate: 12,  scale: 0.87, filter: 'none', opacity: 0.85, zIndex: 15 },
              'far-right':  { x: '95%',  rotate: 22,  scale: 0.74, filter: 'none', opacity: 0.65, zIndex: 10 },
            }

            return (
              <motion.div
                key={product.id}
                animate={variants[pos]}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="absolute w-80 md:w-130 cursor-pointer"
                onClick={() => pos !== 'center' && setActive(i)}
                style={{ transformOrigin: 'bottom center' }}
              >
                <Link
                  href={pos === 'center' ? `/urunler/${product.slug}` : '#'}
                  onClick={(e) => pos !== 'center' && e.preventDefault()}
                  className="group block rounded-3xl overflow-hidden bg-white"
                  style={pos === 'center' ? {
                    boxShadow: '0 0 0 1.5px rgba(78,168,255,0.5), 0 20px 60px rgba(0,0,0,0.15), 0 0 60px rgba(78,168,255,0.35), 0 0 120px rgba(78,168,255,0.15)'
                  } : {
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                  }}
                >
                  {/* Görsel */}
                  <div className="relative w-full aspect-video overflow-hidden bg-slate-800">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white/20 text-6xl font-black select-none">
                          {p.title.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-bold tracking-widest text-dark uppercase shadow-sm">
                        {p.category}
                      </span>
                    </div>
                  </div>

                  {/* İçerik */}
                  <div className="p-7">
                    <h3 className="text-lg font-bold text-dark mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                      {p.tagline}
                    </p>
                    {pos === 'center' && (
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        {t.viewProduct}
                        <ArrowUpRight size={14} />
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* ── Navigasyon ── */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="btn-neon w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-dark hover:text-white hover:border-dark transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-slate-200 hover:bg-slate-300'
                }`}
                style={i === active ? { boxShadow: '0 0 8px rgba(78,168,255,0.8), 0 0 20px rgba(78,168,255,0.4)' } : {}}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="btn-neon w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-dark hover:text-white hover:border-dark transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  )
}
