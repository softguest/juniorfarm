"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Leaf, Target, Lightbulb, TrendingUp, CheckCircle } from "lucide-react"

const features = [
  "100% organic and eco-friendly formula",
  "Restores depleted soil nutrients",
  "Increases crop yield by up to 40%",
  "Safe for farmers and environment",
  "Affordable for smallholder farmers",
  "Reduces dependency on chemical fertilizers",
]

const stats = [
  { label: "Soil Restored", value: "500+" , unit: "Hectares" },
  { label: "Farmers Reached", value: "200+", unit: "Families" },
  { label: "Yield Increase", value: "40%", unit: "Average" },
]

export function EcoShieldSection() {
  return (
    <section id="ecoshield" className="py-24 bg-card scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              <span>Organic Fertilizer Innovation</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              EcoShield
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              EcoShield is a groundbreaking organic fertilizer innovation focused on restoring soil health and promoting regenerative agriculture across Cameroon and beyond.
            </p>

            {/* Mission */}
            <div className="bg-muted/50 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To revolutionize soil health management by providing affordable, sustainable, and effective organic fertilizer solutions that empower smallholder farmers while protecting our environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Innovation Concept */}
            <div className="bg-muted/50 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Innovation Concept</h3>
                  <p className="text-muted-foreground">
                    Utilizing locally-sourced organic materials and innovative composting techniques to create a nutrient-rich fertilizer that rebuilds soil microbiome and enhances long-term productivity.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
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
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                // src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=1000&fit=crop"
                src="/farm/farmone.jpg"
                alt="EcoShield organic fertilizer and sustainable farming"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium">
                Prototype Stage
              </div>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 left-4 right-4 bg-card p-6 rounded-2xl shadow-2xl border border-border"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Impact Potential</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.unit}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -left-4 w-24 h-24 border-4 border-dashed border-green-500/30 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
