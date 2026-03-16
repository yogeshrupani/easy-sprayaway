import Image from "next/image"
import Link from "next/link"
import { trustpilotSummary } from "@/data/trustpilot-reviews"

type TrustpilotBadgeProps = {
  variant?: "horizontal" | "vertical" | "compact" | "minimal"
  className?: string
}

export default function TrustpilotBadge({ variant = "horizontal", className = "" }: TrustpilotBadgeProps) {
  const rating = trustpilotSummary.rating
  const reviewCount = trustpilotSummary.reviewCount

  const variantClasses = {
    horizontal: "flex items-center p-3 bg-white rounded-md shadow-sm",
    vertical: "flex flex-col items-center p-3 bg-white rounded-md shadow-sm",
    compact: "flex items-center p-2 bg-white rounded-md shadow-sm",
    minimal: "flex items-center",
  }

  const renderStars = () => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`h-4 w-4 ${variant === "minimal" ? "h-3 w-3" : ""}`}>
            {i < fullStars ? (
              <svg viewBox="0 0 24 24" fill="#00b67a" className="h-full w-full">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ) : hasHalfStar && i === fullStars ? (
              <svg viewBox="0 0 24 24" fill="#00b67a" className="h-full w-full">
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  fillOpacity="0.5"
                />
                <path d="M12 17.27V2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="#00b67a" fillOpacity="0.3" className="h-full w-full">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <Link
      href={trustpilotSummary.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClasses[variant]} ${className} hover:opacity-95 transition-opacity`}
    >
      {variant === "vertical" ? (
        <>
          <div className="mb-2">
            <Image src="/images/trustpilot-logo.png" alt="Trustpilot" width={100} height={24} className="h-6 w-auto" />
          </div>
          <div className="flex flex-col items-center">
            {renderStars()}
            <p className="text-sm font-medium mt-1 text-gray-700">
              {rating}/5 · {reviewCount} reviews
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="mr-3">
            <Image
              src="/images/trustpilot-logo.png"
              alt="Trustpilot"
              width={100}
              height={24}
              className={`h-${variant === "minimal" ? "4" : "5"} w-auto`}
            />
          </div>
          <div className="flex flex-col">
            {renderStars()}
            {variant !== "minimal" && (
              <p className="text-xs font-medium mt-0.5 text-gray-700">
                {rating}/5 · {reviewCount} reviews
              </p>
            )}
          </div>
        </>
      )}
    </Link>
  )
}
