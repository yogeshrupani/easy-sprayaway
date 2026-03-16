"use client"

import { RefreshCw, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FormErrorFallbackProps {
  formName?: string
  onRetry?: () => void
  showAlternativeContact?: boolean
}

export function FormErrorFallback({
  formName = "form",
  onRetry,
  showAlternativeContact = true,
}: FormErrorFallbackProps) {
  return (
    <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
          <svg
            className="w-8 h-8 text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Form Unavailable</h3>
        <p className="text-gray-600">
          We're having trouble loading the {formName}. Please try again or use an alternative contact method.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Button onClick={onRetry} className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>

        {showAlternativeContact && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-700 mb-3 text-center">Alternative Contact Methods:</p>
            <div className="grid grid-cols-2 gap-3">
              <Button asChild variant="outline" className="w-full">
                <Link href="tel:+441234567890">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="mailto:info@easy-sprayaway.co.uk">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
