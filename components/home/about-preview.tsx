"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Award, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: GraduationCap,
    title: "B.Sc Agriculture",
    description: "Plant Health Management",
  },
  {
    icon: Award,
    title: "Award Winner",
    description: "Paul Biya Excellence Award",
  },
  {
    icon: Users,
    title: "COO",
    description: "Mekor Bobos Ltd",
  },
]

export function AboutPreview() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,139,34,0.3),transparent_50%)]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/farm/junior.jpeg"
                alt="Agricultural field representing sustainable farming"
                fill
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-2xl border border-border max-w-xs"
            >
              <p className="text-sm text-muted-foreground mb-2">Founder of</p>
              <p className="text-xl font-bold text-primary">EcoShield</p>
              <p className="text-sm text-muted-foreground mt-1">
                Organic fertilizer innovation for regenerative agriculture
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -left-4 w-24 h-24 border-4 border-dashed border-primary/30 rounded-full"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium">About Me</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Driven by Passion for Sustainable Agriculture
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Mbi Enoh Tennyson Junior is an award-winning agronomist driven by a deep commitment to transforming food systems, empowering farmers, and advancing climate-smart agriculture in Cameroon and beyond.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With a background in Plant Health Management from the University of Buea, I combine scientific knowledge with hands-on experience to create lasting impact in agricultural communities.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-center p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full group"
            >
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
