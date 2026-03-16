"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import EnquiryForm from "@/components/enquiry-form"

export default function SvgHero() {
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

      <div className="container relative z-10 pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-6"
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
                <Link href="/services">
                  <span className="relative z-10">Explore Our Services</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-md group">
                <Link href="/energy-savings" className="flex items-center">
                  View Energy Savings
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={container}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
            >
              <motion.div className="flex items-center space-x-2" variants={item}>
                <div className="rounded-full p-1.5 bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Family-Run Business</span>
              </motion.div>
              <motion.div className="flex items-center space-x-2" variants={item}>
                <div className="rounded-full p-1.5 bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">UK-Based Experts</span>
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
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100 relative z-10">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Get Your Free Survey</h2>
                <p className="text-gray-600 mt-1">Fill in the form below and we'll contact you within 24 hours</p>
              </div>
              <EnquiryForm compact={true} />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
