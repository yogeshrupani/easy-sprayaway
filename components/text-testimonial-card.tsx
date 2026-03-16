"use client"

import { motion } from "framer-motion"
import { Star, Quote, User } from "lucide-react"

interface TextTestimonialCardProps {
  name: string
  location: string
  rating: number
  text: string
  service: string
  index?: number
}

export default function TextTestimonialCard({
  name,
  location,
  rating,
  text,
  service,
  index = 0,
}: TextTestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg border shadow-sm overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-6 flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
            ))}
          </div>
          <Quote className="h-8 w-8 text-gray-200" />
        </div>

        <blockquote className="mb-4">
          <p className="text-gray-700 leading-relaxed">{text}</p>
        </blockquote>
      </div>

      <div className="p-6 border-t bg-gray-50">
        <div className="flex flex-col">
          <div className="flex justify-between items-end">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-sm text-gray-600">{location}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-primary font-medium">{service}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
