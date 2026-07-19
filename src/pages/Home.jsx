import Seo from '../components/Seo'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Stats from '../components/Stats'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
