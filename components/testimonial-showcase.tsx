"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  service: string
  date?: string
}

interface TestimonialShowcaseProps {
  testimonials: Testimonial[]
  title?: string
  description?: string
  showTrustpilot?: boolean
  className?: string
}

export default function TestimonialShowcase({
  testimonials,
  title = "What Our Customers Say",
  description = "Read testimonials from our satisfied customers across the UK",
  showTrustpilot = true,
  className = "",
}: TestimonialShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [autoplay, currentIndex, testimonials.length])

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>

      {showTrustpilot && (
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <Image
                src="/images/trustpilot-logo.png"
                alt="Trustpilot"
                width={120}
                height={30}
                className="h-7 w-auto mr-2"
              />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < 4 ? "fill-[#00b67a] text-[#00b67a]" : "fill-[#00b67a] text-[#00b67a] opacity-50"}`}
                  />
                ))}
              </div>
              <span className="ml-2 font-medium">4.5/5</span>
            </div>
            <Link
              href="https://uk.trustpilot.com/review/easy-sprayaway.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-primary flex items-center"
            >
              Based on 17 reviews
              <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          </div>
        </div>
      )}

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100 p-1">
          <div className="relative h-[300px] md:h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-6 md:p-8 flex flex-col"
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[currentIndex].rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="h-10 w-10 text-gray-200 flex-shrink-0" />
                </div>

                <p className="text-gray-700 italic flex-grow">"{testimonials[currentIndex].text}"</p>

                <div className="mt-4 flex justify-between items-end">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{testimonials[currentIndex].service}</p>
                    {testimonials[currentIndex].date && (
                      <p className="text-xs text-gray-500">{testimonials[currentIndex].date}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute -left-4 top-1/2 -translate-y-1/2 md:-left-6">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-white shadow-md hover:bg-gray-50"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
        </div>

        <div className="absolute -right-4 top-1/2 -translate-y-1/2 md:-right-6">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-white shadow-md hover:bg-gray-50"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-6" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/reviews" className="flex items-center">
            Read More Customer Reviews
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
