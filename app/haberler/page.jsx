import NewsPageClient from '../../components/pages/NewsPage'

export const metadata = {
  title: 'Haberler | HC Dijital',
  description: 'HC Dijital\'in en güncel haberleri, ürün lansmanları, proje başarıları ve şirket duyuruları. KOSGEB hibeleri, yeni ürün güncellemeleri ve teknogirişim başarıları.',
  keywords: 'HC Dijital haberler, ürün lansmanı, KOSGEB, teknogirişim, şirket haberleri',
  alternates: {
    canonical: 'https://www.hcdijital.com.tr/haberler',
  },
  openGraph: {
    title: 'Haberler | HC Dijital',
    description: 'HC Dijital\'in en güncel haberleri, ürün lansmanları ve şirket duyuruları.',
    url: 'https://www.hcdijital.com.tr/haberler',
  },
}

export default function HaberlerPage() {
  return <NewsPageClient />
}
