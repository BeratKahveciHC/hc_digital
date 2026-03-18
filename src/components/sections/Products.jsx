import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { products } from '../../data/products'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'

export default function Products() {
  const { lang } = useLang()
  const t = i18n[lang].productsSection

  return (
    <section className="relative bg-white py-24" id="urunler">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Başlık ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              {t.overline}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-dark leading-[1.1] tracking-tight max-w-lg">
              {t.h2Line1} <br /> {t.h2Line2}
            </h2>
          </div>
          <Link
            to="/urunler"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 border-b border-slate-300 pb-0.5 hover:text-dark hover:border-dark transition-colors duration-200 self-start md:self-auto"
          >
            {t.allProducts}
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} lang={lang} viewLabel={t.viewProduct} />
          ))}
        </div>

      </div>

      {/* Alt geçiş — Products (white) → CTA (slate-100) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-100 to-transparent pointer-events-none" />
    </section>
  )
}

function ProductCard({ product, index, lang, viewLabel }) {
  const p = lang === 'en' && product.en ? { ...product, ...product.en } : product

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
    >
      <Link
        to={`/urunler/${product.slug}`}
        className="group flex flex-col rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 bg-white hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 h-full"
      >
        {/* Görsel */}
        <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
          {product.image ? (
            <img
              src={product.image}
              alt={p.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center">
              <span className="text-slate-300 text-6xl font-black select-none">
                {p.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}

          {/* Kategori etiketi */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-bold tracking-widest text-dark uppercase shadow-sm">
              {p.category}
            </span>
          </div>

          {/* Ok ikonu */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 shadow-sm">
            <ArrowUpRight size={14} className="text-dark" />
          </div>
        </div>

        {/* İçerik */}
        <div className="flex flex-col flex-1 p-7">
          <h3 className="text-lg font-bold text-dark mb-2.5 group-hover:text-primary transition-colors duration-200">
            {p.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed flex-1">
            {p.description}
          </p>

          {/* Etiketler */}
          <div className="flex flex-wrap gap-2 mt-5">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Alt link */}
          <div className="mt-5 pt-5 border-t border-slate-100 flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-primary transition-colors duration-200">
            {viewLabel}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
