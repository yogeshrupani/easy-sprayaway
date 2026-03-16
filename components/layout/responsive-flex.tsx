import { cn } from "@/lib/utils"
import type React from "react"

type FlexDirection = "row" | "row-reverse" | "col" | "col-reverse"
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse"
type FlexJustify = "start" | "end" | "center" | "between" | "around" | "evenly"
type FlexAlign = "start" | "end" | "center" | "baseline" | "stretch"
type FlexGap = "none" | "xs" | "sm" | "md" | "lg" | "xl"

interface ResponsiveFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  direction?: {
    default: FlexDirection
    sm?: FlexDirection
    md?: FlexDirection
    lg?: FlexDirection
    xl?: FlexDirection
  }
  wrap?: FlexWrap
  justify?: FlexJustify
  align?: FlexAlign
  gap?: FlexGap
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

const directionMap = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  col: "flex-col",
  "col-reverse": "flex-col-reverse",
}

const wrapMap = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
}

const justifyMap = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
}

const alignMap = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
}

export function ResponsiveFlex({
  as: Component = "div",
  className,
  direction = { default: "row" },
  wrap = "nowrap",
  justify = "start",
  align = "start",
  gap = "none",
  children,
  ...props
}: ResponsiveFlexProps) {
  const { default: defaultDir, sm, md, lg, xl } = direction

  return (
    <Component
      className={cn(
        "flex",
        directionMap[defaultDir],
        sm && `sm:${directionMap[sm]}`,
        md && `md:${directionMap[md]}`,
        lg && `lg:${directionMap[lg]}`,
        xl && `xl:${directionMap[xl]}`,
        wrapMap[wrap],
        justifyMap[justify],
        alignMap[align],
        gapMap[gap],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
