"use client"

import type { ComponentType, ReactNode } from "react"
import ErrorBoundary from "./error-boundary"

interface WithErrorBoundaryProps {
  fallback?: ReactNode
  onReset?: () => void
}

export function withErrorBoundary<P extends object>(
  Component: ComponentType<P>,
  options: WithErrorBoundaryProps = {},
): ComponentType<P> {
  const { fallback, onReset } = options
  const componentName = Component.displayName || Component.name || "Component"

  const WrappedComponent = (props: P) => {
    return (
      <ErrorBoundary fallback={fallback} onReset={onReset} componentName={componentName}>
        <Component {...props} />
      </ErrorBoundary>
    )
  }

  WrappedComponent.displayName = `withErrorBoundary(${componentName})`
  return WrappedComponent
}
