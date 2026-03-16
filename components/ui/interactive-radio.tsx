"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InteractiveRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function InteractiveRadio({ className, label, ...props }: InteractiveRadioProps) {
  const [checked, setChecked] = React.useState(props.checked || false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    props.onChange?.(e)
  }

  return (
    <label className="flex cursor-pointer items-center space-x-2">
      <div className="relative flex h-5 w-5 items-center justify-center">
        <input
          type="radio"
          className="peer absolute h-5 w-5 opacity-0"
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 transition-all duration-200",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2",
            checked ? "border-primary" : "bg-transparent",
            className,
          )}
        >
          <motion.div
            initial={false}
            animate={{
              scale: checked ? 1 : 0,
              backgroundColor: checked ? "var(--primary)" : "transparent",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="h-2.5 w-2.5 rounded-full"
          />
        </div>
      </div>
      {label && <span className="text-sm">{label}</span>}
    </label>
  )
}
