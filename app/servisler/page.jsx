import ServicesPageClient from '../../components/pages/ServicesPage'

export const metadata = {
  title: 'Hizmetlerimiz | HC Dijital',
  description: 'HC Dijital hizmetleri: Yazılım geliştirme, yapay zeka entegrasyonu, veri analitiği, raporlama sistemleri, teknoloji danışmanlığı ve veri bilimi. Sağlık ve kurumsal sektörde dijital dönüşüm.',
  keywords: 'yazılım geliştirme, yapay zeka, veri analitiği, teknoloji danışmanlığı, raporlama sistemleri, HC Dijital',
  alternates: {
    canonical: 'https://www.hcdijital.com.tr/servisler',
  },
  openGraph: {
    title: 'Hizmetlerimiz | HC Dijital',
    description: 'Yazılım geliştirmeden yapay zekaya, veri analitiğinden teknoloji danışmanlığına kadar uçtan uca dijital dönüşüm hizmetleri.',
    url: 'https://www.hcdijital.com.tr/servisler',
  },
}

export default function ServislerPage() {
  return <ServicesPageClient />
}
