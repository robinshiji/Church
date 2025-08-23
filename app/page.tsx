import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ImageGallery } from "@/components/image-gallery"
import { MassTimings } from "@/components/mass-timings"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ImageGallery />
      <MassTimings />
      <ContactSection />
      <Footer />
    </main>
  )
}
