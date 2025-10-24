import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemVisionSection } from "@/components/problem-vision-section"
import { IntegratedApproachSection } from "@/components/integrated-approach-section"
import { WhoWeServeSection } from "@/components/who-we-serve-section"
import { PreLaunchSection } from "@/components/pre-launch-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemVisionSection />
      <IntegratedApproachSection />
      <WhoWeServeSection />
      <PreLaunchSection />
      <Footer />
    </main>
  )
}
