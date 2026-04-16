import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
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

export default function NewsPage() {
  const { lang } = useLang()

  // En yeniden eskiye sırala
  const sorted = [...news].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="bg-white text-dark">
      <SEO
        title={lang === 'tr' ? 'Haberler | HC Dijital' : 'News | HC Digital'}
        description={
          lang === 'tr'
            ? 'HC Dijital\'den en güncel haberler, duyurular ve sektörel gelişmeler.'
            : 'Latest news, announcements and industry updates from HC Digital.'
        }
        canonical="/haberler"
        lang={lang}
      />
      <Header />

      {/* ── Banner ── */}
      <section className="bg-dark pt-20 relative overflow-hidden pb-0">
        <div aria-hidden className="pointer-events-none select-none absolute inset-0 flex items-center justify-center -rotate-12">
          <span className="text-[55vw] font-black text-white/4 leading-none tracking-tighter">HC</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/30 font-medium mb-8">
            <Link to="/" className="hover:text-white/60 transition-colors">
              {lang === 'en' ? 'Home' : 'Ana Sayfa'}
            </Link>
            <span>/</span>
            <span className="text-white/60">{lang === 'en' ? 'News' : 'Haberler'}</span>
          </div>

          <motion.div {...fadeUp(0.05)}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              {lang === 'en' ? 'Latest Updates' : 'Son Gelişmeler'}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {lang === 'en' ? 'News' : 'Haberler'}
            </h1>
          </motion.div>

          <div className="mt-10 pb-0 border-t border-white/10 pt-5">
            <p className="text-sm text-white/40">
              {sorted.length} {lang === 'en' ? 'articles' : 'haber'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Haber Listesi ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {sorted.length === 0 ? (
            <p className="text-slate-400 text-center py-24">
              {lang === 'en' ? 'No news yet.' : 'Henüz haber yok.'}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map((item, i) => (
                <motion.div
                  key={item.slug}
                  {...fadeUp(0.05 + i * 0.06)}
                >
                  <Link
                    to={`/haberler/${item.slug}`}
                    className="group flex flex-col h-full rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Görsel */}
                    {item.image ? (
                      <div className="aspect-video overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title[lang]}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-linear-to-br from-dark to-primary/80 flex items-center justify-center">
                        <span className="text-5xl font-black text-white/10 tracking-tighter select-none">HC</span>
                      </div>
                    )}

                    {/* İçerik */}
                    <div className="flex flex-col flex-1 p-6 gap-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/8 text-primary text-[11px] font-bold tracking-wide">
                          {item.category[lang]}
                        </span>
                        <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
                          <CalendarDays size={12} />
                          {formatDate(item.date, lang)}
                        </span>
                      </div>

                      <h2 className="text-base font-bold text-dark leading-snug group-hover:text-primary transition-colors duration-200">
                        {item.title[lang]}
                      </h2>

                      <p className="text-sm text-slate-500 leading-relaxed flex-1">
                        {item.summary[lang]}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mt-2">
                        <span>{lang === 'en' ? 'Read more' : 'Devamını oku'}</span>
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
