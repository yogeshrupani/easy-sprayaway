"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface TestimonialCardModernProps {
  name: string
  location: string
  rating: number
  text: string
  service: string
}

export default function TestimonialCardModern({ name, location, rating, text, service }: TestimonialCardModernProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="standard-card h-full"
    >
      <div className="flex items-center mb-4">
        <div className="rounded-full w-10 h-10 flex items-center justify-center bg-primary/10 text-primary font-bold mr-3">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-slate-800">{name}</h4>
          <p className="text-sm text-slate-500">{location}</p>
        </div>
      </div>

      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>

      <p className="text-slate-600 mb-4 flex-grow">"{text}"</p>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <p className="text-sm text-slate-500">
          <span className="font-medium text-slate-700">Service:</span> {service}
        </p>
      </div>
    </motion.div>
  )
}
