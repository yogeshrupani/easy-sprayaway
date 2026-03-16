"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"

export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern" />
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row gap-8 pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        <motion.div
          className="flex flex-col justify-center lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Transform Your Home With <span className="text-primary">Superior Insulation</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Trusted UK specialists in SuperQuilt loft insulation, roof cleaning and property maintenance. Start saving
            on energy bills today.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button asChild size="lg" className="text-md group relative overflow-hidden">
              <Link href="/contact">
                <span className="relative z-10">Get Your Free Survey</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-md group">
              <Link href="/services" className="flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4"
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
          >
            <motion.div className="flex items-center space-x-2" variants={item}>
              <div className="rounded-full p-1.5 bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium">Family-Run</span>
            </motion.div>
            <motion.div className="flex items-center space-x-2" variants={item}>
              <div className="rounded-full p-1.5 bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium">UK-Based</span>
            </motion.div>
            <motion.div className="flex items-center space-x-2" variants={item}>
              <div className="rounded-full p-1.5 bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium">Fully Insured</span>
            </motion.div>
            <motion.div className="flex items-center space-x-2" variants={item}>
              <div className="rounded-full p-1.5 bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium">Free Quotes</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative h-80 sm:h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
            <Image
              src="/images/hero-insulation.png"
              alt="SuperQuilt Insulation Installation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20 transform transition-transform duration-500 hover:scale-105">
              <p className="text-sm font-medium text-gray-900">Save up to 40% on energy bills</p>
              <p className="text-xs text-gray-600">with SuperQuilt insulation</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
