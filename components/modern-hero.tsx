"use client"
import Image from "next/image"
import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ModernHero() {
  // Countdown timer state - set to 48 hours from now
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0,
  })

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    postcode: "",
    service: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    // Calculate target time (48 hours from now)
    const targetTime = new Date().getTime() + 48 * 60 * 60 * 1000

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetTime - now

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.phone || !formData.postcode || !formData.service) {
      setSubmitError("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Submit to API endpoint
      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "Hero Form Enquiry",
          email: "", // Hero form doesn't collect email, but we need it for the API
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitSuccess(true)
        setFormData({ name: "", phone: "", postcode: "", service: "" })
      } else {
        setSubmitError(result.error || "Something went wrong. Please try again or call us directly.")
      }
    } catch (error) {
      setSubmitError("Something went wrong. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-11%20at%2019.49.49-Ok7HvXVUfETuUEn3qFFdg37zbyrqtz.jpeg"
          alt="Cosy home comfort - feet in warm socks by a fireplace, showing the warmth and comfort Easy-Sprayaway's insulation services provide"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
            {/* Left Column - Content with enhanced professional styling */}
            <div className="w-full lg:w-[45%] max-w-2xl mb-8 lg:mb-0">
              {/* Professional Offer Badge with clean, modern styling */}
              <motion.div
                className="inline-flex items-center px-4 py-2.5 mb-8 text-sm font-medium bg-gradient-to-r from-primary/95 to-primary-dark/95 backdrop-blur-sm text-white rounded-lg border border-white/30 shadow-xl relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  boxShadow: [
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  ],
                }}
                transition={{
                  duration: 0.5,
                  boxShadow: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  shadow: "0 15px 35px -5px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.2 },
                }}
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-primary/20 animate-pulse"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>

                <div className="bg-white/25 rounded-md p-1.5 mr-3 flex-shrink-0 relative z-10">
                  <svg
                    className="w-3.5 h-3.5 text-white animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <span className="font-bold text-white relative z-10 tracking-wide">
                  🔥 Limited Time: 15% Off + Free Assessment
                </span>

                {/* Pulsing dot indicator */}
                <div className="ml-2 relative z-10">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-ping absolute"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              </motion.div>

              {/* Headline with creative typography */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Transform Your Home With{" "}
                <span className="relative">
                  <span className="relative z-10">Premium</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-primary-light/30 -z-10 skew-x-3"></span>
                </span>{" "}
                Insulation
              </motion.h1>

              {/* Professional subheading */}
              <motion.p
                className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Choose from SuperQuilt, natural sheep wool, hemp, or glass mineral wool insulation solutions. Join
                thousands of UK homeowners saving up to 40% on energy bills.
              </motion.p>

              {/* Clean, professional benefits layout */}
              <motion.div
                className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {[
                  { icon: "chart-line", text: "Lower Energy Bills" },
                  { icon: "shield-check", text: "Prevent Condensation" },
                  { icon: "temperature-low", text: "Warmer in Winter" },
                  { icon: "leaf", text: "Natural Solutions" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mt-1 bg-white/10 backdrop-blur-sm rounded-full p-1.5 mr-3 flex-shrink-0">
                      {item.icon === "chart-line" && (
                        <svg
                          className="w-4 h-4 text-primary-light"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      )}
                      {item.icon === "shield-check" && (
                        <svg
                          className="w-4 h-4 text-primary-light"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      )}
                      {item.icon === "temperature-low" && (
                        <svg
                          className="w-4 h-4 text-primary-light"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      )}
                      {item.icon === "leaf" && (
                        <svg
                          className="w-4 h-4 text-primary-light"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.text}</p>
                      <p className="text-xs text-gray-300">
                        {i === 0 && "Save up to 40% annually"}
                        {i === 1 && "Eliminate damp & mould"}
                        {i === 2 && "Cooler in summer"}
                        {i === 3 && "Eco-friendly options"}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button - Desktop Only with creative design */}
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <button
                  className="group relative overflow-hidden bg-accentOrange hover:bg-accentOrange-dark text-accentOrange-foreground font-medium py-3.5 px-8 rounded-lg transition-all duration-300 shadow-lg"
                  onClick={() => document.getElementById("lead-form-fields")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Request Your Free Survey
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accentOrange-light to-accentOrange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </button>
              </motion.div>
            </div>

            {/* Right Column - Lead Form with professional styling */}
            <div className="w-full lg:w-[50%] lg:ml-auto">
              <motion.div
                className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gradient-to-r from-primary to-primary-dark p-5">
                  <h3 className="text-xl font-bold text-center text-white">Get Your Free Home Survey</h3>
                  <p className="text-sm text-center text-white/80 mt-1">
                    Professional assessment • No obligation • Quick response
                  </p>
                </div>

                <div className="p-6" id="lead-form-fields">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Smith"
                          className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="07123 456789"
                          className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
                          Postcode
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                              className="h-5 w-5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleInputChange}
                            placeholder="AB12 3CD"
                            className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Service
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                          style={{
                            backgroundImage:
                              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                            backgroundPosition: "right 0.5rem center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "1.5em 1.5em",
                            paddingRight: "2.5rem",
                          }}
                        >
                          <option value="">Select...</option>
                          <option value="superquilt">SuperQuilt</option>
                          <option value="sheep-wool">Sheep Wool</option>
                          <option value="hemp">Hemp Insulation</option>
                          <option value="glass-wool">Glass Mineral Wool</option>
                          <option value="acoustic">Acoustic Insulation</option>
                          <option value="roof">Roof Cleaning</option>
                          <option value="wall">Wall Cleaning</option>
                        </select>
                      </div>
                    </div>

                    {submitError && (
                      <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-600">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting || submitSuccess}
                      className="w-full bg-gradient-to-r from-accentOrange to-accentOrange-dark hover:from-accentOrange-dark hover:to-accentOrange-dark text-accentOrange-foreground py-3.5 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg group relative overflow-hidden"
                    >
                      <span
                        className={`flex items-center justify-center transition-opacity duration-200 ${isSubmitting ? "opacity-0" : "opacity-100"}`}
                      >
                        {submitSuccess ? "Survey Booked - Thank You!" : "Book Your Free Survey Now"}
                        {!submitSuccess && (
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        )}
                      </span>
                      {isSubmitting && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </div>
                      )}
                    </button>
                  </form>

                  {submitSuccess && (
                    <div className="mt-4 rounded-lg bg-green-50 border border-green-100 p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="rounded-full bg-green-100 p-2">
                          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <h4 className="text-green-800 font-medium">Thank you for your enquiry!</h4>
                      <p className="text-green-700 text-sm mt-1">
                        We'll contact you shortly to arrange your free survey. A confirmation has been sent to our team.
                      </p>
                    </div>
                  )}

                  {/* Modern, sleek urgency element with clean design */}
                  <div className="mt-5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/10 opacity-50"></div>
                    <div className="relative flex items-center justify-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center">
                        <div className="bg-primary/90 rounded-md p-1.5 mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-600">
                            {timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0
                              ? "Limited Time Offer Available"
                              : "Contact Us Today!"}
                          </p>
                          <p className="text-sm font-semibold text-primary-dark">
                            {timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0
                              ? "15% Off + Free Energy Assessment"
                              : "Standard rates apply"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data protection indicators */}
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <div className="flex justify-center space-x-6">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-gray-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        <span className="text-xs text-gray-600">Secure SSL</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-gray-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <span className="text-xs text-gray-600">GDPR Compliant</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-gray-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-xs text-gray-600">Data Protected</span>
                      </div>
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-2">
                      Your data is secure and protected by our{" "}
                      <a href="/privacy-policy" className="underline hover:text-primary">
                        privacy policy
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile CTA - Only visible on mobile */}
            <div className="block md:hidden w-full mt-6">
              <button
                className="w-full bg-gradient-to-r from-accentOrange to-accentOrange-dark text-accentOrange-foreground font-medium py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById("lead-form-fields")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>Book Your Free Survey Now</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section - Hidden on initial view, shown when CTA is clicked */}
      <div id="lead-form" className="hidden">
        {/* Form content will be displayed when scrolled to */}
      </div>

      <style jsx>{`
      @keyframes shimmer {
        0% {
          transform: translateX(-100%) skewX(-12deg);
        }
        100% {
          transform: translateX(200%) skewX(-12deg);
        }
      }
      
      .animate-shimmer {
        animation: shimmer 3s ease-in-out infinite;
      }
      
      @keyframes gradient-shift {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `}</style>
    </section>
  )
}
