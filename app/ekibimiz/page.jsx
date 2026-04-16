import TeamPageClient from '../../components/pages/TeamPage'

export const metadata = {
  title: 'Ekibimiz | HC Dijital',
  description: 'HC Dijital ekibi - Deneyimli yazılım geliştiriciler, veri bilimciler ve teknoloji uzmanlarından oluşan ekibimizle tanışın.',
  keywords: 'HC Dijital ekibi, yazılım geliştirici, veri bilimci, teknoloji uzmanı',
  alternates: {
    canonical: 'https://www.hcdijital.com.tr/ekibimiz',
  },
  openGraph: {
    title: 'Ekibimiz | HC Dijital',
    description: 'HC Dijital ekibiyle tanışın.',
    url: 'https://www.hcdijital.com.tr/ekibimiz',
  },
}

export default function EkibimizPage() {
  return <TeamPageClient />
}
