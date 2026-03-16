"use client"

import { RefreshCw, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DataErrorFallbackProps {
  message?: string
  onRetry?: () => void
  dataType?: string
  minimal?: boolean
}

export function DataErrorFallback({
  message = "Failed to load data",
  onRetry,
  dataType,
  minimal = false,
}: DataErrorFallbackProps) {
  if (minimal) {
    return (
      <div className="p-3 rounded bg-gray-50 border border-gray-200 text-gray-700 text-sm flex items-center justify-between">
        <span className="flex items-center">
          <AlertCircle className="h-4 w-4 mr-2 text-gray-500" />
          {dataType ? `${dataType} data unavailable` : "Data unavailable"}
        </span>
        {onRetry && (
          <Button size="sm" variant="outline" onClick={onRetry} className="py-1 h-7 text-xs">
            <RefreshCw className="mr-1 h-3 w-3" />
            Reload
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="p-6 rounded-lg bg-gray-50 border border-gray-200 text-center">
      <AlertCircle className="h-10 w-10 mx-auto mb-3 text-gray-400" />
      <h4 className="text-lg font-medium text-gray-800 mb-1">
        {dataType ? `${dataType} Unavailable` : "Data Unavailable"}
      </h4>
      <p className="text-gray-600 mb-4">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" className="mx-auto">
          <RefreshCw className="mr-2 h-4 w-4" />
          Reload Data
        </Button>
      )}
    </div>
  )
}
