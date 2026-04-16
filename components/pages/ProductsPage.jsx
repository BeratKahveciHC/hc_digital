'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Mail, ChevronDown } from 'lucide-react'
import { products } from '../../data/products'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
// SEO handled by Next.js metadata

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
})

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-6 py-5 text-left group"
      >
        <span className="text-sm font-semibold text-dark group-hover:text-primary transition-colors duration-200 leading-snug">
          {faq.question}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 mt-0.5 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </div>
  )
}

export default function ProductsPage() {
  const { lang } = useLang()
  const t = i18n[lang]
  const tp = t.productsPage
  const [activeSlug, setActiveSlug] = useState(products[0].slug)

  const active = products.find((p) => p.slug === activeSlug)
  const pd = lang === 'en' && active.en ? { ...active, ...active.en } : active

  return (
    <div className="bg-white text-dark">
      <Header />

      {/* ══════════════════════════════════════════════
          BANNER — Başlık + Ürün Seçici Kartlar
      ══════════════════════════════════════════════ */}
      <section className="bg-dark pt-20 relative overflow-hidden pb-0">
        <div aria-hidden className="pointer-events-none select-none absolute inset-0 flex items-center justify-center -rotate-12">
          <span className="text-[55vw] font-black text-white/4 leading-none tracking-tighter">HC</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16 relative">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/30 font-medium mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">
              {lang === 'en' ? 'Home' : 'Ana Sayfa'}
            </Link>
            <span>/</span>
            <span className="text-white/60">{tp.breadcrumb}</span>
          </div>

          {/* Başlık */}
          <motion.div {...fadeUp(0.05)} className="mb-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              {tp.overline}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {lang === 'en' ? 'Our Products' : 'Ürünlerimiz'}
            </h1>
          </motion.div>

          {/* Ürün seçici kartlar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
            {products.map((p, i) => {
              const data = lang === 'en' && p.en ? { ...p, ...p.en } : p
              const isActive = p.slug === activeSlug
              return (
                <motion.button
                  key={p.slug}
                  {...fadeUp(0.1 + i * 0.05)}
                  onClick={() => setActiveSlug(p.slug)}
                  className={`group relative flex flex-col items-start gap-3 p-4 md:p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white border-white text-dark shadow-lg'
                      : 'bg-white/8 border-white/10 hover:bg-white/12 hover:border-white/20'
                  }`}
                >
                  {/* Renk noktası */}
                  <div className={`w-2 h-2 rounded-full ${p.dot} ${isActive ? '' : 'opacity-60'}`} />

                  {/* Başlık */}
                  <span className={`text-xs md:text-sm font-bold leading-snug transition-colors duration-200 ${
                    isActive ? 'text-dark' : 'text-white/80'
                  }`}>
                    {data.title}
                  </span>

                  {/* Kategori */}
                  <span className={`text-[10px] font-medium leading-snug transition-colors duration-200 ${
                    isActive ? 'text-dark/40' : 'text-white/35'
                  }`}>
                    {data.category}
                  </span>

                  {/* Aktif göstergesi */}
                  {isActive && (
                    <motion.div
                      layoutId="activeProductIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-dark/20 rounded-full"
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Seçili ürün özet şeridi */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlug + '-strip'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4 mt-6 pb-6 border-t border-white/10 pt-5"
            >
              <span className={`w-2.5 h-2.5 rounded-full ${active.dot} shrink-0`} />
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-white/40">
                  {pd.category}
                </p>
                <p className="text-sm text-white/60 mt-0.5">{pd.tagline}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          İÇERİK — Seçili ürün detayı
      ══════════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlug}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >

          {/* ── Hero: görsel + başlık / istatistikler ── */}
          <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Sol: Metin */}
                <div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold tracking-wide mb-6 ${active.color}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${active.dot}`} />
                    {pd.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight tracking-tight mb-5">
                    {pd.title}
                  </h2>
                  <p className="text-base text-slate-500 leading-relaxed mb-8">
                    {pd.description}
                  </p>

                  {/* İstatistikler */}
                  {pd.stats && (
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                      {pd.stats.map((s, i) => (
                        <div key={i}>
                          <p className="text-2xl font-black text-dark leading-none mb-1">{s.value}</p>
                          <p className="text-xs text-slate-400 leading-snug">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Ürün sayfasına link */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/urunler/${active.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors duration-200"
                    >
                      {lang === 'en' ? 'Full product details' : 'Ürün detay sayfası'}
                      <ArrowRight size={13} />
                    </Link>
                    {active.website && (
                      <a
                        href={active.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-dark transition-colors duration-200"
                      >
                        <ArrowUpRight size={13} />
                        {active.website.replace('https://', '')}
                      </a>
                    )}
                  </div>
                </div>

                {/* Sağ: Görsel */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100/80 aspect-video">
                  <img
                    src={active.heroImage || active.image}
                    alt={pd.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Uzun Açıklama ── */}
          {pd.longDescription && (
            <section className="py-16 md:py-20 border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-20">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                      {lang === 'en' ? 'About the Product' : 'Ürün Hakkında'}
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    {pd.longDescription.map((para, i) => (
                      <p key={i} className="text-lg md:text-xl text-slate-600 leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ── Özellikler ── */}
          {pd.features && pd.features.length > 0 && (
            <section className="py-16 md:py-24 border-t border-slate-100 bg-slate-50">
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-12">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
                    {lang === 'en' ? 'Key Features' : 'Öne Çıkan Özellikler'}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark">
                    {lang === 'en' ? 'What it does' : 'Neler yapıyor'}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden">
                  {pd.features.map((f, i) => (
                    <div key={i} className="bg-white p-7 flex flex-col gap-3 hover:bg-slate-50 transition-colors duration-200">
                      <span className="text-3xl font-black text-slate-100 leading-none select-none">{f.number}</span>
                      <h3 className="text-sm font-bold text-dark">{f.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── Nasıl Çalışır ── */}
          {pd.howItWorks && pd.howItWorks.length > 0 && (
            <section className="py-20 md:py-28 border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
                      {lang === 'en' ? 'How It Works' : 'Nasıl Çalışır'}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-dark leading-tight">
                      {lang === 'en' ? 'Getting started' : 'Başlangıç süreci'}
                    </h2>
                  </div>
                  <div className="flex flex-col divide-y divide-slate-100">
                    {pd.howItWorks.map((step, i) => (
                      <div key={i} className="grid grid-cols-[48px_1fr] gap-6 py-7 first:pt-0 last:pb-0">
                        <span className="text-3xl font-black text-slate-100 leading-none pt-1 select-none">
                          {String(step.step).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="text-base font-bold text-dark mb-1.5">{step.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ── Faydalar ── */}
          {pd.benefits && pd.benefits.length > 0 && (
            <section className="py-16 md:py-24 border-t border-slate-100 bg-slate-50">
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-12">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
                    {lang === 'en' ? 'Benefits' : 'Faydaları'}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark">
                    {lang === 'en' ? 'Why it matters' : 'Neden önemli'}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pd.benefits.map((b, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
                      <div className={`w-2 h-2 rounded-full ${active.dot} mb-5`} />
                      <h3 className="text-sm font-bold text-dark mb-2">{b.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{b.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── SSS ── */}
          {pd.faqs && pd.faqs.length > 0 && (
            <section className="py-16 md:py-20 border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-20">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">SSS</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-dark leading-tight">
                      {lang === 'en' ? 'Frequently asked' : 'Sık sorulan sorular'}
                    </h2>
                  </div>
                  <div>
                    {pd.faqs.map((faq, i) => (
                      <FAQItem key={i} faq={faq} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

        </motion.div>
      </AnimatePresence>

      {/* ══════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════ */}
      <section className="relative bg-linear-to-b from-slate-100 to-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 text-slate-500 text-xs font-semibold tracking-widest uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {t.cta.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight">
            {t.cta.h2}
          </h2>
          <p className="mt-7 text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {t.cta.paragraph}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-dark text-white text-[15px] font-bold hover:bg-primary transition-colors duration-300 shadow-md hover:-translate-y-0.5"
            >
              <Mail size={16} />
              {t.cta.ctaPrimary}
              <ArrowRight size={15} />
            </Link>
            <a
              href="mailto:info@hcdijital.com.tr"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-slate-300 text-slate-600 text-[15px] font-semibold hover:border-dark hover:text-dark transition-all duration-200"
            >
              <Mail size={15} />
              {t.cta.ctaSecondary}
            </a>
          </div>
          <p className="mt-8 text-slate-400 text-sm">{t.cta.note}</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
