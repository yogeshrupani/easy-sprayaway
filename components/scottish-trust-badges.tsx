"use client"

import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

export function ScottishTrustBadges() {
  return (
    <ScrollReveal animation="fade-in" className="py-8 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl font-semibold text-gray-700 mb-6">Trusted by Homeowners Across Scotland</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
          <div className="relative h-16 w-full max-w-[140px]">
            <Image src="/badges/trustpilot.png" alt="Trustpilot" fill className="object-contain" />
          </div>

          <div className="relative h-16 w-full max-w-[140px]">
            <Image src="/badges/which-trusted-trader.png" alt="Which? Trusted Trader" fill className="object-contain" />
          </div>

          <div className="relative h-16 w-full max-w-[140px]">
            <Image src="/badges/google-reviews.png" alt="Google Reviews" fill className="object-contain" />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Easy-Sprayaway is proud to be a Scottish family-run business with over
            <span className="font-semibold"> 7 years of experience</span> serving homeowners across Scotland. We're
            fully certified and committed to providing
            <span className="font-semibold"> exceptional service</span> to our local communities.
          </p>
        </div>
      </div>
    </ScrollReveal>
  )
}
