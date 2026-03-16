"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface RevealImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  revealDirection?: "up" | "down" | "left" | "right" | "zoom" | "fade"
  threshold?: number
  delay?: number
  duration?: number
  priority?: boolean
  quality?: number
}

export default function RevealImage({
  src,
  alt,
  width,
  height,
  className = "",
  revealDirection = "up",
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  priority = false,
  quality = 85,
}: RevealImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [ref, isVisible] = useScrollAnimation({ threshold, delay, once: true })

  // Define animation variants based on direction
  const getVariants = () => {
    switch (revealDirection) {
      case "up":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }
      case "down":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }
      case "left":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }
      case "right":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{ duration, ease: "easeOut" }}
      className={`overflow-hidden ${className}`}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        className={`transition-all duration-500 ${isLoaded ? "scale-100" : "scale-105 blur-sm"}`}
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  )
}
