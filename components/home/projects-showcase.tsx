"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Leaf, FlaskConical, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "ecoshield",
    title: "EcoShield",
    subtitle: "Organic Fertilizer Innovation",
    description:
      "An organic fertilizer innovation focused on restoring soil health and promoting regenerative agriculture across Cameroon.",
    image: "/farm/fertilizer.jpeg",
    icon: Leaf,
    color: "from-green-600 to-emerald-600",
    href: "/projects#ecoshield",
  },
  {
    id: "mekor-bobos",
    title: "Mekor Bobos Ltd",
    subtitle: "Award-Winning Food Brand",
    description:
      "Award-winning gluten-free flour brand promoting healthy nutrition and agro-processing in Cameroon.",
    image: "/farm/flournew.jpeg",
    icon: FlaskConical,
    color: "from-amber-600 to-orange-600",
    href: "/projects#mekor-bobos",
  },
  {
    id: "youth-programs",
    title: "Youth Agriculture Programs",
    subtitle: "Empowering the Next Generation",
    description:
      "Initiatives focused on youth empowerment in agriculture and climate innovation for sustainable futures.",
    image: "/farm/conference.jpeg",
    icon: Users,
    color: "from-blue-600 to-cyan-600",
    href: "/projects#youth-programs",
  },
]

export function ProjectsShowcase() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Featured Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Transforming Agriculture
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the innovative projects driving sustainable change in Cameroon&apos;s agricultural landscape
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={project.href}>
                <div className="relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-sm text-primary font-medium">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Learn More */}
                    <div className="mt-4 flex items-center text-primary font-medium text-sm">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
