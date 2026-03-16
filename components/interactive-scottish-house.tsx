"use client"

import { useState } from "react"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

type HotspotInfo = {
  id: string
  x: number
  y: number
  title: string
  description: string
  service: string
}

export function InteractiveScottishHouse() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)

  const hotspots: HotspotInfo[] = [
    {
      id: "roof",
      x: 50,
      y: 15,
      title: "Roof Protection",
      description:
        "Our roof cleaning and protective coatings extend the life of your roof and improve your home's appearance.",
      service: "Roof Cleaning & Coatings",
    },
    {
      id: "loft",
      x: 50,
      y: 30,
      title: "Loft Insulation",
      description:
        "SuperQuilt insulation keeps your home warm in winter and cool in summer, reducing energy bills by up to 25%.",
      service: "SuperQuilt Insulation",
    },
    {
      id: "walls",
      x: 20,
      y: 50,
      title: "Wall Cleaning",
      description: "Our soft wash technology removes moss, algae, and dirt without damaging your walls.",
      service: "Wall Cleaning",
    },
    {
      id: "driveway",
      x: 80,
      y: 80,
      title: "Driveway Cleaning",
      description: "Transform your driveway with our professional cleaning service, removing years of dirt and stains.",
      service: "Driveway Cleaning",
    },
    {
      id: "spray-foam",
      x: 80,
      y: 40,
      title: "Spray Foam",
      description:
        "Our spray foam insulation fills every gap and crack, providing superior insulation and draft-proofing.",
      service: "Spray Foam Insulation",
    },
  ]

  return (
    <ScrollReveal animation="fade-in" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Your Scottish Home, <span className="text-blue-600">Protected & Improved</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our services designed specifically for Scottish homes and weather conditions. Click on the hotspots
            to learn more about how we can help improve your home.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* House Image */}
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/placeholder.svg?key=trauq"
              alt="Scottish Home"
              fill
              className="object-cover rounded-lg shadow-lg"
            />

            {/* Hotspots */}
            {hotspots.map((hotspot) => (
              <button
                key={hotspot.id}
                className={`absolute w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  activeHotspot === hotspot.id ? "bg-blue-600 scale-125 z-20" : "bg-blue-500 hover:bg-blue-600 z-10"
                }`}
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
                aria-label={`Learn more about ${hotspot.title}`}
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="text-white font-bold text-xs md:text-sm">+</span>
              </button>
            ))}
          </div>

          {/* Info Box */}
          {activeHotspot && (
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 w-11/12 md:w-3/4 bg-white rounded-lg shadow-xl p-4 md:p-6 z-30 border-l-4 border-blue-600">
              {hotspots
                .filter((h) => h.id === activeHotspot)
                .map((hotspot) => (
                  <div key={hotspot.id} className="flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{hotspot.title}</h3>
                    <p className="text-gray-600 mb-3">{hotspot.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-blue-600">{hotspot.service}</span>
                      <button
                        className="text-sm text-gray-500 hover:text-gray-700"
                        onClick={() => setActiveHotspot(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}
