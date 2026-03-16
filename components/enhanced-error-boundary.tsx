"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { AlertTriangle, RefreshCw, Home, ArrowLeft, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onReset?: () => void
  componentName?: string
  errorType?: "critical" | "warning" | "minor"
  showHomeButton?: boolean
  showBackButton?: boolean
  showSupportLink?: boolean
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

class EnhancedErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
    this.setState({
      errorInfo,
    })

    // Here you could send the error to your analytics or error tracking service
    // Example: sendToErrorTrackingService(error, errorInfo, this.props.componentName);
  }

  resetErrorBoundary = (): void => {
    if (this.props.onReset) {
      this.props.onReset()
    }
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  render(): ReactNode {
    const { hasError, error } = this.state
    const {
      children,
      fallback,
      componentName,
      errorType = "warning",
      showHomeButton = true,
      showBackButton = true,
      showSupportLink = true,
    } = this.props

    if (hasError) {
      if (fallback) {
        return fallback
      }

      const errorColors = {
        critical: {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-800",
          icon: "text-red-600",
          button: "bg-red-600 hover:bg-red-700 text-white",
          outlineButton: "border-red-300 text-red-700 hover:bg-red-50",
        },
        warning: {
          bg: "bg-amber-50",
          border: "border-amber-200",
          text: "text-amber-800",
          icon: "text-amber-600",
          button: "bg-amber-600 hover:bg-amber-700 text-white",
          outlineButton: "border-amber-300 text-amber-700 hover:bg-amber-50",
        },
        minor: {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-800",
          icon: "text-blue-600",
          button: "bg-blue-600 hover:bg-blue-700 text-white",
          outlineButton: "border-blue-300 text-blue-700 hover:bg-blue-50",
        },
      }

      const colors = errorColors[errorType]

      return (
        <div className={`p-6 rounded-lg border ${colors.border} ${colors.bg} ${colors.text} shadow-sm`}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
            <div className="flex-shrink-0 p-3 rounded-full bg-white/80 shadow-sm">
              <AlertTriangle className={`h-8 w-8 ${colors.icon}`} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                {componentName ? `Error in ${componentName}` : "Something went wrong"}
              </h3>
              <p className="text-sm opacity-80">We've encountered an issue while rendering this component.</p>
            </div>
          </div>

          {error && process.env.NODE_ENV === "development" && (
            <div className="mb-4 mt-4">
              <details className="group">
                <summary className="cursor-pointer text-sm font-medium flex items-center gap-2">
                  <span className="underline">View technical details</span>
                  <svg
                    className="h-4 w-4 transition-transform group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="mt-2">
                  <pre
                    className={`p-3 ${colors.bg} bg-opacity-50 rounded text-xs overflow-auto max-h-40 border ${colors.border}`}
                  >
                    {error.toString()}
                    {error.stack && `\n\n${error.stack}`}
                  </pre>
                </div>
              </details>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            <Button onClick={this.resetErrorBoundary} className={colors.button}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>

            {showBackButton && (
              <Button onClick={() => window.history.back()} variant="outline" className={colors.outlineButton}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
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
                  Contact Support
                </Link>
              </Button>
            )}
          </div>
        </div>
      )
    }

    return children
  }
}

export default EnhancedErrorBoundary
