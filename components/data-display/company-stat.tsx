"use client"

import { getCompanyStat } from "@/lib/data-helpers"

interface CompanyStatProps {
  statName: "projectsCompleted" | "yearsExperience" | "customerSatisfaction" | "customerRating"
  className?: string
}

export function CompanyStat({ statName, className = "" }: CompanyStatProps) {
  const statValue = getCompanyStat(statName)

  return <span className={className}>{statValue}</span>
}
