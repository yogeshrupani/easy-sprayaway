"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  offset?: number
  zIndex?: number
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  offset = 0,
  zIndex = 0,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate transform based on direction
  const multiplier = speed * 100
  const upDownTransform = useTransform(scrollYProgress, [0, 1], [`${offset}px`, `-${multiplier}px`])
  const leftRightTransform = useTransform(scrollYProgress, [0, 1], [`${offset}px`, `-${multiplier}px`])
  const downTransform = useTransform(scrollYProgress, [0, 1], [`${offset}px`, `${multiplier}px`])
  const rightTransform = useTransform(scrollYProgress, [0, 1], [`${offset}px`, `${multiplier}px`])

  let y = upDownTransform
  let x = 0

  if (direction === "up") {
    y = upDownTransform
    x = 0
  } else if (direction === "down") {
    y = downTransform
    x = 0
  } else if (direction === "left") {
    y = 0
    x = leftRightTransform
  } else if (direction === "right") {
    y = 0
    x = rightTransform
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ zIndex }}>
      <motion.div style={{ y, x }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  )
}
