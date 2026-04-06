import { useParams, Navigate } from 'react-router-dom'
import { products } from '../data/products'
import { useLang } from '../context/LanguageContext'
import SEO, { productJsonLd, breadcrumbJsonLd } from '../components/SEO'
import AirxIkysPage from './products/AirxIkysPage'
import TercumedPage from './products/TercumedPage'
import KumandaMerkeziPage from './products/KumandaMerkeziPage'
import YonAssistPage from './products/YonAssistPage'
import ButceYonetimPage from './products/ButceYonetimPage'
import SpiralFreezerPage from './products/SpiralFreezerPage'

const pageMap = {
  'airx-ikys': AirxIkysPage,
  'tercumed': TercumedPage,
  'kumanda-merkezi': KumandaMerkeziPage,
  'yon-assist': YonAssistPage,
  'butce-yonetim': ButceYonetimPage,
  'spiral-freezer': SpiralFreezerPage,
}

const productSeoMeta = {
  'airx-ikys': {
    tr: { title: 'AirX IKYS – Personel Devam Takibi ve İK Yönetim Sistemi', description: 'AirX IKYS, personel giriş-çıkış takibi, vardiya planlaması ve izin yönetimini tek platformda birleştiriyor. Bulut tabanlı, mobil erişimli İK yönetim sistemi. Aynı gün kurulum.' },
    en: { title: 'AirX IKYS – Employee Attendance & HR Management System', description: 'AirX IKYS unifies employee attendance tracking, shift scheduling, and leave management in one platform. Cloud-based, mobile-accessible HR system. Same-day setup.' },
  },
  'tercumed': {
    tr: { title: 'Tercümed – Yapay Zeka Destekli Tıbbi Belge Çeviri Sistemi', description: 'Tercümed, tıbbi belgeleri saniyeler içinde 30+ dile çeviriyor. Taburculuk belgesi, onam formu ve klinik belgeler için yapay zeka destekli, klinik doğruluklu çeviri.' },
    en: { title: 'Tercümed – AI-Powered Medical Document Translation System', description: 'Tercümed translates medical documents into 30+ languages in seconds. AI-powered, clinically accurate translation for discharge summaries, consent forms and clinical documents.' },
  },
  'kumanda-merkezi': {
    tr: { title: 'Kumanda Merkezi – Gerçek Zamanlı Operasyonel Yönetim Platformu', description: 'Kumanda Merkezi, gerçek zamanlı veri akışı, alarm yönetimi ve kapsamlı raporlamayla kurumsal operasyonel görünürlüğü artırıyor. Hizmet sürekliliği garantisi.' },
    en: { title: 'Kumanda Merkezi – Real-Time Operational Management Platform', description: 'Kumanda Merkezi enhances institutional operational visibility with real-time data streams, alarm management, and comprehensive reporting. Service continuity guaranteed.' },
  },
  'yon-assist': {
    tr: { title: 'Yön Assist – Yapay Zeka Destekli Kurumsal Asistan', description: 'Yön Assist, sesli ve yazılı komutlarla toplantı özetleri, görev yönetimi ve zaman planlaması yapan yapay zeka destekli kurumsal asistan. Verimliliği artırın.' },
    en: { title: 'Yön Assist – AI-Powered Enterprise Assistant', description: 'Yön Assist is an AI-powered enterprise assistant that creates meeting summaries, manages tasks, and optimizes scheduling through voice and text commands.' },
  },
  'butce-yonetim': {
    tr: { title: 'Hastane Bütçe Yönetim Sistemi – AI Destekli Finansal Platform | HC Dijital', description: 'Otomatik gider-gelir takibi, gerçek zamanlı öngörüler ve AI destekli raporlarla hastane bütçe yönetimini kolaylaştıran ölçeklenebilir ve güvenli platform.' },
    en: { title: 'Hospital Budget Management System – AI-Powered Financial Platform | HC Digital', description: 'A scalable, secure hospital budget management platform with automated expense-revenue tracking, real-time forecasts, and AI-powered reports for strategic decision-making.' },
  },
  'spiral-freezer': {
    tr: { title: 'Spiral Freezer – Endüstriyel Hızlı Dondurma Sistemi | HC Dijital', description: 'Hücre içi buz kristali oluşumunu minimize ederek ürünlerin doğal doku, lezzet ve raf ömrünü koruyan endüstriyel Spiral Freezer teknolojisi. SCADA entegrasyonu.' },
    en: { title: 'Spiral Freezer – Industrial Rapid Freezing System | HC Digital', description: 'Industrial Spiral Freezer technology that minimizes intracellular ice crystal formation, preserving the natural texture, flavor, and shelf life of products. SCADA integration.' },
  },
}

export default function ProductDetailPage() {
  const { slug } = useParams()
  const { lang } = useLang()

  const product = products.find((p) => p.slug === slug)
  if (!product) return <Navigate to="/urunler" replace />

  const PageComponent = pageMap[slug]
  if (!PageComponent) return <Navigate to="/urunler" replace />

  const meta = productSeoMeta[slug]?.[lang] || {}
  const pd = lang === 'en' && product.en ? { ...product, ...product.en } : product
  const title = meta.title || `${pd.title} | HC Dijital`
  const description = meta.description || pd.description

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={`${pd.title}, ${(pd.tags || []).join(', ')}, HC Dijital`}
        canonical={`/urunler/${slug}`}
        ogImage={product.heroImage || product.image}
        lang={lang}
        type="product"
        jsonLd={[
          productJsonLd({
            title: pd.title,
            description: pd.description,
            url: `/urunler/${slug}`,
            image: product.heroImage || product.image || '',
          }),
          breadcrumbJsonLd([
            { name: lang === 'tr' ? 'Ana Sayfa' : 'Home', url: '/' },
            { name: lang === 'tr' ? 'Ürünler' : 'Products', url: '/urunler' },
            { name: pd.title, url: `/urunler/${slug}` },
          ]),
        ]}
      />
      <PageComponent />
    </>
  )
}
