import TopAppBar from '@/components/shared/TopAppBar'
import BottomNavBar from '@/components/shared/BottomNavBar'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/sections/HeroSection'
import PricingSection from '@/components/sections/PricingSection'
import VibeSection from '@/components/sections/VibeSection'
import VideoPreviewSection from '@/components/sections/VideoPreviewSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ImpactSection from '@/components/sections/ImpactSection'

export default function Home() {
  return (
    <>
      <TopAppBar />
      
      <main className="min-h-screen bg-[#050508] overflow-x-hidden">
        <HeroSection />
        <VibeSection />
        <VideoPreviewSection />
        <ProcessSection />
        <section id="pricing" className="relative py-24 px-4 overflow-hidden">
          <PricingSection />
        </section>
        <ImpactSection />
      </main>
      
      <Footer />
      <BottomNavBar />
    </>
  )
}
