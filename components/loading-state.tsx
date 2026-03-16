"use client"

import { Loader2 } from "lucide-react"

interface LoadingStateProps {
  message?: string
  className?: string
}

export function LoadingState({ message = "Loading...", className = "" }: LoadingStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-4" />
      <p className="text-slate-600">{message}</p>
    </div>
  )
}
