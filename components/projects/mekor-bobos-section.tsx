"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Heart, Wheat, Factory, Users, ShoppingBag } from "lucide-react"

const highlights = [
  {
    icon: Wheat,
    title: "Gluten-Free",
    description: "Made from locally-sourced plantain and other grains",
  },
  {
    icon: Heart,
    title: "Healthy Nutrition",
    description: "Rich in essential nutrients and dietary fiber",
  },
  {
    icon: Factory,
    title: "Agro-Processing",
    description: "Modern processing techniques ensuring quality",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Empowering local farmers and creating jobs",
  },
]

export function MekorBobosSection() {
  return (
    <section id="mekor-bobos" className="py-24 bg-background scroll-mt-24">
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
                src="/farm/flournew.jpeg"
                alt="Mekor Bobos flour products"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent" />
            </div>

            {/* Award Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -top-6 -right-6 bg-card p-6 rounded-2xl shadow-2xl border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Award className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Award Winner</p>
                  <p className="text-sm text-muted-foreground">Nourishing Africa 2025</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-dashed border-amber-500/30 rounded-full"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 text-sm font-medium mb-6">
              <ShoppingBag className="w-4 h-4" />
              <span>Award-Winning Food Brand</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Mekor Bobos Ltd
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Mekor Bobos is an award-winning gluten-free flour brand promoting healthy nutrition and agro-processing excellence in Cameroon. As COO, I lead the operational strategy driving our mission forward.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our products are crafted from locally-sourced ingredients, supporting Cameroonian farmers while delivering premium nutritional value to consumers seeking healthier alternatives in their diet.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border hover:border-amber-500/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                    <item.icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
