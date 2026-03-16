"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import EnhancedErrorBoundary from "./enhanced-error-boundary"

// Component that will throw an error when the button is clicked
function ErrorThrower({ shouldThrow = false }: { shouldThrow?: boolean }) {
  if (shouldThrow) {
    throw new Error("This is a demonstration error")
  }

  return <div className="p-4 bg-green-50 text-green-800 rounded-md">Component is working correctly!</div>
}

// Component that will throw an error during rendering
function RenderErrorComponent() {
  // This will cause a render error
  const nonExistentObject: any = null
  const value = nonExistentObject.property.nestedProperty

  return <div>{value}</div>
}

// Component that will throw an error in a lifecycle method
function LifecycleErrorComponent() {
  useState(() => {
    throw new Error("Error in useState hook")
  })

  return <div>This won't render</div>
}

export function ErrorDemo() {
  const [shouldThrow, setShouldThrow] = useState(false)
  const [showRenderError, setShowRenderError] = useState(false)
  const [showLifecycleError, setShowLifecycleError] = useState(false)

  return (
    <div className="p-6 border rounded-lg space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Error Boundary Demonstration</h3>
        <p className="text-gray-600 mb-4">
          This component demonstrates how error boundaries catch and handle different types of errors.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-2">1. Event Handler Error</h4>
          <EnhancedErrorBoundary componentName="Error Thrower" errorType="warning">
            <div className="p-4 border rounded-md">
              <p className="mb-4">Click the button to trigger an error:</p>
              <ErrorThrower shouldThrow={shouldThrow} />
              <div className="mt-4">
                <Button onClick={() => setShouldThrow(true)} variant="destructive" disabled={shouldThrow}>
                  Trigger Error
                </Button>
                <Button
                  onClick={() => setShouldThrow(false)}
                  variant="outline"
                  className="ml-2"
                  disabled={!shouldThrow}
                >
                  Reset
                </Button>
              </div>
            </div>
          </EnhancedErrorBoundary>
        </div>

        <div>
          <h4 className="font-medium mb-2">2. Render Error</h4>
          <EnhancedErrorBoundary componentName="Render Error Component" errorType="critical">
            <div className="p-4 border rounded-md">
              <p className="mb-4">Click the button to render a component that will error during rendering:</p>
              {showRenderError ? (
                <RenderErrorComponent />
              ) : (
                <div className="p-4 bg-green-50 text-green-800 rounded-md">Component not rendered yet</div>
              )}
              <div className="mt-4">
                <Button onClick={() => setShowRenderError(true)} variant="destructive" disabled={showRenderError}>
                  Show Error Component
                </Button>
                <Button
                  onClick={() => setShowRenderError(false)}
                  variant="outline"
                  className="ml-2"
                  disabled={!showRenderError}
                >
                  Reset
                </Button>
              </div>
            </div>
          </EnhancedErrorBoundary>
        </div>

        <div>
          <h4 className="font-medium mb-2">3. Lifecycle Error</h4>
          <EnhancedErrorBoundary componentName="Lifecycle Error Component" errorType="minor">
            <div className="p-4 border rounded-md">
              <p className="mb-4">Click the button to render a component that will error during a lifecycle method:</p>
              {showLifecycleError ? (
                <LifecycleErrorComponent />
              ) : (
                <div className="p-4 bg-green-50 text-green-800 rounded-md">Component not rendered yet</div>
              )}
              <div className="mt-4">
                <Button onClick={() => setShowLifecycleError(true)} variant="destructive" disabled={showLifecycleError}>
                  Show Error Component
                </Button>
                <Button
                  onClick={() => setShowLifecycleError(false)}
                  variant="outline"
                  className="ml-2"
                  disabled={!showLifecycleError}
                >
                  Reset
                </Button>
              </div>
            </div>
          </EnhancedErrorBoundary>
        </div>
      </div>
    </div>
  )
}
