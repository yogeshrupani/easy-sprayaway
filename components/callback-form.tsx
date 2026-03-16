"use client"

import { useState } from "react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { User, Phone, Clock } from "lucide-react"
import { FormInput, FormSelect, FormCheckbox, FormButton, FormSuccess, FormError } from "@/components/ui/form-elements"

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid phone number" })
    .regex(/^[0-9+\s()-]+$/, { message: "Please enter a valid phone number" }),
  preferredTime: z.string({ required_error: "Please select a preferred time" }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to our privacy policy",
  }),
})

type FormValues = z.infer<typeof formSchema>

const timeOptions = [
  { value: "morning", label: "Morning (9am - 12pm)" },
  { value: "afternoon", label: "Afternoon (12pm - 5pm)" },
  { value: "evening", label: "Evening (5pm - 7pm)" },
  { value: "anytime", label: "Anytime during business hours" },
]

export default function CallbackForm({ className = "" }: { className?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      preferredTime: "",
      consent: false,
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // This would be replaced with an actual API call to submit the form
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demonstration purposes only
      console.log(values)

      setSubmitSuccess(true)
      reset()
    } catch (err) {
      setSubmitError("Something went wrong. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <FormSuccess message="Thank you! We've received your callback request and will contact you at your preferred time." />
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          label="Full Name"
          name="name"
          placeholder="John Smith"
          icon={<User className="h-4 w-4" />}
          required
          error={errors.name?.message}
          {...register("name")}
        />

        <FormInput
          label="Phone Number"
          name="phone"
          placeholder="07123 456789"
          icon={<Phone className="h-4 w-4" />}
          required
          error={errors.phone?.message}
          {...register("phone")}
        />

        <FormSelect
          label="Preferred Time for Callback"
          name="preferredTime"
          options={timeOptions}
          icon={<Clock className="h-4 w-4" />}
          required
          error={errors.preferredTime?.message}
          {...register("preferredTime")}
        />

        <FormCheckbox name="consent" error={errors.consent?.message} {...register("consent")}>
          I agree to be contacted by phone regarding Easy-Sprayaway services.
        </FormCheckbox>

        {submitError && <FormError message={submitError} />}

        <FormButton type="submit" isLoading={isSubmitting} className="w-full">
          {isSubmitting ? "Requesting..." : "Request Callback"}
        </FormButton>
      </form>
    </div>
  )
}
