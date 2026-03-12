import { Metadata } from "next"
import { AdvocacyHero } from "@/components/advocacy/advocacy-hero"
import { ClimateSection } from "@/components/advocacy/climate-section"
import { YouthLeadershipSection } from "@/components/advocacy/youth-leadership-section"
import { CommunitySection } from "@/components/advocacy/community-section"
import { ImpactStats } from "@/components/advocacy/impact-stats"

export const metadata: Metadata = {
  title: "Advocacy & Impact | Mbi Enoh Tennyson Junior",
  description: "Climate advocacy, youth agricultural leadership, and community volunteering initiatives by Mbi Enoh Tennyson Junior.",
}

export default function AdvocacyPage() {
  return (
    <>
      <AdvocacyHero />
      <ClimateSection />
      <YouthLeadershipSection />
      <CommunitySection />
      <ImpactStats />
    </>
  )
}
