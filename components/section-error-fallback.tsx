"use client"

import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SectionErrorFallbackProps {
  title?: string
  message?: string
  onRetry?: () => void
}

export function SectionErrorFallback({
  title = "Section Error",
  message = "We encountered an issue loading this section.",
  onRetry,
}: SectionErrorFallbackProps) {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-md mx-auto text-center p-6 rounded-lg border border-gray-200 bg-gray-50">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        {onRetry && (
          <Button onClick={onRetry} variant="outline" className="mx-auto">
            <RefreshCw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        )}
      </div>
    </div>
  )
}
