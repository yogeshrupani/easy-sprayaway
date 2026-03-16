"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  savings: string
  benefits: string[]
}

interface RealBeforeAfterSliderProps {
  items: BeforeAfterItem[]
  className?: string
}

export default function RealBeforeAfterSlider({ items, className = "" }: RealBeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Safety check for items array
  if (!items || items.length === 0) {
    return (
      <div className={`w-full max-w-6xl mx-auto ${className}`}>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
          <div className="text-center">
            <p className="text-slate-600">No before and after examples available at the moment.</p>
          </div>
        </div>
      </div>
    )
  }

  const currentItem = items[currentIndex]

  // Safety check for current item
  if (!currentItem) {
    return (
      <div className={`w-full max-w-6xl mx-auto ${className}`}>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
          <div className="text-center">
            <p className="text-slate-600">Unable to load transformation examples.</p>
          </div>
        </div>
      </div>
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Side-by-Side Images Section */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id || currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2"
            >
              {/* Before Image */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                  src={currentItem.beforeImage || "/placeholder.svg?height=400&width=600&text=Before"}
                  alt={currentItem.beforeAlt || "Before transformation"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  BEFORE
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-sm font-medium">Original Condition</p>
                  </div>
                </div>
              </div>

              {/* After Image */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                  src={currentItem.afterImage || "/placeholder.svg?height=400&width=600&text=After"}
                  alt={currentItem.afterAlt || "After transformation"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  AFTER
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-sm font-medium">Professional Results</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {items.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 rounded-full bg-white/90 shadow-lg backdrop-blur-sm hover:bg-white"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 rounded-full bg-white/90 shadow-lg backdrop-blur-sm hover:bg-white"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next</span>
              </Button>
            </>
          )}

          {/* Divider Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white shadow-lg transform -translate-x-1/2 z-10 hidden md:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Title and Description */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">
                {currentItem.title || "Transformation Example"}
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {currentItem.description || "See the remarkable difference our professional services make."}
              </p>
              {currentItem.savings && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Potential Savings</h4>
                  <p className="text-green-700 font-medium">{currentItem.savings}</p>
                </div>
              )}
            </div>

            {/* Right Column - Benefits */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-slate-800">Key Benefits</h4>
              <ul className="space-y-3">
                {(currentItem.benefits || []).map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="rounded-full bg-blue-100 p-1 mr-3 mt-1 flex-shrink-0">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        {items.length > 1 && (
          <div className="flex justify-center pb-8">
            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-8 rounded-full transition-all ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="text-center mt-6">
        <p className="text-sm text-slate-500">
          Browse through our transformation examples using the arrows or dots below
        </p>
      </div>
    </div>
  )
}
