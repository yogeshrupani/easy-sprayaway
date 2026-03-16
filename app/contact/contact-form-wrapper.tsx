"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Dynamically import the ContactForm component with SSR disabled
const ContactForm = dynamic(() => import("@/components/contact-form"), {
  ssr: false,
  loading: () => (
    <div className="p-6 text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      <p className="mt-4 text-gray-600">Loading form...</p>
    </div>
  ),
})

interface ContactFormWrapperProps {
  removePersonalInformation?: boolean
  removePreferredContactMethod?: boolean
}

export default function ContactFormWrapper({
  removePersonalInformation = false,
  removePreferredContactMethod = false,
}: ContactFormWrapperProps) {
  return (
    <Suspense
      fallback={
        <div className="p-6 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-gray-600">Loading form...</p>
        </div>
      }
    >
      <ContactForm
        removePersonalInformation={removePersonalInformation}
        removePreferredContactMethod={removePreferredContactMethod}
      />
    </Suspense>
  )
}
