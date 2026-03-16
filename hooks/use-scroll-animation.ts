"use client"

import { useEffect, useState, useRef, type RefObject } from "react"

type AnimationOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: AnimationOptions = {},
): [RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = "0px", once = true, delay = 0 } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            if (delay) {
              setTimeout(() => {
                setIsVisible(true)
              }, delay)
            } else {
              setIsVisible(true)
            }
          } else if (!entry.isIntersecting && !once && isVisible) {
            setIsVisible(false)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, once, isVisible, delay])

  return [ref, isVisible]
}
