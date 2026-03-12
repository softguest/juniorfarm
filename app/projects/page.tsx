import { Metadata } from "next"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { EcoShieldSection } from "@/components/projects/ecoshield-section"
import { MekorBobosSection } from "@/components/projects/mekor-bobos-section"
import { YouthProgramsSection } from "@/components/projects/youth-programs-section"

export const metadata: Metadata = {
  title: "Projects | Mbi Enoh Tennyson Junior",
  description: "Explore innovative agricultural projects including EcoShield organic fertilizer, Mekor Bobos gluten-free flour, and youth agriculture programs.",
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <EcoShieldSection />
      <MekorBobosSection />
      <YouthProgramsSection />
    </>
  )
}
