"use client"

import { motion } from "framer-motion"

type PatternType = "dots" | "circles" | "grid" | "waves" | "zigzag"

interface DecorativePatternProps {
  pattern: PatternType
  className?: string
}

export function DecorativePattern({ pattern, className = "w-24 h-24" }: DecorativePatternProps) {
  const renderPattern = () => {
    switch (pattern) {
      case "dots":
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <g fill="currentColor">
              {Array.from({ length: 10 }).map((_, rowIndex) =>
                Array.from({ length: 10 }).map((_, colIndex) => (
                  <circle
                    key={`${rowIndex}-${colIndex}`}
                    cx={5 + colIndex * 10}
                    cy={5 + rowIndex * 10}
                    r={2}
                    opacity={Math.random() * 0.5 + 0.25}
                  />
                )),
              )}
            </g>
          </svg>
        )
      case "circles":
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <g fill="none" stroke="currentColor" strokeWidth="0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <circle key={index} cx="50" cy="50" r={10 + index * 10} opacity={(5 - index) * 0.15} />
              ))}
            </g>
          </svg>
        )
      case "grid":
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <g stroke="currentColor" strokeWidth="0.5">
              {Array.from({ length: 11 }).map((_, index) => (
                <line key={`h-${index}`} x1="0" y1={index * 10} x2="100" y2={index * 10} opacity="0.2" />
              ))}
              {Array.from({ length: 11 }).map((_, index) => (
                <line key={`v-${index}`} x1={index * 10} y1="0" x2={index * 10} y2="100" opacity="0.2" />
              ))}
            </g>
          </svg>
        )
      case "waves":
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <g fill="none" stroke="currentColor" strokeWidth="0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <path
                  key={index}
                  d="M0,50 Q25,30 50,50 T100,50"
                  transform={`translate(0, ${index * 10 - 20})`}
                  opacity={(5 - index) * 0.15}
                />
              ))}
            </g>
          </svg>
        )
      case "zigzag":
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <g fill="none" stroke="currentColor" strokeWidth="0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <path
                  key={index}
                  d="M0,50 L20,30 L40,50 L60,30 L80,50 L100,30"
                  transform={`translate(0, ${index * 10 - 20})`}
                  opacity={(5 - index) * 0.15}
                />
              ))}
            </g>
          </svg>
        )
      default:
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <g fill="currentColor">
              {Array.from({ length: 10 }).map((_, rowIndex) =>
                Array.from({ length: 10 }).map((_, colIndex) => (
                  <circle
                    key={`${rowIndex}-${colIndex}`}
                    cx={5 + colIndex * 10}
                    cy={5 + rowIndex * 10}
                    r={2}
                    opacity={Math.random() * 0.5 + 0.25}
                  />
                )),
              )}
            </g>
          </svg>
        )
    }
  }

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      {renderPattern()}
    </motion.div>
  )
}
