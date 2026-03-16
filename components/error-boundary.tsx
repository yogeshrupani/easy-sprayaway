"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onReset?: () => void
  componentName?: string
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  resetErrorBoundary = (): void => {
    if (this.props.onReset) {
      this.props.onReset()
    }
    this.setState({
      hasError: false,
      error: null,
    })
  }

  render(): ReactNode {
    const { hasError, error } = this.state
    const { children, fallback, componentName } = this.props

    if (hasError) {
      if (fallback) {
        return fallback
      }

      return (
        <div className="p-6 rounded-lg border border-red-200 bg-red-50 text-red-800">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h3 className="text-lg font-semibold">
              {componentName ? `Error in ${componentName}` : "Something went wrong"}
            </h3>
          </div>

          <div className="mb-4">
            <p className="text-sm text-red-700 mb-2">We've encountered an error while rendering this component.</p>
            {error && process.env.NODE_ENV === "development" && (
              <pre className="p-3 bg-red-100 rounded text-xs overflow-auto max-h-40">{error.toString()}</pre>
            )}
          </div>

          <Button
            onClick={this.resetErrorBoundary}
            variant="outline"
            className="bg-white hover:bg-red-100 border-red-300 text-red-700"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </div>
      )
    }

    return children
  }
}

export default ErrorBoundary
