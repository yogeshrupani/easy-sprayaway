"use client"

import { Star, ThumbsUp, Award, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import { LocalBusinessSchema } from "@/components/schema"
import FAQSection from "@/components/faq-section"
import EnhancedErrorBoundary from "@/components/enhanced-error-boundary"
import { SectionErrorFallback } from "@/components/error-fallbacks/section-error-fallback"

// Import modern components
import ModernHero from "@/components/modern-hero"
import { faqs } from "@/data/faqs"
import { LazyFinanceCalculator } from "@/components/lazy-finance-calculator"
import TrustpilotReviewsSection from "@/components/trustpilot-reviews-section"
import RealBeforeAfterSlider from "@/components/real-before-after-slider"
import { realBeforeAfterData } from "@/data/real-before-after-data"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-white">
      <EnhancedErrorBoundary componentName="Schema" errorType="minor">
        <LocalBusinessSchema />
      </EnhancedErrorBoundary>

      {/* Hero Section */}
      <EnhancedErrorBoundary
        componentName="Hero Section"
        errorType="critical"
        fallback={
          <div className="w-full py-20 bg-blue-50 text-center">
            <div className="container px-4 mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Welcome to Easy-Sprayaway</h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Specialists in SuperQuilt loft insulation, roof cleaning, and property maintenance services.
              </p>
              <Button asChild size="lg">
                <a href="/contact">Get Your Free Survey</a>
              </Button>
            </div>
          </div>
        }
      >
        <ModernHero />
      </EnhancedErrorBoundary>

      {/* Services Section */}
      <EnhancedErrorBoundary
        componentName="Services Section"
        fallback={
          <SectionErrorFallback
            title="Services Unavailable"
            message="We're having trouble loading our services information. Please try again later."
            imageType="broken"
          />
        }
      >
        <section className="w-full py-20 relative overflow-hidden">
          {/* Background images with overlay */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 opacity-95 z-10"></div>
            <div className="absolute inset-0 grid grid-cols-3 h-full w-full">
              <div className="relative overflow-hidden">
                <img
                  src="/images/superquilt-insulation.png"
                  alt="SuperQuilt insulation background"
                  className="absolute inset-0 w-full h-full object-cover opacity-15"
                  loading="lazy"
                />
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/roof-cleaning.png"
                  alt="Professional roof cleaning background"
                  className="absolute inset-0 w-full h-full object-cover opacity-15"
                  loading="lazy"
                />
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/driveway-cleaning.png"
                  alt="Driveway cleaning service background"
                  className="absolute inset-0 w-full h-full object-cover opacity-15"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Content container with higher z-index */}
          <div className="container px-4 mx-auto relative z-20 max-w-7xl">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                Professional Home Improvement Solutions
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We offer a range of <strong>specialised</strong> services to improve your home's efficiency, appearance,
                and value across Scotland and the UK.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center max-w-6xl mx-auto">
              {/* SuperQuilt Loft Insulation Card */}
              <div className="bg-white rounded-xl shadow-premium overflow-hidden hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-1 group flex flex-col w-full max-w-sm">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/services/loft-insulation-main.jpeg"
                    alt="SuperQuilt loft insulation installation by Easy-Sprayaway professionals"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 rounded-full p-2 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                        aria-hidden="true"
                      >
                        <path d="M2 22v-5l5-5 5 5-5 5z"></path>
                        <path d="M9.5 14.5 16 8"></path>
                        <path d="M17 2v5c0 1.7-1.3 3-3 3h-5"></path>
                        <rect x="10" y="14" width="4" height="4" rx="1"></rect>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 relative flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors duration-300">
                    Loft Insulation Scotland
                  </h3>
                  <p className="text-slate-600 mb-4">
                    We offer a comprehensive range of loft insulation solutions including SuperQuilt, sheep wool, and
                    fibreglass to significantly reduce heat loss and energy bills in Scottish homes.
                  </p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1 flex-shrink-0">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Reduces heat loss by up to 95%</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1 flex-shrink-0">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Improves EPC ratings</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1 flex-shrink-0">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Controls condensation</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary/5 transition-colors duration-300 mt-auto bg-transparent"
                  >
                    <a href="/services#superquilt" className="flex items-center justify-center">
                      Learn More{" "}
                      <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Roof Cleaning Card */}
              <div className="bg-white rounded-xl shadow-premium overflow-hidden hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-1 group flex flex-col w-full max-w-sm">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/services/roof-cleaning-main.jpeg"
                    alt="Professional roof cleaning and coating services in Scotland"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 rounded-full p-2 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent"
                        aria-hidden="true"
                      >
                        <path d="M20 22h-2"></path>
                        <path d="M20 15v2h-2"></path>
                        <path d="M4 22h16"></path>
                        <path d="M2 15h20"></path>
                        <path d="M12 9V2l-7 8h14l-7-8z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 relative flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-accent transition-colors duration-300">
                    Roof Cleaning & Coatings Scotland
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Professional roof cleaning and protective coatings to extend the life of your Scottish home's roof.
                  </p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    <li className="flex items-start">
                      <div className="rounded-full bg-accent/10 p-1 mr-3 mt-1 flex-shrink-0">
                        <svg
                          className="h-3 w-3 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Removes moss, algae, and lichen</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-accent/10 p-1 mr-3 mt-1 flex-shrink-0">
                        <svg
                          className="h-3 w-3 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Prevents water damage</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-accent/10 p-1 mr-3 mt-1 flex-shrink-0">
                        <svg
                          className="h-3 w-3 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Extends roof lifespan</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-accent/5 transition-colors duration-300 mt-auto bg-transparent"
                  >
                    <a href="/services#roof-cleaning" className="flex items-center justify-center">
                      Learn More{" "}
                      <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Wall & Driveway Cleaning Card */}
              <div className="bg-white rounded-xl shadow-premium overflow-hidden hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-1 group flex flex-col w-full max-w-sm">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/services/driveway-cleaning-main.jpeg"
                    alt="Professional wall and driveway cleaning services Scotland"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 rounded-full p-2 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-amber-600"
                        aria-hidden="true"
                      >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        <path d="M10 9a2 2 0 0 1 4 0"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 relative flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-amber-600 transition-colors duration-300">
                    Wall & Driveway Cleaning Scotland
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Restore the appearance of your Scottish property with our professional cleaning services.
                  </p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    <li className="flex items-start">
                      <div className="rounded-full bg-amber-100 p-1 mr-3 mt-1 flex-shrink-0">
                        <svg
                          className="h-3 w-3 text-amber-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Removes dirt, grime, and stains</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-amber-100 p-1 mr-3 mt-1 flex-shrink-0">
                        <svg
                          className="h-3 w-3 text-amber-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Prevents slip hazards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-amber-100 p-1 mr-3 mt-1 flex-shrink-0">
                        <svg
                          className="h-3 w-3 text-amber-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>
                        Enhances <strong>kerb</strong> appeal
                      </span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-amber-50 transition-colors duration-300 mt-auto bg-transparent"
                  >
                    <a href="/services#wall-driveway-cleaning" className="flex items-center justify-center">
                      Learn More{" "}
                      <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </EnhancedErrorBoundary>

      {/* Benefits Section */}
      <EnhancedErrorBoundary
        componentName="Benefits Section"
        fallback={
          <SectionErrorFallback
            title="Benefits Information Unavailable"
            message="We're having trouble loading our benefits information. Please try again later."
            imageType="broken"
          />
        }
      >
        <section className="w-full py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Benefits for Scottish Homeowners</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover how our services can improve your home's efficiency, comfort, and value across Scotland.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Energy Efficiency</h3>
                <p className="text-slate-600 mb-6">
                  Our SuperQuilt insulation can reduce heat loss by up to 95%, helping Scottish homeowners save on
                  energy bills and reduce their carbon footprint.
                </p>
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 mb-6">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong>Important:</strong> Savings of up to 40% on energy bills are possible, depending on how
                    efficiently you run your home – including heating habits, insulation levels, and overall energy
                    <strong>utilisation</strong>.
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Lower heating costs by up to 25%</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Improved EPC ratings for your property</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Reduced carbon emissions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Property Protection</h3>
                <p className="text-slate-600 mb-6">
                  Our cleaning and maintenance services protect your Scottish home from damage caused by harsh weather
                  conditions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Prevent water damage and leaks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Extend the lifespan of your roof and exterior surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Reduce maintenance costs over time</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Comfort & Health</h3>
                <p className="text-slate-600 mb-6">
                  Our services improve the comfort and health of your Scottish home environment.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Reduce condensation and mould growth</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Maintain more consistent indoor temperatures</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Create a healthier living environment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Property Value</h3>
                <p className="text-slate-600 mb-6">
                  Our services can increase the value and appeal of your Scottish property.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>
                      Enhance <strong>kerb</strong> appeal with clean exteriors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Improve energy efficiency ratings for better resale value</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-green-100 p-1 mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Demonstrate proper maintenance to potential buyers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </EnhancedErrorBoundary>

      {/* Finance Calculator Section */}
      <EnhancedErrorBoundary
        componentName="Finance Calculator Section"
        fallback={
          <SectionErrorFallback
            title="Finance Calculator Unavailable"
            message="We're having trouble loading the finance calculator. Please contact us directly for financing options."
            imageType="maintenance"
          />
        }
      >
        <section className="w-full py-24 bg-gradient-to-b from-slate-50/50 to-white">
          <div className="container px-4 md:px-8 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
                Financing Options
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                Spread the Cost of Your Home Improvements
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Make your home improvements more affordable with our flexible finance options.{" "}
                <strong>Calculate</strong> your monthly payments and apply online.
              </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 md:p-12 text-white text-center relative overflow-hidden">
                  {/* Clean background accent */}
                  

                  {/* Minimal decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full"></div>

                  <div className="relative z-10 max-w-2xl mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Finance Calculator</h3>
                    <p className="text-slate-200 text-lg max-w-xl mx-auto leading-relaxed">
                      See how affordable your project can be with our flexible finance options
                    </p>
                  </div>
                </div>

                <LazyFinanceCalculator />

                <div className="bg-gradient-to-r from-slate-50/50 to-white p-8 md:p-12 border-t border-slate-200/30">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="group">
                      <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md group-hover:shadow-lg border border-slate-100/50 group-hover:scale-105 transition-all duration-300">
                        <svg
                          className="h-8 w-8 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2 text-lg">Quick Approval</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Get approved in minutes with our streamlined digital process
                      </p>
                    </div>
                    <div className="group">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md group-hover:shadow-lg border border-slate-100/50 group-hover:scale-105 transition-all duration-300">
                        <svg
                          className="h-8 w-8 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2 text-lg">Flexible Terms</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Choose repayment terms from 12 to 60 months that suit your budget
                      </p>
                    </div>
                    <div className="group">
                      <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md group-hover:shadow-lg border border-slate-100/50 group-hover:scale-105 transition-all duration-300">
                        <svg
                          className="h-8 w-8 text-purple-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2 text-lg">Secure & Safe</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Your information is protected with bank-level encryption security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-slate-500">
                Finance subject to status. Terms and conditions apply. Easy-Sprayaway is an IAR not credit broker or
                lender.
              </p>
            </div>
          </div>
        </section>
      </EnhancedErrorBoundary>

      {/* Before & After Section */}
      <EnhancedErrorBoundary
        componentName="Before & After Section"
        fallback={
          <SectionErrorFallback
            title="Transformation Examples Unavailable"
            message="We're having trouble loading our before and after examples. Please try again later."
            imageType="broken"
          />
        }
      >
        <section className="w-full py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue--700 font-semibold text-sm mb-6 shadow-sm">
                <svg
                  className="h-5 w-5 mr-2 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Real Transformations That Speak for Themselves
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 leading-tight">
                Dramatic{" "}
                <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Before & After
                </span>{" "}
                Results
              </h2>

              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Witness the remarkable transformations we've achieved for homeowners across Scotland and the UK. Each
                project showcases our commitment to excellence and attention to detail.
              </p>

              <RealBeforeAfterSlider items={realBeforeAfterData} />
            </div>{" "}
            {/* This was the missing closing div */}
          </div>
        </section>
      </EnhancedErrorBoundary>

      {/* Customer Reviews Section - Now using static reviews */}
      <EnhancedErrorBoundary
        componentName="Customer Reviews Section"
        fallback={
          <SectionErrorFallback
            title="Customer Reviews Unavailable"
            message="We're having trouble loading our customer reviews. Please try again later."
            imageType="unavailable"
          />
        }
      >
        <TrustpilotReviewsSection />
      </EnhancedErrorBoundary>

      {/* Trust Badges Section */}
      <EnhancedErrorBoundary componentName="Trust Badges Section" errorType="minor">
        <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-slate-700">Trusted & Certified</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="bg-yellow-100 p-4 rounded-full mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <p className="font-medium text-slate-700">Trustpilot Rated</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <p className="font-medium text-slate-700">Fully Insured</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                  <ThumbsUp className="h-8 w-8 text-blue-600" />
                </div>
                <p className="font-medium text-slate-700">Family Business</p>
              </div>
            </div>
          </div>
        </section>
      </EnhancedErrorBoundary>

      {/* FAQ Section */}
      <EnhancedErrorBoundary
        componentName="FAQ Section"
        fallback={
          <SectionErrorFallback
            title="FAQ Information Unavailable"
            message="We're having trouble loading our frequently asked questions. Please contact us directly for any questions."
            imageType="maintenance"
          />
        }
      >
        <section className="w-full py-20 bg-white">
          <div className="container px-4 mx-auto">
            <FAQSection faqs={faqs.slice(0, 8)} />

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                <a href="/faqs" className="flex items-center">
                  View All FAQs <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </EnhancedErrorBoundary>
    </main>
  )
}
