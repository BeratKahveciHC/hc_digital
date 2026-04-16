'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight, ArrowUpRight, Code2 } from 'lucide-react'
import Link from 'next/link'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'
import { services, serviceTitles } from '../../data/services'
import { serviceIcons } from '../../data/serviceIcons'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})


const content = {
  tr: {
    category: 'Servis',
    tagline: 'Sektörünüze özgü, ölçeklenebilir yazılım çözümleri geliştiriyoruz.',
    description: [
      'Dijital dönüşüm standart paket yazılımlara sığmaz. Her işletmenin ve kurumun kendine özgü iş akışları, mevzuat gereksinimleri ve entegrasyon ihtiyaçları vardır.',
      'HC Dijital olarak kurumsal yönetim sistemlerinden mobil uygulamalara, API entegrasyon katmanlarından bulut tabanlı platformlara kadar her ihtiyaç için özel yazılım geliştiriyoruz. Agile metodoloji ile hızlı, güvenilir ve bakımı kolay sistemler inşa ediyoruz.',
    ],
    offers: [
      { title: 'Kurumsal Bilgi Yönetim Sistemi', desc: 'Kayıt, planlama, iş akışı ve raporlamayı kapsayan uçtan uca kurumsal yazılım geliştirme.' },
      { title: 'Mobil Uygulama', desc: 'iOS ve Android üzerinde çalışan kurum personeli ve müşteri odaklı mobil uygulamalar.' },
      { title: 'API Entegrasyon Katmanı', desc: 'Mevcut sistemleri birbirine bağlayan REST, GraphQL ve SOAP entegrasyon servisleri.' },
      { title: 'Bulut Tabanlı Platform', desc: 'AWS, Azure veya özel sunucu altyapısında yüksek erişilebilirlikli platform geliştirme.' },
      { title: 'Mikro Servis Mimarisi', desc: 'Modüler, bağımsız dağıtılabilir ve yatay ölçeklenebilir yazılım mimarisi.' },
      { title: 'Mevcut Sistem Modernizasyonu', desc: 'Legacy sistemlerin modern teknoloji yığınına taşınması ve performans iyileştirmesi.' },
    ],
    steps: [
      { n: '01', title: 'Gereksinim Analizi', desc: 'Kullanıcı hikayeleri, süreç haritaları ve teknik kısıtlamaları detaylı biçimde belgeliyoruz.' },
      { n: '02', title: 'Mimari Tasarım', desc: 'Ölçeklenebilir, güvenli ve bakımı kolay bir teknik mimari tasarlıyoruz.' },
      { n: '03', title: 'Agile Geliştirme', desc: 'İki haftalık sprint döngüleriyle geliştiriyor, her iterasyonda çalışan yazılım teslim ediyoruz.' },
      { n: '04', title: 'Test, Yayın & Destek', desc: 'Kapsamlı test süreçleri, sorunsuz yayına alım ve süregelen teknik destek.' },
    ],
    why: [
      { title: 'Sektörel Uzmanlık', desc: 'Geliştirme ekibimiz kurumsal iş akışları, KVKK ve sektöre özgü mevzuat konusunda deneyimlidir.' },
      { title: 'Şeffaf Süreç', desc: 'Canlı proje panosu ile geliştirme sürecini anlık izleyebilir, her sprint sonunda çalışan ürünü görebilirsiniz.' },
      { title: 'Uzun Vadeli Ortaklık', desc: 'Yazılımı teslim edip çekilmiyoruz; bakım, güncelleme ve büyüme sürecinde yanınızdayız.' },
    ],
  },
  en: {
    category: 'Service',
    tagline: 'Building scalable software solutions tailored for your industry.',
    description: [
      'Digital transformation doesn\'t fit standard off-the-shelf software. Every business and institution has unique workflows, regulatory requirements, and integration needs.',
      'At HC Dijital, we develop custom software for every need — from enterprise management systems to mobile apps, API integration layers to cloud-based platforms. We build fast, reliable, and maintainable systems using agile methodology.',
    ],
    offers: [
      { title: 'Enterprise Information Management System', desc: 'End-to-end enterprise software development covering registration, scheduling, workflows, and reporting.' },
      { title: 'Mobile Application', desc: 'Staff and customer-focused mobile apps running on iOS and Android.' },
      { title: 'API Integration Layer', desc: 'REST, GraphQL, and SOAP integration services connecting existing systems.' },
      { title: 'Cloud-Based Platform', desc: 'High-availability platform development on AWS, Azure, or private server infrastructure.' },
      { title: 'Microservice Architecture', desc: 'Modular, independently deployable, and horizontally scalable software architecture.' },
      { title: 'Legacy System Modernization', desc: 'Migration of legacy systems to modern technology stacks with performance improvements.' },
    ],
    steps: [
      { n: '01', title: 'Requirements Analysis', desc: 'We thoroughly document user stories, process maps, and technical constraints.' },
      { n: '02', title: 'Architecture Design', desc: 'We design a scalable, secure, and maintainable technical architecture.' },
      { n: '03', title: 'Agile Development', desc: 'We develop in two-week sprint cycles, delivering working software at each iteration.' },
      { n: '04', title: 'Testing, Launch & Support', desc: 'Comprehensive testing processes, smooth deployment, and ongoing technical support.' },
    ],
    why: [
      { title: 'Domain Expertise', desc: 'Our development team has experience in business workflows, GDPR, and industry-specific regulations.' },
      { title: 'Transparent Process', desc: 'You can monitor the development process in real time via a live project board and see working product at each sprint end.' },
      { title: 'Long-Term Partnership', desc: 'We don\'t just deliver the software and walk away — we\'re with you through maintenance, updates, and growth.' },
    ],
  },
}

export default function YazilimGelistirmePage() {
  const { lang } = useLang()
  const t = i18n[lang]
  const c = content[lang]
  const slug = 'yazilim-gelistirme'
  const otherServices = services.filter((s) => s.slug !== slug)

  return (
    <div className="bg-white text-dark">
      <Header solid />

      {/* ── Intro ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center text-accent">
                <Code2 size={18} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">{c.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark leading-none tracking-tight mb-6">
              {lang === 'en' ? 'Software\nDevelopment' : 'Yazılım\nGeliştirme'}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">{c.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Hizmet Açıklaması ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
            <motion.div {...fadeUp()}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent">
                {lang === 'en' ? 'About the Service' : 'Hizmet Hakkında'}
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.08)} className="flex flex-col gap-6">
              {c.description.map((para, i) => (
                <p key={i} className="text-lg md:text-xl text-slate-600 leading-relaxed">{para}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Ne Sunuyoruz ── */}
      <section className="py-16 md:py-24 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp()} className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
              {lang === 'en' ? 'What We Offer' : 'Ne Sunuyoruz'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
              {lang === 'en' ? 'Our solution areas' : 'Çözüm alanlarımız'}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            {c.offers.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)}
                className="bg-white p-8 flex flex-col gap-3 hover:bg-accent/2 transition-colors duration-200 group">
                <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-200" />
                <h3 className="text-base font-bold text-dark">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Yaklaşımımız ── */}
      <section className="py-24 md:py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
            <motion.div {...fadeUp()}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
                {lang === 'en' ? 'Our Approach' : 'Yaklaşımımız'}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-dark leading-tight">
                {lang === 'en' ? 'How we work' : 'Nasıl çalışırız'}
              </h2>
            </motion.div>
            <div className="flex flex-col gap-0 divide-y divide-slate-100">
              {c.steps.map((step, i) => (
                <motion.div key={i} {...fadeUp(i * 0.07)} className="grid grid-cols-[48px_1fr] gap-6 py-8 first:pt-0 last:pb-0">
                  <span className="text-3xl font-black text-slate-100 leading-none pt-1 select-none">{step.n}</span>
                  <div>
                    <h3 className="text-base font-bold text-dark mb-1.5">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Neden HC Dijital ── */}
      <section className="py-16 md:py-24 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp()} className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
              {lang === 'en' ? 'Why HC Dijital' : 'Neden HC Dijital'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
              {lang === 'en' ? 'What sets us apart' : 'Bizi farklı kılan'}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.why.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center mb-5">
                  <span className="text-white text-xs font-black">0{i + 1}</span>
                </div>
                <h3 className="text-base font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diğer Servisler ── */}
      <section className="py-24 md:py-28 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <motion.div {...fadeUp()}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
                {lang === 'en' ? 'Our Services' : 'Servislerimiz'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                {lang === 'en' ? 'Other services' : 'Diğer servislerimiz'}
              </h2>
            </motion.div>
            <Link href="/servisler" className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 border-b border-slate-300 pb-0.5 hover:text-dark hover:border-dark transition-colors duration-200 shrink-0">
              {lang === 'en' ? 'All services' : 'Tüm servisler'} <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((s, i) => {
              const Icon = serviceIcons[s.slug]
              const title = serviceTitles[lang][s.slug]
              const desc = i18n[lang].services.items[services.findIndex(x => x.slug === s.slug)]?.description
              return (
                <motion.div key={s.slug} {...fadeUp(i * 0.07)}>
                  <Link href={`/servisler/${s.slug}`}
                    className="group flex flex-col rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 bg-white h-full p-8">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 transition-all duration-300 ${s.color} group-hover:scale-110`}>
                      <Icon size={17} />
                    </div>
                    <h3 className="text-base font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-200">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">{desc}</p>
                    <div className="mt-5 pt-5 border-t border-slate-100 flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-primary transition-colors duration-200">
                      {lang === 'en' ? 'Explore' : 'İncele'} <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-linear-to-b from-slate-100 to-slate-200" id="iletisim">
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 text-slate-500 text-xs font-semibold tracking-widest uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />{t.cta.badge}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight">{t.cta.h2}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-7 text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">{t.cta.paragraph}</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.22 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/iletisim"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-dark text-white text-[15px] font-bold hover:bg-accent transition-colors duration-300 shadow-md hover:-translate-y-0.5">
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
