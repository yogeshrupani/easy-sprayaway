"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface CountOnScrollProps {
  start?: number
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
  threshold?: number
  once?: boolean
  easing?: "linear" | "easeIn" | "easeOut" | "easeInOut"
}

export function CountOnScroll({
  start = 0,
  end,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
  threshold = 0.1,
  once = true,
  easing = "easeOut",
}: CountOnScrollProps) {
  const [count, setCount] = useState(start)
  const [ref, isVisible] = useScrollAnimation({ threshold, once, delay })
  const controls = useAnimation()

  useEffect(() => {
    if (isVisible) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

        // Apply easing
        let easedProgress
        switch (easing) {
          case "linear":
            easedProgress = progress
            break
          case "easeIn":
            easedProgress = progress * progress
            break
          case "easeOut":
            easedProgress = 1 - Math.pow(1 - progress, 2)
            break
          case "easeInOut":
            easedProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2
            break
          default:
            easedProgress = 1 - Math.pow(1 - progress, 2)
        }

        const currentCount = Math.floor(start + (end - start) * easedProgress)
        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      // Start animation after delay
      const timer = setTimeout(() => {
        animationFrame = requestAnimationFrame(animate)
      }, delay)

      return () => {
        clearTimeout(timer)
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [isVisible, start, end, duration, delay, easing])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.span>
  )
}

export default CountOnScroll
