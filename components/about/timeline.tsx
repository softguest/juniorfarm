"use client"

import { motion } from "framer-motion"
import { Building2, Leaf, Users, Mic2, DollarSign } from "lucide-react"

const timelineItems = [
  {
    icon: Building2,
    title: "COO",
    organization: "Mekor Bobos Ltd",
    description: "Leading operations and strategy for award-winning gluten-free flour production company.",
    current: true,
  },
  {
    icon: Leaf,
    title: "Founder",
    organization: "EcoShield",
    description: "Pioneering organic fertilizer innovation for regenerative agriculture and soil restoration.",
    current: true,
  },
  {
    icon: Users,
    title: "Public Relations Officer",
    organization: "FAVMSA",
    description: "Representing and advocating for agricultural students and young farmers.",
    current: true,
  },
  {
    icon: Mic2,
    title: "Program Delegate",
    organization: "Plant Health Management",
    description: "Serving as the voice for Plant Health Management students at the university level.",
    current: true,
  },
  {
    icon: DollarSign,
    title: "Former Finance Director",
    organization: "MIMIO NGO",
    description: "Managed financial operations and budgeting for community development initiatives.",
    current: false,
  },
]

export function Timeline() {
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
          <span className="text-primary font-medium">Career Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Leadership & Roles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of positions and responsibilities that have shaped my agricultural journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-foreground">
                            {item.title}
                          </h3>
                          {item.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium mb-2">
                          {item.organization}
                        </p>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Dot (Desktop only) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full bg-primary border-4 border-background"
                  />
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
