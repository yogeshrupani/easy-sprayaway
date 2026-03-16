"use client"

import ContactFormWrapper from "./contact-form-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react"

export default function ContactPageClient() {
  return (
    <div className="flex flex-col">
      {/* Warm Light Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f59e0b' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        {/* Floating Warm Contact Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 bg-amber-100/50 backdrop-blur-sm rounded-lg p-3 border border-amber-200/50"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <Phone className="h-6 w-6 text-amber-600" />
          </motion.div>

          <motion.div
            className="absolute top-40 right-20 bg-orange-100/50 backdrop-blur-sm rounded-lg p-3 border border-orange-200/50"
            animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          >
            <Mail className="h-6 w-6 text-orange-600" />
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-1/4 bg-yellow-100/50 backdrop-blur-sm rounded-lg p-3 border border-yellow-200/50"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <MapPin className="h-6 w-6 text-yellow-600" />
          </motion.div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-medium text-sm mb-8">
                <Heart className="h-4 w-4 mr-2" />
                Ready to Help Your Family
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Get in Touch for Your
                <span className="block text-amber-600">Free Family Survey</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl leading-relaxed">
                Ready to transform your Scottish home? Contact our friendly team today for expert advice and a
                completely free, no-obligation survey of your property.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="tel:+448004332068" className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    Call Now: 0800 433 2068
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-amber-600 text-amber-700 hover:bg-amber-100 hover:text-amber-800 text-lg px-8 py-4 h-auto"
                >
                  <Link href="mailto:info@easy-sprayaway.co.uk" className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    Email Us
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Visual Element - Contact Methods */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main Contact Grid */}
                <div className="grid grid-cols-2 gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-amber-200 shadow-2xl">
                  {/* Contact Methods */}
                  {[
                    {
                      icon: Phone,
                      label: "Call Us",
                      value: "0800 433 2068",
                      color: "from-amber-400 to-orange-500",
                      delay: 0.1,
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "info@easy-sprayaway.co.uk",
                      color: "from-orange-400 to-red-400",
                      delay: 0.2,
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Scotland Wide",
                      color: "from-yellow-400 to-amber-500",
                      delay: 0.3,
                    },
                    {
                      icon: Clock,
                      label: "Hours",
                      value: "Mon-Fri 8AM-6PM",
                      color: "from-green-400 to-emerald-500",
                      delay: 0.4,
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.label}
                      className={`relative p-6 rounded-2xl bg-gradient-to-br ${contact.color} shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: contact.delay }}
                      whileHover={{ y: -5 }}
                    >
                      <contact.icon className="h-8 w-8 text-white mb-3" />
                      <p className="text-white font-semibold text-sm mb-1">{contact.label}</p>
                      <p className="text-white/90 text-xs">{contact.value}</p>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>

                {/* Central Response Time Badge */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4 shadow-xl border border-amber-200"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 mb-1">24hr</div>
                    <div className="text-xs text-gray-600">Response Time</div>
                  </div>
                </motion.div>

                {/* Floating Achievement Badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  ✓ Free Survey
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  💚 Family Trusted
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Request Your Free Family Survey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours to arrange your free, no-obligation
                property survey.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-amber-100 shadow-lg">
              <ContactFormWrapper />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                  <Phone className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us Today</h3>
                <p className="text-gray-600 mb-4">Speak directly with our friendly team</p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="tel:+448004332068">0800 433 2068</Link>
                </Button>
              </div>

              {/* Email */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  <Mail className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
                <p className="text-gray-600 mb-4">Get a detailed written response</p>
                <Button asChild variant="outline" className="border-orange-600 text-orange-700 hover:bg-orange-100">
                  <Link href="mailto:info@easy-sprayaway.co.uk">Send Email</Link>
                </Button>
              </div>

              {/* Location */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                  <MapPin className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Area</h3>
                <p className="text-gray-600 mb-4">We serve families across Scotland</p>
                <div className="text-yellow-700 font-medium">Scotland Wide Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
