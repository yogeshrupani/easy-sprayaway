"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface Stat {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

interface StatsProps {
  stats: Stat[]
  title?: string
  description?: string
  className?: string
}

export default function StatsSection({
  stats,
  title = "Our Impact",
  description = "The numbers speak for themselves",
  className = "",
}: StatsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [counted, setCounted] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000 // 2 seconds
        const increment = stat.value / (duration / 16) // 60fps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setCounted((prev) => {
            const newCounted = [...prev]
            newCounted[index] = Math.floor(current)
            return newCounted
          })
        }, 16)

        return () => clearInterval(timer)
      })
    }
  }, [isInView, stats])

  return (
    <div className={`w-full ${className}`} ref={ref}>
      {(title || description) && (
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>}
          {description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {stat.prefix}
              {counted[index]}
              {stat.suffix}
            </div>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: stats.length * 0.1 }}
        >
          <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+1</div>
          <p className="text-gray-600">Years Warranty</p>
        </motion.div>
      </div>
    </div>
  )
}
