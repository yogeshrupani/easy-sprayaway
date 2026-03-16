"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  className?: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

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
    <div
      ref={containerRef}
      className={cn("relative h-[300px] md:h-[400px] lg:h-[500px] select-none overflow-hidden rounded-lg", className)}
    >
      <div className="absolute inset-0 z-10">
        <Image src={afterImage || "/placeholder.svg"} alt={afterAlt} fill className="object-cover" />
      </div>
      <div className="absolute inset-0 z-20 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image src={beforeImage || "/placeholder.svg"} alt={beforeAlt} fill className="object-cover" />
      </div>
      <div
        className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="flex flex-col gap-0.5">
            <span className="block h-0.5 w-1.5 bg-gray-700"></span>
            <span className="block h-0.5 w-1.5 bg-gray-700"></span>
          </div>
        </div>
      </div>
      <div className="absolute z-40 bottom-2 left-2 bg-white/80 text-xs px-2 py-1 rounded">Before</div>
      <div className="absolute z-40 bottom-2 right-2 bg-white/80 text-xs px-2 py-1 rounded">After</div>
    </div>
  )
}
