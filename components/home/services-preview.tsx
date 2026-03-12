"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sprout, CloudSun, FlaskConical, Users, Presentation, Mic2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Sprout,
    title: "Agricultural Consulting",
    description: "Expert guidance on crop management, farm planning, and sustainable practices.",
  },
  {
    icon: CloudSun,
    title: "Climate Smart Agriculture",
    description: "Training on adapting farming practices to climate change challenges.",
  },
  {
    icon: FlaskConical,
    title: "Soil Health Advisory",
    description: "Organic fertilizer recommendations and soil restoration strategies.",
  },
  {
    icon: Users,
    title: "Youth Agripreneurship",
    description: "Mentorship programs for young agricultural entrepreneurs.",
  },
  {
    icon: Presentation,
    title: "Innovation Workshops",
    description: "Hands-on training sessions on agricultural technology and innovation.",
  },
  {
    icon: Mic2,
    title: "Public Speaking",
    description: "Keynote speeches on agriculture, climate change, and sustainability.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full border border-primary/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-primary/5 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">What I Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Services & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive agricultural solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Line */}
                <div className="mt-6 h-0.5 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    viewport={{ once: true }}
                    className="h-full bg-primary group-hover:w-full transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
          >
            <Link href="/services">
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
