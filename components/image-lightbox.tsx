"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageLightboxProps {
  images: Array<{
    id: string
    src: string
    alt: string
    title?: string
    description?: string
  }>
  currentImageId: string | null
  onClose: () => void
}

export default function ImageLightbox({ images, currentImageId, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Set the initial index based on the currentImageId
  useEffect(() => {
    if (currentImageId) {
      const index = images.findIndex((img) => img.id === currentImageId)
      if (index !== -1) {
        setCurrentIndex(index)
      }
    }
  }, [currentImageId, images])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex])

  // Close lightbox if clicked outside the image
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  if (!currentImageId) return null

  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        onClick={handleBackdropClick}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </button>

        {/* Navigation buttons */}
        <button
          className="absolute left-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </button>

        <button
          className="absolute right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </button>

        {/* Image container */}
        <motion.div
          key={currentImage.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative max-w-5xl w-full h-[80vh] flex flex-col"
        >
          <div className="relative flex-1 overflow-hidden">
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          {/* Caption */}
          {(currentImage.title || currentImage.description) && (
            <div className="bg-black/70 p-4 text-white mt-2 rounded-md">
              {currentImage.title && <h3 className="text-lg font-medium">{currentImage.title}</h3>}
              {currentImage.description && <p className="text-sm text-gray-200 mt-1">{currentImage.description}</p>}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
