"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Star, Target, Zap } from "lucide-react"

export function YouthLeadershipSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/farm/youthleadership.jpeg"
                alt="Youth leadership and empowerment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-2xl border border-border"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">Youth Mentored</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">15</p>
                  <p className="text-sm text-muted-foreground">Programs Led</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-dashed border-purple-500/30 rounded-full"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Youth Leadership</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Empowering the Next Generation of Agricultural Leaders
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I believe that young people are the key to transforming agriculture in Africa. Through mentorship, training, and advocacy, I work to inspire and equip youth with the skills and confidence they need to become agricultural innovators and leaders.
            </p>

            {/* Key Focus Areas */}
            <div className="space-y-4">
              {[
                { icon: Star, title: "Leadership Development", description: "Building confident, skilled young agricultural leaders" },
                { icon: Target, title: "Entrepreneurship Training", description: "Teaching business skills for successful agribusinesses" },
                { icon: Zap, title: "Innovation Mindset", description: "Encouraging creative problem-solving in agriculture" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
