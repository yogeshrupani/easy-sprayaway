"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import EnhancedBeforeAfterSlider from "@/components/enhanced-before-after-slider"

interface GalleryItem {
  id: string
  title: string
  description: string
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  category: string
}

interface EnhancedBeforeAfterGalleryProps {
  items: GalleryItem[]
  className?: string
}

export default function EnhancedBeforeAfterGallery({ items, className = "" }: EnhancedBeforeAfterGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems = activeCategory === "all" ? items : items.filter((item) => item.category === activeCategory)

  const categories = ["all", ...Array.from(new Set(items.map((item) => item.category)))]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length)
  }

  const currentItem = filteredItems[currentIndex]

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setActiveCategory(category)
              setCurrentIndex(0)
            }}
            className="capitalize"
          >
            {category === "all" ? "All Projects" : category}
          </Button>
        ))}
      </div>

      {filteredItems.length > 0 ? (
        <>
          <div className="relative overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <EnhancedBeforeAfterSlider
                  beforeImage={currentItem.beforeImage}
                  afterImage={currentItem.afterImage}
                  beforeAlt={currentItem.beforeAlt}
                  afterAlt={currentItem.afterAlt}
                  title={currentItem.title}
                  description={currentItem.description}
                />
              </motion.div>
            </AnimatePresence>

            {filteredItems.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-white/80 shadow-md backdrop-blur-sm hover:bg-white"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-white/80 shadow-md backdrop-blur-sm hover:bg-white"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next</span>
                </Button>
              </>
            )}
          </div>

          <div className="mt-4 flex justify-center">
            <div className="flex gap-2">
              {filteredItems.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-8 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-64 items-center justify-center rounded-lg border border-dashed">
          <p className="text-gray-500">No projects in this category</p>
        </div>
      )}
    </div>
  )
}
