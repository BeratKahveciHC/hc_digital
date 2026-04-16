import ProductsPageClient from '../../components/pages/ProductsPage'

export const metadata = {
  title: 'Ürünlerimiz | HC Dijital',
  description: 'HC Dijital yazılım ürünleri: AirX IKYS, Tercümed, Kumanda Merkezi, Yön Assist, Hastane Bütçe Yönetim Sistemi, Spiral Freezer. Sağlık ve kurumsal sektöre özel yazılım çözümleri.',
  keywords: 'HC Dijital ürünler, AirX IKYS, Tercümed, Kumanda Merkezi, Yön Assist, hastane yazılımı, kurumsal yazılım',
  alternates: {
    canonical: 'https://www.hcdijital.com.tr/urunler',
  },
  openGraph: {
    title: 'Ürünlerimiz | HC Dijital',
    description: 'HC Dijital yazılım ürünleri: Sağlık ve kurumsal sektöre özel yazılım çözümleri.',
    url: 'https://www.hcdijital.com.tr/urunler',
  },
}

export default function UrunlerPage() {
  return <ProductsPageClient />
}
