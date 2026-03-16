"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, CheckCircle, Quote, Shield, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trustpilotSummary, getDisplayReviews, getReviewStats } from "@/data/trustpilot-reviews"

export default function TrustpilotReviewsSection() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const displayReviews = getDisplayReviews(6) // Reduced from 8 to 6 featured reviews to encourage Trustpilot visit
  const stats = getReviewStats()

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev === displayReviews.length - 1 ? 0 : prev + 1))
    }, 5000) // Change review every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, displayReviews.length])

  const nextReview = () => {
    setIsAutoPlaying(false)
    setCurrentReviewIndex((prev) => (prev === displayReviews.length - 1 ? 0 : prev + 1))
  }

  const prevReview = () => {
    setIsAutoPlaying(false)
    setCurrentReviewIndex((prev) => (prev === 0 ? displayReviews.length - 1 : prev - 1))
  }

  const goToReview = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentReviewIndex(index)
  }

  const currentReview = displayReviews[currentReviewIndex]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <Image
                src="/images/trustpilot-logo.png"
                alt="Trustpilot"
                width={200}
                height={48}
                className="h-12 w-auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center mb-4">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-8 w-8 transition-all duration-300 ${
                      i < Math.floor(trustpilotSummary.rating)
                        ? "fill-[#00b67a] text-[#00b67a] drop-shadow-sm"
                        : i === Math.floor(trustpilotSummary.rating) && trustpilotSummary.rating % 1 >= 0.5
                          ? "fill-[#00b67a] text-[#00b67a] opacity-50"
                          : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-slate-800">{trustpilotSummary.rating}</div>
                <div className="text-sm text-slate-500">out of 5</div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center bg-[#00b67a] text-white px-4 py-2 rounded-full font-semibold text-lg mb-3">
                {trustpilotSummary.ratingText}
              </div>
              <p className="text-lg text-slate-600">
                Based on{" "}
                <span className="font-bold text-slate-800">{trustpilotSummary.reviewCount} customer reviews</span>
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-slate-600">
              Real reviews from real customers who've experienced our professional home improvement services
            </p>
          </div>
        </div>

        {/* Review Display */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
            {/* Decorative Quote */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="h-16 w-16 text-[#00b67a]" />
            </div>

            <div className="p-8 md:p-12 relative">
              {/* Review Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < currentReview.rating ? "fill-[#00b67a] text-[#00b67a]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
                    <CheckCircle className="h-4 w-4 text-[#00b67a] mr-2" />
                    <span className="text-sm text-[#00b67a] font-semibold">Verified Purchase</span>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevReview}
                    className="h-12 w-12 rounded-full border-2 border-slate-300 hover:border-[#00b67a] hover:text-[#00b67a] transition-all duration-200 bg-transparent"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextReview}
                    className="h-12 w-12 rounded-full border-2 border-slate-300 hover:border-[#00b67a] hover:text-[#00b67a] transition-all duration-200 bg-transparent"
                    aria-label="Next review"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 leading-tight">"{currentReview.title}"</h3>
                <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-medium">{currentReview.content}</p>
              </div>

              {/* Review Footer */}
              <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-[#00b67a] to-[#009f6b] text-white rounded-full h-14 w-14 flex items-center justify-center font-bold text-lg mr-4">
                    {currentReview.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-lg">{currentReview.author}</p>
                    <p className="text-slate-500 text-sm">{currentReview.date}</p>
                  </div>
                </div>

                {/* Review Counter */}
                <div className="text-right">
                  <p className="text-sm text-slate-500 mb-2">
                    Review {currentReviewIndex + 1} of {displayReviews.length}
                  </p>
                  <div className="flex space-x-1">
                    {displayReviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToReview(index)}
                        className={`h-2 w-2 rounded-full transition-all duration-200 ${
                          index === currentReviewIndex ? "bg-[#00b67a] w-6" : "bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to review ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <a
            href={trustpilotSummary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-[#00b67a] text-white font-bold rounded-full hover:bg-[#009f6b] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Star className="h-5 w-5 mr-3 fill-current" />
            <span className="mr-3">See All {trustpilotSummary.reviewCount} Reviews on Trustpilot</span>
            <ExternalLink className="h-5 w-5" />
          </a>

          <Link
            href="/contact"
            className="group inline-flex items-center px-8 py-4 border-2 border-[#00b67a] text-[#00b67a] font-bold rounded-full hover:bg-[#00b67a] hover:text-white transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span className="mr-3">Get Your Free Survey</span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white rounded-2xl shadow-lg border border-slate-200 px-8 py-6">
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-[#00b67a] mr-3" />
              <span className="font-semibold text-slate-700">All reviews from verified customers</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-blue-600 mr-3" />
              <span className="font-semibold text-slate-700">Real customer testimonials</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
            <div className="flex items-center">
              <Star className="h-6 w-6 text-yellow-500 mr-3" />
              <span className="font-semibold text-slate-700">Family-run business since 2016</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
