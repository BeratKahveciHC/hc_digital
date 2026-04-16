import ContactPageClient from '../../components/pages/ContactPage'

export const metadata = {
  title: 'İletişim | HC Dijital',
  description: 'HC Dijital ile iletişime geçin. Demo talep edin, görüşme planlayın veya bilgi alın. İstanbul\'daki ofisimizi ziyaret edin ya da e-posta gönderin.',
  keywords: 'HC Dijital iletişim, demo talep, görüşme planla, İstanbul ofis, info@hcdijital.com.tr',
  alternates: {
    canonical: 'https://www.hcdijital.com.tr/iletisim',
  },
  openGraph: {
    title: 'İletişim | HC Dijital',
    description: 'HC Dijital ile iletişime geçin. Demo talep edin veya görüşme planlayın.',
    url: 'https://www.hcdijital.com.tr/iletisim',
  },
}

export default function IletisimPage() {
  return <ContactPageClient />
}
