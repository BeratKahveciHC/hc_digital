import GizlilikPageClient from '../../components/pages/GizlilikPage'

export const metadata = {
  title: 'Gizlilik Politikası | HC Dijital',
  description: 'HC Dijital gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğuna dair kapsamlı bilgi.',
  alternates: {
    canonical: 'https://www.hcdijital.com.tr/gizlilik',
  },
}

export default function GizlilikPage() {
  return <GizlilikPageClient />
}
