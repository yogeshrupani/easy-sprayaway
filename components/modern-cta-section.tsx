"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedBackground from "./animated-background"

export default function ModernCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-16 text-white">
      <AnimatedBackground variant="primary" intensity="medium" className="z-0" />

      <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
          >
            <Calendar className="h-10 w-10 text-white" />
          </motion.div>

          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Transform Your Home?</h2>
          <p className="mb-8 text-lg text-white/90">
            Contact us today for a free survey and discover how our professional services can improve your home's
            efficiency, appearance, and value.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group w-full rounded-full bg-white text-primary shadow-lg hover:bg-white/90 hover:shadow-xl sm:w-auto"
            >
              <Link href="/contact" className="flex items-center">
                <Phone className="mr-2 h-4 w-4" /> Get Your Free Survey
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group w-full rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 hover:shadow-xl sm:w-auto"
            >
              <Link href="/services" className="flex items-center">
                Explore Our Services{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              No Obligation
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Free Consultation
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Expert Advice
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Detailed Quote
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              10-Year Warranty
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              1-Year Installation Guarantee
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
