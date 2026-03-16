import { cn } from "@/lib/utils"
import type React from "react"

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  fluid?: boolean
  narrow?: boolean
  wide?: boolean
  noPadding?: boolean
  children: React.ReactNode
}

export function ResponsiveContainer({
  as: Component = "div",
  className,
  fluid = false,
  narrow = false,
  wide = false,
  noPadding = false,
  children,
  ...props
}: ResponsiveContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        {
          "max-w-7xl": !narrow && !wide && !fluid,
          "max-w-5xl": narrow,
          "max-w-screen-2xl": wide,
          "px-4 sm:px-6 lg:px-8": !noPadding,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
