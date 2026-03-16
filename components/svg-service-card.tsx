"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"

interface SvgServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  href: string
  features?: string[]
  isMainService?: boolean
}

export default function SvgServiceCard({
  title,
  description,
  icon,
  color,
  href,
  features,
  isMainService = false,
}: SvgServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`group flex flex-col rounded-lg overflow-hidden border bg-card shadow-sm transition-all ${
        isMainService ? "border-primary/20 shadow-md" : ""
      }`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${color}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="text-white transform transition-transform duration-500"
            style={{ scale: isHovered ? 1.1 : 1 }}
          >
            {icon}
          </div>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 0.7 : 0 }}
        />
        {isMainService && (
          <div className="absolute top-3 right-3 bg-white text-primary text-xs px-3 py-1 rounded-full shadow-md z-10 font-medium">
            Popular Choice
          </div>
        )}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full"
          animate={{ translateY: isHovered ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-white/90 line-clamp-2">{description}</p>
        </motion.div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600 line-clamp-3">{description}</p>

        {features && features.length > 0 && (
          <ul className="mt-4 space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-baseline text-sm text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="rounded-full p-1 bg-primary/10 mr-2 flex-shrink-0">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4">
          <Button
            asChild
            className={`${isMainService ? "w-full" : "group"} transition-all duration-300`}
            variant={isMainService ? "default" : "outline"}
          >
            <Link href={href} className="flex items-center justify-center">
              {isMainService ? (
                "Learn More"
              ) : (
                <>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
