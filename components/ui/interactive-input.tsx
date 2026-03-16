"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Input, type InputProps } from "@/components/ui/input"

interface InteractiveInputProps extends InputProps {
  label?: string
  icon?: React.ReactNode
  successMessage?: string
  errorMessage?: string
}

const InteractiveInput = React.forwardRef<HTMLInputElement, InteractiveInputProps>(
  ({ className, label, icon, successMessage, errorMessage, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      props.onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      props.onBlur?.(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0)
      props.onChange?.(e)
    }

    return (
      <div className="relative space-y-1">
        {label && (
          <motion.label
            initial={false}
            animate={{
              y: isFocused || hasValue ? -4 : 0,
              scale: isFocused || hasValue ? 0.85 : 1,
              color: isFocused ? "var(--primary)" : "var(--foreground)",
            }}
            className="absolute left-3 top-2.5 z-10 origin-[0] transform text-sm text-muted-foreground transition-all duration-200"
            style={{
              pointerEvents: "none",
            }}
          >
            {label}
          </motion.label>
        )}

        <div className="relative">
          {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>}

          <motion.div
            initial={false}
            animate={{
              scale: isFocused ? 1.02 : 1,
            }}
            className="relative"
          >
            <Input
              ref={ref}
              className={cn(
                "transition-all duration-200",
                icon && "pl-10",
                label && "pt-4",
                isFocused && "border-primary ring-1 ring-primary",
                className,
              )}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              {...props}
            />
          </motion.div>

          {(successMessage || errorMessage) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={cn("mt-1 text-xs", errorMessage ? "text-destructive" : successMessage ? "text-green-600" : "")}
            >
              {errorMessage || successMessage}
            </motion.div>
          )}
        </div>
      </div>
    )
  },
)
InteractiveInput.displayName = "InteractiveInput"

export { InteractiveInput }
