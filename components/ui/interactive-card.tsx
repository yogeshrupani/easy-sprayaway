"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: "lift" | "glow" | "border" | "none"
  clickEffect?: boolean
  children: React.ReactNode
}

export function InteractiveCard({
  className,
  hoverEffect = "lift",
  clickEffect = true,
  children,
  ...props
}: InteractiveCardProps) {
  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case "lift":
        return { y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }
      case "glow":
        return { boxShadow: "0 0 15px rgba(66, 153, 225, 0.5)" }
      case "border":
        return { borderColor: "var(--primary)" }
      case "none":
      default:
        return {}
    }
  }

  return (
    <motion.div
      className={cn(
        "rounded-lg border border-border bg-card p-4 transition-all duration-200",
        hoverEffect === "border" && "hover:border-primary",
        className,
      )}
      whileHover={getHoverAnimation()}
      whileTap={clickEffect ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
