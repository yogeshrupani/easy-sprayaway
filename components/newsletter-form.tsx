"use client"

import { useState } from "react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Mail } from "lucide-react"
import { FormInput, FormCheckbox, FormButton, FormSuccess, FormError } from "@/components/ui/form-elements"

// Form schema with validation
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive marketing emails",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function NewsletterForm({ className = "" }: { className?: string }) {
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
      email: "",
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
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <FormSuccess message="Thank you for subscribing to our newsletter! You'll receive updates on our latest services and promotions." />
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="your@email.com"
          icon={<Mail className="h-4 w-4" />}
          required
          error={errors.email?.message}
          {...register("email")}
        />

        <FormCheckbox name="consent" error={errors.consent?.message} {...register("consent")}>
          I agree to receive marketing emails from Easy-Sprayaway about services, promotions, and news.
        </FormCheckbox>

        {submitError && <FormError message={submitError} />}

        <FormButton type="submit" isLoading={isSubmitting} className="w-full">
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </FormButton>
      </form>
    </div>
  )
}
