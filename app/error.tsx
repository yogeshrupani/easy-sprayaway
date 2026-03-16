"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home, RefreshCw, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <Image
            src="/images/error-illustrations/error.svg"
            alt="Error illustration"
            width={180}
            height={180}
            className="mx-auto"
          />
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-6">
            We apologize for the inconvenience. An unexpected error has occurred while loading this page.
          </p>

          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mb-6 p-3 bg-red-50 rounded text-left">
              <p className="text-sm font-medium text-red-800 mb-1">Error details:</p>
              <pre className="text-xs text-red-700 overflow-auto max-h-40">
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </pre>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={reset} className="bg-red-600 hover:bg-red-700">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button asChild variant="outline">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="mailto:support@easy-sprayaway.co.uk">
                <Mail className="mr-2 h-4 w-4" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
