import { cn } from "@/lib/utils"
import type React from "react"

interface ResponsiveHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"
  weight?: "normal" | "medium" | "semibold" | "bold"
  align?: "left" | "center" | "right"
  color?: string
  children: React.ReactNode
}

const headingSizeMap = {
  xs: "text-lg sm:text-xl",
  sm: "text-xl sm:text-2xl",
  md: "text-2xl sm:text-3xl",
  lg: "text-3xl sm:text-4xl",
  xl: "text-4xl sm:text-5xl",
  "2xl": "text-5xl sm:text-6xl",
  "3xl": "text-6xl sm:text-7xl",
  "4xl": "text-7xl sm:text-8xl",
}

const weightMap = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
}

const alignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
}

export function ResponsiveHeading({
  as: Component = "h2",
  className,
  size = "lg",
  weight = "bold",
  align = "left",
  color,
  children,
  ...props
}: ResponsiveHeadingProps) {
  return (
    <Component
      className={cn(headingSizeMap[size], weightMap[weight], alignMap[align], "tracking-tight", color, className)}
      {...props}
    >
      {children}
    </Component>
  )
}

interface ResponsiveTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div"
  size?: "xs" | "sm" | "base" | "lg" | "xl"
  weight?: "normal" | "medium" | "semibold" | "bold"
  align?: "left" | "center" | "right"
  color?: string
  children: React.ReactNode
}

const textSizeMap = {
  xs: "text-xs sm:text-sm",
  sm: "text-sm sm:text-base",
  base: "text-base sm:text-lg",
  lg: "text-lg sm:text-xl",
  xl: "text-xl sm:text-2xl",
}

export function ResponsiveText({
  as: Component = "p",
  className,
  size = "base",
  weight = "normal",
  align = "left",
  color,
  children,
  ...props
}: ResponsiveTextProps) {
  return (
    <Component
      className={cn(textSizeMap[size], weightMap[weight], alignMap[align], "leading-relaxed", color, className)}
      {...props}
    >
      {children}
    </Component>
  )
}
