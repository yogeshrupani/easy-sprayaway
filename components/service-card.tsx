import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Shield } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  imageUrl: string
  href: string
  features?: string[]
  isMainService?: boolean
}

export default function ServiceCard({
  title,
  description,
  imageUrl,
  href,
  features,
  isMainService = false,
}: ServiceCardProps) {
  return (
    <div
      className={`group flex flex-col rounded-lg overflow-hidden border bg-card shadow-sm transition-all ${isMainService ? "border-primary/20 shadow-md" : "hover:shadow-md"}`}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {isMainService && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">Popular</div>
        )}
        <div className="absolute bottom-2 left-2 bg-white/90 text-primary text-xs px-2 py-1 rounded-full flex items-center">
          <Shield className="h-3 w-3 mr-1" /> 10-Year Warranty
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600 line-clamp-3">{description}</p>

        {features && features.length > 0 && (
          <ul className="mt-4 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-baseline text-sm text-gray-600">
                <span className="mr-2 text-primary">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4">
          <Button
            asChild
            className={isMainService ? "w-full" : "group"}
            variant={isMainService ? "default" : "outline"}
          >
            <Link href={href} className="flex items-center justify-center">
              {isMainService ? (
                "Learn More"
              ) : (
                <>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
