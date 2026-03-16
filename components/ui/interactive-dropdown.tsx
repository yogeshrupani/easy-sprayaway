"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownItem {
  id: string
  label: React.ReactNode
  onClick?: () => void
}

interface InteractiveDropdownProps {
  trigger: React.ReactNode
  items: DropdownItem[]
  className?: string
  align?: "left" | "right"
}

export function InteractiveDropdown({ trigger, items, className, align = "left" }: InteractiveDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  const handleItemClick = (onClick?: () => void) => {
    if (onClick) {
      onClick()
    }
    setIsOpen(false)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {typeof trigger === "string" ? (
          <button className="flex items-center space-x-1 rounded-md border border-border bg-background px-3 py-2 text-sm">
            <span>{trigger}</span>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </button>
        ) : (
          trigger
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute z-50 mt-1 min-w-[180px] overflow-hidden rounded-md border border-border bg-background shadow-md",
              align === "left" ? "left-0" : "right-0",
              className,
            )}
          >
            <div className="py-1">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ backgroundColor: "var(--muted)" }}
                  className="cursor-pointer px-3 py-2 text-sm"
                  onClick={() => handleItemClick(item.onClick)}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
