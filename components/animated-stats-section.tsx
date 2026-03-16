"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import AnimatedBackground from "./animated-background"
import { Home, Calendar, ThumbsUp, Award } from "lucide-react"

interface Stat {
  value: number
  label: string
  suffix?: string
  prefix?: string
  icon: React.ReactNode
}

interface AnimatedStatsProps {
  stats: Stat[]
  title?: string
  description?: string
  className?: string
}

export default function AnimatedStatsSection({
  stats,
  title = "Our Impact",
  description = "The numbers speak for themselves",
  className = "",
}: AnimatedStatsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [counted, setCounted] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const hardcodedStats = [{ value: 1000 }, { value: 9 }, { value: 100 }, { value: 98 }]

      hardcodedStats.forEach((stat, index) => {
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
  }, [isInView])

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary-darker py-20 text-white ${className}`}
    >
      <AnimatedBackground variant="primary" intensity="medium" className="z-0" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white">
            {title.replace(/Scottish\s*/g, "").trim()}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">The Numbers Speak for Themselves</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">{description.replace(/homes'/g, "homes")}</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: 1000, label: "Projects Completed", suffix: "+", icon: <Home className="h-8 w-8 text-white" /> },
            { value: 9, label: "Years Experience", suffix: "+", icon: <Calendar className="h-8 w-8 text-white" /> },
            {
              value: 100,
              label: "Customer Satisfaction",
              suffix: "%",
              icon: <ThumbsUp className="h-8 w-8 text-white" />,
            },
            { value: 98, label: "Quality Rating", suffix: "%", icon: <Award className="h-8 w-8 text-white" /> },
          ].map((stat, index) => (
            <div key={index} className="group text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-4"
              >
                <div className="absolute inset-0 rounded-full bg-white/10 blur-xl transition-transform duration-300 group-hover:scale-110"></div>
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-105">
                  {stat.icon}
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <p className="mb-2 text-4xl font-bold tracking-tight text-white transition-colors duration-300 md:text-5xl">
                  {stat.prefix || ""}
                  {index < 3 ? counted[index] : stat.value}
                  {stat.suffix}
                </p>
                <p className="font-medium text-white/80">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
