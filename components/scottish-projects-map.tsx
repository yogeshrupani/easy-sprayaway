"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

type Project = {
  id: string
  location: string
  coordinates: { x: number; y: number }
  service: string
  description: string
  image: string
}

export function ScottishProjectsMap() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  const projects: Project[] = [
    {
      id: "glasgow",
      location: "Glasgow",
      coordinates: { x: 40, y: 55 },
      service: "SuperQuilt Insulation",
      description: "Installed SuperQuilt in a Victorian tenement, reducing heating costs by 30%.",
      image: "/images/victorian-loft-after.png",
    },
    {
      id: "edinburgh",
      location: "Edinburgh",
      coordinates: { x: 65, y: 52 },
      service: "Roof Cleaning & Coating",
      description: "Complete roof restoration for a historic property in Old Town.",
      image: "/images/roof-after.png",
    },
    {
      id: "aberdeen",
      location: "Aberdeen",
      coordinates: { x: 72, y: 25 },
      service: "Wall & Driveway Cleaning",
      description: "Transformed the exterior of a granite home with our specialist cleaning.",
      image: "/images/wall-after.png",
    },
    {
      id: "inverness",
      location: "Inverness",
      coordinates: { x: 55, y: 20 },
      service: "Spray Foam Insulation",
      description: "Complete attic insulation for a Highland property, perfect for cold winters.",
      image: "/images/spray-foam-after.png",
    },
    {
      id: "stirling",
      location: "Stirling",
      coordinates: { x: 50, y: 45 },
      service: "SuperQuilt & Roof Cleaning",
      description: "Full home improvement package for a detached property.",
      image: "/images/attic-after.png",
    },
    {
      id: "perth",
      location: "Perth",
      coordinates: { x: 58, y: 38 },
      service: "Driveway Cleaning",
      description: "Complete transformation of a large driveway and patio area.",
      image: "/images/driveway-after.png",
    },
  ]

  return (
    <ScrollReveal animation="fade-in" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Serving Communities <span className="text-blue-600">Across Scotland</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've completed projects all over Scotland, from the Highlands to the Borders. Click on the pins to see some
            of our recent work in your area.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Scotland Map */}
          <div className="relative aspect-[4/3] w-full">
            <Image src="/placeholder.svg?key=6jct2" alt="Map of Scotland" fill className="object-contain" />

            {/* Project Pins */}
            {projects.map((project) => (
              <button
                key={project.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  activeProject === project.id ? "z-20" : "z-10"
                }`}
                style={{ left: `${project.coordinates.x}%`, top: `${project.coordinates.y}%` }}
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                aria-label={`View project in ${project.location}`}
              >
                <MapPin
                  size={activeProject === project.id ? 36 : 28}
                  className={`${
                    activeProject === project.id ? "text-blue-600 fill-blue-100" : "text-blue-500 hover:text-blue-600"
                  } drop-shadow-md transition-all duration-300`}
                />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium bg-white px-2 py-1 rounded-full shadow-sm">
                  {project.location}
                </span>
              </button>
            ))}
          </div>

          {/* Project Info */}
          {activeProject && (
            <div className="mt-8 bg-white rounded-lg shadow-xl overflow-hidden">
              {projects
                .filter((p) => p.id === activeProject)
                .map((project) => (
                  <div key={project.id} className="flex flex-col md:flex-row">
                    <div className="relative h-64 md:h-auto md:w-1/2">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`Project in ${project.location}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-1/2">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.location}</h3>
                      <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                        {project.service}
                      </div>
                      <p className="text-gray-600 mb-6">{project.description}</p>
                      <button
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        onClick={() => setActiveProject(null)}
                      >
                        View another location
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
