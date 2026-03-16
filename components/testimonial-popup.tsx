"use client"

import { useEffect, useState } from "react"
import { X, Star, Quote } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { usePopupVisibility } from "@/hooks/use-popup-visibility"
import { useRouter } from "next/navigation"

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  service: string
  imageUrl?: string
}

interface TestimonialPopupProps {
  testimonials: Testimonial[]
  delay?: number // Delay in milliseconds before showing popup
  sessionKey?: string // Key for session storage
}

export default function TestimonialPopup({
  testimonials,
  delay = 10000,
  sessionKey = "testimonial_popup_shown",
}: TestimonialPopupProps) {
  const { isVisible, hidePopup } = usePopupVisibility({
    delay,
    sessionKey,
    showOncePerSession: true,
    minTimeBetweenShows: 3 * 60 * 60 * 1000, // Show again after 3 hours
  })

  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (testimonials.length > 0 && !currentTestimonial) {
      // Select a random testimonial with high rating (4 or 5 stars)
      const highRatedTestimonials = testimonials.filter((t) => t.rating >= 4)
      const selected =
        highRatedTestimonials.length > 0
          ? highRatedTestimonials[Math.floor(Math.random() * highRatedTestimonials.length)]
          : testimonials[Math.floor(Math.random() * testimonials.length)]

      setCurrentTestimonial(selected)
    }
  }, [testimonials, currentTestimonial])

  const handleGetSurvey = () => {
    hidePopup()
    router.push("/contact")
  }

  if (!currentTestimonial) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={hidePopup}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-50 w-full max-w-md rounded-xl bg-white shadow-2xl overflow-hidden"
          >
            {/* Blue accent top bar */}
            <div className="h-2 bg-primary w-full" />

            <div className="p-6">
              <button
                onClick={hidePopup}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close testimonial popup"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">What our customers say</h3>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < currentTestimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-primary/10 -translate-x-1 -translate-y-1" />
                <blockquote className="pl-4 text-gray-700 italic text-sm md:text-base leading-relaxed">
                  "{currentTestimonial.text}"
                </blockquote>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  {currentTestimonial.imageUrl ? (
                    <div className="mr-3 h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image
                        src={currentTestimonial.imageUrl || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mr-3 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">{currentTestimonial.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{currentTestimonial.name}</p>
                    <p className="text-xs text-gray-500">{currentTestimonial.location}</p>
                  </div>
                </div>
                <div className="text-xs text-primary font-medium">{currentTestimonial.service}</div>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100">
                <Button onClick={handleGetSurvey} variant="default" className="w-full shine-button">
                  Get Your Free Survey
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
