"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BeforeAfterItem {
  id: string
  title: string
  description: string
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  category: string
}

interface ModernBeforeAfterProps {
  items: BeforeAfterItem[]
  title?: string
  description?: string
  className?: string
}

export default function ModernBeforeAfter({
  items,
  title = "See The Transformation",
  description = "Explore the dramatic before and after results of our services",
  className = "",
}: ModernBeforeAfterProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const sliderContainerRef = useRef<HTMLDivElement>(null)

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const currentItem = items[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderContainerRef.current) return

    const rect = sliderContainerRef.current.getBoundingClientRect()
    const position = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderContainerRef.current) return

    const touch = e.touches[0]
    const rect = sliderContainerRef.current.getBoundingClientRect()
    const position = ((touch.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className={`w-full ${className}`} ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {title}
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-gray-600">
          {description}
        </motion.p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          {/* Slider container */}
          <div
            ref={sliderContainerRef}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] select-none cursor-col-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After image (displayed in full) */}
            <div className="absolute inset-0">
              <Image
                src={currentItem.afterImage || "/placeholder.svg"}
                alt={currentItem.afterAlt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1 m-4 rounded shadow-md">
                After
              </div>
            </div>

            {/* Before image (clipped with slider) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
              <Image
                src={currentItem.beforeImage || "/placeholder.svg"}
                alt={currentItem.beforeAlt}
                fill
                className="object-cover"
                style={{ width: `${100 / (sliderPosition / 100)}%` }}
              />
              <div className="absolute bottom-0 left-0 bg-gray-800 text-white text-xs font-semibold px-3 py-1 m-4 rounded shadow-md">
                Before
              </div>
            </div>

            {/* Slider control */}
            <div className="absolute inset-y-0" style={{ left: `calc(${sliderPosition}% - 1.5px)` }}>
              <div className="absolute inset-y-0 w-0.5 bg-white shadow-lg"></div>
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-primary">
                <div className="flex items-center">
                  <ChevronLeft className="h-4 w-4 text-primary" />
                  <ChevronRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>

            {/* Hidden range input for accessibility */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="sr-only"
              aria-label="Slider"
            />
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 shadow-md backdrop-blur-sm hover:bg-white"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 shadow-md backdrop-blur-sm hover:bg-white"
            onClick={handleNext}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Caption */}
        <div className="bg-white p-6 rounded-b-xl border-x border-b shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{currentItem.title}</h3>
          <p className="text-gray-600">{currentItem.description}</p>

          {/* Dots navigation */}
          <div className="flex justify-center space-x-2 mt-4">
            {items.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
