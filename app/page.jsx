import HomePageClient from '../components/pages/HomePageClient'

export const metadata = {
  title: 'HC Dijital | Yapay Zeka Destekli Sağlık ve Kurumsal Yazılım Çözümleri',
  description: 'HC Dijital, sağlık kurumları ve işletmeler için yapay zeka destekli yazılım çözümleri geliştiriyor. AirX IKYS, Tercümed, Kumanda Merkezi ve daha fazlası. 40+ aktif kurum, 8+ yıl deneyim.',
  keywords: 'dijital sağlık yazılımı, yapay zeka sağlık, IK yönetim sistemi, hastane yazılımı, veri analitiği, kurumsal yazılım, HC Dijital',
  alternates: {
    canonical: 'https://www.hcdijital.com.tr',
  },
  openGraph: {
    title: 'HC Dijital | Yapay Zeka Destekli Sağlık ve Kurumsal Yazılım Çözümleri',
    description: 'HC Dijital, sağlık kurumları ve işletmeler için yapay zeka destekli yazılım çözümleri geliştiriyor.',
    url: 'https://www.hcdijital.com.tr',
    type: 'website',
  },
}

export default function HomePage() {
  return <HomePageClient />
}
