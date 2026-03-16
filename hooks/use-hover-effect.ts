"use client"

import { useState, useCallback } from "react"

type HoverState = {
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}

export function useHoverEffect(): HoverState {
  const [isHovered, setIsHovered] = useState(false)

  const onHoverStart = useCallback(() => {
    setIsHovered(true)
  }, [])

  const onHoverEnd = useCallback(() => {
    setIsHovered(false)
  }, [])

  return { isHovered, onHoverStart, onHoverEnd }
}
