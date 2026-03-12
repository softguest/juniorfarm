import { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ProcessSection } from "@/components/services/process-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Services | Mbi Enoh Tennyson Junior",
  description: "Agricultural consulting, climate-smart training, soil health advisory, youth mentorship, and public speaking services by Mbi Enoh Tennyson Junior.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </>
  )
}
