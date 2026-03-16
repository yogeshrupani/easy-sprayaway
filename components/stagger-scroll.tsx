"use client"

import React from "react"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface StaggerScrollProps {
  children: ReactNode
  staggerDelay?: number
  initialDelay?: number
  threshold?: number
  className?: string
  childClassName?: string
  once?: boolean
  direction?: "forward" | "reverse"
  variant?: "fadeIn" | "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "zoom" | "scale"
}

export function StaggerScroll({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  threshold = 0.1,
  className = "",
  childClassName = "",
  once = true,
  direction = "forward",
  variant = "fadeUp",
}: StaggerScrollProps) {
  const [ref, isVisible] = useScrollAnimation({
    threshold,
    once,
  })

  // Define animation variants for children
  const getVariant = () => {
    switch (variant) {
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      case "fadeUp":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }
      case "fadeDown":
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }
      case "fadeLeft":
        return {
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        }
      case "fadeRight":
        return {
          hidden: { opacity: 0, x: 20 },
          visible: { opacity: 1, x: 0 },
        }
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
        staggerDirection: direction === "reverse" ? -1 : 1,
      },
    },
  }

  const childVariants = getVariant()

  // Wrap each child in a motion.div with the staggered animation
  const staggeredChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child

    return (
      <motion.div variants={childVariants} className={childClassName}>
        {child}
      </motion.div>
    )
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {staggeredChildren}
    </motion.div>
  )
}
