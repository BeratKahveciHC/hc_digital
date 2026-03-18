import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, BarChart2, Code2, Brain, FileBarChart, Lightbulb, FlaskConical } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { i18n } from '../data/i18n'
import { services } from '../data/services'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const serviceIcons = [BarChart2, Code2, Brain, FileBarChart, Lightbulb, FlaskConical]

const serviceAccents = [
  { dot: 'bg-primary', ring: 'border-primary/20', bg: 'bg-primary/5 hover:bg-primary/8', iconBg: 'bg-primary/8 border-primary/12 group-hover:bg-primary group-hover:border-primary', iconText: 'text-primary group-hover:text-white', num: 'text-primary/10' },
  { dot: 'bg-accent',  ring: 'border-accent/20',  bg: 'bg-accent/5 hover:bg-accent/8',   iconBg: 'bg-accent/8 border-accent/12 group-hover:bg-accent group-hover:border-accent',   iconText: 'text-accent group-hover:text-white',  num: 'text-accent/10' },
  { dot: 'bg-sky',     ring: 'border-sky/20',     bg: 'bg-sky/5 hover:bg-sky/8',         iconBg: 'bg-sky/8 border-sky/12 group-hover:bg-sky group-hover:border-sky',               iconText: 'text-sky group-hover:text-white',     num: 'text-sky/10' },
  { dot: 'bg-primary', ring: 'border-primary/20', bg: 'bg-primary/5 hover:bg-primary/8', iconBg: 'bg-primary/8 border-primary/12 group-hover:bg-primary group-hover:border-primary', iconText: 'text-primary group-hover:text-white', num: 'text-primary/10' },
  { dot: 'bg-accent',  ring: 'border-accent/20',  bg: 'bg-accent/5 hover:bg-accent/8',   iconBg: 'bg-accent/8 border-accent/12 group-hover:bg-accent group-hover:border-accent',   iconText: 'text-accent group-hover:text-white',  num: 'text-accent/10' },
  { dot: 'bg-sky',     ring: 'border-sky/20',     bg: 'bg-sky/5 hover:bg-sky/8',         iconBg: 'bg-sky/8 border-sky/12 group-hover:bg-sky group-hover:border-sky',               iconText: 'text-sky group-hover:text-white',     num: 'text-sky/10' },
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

export default function ServicesPage() {
  const { lang } = useLang()
  const t = i18n[lang]
  const tp = t.servicesPage
  const serviceItems = t.services.items

  const [featured, ...rest] = serviceItems

  return (
    <div className="bg-white text-dark">
      <Header />

      {/* ── Page Hero ── */}
      <section className="bg-dark pt-20 relative overflow-hidden">
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
            <span className="text-white/60">{tp.breadcrumb}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.p {...fadeUp(0)} className="text-xs font-semibold tracking-[0.25em] uppercase text-white/30 mb-4">
                {tp.overline}
              </motion.p>
              <motion.h1 {...fadeUp(0.08)} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight">
                {tp.h1Line1}<br />
                <span className="text-white/30">{tp.h1Line2}</span>
              </motion.h1>
            </div>
            <motion.p {...fadeUp(0.18)} className="text-sm text-white/40 leading-relaxed max-w-xs lg:text-right lg:pb-2">
              {tp.paragraph}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Featured Card */}
          <motion.div {...fadeUpView(0)} className="mb-6">
            <Link to={`/servisler/${services[0].slug}`} className="group relative rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 bg-white block">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0">
                <div className="p-10 lg:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${serviceAccents[0].iconBg} ${serviceAccents[0].iconText}`}>
                        <BarChart2 size={22} />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark text-white text-xs font-bold tracking-wide">
                        {tp.featuredBadge}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-snug mb-5 group-hover:text-primary transition-colors duration-200">
                      {featured.title}
                    </h2>
                    <p className="text-base text-slate-500 leading-relaxed max-w-xl">
                      {featured.description}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-primary transition-colors duration-200">
                    <span className="inline-flex items-center gap-2">
                      {lang === 'en' ? 'Explore' : 'İncele'}
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </span>
                  </div>
                </div>
                {/* Büyük numara dekoratifi */}
                <div className="hidden lg:flex items-center justify-center px-16 select-none">
                  <span className="text-[180px] font-black text-slate-100 leading-none group-hover:text-slate-200 transition-colors duration-300">01</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Rest: 2-col then 3-col */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((service, i) => {
              const Icon = serviceIcons[i + 1]
              const accent = serviceAccents[i + 1]
              return (
                <motion.div key={i} {...fadeUpView(i * 0.06 + 0.1)}>
                  <Link to={`/servisler/${services[i + 1].slug}`} className="group h-full rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 bg-white transition-all duration-300 p-9 flex flex-col justify-between">
                    <div>
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 mb-6 ${accent.iconBg} ${accent.iconText}`}>
                        <Icon size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-10 flex items-center justify-between">
                      <span className={`text-6xl font-black leading-none select-none transition-colors duration-300 ${accent.num} group-hover:opacity-60`}>
                        0{i + 2}
                      </span>
                      <ArrowUpRight size={15} className="text-slate-300 group-hover:text-primary transition-colors duration-200" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}

            {/* CTA Dark Card */}
            <motion.div {...fadeUpView(rest.length * 0.06 + 0.1)}>
              <a href="/#iletisim"
                className="group h-full rounded-3xl bg-dark hover:bg-primary transition-colors duration-300 p-9 flex flex-col justify-between min-h-64">
                <div>
                  <h3 className="text-2xl font-bold text-white leading-snug mb-4">
                    {lang === 'en' ? 'Have a custom\nproject?' : 'Özel bir\nprojeniz mi var?'}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {lang === 'en'
                      ? 'Let\'s design the right solution together.'
                      : 'Birlikte doğru çözümü tasarlayalım.'}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-2 text-sm font-semibold text-white/60 group-hover:text-white transition-colors duration-200">
                  <span>{lang === 'en' ? 'Get in touch' : 'İletişime Geç'}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process / Nasıl Çalışırız ── */}
      <section className="bg-slate-50 border-t border-slate-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUpView()} className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
                {lang === 'en' ? 'How We Work' : 'Nasıl Çalışırız'}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight">
                {lang === 'en' ? 'Simple, transparent\nprocess' : 'Sade ve şeffaf\nbir süreç'}
              </h2>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm lg:pb-2">
              {lang === 'en'
                ? 'From first contact to delivery, we work alongside you at every step.'
                : 'İlk görüşmeden teslimata kadar her adımda yanınızdayız.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(lang === 'en'
              ? [
                  { step: '01', title: 'Discovery', desc: 'We analyze your institution\'s needs and goals in a free initial meeting.' },
                  { step: '02', title: 'Proposal', desc: 'We prepare a customized solution plan with scope, timeline, and pricing.' },
                  { step: '03', title: 'Development', desc: 'We build with agile methods, sharing progress at every iteration.' },
                  { step: '04', title: 'Delivery & Support', desc: 'We deliver with training and provide ongoing technical support.' },
                ]
              : [
                  { step: '01', title: 'Keşif Görüşmesi', desc: 'Kurumunuzun ihtiyaçlarını ve hedeflerini ücretsiz bir ilk görüşmede analiz ederiz.' },
                  { step: '02', title: 'Çözüm Önerisi', desc: 'Kapsam, zaman çizelgesi ve fiyatlandırma ile özelleştirilmiş çözüm planı hazırlarız.' },
                  { step: '03', title: 'Geliştirme', desc: 'Çevik yöntemlerle inşa eder, her iterasyonda ilerlemeyi sizinle paylaşırız.' },
                  { step: '04', title: 'Teslim & Destek', desc: 'Eğitim ile teslim eder, süregelen teknik destek sağlarız.' },
                ]
            ).map((item, i) => (
              <motion.div key={i} {...fadeUpView(i * 0.08)}
                className="group bg-white rounded-2xl border border-slate-200 p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary font-black text-sm mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">{tp.ctaOverline}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark leading-snug max-w-lg">{tp.ctaH2}</h2>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-md">{tp.ctaP}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-dark text-white text-sm font-semibold hover:bg-primary transition-colors duration-300">
                {tp.ctaBtn1} <ArrowUpRight size={15} />
              </Link>
              <Link to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-300 text-dark text-sm font-semibold hover:border-dark transition-colors duration-200">
                {tp.ctaBtn2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
