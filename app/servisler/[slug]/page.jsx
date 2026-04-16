import ServiceDetailPageClient from '../../../components/pages/ServiceDetailPage'
import { services } from '../../../data/services'

const serviceSeoMeta = {
  'yazilim-gelistirme': {
    title: 'Yazılım Geliştirme – Kurumsal Özel Yazılım Çözümleri | HC Dijital',
    description: 'HC Dijital ile sektörünüze özel, ölçeklenebilir kurumsal yazılım çözümleri. Web uygulaması, mobil uygulama, API entegrasyonu, bulut platformu geliştirme hizmetleri.',
    keywords: 'kurumsal yazılım geliştirme, özel yazılım, web uygulaması, mobil uygulama, HC Dijital',
  },
  'raporlama-sistemleri': {
    title: 'Raporlama Sistemleri – Veri Görselleştirme ve İş Zekası | HC Dijital',
    description: 'HC Dijital raporlama sistemleri: Gerçek zamanlı dashboard, otomatik rapor üretimi, KPI takibi ve veri görselleştirme.',
    keywords: 'raporlama sistemleri, dashboard, KPI takibi, veri görselleştirme, iş zekası, HC Dijital',
  },
  'teknoloji-danismanligi': {
    title: 'Teknoloji Danışmanlığı – Dijital Dönüşüm Stratejisi | HC Dijital',
    description: 'HC Dijital teknoloji danışmanlığı: Dijital dönüşüm yol haritası, sistem mimarisi tasarımı ve teknoloji seçim rehberliği.',
    keywords: 'teknoloji danışmanlığı, dijital dönüşüm, sistem mimarisi, HC Dijital',
  },
  'yapay-zeka': {
    title: 'Yapay Zeka Entegrasyonu – AI Çözümleri ve Makine Öğrenmesi | HC Dijital',
    description: 'HC Dijital yapay zeka hizmetleri: Doğal dil işleme, makine öğrenmesi modelleri, AI entegrasyonu ve akıllı otomasyon.',
    keywords: 'yapay zeka, AI entegrasyonu, makine öğrenmesi, NLP, otomasyon, HC Dijital',
  },
  'veri-bilimi': {
    title: 'Veri Bilimi – Makine Öğrenmesi ve Tahminsel Analitik | HC Dijital',
    description: 'HC Dijital veri bilimi hizmetleri: Tahminsel analitik, makine öğrenmesi modelleri, veri madenciliği ve büyük veri çözümleri.',
    keywords: 'veri bilimi, makine öğrenmesi, tahminsel analitik, veri madenciliği, HC Dijital',
  },
  'veri-analitigi': {
    title: 'Veri Analitiği – İş Zekası ve Operasyonel Raporlama | HC Dijital',
    description: 'HC Dijital veri analitiği: Kurumsal veri analizi, iş zekası platformları, operasyonel raporlama ve gerçek zamanlı veri akışı çözümleri.',
    keywords: 'veri analitiği, iş zekası, operasyonel raporlama, kurumsal veri analizi, HC Dijital',
  },
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const meta = serviceSeoMeta[slug]

  if (!meta) {
    return { title: 'Hizmet | HC Dijital' }
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://www.hcdijital.com.tr/servisler/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.hcdijital.com.tr/servisler/${slug}`,
    },
  }
}

export default function ServisDetayPage() {
  return <ServiceDetailPageClient />
}
