import HeroSection from '@/components/sections/HeroSection'
import PricingSection from '@/components/sections/PricingSection'
import VibeSection from '@/components/sections/VibeSection'
import VideoPreviewSection from '@/components/sections/VideoPreviewSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ImpactSection from '@/components/sections/ImpactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <VibeSection />
      <VideoPreviewSection />
      <ProcessSection />
      <PricingSection />
      <ImpactSection />
    </>
  )
}
