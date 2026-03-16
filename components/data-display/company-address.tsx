"use client"

import { getFormattedAddress } from "@/lib/data-helpers"
import { companyInfo } from "@/data/company-info"

interface CompanyAddressProps {
  includeCountry?: boolean
  includePhone?: boolean
  includeEmail?: boolean
  className?: string
}

export function CompanyAddress({
  includeCountry = true,
  includePhone = false,
  includeEmail = false,
  className = "",
}: CompanyAddressProps) {
  const address = getFormattedAddress(includeCountry)

  return (
    <address className={`not-italic ${className}`}>
      {address}
      {includePhone && (
        <div className="mt-1">
          <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="hover:underline">
            {companyInfo.phone}
          </a>
        </div>
      )}
      {includeEmail && (
        <div className="mt-1">
          <a href={`mailto:${companyInfo.email}`} className="hover:underline">
            {companyInfo.email}
          </a>
        </div>
      )}
    </address>
  )
}
