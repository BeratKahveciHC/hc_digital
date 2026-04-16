import AboutCompanyPageClient from '../../components/pages/AboutCompanyPage'

export const metadata = {
  title: 'Şirket Hakkında | HC Dijital',
  description: 'HC Dijital Sağlık Teknolojileri hakkında. 2016\'dan bu yana sağlık kurumları ve işletmeler için yapay zeka destekli yazılım çözümleri geliştiriyoruz. Misyon, vizyon ve değerlerimiz.',
  keywords: 'HC Dijital hakkında, şirket bilgileri, sağlık teknolojileri, misyon vizyon, İstanbul teknoloji şirketi',
  alternates: {
    canonical: 'https://www.hcdijital.com.tr/hakkimizda',
  },
  openGraph: {
    title: 'Şirket Hakkında | HC Dijital',
    description: '2016\'dan bu yana sağlık kurumları ve işletmeler için yapay zeka destekli yazılım çözümleri geliştiriyoruz.',
    url: 'https://www.hcdijital.com.tr/hakkimizda',
  },
}

export default function HakkimizdaPage() {
  return <AboutCompanyPageClient />
}
