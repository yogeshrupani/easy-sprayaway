import { cn } from "@/lib/utils"
import type React from "react"

type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type GridGap = "none" | "xs" | "sm" | "md" | "lg" | "xl"

interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  columns?: {
    default: GridColumns
    sm?: GridColumns
    md?: GridColumns
    lg?: GridColumns
    xl?: GridColumns
  }
  gap?: GridGap | { x?: GridGap; y?: GridGap }
  children: React.ReactNode
}

const gapMap = {
  none: "gap-0",
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
}

const columnsMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
}

export function ResponsiveGrid({
  as: Component = "div",
  className,
  columns = { default: 1 },
  gap = "md",
  children,
  ...props
}: ResponsiveGridProps) {
  const { default: defaultCols, sm, md, lg, xl } = columns

  const gapClasses =
    typeof gap === "string"
      ? gapMap[gap]
      : `${gap.x ? `gap-x-${gapMap[gap.x].split("-")[1]}` : ""} ${gap.y ? `gap-y-${gapMap[gap.y].split("-")[1]}` : ""}`

  return (
    <Component
      className={cn(
        "grid w-full",
        columnsMap[defaultCols],
        sm && `sm:${columnsMap[sm]}`,
        md && `md:${columnsMap[md]}`,
        lg && `lg:${columnsMap[lg]}`,
        xl && `xl:${columnsMap[xl]}`,
        typeof gap === "string" ? gapMap[gap] : gapClasses,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
