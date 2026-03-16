import { cn } from "@/lib/utils"
import type React from "react"
import { ResponsiveContainer } from "./responsive-container"

type SpacingSize = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

const spacingMap = {
  none: "py-0",
  xs: "py-4",
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-20",
  "2xl": "py-24",
}

interface ResponsiveSectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  containerType?: "normal" | "narrow" | "wide" | "fluid" | "none"
  spacing?: SpacingSize
  children: React.ReactNode
  noPadding?: boolean
  bgColor?: string
}

export function ResponsiveSection({
  as: Component = "section",
  className,
  containerType = "normal",
  spacing = "lg",
  children,
  noPadding = false,
  bgColor,
  ...props
}: ResponsiveSectionProps) {
  return (
    <Component className={cn(spacingMap[spacing], bgColor, className)} {...props}>
      {containerType === "none" ? (
        children
      ) : (
        <ResponsiveContainer
          fluid={containerType === "fluid"}
          narrow={containerType === "narrow"}
          wide={containerType === "wide"}
          noPadding={noPadding}
        >
          {children}
        </ResponsiveContainer>
      )}
    </Component>
  )
}
