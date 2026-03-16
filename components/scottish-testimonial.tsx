"use client"

import Image from "next/image"
import { Star, MapPin, Quote } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

type TestimonialProps = {
  name: string
  location: string
  rating: number
  text: string
  image?: string
  date: string
}

export function ScottishTestimonial({ name, location, rating, text, image, date }: TestimonialProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-100 mr-4">
              {image ? (
                <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full w-full bg-blue-100 text-blue-600 font-bold text-xl">
                  {name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{name}</h4>
              <div className="flex items-center text-xs text-gray-500">
                <MapPin size={12} className="mr-1" />
                {location}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
            ))}
          </div>
        </div>

        <div className="relative">
          <Quote size={24} className="absolute top-0 left-0 text-blue-100" />
          <p className="text-gray-600 pl-8 pr-4 italic">{text}</p>
        </div>

        <div className="mt-4 text-xs text-gray-400">{date}</div>
      </div>
    </div>
  )
}

export function ScottishTestimonials() {
  const testimonials = [
    {
      name: "Angus MacLeod",
      location: "Glasgow",
      rating: 5,
      text: "Easy-Sprayaway installed SuperQuilt in my Victorian tenement flat. The difference is incredible - my heating bills are down by a third and the flat stays warm even during those bitter Glasgow winters!",
      date: "January 2023",
    },
    {
      name: "Fiona Campbell",
      location: "Edinburgh",
      rating: 5,
      text: "After years of struggling with a cold, damp home in Edinburgh's Old Town, Easy-Sprayaway's insulation has transformed our living space. Professional service from start to finish.",
      date: "March 2023",
    },
    {
      name: "Hamish Stewart",
      location: "Aberdeen",
      rating: 5,
      text: "The team cleaned and coated our granite home in Aberdeen. Even with the harsh coastal weather, our walls look brand new. Worth every penny for a proper Scottish home!",
      date: "May 2023",
    },
  ]

  return (
    <ScrollReveal animation="fade-in" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What <span className="text-blue-600">Scottish Homeowners</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers across Scotland have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScottishTestimonial
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              text={testimonial.text}
              date={testimonial.date}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
