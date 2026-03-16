"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

interface InteractiveButtonProps extends ButtonProps {
  ripple?: boolean
  hoverScale?: number
  tapScale?: number
  children: React.ReactNode
}

const InteractiveButton = React.forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  ({ className, ripple = true, hoverScale = 1.02, tapScale = 0.98, children, ...props }, ref) => {
    const [rippleEffect, setRippleEffect] = React.useState<{ x: number; y: number } | null>(null)

    const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ripple) return

      const button = e.currentTarget
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setRippleEffect({ x, y })
      setTimeout(() => setRippleEffect(null), 600)
    }

    return (
      <motion.div whileHover={{ scale: hoverScale }} whileTap={{ scale: tapScale }} className="relative inline-block">
        <Button
          ref={ref}
          className={cn("relative overflow-hidden transition-all duration-300", className)}
          onClick={handleRipple}
          {...props}
        >
          {children}
          {rippleEffect && (
            <span
              className="absolute rounded-full bg-white/20 animate-ripple"
              style={{
                top: rippleEffect.y,
                left: rippleEffect.x,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </Button>
      </motion.div>
    )
  },
)
InteractiveButton.displayName = "InteractiveButton"

export { InteractiveButton }
