import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactSection } from "@/components/contact/contact-section"

export const metadata: Metadata = {
  title: "Contact | Mbi Enoh Tennyson Junior",
  description: "Get in touch with Mbi Enoh Tennyson Junior for agricultural consulting, speaking engagements, and collaboration opportunities.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactSection />
      {/* <Footer /> */}
    </main>
  )
}
