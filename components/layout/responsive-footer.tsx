import { cn } from "@/lib/utils"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ResponsiveContainer } from "./responsive-container"
import { ResponsiveGrid } from "./responsive-grid"
import { ResponsiveHeading, ResponsiveText } from "./responsive-typography"

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  platform: "facebook" | "twitter" | "instagram" | "email"
  href: string
}

interface ResponsiveFooterProps {
  logo: {
    src: string
    alt: string
    width: number
    height: number
  }
  columns: FooterColumn[]
  social: SocialLink[]
  contact: {
    address: string
    phone: string
    email: string
  }
  copyright: string
  className?: string
}

const socialIcons = {
  facebook: <Facebook className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  email: <Mail className="h-5 w-5" />,
}

export function ResponsiveFooter({ logo, columns, social, contact, copyright, className }: ResponsiveFooterProps) {
  return (
    <footer className={cn("bg-gray-900 text-gray-300 pt-12 pb-6", className)}>
      <ResponsiveContainer>
        <ResponsiveGrid columns={{ default: 1, md: 2, lg: 4 }} gap="lg" className="mb-12">
          {/* Logo and Contact */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto"
              />
            </Link>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-gray-400" />
                <ResponsiveText size="sm" color="text-gray-400">
                  {contact.address}
                </ResponsiveText>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-400" />
                <Link
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {contact.phone}
                </Link>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <Link href={`mailto:${contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {contact.email}
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Columns */}
          {columns.map((column, index) => (
            <div key={index} className="mt-8 md:mt-0">
              <ResponsiveHeading as="h3" size="xs" color="text-white" className="mb-4">
                {column.title}
              </ResponsiveHeading>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ResponsiveGrid>

        {/* Social and Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            {social.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label={`${item.platform} link`}
              >
                {socialIcons[item.platform]}
              </Link>
            ))}
          </div>
          <ResponsiveText size="xs" color="text-gray-500">
            {copyright}
          </ResponsiveText>
        </div>
      </ResponsiveContainer>
    </footer>
  )
}
