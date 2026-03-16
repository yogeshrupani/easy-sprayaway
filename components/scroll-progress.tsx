"use client"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

interface ScrollProgressProps {
  color?: string
  height?: number
  zIndex?: number
  springConfig?: {
    stiffness?: number
    damping?: number
    mass?: number
  }
}

export function ScrollProgressBar({
  color = "#3b82f6",
  height = 4,
  zIndex = 50,
  springConfig = { stiffness: 100, damping: 30, mass: 1 },
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, springConfig)

  return (
    <motion.div
      className="fixed top-0 left-0 right-0"
      style={{
        scaleX,
        transformOrigin: "0%",
        backgroundColor: color,
        height,
        zIndex,
      }}
    />
  )
}

interface ScrollProgressCircleProps {
  size?: number
  strokeWidth?: number
  color?: string
  backgroundColor?: string
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  offset?: number
  zIndex?: number
}

export function ScrollProgressCircle({
  size = 60,
  strokeWidth = 6,
  color = "#3b82f6",
  backgroundColor = "rgba(255, 255, 255, 0.2)",
  position = "bottom-right",
  offset = 20,
  zIndex = 50,
}: ScrollProgressCircleProps) {
  const { scrollYProgress } = useScroll()
  const radius = size / 2 - strokeWidth
  const circumference = 2 * Math.PI * radius

  // Calculate position classes
  const positionClasses = {
    "top-left": `top-${offset} left-${offset}`,
    "top-right": `top-${offset} right-${offset}`,
    "bottom-left": `bottom-${offset} left-${offset}`,
    "bottom-right": `bottom-${offset} right-${offset}`,
  }

  return (
    <motion.div className={`fixed ${positionClasses[position]}`} style={{ zIndex }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth} stroke={backgroundColor} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={useTransform(scrollYProgress, [0, 1], [circumference, 0])}
          style={{ rotate: -90, transformOrigin: "center" }}
        />
        <motion.text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="16" fontWeight="bold" fill={color}>
          {useTransform(scrollYProgress, (value) => `${Math.round(value * 100)}%`)}
        </motion.text>
      </svg>
    </motion.div>
  )
}
