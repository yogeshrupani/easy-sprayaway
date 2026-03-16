"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface InteractiveTooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  delay?: number
  className?: string
}

export function InteractiveTooltip({
  content,
  children,
  position = "top",
  delay = 300,
  className,
}: InteractiveTooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const [shouldRender, setShouldRender] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setShouldRender(true)
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true)
    }, delay)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsVisible(false)
    timeoutRef.current = setTimeout(() => {
      setShouldRender(false)
    }, 200)
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const getPositionStyles = () => {
    switch (position) {
      case "top":
        return {
          bottom: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          marginBottom: "8px",
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
        }
      case "bottom":
        return {
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "8px",
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
        }
      case "left":
        return {
          right: "100%",
          top: "50%",
          transform: "translateY(-50%)",
          marginRight: "8px",
          initial: { opacity: 0, x: 10 },
          animate: { opacity: 1, x: 0 },
        }
      case "right":
        return {
          left: "100%",
          top: "50%",
          transform: "translateY(-50%)",
          marginLeft: "8px",
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
        }
      default:
        return {}
    }
  }

  const positionStyles = getPositionStyles()

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {shouldRender && (
          <motion.div
            className={cn(
              "absolute z-50 max-w-xs rounded-md bg-black px-3 py-1.5 text-xs text-white shadow-lg",
              className,
            )}
            style={{
              position: "absolute",
              ...positionStyles,
            }}
            initial={positionStyles.initial}
            animate={isVisible ? positionStyles.animate : {}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
