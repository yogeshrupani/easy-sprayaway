"use client"

import { motion } from "framer-motion"
import { Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardModernProps {
  title: string
  description: string
  icon: string
  benefits?: string[] // Make benefits optional
}

export default function ServiceCardModern({
  title,
  description,
  icon,
  benefits = [], // Provide default empty array
}: ServiceCardModernProps) {
  // Convert icon string to actual icon component
  const IconComponent = () => {
    switch (icon) {
      case "home":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        )
      case "roof":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M20 22h-2" />
            <path d="M20 15v7" />
            <path d="M4 22h16" />
            <path d="M4 15v7" />
            <path d="M15 2H9L2 15h20L15 2Z" />
          </svg>
        )
      case "spray":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M4 10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M6 6v4" />
            <path d="M18 6v4" />
            <path d="M10 6V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
            <path d="M10 18v3" />
            <path d="M14 18v3" />
            <path d="M12 18v3" />
            <path d="M4 14v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" />
          </svg>
        )
      case "clean":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M3 6v14" />
            <path d="M7 6v14" />
            <path d="M21 6v14" />
            <path d="M11 14c7 0 10-3 10-8H1c0 5 3 8 10 8Z" />
            <path d="M11 14v6" />
            <path d="M11 20h10" />
          </svg>
        )
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )
    }
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="feature-card h-full p-5 sm:p-6 md:p-8"
    >
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-4">
        <IconComponent />
      </div>
      <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>

      <div className="mt-auto">
        {benefits && benefits.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-slate-700 mb-2">Key Benefits:</p>
            <ul className="space-y-1">
              {benefits.slice(0, 3).map((benefit, index) => (
                <li key={index} className="flex items-start text-sm">
                  <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full group border-primary/30 text-primary hover:bg-primary/5 hover:border-primary min-h-[44px] mt-4"
        >
          <a
            href={`/services#${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center justify-center"
          >
            Learn More
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </motion.div>
  )
}
