"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  service: string
  imageUrl?: string
}

interface InteractiveTestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function InteractiveTestimonialCarousel({ testimonials }: InteractiveTestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
    setIsAutoplay(false)

    // Resume after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoplay(true)
    }, 10000)
  }

  // Handle autoplay
  useEffect(() => {
    if (isAutoplay) {
      autoplayTimerRef.current = setTimeout(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current)
      }
    }
  }, [activeIndex, isAutoplay])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 shadow-lg border border-gray-100"
    >
      <div className="flex flex-col items-center relative p-6 md:p-8">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="flex justify-between items-start mb-6">
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

                <blockquote className="mb-8 relative">
                  <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
                    "{testimonials[activeIndex].text}"
                  </p>
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {testimonials[activeIndex].imageUrl && (
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
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              prevSlide()
              pauseAutoplay()
            }}
            className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              nextSlide()
              pauseAutoplay()
            }}
            className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index ? "w-8 bg-primary" : "w-2.5 bg-gray-300 hover:bg-gray-400"
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
  )
}
