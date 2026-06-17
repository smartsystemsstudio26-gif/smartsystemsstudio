import { FloatingButtons } from '@/components/floating-buttons'
import { LoadingScreen } from '@/components/loading-screen'
import { Navbar } from '@/components/navbar'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { Hero } from '@/components/sections/hero'
import { Portfolio } from '@/components/sections/portfolio'
import { Services } from '@/components/sections/services'
import { Testimonials } from '@/components/sections/testimonials'
import { WhyUs } from '@/components/sections/why-us'
import { Toaster } from '@/components/ui/sonner'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Smart Systems Studio',
  description:
    'Smart Digital Solutions for Modern Businesses — business registration, BEE certificates, websites, business software, graphic design and digital automation.',
  email: 'smartsystemsstudio26@gmail.com',
  telephone: '+27 63 075 1348',
  areaServed: 'ZA',
  slogan: 'Smart Digital Solutions for Modern Businesses',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <Toaster position="top-center" richColors />
    </>
  )
}
