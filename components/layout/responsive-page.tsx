import { cn } from "@/lib/utils"
import type React from "react"
import { ResponsiveContainer } from "./responsive-container"

interface ResponsivePageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  fullWidth?: boolean
  className?: string
}

export function ResponsivePage({ children, fullWidth = false, className, ...props }: ResponsivePageProps) {
  return (
    <main className={cn("min-h-screen", className)} {...props}>
      {fullWidth ? children : <ResponsiveContainer className="py-8 md:py-12">{children}</ResponsiveContainer>}
    </main>
  )
}
