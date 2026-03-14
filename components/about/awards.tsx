"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Medal } from "lucide-react"

const awards = [
  {
    icon: Trophy,
    title: "President Paul Biya Excellence Award",
    description: "Recognized for outstanding contributions to agricultural innovation and youth empowerment in Cameroon.",
    year: "2024",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Medal,
    title: "Kate Kanyi Excellence Award",
    description: "Two-time recipient for exceptional leadership in sustainable agriculture and community development.",
    year: "2023 & 2024",
    color: "from-primary to-secondary",
  },
  {
    icon: Award,
    title: "Nourishing Africa Pitching Competition",
    description: "Third place winner of the prestigious 2025 competition for innovative agricultural solutions in Cameroon.",
    year: "2025",
    color: "from-blue-500 to-cyan-500",
  },
]

export function Awards() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
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
          <span className="text-primary font-medium">Recognition</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Academic Excellence Awards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Honored for contributions to agricultural innovation and academic excellence.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-card rounded-3xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${award.color}`} />

                <div className="p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center mb-6`}
                  >
                    <award.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Year Badge */}
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                    {award.year}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {award.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
