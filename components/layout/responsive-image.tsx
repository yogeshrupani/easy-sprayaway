import { cn } from "@/lib/utils"
import Image from "next/image"

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  aspectRatio?: "auto" | "square" | "video" | "portrait" | "ultrawide"
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  priority?: boolean
  rounded?: boolean
  roundedFull?: boolean
  shadow?: boolean
  border?: boolean
}

const aspectRatioMap = {
  auto: "aspect-auto",
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  ultrawide: "aspect-[21/9]",
}

const objectFitMap = {
  contain: "object-contain",
  cover: "object-cover",
  fill: "object-fill",
  none: "object-none",
  "scale-down": "object-scale-down",
}

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className,
  aspectRatio = "auto",
  objectFit = "cover",
  priority = false,
  rounded = false,
  roundedFull = false,
  shadow = false,
  border = false,
  ...props
}: ResponsiveImageProps) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        aspectRatioMap[aspectRatio],
        rounded && "rounded-lg",
        roundedFull && "rounded-full",
        shadow && "shadow-md",
        border && "border border-gray-200",
        className,
      )}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width || 1200}
        height={height || 800}
        className={cn("w-full h-full", objectFitMap[objectFit])}
        priority={priority}
        {...props}
      />
    </div>
  )
}
