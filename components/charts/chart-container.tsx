"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ChartContainerProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
  icon?: ReactNode
  gradient?: "blue" | "green" | "amber" | "red"
}

export default function ChartContainer({
  title,
  description,
  children,
  className = "",
  icon,
  gradient = "blue",
}: ChartContainerProps) {
  const gradientClass = {
    blue: "gradient-blue",
    green: "gradient-green",
    amber: "gradient-amber",
    red: "gradient-red",
  }[gradient]

  return (
    <motion.div
      className={`chart-card bg-white rounded-xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className={`p-5 ${gradientClass} border-b`}>
        <div className="flex items-center">
          {icon && <div className="mr-3 text-primary icon-pulse">{icon}</div>}
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </motion.div>
  )
}
