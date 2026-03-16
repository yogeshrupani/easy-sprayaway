"use client"

import { useState, useEffect, useRef } from "react"
import { Loader2, Calculator, TrendingUp, DollarSign, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LazyFinanceCalculator() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Prefetch the calculator after a short delay
          setTimeout(() => {
            const link = document.createElement("link")
            link.rel = "prefetch"
            link.href =
              "https://finance-calculator.kanda.co.uk/?cid=999580d9-90ef-41c5-88c5-0950081c4968&iar=SOMETHING%20EASY%20LIMITED%20trading%20as%20EASY%20-%20SPRAYAWAY&excludeAprs=0"
            document.head.appendChild(link)
          }, 500)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoadCalculator = () => {
    setShowCalculator(true)
    setIsLoaded(false)
  }

  const handleIframeLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div ref={sectionRef} className="p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-b from-slate-50/30 to-white/50">
      {!showCalculator ? (
        <div className="relative w-full bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-slate-200/50 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Animated background pattern */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-green-100/20 to-blue-100/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto px-4 sm:px-6">
            {/* Interactive Calculator Icon */}
            <div className="relative mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl sm:rounded-3xl shadow-xl flex items-center justify-center transform hover:scale-105 transition-all duration-300">
                <Calculator className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
              </div>

              {/* Floating elements - hide on very small screens */}
              <div className="hidden sm:block absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <div className="hidden sm:block absolute -bottom-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <div className="hidden sm:block absolute top-1/2 -right-6 sm:-right-8 w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                <Clock className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-3 sm:mb-4 leading-tight">
              Ready to Calculate Your Finance Options?
            </h3>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              Our interactive calculator will help you find the perfect payment plan for your home improvement project.
              Get instant quotes with flexible terms from 12 to 60 months.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-200/50 shadow-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700">Instant Results</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-200/50 shadow-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700">No Obligation</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-200/50 shadow-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700">Secure & Safe</p>
              </div>
            </div>

            <Button
              onClick={handleLoadCalculator}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-base sm:text-lg w-full sm:w-auto"
            >
              <Calculator className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
              View Finance Options
            </Button>

            <p className="text-xs text-slate-500 mt-3 sm:mt-4 px-2">
              Calculator loads on-demand to ensure fast page performance
            </p>
          </div>
        </div>
      ) : (
        <div className="relative w-full bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-slate-200/50 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          {/* Loading overlay */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center z-10">
              <div className="text-center px-4">
                <div className="relative mb-4">
                  <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 animate-spin mx-auto" />
                  <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-pulse"></div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">Loading Finance Calculator</h4>
                <p className="text-sm text-slate-600 max-w-xs mx-auto">
                  Please wait while we prepare your personalized calculator...
                </p>

                {/* Progress indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}

          {/* Iframe */}
          <iframe
            src="https://finance-calculator.kanda.co.uk/?cid=999580d9-90ef-41c5-88c5-0950081c4968&iar=SOMETHING%20EASY%20LIMITED%20trading%20as%20EASY%20-%20SPRAYAWAY&excludeAprs=0"
            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] border-0 rounded-xl sm:rounded-2xl"
            title="Finance Calculator"
            loading="lazy"
            allow="encrypted-media"
            onLoad={handleIframeLoad}
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
        </div>
      )}
    </div>
  )
}
