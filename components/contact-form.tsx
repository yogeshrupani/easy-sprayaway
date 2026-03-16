"use client"

import { useState } from "react"
import Link from "next/link"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { User, Mail, Phone, MapPin, Building, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid phone number" })
    .regex(/^[0-9+\s()-]+$/, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Please enter your address" }),
  postcode: z.string().min(5, { message: "Please enter a valid postcode" }),
  service: z.string({ required_error: "Please select a service" }),
  contactPreference: z.enum(["email", "phone", "either"], {
    required_error: "Please select a contact preference",
  }),
  message: z.string().min(10, { message: "Please provide some details about your enquiry" }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to our privacy policy",
  }),
})

type FormValues = z.infer<typeof formSchema>

const serviceOptions = [
  { value: "superquilt", label: "SuperQuilt Loft Insulation" },
  { value: "roof-cleaning", label: "Roof Cleaning & Coating" },
  { value: "wall-driveway", label: "Wall & Driveway Cleaning" },
  { value: "other", label: "Other Services" },
]

const contactPreferenceOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "either", label: "Either" },
]

interface ContactFormProps {
  className?: string
  removePersonalInformation?: boolean
  removePreferredContactMethod?: boolean
}

export default function ContactForm({
  className = "",
  removePersonalInformation = false,
  removePreferredContactMethod = false,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      postcode: "",
      service: "",
      contactPreference: "either",
      message: "",
      consent: false,
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Submit form data to API route
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          formType: "Contact Page Form",
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitSuccess(true)
        form.reset()
      } else {
        setSubmitError(result.error || "Something went wrong. Please try again or contact us directly.")
      }
    } catch (err) {
      setSubmitError("Something went wrong. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="rounded-xl border border-green-100 bg-green-50 p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you for your enquiry!</h3>
        <p className="text-green-700">
          We've received your details and will contact you shortly to arrange your free survey.
        </p>
        <p className="mt-4 text-sm text-green-600">A confirmation has been sent to your email address.</p>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {!removePersonalInformation && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <User className="h-4 w-4" />
                </div>
                <Input
                  id="name"
                  className="pl-10 min-h-[44px] rounded-md border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="John Smith"
                  {...form.register("name")}
                />
              </div>
              {form.formState.errors.name && (
                <p className="text-sm text-red-600 mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    className="pl-10 min-h-[44px] rounded-md border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="john@example.com"
                    {...form.register("email")}
                  />
                </div>
                {form.formState.errors.email && (
                  <p className="text-sm text-red-600 mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    className="pl-10 min-h-[44px] rounded-md border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="07123 456789"
                    {...form.register("phone")}
                  />
                </div>
                {form.formState.errors.phone && (
                  <p className="text-sm text-red-600 mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Property Details</h3>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Building className="h-4 w-4" />
              </div>
              <Input
                id="address"
                className="pl-10 min-h-[44px] rounded-md border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="123 Main Street"
                {...form.register("address")}
              />
            </div>
            {form.formState.errors.address && (
              <p className="text-sm text-red-600 mt-1">{form.formState.errors.address.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
              Postcode <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <MapPin className="h-4 w-4" />
              </div>
              <Input
                id="postcode"
                className="pl-10 min-h-[44px] rounded-md border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="G1 2AB"
                {...form.register("postcode")}
              />
            </div>
            {form.formState.errors.postcode && (
              <p className="text-sm text-red-600 mt-1">{form.formState.errors.postcode.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Service Information</h3>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service Required <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              className="w-full min-h-[44px] rounded-md border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary px-3 py-2 bg-white"
              {...form.register("service")}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {form.formState.errors.service && (
              <p className="text-sm text-red-600 mt-1">{form.formState.errors.service.message}</p>
            )}
          </div>

          {!removePreferredContactMethod && (
            <div>
              <label htmlFor="contactPreference" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Contact Method <span className="text-red-500">*</span>
              </label>
              <select
                id="contactPreference"
                className="w-full min-h-[44px] rounded-md border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary px-3 py-2 bg-white"
                {...form.register("contactPreference")}
              >
                <option value="">Select contact preference</option>
                {contactPreferenceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {form.formState.errors.contactPreference && (
                <p className="text-sm text-red-600 mt-1">{form.formState.errors.contactPreference.message}</p>
              )}
            </div>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              placeholder="Please provide details about your requirements, including any specific questions or the best time to contact you..."
              className="min-h-[120px] rounded-md border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary"
              {...form.register("message")}
            />
            {form.formState.errors.message && (
              <p className="text-sm text-red-600 mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-slate-200 p-4 shadow-sm">
          <input type="checkbox" id="consent" className="mt-1" {...form.register("consent")} />
          <div className="space-y-1 leading-none">
            <label htmlFor="consent" className="text-sm text-gray-700">
              By submitting this form, you agree to our{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                privacy policy
              </Link>
              . <span className="text-red-500">*</span>
            </label>
            {form.formState.errors.consent && (
              <p className="text-sm text-red-600 mt-1">{form.formState.errors.consent.message}</p>
            )}
          </div>
        </div>

        {submitError && (
          <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <p>{submitError}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white min-h-[48px] rounded-md relative overflow-hidden group"
        >
          <span
            className={`flex items-center justify-center transition-opacity duration-200 ${isSubmitting ? "opacity-0" : "opacity-100"}`}
          >
            Submit Enquiry
          </span>
          {isSubmitting && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-5 w-5 animate-spin text-white" />
            </div>
          )}
          <span className="absolute inset-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
        </Button>

        <p className="text-xs text-gray-500 text-center mt-4">
          We typically respond within 24 hours. For urgent inquiries, please call us directly at{" "}
          <a href="tel:+448004332068" className="text-primary hover:underline">
            0800 433 2068
          </a>
          .
        </p>
      </form>
    </div>
  )
}
