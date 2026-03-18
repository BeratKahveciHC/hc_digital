import { useParams, Navigate } from 'react-router-dom'
import { services } from '../data/services'
import VeriAnalitigiPage from './services/VeriAnalitigiPage'
import YazilimGelistirmePage from './services/YazilimGelistirmePage'
import YapayZekaPage from './services/YapayZekaPage'
import RaporlamaSistemleriPage from './services/RaporlamaSistemleriPage'
import TeknolojDanismanligiPage from './services/TeknolojDanismanligiPage'
import VeriBilimiPage from './services/VeriBilimiPage'

const pageMap = {
  'veri-analitigi':         VeriAnalitigiPage,
  'yazilim-gelistirme':     YazilimGelistirmePage,
  'yapay-zeka':             YapayZekaPage,
  'raporlama-sistemleri':   RaporlamaSistemleriPage,
  'teknoloji-danismanligi': TeknolojDanismanligiPage,
  'veri-bilimi':            VeriBilimiPage,
}

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const exists = services.find((s) => s.slug === slug)
  if (!exists) return <Navigate to="/servisler" replace />

  const PageComponent = pageMap[slug]
  if (!PageComponent) return <Navigate to="/servisler" replace />

  return <PageComponent />
}
