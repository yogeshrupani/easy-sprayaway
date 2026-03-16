"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  image: string
  href: string
  color: string
  isPopular?: boolean
}

interface ServicesShowcaseProps {
  services: Service[]
  title?: string
  description?: string
  className?: string
}

export default function ServicesShowcase({
  services,
  title = "Our Services",
  description = "Professional property maintenance and insulation solutions",
  className = "",
}: ServicesShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className={`group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all ${
              service.isPopular ? "border-primary/30" : ""
            }`}
            onHoverStart={() => setHoveredId(service.id)}
            onHoverEnd={() => setHoveredId(null)}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            {service.isPopular && (
              <div className="absolute right-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white shadow-md">
                Popular Choice
              </div>
            )}

            <div className="relative h-48 overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center">
                <div
                  className={`mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${service.color}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>

              <p className="mb-4 text-gray-600">{service.description}</p>

              <ul className="mb-6 space-y-2">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={hoveredId === service.id ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="mr-2 mt-1 rounded-full bg-green-100 p-1">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                asChild
                variant={service.isPopular ? "default" : "outline"}
                className={`w-full ${service.isPopular ? "" : "group"}`}
              >
                <Link href={service.href} className="flex items-center justify-center">
                  {service.isPopular ? (
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
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline" className="group">
          <Link href="/services" className="flex items-center">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
