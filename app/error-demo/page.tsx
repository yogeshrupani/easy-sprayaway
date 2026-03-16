"use client"

import { ErrorDemo } from "@/components/error-demo"

export default function ErrorDemoPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Error Handling Demonstration</h1>
      <p className="text-lg text-gray-700 mb-8">
        This page demonstrates how our application handles different types of errors using React Error Boundaries.
      </p>

      <div className="mb-12">
        <ErrorDemo />
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold mb-4">About Error Boundaries</h2>
        <p className="mb-4">
          Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log
          those errors, and display a fallback UI instead of crashing the whole application.
        </p>
        <p>
          Our implementation captures errors during rendering, in lifecycle methods, and in constructors of the entire
          component tree below them. When an error occurs, users see a helpful message instead of a broken interface.
        </p>
      </div>
    </div>
  )
}
