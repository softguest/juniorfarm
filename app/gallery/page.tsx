import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Media Gallery | Mbi Enoh Tennyson Junior",
  description: "Photo gallery showcasing farming activities, training workshops, field visits, and conferences.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryHero />
      <GalleryGrid />
    </main>
  )
}
