"use client"

import { Button } from "@/components/ui/button"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useFormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { Loader2 } from "lucide-react"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: React.ReactNode
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({ className, label, icon, ...props }, ref) => {
  const { formItemId, isRequired, value, error, disabled, onBlur, onChange } = useFormField()
  return (
    <FormItem>
      {label && (
        <FormLabel htmlFor={formItemId}>
          {label}
          {isRequired && " *"}
        </FormLabel>
      )}
      <FormControl>
        <div className="relative">
          {icon && (
            <div className="pointer-events-none absolute left-3.5 top-0 flex h-10 w-10 items-center justify-center text-muted-foreground">
              {icon}
            </div>
          )}
          <input
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              icon ? "pl-10" : "",
              className,
            )}
            id={formItemId}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? `${formItemId}-error` : undefined}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
            {...props}
          />
        </div>
      </FormControl>
      {error && (
        <FormMessage id={`${formItemId}-error`} className="text-destructive">
          {error}
        </FormMessage>
      )}
    </FormItem>
  )
})
FormInput.displayName = "FormInput"

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(({ className, label, ...props }, ref) => {
  const { formItemId, isRequired, value, error, disabled, onBlur, onChange } = useFormField()
  return (
    <FormItem>
      {label && (
        <FormLabel htmlFor={formItemId}>
          {label}
          {isRequired && " *"}
        </FormLabel>
      )}
      <FormControl>
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          id={formItemId}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${formItemId}-error` : undefined}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          {...props}
        />
      </FormControl>
      {error && (
        <FormMessage id={`${formItemId}-error`} className="text-destructive">
          {error}
        </FormMessage>
      )}
    </FormItem>
  )
})
FormTextarea.displayName = "FormTextarea"

interface FormSelectProps {
  label?: string
  options: { value: string; label: string }[]
}

const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(({ label, options, ...props }, ref) => {
  const { formItemId, isRequired, value, error, disabled, onBlur, onChange } = useFormField()

  return (
    <FormItem>
      {label && (
        <FormLabel htmlFor={formItemId}>
          {label}
          {isRequired && " *"}
        </FormLabel>
      )}
      <FormControl>
        <select
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            props.className,
          )}
          id={formItemId}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${formItemId}-error` : undefined}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormControl>
      {error && (
        <FormMessage id={`${formItemId}-error`} className="text-destructive">
          {error}
        </FormMessage>
      )}
    </FormItem>
  )
})
FormSelect.displayName = "FormSelect"

interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const FormCheckbox = React.forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ className, label, children, ...props }, ref) => {
    const { formItemId, isRequired, value, error, disabled, onBlur, onChange } = useFormField()

    return (
      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
        <FormControl>
          <input
            type="checkbox"
            className="flex h-4 w-4 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            id={formItemId}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? `${formItemId}-error` : undefined}
            checked={value}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
            {...props}
          />
        </FormControl>
        <div className="space-y-1 leading-none">
          {label && (
            <FormLabel htmlFor={formItemId}>
              {label}
              {isRequired && " *"}
            </FormLabel>
          )}
          {children && <FormDescription>{children}</FormDescription>}
          {error && (
            <FormMessage id={`${formItemId}-error`} className="text-destructive">
              {error}
            </FormMessage>
          )}
        </div>
      </FormItem>
    )
  },
)
FormCheckbox.displayName = "FormCheckbox"

export function FormButton({
  children,
  isLoading = false,
  className,
  ...props
}: {
  children: React.ReactNode
  isLoading?: boolean
  className?: string
  [key: string]: any
}) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-300 bg-primary hover:bg-primary-dark text-white",
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      <span className={cn("flex items-center justify-center", isLoading ? "invisible" : "")}>{children}</span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-5 w-5 animate-spin" />
        </div>
      )}
    </Button>
  )
}

interface FormSuccessProps {
  message: string
}

export function FormSuccess({ message }: FormSuccessProps) {
  return (
    <div className="rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-700">
      <p>{message}</p>
    </div>
  )
}

interface FormErrorProps {
  message: string
}

export function FormError({ message }: FormErrorProps) {
  return (
    <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
      <p>{message}</p>
    </div>
  )
}

interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
}

export function FormSection({ title, description, children, className }: FormSectionProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      <div>{children}</div>
    </div>
  )
}

export { FormInput, FormSelect, FormCheckbox, FormTextarea }
