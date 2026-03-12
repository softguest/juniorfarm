"use client"

import { motion } from "framer-motion"
import { MessageSquare, Search, Lightbulb, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Initial Consultation",
    description: "We start with a detailed discussion to understand your agricultural challenges, goals, and specific requirements.",
  },
  {
    icon: Search,
    step: "02",
    title: "Assessment & Analysis",
    description: "I conduct a thorough assessment of your current practices, resources, and opportunities for improvement.",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Strategy Development",
    description: "Based on the analysis, I develop a customized strategy and action plan tailored to your unique situation.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Implementation & Support",
    description: "I guide you through implementation and provide ongoing support to ensure sustainable success.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            My Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to delivering impactful agricultural solutions
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center"
                  >
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-accent-foreground">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
