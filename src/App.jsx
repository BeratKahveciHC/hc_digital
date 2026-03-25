import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'))
const BrandsPage = lazy(() => import('./pages/BrandsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const KvkkPage = lazy(() => import('./pages/KvkkPage'))
const GizlilikPage = lazy(() => import('./pages/GizlilikPage'))
const CerezPage = lazy(() => import('./pages/CerezPage'))

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
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/urunler" element={<ProductsPage />} />
            <Route path="/urunler/:slug" element={<ProductDetailPage />} />
            <Route path="/servisler" element={<ServicesPage />} />
            <Route path="/servisler/:slug" element={<ServiceDetailPage />} />
            <Route path="/referanslar" element={<BrandsPage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/kvkk" element={<KvkkPage />} />
            <Route path="/gizlilik" element={<GizlilikPage />} />
            <Route path="/cerez" element={<CerezPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
