"use client"

import type { ComponentType, ReactNode } from "react"
import EnhancedErrorBoundary from "./enhanced-error-boundary"
import { ComponentErrorFallback } from "./error-fallbacks/component-error-fallback"

interface WithErrorBoundaryProps {
  fallback?: ReactNode
  onReset?: () => void
  errorType?: "critical" | "warning" | "minor"
  showHomeButton?: boolean
  showBackButton?: boolean
  showSupportLink?: boolean
}

export function withEnhancedErrorBoundary<P extends object>(
  Component: ComponentType<P>,
  options: WithErrorBoundaryProps = {},
): ComponentType<P> {
  const {
    fallback,
    onReset,
    errorType = "warning",
    showHomeButton = true,
    showBackButton = true,
    showSupportLink = true,
  } = options

  const componentName = Component.displayName || Component.name || "Component"

  const defaultFallback = (
    <ComponentErrorFallback
      componentName={componentName}
      onRetry={onReset}
      errorType={errorType === "critical" ? "critical" : errorType === "warning" ? "warning" : "minor"}
    />
  )

  const WrappedComponent = (props: P) => {
    return (
      <EnhancedErrorBoundary
        fallback={fallback || defaultFallback}
        onReset={onReset}
        componentName={componentName}
        errorType={errorType}
        showHomeButton={showHomeButton}
        showBackButton={showBackButton}
        showSupportLink={showSupportLink}
      >
        <Component {...props} />
      </EnhancedErrorBoundary>
    )
  }

  WrappedComponent.displayName = `withEnhancedErrorBoundary(${componentName})`
  return WrappedComponent
}
