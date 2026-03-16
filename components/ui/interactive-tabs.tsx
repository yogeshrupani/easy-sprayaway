"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  label: React.ReactNode
  content: React.ReactNode
}

interface InteractiveTabsProps {
  tabs: Tab[]
  defaultTabId?: string
  className?: string
  tabClassName?: string
  activeTabClassName?: string
  contentClassName?: string
}

export function InteractiveTabs({
  tabs,
  defaultTabId,
  className,
  tabClassName,
  activeTabClassName,
  contentClassName,
}: InteractiveTabsProps) {
  const [activeTabId, setActiveTabId] = React.useState(defaultTabId || tabs[0]?.id)

  return (
    <div className={cn("space-y-4", className)}>
      <div className="relative flex space-x-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors",
              activeTabId === tab.id
                ? cn("text-primary", activeTabClassName)
                : "text-muted-foreground hover:text-foreground",
              tabClassName,
            )}
          >
            {tab.label}
            {activeTabId === tab.id && (
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                layoutId="tabIndicator"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className={cn("relative overflow-hidden rounded-md", contentClassName)}>
        <AnimatedTabContent tabs={tabs} activeTabId={activeTabId} />
      </div>
    </div>
  )
}

function AnimatedTabContent({ tabs, activeTabId }: { tabs: Tab[]; activeTabId: string }) {
  return (
    <>
      {tabs.map((tab) => (
        <motion.div
          key={tab.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: activeTabId === tab.id ? 1 : 0,
            x: activeTabId === tab.id ? 0 : 20,
            position: activeTabId === tab.id ? "relative" : "absolute",
            zIndex: activeTabId === tab.id ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="w-full"
        >
          {tab.content}
        </motion.div>
      ))}
    </>
  )
}
