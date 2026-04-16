import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'))
const BrandsPage = lazy(() => import('./pages/BrandsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const AboutCompanyPage = lazy(() => import('./pages/AboutCompanyPage'))
const TeamPage = lazy(() => import('./pages/TeamPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'))
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
    <HelmetProvider>
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
            <Route path="/hakkimizda" element={<AboutCompanyPage />} />
            <Route path="/ekibimiz" element={<TeamPage />} />
            <Route path="/haberler" element={<NewsPage />} />
            <Route path="/haberler/:slug" element={<NewsDetailPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/kvkk" element={<KvkkPage />} />
            <Route path="/gizlilik" element={<GizlilikPage />} />
            <Route path="/cerez" element={<CerezPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
    </HelmetProvider>
  )
}

export default App
