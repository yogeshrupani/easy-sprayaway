"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import EnquiryForm from "@/components/enquiry-form"

export default function HeroSection() {
  return (
    <section className="section-bg-light w-full py-20 md:py-28 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              UK's Trusted Home Services Provider
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Transform Your Home with <span className="text-primary">Expert Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
              Professional insulation, roof cleaning, and exterior maintenance services to improve your home's
              efficiency and appearance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-premium rounded-full">
                <a href="/contact">
                  Get Your Free Survey <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="/services">Explore Our Services</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-lg transform rotate-3 scale-95"></div>
            <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-lg p-6 text-white shadow-premium border border-primary-dark/50">
              <div className="absolute inset-0 rounded-lg overflow-hidden opacity-10">
                <div
                  className="absolute inset-0 bg-repeat opacity-10"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.2' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                ></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Get Your Free Survey</h3>
              <EnquiryForm compact={true} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
