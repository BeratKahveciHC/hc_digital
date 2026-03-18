import { useParams, Navigate } from 'react-router-dom'
import { products } from '../data/products'
import AirxIkysPage from './products/AirxIkysPage'
import TercumedPage from './products/TercumedPage'
import KumandaMerkeziPage from './products/KumandaMerkeziPage'
import YonAssistPage from './products/YonAssistPage'
import ButceYonetimPage from './products/ButceYonetimPage'
import SpiralFreezerPage from './products/SpiralFreezerPage'

const pageMap = {
  'airx-ikys': AirxIkysPage,
  'tercumed': TercumedPage,
  'kumanda-merkezi': KumandaMerkeziPage,
  'yon-assist': YonAssistPage,
  'butce-yonetim': ButceYonetimPage,
  'spiral-freezer': SpiralFreezerPage,
}

export default function ProductDetailPage() {
  const { slug } = useParams()
  const exists = products.find((p) => p.slug === slug)
  if (!exists) return <Navigate to="/urunler" replace />

  const PageComponent = pageMap[slug]
  if (!PageComponent) return <Navigate to="/urunler" replace />

  return <PageComponent />
}
