"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CloudSun, Droplets, Wind, Thermometer } from "lucide-react"

const climateActions = [
  {
    icon: CloudSun,
    title: "Climate Education",
    description: "Teaching farmers and communities about climate change impacts and adaptation strategies.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Promoting efficient water management techniques in agricultural practices.",
  },
  {
    icon: Wind,
    title: "Carbon Reduction",
    description: "Advocating for farming practices that reduce carbon emissions and sequester carbon in soil.",
  },
  {
    icon: Thermometer,
    title: "Heat Resilience",
    description: "Helping farmers adapt crops and practices to rising temperatures.",
  },
]

export function ClimateSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mb-6">
              <CloudSun className="w-4 h-4" />
              <span>Climate Advocacy</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Fighting Climate Change Through Agriculture
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Climate change is one of the greatest challenges facing agriculture today. I am committed to advocating for climate-smart practices that help farmers adapt while protecting our environment for future generations.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {climateActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <action.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/farm/images.jpeg"
                alt="Climate and environment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>

            {/* Decorative */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border-4 border-dashed border-blue-500/30 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
