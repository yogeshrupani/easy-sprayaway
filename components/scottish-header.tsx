"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScottishHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <div className="relative h-14 w-48 transition-all duration-300">
              <Image src="/logo-new.png" alt="Easy-Sprayaway" fill className="object-contain" priority />
            </div>
            <div className={cn("ml-2 transition-opacity duration-300", isScrolled ? "opacity-100" : "opacity-0")}>
              <div className="text-xs font-semibold text-blue-600">Trusted across Scotland</div>
              <div className="text-xs text-gray-600">Since 2016</div>
            </div>
          </Link>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-sm">
              <Phone size={18} className="text-blue-600 mr-2" />
              <div>
                <p className="font-medium">Call us today</p>
                <a href="tel:01234567890" className="text-blue-600 hover:text-blue-800 font-bold">
                  0123 456 7890
                </a>
              </div>
            </div>

            <div className="flex items-center text-sm">
              <MapPin size={18} className="text-blue-600 mr-2" />
              <div>
                <p className="font-medium">Serving all of</p>
                <p className="text-blue-600 font-bold">Scotland</p>
              </div>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="nav-link">
              Home
            </Link>

            <div className="relative group">
              <button className="nav-link flex items-center" onClick={() => toggleDropdown("services")}>
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-md overflow-hidden transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-top-left z-50">
                <div className="p-2">
                  <Link href="/services#superquilt" className="block px-4 py-2 text-sm hover:bg-blue-50 rounded-md">
                    SuperQuilt Loft Insulation
                  </Link>
                  <Link href="/services#roof-cleaning" className="block px-4 py-2 text-sm hover:bg-blue-50 rounded-md">
                    Roof Cleaning & Coatings
                  </Link>
                  <Link href="/services#wall-cleaning" className="block px-4 py-2 text-sm hover:bg-blue-50 rounded-md">
                    Wall & Driveway Cleaning
                  </Link>
                  <Link href="/services#spray-foam" className="block px-4 py-2 text-sm hover:bg-blue-50 rounded-md">
                    Spray Foam Insulation
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/gallery" className="nav-link">
              Gallery
            </Link>
            <Link href="/reviews" className="nav-link">
              Reviews
            </Link>
            <Link href="/about" className="nav-link">
              About Us
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <Link href="/faqs" className="nav-link">
              FAQs
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={cn(
                "btn-primary transition-all duration-300",
                isScrolled ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600/90 hover:bg-blue-600",
              )}
            >
              Free Survey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 p-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} className="text-blue-600" /> : <Menu size={24} className="text-blue-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container mx-auto px-4 pt-24 pb-8 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>

            <div>
              <button
                className="mobile-nav-link w-full text-left flex items-center justify-between"
                onClick={() => toggleDropdown("mobile-services")}
              >
                Services
                <ChevronDown
                  size={20}
                  className={cn(
                    "transition-transform duration-200",
                    activeDropdown === "mobile-services" ? "rotate-180" : "",
                  )}
                />
              </button>

              {activeDropdown === "mobile-services" && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-blue-100">
                  <Link
                    href="/services#superquilt"
                    className="block py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SuperQuilt Loft Insulation
                  </Link>
                  <Link
                    href="/services#roof-cleaning"
                    className="block py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Roof Cleaning & Coatings
                  </Link>
                  <Link
                    href="/services#wall-cleaning"
                    className="block py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Wall & Driveway Cleaning
                  </Link>
                  <Link
                    href="/services#spray-foam"
                    className="block py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Spray Foam Insulation
                  </Link>
                </div>
              )}
            </div>

            <Link href="/gallery" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="/reviews" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Reviews
            </Link>
            <Link href="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/faqs" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              FAQs
            </Link>
          </nav>

          {/* Mobile Contact Info */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <Phone size={20} className="text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium">Call us today</p>
                <a href="tel:01234567890" className="text-blue-600 hover:text-blue-800 font-bold">
                  0123 456 7890
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <MapPin size={20} className="text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium">Serving all of</p>
                <p className="text-blue-600 font-bold">Scotland</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="btn-primary bg-blue-600 hover:bg-blue-700 w-full text-center mt-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Your Free Survey
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          padding: 0.5rem 1rem;
          font-weight: 500;
          color: #1e3a8a;
          transition: all 0.2s;
        }
        
        .nav-link:hover {
          color: #2563eb;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #2563eb;
          transition: all 0.3s;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
          width: 70%;
        }
        
        .mobile-nav-link {
          font-size: 1.125rem;
          font-weight: 500;
          color: #1e3a8a;
          padding: 0.75rem 0;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .btn-primary {
          display: inline-block;
          padding: 0.625rem 1.25rem;
          font-weight: 600;
          color: white;
          border-radius: 0.375rem;
          transition: all 0.2s;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </header>
  )
}
