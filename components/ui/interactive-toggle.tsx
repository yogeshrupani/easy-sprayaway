"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InteractiveToggleProps extends React.HTMLAttributes<HTMLButtonElement> {
  defaultChecked?: boolean
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export function InteractiveToggle({
  className,
  defaultChecked = false,
  checked,
  onChange,
  ...props
}: InteractiveToggleProps) {
  const [isChecked, setIsChecked] = React.useState(defaultChecked)

  // Use controlled component if checked prop is provided
  const isControlled = checked !== undefined
  const isOn = isControlled ? checked : isChecked

  const handleClick = () => {
    if (!isControlled) {
      setIsChecked(!isOn)
    }
    onChange?.(!isOn)
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      className={cn(
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        isOn ? "bg-primary" : "bg-gray-200",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="sr-only">Toggle</span>
      <motion.span
        className="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition duration-200"
        initial={false}
        animate={{
          x: isOn ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </button>
  )
}
