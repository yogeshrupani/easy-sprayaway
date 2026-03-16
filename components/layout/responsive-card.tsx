import { cn } from "@/lib/utils"
import type React from "react"

interface ResponsiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  hover?: boolean
  children: React.ReactNode
}

const variantMap = {
  default: "bg-white shadow-sm",
  outline: "bg-white border border-gray-200",
  ghost: "bg-transparent",
}

const sizeMap = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
}

export function ResponsiveCard({
  as: Component = "div",
  className,
  variant = "default",
  size = "md",
  hover = false,
  children,
  ...props
}: ResponsiveCardProps) {
  return (
    <Component
      className={cn(
        "rounded-lg",
        variantMap[variant],
        sizeMap[size],
        hover && "transition-all duration-200 hover:shadow-md",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
