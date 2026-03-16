"use client"

import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ComponentErrorFallbackProps {
  componentName?: string
  onRetry?: () => void
  minimal?: boolean
  errorType?: "critical" | "warning" | "minor"
}

export function ComponentErrorFallback({
  componentName,
  onRetry,
  minimal = false,
  errorType = "minor",
}: ComponentErrorFallbackProps) {
  const errorColors = {
    critical: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      button: "bg-red-600 hover:bg-red-700 text-white",
    },
    warning: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-800",
      button: "bg-amber-600 hover:bg-amber-700 text-white",
    },
    minor: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  }

  const colors = errorColors[errorType]

  if (minimal) {
    return (
      <div
        className={`p-3 rounded ${colors.bg} ${colors.border} border ${colors.text} text-sm flex items-center justify-between`}
      >
        <span>Failed to load {componentName || "component"}</span>
        {onRetry && (
          <Button size="sm" onClick={onRetry} className={`${colors.button} py-1 h-7 text-xs`}>
            <RefreshCw className="mr-1 h-3 w-3" />
            Retry
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className={`p-4 rounded-md ${colors.bg} ${colors.border} border ${colors.text} text-sm`}>
      <div className="flex flex-col gap-2">
        <p className="font-medium">
          {componentName ? `The ${componentName} couldn't be displayed` : "This component couldn't be displayed"}
        </p>
        <p className="text-xs opacity-80">There was an error loading this content.</p>
        {onRetry && (
          <Button size="sm" onClick={onRetry} className={`${colors.button} mt-2 self-start`}>
            <RefreshCw className="mr-2 h-3 w-3" />
            Try Again
          </Button>
        )}
      </div>
    </div>
  )
}
