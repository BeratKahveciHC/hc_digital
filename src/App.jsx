import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import BrandsPage from './pages/BrandsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import KvkkPage from './pages/KvkkPage'
import GizlilikPage from './pages/GizlilikPage'
import CerezPage from './pages/CerezPage'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/urunler" element={<ProductsPage />} />
          <Route path="/urunler/:slug" element={<ProductDetailPage />} />
          <Route path="/servisler" element={<ServicesPage />} />
          <Route path="/servisler/:slug" element={<ServiceDetailPage />} />
          <Route path="/markalar" element={<BrandsPage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/kvkk" element={<KvkkPage />} />
          <Route path="/gizlilik" element={<GizlilikPage />} />
          <Route path="/cerez" element={<CerezPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
