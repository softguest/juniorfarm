"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { GraduationCap, MapPin, Heart } from "lucide-react"

export function Biography() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                // src="https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=800&h=800&fit=crop"
                src="/farm/junior.jpeg"
                alt="Agricultural innovation and farming"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-2xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">B.Sc Agriculture</p>
                  <p className="text-sm text-muted-foreground">Plant Health Management</p>
                  <p className="text-sm text-primary">University of Buea</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 w-32 h-32 border-4 border-dashed border-primary/20 rounded-full"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Personal Biography
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                <span className="text-2xl font-bold text-primary float-left mr-2 mt-1">M</span>
                bi Enoh Tennyson Junior is an award-winning agronomist driven by a deep commitment to transforming food systems, empowering farmers, and advancing climate-smart agriculture in Cameroon and beyond.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                With a Bachelor of Science degree in Agriculture, specializing in Plant Health Management from the prestigious University of Buea, I have dedicated my career to bridging the gap between scientific research and practical farming solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                My journey in agriculture has been marked by a relentless pursuit of innovation, sustainability, and community empowerment. From founding EcoShield, an organic fertilizer innovation, to serving as COO of Mekor Bobos Ltd, I continue to push the boundaries of what&apos;s possible in African agriculture.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Beyond my professional endeavors, I am passionate about mentoring young agricultural entrepreneurs and advocating for climate-conscious farming practices that will secure food systems for future generations.
              </motion.p>
            </div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Cameroon</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm">Sustainable Agriculture</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
