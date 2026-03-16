"use client"

import TrustpilotReviewsSection from "@/components/trustpilot-reviews-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Heart, Star } from "lucide-react"
import { customerReviews, trustpilotSummary } from "@/data/trustpilot-reviews"

export default function ReviewsPageClient() {
  const trustpilotReviews = customerReviews.slice(0, 12) // Show first 12 Trustpilot reviews

  return (
    <div className="flex flex-col">
      {/* Warm Light Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat bg-[length:60px_60px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><g fill="#f59e0b" fillOpacity="0.1"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>')}")`,
            }}
          ></div>
        </div>

        {/* Floating Warm Review Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 flex items-center space-x-1 bg-amber-100/50 backdrop-blur-sm rounded-lg p-2 border border-amber-200/50 animate-bounce"
            style={{ animationDuration: "4s" }}
          >
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <div
            className="absolute top-40 right-20 bg-orange-100/50 backdrop-blur-sm rounded-lg p-3 border border-orange-200/50 animate-pulse"
            style={{ animationDuration: "5s" }}
          >
            <div className="text-amber-800 text-sm font-medium">"Excellent service!"</div>
          </div>

          <div
            className="absolute bottom-32 left-1/4 bg-yellow-100/50 backdrop-blur-sm rounded-lg p-3 border border-yellow-200/50 animate-bounce"
            style={{ animationDuration: "3.5s" }}
          >
            <div className="text-amber-800 text-sm font-medium">"Highly recommended"</div>
          </div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-medium text-sm mb-8">
                <Heart className="h-4 w-4 mr-2" />
                {trustpilotSummary.rating}/5 Average Rating from Families
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                What Scottish Families Say About
                <span className="block text-amber-600">Our Trusted Service</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl leading-relaxed">
                Read genuine testimonials from satisfied homeowners who've experienced the Easy-Sprayaway difference.
                Your family's trust is our priority.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-4 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center">
                    Request Your Free Survey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <div className="space-y-4">
                  {customerReviews.slice(0, 3).map((review, index) => (
                    <div
                      key={review.id}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="flex space-x-1 mr-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <div className="text-gray-900 font-semibold text-sm">{review.author}</div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">"{review.content.substring(0, 80)}..."</p>
                    </div>
                  ))}
                </div>

                <div
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-xl animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <div className="text-lg font-bold">{trustpilotSummary.rating}★</div>
                  <div className="text-xs">Trustpilot</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          {/* Customer Reviews Section */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Our Customer Reviews</h2>
              <p className="mt-2 text-gray-600">
                We're proud of our{" "}
                <span className="font-medium text-[#00b67a]">{trustpilotSummary.rating} out of 5</span> rating based on{" "}
                {trustpilotSummary.reviewCount} verified reviews.
              </p>
            </div>

            <TrustpilotReviewsSection />
          </div>

          <div className="mb-16">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">More Customer Reviews</h2>
              <p className="mt-2 text-gray-600">All reviews verified by Trustpilot</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {trustpilotReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{review.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{review.content}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-medium">{review.author}</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href={trustpilotSummary.url} target="_blank" rel="noopener noreferrer">
                  See All {trustpilotSummary.reviewCount} Reviews on Trustpilot
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
