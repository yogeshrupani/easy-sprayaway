"use client"

import { getServiceData } from "@/lib/data-helpers"
import { Check } from "lucide-react"

interface ServiceFeatureProps {
  serviceId: string
  featureIndex: number
  showIcon?: boolean
  className?: string
}

export function ServiceFeature({ serviceId, featureIndex, showIcon = true, className = "" }: ServiceFeatureProps) {
  const service = getServiceData(serviceId)
  const feature = service.features[featureIndex]

  if (!feature) return null

  return (
    <div className={`flex items-start ${className}`}>
      {showIcon && (
        <div className="rounded-full bg-green-100 p-1 mr-3 mt-1 flex-shrink-0">
          <Check className="h-4 w-4 text-green-600" />
        </div>
      )}
      <span>{feature}</span>
    </div>
  )
}
