"use client"

import AdvancedGallery from "@/components/advanced-gallery"
import { galleryImages, galleryCategories, galleryTags, galleryLocations } from "@/data/gallery-images"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Camera } from "lucide-react"

export default function GalleryClientPage() {
  return (
    <div className="flex flex-col">
      {/* Warm Light Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f59e0b' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        {/* Floating Warm Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-24 h-16 bg-amber-200/30 backdrop-blur-sm rounded-lg border border-amber-200/50"
            animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-20 bg-orange-200/30 backdrop-blur-sm rounded-lg border border-orange-200/50"
            animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-20 h-14 bg-yellow-200/30 backdrop-blur-sm rounded-lg border border-yellow-200/50"
            animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-medium text-sm mb-8">
                <Camera className="h-4 w-4 mr-2" />
                1000+ Project Photos
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Our Beautiful Work Across
                <span className="block text-amber-600">Scotland</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl leading-relaxed">
                Explore our comprehensive gallery of completed projects from Glasgow to Edinburgh, Aberdeen to
                Inverness. See the quality and transformation we bring to Scottish family homes.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-4 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center">
                    Get Your Free Survey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-4 h-auto border-2 border-amber-600 text-amber-700 hover:bg-amber-100 hover:text-amber-800 transition-all duration-300"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Visual Element - Interactive Gallery Preview */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main Gallery Grid */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-amber-200 shadow-2xl">
                  {[
                    { delay: 0.1, color: "from-amber-400 to-orange-500" },
                    { delay: 0.2, color: "from-orange-400 to-red-400" },
                    { delay: 0.3, color: "from-yellow-400 to-amber-500" },
                    { delay: 0.4, color: "from-green-400 to-emerald-500" },
                    { delay: 0.5, color: "from-amber-500 to-yellow-500" },
                    { delay: 0.6, color: "from-orange-500 to-red-500" },
                    { delay: 0.7, color: "from-yellow-500 to-orange-500" },
                    { delay: 0.8, color: "from-emerald-400 to-green-500" },
                    { delay: 0.9, color: "from-amber-600 to-orange-600" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`aspect-square rounded-xl bg-gradient-to-br ${item.color} shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      whileHover={{ y: -5, rotate: 2 }}
                    >
                      <div className="w-full h-full rounded-xl bg-white/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="text-lg font-bold">500+</div>
                  <div className="text-xs">Before & After</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="text-lg font-bold">50+</div>
                  <div className="text-xs">Locations</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Browse Our Scottish Family Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the transformations we've created for families across Scotland. Click any image to view detailed
              before & after comparisons and see the difference we make.
            </p>
          </div>

          <AdvancedGallery
            images={galleryImages}
            categories={galleryCategories}
            tags={galleryTags}
            locations={galleryLocations}
          />
        </div>
      </section>
    </div>
  )
}
