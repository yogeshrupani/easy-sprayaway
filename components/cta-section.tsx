"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="section-bg-primary w-full py-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Home?</h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us today for a free survey and discover how our professional services can improve your home's
            efficiency, appearance, and value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full shadow-lg hover:shadow-xl bg-white text-primary hover:bg-white/90"
            >
              <a href="/contact" className="flex items-center">
                <Phone className="mr-2 h-4 w-4" /> Get Your Free Survey
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/40 text-white bg-white/10 hover:bg-white/20 shadow-lg hover:shadow-xl"
            >
              <a href="/services" className="group flex items-center">
                Explore Our Services{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
