"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, HandHeart, Home, Leaf } from "lucide-react"

const volunteerAreas = [
  {
    icon: HandHeart,
    title: "Farmer Support",
    description: "Direct assistance to smallholder farmers with training, resources, and market access.",
  },
  {
    icon: Home,
    title: "Community Development",
    description: "Working with local communities to improve agricultural infrastructure and food security.",
  },
  {
    icon: Leaf,
    title: "Environmental Protection",
    description: "Leading initiatives for tree planting, soil conservation, and sustainable practices.",
  },
]

export function CommunitySection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 text-rose-600 text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Giving Back</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Community Volunteering
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to making a positive impact in local communities through volunteer work and grassroots initiatives
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
        >
          {[
            "/farm/conference.jpeg",
            "/farm/collaburations.jpeg",
            "/farm/farmfive.jpeg",
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[3/2] rounded-2xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Community volunteering ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Volunteer Areas */}
        <div className="grid md:grid-cols-3 gap-8">
          {volunteerAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card p-8 rounded-2xl border border-border hover:border-rose-500/50 hover:shadow-xl transition-all text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6"
              >
                <area.icon className="w-8 h-8 text-rose-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
              <p className="text-muted-foreground">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
