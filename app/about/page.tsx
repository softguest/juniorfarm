import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { Biography } from "@/components/about/biography"
import { Timeline } from "@/components/about/timeline"
import { Awards } from "@/components/about/awards"

export const metadata: Metadata = {
  title: "About | Mbi Enoh Tennyson Junior",
  description: "Learn about Mbi Enoh Tennyson Junior - Award-winning agronomist, climate advocate, and youth agricultural innovator from Cameroon.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Biography />
      <Timeline />
      <Awards />
    </>
  )
}
