import KvkkPageClient from '../../components/pages/KvkkPage'

export const metadata = {
  title: 'KVKK Aydınlatma Metni | HC Dijital',
  description: 'HC Dijital Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni. Kişisel verilerinizin işlenmesi, saklanması ve haklarınız hakkında bilgi edinin.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.hcdijital.com.tr/kvkk',
  },
}

export default function KvkkPage() {
  return <KvkkPageClient />
}
