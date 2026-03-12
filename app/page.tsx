import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { StatsSection } from "@/components/home/stats-section"
import { ProjectsShowcase } from "@/components/home/projects-showcase"
import { ServicesPreview } from "@/components/home/services-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <StatsSection />
      <ProjectsShowcase />
      <ServicesPreview />
      <CTASection />
    </>
  )
}
