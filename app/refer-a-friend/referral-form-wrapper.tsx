"use client"

import { Suspense, lazy } from "react"
import { Loader2 } from "lucide-react"

// Dynamically import the ReferralForm component with SSR disabled
const ReferralForm = lazy(() => import("@/components/referral-form"))

export default function ReferralFormWrapper() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center p-12 border border-gray-100 rounded-lg bg-gray-50">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <span className="ml-2 text-gray-500">Loading form...</span>
        </div>
      }
    >
      <ReferralForm />
    </Suspense>
  )
}
