import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { products } from '../data/products'
import { useLang } from '../context/LanguageContext'
import { i18n } from '../data/i18n'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

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
    <span style={{ color: '#4EA8FF', textShadow: '0 0 12px rgba(78,168,255,0.9), 0 0 30px rgba(78,168,255,0.6), 0 0 60px rgba(78,168,255,0.3)' }}>
      {displayed}
      <span className="animate-pulse" style={{ display: 'inline-block', width: '3px', marginLeft: '4px', background: '#4EA8FF', boxShadow: '0 0 8px #4EA8FF', verticalAlign: 'baseline', height: '0.85em' }} />
    </span>
  )
}

export default function ProductsPage() {
  const { lang } = useLang()
  const t = i18n[lang]
  const tp = t.productsPage
  const cats = t.categories

  const [activeIndex, setActiveIndex] = useState(0)

  const getProductData = (p) => lang === 'en' && p.en ? { ...p, ...p.en } : p

  const filtered =
    activeIndex === 0
      ? products
      : products.filter((p) => getProductData(p).category === cats[activeIndex])

  const featured = filtered.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  return (
    <div className="bg-white text-dark">
      <Header />

      {/* ── Page Hero ── */}
      <section className="bg-dark pt-20 relative overflow-hidden">

        {/* Dekoratif arka plan yazısı */}
        <div
          aria-hidden
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-center -rotate-12"
        >
          <span className="text-[55vw] font-black text-white/4 leading-none tracking-tighter">
            HC
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16 relative">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/30 font-medium mb-8">
            <Link to="/" className="hover:text-white/60 transition-colors">{i18n[lang].productDetail.breadcrumbHome}</Link>
            <span>/</span>
            <span className="text-white/60">{tp.breadcrumb}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs font-semibold tracking-[0.25em] uppercase text-white/30 mb-4"
              >
                {tp.overline}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight"
              >
                {tp.h1Line1}<br />
                <TypewriterNeon words={tp.h1Line2} />
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-sm text-white/40 leading-relaxed max-w-xs lg:text-right lg:pb-2"
            >
              {tp.paragraph}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Filter & Products ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2.5 mb-14">
            {cats.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveIndex(idx)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeIndex === idx
                    ? 'bg-dark text-white border-dark'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-sky hover:text-dark'
                }`}
                style={activeIndex === idx ? { boxShadow: '0 0 12px rgba(78,168,255,0.5), 0 0 30px rgba(78,168,255,0.2)' } : {}}
              >
                {cat}
                {idx === 0 && (
                  <span className={`ml-2 text-xs font-bold ${activeIndex === 0 ? 'text-white/50' : 'text-slate-400'}`}>
                    {products.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {/* Featured Card */}
              {featured && (() => {
                const fd = getProductData(featured)
                return (
                  <Link
                    to={`/urunler/${featured.slug}`}
                    className="card-neon group flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-slate-200 mb-6 bg-white"
                  >
                    {/* Image */}
                    <div className="relative lg:w-[55%] aspect-video lg:aspect-auto overflow-hidden bg-slate-100 shrink-0">
                      <img
                        src={featured.image}
                        alt={fd.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-transparent to-dark/10" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between p-10 lg:p-14 flex-1">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold tracking-wide ${featured.color}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${featured.dot}`} />
                            {fd.category}
                          </span>
                          <span className="text-xs font-semibold text-white bg-dark px-3 py-1.5 rounded-full">
                            {tp.featuredBadge}
                          </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark leading-snug mb-4 group-hover:text-primary transition-colors duration-200">
                          {fd.title}
                        </h2>
                        <p className="text-base text-slate-500 leading-relaxed max-w-md">
                          {fd.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-2 mt-8 mb-8">
                          {fd.tags.map((tag) => (
                            <span key={tag} className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-dark group-hover:text-primary transition-colors duration-200">
                          {tp.viewProduct}
                          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })()}

              {/* Products Grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {rest.map((product, i) => {
                    const pd = getProductData(product)
                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: i * 0.04 }}
                      >
                        <Link
                          to={`/urunler/${product.slug}`}
                          className="card-neon group flex flex-col rounded-3xl overflow-hidden border border-slate-200 bg-white h-full"
                        >
                          {/* Image */}
                          <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
                            <img
                              src={product.image}
                              alt={pd.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border bg-white/95 backdrop-blur-sm text-xs font-bold tracking-wide ${product.color}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${product.dot}`} />
                                {pd.category}
                              </span>
                            </div>
                            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 shadow-sm">
                              <ArrowUpRight size={15} className="text-dark" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex flex-col flex-1 p-8">
                            <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-200">
                              {pd.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed flex-1">
                              {pd.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-6">
                              {pd.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-500">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-primary transition-colors duration-200">
                              {tp.viewProduct}
                              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              )}

              {filtered.length === 0 && (
                <div className="text-center py-24">
                  <p className="text-slate-400 text-sm">{tp.emptyText}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  )
}
