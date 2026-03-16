"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ChevronDown, Menu, Shield, Home, Zap, Leaf, Volume2, Building, Car } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const insulationServices = [
    {
      name: "SuperQuilt",
      href: "/services#superquilt",
      icon: Shield,
      popular: true,
    },
    {
      name: "Sheep Wool",
      href: "/services#sheep-wool",
      icon: Leaf,
    },
    {
      name: "Fibreglass",
      href: "/services#fiberglass",
      icon: Home,
    },
    {
      name: "Acoustic",
      href: "/services#acoustic",
      icon: Volume2,
    },
  ]

  const cleaningServices = [
    {
      name: "Roof Cleaning",
      href: "/services#roof-cleaning",
      icon: Building,
    },
    {
      name: "Wall & Driveway",
      href: "/services#wall-driveway",
      icon: Car,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      {/* Top bar with prominent phone number */}
      <div className="bg-primary text-white py-2">
        <div className="container flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">Call us now:</span>
            <Link href="tel:+448004332068" className="text-lg font-bold hover:text-primary-light transition-colors">
              0800 433 2068
            </Link>
            <span className="text-sm opacity-90 ml-2">• Free consultation available</span>
          </div>
        </div>
      </div>

      <div className="container flex h-16 sm:h-18 lg:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="sr-only">Easy-Sprayaway</span>
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Logo Icon */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/images/easy-sprayaway-logo-icon.png"
                  alt="Easy-Sprayaway Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text Logo */}
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-extrabold tracking-tight text-primary">EASY</span>
                <div className="flex items-center -mt-1">
                  <span className="text-lg font-bold tracking-wider text-gray-700">SPRAY</span>
                  <span className="text-lg font-bold tracking-wider relative px-2 ml-1">
                    <span className="relative z-10 text-white">AWAY</span>
                    <span className="absolute inset-0 bg-primary -skew-x-12 rounded-sm"></span>
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="relative group py-2 transition-colors hover:text-primary">
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Horizontal Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center space-x-1 py-2 transition-colors hover:text-primary group"
            >
              <span>Services</span>
              <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[800px] bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden z-50"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold text-base">Our Professional Services</h3>
                        <p className="text-primary-foreground/80 text-sm">Expert solutions for your property needs</p>
                      </div>
                      <Link
                        href="/services"
                        className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                      >
                        View All →
                      </Link>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Horizontal Layout */}
                    <div className="grid grid-cols-2 gap-8">
                      {/* Insulation Services Column */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                            Insulation Solutions
                          </h4>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {insulationServices.map((service) => {
                            const IconComponent = service.icon
                            return (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="group flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 text-center"
                              >
                                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mb-2 group-hover:bg-primary/20 transition-colors">
                                  <IconComponent className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex flex-col items-center">
                                  <div className="flex items-center">
                                    <span className="font-medium text-gray-900 group-hover:text-primary transition-colors text-sm">
                                      {service.name}
                                    </span>
                                    {service.popular && (
                                      <span className="ml-1 px-1.5 py-0.5 bg-primary text-white text-xs font-medium rounded-full">
                                        ★
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>

                      {/* Cleaning Services Column */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                            Property Maintenance
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {cleaningServices.map((service) => {
                            const IconComponent = service.icon
                            return (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="group flex items-center p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                              >
                                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg mr-3 group-hover:bg-accent/20 transition-colors">
                                  <IconComponent className="h-5 w-5 text-accent" />
                                </div>
                                <div className="flex-1">
                                  <span className="font-medium text-gray-900 group-hover:text-accent transition-colors text-sm">
                                    {service.name}
                                  </span>
                                </div>
                              </Link>
                            )
                          })}
                        </div>

                        {/* CTA in right column */}
                        <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
                          <div className="text-center">
                            <h5 className="font-semibold text-gray-900 text-sm">Need Expert Advice?</h5>
                            <p className="text-xs text-gray-600 mb-3">Get a free consultation and quote</p>
                            <Link
                              href="/contact"
                              className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                            >
                              <Zap className="h-4 w-4 mr-1" />
                              Free Survey
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="relative group py-2 transition-colors hover:text-primary">
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/gallery" className="relative group py-2 transition-colors hover:text-primary">
            <span>Gallery</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/reviews" className="relative group py-2 transition-colors hover:text-primary">
            <span>Reviews</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="relative group py-2 transition-colors hover:text-primary">
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/contact">
              <Zap className="h-4 w-4 mr-2" />
              Free Survey
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-6">
              <Link
                href="/"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-3">
                <Link
                  href="/services"
                  className="text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <div className="pl-4 space-y-3">
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Insulation</div>
                  {insulationServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-600 hover:text-primary transition-colors pl-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-4">Cleaning</div>
                  {cleaningServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-600 hover:text-primary transition-colors pl-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/reviews"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-6 border-t">
                <div className="flex items-center space-x-3 text-sm text-gray-600 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-primary">0800 433 2068</div>
                    <div className="text-xs text-gray-500">Available 9-5, 7 days a week</div>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Zap className="h-4 w-4 mr-2" />
                    Get Free Survey
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
