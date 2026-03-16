"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Droplet, Home, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "superquilt",
    title: "SuperQuilt Insulation",
    description:
      "Keep your Scottish home warm and dry with our premium multi-layer insulation. Perfect for traditional tenements, cottages, and modern homes alike.",
    features: [
      "Up to 40% energy savings",
      "Ideal for Scotland's climate",
      "Prevents condensation & damp",
      "25-year warranty",
    ],
    icon: <Shield className="h-6 w-6 text-white" />,
    image: "/images/superquilt-insulation.png",
    color: "from-blue-600 to-blue-800",
    isPopular: true,
  },
  {
    id: "roof-cleaning",
    title: "Roof Cleaning & Coating",
    description:
      "Protect your roof from Scotland's harsh weather with our professional cleaning and protective coating services.",
    features: [
      "Removes moss and algae",
      "Weather-resistant coatings",
      "Extends roof lifespan",
      "Prevents roof damage",
      "Prevents water damage",
    ],
    icon: <Home className="h-6 w-6 text-white" />,
    image: "/images/roof-cleaning.png",
    color: "from-emerald-600 to-emerald-800",
    isPopular: false,
  },
  {
    id: "wall-driveway",
    title: "Wall & Driveway Cleaning",
    description:
      "Restore the appearance of your Scottish property with our professional cleaning services for stone walls, driveways, and patios.",
    features: [
      "Removes Scottish weather staining",
      "Preserves natural stone",
      "Improves kerb appeal",
      "Prevents slip hazards",
    ],
    icon: <Droplet className="h-6 w-6 text-white" />,
    image: "/images/driveway-cleaning.png",
    color: "from-amber-600 to-amber-800",
    isPopular: false,
  },
]

export default function ScottishServices() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="mb-4 inline-block rounded-full bg-blue-200 px-4 py-1 text-sm font-medium text-blue-800">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">Expert Solutions for Scottish Homes</h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-700">
            Specially designed services to protect and improve homes across Scotland, from traditional tenements to
            modern properties.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {service.isPopular && (
                <div className="absolute right-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-md">
                  Most Popular
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r ${service.color} p-4 text-white`}>
                  <div className="flex items-center">
                    <div className="mr-3 rounded-full bg-white/20 p-2">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-4 text-gray-700">{service.description}</p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 rounded-full bg-green-100 p-1">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={service.isPopular ? "default" : "outline"}
                  className={`w-full ${service.isPopular ? "bg-blue-600 hover:bg-blue-700" : "group"}`}
                >
                  <Link href={`/services#${service.id}`} className="flex items-center justify-center">
                    {service.isPopular ? (
                      "Get a Free Quote"
                    ) : (
                      <>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
