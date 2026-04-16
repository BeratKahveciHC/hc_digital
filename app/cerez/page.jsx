import CerezPageClient from '../../components/pages/CerezPage'

export const metadata = {
  title: 'Çerez Politikası | HC Dijital',
  description: 'HC Dijital çerez politikası. Web sitemizde kullanılan çerezler, çerez türleri ve çerez tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi.',
  alternates: {
    canonical: 'https://www.hcdijital.com.tr/cerez',
  },
}

export default function CerezPage() {
  return <CerezPageClient />
}
