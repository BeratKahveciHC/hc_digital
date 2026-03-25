import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight, ArrowUpRight, FlaskConical } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'
import { services, serviceTitles } from '../../data/services'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})


const content = {
  tr: {
    category: 'Servis',
    tagline: 'Kurumsal veriden makine öğrenmesi ile tahmin gücü ve stratejik içgörü elde ediyoruz.',
    description: [
      'Veri bilimi, ham veriden istatistiksel modeller ve makine öğrenmesi algoritmaları aracılığıyla geleceğe yönelik içgörüler çıkarma disiplinidir. Bu disiplin; talep tahmininden kaynak optimizasyonuna, müşteri davranışı analizinden maliyet modellemesine kadar her sektörde geniş uygulama alanı bulur.',
      'HC Dijital olarak kurumsal veri üzerinde uzmanlaşmış veri bilimi hizmeti sunuyoruz. Veri setlerinin analizinden tahmine dayalı model geliştirmeye, istatistiksel araştırma desteğinden üretim ortamında model dağıtımına kadar her aşamada yanınızdayız.',
    ],
    offers: [
      { title: 'Tahmine Dayalı Modelleme', desc: 'Talep tahmini, churn riski, sipariş hacmi ve operasyonel kapasite tahmin modelleri.' },
      { title: 'İstatistiksel Analiz', desc: 'İş araştırmalarında hipotez testi, regresyon analizi ve çok değişkenli istatistik.' },
      { title: 'Segmentasyon & Kümeleme', desc: 'Müşteri, ürün veya operasyonel verilerde anlamlı grupları keşfeden kümeleme analizleri.' },
      { title: 'Kaynak Optimizasyonu', desc: 'Personel planlaması, stok yönetimi ve operasyon takvimi için optimizasyon modelleri.' },
      { title: 'Anomali Tespiti', desc: 'Fatura sahteciliği, kullanım anomalileri ve süreç sapmalarının otomatik tespiti.' },
      { title: 'Model Dağıtımı & İzleme', desc: 'Geliştirilen modellerin üretim ortamına taşınması ve performans takibi.' },
    ],
    steps: [
      { n: '01', title: 'Problem Tanımı', desc: 'Çözülmek istenen iş problemini ve başarı metriklerini netleştiriyoruz.' },
      { n: '02', title: 'Veri Hazırlığı', desc: 'Veri toplama, temizleme, özellik mühendisliği ve keşifsel veri analizini yürütüyoruz.' },
      { n: '03', title: 'Model Geliştirme', desc: 'Birden fazla algoritma deniyor, en iyi performanslı modeli seçiyor ve iyileştiriyoruz.' },
      { n: '04', title: 'Dağıtım & İzleme', desc: 'Modeli üretim ortamına taşıyor, performansını düzenli olarak izliyor ve güncelliyoruz.' },
    ],
    why: [
      { title: 'Sektörel Bağlam Anlayışı', desc: 'Veri bilimcilerimiz iş süreçlerini ve sektörel dinamikleri biliyor; modeller gerçekçi kısıtlamalar gözetilerek tasarlanır.' },
      { title: 'Yorumlanabilir Sonuçlar', desc: 'Model çıktılarını yöneticilerin ve operasyon ekiplerinin anlayabileceği biçimde sunuyoruz; kara kutu kalmaz.' },
      { title: 'Yeniden Kullanılabilir Altyapı', desc: 'Her proje, kurumunuzun veri bilimi kapasitesini kalıcı olarak artıran bir altyapı bırakır.' },
    ],
  },
  en: {
    category: 'Service',
    tagline: 'Extracting predictive power and strategic insight from institutional data through machine learning.',
    description: [
      'Data science is the discipline of extracting forward-looking insights from raw data through statistical models and machine learning algorithms. This discipline finds broad application across every sector — from demand forecasting to resource optimization, customer behavior analysis to cost modeling.',
      'At HC Dijital, we offer specialized data science services on institutional data. We\'re with you at every stage — from analyzing datasets to developing predictive models, from statistical research support to model deployment in production environments.',
    ],
    offers: [
      { title: 'Predictive Modeling', desc: 'Demand forecasting, churn risk, order volume, and operational capacity prediction models.' },
      { title: 'Statistical Analysis', desc: 'Hypothesis testing, regression analysis, and multivariate statistics in business research.' },
      { title: 'Segmentation & Clustering', desc: 'Clustering analyses that discover meaningful groups in customer, product, or operational data.' },
      { title: 'Resource Optimization', desc: 'Optimization models for staff planning, inventory management, and operational scheduling.' },
      { title: 'Anomaly Detection', desc: 'Automated detection of billing fraud, usage anomalies, and process deviations.' },
      { title: 'Model Deployment & Monitoring', desc: 'Migrating developed models to production and tracking performance.' },
    ],
    steps: [
      { n: '01', title: 'Problem Definition', desc: 'We clarify the business problem to be solved and success metrics.' },
      { n: '02', title: 'Data Preparation', desc: 'We conduct data collection, cleaning, feature engineering, and exploratory data analysis.' },
      { n: '03', title: 'Model Development', desc: 'We test multiple algorithms, select the best performing model, and refine it.' },
      { n: '04', title: 'Deployment & Monitoring', desc: 'We move the model to production and regularly monitor and update its performance.' },
    ],
    why: [
      { title: 'Sector Context Understanding', desc: 'Our data scientists know business processes and sector dynamics — models are designed with realistic constraints.' },
      { title: 'Interpretable Results', desc: 'We present model outputs in a way managers and operations teams can understand — nothing stays a black box.' },
      { title: 'Reusable Infrastructure', desc: 'Every project leaves behind infrastructure that permanently increases your institution\'s data science capacity.' },
    ],
  },
}

export default function VeriBilimiPage() {
  const { lang } = useLang()
  const t = i18n[lang]
  const c = content[lang]
  const slug = 'veri-bilimi'
  const otherServices = services.filter((s) => s.slug !== slug)

  return (
    <div className="bg-white text-dark">
      <Header solid />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky/8 border border-sky/15 flex items-center justify-center text-sky">
                <FlaskConical size={18} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-sky">{c.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark leading-none tracking-tight mb-6">
              {lang === 'en' ? 'Data Science' : 'Veri Bilimi'}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">{c.tagline}</p>
          </motion.div>
        </div>
      </section>

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
            <Link to="/servisler" className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 border-b border-slate-300 pb-0.5 hover:text-dark hover:border-dark transition-colors duration-200 shrink-0">
              {lang === 'en' ? 'All services' : 'Tüm servisler'} <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((s, i) => {
              const Icon = s.icon
              const title = serviceTitles[lang][s.slug]
              const desc = i18n[lang].services.items[services.findIndex(x => x.slug === s.slug)]?.description
              return (
                <motion.div key={s.slug} {...fadeUp(i * 0.07)}>
                  <Link to={`/servisler/${s.slug}`}
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
            <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />{t.cta.badge}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight">{t.cta.h2}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-7 text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">{t.cta.paragraph}</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.22 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/iletisim"
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
