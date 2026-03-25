import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, ChevronUp, ChevronDown, BarChart2, Code2, Brain, FileBarChart, Lightbulb, FlaskConical } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { i18n } from '../data/i18n'
import { services } from '../data/services'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const serviceIcons = [Code2, FileBarChart, Lightbulb, Brain, FlaskConical, BarChart2]

const accentColors = [
  { icon: 'text-primary', bg: 'bg-primary/8', num: 'text-primary/15' },
  { icon: 'text-accent',  bg: 'bg-accent/8',  num: 'text-accent/15' },
  { icon: 'text-sky',     bg: 'bg-sky/8',     num: 'text-sky/15' },
  { icon: 'text-primary', bg: 'bg-primary/8', num: 'text-primary/15' },
  { icon: 'text-accent',  bg: 'bg-accent/8',  num: 'text-accent/15' },
  { icon: 'text-sky',     bg: 'bg-sky/8',     num: 'text-sky/15' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

function ServiceFan({ serviceItems, lang }) {
  const [active, setActive] = useState(0)
  const total = serviceItems.length

  const prev = () => setActive((i) => (i - 1 + total) % total)
  const next = () => setActive((i) => (i + 1) % total)

  const getPos = (i) => {
    let diff = i - active
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    if (diff === 0)  return 'center'
    if (diff === 1)  return 'bottom'
    if (diff === -1) return 'top'
    return 'hidden'
  }

  const variants = {
    'center': { y: '0%',   rotate: 0,  scale: 1,    opacity: 1,    zIndex: 20 },
    'top':    { y: '-54%', rotate: -7, scale: 0.88, opacity: 0.85, zIndex: 15 },
    'bottom': { y: '54%',  rotate: 7,  scale: 0.88, opacity: 0.85, zIndex: 15 },
  }

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Fan container */}
      <div className="relative flex items-center justify-center w-full" style={{ height: '520px' }}>
        {serviceItems.map((service, i) => {
          const pos = getPos(i)
          if (pos === 'hidden') return null
          const Icon = serviceIcons[i]
          const accent = accentColors[i]

          return (
            <motion.div
              key={i}
              animate={variants[pos]}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="absolute w-85 md:w-220 cursor-pointer"
              onClick={() => pos !== 'center' && setActive(i)}
              style={{ transformOrigin: 'center center' }}
            >
              <Link
                to={pos === 'center' ? `/servisler/${services[i].slug}` : '#'}
                onClick={(e) => pos !== 'center' && e.preventDefault()}
                className="group block rounded-3xl overflow-hidden bg-white"
                style={pos === 'center' ? {
                  boxShadow: '0 0 0 1.5px rgba(78,168,255,0.5), 0 20px 60px rgba(0,0,0,0.15), 0 0 60px rgba(78,168,255,0.35), 0 0 120px rgba(78,168,255,0.15)'
                } : {
                  boxShadow: '0 8px 30px rgba(0,0,0,0.10)'
                }}
              >
                <div className="p-8 md:p-10">
                  {/* Üst satır: ikon + numara */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${accent.bg} flex items-center justify-center`}>
                      <Icon size={22} className={accent.icon} />
                    </div>
                    <span className={`text-5xl font-black leading-none select-none ${accent.num}`}>
                      0{i + 1}
                    </span>
                  </div>

                  {/* İçerik */}
                  <h3 className="text-xl md:text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Sadece aktif kartta link */}
                  {pos === 'center' && (
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      {lang === 'en' ? 'Explore' : 'İncele'}
                      <ArrowUpRight size={14} />
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>

      {/* Navigasyon */}
      <div className="flex items-center gap-6">
        <button
          onClick={prev}
          className="btn-neon w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-dark hover:text-white hover:border-dark transition-all duration-200"
        >
          <ChevronUp size={18} />
        </button>

        <div className="flex items-center gap-2">
          {serviceItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? 'w-2 h-6 bg-primary' : 'w-2 h-2 bg-slate-200 hover:bg-slate-300'
              }`}
              style={i === active ? { boxShadow: '0 0 8px rgba(78,168,255,0.8), 0 0 20px rgba(78,168,255,0.4)' } : {}}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="btn-neon w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-dark hover:text-white hover:border-dark transition-all duration-200"
        >
          <ChevronDown size={18} />
        </button>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const { lang } = useLang()
  const t = i18n[lang]
  const tp = t.servicesPage
  const serviceItems = t.services.items

  return (
    <div className="bg-white text-dark">
      <Header />

      {/* ── Page Hero ── */}
      <section className="bg-dark pt-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none select-none absolute inset-0 flex items-center justify-center -rotate-12">
          <span className="text-[55vw] font-black text-white/4 leading-none tracking-tighter">HC</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16 relative">
          <div className="flex items-center gap-2 text-xs text-white/30 font-medium mb-8">
            <Link to="/" className="hover:text-white/60 transition-colors">
              {lang === 'en' ? 'Home' : 'Ana Sayfa'}
            </Link>
            <span>/</span>
            <span className="text-white/60">{tp.breadcrumb}</span>
          </div>

          {/* ── Nasıl Çalışırız ── */}
          <div className="flex items-end justify-between gap-8 mt-20 mb-8">
            <motion.h2
              {...fadeUp(0.25)}
              className="text-3xl md:text-5xl font-bold text-white"
            >
              {lang === 'en' ? 'How We Work' : 'Nasıl Çalışırız'}
            </motion.h2>
            <motion.p {...fadeUp(0.3)} className="text-sm text-white/40 leading-relaxed max-w-xs text-right hidden md:block">
              {tp.paragraph}
            </motion.p>
          </div>
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-16 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {(lang === 'en'
              ? [
                  { step: '01', title: 'Initial Meeting', desc: 'We analyze your institution\'s needs and goals in a free initial meeting.' },
                  { step: '02', title: 'Research Phase', desc: 'We prepare a customized solution plan with scope, timeline, and pricing.' },
                  { step: '03', title: 'Development Phase', desc: 'We build with agile methods, sharing progress at every iteration.' },
                  { step: '04', title: 'Delivery & Support Phase', desc: 'We deliver with training and provide ongoing technical support.' },
                ]
              : [
                  { step: '01', title: 'İlk Görüşme', desc: 'Kurumunuzun ihtiyaçlarını ve hedeflerini ücretsiz bir ilk görüşmede analiz ederiz.' },
                  { step: '02', title: 'Araştırma Aşaması', desc: 'Kapsam, zaman çizelgesi ve fiyatlandırma ile özelleştirilmiş çözüm planı hazırlarız.' },
                  { step: '03', title: 'Geliştirme Aşaması', desc: 'Çevik yöntemlerle inşa eder, her iterasyonda ilerlemeyi sizinle paylaşırız.' },
                  { step: '04', title: 'Teslim & Destek Aşaması', desc: 'Eğitim ile teslim eder, süregelen teknik destek sağlarız.' },
                ]
            ).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04 }}
                className="bg-white/5 border border-white/8 rounded-2xl p-6 cursor-default shrink-0 w-64 md:w-auto snap-start"
              >
                <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/12 flex items-center justify-center text-white/60 font-black text-xs mb-5">
                  {item.step}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Fan ── */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ServiceFan serviceItems={serviceItems} lang={lang} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
