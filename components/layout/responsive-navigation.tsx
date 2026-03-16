"use client"

import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { ResponsiveContainer } from "./responsive-container"

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

interface ResponsiveNavigationProps {
  logo: {
    src: string
    alt: string
    width: number
    height: number
  }
  items: NavItem[]
  ctaButton?: {
    label: string
    href: string
  }
  className?: string
}

export function ResponsiveNavigation({ logo, items, ctaButton, className }: ResponsiveNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4",
        className,
      )}
    >
      <ResponsiveContainer>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                )}
              >
                {item.label}
              </Link>
            ))}
            {ctaButton && (
              <Link
                href={ctaButton.href}
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 transition-colors"
              >
                {ctaButton.label}
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </ResponsiveContainer>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform transform md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="pt-20 pb-6 px-4 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                )}
              >
                {item.label}
              </Link>
            ))}
            {ctaButton && (
              <Link
                href={ctaButton.href}
                className="mt-4 px-4 py-3 text-base font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 transition-colors text-center"
              >
                {ctaButton.label}
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
