"use client"

import type React from "react"

import { PrismicProvider as BasePrismicProvider } from "@prismicio/react"
import { PrismicPreview } from "@prismicio/next"
import { repositoryName } from "@/prismicio"

export function PrismicProvider({ children }: { children: React.ReactNode }) {
  return (
    <BasePrismicProvider>
      <PrismicPreview repositoryName={repositoryName}>{children}</PrismicPreview>
    </BasePrismicProvider>
  )
}
