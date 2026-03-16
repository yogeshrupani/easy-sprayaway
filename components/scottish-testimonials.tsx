"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ScottishTestimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  service: string
  isScottish: boolean
}

const scottishTestimonials: ScottishTestimonial[] = [
  {
    id: "1",
    name: "Angus MacLeod",
    location: "Glasgow",
    rating: 5,
    text: "Absolutely brilliant service! The lads installed SuperQuilt in my Victorian tenement flat and the difference is night and day. My heating bills are down by a third and the flat stays cosy even during those bitter Glasgow winters. Cannae recommend them enough!",
    service: "SuperQuilt Insulation",
    isScottish: true,
  },
  {
    id: "2",
    name: "Fiona Campbell",
    location: "Edinburgh",
    rating: 5,
    text: "Easy-Sprayaway transformed our 1890s Edinburgh townhouse. The team were professional, tidy and completed the work in just two days. Our home is now much warmer and our energy bills have dropped dramatically. Worth every penny!",
    service: "SuperQuilt Insulation",
    isScottish: true,
  },
  {
    id: "3",
    name: "Hamish Gordon",
    location: "Aberdeen",
    rating: 5,
    text: "After years of battling with damp and mould in our granite home, Easy-Sprayaway's insulation has made a world of difference. No more condensation on the windows and the house stays warm even when the North Sea winds are howling. First-class job!",
    service: "Spray Foam Insulation",
    isScottish: true,
  },
  {
    id: "4",
    name: "Moira Sutherland",
    location: "Inverness",
    rating: 5,
    text: "The team cleaned our roof which was covered in moss and lichen after the Highland weather had taken its toll. They were prompt, professional and the roof looks brand new. They even fixed a loose slate at no extra charge. Excellent service!",
    service: "Roof Cleaning",
    isScottish: true,
  },
  {
    id: "5",
    name: "Duncan Fraser",
    location: "Perth",
    rating: 5,
    text: "Had my driveway and stone walls cleaned by Easy-Sprayaway. The transformation is incredible - looks like we've had new stonework installed! The team were respectful of our property and left everything spotless. Would highly recommend to any Scottish homeowner.",
    service: "Wall & Driveway Cleaning",
    isScottish: true,
  },
]

export default function ScottishTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % scottishTestimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + scottishTestimonials.length) % scottishTestimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-200 px-4 py-1 text-sm font-medium text-blue-800">
            What Our Scottish Customers Say
          </span>
          <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">Trusted by Homeowners Across Scotland</h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-700">
            Don't just take our word for it - hear from our satisfied customers from Glasgow to Aberdeen and beyond.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-xl bg-white shadow-xl">
            <div className="relative h-[400px] md:h-[350px]">
              <div className="absolute inset-0 flex flex-col p-6 md:p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex flex-col">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < scottishTestimonials[activeIndex].rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="mt-2 flex items-center text-blue-700">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span className="text-sm font-medium">{scottishTestimonials[activeIndex].location}</span>
                    </div>
                  </div>
                  <Quote className="h-12 w-12 text-blue-200" />
                </div>

                <p className="flex-grow text-xl italic text-blue-900 md:text-2xl">
                  "{scottishTestimonials[activeIndex].text}"
                </p>

                <div className="mt-6 flex items-end justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-800 text-xl font-bold">
                      {scottishTestimonials[activeIndex].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">{scottishTestimonials[activeIndex].name}</p>
                      <p className="text-sm text-blue-700">{scottishTestimonials[activeIndex].service}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-blue-700">Verified Scottish Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 top-1/2 -translate-y-1/2 md:-left-6">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-white shadow-md hover:bg-blue-50"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 md:-right-6">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-white shadow-md hover:bg-blue-50"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            {scottishTestimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-blue-700 w-6" : "bg-blue-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
