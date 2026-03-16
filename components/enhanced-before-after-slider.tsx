"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowLeftRight, Maximize2, SlidersHorizontal } from "lucide-react"

interface EnhancedBeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  className?: string
  title?: string
  description?: string
}

type ComparisonMode = "slider" | "side-by-side" | "toggle"

export default function EnhancedBeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  className,
  title,
  description,
}: EnhancedBeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [showAfter, setShowAfter] = useState(false)
  const [comparisonMode, setComparisonMode] = useState<ComparisonMode>("slider")
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  // Replace the single default image with a collection of service-specific defaults
  const getDefaultBeforeImage = () => {
    // Check if we can determine the service type from the alt text
    if (beforeAlt) {
      const altText = beforeAlt.toLowerCase()
      if (altText.includes("roof") || altText.includes("tile")) {
        return "/images/roof-moss-before.png" // More dramatic roof before image
      } else if (altText.includes("wall") || altText.includes("exterior")) {
        return "/images/wall-before.png" // Wall cleaning before
      } else if (altText.includes("driveway") || altText.includes("patio")) {
        return "/images/patio-before.png" // Patio/driveway before
      } else if (altText.includes("loft") || altText.includes("insulation") || altText.includes("attic")) {
        return "/images/victorian-loft-before.png" // Loft insulation before
      }
    }
    // Default to a more dramatic before image that clearly shows need for service
    return "/images/roof-moss-before-2.png"
  }

  // Get the appropriate default image
  const defaultBeforeImage = getDefaultBeforeImage()
  const defaultAfterImage = "/images/roof-after.png"

  // Get service-specific before/after pairs for side-by-side mode
  const getSideBySideImages = () => {
    // Determine service type from alt text
    if (beforeAlt) {
      const altText = beforeAlt.toLowerCase()
      if (altText.includes("roof") || altText.includes("tile")) {
        return {
          before: "/images/real-roof-before-after.png",
          after: "/images/roof-clean-after.png",
        }
      } else if (altText.includes("wall") || altText.includes("exterior")) {
        return {
          before: "/images/stone-wall-before.png",
          after: "/images/stone-wall-after.png",
        }
      } else if (altText.includes("driveway") || altText.includes("patio")) {
        return {
          before: "/images/house-patio-clean.png",
          after: "/images/patio-clean-2.png",
        }
      } else if (altText.includes("loft") || altText.includes("insulation") || altText.includes("attic")) {
        return {
          before: "/images/attic-before.png",
          after: "/images/attic-after.png",
        }
      }
    }
    // Default to a dramatic before/after pair
    return {
      before: "/images/real-roof-before-after.png",
      after: "/images/roof-clean-after.png",
    }
  }

  const sideBySideImages = getSideBySideImages()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect()
      const position = ((clientX - left) / width) * 100
      const clampedPosition = Math.min(Math.max(position, 0), 100)
      setSliderPosition(clampedPosition)
    }
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      handleMove(event.clientX)
    }
  }

  const handleTouchMove = (event: TouchEvent) => {
    if (isDragging) {
      handleMove(event.touches[0].clientX)
    }
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("touchmove", handleTouchMove)
    window.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging])

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="relative"
    >
      {(title || description) && (
        <div className="mb-4 text-center">
          {title && <h3 className="text-xl font-bold text-gray-900">{title}</h3>}
          {description && <p className="text-gray-600 mt-1">{description}</p>}
        </div>
      )}

      {/* Comparison mode selector */}
      <div className="flex justify-center mb-4 gap-2">
        <button
          onClick={() => setComparisonMode("slider")}
          className={`p-2 rounded-md flex items-center gap-1 text-sm ${
            comparisonMode === "slider" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          aria-label="Slider comparison mode"
        >
          <SlidersHorizontal size={16} />
          <span className="hidden sm:inline">Slider</span>
        </button>
        <button
          onClick={() => setComparisonMode("side-by-side")}
          className={`p-2 rounded-md flex items-center gap-1 text-sm ${
            comparisonMode === "side-by-side" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          aria-label="Side by side comparison mode"
        >
          <ArrowLeftRight size={16} />
          <span className="hidden sm:inline">Side by Side</span>
        </button>
        <button
          onClick={() => setComparisonMode("toggle")}
          className={`p-2 rounded-md flex items-center gap-1 text-sm ${
            comparisonMode === "toggle" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          aria-label="Toggle comparison mode"
        >
          <Maximize2 size={16} />
          <span className="hidden sm:inline">Toggle</span>
        </button>
      </div>

      {/* Slider mode */}
      {comparisonMode === "slider" && (
        <div
          ref={containerRef}
          className={cn(
            "relative h-[300px] md:h-[400px] lg:h-[500px] select-none overflow-hidden rounded-lg shadow-lg group",
            className,
          )}
        >
          <div className="absolute inset-0 z-10 transition-transform duration-700 group-hover:scale-[1.02]">
            <Image
              src={afterImage || defaultAfterImage}
              alt={afterAlt || "After service completion"}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div
            className="absolute inset-0 z-20 overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]"
            style={{ width: `${sliderPosition}%` }}
          >
            <Image
              src={beforeImage || defaultBeforeImage}
              alt={beforeAlt || "Before service started"}
              fill
              className="object-cover"
            />
          </div>
          <div
            className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <div className="flex flex-col gap-0.5">
                <span className="block h-0.5 w-1.5 bg-gray-700"></span>
                <span className="block h-0.5 w-1.5 bg-gray-700"></span>
              </div>
            </div>
          </div>
          <div className="absolute z-40 bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-sm">
            Before
          </div>
          <div className="absolute z-40 bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-sm">
            After
          </div>
        </div>
      )}

      {/* Side by side mode */}
      {comparisonMode === "side-by-side" && (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative h-[300px] md:h-[400px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src={beforeImage || sideBySideImages.before}
              alt={beforeAlt || "Before service started - dramatic transformation"}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-sm">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Problem Area
            </div>
          </div>
          <div className="flex-1 relative h-[300px] md:h-[400px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src={afterImage || sideBySideImages.after}
              alt={afterAlt || "After professional service - amazing results"}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-sm">
              After
            </div>
            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Professionally Cleaned
            </div>
          </div>
        </div>
      )}

      {/* Toggle mode */}
      {comparisonMode === "toggle" && (
        <div className="relative">
          <div
            className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => setShowAfter(!showAfter)}
          >
            <Image
              src={showAfter ? afterImage || defaultAfterImage : beforeImage || defaultBeforeImage}
              alt={showAfter ? afterAlt || "After service completion" : beforeAlt || "Before service started"}
              fill
              className="object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/80 hover:bg-white text-gray-800 font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                {showAfter ? "Show Before" : "Show After"}
              </button>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-sm">
              {showAfter ? "After" : "Before"}
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm">
          {comparisonMode === "slider"
            ? "Drag slider to compare"
            : comparisonMode === "toggle"
              ? "Click to toggle before/after"
              : "Compare side by side"}
        </div>
      </div>
    </motion.div>
  )
}
