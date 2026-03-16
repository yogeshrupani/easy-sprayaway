"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

interface InteractiveServiceCardProps {
  title: string
  description: string
  features: string[]
  image: string
  icon: React.ReactNode
  href: string
  color: string
  isPopular?: boolean
}

export default function InteractiveServiceCard({
  title,
  description,
  features,
  image,
  icon,
  href,
  color,
  isPopular = false,
}: InteractiveServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 ${
        isHovered ? "shadow-xl" : ""
      } ${isPopular ? "border-2 border-primary" : "border border-gray-100"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {isPopular && (
        <div className="absolute right-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white shadow-md">
          Popular Choice
        </div>
      )}

      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center">
          <div className={`mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${color}`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <p className="mb-4 text-gray-600">{description}</p>

        <ul className="mb-6 space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={isHovered ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="mr-2 mt-1 rounded-full bg-green-100 p-1">
                <Check className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <Link
          href={href}
          className={`group flex w-full items-center justify-center rounded-lg py-2.5 text-center font-medium transition-all duration-300 ${
            isPopular
              ? "bg-primary text-white hover:bg-primary-dark"
              : "border border-primary/30 text-primary hover:border-primary hover:bg-primary/5"
          }`}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
