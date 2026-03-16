"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  service: string
  imageUrl?: string
}

interface ModernTestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function ModernTestimonialCarousel({ testimonials }: ModernTestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  // Pause autoplay on interaction
  const pauseAutoplay = () => {
    setIsPaused(true)
    setIsAutoplay(false)

    // Resume after 10 seconds of inactivity
    setTimeout(() => {
      setIsPaused(false)
      setIsAutoplay(true)
    }, 10000)
  }

  // Handle autoplay
  useEffect(() => {
    if (isAutoplay && !isPaused) {
      const timer = setTimeout(() => {
        nextSlide()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [activeIndex, isAutoplay, isPaused])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 shadow-lg">
      <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 h-1/2 w-full bg-gradient-to-t from-primary/5 to-transparent"></div>

      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-6 flex justify-between items-start">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <Quote className="h-10 w-10 text-primary/20" />
        </div>

        <div className="relative h-[200px] md:h-[180px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.blockquote
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
                "{testimonials[activeIndex].text}"
              </p>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center">
            {testimonials[activeIndex].imageUrl ? (
              <div className="mr-4">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={testimonials[activeIndex].imageUrl || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="mr-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
              </div>
            )}
            <div>
              <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-gray-600">{testimonials[activeIndex].location}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-primary font-medium">{testimonials[activeIndex].service}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                prevSlide()
                pauseAutoplay()
              }}
              className="h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                nextSlide()
                pauseAutoplay()
              }}
              className="h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex space-x-1.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-6 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => {
                  goToSlide(index)
                  pauseAutoplay()
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
