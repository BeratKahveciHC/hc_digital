import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Mail, Phone, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const softwareAreas = {
  tr: [
    { area: 'Gerçek Zamanlı Veri İşleme', detail: '<2 saniye alarm gecikme süresi' },
    { area: 'REST, MQTT & OPC-UA', detail: 'Endüstriyel protokol desteği' },
    { area: 'Dashboard & Görselleştirme', detail: 'Özelleştirilebilir widget panelleri' },
    { area: 'Alarm Yönetim Motoru', detail: 'Önceliklendirme ve bildirim zinciri' },
    { area: 'Çok Sistem Entegrasyonu', detail: 'SCADA, BMS, ERP bağlantısı' },
    { area: 'Bulut veya Yerinde Kurulum', detail: 'Kurumun tercihine göre yapılandırma' },
  ],
  en: [
    { area: 'Real-Time Data Processing', detail: '<2 second alarm delay time' },
    { area: 'REST, MQTT & OPC-UA', detail: 'Industrial protocol support' },
    { area: 'Dashboard & Visualization', detail: 'Customizable widget panels' },
    { area: 'Alarm Management Engine', detail: 'Prioritization and notification chain' },
    { area: 'Multi-System Integration', detail: 'SCADA, BMS, ERP connectivity' },
    { area: 'Cloud or On-Premise', detail: 'Configured to organization preference' },
  ],
}

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div {...fadeUp(index * 0.05)} className="border-b border-slate-200 last:border-0">
      <button onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group">
        <span className="text-base font-semibold text-dark group-hover:text-sky transition-colors duration-200 leading-snug">{faq.question}</span>
        <ChevronDown size={18} className={`shrink-0 mt-0.5 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
        <div className="pb-6"><p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p></div>
      </motion.div>
    </motion.div>
  )
}

export default function KumandaMerkeziPage() {
  const { lang } = useLang()
  const t = i18n[lang]
  const base = products.find((p) => p.slug === 'kumanda-merkezi')
  const product = lang === 'en' && base.en ? { ...base, ...base.en } : base
  const areas = softwareAreas[lang]

  const scopeText = lang === 'en'
    ? 'Kumanda Merkezi is a centralized monitoring and control platform that consolidates data from all your systems into a single screen with real-time visibility. With alarm management, historical analytics, and customizable dashboards, it enables managers to monitor current status and intervene in critical events without delay. Its data-normalizing architecture integrates into your existing infrastructure without added overhead — configurable for cloud or on-premise deployment based on your data sovereignty requirements.'
    : 'Kumanda Merkezi, tüm sistemlerinizden gelen verileri gerçek zamanlı görünürlükle tek ekranda birleştiren merkezi izleme ve kontrol platformudur. Alarm yönetimi, tarihsel analiz ve özelleştirilebilir panolariyle yöneticilerin anlık durumu takip etmesini ve kritik olaylara gecikmesiz müdahale etmesini sağlar. Mevcut altyapınıza ek yük bindirmeyen veri normalleştirme mimarisi, veri egemenliği gereksinimlerinize göre bulut veya yerinde kurulum olarak yapılandırılabilir.'

  return (
    <div className="bg-white text-dark">
      <Header solid />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold tracking-wide mb-8 ${base.color}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${base.dot}`} />{product.category}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark leading-none tracking-tight mb-6">{base.title}</h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">{product.tagline}</p>
          </motion.div>
        </div>
      </section>

      <section>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/60 aspect-video">
            <img src={base.heroImage} alt={base.title} className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
            <motion.div {...fadeUp()}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky">
                {lang === 'en' ? 'Project Scope' : 'Proje Kapsamı'}
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.08)}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">{scopeText}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp()} className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky mb-3">
              {lang === 'en' ? 'Technology Areas' : 'Yazılım Alanları'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
              {lang === 'en' ? 'Built on a modern stack' : 'Modern altyapı ile inşa edildi'}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}
                className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 hover:border-sky/25 hover:bg-sky/2 transition-all duration-200 group">
                <div className="w-2 h-2 rounded-full bg-sky mt-1.5 shrink-0 group-hover:scale-125 transition-transform duration-200" />
                <div>
                  <p className="text-sm font-bold text-dark mb-0.5">{item.area}</p>
                  <p className="text-xs text-slate-400 font-medium">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp()} className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky mb-3">
              {lang === 'en' ? 'Highlights' : 'Öne Çıkan Özellikler'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
              {lang === 'en' ? '360° operational visibility' : '360° operasyonel görünürlük'}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <motion.div {...fadeUp(0.05)} className="lg:col-span-2 rounded-2xl overflow-hidden bg-slate-200 aspect-video">
              <img src={base.gallery[0]} alt={base.title} className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
            <div className="flex flex-col gap-4">
              <motion.div {...fadeUp(0.1)} className="rounded-2xl overflow-hidden bg-slate-200 flex-1">
                <img src={base.gallery[1]} alt={base.title} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
              <motion.div {...fadeUp(0.15)} className="rounded-2xl bg-sky p-6 flex flex-col justify-between min-h-35">
                <p className="text-xs font-bold tracking-widest uppercase text-dark/50">{product.stats?.[0]?.label}</p>
                <p className="text-5xl font-black text-dark leading-none mt-2">{product.stats?.[0]?.value}</p>
              </motion.div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <motion.div {...fadeUp(0.1)} className="rounded-2xl bg-dark p-8 flex flex-col justify-between min-h-55">
              <div>
                <div className="w-8 h-8 rounded-lg bg-sky/10 flex items-center justify-center mb-4">
                  <span className="text-sky text-xs font-black">01</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{product.features?.[0]?.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed line-clamp-3">{product.features?.[0]?.description}</p>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.15)} className="rounded-2xl overflow-hidden bg-slate-200 aspect-video lg:aspect-auto">
              <img src={base.gallery[2]} alt={base.title} className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
            <div className="flex flex-col gap-4">
              <motion.div {...fadeUp(0.18)} className="rounded-2xl overflow-hidden bg-slate-200 flex-1 min-h-35">
                <img src={base.gallery[3]} alt={base.title} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
              <motion.div {...fadeUp(0.22)} className="rounded-2xl bg-slate-200 p-6 flex flex-col justify-between min-h-25 border border-slate-300">
                <p className="text-xs font-bold tracking-widest uppercase text-slate-400">{product.stats?.[1]?.label}</p>
                <p className="text-4xl font-black text-dark leading-none mt-2">{product.stats?.[1]?.value}</p>
              </motion.div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {product.features?.slice(1).map((feature, i) => (
              <motion.div key={i} {...fadeUp(0.1 + i * 0.08)}
                className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col gap-4">
                <span className="text-5xl font-black text-slate-100 leading-none">{feature.number}</span>
                <div>
                  <h3 className="text-base font-bold text-dark mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
            <motion.div {...fadeUp(0.2)} className="rounded-2xl bg-sky/8 border border-sky/15 p-7 flex flex-col justify-between">
              <p className="text-xs font-bold tracking-widest uppercase text-sky">{product.stats?.[2]?.label}</p>
              <p className="text-5xl font-black text-sky leading-none mt-auto pt-6">{product.stats?.[2]?.value}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp()} className="mb-20">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky mb-3">
              {lang === 'en' ? 'Key Features' : 'Öne Çıkan Özellikler'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight max-w-lg">
              {lang === 'en' ? 'Control at your fingertips' : 'Kontrol parmaklarınızın ucunda'}
            </h2>
          </motion.div>
          <div className="flex flex-col gap-24">
            {product.features?.map((feature, i) => (
              <motion.div key={feature.number} {...fadeUp(0.05)}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className={i % 2 === 1 ? 'lg:order-last' : ''}>
                  <span className="text-[80px] font-black text-slate-100 leading-none block -mb-4 select-none">{feature.number}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 leading-snug">{feature.title}</h3>
                  <p className="text-base text-slate-500 leading-relaxed mb-8">{feature.description}</p>
                  {product.benefits?.slice(i * 2, i * 2 + 2).map((b, bi) => (
                    <div key={bi} className="flex items-start gap-3 mb-4">
                      <div className="w-5 h-5 rounded-full bg-sky/10 border border-sky/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-dark">{b.title}: </span>
                        <span className="text-sm text-slate-500">{b.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={i % 2 === 1 ? 'lg:order-first' : ''}>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 aspect-video">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {product.faqs && (
        <section className="py-24 md:py-32 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
              <motion.div {...fadeUp()}>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky mb-3">SSS</p>
                <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                  {lang === 'en' ? 'Frequently Asked\nQuestions' : 'Sık Sorulan\nSorular'}
                </h2>
              </motion.div>
              <div>{product.faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}</div>
            </div>
          </div>
        </section>
      )}

      <section className="py-24 md:py-28 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <motion.div {...fadeUp()}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky mb-3">
                {lang === 'en' ? 'Our Work' : 'Çalışmalarımız'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                {lang === 'en' ? 'Other highlighted projects' : 'Diğer öne çıkan çalışmalarımız'}
              </h2>
            </motion.div>
            <Link to="/urunler" className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 border-b border-slate-300 pb-0.5 hover:text-dark hover:border-dark transition-colors duration-200 shrink-0">
              {lang === 'en' ? 'All products' : 'Tüm ürünler'} <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.filter((p) => p.slug !== 'kumanda-merkezi').slice(0, 3).map((rel, i) => {
              const rd = lang === 'en' && rel.en ? { ...rel, ...rel.en } : rel
              return (
                <motion.div key={rel.slug} {...fadeUp(i * 0.07)}>
                  <Link to={`/urunler/${rel.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 bg-white h-full">
                    <div className="relative aspect-video overflow-hidden bg-slate-100">
                      <img src={rel.image} alt={rd.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-white/95 backdrop-blur-sm text-[10px] font-bold tracking-wide ${rel.color}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${rel.dot}`} />{rd.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="text-base font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-200">{rd.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-2">{rd.description}</p>
                      <div className="mt-5 pt-5 border-t border-slate-100 flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-primary transition-colors duration-200">
                        {lang === 'en' ? 'Explore' : 'İncele'} <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-linear-to-b from-slate-100 to-slate-200" id="iletisim">
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 text-slate-500 text-xs font-semibold tracking-widest uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />{t.cta.badge}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight">{t.cta.h2}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-7 text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">{t.cta.paragraph}</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.22 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/iletisim"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-dark text-white text-[15px] font-bold hover:bg-primary transition-colors duration-300 shadow-md hover:-translate-y-0.5">
              <Mail size={16} />{t.cta.ctaPrimary}<ArrowRight size={15} />
            </Link>
            <a href="tel:+90"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-slate-300 text-slate-600 text-[15px] font-semibold hover:border-dark hover:text-dark transition-all duration-200">
              <Phone size={15} />{t.cta.ctaSecondary}
            </a>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 text-slate-400 text-sm">{t.cta.note}</motion.p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
