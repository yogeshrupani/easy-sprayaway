"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <Image
            src="/images/error-illustrations/unavailable.svg"
            alt="Page not found"
            width={180}
            height={180}
            className="mx-auto"
          />
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
          <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                <Search className="mr-2 h-4 w-4" />
                Contact Support
              </Link>
            </Button>
            <Button onClick={() => window.history.back()} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
