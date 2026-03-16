"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Phone, Star, Leaf, Shield, Droplets, Home, ArrowRight, Heart } from "lucide-react"

const services = [
  {
    id: "superquilt",
    title: "SuperQuilt Insulation Scotland",
    subtitle: "Advanced Multi-Layer Technology",
    description:
      "Revolutionary multi-layer reflective insulation technology that reflects 97% of radiant heat with exceptional space efficiency. Perfect for Scottish homes.",
    features: [
      "Ultra-thin 40mm profile",
      "97% radiant heat reflection",
      "25-year manufacturer warranty",
      "Space-saving installation",
      "Reduces heat loss by up to 95%",
      "Improves EPC ratings significantly",
    ],
    image: "/images/services/superquilt-installation.jpeg",
    icon: Shield,
    popular: true,
    savings: "Save up to £400 annually on heating bills",
  },
  {
    id: "hemp",
    title: "Hemp Insulation Scotland",
    subtitle: "Carbon-Negative Innovation",
    description:
      "Revolutionary carbon-negative insulation manufactured from UK industrial hemp, offering exceptional rigidity and vapour-breathable performance for Scottish properties.",
    features: [
      "Carbon-negative footprint",
      "Vapour-breathable technology",
      "UK industrial hemp source",
      "Exceptional structural rigidity",
      "Natural pest resistance",
      "Healthy indoor environment",
    ],
    image: "/images/services/hemp-insulation.jpeg",
    icon: Leaf,
    popular: false,
    savings: "Environmentally responsible insulation choice",
  },
  {
    id: "fibreglass",
    title: "Fibreglass Insulation Scotland",
    subtitle: "Proven Performance Solutions",
    description:
      "High-performance fibreglass insulation delivering exceptional thermal efficiency with proven reliability and cost-effectiveness for Scottish residential applications.",
    features: [
      "Excellent thermal performance",
      "Fire-resistant properties",
      "Cost-effective solution",
      "Quick professional installation",
      "Widely available",
      "Good value for money",
    ],
    image: "/images/services/fibreglass-loft.jpeg",
    icon: Shield,
    popular: false,
    savings: "Affordable insulation with solid performance",
  },
  {
    id: "sheep-wool",
    title: "Natural Sheep Wool Insulation Scotland",
    subtitle: "Premium Natural Solutions",
    description:
      "100% pure sheep wool insulation with Ionic Protect® technology offering superior air purification, humidity regulation, and sustainable performance for Scottish homes.",
    features: [
      "Natural air purification",
      "33% humidity absorption capacity",
      "Renewable & sustainable",
      "Superior acoustic properties",
      "Fire protection rated",
      "Biocide-free protection",
    ],
    image: "/images/services/sheep-wool-insulation.jpeg",
    icon: Leaf,
    popular: false,
    savings: "Eco-friendly solution with excellent thermal performance",
  },
  {
    id: "glass-mineral-wool",
    title: "Glass Mineral Wool Scotland",
    subtitle: "Non-Combustible Excellence",
    description:
      "Premium non-combustible A1 rated insulation manufactured from 84% recycled content, providing superior thermal performance and moisture resistance for Scottish properties.",
    features: [
      "A1 non-combustible rating",
      "84% recycled content",
      "Moisture resistant",
      "Long-term durability",
      "Excellent thermal performance",
      "Professional installation",
    ],
    image: "/images/services/glass-mineral-wool.jpeg",
    icon: Shield,
    popular: false,
    savings: "Professional-grade insulation for enhanced safety",
  },
  {
    id: "roof-cleaning",
    title: "Professional Roof Care Scotland",
    subtitle: "Protective Maintenance Solutions",
    description:
      "Comprehensive roof cleaning and protective coating services designed to extend roof lifespan, enhance appearance, and protect your Scottish property investment.",
    features: [
      "Professional moss removal",
      "Protective coating systems",
      "Roof lifespan extension",
      "Property value enhancement",
      "Prevents water damage",
      "Professional equipment and techniques",
    ],
    image: "/images/services/roof-care.jpeg",
    icon: Home,
    popular: false,
    savings: "Protect your investment and avoid costly roof replacement",
  },
  {
    id: "wall-driveway",
    title: "Exterior Property Cleaning Scotland",
    subtitle: "Professional Surface Restoration",
    description:
      "Advanced cleaning solutions utilising soft wash technology and precision pressure washing to restore and protect your Scottish property's exterior surfaces.",
    features: [
      "Soft wash technology",
      "Precision pressure washing",
      "Eco-friendly solutions",
      "Protective sealing options",
      "Enhances kerb appeal",
      "Protects surface integrity",
    ],
    image: "/images/services/exterior-cleaning.jpeg",
    icon: Droplets,
    popular: false,
    savings: "Restore and protect your property's exterior surfaces",
  },
]

export default function ServicesPageClient() {
  return (
    <div className="flex flex-col">
      {/* Warm Light Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat animate-pulse bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPgo8ZyBmaWxsPSIjZjU5ZTBiIiBmaWxsT3BhY2l0eT0iMC4xIj4KPHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')]"></div>
        </div>

        {/* Floating Warm Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200/30 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-orange-200/30 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-200/30 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-medium text-sm mb-8">
                <Heart className="h-4 w-4 mr-2" />
                Trusted Family Services Since 2016
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Transform Your Scottish Home with
                <span className="block text-amber-600">Expert Care & Warmth</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                From advanced SuperQuilt insulation to pristine exterior cleaning, we provide comprehensive home
                services that make your family more comfortable while reducing energy costs.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center">
                    Get Your Free Family Survey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-amber-600 text-amber-700 hover:bg-amber-100 hover:text-amber-800 text-lg px-8 py-4 h-auto"
                >
                  <Link href="tel:+448004332068" className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    0800 433 2068
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative">
              <div className="relative">
                {/* Main Service Illustration */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-200 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Service Icons with Warm Animation */}
                    {[
                      { icon: Shield, label: "SuperQuilt", color: "from-amber-400 to-orange-500" },
                      { icon: Home, label: "Roof Care", color: "from-orange-400 to-red-400" },
                      { icon: Droplets, label: "Cleaning", color: "from-yellow-400 to-amber-500" },
                      { icon: Leaf, label: "Eco-Friendly", color: "from-green-400 to-emerald-500" },
                    ].map((service, index) => (
                      <div
                        key={service.label}
                        className={`relative p-6 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                      >
                        <service.icon className="h-8 w-8 text-white mb-3" />
                        <p className="text-white font-semibold text-sm">{service.label}</p>
                        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>

                  {/* Central Family Stats */}
                  <div className="mt-8 text-center">
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <div className="text-2xl font-bold text-amber-700 mb-1">1000+</div>
                      <div className="text-amber-600 text-sm">Happy Scottish Families</div>
                    </div>
                  </div>
                </div>

                {/* Floating Achievement Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  ⭐ Family Trusted
                </div>

                <div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  💚 Eco-Friendly
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            {/* Featured Service - SuperQuilt */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-3xl p-8 md:p-12 border border-amber-100 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-600 text-white text-sm font-medium mb-6">
                      <Star className="h-4 w-4 mr-2" />
                      Most Popular Service in Scotland
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      SuperQuilt Insulation Scotland
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Revolutionary multi-layer reflective insulation technology that reflects 97% of radiant heat with
                      exceptional space efficiency. Perfect for Scottish homes and climate conditions.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {[
                        "97% heat reflection",
                        "10-year warranty",
                        "1-year installation guarantee",
                        "£400+ annual savings",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="rounded-full p-1 bg-green-100 mr-3">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                      <Link href="/contact?service=superquilt" className="flex items-center">
                        Get SuperQuilt Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/services/superquilt-installation.jpeg"
                        alt="Professional SuperQuilt insulation installation in Scottish home"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-amber-100">
                      <div className="text-2xl font-bold text-amber-600">£400+</div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {services.slice(1).map((service, index) => (
                <Card
                  key={service.id}
                  className="group relative bg-white border border-amber-100 rounded-2xl p-6 hover:shadow-xl hover:border-amber-200 transition-all duration-500 overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <service.icon className="w-full h-full text-amber-600" />
                  </div>

                  <div className="relative z-10">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-colors duration-300">
                        <service.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                    </div>

                    {/* Service Content */}
                    <div className="mb-6">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        {service.subtitle}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className="rounded-full p-0.5 bg-green-100 mr-2 flex-shrink-0">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Service Image */}
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6 bg-gray-100">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={`${service.title} - professional installation in Scotland`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>

                    {/* Savings Badge */}
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-3 mb-6 border border-amber-100">
                      <p className="text-sm font-medium text-amber-700 text-center">{service.savings}</p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300"
                    >
                      <Link href={`/contact?service=${service.id}`} className="flex items-center justify-center">
                        Get Professional Quote
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Results Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Family Home Transformations Across Scotland
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic improvements our professional services deliver for Scottish families.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {/* Energy Savings Card */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 lg:p-8 border border-green-100 shadow-lg h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-xl mb-4">
                    <svg
                      className="w-7 h-7 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Energy Efficiency</h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Dramatic improvements in Scottish home energy performance
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700 font-medium text-sm lg:text-base">Heat Loss Reduction</span>
                    <span className="text-xl lg:text-2xl font-bold text-green-600">95%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700 font-medium text-sm lg:text-base">Annual Savings</span>
                    <span className="text-xl lg:text-2xl font-bold text-green-600">£400+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700 font-medium text-sm lg:text-base">EPC Rating Boost</span>
                    <span className="text-xl lg:text-2xl font-bold text-green-600">1-2 Bands</span>
                  </div>
                </div>
              </div>

              {/* Property Value Card */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 lg:p-8 border border-amber-100 shadow-lg h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-xl mb-4">
                    <Home className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Property Enhancement</h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Comprehensive improvements that add lasting value to Scottish properties
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700 font-medium text-sm lg:text-base">Property Value Increase</span>
                    <span className="text-xl lg:text-2xl font-bold text-amber-600">8-12%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700 font-medium text-sm lg:text-base">Roof Lifespan Extension</span>
                    <span className="text-xl lg:text-2xl font-bold text-amber-600">15+ Years</span>
                  </div>
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700 font-medium text-sm lg:text-base">Comfort Improvement</span>
                    <span className="text-xl lg:text-2xl font-bold text-amber-600">100%</span>
                  </div>
                </div>
              </div>

              {/* Environmental Impact Card */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 lg:p-8 border border-yellow-100 shadow-lg h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-100 rounded-xl mb-4">
                    <Leaf className="w-7 h-7 text-yellow-600" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Environmental Impact</h3>
                  <p className="text-gray-600 text-sm lg:text-base">Sustainable solutions for a greener Scotland</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700 font-medium text-sm lg:text-base">CO₂ Reduction</span>
                    <span className="text-xl lg:text-2xl font-bold text-yellow-600">2.5 Tonnes</span>
                  </div>
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700 font-medium text-sm lg:text-base">Natural Materials</span>
                    <span className="text-xl lg:text-2xl font-bold text-yellow-600">100%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700 font-medium text-sm lg:text-base">Warranty Period</span>
                    <span className="text-xl lg:text-2xl font-bold text-yellow-600">10 Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Professional Process */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Family-Focused Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial assessment to completion, we ensure every project meets our exacting standards with
              transparent pricing and guaranteed results for Scottish families.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Free Family Assessment",
                  description:
                    "Comprehensive survey of your Scottish property with detailed energy efficiency analysis",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  ),
                  features: ["No obligation", "Expert consultation", "Detailed report"],
                  color: "from-amber-500 to-orange-500",
                },
                {
                  step: "02",
                  title: "Transparent Quotation",
                  description: "Clear and honest pricing with no hidden fees, including estimated timelines",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  features: ["Clear pricing", "Estimated timeline", "No hidden fees"],
                  color: "from-green-500 to-emerald-500",
                },
                {
                  step: "03",
                  title: "Expert Installation",
                  description:
                    "Professional installation by certified technicians using premium materials and proven techniques",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  features: ["Certified installers", "Premium materials", "Clean finish"],
                  color: "from-yellow-500 to-amber-500",
                },
                {
                  step: "04",
                  title: "Quality Assurance",
                  description:
                    "Comprehensive quality check with 10-year product warranty and 1-year installation guarantee",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  features: ["Quality inspection", "10-year warranty", "Ongoing support"],
                  color: "from-orange-500 to-red-400",
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center text-white text-lg font-bold flex-shrink-0`}
                    >
                      {process.step}
                    </div>
                    <div className="p-3 rounded-xl bg-amber-100 text-amber-600">{process.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 flex-grow">
                    {process.description}
                  </p>
                  <div className="space-y-2 pt-4 border-t border-amber-100">
                    {process.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
