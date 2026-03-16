"use client"

import Image from "next/image"
import { Thermometer, Droplets, Banknote, Home, Shield, Award } from "lucide-react"

const benefits = [
  {
    title: "Lower Energy Bills",
    description:
      "Save up to 40% on your heating costs - crucial for Scottish winters where heating accounts for over 70% of home energy use.",
    icon: <Banknote className="h-6 w-6 text-green-600" />,
    color: "bg-green-100",
  },
  {
    title: "Warmer Home",
    description: "Maintain a comfortable temperature throughout your Scottish home, even during the coldest months.",
    icon: <Thermometer className="h-6 w-6 text-red-600" />,
    color: "bg-red-100",
  },
  {
    title: "Condensation Control",
    description: "Prevent damp and mould issues common in Scottish properties due to our humid climate.",
    icon: <Droplets className="h-6 w-6 text-blue-600" />,
    color: "bg-blue-100",
  },
  {
    title: "Improved EPC Rating",
    description:
      "Boost your Energy Performance Certificate rating, increasing your property's value in the Scottish market.",
    icon: <Home className="h-6 w-6 text-amber-600" />,
    color: "bg-amber-100",
  },
  {
    title: "Long-Lasting Protection",
    description: "Our solutions are designed to withstand Scotland's harsh weather conditions for decades.",
    icon: <Shield className="h-6 w-6 text-purple-600" />,
    color: "bg-purple-100",
  },
  {
    title: "Scottish Expertise",
    description: "Our team understands the unique challenges of Scottish properties, from tenements to cottages.",
    icon: <Award className="h-6 w-6 text-blue-600" />,
    color: "bg-blue-100",
  },
]

export default function ScottishBenefits() {
  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div>
              <span className="mb-4 inline-block rounded-full bg-blue-200 px-4 py-1 text-sm font-medium text-blue-800">
                Why Choose Us
              </span>
              <h2 className="mb-6 text-3xl font-bold text-blue-900 md:text-4xl">Benefits for Scottish Homeowners</h2>
              <p className="mb-8 text-lg text-blue-700">
                Our solutions are specifically designed to address the unique challenges faced by Scottish properties,
                from traditional tenements to modern homes.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className={`mb-4 rounded-full ${benefit.color} p-3 w-12 h-12 flex items-center justify-center`}>
                    {benefit.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-blue-900">{benefit.title}</h3>
                  <p className="text-blue-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[600px] overflow-hidden rounded-xl border-8 border-white shadow-2xl">
              <Image
                src="/images/superquilt-detail.png"
                alt="Warm, cozy Scottish home interior with SuperQuilt insulation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-xl bg-white/90 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 rounded-full bg-blue-100 p-2">
                      <Thermometer className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900">Scottish Climate Ready</h3>
                  </div>
                  <p className="mb-4 text-blue-700">
                    Our insulation solutions are specifically designed to handle Scotland's unique climate challenges:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-blue-700">
                      <span className="mr-2 rounded-full bg-blue-100 p-1">
                        <Shield className="h-3 w-3 text-blue-600" />
                      </span>
                      Cold, wet winters with average temperatures of 0-7°C
                    </li>
                    <li className="flex items-center text-blue-700">
                      <span className="mr-2 rounded-full bg-blue-100 p-1">
                        <Shield className="h-3 w-3 text-blue-600" />
                      </span>
                      High annual rainfall (over 1,500mm in western Scotland)
                    </li>
                    <li className="flex items-center text-blue-700">
                      <span className="mr-2 rounded-full bg-blue-100 p-1">
                        <Shield className="h-3 w-3 text-blue-600" />
                      </span>
                      Strong winds, particularly in coastal and Highland areas
                    </li>
                    <li className="flex items-center text-blue-700">
                      <span className="mr-2 rounded-full bg-blue-100 p-1">
                        <Shield className="h-3 w-3 text-blue-600" />
                      </span>
                      High humidity levels causing condensation issues
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 rounded-xl bg-blue-900 p-6 shadow-xl">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-blue-800 p-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-300">TRUSTED BY</p>
                  <p className="text-2xl font-bold text-white">10,000+ Scottish Homes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
