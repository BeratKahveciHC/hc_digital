'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight, ArrowUpRight, FileBarChart } from 'lucide-react'
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
    tagline: 'Kurumunuza özgü raporlama altyapısı ile veriyi anlamlı çıktılara dönüştürüyoruz.',
    description: [
      'Kurumlarda doğru raporlama, hem mevzuat uyumu hem de stratejik yönetim açısından kritik öneme sahiptir. Ancak çoğu kurum ya hazır raporlama araçlarının kısıtlamalarıyla ya da dağınık Excel dosyaları yığınıyla boğuşmaktadır.',
      'HC Dijital olarak kurumunuzun ihtiyaçlarına özel raporlama sistemleri geliştiriyoruz. Yasal raporlamadan operasyonel kalite göstergelerine, verimlilik analizinden yönetim tablolarına kadar her türlü raporlama gereksinimini karşılıyoruz. Veriler doğru yapılandırıldığında kararlar hızlanır, hatalar azalır.',
    ],
    offers: [
      { title: 'Yasal & Mevzuat Raporlaması', desc: 'Denetim ve düzenleyici kurumlara gönderilen raporların otomasyonu.' },
      { title: 'Operasyonel Kalite Göstergeleri', desc: 'Süreç verimliliği, hizmet kalitesi ve operasyonel etkinlik metriklerinin izlenmesi.' },
      { title: 'Operasyonel Tablolar', desc: 'Kapasite kullanımı, ekip verimliliği ve süreç yükü gibi operasyonel KPI\'lar.' },
      { title: 'Yönetici Özet Raporları', desc: 'Üst yönetim için tasarlanmış, eyleme dönüştürülebilir içgörüler sunan haftalık/aylık raporlar.' },
      { title: 'Otomatik Dağıtım', desc: 'Raporların zamanlanmış olarak e-posta, portal veya API üzerinden ilgili kişilere iletilmesi.' },
      { title: 'Self-Servis BI', desc: 'Teknik olmayan kullanıcıların kendi sorgularını oluşturabileceği self-servis raporlama arayüzü.' },
    ],
    steps: [
      { n: '01', title: 'Gereksinim Toplantıları', desc: 'Hangi kararların hangi verilerle desteklenmesi gerektiğini tüm paydaşlarla birlikte belirliyoruz.' },
      { n: '02', title: 'Veri Şeması Tasarımı', desc: 'Raporlama ihtiyaçlarını karşılayacak veri modeli ve ETL süreçlerini tasarlıyoruz.' },
      { n: '03', title: 'Geliştirme & Test', desc: 'Raporları geliştiriyor, gerçek veriyle doğruluk testleri yapıyoruz.' },
      { n: '04', title: 'Kullanıcı Eğitimi & Yayın', desc: 'Sistemi devreye alıyor, kullanıcı ekiplerine eğitim ve kullanım kılavuzu sunuyoruz.' },
    ],
    why: [
      { title: 'Tek Doğruluk Kaynağı', desc: 'Tüm departmanların aynı veri üzerinden rapor aldığı merkezi bir altyapı kuruyoruz; çelişkili rakamlar tarihe karışıyor.' },
      { title: 'Mevzuat Takibi', desc: 'Yasal raporlama formatlarını ve değişen gereksinimleri yakından takip ediyor, sistemi güncel tutuyoruz.' },
      { title: 'Hızlı Uyarlanabilirlik', desc: 'Yeni bir rapor ihtiyacı doğduğunda altyapı zaten hazır; günler içinde yeni raporlar devreye alınabilir.' },
    ],
  },
  en: {
    category: 'Service',
    tagline: 'Transforming data into meaningful outputs with custom reporting infrastructure.',
    description: [
      'In organizations, accurate reporting is critical for both regulatory compliance and strategic management. However, most institutions struggle with either the limitations of ready-made reporting tools or mountains of scattered Excel files.',
      'At HC Dijital, we develop custom reporting systems tailored to your institution\'s needs. We address every reporting requirement — from legal reporting to operational quality indicators, efficiency analysis to management dashboards. When data is properly structured, decisions accelerate and errors decrease.',
    ],
    offers: [
      { title: 'Legal & Regulatory Reporting', desc: 'Automation of reports sent to regulatory and audit institutions.' },
      { title: 'Operational Quality Indicators', desc: 'Monitoring process efficiency, service quality, and operational effectiveness metrics.' },
      { title: 'Operational Dashboards', desc: 'Operational KPIs like capacity utilization, team efficiency, and process workload.' },
      { title: 'Executive Summary Reports', desc: 'Weekly/monthly reports designed for senior management presenting actionable insights.' },
      { title: 'Automated Distribution', desc: 'Scheduled delivery of reports to relevant parties via email, portal, or API.' },
      { title: 'Self-Service BI', desc: 'Self-service reporting interface where non-technical users can create their own queries.' },
    ],
    steps: [
      { n: '01', title: 'Requirements Meetings', desc: 'We identify with all stakeholders which decisions need to be supported by which data.' },
      { n: '02', title: 'Data Schema Design', desc: 'We design the data model and ETL processes to meet reporting needs.' },
      { n: '03', title: 'Development & Testing', desc: 'We develop reports and run accuracy tests with real data.' },
      { n: '04', title: 'User Training & Launch', desc: 'We deploy the system and provide training and user guides to user teams.' },
    ],
    why: [
      { title: 'Single Source of Truth', desc: 'We build centralized infrastructure where all departments report from the same data — conflicting numbers become a thing of the past.' },
      { title: 'Regulatory Tracking', desc: 'We closely follow legal reporting formats and changing requirements, keeping the system up to date.' },
      { title: 'Rapid Adaptability', desc: 'When a new reporting need arises, the infrastructure is already ready — new reports can be deployed in days.' },
    ],
  },
}

export default function RaporlamaSistemleriPage() {
  const { lang } = useLang()
  const t = i18n[lang]
  const c = content[lang]
  const slug = 'raporlama-sistemleri'
  const otherServices = services.filter((s) => s.slug !== slug)

  return (
    <div className="bg-white text-dark">
      <Header solid />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center text-primary">
                <FileBarChart size={18} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{c.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark leading-none tracking-tight mb-6">
              {lang === 'en' ? 'Reporting\nSystems' : 'Raporlama\nSistemleri'}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">{c.tagline}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
            <motion.div {...fadeUp()}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
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

      <section className="py-16 md:py-24 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp()} className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              {lang === 'en' ? 'What We Offer' : 'Ne Sunuyoruz'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
              {lang === 'en' ? 'Our solution areas' : 'Çözüm alanlarımız'}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            {c.offers.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)}
                className="bg-white p-8 flex flex-col gap-3 hover:bg-primary/2 transition-colors duration-200 group">
                <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform duration-200" />
                <h3 className="text-base font-bold text-dark">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
            <motion.div {...fadeUp()}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
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

      <section className="py-16 md:py-24 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp()} className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              {lang === 'en' ? 'Why HC Dijital' : 'Neden HC Dijital'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
              {lang === 'en' ? 'What sets us apart' : 'Bizi farklı kılan'}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.why.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mb-5">
                  <span className="text-white text-xs font-black">0{i + 1}</span>
                </div>
                <h3 className="text-base font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <motion.div {...fadeUp()}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
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

      <section className="relative bg-linear-to-b from-slate-100 to-slate-200" id="iletisim">
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 text-slate-500 text-xs font-semibold tracking-widest uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />{t.cta.badge}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight">{t.cta.h2}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-7 text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">{t.cta.paragraph}</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.22 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/iletisim"
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
