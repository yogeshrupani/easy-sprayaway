"use client"

import { useState, useEffect } from "react"

interface UsePopupVisibilityProps {
  delay?: number
  sessionKey?: string
  showOncePerSession?: boolean
  minTimeBetweenShows?: number
}

export function usePopupVisibility({
  delay = 5000,
  sessionKey = "popup_shown",
  showOncePerSession = false,
  minTimeBetweenShows = 0,
}: UsePopupVisibilityProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if we should show the popup
    const shouldShowPopup = () => {
      if (typeof window === "undefined") return false

      // If we only want to show once per session
      if (showOncePerSession) {
        const hasShown = sessionStorage.getItem(sessionKey)
        if (hasShown) return false
      }

      // Check if enough time has passed since last show
      if (minTimeBetweenShows > 0) {
        const lastShownTime = localStorage.getItem(`${sessionKey}_time`)
        if (lastShownTime) {
          const timeSinceLastShow = Date.now() - Number.parseInt(lastShownTime, 10)
          if (timeSinceLastShow < minTimeBetweenShows) return false
        }
      }

      return true
    }

    // Set up the timer to show the popup
    let timer: NodeJS.Timeout
    if (shouldShowPopup()) {
      timer = setTimeout(() => {
        setIsVisible(true)

        // Mark as shown in session storage
        if (showOncePerSession) {
          sessionStorage.setItem(sessionKey, "true")
        }

        // Record the time it was shown
        if (minTimeBetweenShows > 0) {
          localStorage.setItem(`${sessionKey}_time`, Date.now().toString())
        }
      }, delay)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [delay, sessionKey, showOncePerSession, minTimeBetweenShows])

  const hidePopup = () => {
    setIsVisible(false)
  }

  return { isVisible, hidePopup }
}
