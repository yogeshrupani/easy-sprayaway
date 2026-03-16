"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Search, Filter, X, ArrowLeft, ArrowRight, Eye } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { GalleryImage } from "@/data/gallery-images"

interface ModernImageGalleryProps {
  images: GalleryImage[]
  categories: string[]
  className?: string
}

interface LightboxImagePair {
  main: GalleryImage
  pair: GalleryImage | null
  isPairedView: boolean
}

const categoryLabels: Record<string, string> = {
  "loft-insulation": "Loft Insulation Scotland",
  "roof-cleaning": "Roof Cleaning Scotland",
  "exterior-cleaning": "Exterior Cleaning Scotland",
  "featured-projects": "Featured Projects Scotland",
}

const ModernImageGallery: React.FC<ModernImageGalleryProps> = ({ images, categories, className }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImagePair, setSelectedImagePair] = useState<LightboxImagePair | null>(null)

  const filteredImages = useMemo(() => {
    let filtered = images

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((image) => image.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (image) =>
          image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          image.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          image.alt.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Only show 'before' images or images that are not part of a 'before/after' pair
    filtered = filtered.filter((image) => !image.isAfter)

    return filtered
  }, [images, selectedCategory, searchTerm])

  const openLightbox = (image: GalleryImage) => {
    let pairImage: GalleryImage | null = null
    let isPaired = false

    if (image.isBefore && image.afterId) {
      pairImage = images.find((img) => img.id === image.afterId) || null
      isPaired = true
    } else if (image.isAfter && image.beforeId) {
      pairImage = images.find((img) => img.id === image.beforeId) || null
      isPaired = true
    }

    setSelectedImagePair({ main: image, pair: pairImage, isPairedView: isPaired })
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImagePair(null)
    document.body.style.overflow = "unset"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImagePair) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImagePair.main.id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    const newMainImage = filteredImages[newIndex]
    let newPairImage: GalleryImage | null = null
    let newIsPaired = false

    if (newMainImage.isBefore && newMainImage.afterId) {
      newPairImage = images.find((img) => img.id === newMainImage.afterId) || null
      newIsPaired = true
    } else if (newMainImage.isAfter && newMainImage.beforeId) {
      newPairImage = images.find((img) => img.id === newMainImage.beforeId) || null
      newIsPaired = true
    }

    setSelectedImagePair({ main: newMainImage, pair: newPairImage, isPairedView: newIsPaired })
  }

  return (
    <div className={cn("space-y-8", className)}>
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search Scottish projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
            className="text-sm"
          >
            All Scottish Projects
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="text-sm"
            >
              {categoryLabels[category] || category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600 text-center md:text-left">
        Showing {filteredImages.length} of {images.filter((img) => !img.isAfter).length} Scottish projects
      </div>

      {/* Gallery Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={`${image.alt} - Easy-Sprayaway Scotland`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
                    {categoryLabels[image.category] || image.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {image.title}
                </h3>
                {image.description && <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>}
              </div>

              {/* Hover Overlay with "View Project" */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2 text-primary font-medium">
                  <Eye className="h-5 w-5" />
                  <span>View Project</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Scottish projects found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("all")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImagePair && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={cn(
                "relative max-h-[90vh] w-full",
                selectedImagePair.isPairedView ? "max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4" : "max-w-4xl",
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
                onClick={closeLightbox}
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Main Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-800 flex items-center justify-center">
                <Image
                  src={selectedImagePair.main.src || "/placeholder.svg"}
                  alt={`${selectedImagePair.main.alt} - Easy-Sprayaway Scotland`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                  <div className="text-white">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm mb-1">
                      {categoryLabels[selectedImagePair.main.category] || selectedImagePair.main.category}
                    </span>
                    <h3 className="text-lg font-semibold">{selectedImagePair.main.title}</h3>
                    {selectedImagePair.main.description && (
                      <p className="text-gray-200 text-sm">{selectedImagePair.main.description}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Paired Image (if exists) */}
              {selectedImagePair.isPairedView && selectedImagePair.pair && (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-800 flex items-center justify-center">
                  <Image
                    src={selectedImagePair.pair.src || "/placeholder.svg"}
                    alt={`${selectedImagePair.pair.alt} - Easy-Sprayaway Scotland`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                    <div className="text-white">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm mb-1">
                        {categoryLabels[selectedImagePair.pair.category] || selectedImagePair.pair.category}
                      </span>
                      <h3 className="text-lg font-semibold">{selectedImagePair.pair.title}</h3>
                      {selectedImagePair.pair.description && (
                        <p className="text-gray-200 text-sm">{selectedImagePair.pair.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              {filteredImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                    onClick={() => navigateImage("prev")}
                    aria-label="Previous Image"
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                    onClick={() => navigateImage("next")}
                    aria-label="Next Image"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </Button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ModernImageGallery
