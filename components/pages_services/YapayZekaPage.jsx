'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight, ArrowUpRight, Brain } from 'lucide-react'
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
    tagline: 'Yapay zekânın gücünü kurumların hizmetine sunuyoruz.',
    description: [
      'Yapay zekâ artık deneysel bir teknoloji değil; karar alma, süreç otomasyonu ve müşteri/kullanıcı deneyimini dönüştüren temel bir altyapı unsuru hâline gelmiştir. Ancak bu dönüşümü gerçekleştirmek için genel amaçlı AI araçları yeterli değildir.',
      'HC Dijital olarak kurumsal veriler üzerinde eğitilmiş, iş bağlamını anlayan ve mevcut sistemlere sorunsuz entegre olan yapay zekâ çözümleri geliştiriyoruz. NLP tabanlı belge işlemeden görüntü analizine, tahmine dayalı modellerden süreç otomasyon akışlarına kadar sektöre özgü AI çözümleri tasarlıyoruz.',
    ],
    offers: [
      { title: 'Belge NLP', desc: 'Raporlar, sözleşmeler ve kurumsal belgelerden yapılandırılmış veri çıkarımı.' },
      { title: 'Karar Destek Sistemi', desc: 'Operasyonel ve iş verilerini işleyen AI destekli karar destek modülleri.' },
      { title: 'Süreç Analitiği', desc: 'İş akışını modelleyen ve tıkanan süreçleri tespit eden öngörüsel analizler.' },
      { title: 'Süreç Otomasyonu', desc: 'Veri girişi, sınıflandırma ve rota planlaması gibi tekrarlayan işlemlerin AI ile otomasyonu.' },
      { title: 'Büyük Dil Modeli Entegrasyonu', desc: 'GPT, Llama ve özel modellerin kurumsal iş akışlarına entegrasyonu.' },
      { title: 'Model İzleme & MLOps', desc: 'Üretimdeki AI modellerinin performansını sürekli izleme ve güncelleme altyapısı.' },
    ],
    steps: [
      { n: '01', title: 'Veri Değerlendirmesi', desc: 'Mevcut veri kalitesini, etiketleme durumunu ve model için uygunluğu analiz ediyoruz.' },
      { n: '02', title: 'Model Tasarımı & Eğitimi', desc: 'Kullanım senaryosuna uygun mimariyi seçiyor, veriyle eğitiyoruz.' },
      { n: '03', title: 'Entegrasyon & Doğrulama', desc: 'Modeli mevcut sisteme entegre ediyor, doğrulama süreçleri yürütüyoruz.' },
      { n: '04', title: 'İzleme & Sürekli İyileştirme', desc: 'Üretimde model performansını izliyor, yeni verilerle periyodik olarak güncelliyoruz.' },
    ],
    why: [
      { title: 'Kurumsal Veri Uzmanlığı', desc: 'Modellerimiz genel metinler yerine kurumsal terminoloji, iş süreçleri ve sektöre özgü bağlam üzerinde eğitilir.' },
      { title: 'Açıklanabilir AI', desc: 'Kullanıcıların güvenerek kullanabilmesi için model kararlarını yorumlanabilir biçimde sunarız.' },
      { title: 'Sorumluluk Odaklı Geliştirme', desc: 'Her AI çözümünde önyargı tespiti, veri gizliliği ve güvenlik standartlarına uyum ön planda tutulur.' },
    ],
  },
  en: {
    category: 'Service',
    tagline: 'Putting the power of AI at the service of institutions.',
    description: [
      'Artificial intelligence is no longer an experimental technology — it has become a fundamental infrastructure element transforming decision-making, process automation, and customer/user experience. But general-purpose AI tools aren\'t enough to achieve this transformation.',
      'At HC Dijital, we develop AI solutions trained on institutional data, understanding business context, and seamlessly integrating with existing systems. We design industry-specific AI solutions — from NLP-based document processing to image analysis, predictive models to process automation workflows.',
    ],
    offers: [
      { title: 'Document NLP', desc: 'Structured data extraction from reports, contracts, and institutional documents.' },
      { title: 'Decision Support System', desc: 'AI-powered decision support modules processing operational and business data.' },
      { title: 'Process Analytics', desc: 'Predictive analytics modeling workflow and detecting bottlenecks in processes.' },
      { title: 'Process Automation', desc: 'AI automation of repetitive tasks like data entry, classification, and routing.' },
      { title: 'Large Language Model Integration', desc: 'Integration of GPT, Llama, and custom models into institutional workflows.' },
      { title: 'Model Monitoring & MLOps', desc: 'Continuous monitoring and update infrastructure for AI models in production.' },
    ],
    steps: [
      { n: '01', title: 'Data Assessment', desc: 'We analyze your existing data quality, labeling status, and suitability for modeling.' },
      { n: '02', title: 'Model Design & Training', desc: 'We select the right architecture for the use case and train it on your data.' },
      { n: '03', title: 'Integration & Validation', desc: 'We integrate the model into the existing system and conduct validation processes.' },
      { n: '04', title: 'Monitoring & Continuous Improvement', desc: 'We monitor model performance in production and periodically update it with new data.' },
    ],
    why: [
      { title: 'Institutional Data Expertise', desc: 'Our models are trained on business terminology, institutional processes, and sector-specific context rather than general text.' },
      { title: 'Explainable AI', desc: 'We present model decisions in an interpretable way so users can rely on them with confidence.' },
      { title: 'Responsible Development', desc: 'Bias detection, data privacy, and security standards are prioritized in every AI solution.' },
    ],
  },
}

export default function YapayZekaPage() {
  const { lang } = useLang()
  const t = i18n[lang]
  const c = content[lang]
  const slug = 'yapay-zeka'
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
              <div className="w-10 h-10 rounded-xl bg-sky/8 border border-sky/15 flex items-center justify-center text-sky">
                <Brain size={18} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-sky">{c.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark leading-none tracking-tight mb-6">
              {lang === 'en' ? 'Artificial\nIntelligence' : 'Yapay Zekâ'}
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
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky">
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
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky mb-3">
              {lang === 'en' ? 'What We Offer' : 'Ne Sunuyoruz'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
              {lang === 'en' ? 'Our solution areas' : 'Çözüm alanlarımız'}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            {c.offers.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)}
                className="bg-white p-8 flex flex-col gap-3 hover:bg-sky/2 transition-colors duration-200 group">
                <div className="w-1.5 h-1.5 rounded-full bg-sky group-hover:scale-150 transition-transform duration-200" />
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
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky mb-3">
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
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky mb-3">
              {lang === 'en' ? 'Why HC Dijital' : 'Neden HC Dijital'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
              {lang === 'en' ? 'What sets us apart' : 'Bizi farklı kılan'}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.why.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-sky/25 hover:shadow-lg hover:shadow-sky/5 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-sky flex items-center justify-center mb-5">
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
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky mb-3">
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
            <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />{t.cta.badge}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight">{t.cta.h2}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-7 text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">{t.cta.paragraph}</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.22 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/iletisim"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-dark text-white text-[15px] font-bold hover:bg-sky transition-colors duration-300 shadow-md hover:-translate-y-0.5">
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
