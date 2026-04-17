import ProductDetailPageClient from '../../../components/pages/ProductDetailPage'
import { products } from '../../../data/products'

const productSeoMeta = {
  'airx-ikys': {
    title: 'AirX IKYS – Personel Devam Takibi ve İK Yönetim Sistemi | HC Dijital',
    description: 'AirX IKYS, personel giriş-çıkış takibi, vardiya planlaması ve izin yönetimini tek platformda birleştiriyor. Bulut tabanlı, mobil erişimli İK yönetim sistemi. Aynı gün kurulum.',
    keywords: 'AirX IKYS, personel takip sistemi, İK yönetimi, vardiya planlaması, PDKS, HC Dijital',
  },
  'tercumed': {
    title: 'Tercümed – Yapay Zeka Destekli Tıbbi Belge Çeviri Sistemi | HC Dijital',
    description: 'Tercümed, tıbbi belgeleri saniyeler içinde 30+ dile çeviriyor. Taburculuk belgesi, onam formu ve klinik belgeler için yapay zeka destekli, klinik doğruluklu çeviri.',
    keywords: 'Tercümed, tıbbi çeviri, yapay zeka çeviri, taburculuk belgesi, onam formu, HC Dijital',
  },
  'butce-yonetim': {
    title: 'Hastane Bütçe Yönetim Sistemi – AI Destekli Finansal Platform | HC Dijital',
    description: 'Otomatik gider-gelir takibi, gerçek zamanlı öngörüler ve AI destekli raporlarla hastane bütçe yönetimini kolaylaştıran ölçeklenebilir ve güvenli platform.',
    keywords: 'hastane bütçe yönetimi, finansal platform, AI raporlama, ERP entegrasyonu, HC Dijital',
  },
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const meta = productSeoMeta[slug]
  const product = products.find((p) => p.slug === slug)

  if (!meta || !product) {
    return { title: 'Ürün | HC Dijital' }
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://www.hcdijital.com.tr/urunler/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.hcdijital.com.tr/urunler/${slug}`,
      images: product.heroImage ? [{ url: `https://www.hcdijital.com.tr${product.heroImage}`, width: 1200, height: 630 }] : [],
      type: 'website',
    },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: product.title,
        description: product.description,
        url: `https://www.hcdijital.com.tr/urunler/${slug}`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        publisher: { '@type': 'Organization', name: 'HC Dijital', url: 'https://www.hcdijital.com.tr' },
      }),
    },
  }
}

export default function UrunDetayPage() {
  return <ProductDetailPageClient />
}
