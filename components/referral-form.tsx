"use client"

import { useState } from "react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { User, Mail, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { submitReferralForm, type ReferralFormData } from "@/actions/submit-referral-form"

// Form schema with validation
const formSchema = z.object({
  yourName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  yourEmail: z.string().email({ message: "Please enter a valid email address" }),
  yourPhone: z
    .string()
    .min(10, { message: "Please enter a valid phone number" })
    .regex(/^[0-9+\s()-]+$/, { message: "Please enter a valid phone number" }),
  friendName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  friendEmail: z.string().email({ message: "Please enter a valid email address" }),
  friendPhone: z
    .string()
    .min(10, { message: "Please enter a valid phone number" })
    .regex(/^[0-9+\s()-]+$/, { message: "Please enter a valid phone number" }),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to our privacy policy",
  }),
  friendConsent: z.boolean().refine((val) => val === true, {
    message: "You must confirm you have your friend's permission",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function ReferralForm({ className = "" }: { className?: string }) {
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
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      friendName: "",
      friendEmail: "",
      friendPhone: "",
      message: "",
      consent: false,
      friendConsent: false,
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const result = await submitReferralForm(values as ReferralFormData)

      if (result.success) {
        setSubmitSuccess(true)
        reset()
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
      <div className="rounded-lg bg-green-50 p-4 border border-green-100">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">Success</h3>
            <div className="mt-2 text-sm text-green-700">
              <p>
                Thank you for your referral! We'll contact your friend shortly. Once they complete a project with us,
                you'll receive your £250 reward.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Your Information</h3>
          <p className="text-sm text-gray-500">Tell us about yourself</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="yourName">
                Your Name <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <User className="h-4 w-4" />
                </div>
                <Input
                  id="yourName"
                  className={cn(
                    "pl-10",
                    errors.yourName ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "",
                  )}
                  placeholder="John Smith"
                  {...register("yourName")}
                />
              </div>
              {errors.yourName && (
                <p className="text-xs text-red-500 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.yourName.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="yourEmail">
                  Your Email <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Mail className="h-4 w-4" />
                  </div>
                  <Input
                    id="yourEmail"
                    type="email"
                    className={cn(
                      "pl-10",
                      errors.yourEmail ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "",
                    )}
                    placeholder="john@example.com"
                    {...register("yourEmail")}
                  />
                </div>
                {errors.yourEmail && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.yourEmail.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="yourPhone">
                  Your Phone Number <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Phone className="h-4 w-4" />
                  </div>
                  <Input
                    id="yourPhone"
                    className={cn(
                      "pl-10",
                      errors.yourPhone ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "",
                    )}
                    placeholder="07123 456789"
                    {...register("yourPhone")}
                  />
                </div>
                {errors.yourPhone && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.yourPhone.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Friend's Information</h3>
          <p className="text-sm text-gray-500">Tell us about the person you're referring</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="friendName">
                Friend's Name <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <User className="h-4 w-4" />
                </div>
                <Input
                  id="friendName"
                  className={cn(
                    "pl-10",
                    errors.friendName ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "",
                  )}
                  placeholder="Jane Doe"
                  {...register("friendName")}
                />
              </div>
              {errors.friendName && (
                <p className="text-xs text-red-500 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.friendName.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="friendEmail">
                  Friend's Email <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Mail className="h-4 w-4" />
                  </div>
                  <Input
                    id="friendEmail"
                    type="email"
                    className={cn(
                      "pl-10",
                      errors.friendEmail ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "",
                    )}
                    placeholder="jane@example.com"
                    {...register("friendEmail")}
                  />
                </div>
                {errors.friendEmail && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.friendEmail.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="friendPhone">
                  Friend's Phone Number <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Phone className="h-4 w-4" />
                  </div>
                  <Input
                    id="friendPhone"
                    className={cn(
                      "pl-10",
                      errors.friendPhone ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : "",
                    )}
                    placeholder="07123 456789"
                    {...register("friendPhone")}
                  />
                </div>
                {errors.friendPhone && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.friendPhone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Personal Message (Optional)</Label>
              <Textarea
                id="message"
                className={errors.message ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" : ""}
                placeholder="Add a personal message to your friend..."
                {...register("message")}
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="friendConsent"
              className={errors.friendConsent ? "border-red-300 data-[state=checked]:bg-primary" : ""}
              {...register("friendConsent")}
            />
            <div>
              <Label
                htmlFor="friendConsent"
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I confirm I have my friend's permission to share their contact details with Easy-Sprayaway.
              </Label>
              {errors.friendConsent && (
                <p className="text-xs text-red-500 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.friendConsent.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              className={errors.consent ? "border-red-300 data-[state=checked]:bg-primary" : ""}
              {...register("consent")}
            />
            <div>
              <Label
                htmlFor="consent"
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to Easy-Sprayaway's privacy policy and terms regarding the £250 referral reward.
              </Label>
              {errors.consent && (
                <p className="text-xs text-red-500 mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.consent.message}
                </p>
              )}
            </div>
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
          className="w-full relative overflow-hidden transition-all duration-300 bg-primary hover:bg-primary-dark text-white"
        >
          <span className={cn("flex items-center justify-center", isSubmitting ? "invisible" : "")}>
            {isSubmitting ? "Submitting..." : "Submit Referral"}
          </span>
          {isSubmitting && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          )}
        </Button>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mt-6">
          <h4 className="font-medium text-gray-900 flex items-center">
            <Users className="h-4 w-4 mr-2 text-primary" />
            How the £250 Referral Reward Works
          </h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>• Your friend must complete a project with a minimum value of £1,000</li>
            <li>• The reward is paid after project completion and final payment</li>
            <li>• There's no limit to how many friends you can refer</li>
            <li>• Reward is paid via bank transfer or check within 30 days</li>
          </ul>
        </div>
      </form>
    </div>
  )
}
