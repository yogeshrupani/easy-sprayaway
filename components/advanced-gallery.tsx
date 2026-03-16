"use client"

import type React from "react"
import { useState, useMemo, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Filter, X, ArrowLeft, ArrowRight, Calendar, MapPin, Grid, List, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { GalleryImage } from "@/data/gallery-images"

interface AdvancedGalleryProps {
  images: GalleryImage[]
  categories: string[]
  tags: string[]
  locations: string[]
  className?: string
}

interface LightboxImagePair {
  main: GalleryImage
  pair: GalleryImage | null
  isPairedView: boolean
  currentIndex: number
}

const categoryLabels: Record<string, string> = {
  "loft-insulation": "Loft Insulation",
  "roof-cleaning": "Roof Cleaning",
  "exterior-cleaning": "Exterior Cleaning",
  "featured-projects": "Featured Projects",
}

const sortOptions = [
  { value: "date-desc", label: "Newest First" },
  { value: "date-asc", label: "Oldest First" },
  { value: "title-asc", label: "Title A-Z" },
  { value: "title-desc", label: "Title Z-A" },
  { value: "featured", label: "Featured First" },
]

const AdvancedGallery: React.FC<AdvancedGalleryProps> = ({ images, categories, tags, locations, className }) => {
  // State management
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedImagePair, setSelectedImagePair] = useState<LightboxImagePair | null>(null)

  const sortedImages = useMemo(() => {
    return [...images].sort((a, b) => {
      // Featured projects first
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1

      // Then by date (newest first)
      return new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
    })
  }, [images])

  // Open lightbox
  const openLightbox = useCallback(
    (image: GalleryImage) => {
      const currentIndex = sortedImages.findIndex((img) => img.id === image.id)
      const pairImage: GalleryImage | null = null
      const isPaired = false

      setSelectedImagePair({
        main: image,
        pair: pairImage,
        isPairedView: isPaired,
        currentIndex,
      })
      document.body.style.overflow = "hidden"
    },
    [sortedImages, images],
  )

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setSelectedImagePair(null)
    document.body.style.overflow = "unset"
  }, [])

  // Navigate in lightbox
  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (!selectedImagePair) return

      let newIndex = selectedImagePair.currentIndex
      if (direction === "prev") {
        newIndex = newIndex > 0 ? newIndex - 1 : sortedImages.length - 1
      } else {
        newIndex = newIndex < sortedImages.length - 1 ? newIndex + 1 : 0
      }

      const newMainImage = sortedImages[newIndex]
      const newPairImage: GalleryImage | null = null
      const newIsPaired = false

      setSelectedImagePair({
        main: newMainImage,
        pair: newPairImage,
        isPairedView: newIsPaired,
        currentIndex: newIndex,
      })
    },
    [selectedImagePair, sortedImages, images],
  )

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImagePair) return

      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") navigateImage("prev")
      if (e.key === "ArrowRight") navigateImage("next")
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImagePair, closeLightbox, navigateImage])

  return (
    <div className={cn("space-y-8", className)}>
      {/* Gallery Header */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="h-4 w-4" />
              <span className="ml-2 hidden sm:inline">Grid</span>
            </Button>
            <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
              <List className="h-4 w-4" />
              <span className="ml-2 hidden sm:inline">List</span>
            </Button>
          </div>

          <div className="text-sm text-gray-600">{images.length} Projects Completed</div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600 text-center md:text-left">
        Showing {sortedImages.length} of {images.length} projects
      </div>

      {/* Gallery Grid/List */}
      <motion.div
        layout
        className={cn(
          viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6",
        )}
      >
        <AnimatePresence>
          {sortedImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer",
                viewMode === "grid" ? "transform hover:scale-[1.02]" : "flex gap-4 p-4",
              )}
              onClick={() => openLightbox(image)}
            >
              {viewMode === "grid" ? (
                <>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={`${image.alt} - Easy-Sprayaway Scotland`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Featured Badge */}
                    {image.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-yellow-500 text-yellow-900 flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800 backdrop-blur-sm">
                        {categoryLabels[image.category] || image.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {image.title}
                      </h3>
                      {image.description && <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                      {image.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{image.location}</span>
                        </div>
                      )}
                      {image.date && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(image.date).toLocaleDateString("en-GB")}</span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    {image.tags && image.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {image.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag.replace("-", " ")}
                          </Badge>
                        ))}
                        {image.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{image.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                // List View
                <>
                  <div className="w-32 h-24 relative overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={`${image.alt} - Easy-Sprayaway Scotland`}
                      fill
                      className="object-cover"
                      sizes="128px"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {image.title}
                      </h3>
                      {image.featured && (
                        <Badge className="bg-yellow-500 text-yellow-900 flex items-center gap-1 ml-2">
                          <Star className="h-3 w-3" />
                        </Badge>
                      )}
                    </div>

                    {image.description && <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>}

                    <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                      <Badge variant="outline" className="text-xs">
                        {categoryLabels[image.category] || image.category}
                      </Badge>
                      {image.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{image.location}</span>
                        </div>
                      )}
                      {image.date && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(image.date).toLocaleDateString("en-GB")}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {sortedImages.length === 0 && (
        <div className="text-center py-12">
          <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <Button variant="outline">Clear All Filters</Button>
        </div>
      )}

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImagePair && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={cn(
                "relative max-h-[90vh] w-full",
                selectedImagePair.isPairedView ? "max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4" : "max-w-5xl",
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="absolute -top-16 left-0 right-0 flex items-center justify-between text-white z-10">
                <div className="flex items-center gap-4">
                  <span className="text-sm">
                    {selectedImagePair.currentIndex + 1} of {sortedImages.length}
                  </span>
                  {selectedImagePair.main.featured && (
                    <Badge className="bg-yellow-500 text-yellow-900 flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() => {
                      /* Share functionality */
                    }}
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={closeLightbox}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-900 flex items-center justify-center">
                <Image
                  src={selectedImagePair.main.src || "/placeholder.svg"}
                  alt={`${selectedImagePair.main.alt} - Easy-Sprayaway Scotland`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                  <div className="text-white space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-white/20 text-white backdrop-blur-sm">
                        {categoryLabels[selectedImagePair.main.category] || selectedImagePair.main.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold">{selectedImagePair.main.title}</h3>

                    {selectedImagePair.main.description && (
                      <p className="text-gray-200 text-sm">{selectedImagePair.main.description}</p>
                    )}

                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      {selectedImagePair.main.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{selectedImagePair.main.location}</span>
                        </div>
                      )}
                      {selectedImagePair.main.date && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(selectedImagePair.main.date).toLocaleDateString("en-GB")}</span>
                        </div>
                      )}
                    </div>

                    {selectedImagePair.main.tags && selectedImagePair.main.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {selectedImagePair.main.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs bg-white/10 text-white border-white/20">
                            {tag.replace("-", " ")}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Paired Image (After) */}
              {selectedImagePair.isPairedView && selectedImagePair.pair && (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-900 flex items-center justify-center">
                  <Image
                    src={selectedImagePair.pair.src || "/placeholder.svg"}
                    alt={`${selectedImagePair.pair.alt} - Easy-Sprayaway Scotland`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    loading="lazy"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                    <div className="text-white space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-white/20 text-white backdrop-blur-sm">
                          {categoryLabels[selectedImagePair.pair.category] || selectedImagePair.pair.category}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold">{selectedImagePair.pair.title}</h3>

                      {selectedImagePair.pair.description && (
                        <p className="text-gray-200 text-sm">{selectedImagePair.pair.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              {sortedImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                    onClick={() => navigateImage("prev")}
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                    onClick={() => navigateImage("next")}
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

export default AdvancedGallery
