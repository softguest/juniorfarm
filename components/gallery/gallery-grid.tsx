"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Farming", "Workshops", "Conferences", "Community"]

const galleryImages = [
  {
    src: "/farm/farmsix.jpeg",
    alt: "Sustainable farming practices",
    category: "Farming",
  },
  {
    src: "/farm/farmseven.jpeg",
    alt: "Training workshop session",
    category: "Workshops",
  },
  {
    src: "/farm/farmthree.jpeg",
    alt: "Agricultural conference",
    category: "Conferences",
  },
  {
    src: "/farm/conference.jpeg",
    alt: "Crop field visit",
    category: "Farming",
  },
  {
    src: "/farm/fruitone.jpg",
    alt: "Community engagement",
    category: "Community",
  },
  {
    src: "/farm/ready.jpeg",
    alt: "Agricultural innovation",
    category: "Conferences",
  },
  {
    src: "/farm/flournew.jpeg",
    alt: "Agricultural products",
    category: "Farming",
  },
  {
    src: "/farm/images.jpeg",
    alt: "Youth training program",
    category: "Workshops",
  },
  {
    src: "/farm/juniorfarm.jpg",
    alt: "Field demonstration",
    category: "Farming",
  },
  {
    src: "/farm/farmfour.jpg",
    alt: "Organic farming",
    category: "Farming",
  },
  {
    src: "/farm/BobInanga.jpeg",
    alt: "Community volunteering",
    category: "Community",
  },
  {
    src: "/farm/collaburations.jpeg",
    alt: "Team collaboration",
    category: "Workshops",
  },
  {
    src: "/farm/fruittwo.jpeg",
    alt: "Agricultural innovation",
    category: "Conferences",
  }
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative group break-inside-avoid cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium">{image.alt}</p>
                      <p className="text-white/70 text-sm">{image.category}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Frame Effect */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <p className="text-white text-xl font-medium">{selectedImage.alt}</p>
                <p className="text-white/70">{selectedImage.category}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
