"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface CssBeforeAfterProps {
  title: string
  description: string
  beforeTitle: string
  afterTitle: string
  beforeColor: string
  afterColor: string
  beforeContent: React.ReactNode
  afterContent: React.ReactNode
}

export default function CssBeforeAfter({
  title,
  description,
  beforeTitle,
  afterTitle,
  beforeColor,
  afterColor,
  beforeContent,
  afterContent,
}: CssBeforeAfterProps) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <motion.div
      className="flex flex-col rounded-lg overflow-hidden border shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {(title || description) && (
        <div className="p-4 border-b bg-gray-50">
          {title && <h3 className="text-xl font-bold text-gray-900">{title}</h3>}
          {description && <p className="text-gray-600 mt-1 text-sm">{description}</p>}
        </div>
      )}

      <div className="relative h-[300px] md:h-[400px]">
        <div
          className={`absolute inset-0 ${beforeColor} transition-opacity duration-500 ease-in-out flex flex-col`}
          style={{ opacity: showAfter ? 0 : 1 }}
        >
          <div className="p-4 bg-black/10">
            <h4 className="text-lg font-bold text-white">{beforeTitle}</h4>
          </div>
          <div className="flex-1 flex items-center justify-center p-6">{beforeContent}</div>
        </div>
        <div
          className={`absolute inset-0 ${afterColor} transition-opacity duration-500 ease-in-out flex flex-col`}
          style={{ opacity: showAfter ? 1 : 0 }}
        >
          <div className="p-4 bg-black/10">
            <h4 className="text-lg font-bold text-white">{afterTitle}</h4>
          </div>
          <div className="flex-1 flex items-center justify-center p-6">{afterContent}</div>
        </div>

        <button
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-3 z-10 hover:scale-110 transition-transform duration-300"
          onClick={() => setShowAfter(!showAfter)}
          aria-label={showAfter ? "Show before state" : "Show after state"}
        >
          {showAfter ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
        </button>

        <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
          {showAfter ? "After" : "Before"}
        </div>
      </div>
    </motion.div>
  )
}
