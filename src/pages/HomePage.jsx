import Header from '../components/layout/Header'
import Hero from '../components/sections/Hero'
import LogoMarquee from '../components/sections/LogoMarquee'
import Services from '../components/sections/Services'
import Products from '../components/sections/Products'
import CTA from '../components/sections/CTA'
import Footer from '../components/layout/Footer'

export default function HomePage() {
  return (
    <div className="bg-white text-dark">
      <Header />
      <Hero />
      <LogoMarquee />
      <Services />
      <Products />
      <CTA />
      <Footer />
    </div>
  )
}
