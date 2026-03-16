"use client"

import { RefreshCw, Home, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface SectionErrorFallbackProps {
  title?: string
  message?: string
  onRetry?: () => void
  showHomeButton?: boolean
  showSupportLink?: boolean
  errorType?: "critical" | "warning" | "minor"
  imageType?: "broken" | "maintenance" | "error" | "unavailable"
}

export function SectionErrorFallback({
  title = "Section Error",
  message = "We encountered an issue loading this section.",
  onRetry,
  showHomeButton = false,
  showSupportLink = true,
  errorType = "warning",
  imageType = "error",
}: SectionErrorFallbackProps) {
  const errorColors = {
    critical: {
      bg: "bg-red-50",
      text: "text-red-800",
      button: "bg-red-600 hover:bg-red-700 text-white",
      outlineButton: "border-red-300 text-red-700 hover:bg-red-50",
    },
    warning: {
      bg: "bg-amber-50",
      text: "text-amber-800",
      button: "bg-amber-600 hover:bg-amber-700 text-white",
      outlineButton: "border-amber-300 text-amber-700 hover:bg-amber-50",
    },
    minor: {
      bg: "bg-blue-50",
      text: "text-blue-800",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      outlineButton: "border-blue-300 text-blue-700 hover:bg-blue-50",
    },
  }

  const colors = errorColors[errorType]

  const errorImages = {
    broken: "/images/error-illustrations/broken-component.svg",
    maintenance: "/images/error-illustrations/maintenance.svg",
    error: "/images/error-illustrations/error.svg",
    unavailable: "/images/error-illustrations/unavailable.svg",
  }

  return (
    <div className={`w-full py-12 px-4 ${colors.bg}`}>
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6 relative h-40 w-40 mx-auto">
          <Image
            src={errorImages[imageType] || "/placeholder.svg"}
            alt="Error illustration"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>
        <h3 className={`text-xl font-semibold ${colors.text} mb-2`}>{title}</h3>
        <p className={`${colors.text} opacity-80 mb-6`}>{message}</p>
        <div className="flex flex-wrap justify-center gap-3">
          {onRetry && (
            <Button onClick={onRetry} className={colors.button}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Retry
            </Button>
          )}

          {showHomeButton && (
            <Button asChild variant="outline" className={colors.outlineButton}>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
          )}

          {showSupportLink && (
            <Button asChild variant="outline" className={colors.outlineButton}>
              <Link href="/contact?support=true">
                <HelpCircle className="mr-2 h-4 w-4" />
                Support
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
