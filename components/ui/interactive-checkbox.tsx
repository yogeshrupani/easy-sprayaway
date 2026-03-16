"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function InteractiveCheckbox({ className, label, ...props }: InteractiveCheckboxProps) {
  const [checked, setChecked] = React.useState(props.checked || false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    props.onChange?.(e)
  }

  return (
    <label className="flex cursor-pointer items-center space-x-2">
      <div className="relative flex h-5 w-5 items-center justify-center">
        <input
          type="checkbox"
          className="peer absolute h-5 w-5 opacity-0"
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded border border-gray-300 transition-all duration-200",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2",
            checked ? "border-primary bg-primary" : "bg-transparent",
            className,
          )}
        >
          <motion.div
            initial={false}
            animate={{ scale: checked ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {checked && <Check className="h-3.5 w-3.5 text-white" />}
          </motion.div>
        </div>
      </div>
      {label && <span className="text-sm">{label}</span>}
    </label>
  )
}
