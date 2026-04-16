import BrandsPageClient from '../../components/pages/BrandsPage'

export const metadata = {
  title: 'Referanslarımız | HC Dijital',
  description: 'LIV Hospital, Medical Park, MLP Care, İstinye Üniversitesi ve 40+ kurumun güvendiği HC Dijital. Sağlık ve kurumsal sektördeki referanslarımızı keşfedin.',
  keywords: 'HC Dijital referanslar, LIV Hospital, Medical Park, MLP Care, İstinye Üniversitesi, hastane yazılımı referansları',
  alternates: {
    canonical: 'https://www.hcdijital.com.tr/referanslar',
  },
  openGraph: {
    title: 'Referanslarımız | HC Dijital',
    description: '40+ kurumun güvendiği HC Dijital referansları.',
    url: 'https://www.hcdijital.com.tr/referanslar',
  },
}

export default function ReferanslarPage() {
  return <BrandsPageClient />
}
