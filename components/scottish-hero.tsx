"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Phone, MapPin, Star } from "lucide-react"
import EnquiryForm from "./enquiry-form"

const heroImages = [
  {
    src: "/images/scottish-home-1.jpg",
    alt: "Traditional Scottish stone home with modern insulation",
  },
  {
    src: "/images/scottish-home-2.jpg",
    alt: "Scottish tenement building with energy efficient windows",
  },
  {
    src: "/images/scottish-home-3.jpg",
    alt: "Modern Scottish home with SuperQuilt insulation",
  },
]

export default function ScottishHero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-950 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Scottish pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MapPin className="mr-1 h-4 w-4" /> Proudly Serving Scotland Since 2016
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="block">Keeping Scottish Homes</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-300">Warm & Dry</span>
                <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-blue-500/30"></span>
              </span>
            </motion.h1>

            <motion.p
              className="mb-8 max-w-lg text-lg text-blue-100 md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Specialising in SuperQuilt insulation, roof cleaning, and exterior maintenance for Scottish properties.
              Save on energy bills and protect your home from Scotland's weather.
            </motion.p>

            <motion.div
              className="mb-8 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Button asChild size="lg" className="group rounded-full bg-blue-100 text-blue-900 hover:bg-white">
                <Link href="/contact" className="flex items-center">
                  Get Your Free Survey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-blue-300/50 text-blue-100 hover:bg-blue-800/50 hover:text-white"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 md:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <div className="rounded-full bg-blue-500/20 p-1.5">
                  <Check className="h-4 w-4 text-blue-300" />
                </div>
                <span className="text-sm font-medium text-blue-100">Scottish-Owned</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <div className="rounded-full bg-blue-500/20 p-1.5">
                  <Check className="h-4 w-4 text-blue-300" />
                </div>
                <span className="text-sm font-medium text-blue-100">Glasgow-Based</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <div className="rounded-full bg-blue-500/20 p-1.5">
                  <Check className="h-4 w-4 text-blue-300" />
                </div>
                <span className="text-sm font-medium text-blue-100">Fully Insured</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 }}
              >
                <div className="rounded-full bg-blue-500/20 p-1.5">
                  <Star className="h-4 w-4 text-blue-300" />
                </div>
                <span className="text-sm font-medium text-blue-100">5-Star Rated</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border-4 border-blue-300/20 shadow-2xl">
              <AnimatePresence mode="wait">
                {heroImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentImage ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                  </motion.div>
                ))}
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-xl bg-white/90 p-4 backdrop-blur-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-blue-900">Get Your Free Survey</h3>
                    <div className="flex">
                      <Phone className="h-4 w-4 text-blue-700" />
                      <span className="ml-1 text-sm font-medium text-blue-700">0800 433 2068</span>
                    </div>
                  </div>
                  <EnquiryForm compact={true} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
