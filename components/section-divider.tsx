"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface SectionDividerProps {
  variant?: "wave" | "curve" | "angle" | "triangle" | "zigzag"
  position?: "top" | "bottom" | "both"
  color?: string
  height?: number
  className?: string
  inverted?: boolean
}

export default function SectionDivider({
  variant = "wave",
  position = "bottom",
  color = "#ffffff",
  height = 50,
  className = "",
  inverted = false,
}: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [0, height / 2])

  // Generate SVG path based on variant
  const getPath = () => {
    const width = 1440 // SVG viewBox width

    switch (variant) {
      case "wave":
        return `M0,${inverted ? 0 : height} C360,${inverted ? height : 0} 720,${inverted ? 0 : height} 1080,${
          inverted ? height : 0
        } C1260,${inverted ? 0 : height} 1440,${inverted ? height : 0} 1440,${inverted ? 0 : height} L1440,${
          inverted ? height : 0
        } L0,${inverted ? height : 0} Z`
      case "curve":
        return `M0,${inverted ? 0 : height} C720,${inverted ? height * 3 : -height * 2} 1440,${
          inverted ? 0 : height
        } 1440,${inverted ? 0 : height} L1440,${inverted ? height : 0} L0,${inverted ? height : 0} Z`
      case "angle":
        return `M0,${inverted ? 0 : height} L1440,${inverted ? height : 0} L1440,${inverted ? 0 : height} L0,${
          inverted ? height : 0
        } Z`
      case "triangle":
        return `M0,${inverted ? 0 : height} L720,${inverted ? height : 0} L1440,${inverted ? 0 : height} L1440,${
          inverted ? height : 0
        } L0,${inverted ? height : 0} Z`
      case "zigzag":
        return `M0,${inverted ? 0 : height} L360,${inverted ? height : 0} L720,${inverted ? 0 : height} L1080,${
          inverted ? height : 0
        } L1440,${inverted ? 0 : height} L1440,${inverted ? height : 0} L0,${inverted ? height : 0} Z`
      default:
        return `M0,${inverted ? 0 : height} C360,${inverted ? height : 0} 720,${inverted ? 0 : height} 1080,${
          inverted ? height : 0
        } C1260,${inverted ? 0 : height} 1440,${inverted ? height : 0} 1440,${inverted ? 0 : height} L1440,${
          inverted ? height : 0
        } L0,${inverted ? height : 0} Z`
    }
  }

  return (
    <div ref={ref} className={`relative w-full overflow-hidden ${className}`} style={{ height }}>
      <motion.div style={{ y: translateY }}>
        {position === "top" || position === "both" ? (
          <svg
            className="absolute top-0 left-0 w-full"
            viewBox={`0 0 1440 ${height}`}
            fill={color}
            preserveAspectRatio="none"
          >
            <path d={getPath()} />
          </svg>
        ) : null}
        {position === "bottom" || position === "both" ? (
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox={`0 0 1440 ${height}`}
            fill={color}
            preserveAspectRatio="none"
          >
            <path d={getPath()} />
          </svg>
        ) : null}
      </motion.div>
    </div>
  )
}
