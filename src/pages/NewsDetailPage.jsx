import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { CalendarDays, ArrowLeft } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { news } from '../data/news'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import SEO from '../components/SEO'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

function formatDate(dateStr, lang) {
  const date = new Date(dateStr)
  return date.toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function NewsDetailPage() {
  const { slug } = useParams()
  const { lang } = useLang()

  const item = news.find((n) => n.slug === slug)

  // Haber bulunamazsa liste sayfasına yönlendir
  if (!item) return <Navigate to="/haberler" replace />

  // Diğer haberler (mevcut haber hariç, en yeni 3 tane)
  const others = news
    .filter((n) => n.slug !== slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  return (
    <div className="bg-white text-dark">
      <SEO
        title={`${item.title[lang]} | HC Dijital`}
        description={item.summary[lang]}
        canonical={`/haberler/${slug}`}
        lang={lang}
      />
      <Header />

      {/* ── Banner ── */}
      <section className="bg-dark pt-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none select-none absolute inset-0 flex items-center justify-center -rotate-12">
          <span className="text-[55vw] font-black text-white/4 leading-none tracking-tighter">HC</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-14 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/30 font-medium mb-8">
            <Link to="/" className="hover:text-white/60 transition-colors">
              {lang === 'en' ? 'Home' : 'Ana Sayfa'}
            </Link>
            <span>/</span>
            <Link to="/haberler" className="hover:text-white/60 transition-colors">
              {lang === 'en' ? 'News' : 'Haberler'}
            </Link>
            <span>/</span>
            <span className="text-white/60 truncate max-w-[200px]">{item.title[lang]}</span>
          </div>

          {/* Sol yazı + Sağ görsel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

            {/* Sol: Metin */}
            <motion.div {...fadeUp(0)}>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/80 text-[11px] font-bold tracking-wide">
                  {item.category[lang]}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-white/40">
                  <CalendarDays size={12} />
                  {formatDate(item.date, lang)}
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug">
                {item.title[lang]}
              </h1>

              <p className="mt-4 text-sm md:text-base text-white/50 leading-relaxed">
                {item.summary[lang]}
              </p>
            </motion.div>

            {/* Sağ: Görsel */}
            {item.image ? (
              <motion.div {...fadeUp(0.1)} className="rounded-2xl overflow-hidden aspect-video">
                <img src={item.image} alt={item.title[lang]} className="w-full h-full object-cover" />
              </motion.div>
            ) : (
              <motion.div {...fadeUp(0.1)} className="rounded-2xl overflow-hidden aspect-video bg-white/5 flex items-center justify-center">
                <span className="text-6xl font-black text-white/10 tracking-tighter select-none">HC</span>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Makale İçeriği ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {item.content[lang].map((para, i) => (
              <p key={i} className="text-lg md:text-xl text-slate-600 leading-relaxed">
                {para}
              </p>
            ))}
          </motion.div>

          {/* Geri dön */}
          <div className="mt-16 pt-8 border-t border-slate-100">
            <Link
              to="/haberler"
              className="inline-flex items-center gap-2 text-sm font-semibold text-dark/50 hover:text-dark transition-colors duration-200"
            >
              <ArrowLeft size={15} />
              {lang === 'en' ? 'Back to News' : 'Haberlere Dön'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Diğer Haberler ── */}
      {others.length > 0 && (
        <section className="py-16 md:py-20 border-t border-slate-100 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-xl font-bold text-dark mb-8">
              {lang === 'en' ? 'Other News' : 'Diğer Haberler'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  to={`/haberler/${other.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {other.image ? (
                    <div className="aspect-video overflow-hidden bg-slate-100">
                      <img src={other.image} alt={other.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  ) : (
                    <div className="aspect-video bg-linear-to-br from-dark to-primary/80 flex items-center justify-center">
                      <span className="text-4xl font-black text-white/10 tracking-tighter select-none">HC</span>
                    </div>
                  )}
                  <div className="p-5 flex flex-col gap-2">
                    <span className="text-[11px] text-slate-400">{formatDate(other.date, lang)}</span>
                    <h3 className="text-sm font-bold text-dark leading-snug group-hover:text-primary transition-colors duration-200">
                      {other.title[lang]}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
