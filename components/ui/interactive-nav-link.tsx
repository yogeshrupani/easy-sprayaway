"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InteractiveNavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  exact?: boolean
}

export function InteractiveNavLink({
  href,
  children,
  className,
  activeClassName,
  exact = false,
}: InteractiveNavLinkProps) {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  return (
    <Link href={href} className="relative block">
      <motion.span
        className={cn("relative block transition-colors duration-200", isActive ? activeClassName : "", className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {isActive && (
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
            layoutId="navIndicator"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}
      </motion.span>
    </Link>
  )
}
