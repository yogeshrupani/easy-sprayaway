"use client"

import type React from "react"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type AnimationVariant =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "zoomIn"
  | "scaleUp"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"

interface ScrollRevealProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
  staggerChildren?: number
  staggerDirection?: "forward" | "reverse"
  as?: React.ElementType
}

export function ScrollReveal({
  children,
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
  staggerChildren = 0,
  staggerDirection = "forward",
  as: Component = "div",
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollAnimation({
    threshold,
    once,
    delay,
  })

  // Define animation variants
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    slideUp: {
      hidden: { y: 100 },
      visible: { y: 0 },
    },
    slideDown: {
      hidden: { y: -100 },
      visible: { y: 0 },
    },
    slideLeft: {
      hidden: { x: -100 },
      visible: { x: 0 },
    },
    slideRight: {
      hidden: { x: 100 },
      visible: { x: 0 },
    },
  }

  // Define stagger children if needed
  const containerVariants = staggerChildren
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren: delay / 1000,
            staggerDirection: staggerDirection === "reverse" ? -1 : 1,
          },
        },
      }
    : variants[variant]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      transition={{ duration, delay: delay / 1000 }}
      className={className}
      as={Component}
    >
      {children}
    </motion.div>
  )
}
