'use client'

import Header from '../layout/Header'
import Hero from '../sections/Hero'
import LogoMarquee from '../sections/LogoMarquee'
import Services from '../sections/Services'
import Products from '../sections/Products'
import CTA from '../sections/CTA'
import Footer from '../layout/Footer'

export default function HomePageClient() {
  return (
    <div className="bg-white text-dark">
      <Header />
      <Hero />
      <LogoMarquee />
      <Products />
      <Services />
      <CTA />
      <Footer />
    </div>
  )
}
