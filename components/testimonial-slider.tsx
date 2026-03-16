"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  service: string
  imageUrl?: string
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
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

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-gray-50">
      <div className="flex flex-col items-center relative">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative w-full flex flex-col items-center px-4 py-10 sm:px-6 md:px-8"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="mb-6 text-center max-w-3xl">
                  <p className="text-lg italic text-gray-700 leading-relaxed">{testimonial.text}</p>
                </blockquote>

                <div className="flex items-center">
                  {testimonial.imageUrl && (
                    <div className="mr-4">
                      <Image
                        src={testimonial.imageUrl || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                    </div>
                  )}
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-primary mt-1">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              prevSlide()
              pauseAutoplay()
            }}
            className="h-8 w-8 rounded-full bg-white/80 hover:bg-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              nextSlide()
              pauseAutoplay()
            }}
            className="h-8 w-8 rounded-full bg-white/80 hover:bg-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                activeIndex === index ? "bg-primary w-4" : "bg-gray-300"
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
