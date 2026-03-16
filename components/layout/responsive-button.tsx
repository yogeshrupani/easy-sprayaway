import { cn } from "@/lib/utils"
import Link from "next/link"
import type React from "react"

interface ButtonBaseProps {
  className?: string
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  disabled?: boolean
  children: React.ReactNode
}

interface ButtonAsButtonProps extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button"
  href?: never
}

interface ButtonAsLinkProps extends ButtonBaseProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  as: "link"
  href: string
}

type ResponsiveButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

const variantMap = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
  outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  link: "bg-transparent text-blue-600 hover:underline focus:ring-blue-500 p-0",
}

const sizeMap = {
  sm: "text-sm px-3 py-1.5 rounded",
  md: "text-base px-4 py-2 rounded-md",
  lg: "text-lg px-6 py-3 rounded-lg",
}

export function ResponsiveButton({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  children,
  ...props
}: ResponsiveButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    variantMap[variant],
    variant !== "link" && sizeMap[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed",
    className,
  )

  if (props.as === "link") {
    const { as, href, ...rest } = props
    return (
      <Link href={href} className={baseClasses} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button className={baseClasses} disabled={disabled} {...(props as ButtonAsButtonProps)}>
      {children}
    </button>
  )
}
