"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItem {
  id: string
  title: React.ReactNode
  content: React.ReactNode
}

interface InteractiveAccordionProps {
  items: AccordionItem[]
  defaultExpandedId?: string
  allowMultiple?: boolean
  className?: string
  itemClassName?: string
}

export function InteractiveAccordion({
  items,
  defaultExpandedId,
  allowMultiple = false,
  className,
  itemClassName,
}: InteractiveAccordionProps) {
  const [expandedItems, setExpandedItems] = React.useState<string[]>(defaultExpandedId ? [defaultExpandedId] : [])

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    } else {
      setExpandedItems((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item) => {
        const isExpanded = expandedItems.includes(item.id)

        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden rounded-md border border-border transition-all duration-200",
              isExpanded && "shadow-sm",
              itemClassName,
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between px-4 py-3 text-left font-medium transition-colors hover:bg-muted/50"
            >
              <span>{item.title}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-muted-foreground"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-4 pb-4 pt-0">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
