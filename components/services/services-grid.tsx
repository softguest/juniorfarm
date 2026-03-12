"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sprout, CloudSun, FlaskConical, Users, Presentation, Mic2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Sprout,
    title: "Agricultural Consulting",
    description: "Expert guidance on crop management, farm planning, pest control, and sustainable agricultural practices tailored to your specific needs.",
    features: [
      "Crop selection and rotation planning",
      "Integrated pest management",
      "Farm productivity optimization",
      "Market-oriented farming strategies",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: CloudSun,
    title: "Climate Smart Agriculture Training",
    description: "Comprehensive training programs on adapting farming practices to climate change challenges while maintaining productivity.",
    features: [
      "Climate risk assessment",
      "Drought-resistant farming techniques",
      "Water conservation methods",
      "Carbon footprint reduction",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FlaskConical,
    title: "Soil Health & Organic Fertilizer Advisory",
    description: "Specialized guidance on soil restoration, organic fertilizer application, and building long-term soil fertility.",
    features: [
      "Soil testing and analysis",
      "Organic fertilizer recommendations",
      "Composting techniques",
      "Soil microbiome restoration",
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Youth Agripreneurship Mentorship",
    description: "Comprehensive mentorship programs for young agricultural entrepreneurs looking to build successful agribusinesses.",
    features: [
      "Business plan development",
      "Access to funding opportunities",
      "Market linkage support",
      "Leadership development",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Presentation,
    title: "Agricultural Innovation Workshops",
    description: "Hands-on training sessions on agricultural technology, innovation, and modern farming techniques.",
    features: [
      "Precision agriculture tools",
      "Agricultural technology adoption",
      "Innovation methodologies",
      "Prototype development",
    ],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Mic2,
    title: "Public Speaking on Agriculture & Climate",
    description: "Engaging keynote speeches and presentations on agriculture, climate change, and sustainable development.",
    features: [
      "Conference keynotes",
      "Panel discussions",
      "University lectures",
      "Corporate events",
    ],
    color: "from-rose-500 to-red-500",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-background rounded-3xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-primary/50">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />

                <div className="p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Animated underline */}
                  <div className="h-0.5 bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                      className={`h-full bg-gradient-to-r ${service.color}`}
                    />
                  </div>
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
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Need a customized solution? Let&apos;s discuss your specific requirements.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
          >
            <Link href="/contact">
              Request a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
