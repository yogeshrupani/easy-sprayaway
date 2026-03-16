"use client"

import type React from "react"

import dynamic from "next/dynamic"
import AnimatedBackground from "@/components/animated-background"

// Dynamically import FloatingShapes to ensure it's client-side rendered
const FloatingShapes = dynamic(() => import("@/components/floating-shapes"), { ssr: false })

interface HeroBackgroundWrapperProps {
  children: React.ReactNode
}

export default function HeroBackgroundWrapper({ children }: HeroBackgroundWrapperProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-white py-24 md:py-32 overflow-hidden">
      <AnimatedBackground variant="light" intensity="medium" />
      <FloatingShapes />
      <div className="container relative z-10">{children}</div>
    </section>
  )
}
