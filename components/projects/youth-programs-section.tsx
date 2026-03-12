"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Users, GraduationCap, Lightbulb, TrendingUp, Globe, Handshake } from "lucide-react"

const programs = [
  {
    icon: GraduationCap,
    title: "Agricultural Training",
    description: "Comprehensive training programs on modern farming techniques and best practices.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Labs",
    description: "Hands-on workshops where youth develop agricultural technology solutions.",
  },
  {
    icon: TrendingUp,
    title: "Business Mentorship",
    description: "Guidance on transforming agricultural ideas into sustainable businesses.",
  },
  {
    icon: Globe,
    title: "Climate Education",
    description: "Teaching youth about climate change impacts and adaptation strategies.",
  },
  {
    icon: Handshake,
    title: "Community Projects",
    description: "Collaborative initiatives that create real impact in local communities.",
  },
  {
    icon: Users,
    title: "Networking Events",
    description: "Connecting young farmers with industry leaders and opportunities.",
  },
]

const impactStats = [
  { value: "1000+", label: "Students Trained" },
  { value: "50+", label: "Workshops Held" },
  { value: "15", label: "Communities Reached" },
  { value: "100+", label: "Youth Mentored" },
]

export function YouthProgramsSection() {
  return (
    <section id="youth-programs" className="py-24 bg-muted/30 scroll-mt-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Empowering the Next Generation</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Youth Agriculture Programs
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Initiatives focused on youth empowerment in agriculture and climate innovation, building the next generation of agricultural leaders in Cameroon.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            "/farm/flournew.jpeg",
            "/farm/collaburations.jpeg",
            "/farm/conference.jpeg",
            "/farm/youthleadership.jpeg",
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Youth agriculture program ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-12 border border-border mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card p-6 rounded-2xl border border-border hover:border-blue-500/50 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                <program.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                {program.title}
              </h3>
              <p className="text-muted-foreground">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
