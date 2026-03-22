import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Work from '@/components/Work'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <Work />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
