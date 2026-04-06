import { useParams, Navigate } from 'react-router-dom'
import { services } from '../data/services'
import { useLang } from '../context/LanguageContext'
import SEO, { serviceJsonLd, breadcrumbJsonLd } from '../components/SEO'
import VeriAnalitigiPage from './services/VeriAnalitigiPage'
import YazilimGelistirmePage from './services/YazilimGelistirmePage'
import YapayZekaPage from './services/YapayZekaPage'
import RaporlamaSistemleriPage from './services/RaporlamaSistemleriPage'
import TeknolojDanismanligiPage from './services/TeknolojDanismanligiPage'
import VeriBilimiPage from './services/VeriBilimiPage'

const pageMap = {
  'veri-analitigi':         VeriAnalitigiPage,
  'yazilim-gelistirme':     YazilimGelistirmePage,
  'yapay-zeka':             YapayZekaPage,
  'raporlama-sistemleri':   RaporlamaSistemleriPage,
  'teknoloji-danismanligi': TeknolojDanismanligiPage,
  'veri-bilimi':            VeriBilimiPage,
}

const serviceSeoMeta = {
  'yazilim-gelistirme': {
    tr: { title: 'Yazılım Geliştirme – Kurumsal Özel Yazılım Çözümleri', description: 'HC Dijital ile sektörünüze özel, ölçeklenebilir kurumsal yazılım çözümleri. Web uygulaması, mobil uygulama, API entegrasyonu, bulut platformu geliştirme hizmetleri.' },
    en: { title: 'Software Development – Custom Enterprise Software Solutions', description: 'Scalable, industry-specific enterprise software solutions with HC Digital. Web application, mobile app, API integration, and cloud platform development services.' },
  },
  'raporlama-sistemleri': {
    tr: { title: 'Raporlama Sistemleri – Veri Görselleştirme ve İş Zekası', description: 'HC Dijital raporlama sistemleri: Gerçek zamanlı dashboard, otomatik rapor üretimi, KPI takibi ve veri görselleştirme. Kurumsal verilerinizi anlık kararlar için hazırlayın.' },
    en: { title: 'Reporting Systems – Data Visualization and Business Intelligence', description: 'HC Digital reporting systems: Real-time dashboards, automated report generation, KPI tracking and data visualization. Transform your institutional data for real-time decisions.' },
  },
  'teknoloji-danismanligi': {
    tr: { title: 'Teknoloji Danışmanlığı – Dijital Dönüşüm Stratejisi', description: 'HC Dijital teknoloji danışmanlığı: Dijital dönüşüm yol haritası, sistem mimarisi tasarımı ve teknoloji seçim rehberliği. Kurumunuzu geleceğe hazırlayın.' },
    en: { title: 'Technology Consulting – Digital Transformation Strategy', description: 'HC Digital technology consulting: Digital transformation roadmap, system architecture design, and technology selection guidance. Prepare your institution for the future.' },
  },
  'yapay-zeka': {
    tr: { title: 'Yapay Zeka Entegrasyonu – AI Çözümleri ve Makine Öğrenmesi', description: 'HC Dijital yapay zeka hizmetleri: Doğal dil işleme, makine öğrenmesi modelleri, AI entegrasyonu ve akıllı otomasyon. İş süreçlerinizi yapay zeka ile güçlendirin.' },
    en: { title: 'Artificial Intelligence – AI Solutions and Machine Learning', description: 'HC Digital AI services: Natural language processing, machine learning models, AI integration and intelligent automation. Empower your business processes with artificial intelligence.' },
  },
  'veri-bilimi': {
    tr: { title: 'Veri Bilimi – Makine Öğrenmesi ve Tahminsel Analitik', description: 'HC Dijital veri bilimi hizmetleri: Tahminsel analitik, makine öğrenmesi modelleri, veri madenciliği ve büyük veri çözümleri. Verilerinizden stratejik içgörüler elde edin.' },
    en: { title: 'Data Science – Machine Learning and Predictive Analytics', description: 'HC Digital data science services: Predictive analytics, machine learning models, data mining and big data solutions. Extract strategic insights from your data.' },
  },
  'veri-analitigi': {
    tr: { title: 'Veri Analitiği – İş Zekası ve Operasyonel Raporlama', description: 'HC Dijital veri analitiği: Kurumsal veri analizi, iş zekası platformları, operasyonel raporlama ve gerçek zamanlı veri akışı çözümleri. Veriyle daha iyi kararlar alın.' },
    en: { title: 'Data Analytics – Business Intelligence and Operational Reporting', description: 'HC Digital data analytics: Enterprise data analysis, business intelligence platforms, operational reporting and real-time data stream solutions. Make better decisions with data.' },
  },
}

const serviceTitlesForBreadcrumb = {
  'yazilim-gelistirme': { tr: 'Yazılım Geliştirme', en: 'Software Development' },
  'raporlama-sistemleri': { tr: 'Raporlama Sistemleri', en: 'Reporting Systems' },
  'teknoloji-danismanligi': { tr: 'Teknoloji Danışmanlığı', en: 'Technology Consulting' },
  'yapay-zeka': { tr: 'Yapay Zeka', en: 'Artificial Intelligence' },
  'veri-bilimi': { tr: 'Veri Bilimi', en: 'Data Science' },
  'veri-analitigi': { tr: 'Veri Analitiği', en: 'Data Analytics' },
}

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const { lang } = useLang()

  const exists = services.find((s) => s.slug === slug)
  if (!exists) return <Navigate to="/servisler" replace />

  const PageComponent = pageMap[slug]
  if (!PageComponent) return <Navigate to="/servisler" replace />

  const meta = serviceSeoMeta[slug]?.[lang] || {}
  const serviceTitle = serviceTitlesForBreadcrumb[slug]?.[lang] || slug

  return (
    <>
      <SEO
        title={meta.title || `${serviceTitle} | HC Dijital`}
        description={meta.description || ''}
        keywords={`${serviceTitle}, HC Dijital, dijital dönüşüm, kurumsal yazılım`}
        canonical={`/servisler/${slug}`}
        lang={lang}
        jsonLd={[
          serviceJsonLd({
            title: serviceTitle,
            description: meta.description || '',
            url: `/servisler/${slug}`,
          }),
          breadcrumbJsonLd([
            { name: lang === 'tr' ? 'Ana Sayfa' : 'Home', url: '/' },
            { name: lang === 'tr' ? 'Hizmetler' : 'Services', url: '/servisler' },
            { name: serviceTitle, url: `/servisler/${slug}` },
          ]),
        ]}
      />
      <PageComponent />
    </>
  )
}
