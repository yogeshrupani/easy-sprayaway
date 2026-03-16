"use client"

import Link from "next/link"
import { ArrowRight, Phone, Calendar, MapPin, Star, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScottishCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white/10 backdrop-blur-sm">
          <div className="grid overflow-hidden rounded-2xl shadow-2xl md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-8 md:p-10">
              <div className="mb-6 flex items-center">
                <div className="mr-4 rounded-full bg-white/20 p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
              </div>

              <p className="mb-8 text-lg text-blue-100">
                Contact us today for a free, no-obligation survey and quote. Our Scottish team will help you choose the
                perfect solution for your home.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-blue-700/50 p-1">
                    <Star className="h-4 w-4 text-blue-200" />
                  </div>
                  <p className="text-blue-100">Trusted by homeowners across Scotland</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-blue-700/50 p-1">
                    <Star className="h-4 w-4 text-blue-200" />
                  </div>
                  <p className="text-blue-100">Scottish-based team with local knowledge</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-blue-700/50 p-1">
                    <Star className="h-4 w-4 text-blue-200" />
                  </div>
                  <p className="text-blue-100">Solutions designed for Scottish weather</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-blue-700/50 p-1">
                    <Shield className="h-4 w-4 text-blue-200" />
                  </div>
                  <p className="text-blue-100">10-year product warranty & 1-year installation guarantee</p>
                </div>
              </div>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" className="group rounded-full bg-white text-blue-900 hover:bg-blue-50">
                  <Link href="/contact" className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" /> Get Your Free Survey
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/40 text-white hover:bg-white/20"
                >
                  <Link href="/services" className="group flex items-center">
                    Explore Our Services{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative bg-blue-800 p-8 md:p-10">
              <div className="relative z-10 flex h-full flex-col justify-end">
                <div className="mb-4 flex items-center">
                  <div className="mr-3 rounded-full bg-white/20 p-2">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Serving All of Scotland</h3>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
                    <p className="font-medium text-white">Glasgow</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
                    <p className="font-medium text-white">Edinburgh</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
                    <p className="font-medium text-white">Aberdeen</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
                    <p className="font-medium text-white">Inverness</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
                    <p className="font-medium text-white">Perth</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm">
                    <p className="font-medium text-white">Dundee</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-blue-200" />
                    <span className="font-medium text-white">Available 7 Days a Week</span>
                  </div>
                  <Link
                    href="tel:+448004332068"
                    className="rounded-full bg-white/20 px-4 py-2 font-medium text-white hover:bg-white/30"
                  >
                    0800 433 2068
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
