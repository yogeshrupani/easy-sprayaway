"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PieChartData {
  label: string
  value: number
  color: string
}

interface EnergySavingsPieChartProps {
  data: PieChartData[]
  height?: number
  animate?: boolean
}

export default function EnergySavingsPieChart({ data, height = 300, animate = true }: EnergySavingsPieChartProps) {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [isRotating, setIsRotating] = useState(false)
  const chartRef = useRef<HTMLDivElement>(null)
  const total = data.reduce((sum, item) => sum + item.value, 0)
  const radius = 40
  const centerX = 50
  const centerY = 50

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.3 },
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current)
      }
    }
  }, [])

  // Calculate the start and end angles for each segment
  let startAngle = 0
  const segments = data.map((item, index) => {
    const angle = (item.value / total) * 360
    const endAngle = startAngle + angle

    // Calculate the SVG arc path
    const startRad = (startAngle - 90) * (Math.PI / 180)
    const endRad = (endAngle - 90) * (Math.PI / 180)

    const x1 = centerX + radius * Math.cos(startRad)
    const y1 = centerY + radius * Math.sin(startRad)
    const x2 = centerX + radius * Math.cos(endRad)
    const y2 = centerY + radius * Math.sin(endRad)

    const largeArcFlag = angle > 180 ? 1 : 0

    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      "Z",
    ].join(" ")

    const segment = {
      pathData,
      color: item.color,
      label: item.label,
      value: item.value,
      percentage: Math.round((item.value / total) * 100),
      startAngle,
      endAngle,
    }

    startAngle = endAngle
    return segment
  })

  // Calculate position for label
  const getLabelPosition = (startAngle: number, endAngle: number, offset = 15) => {
    const angle = ((startAngle + endAngle) / 2 - 90) * (Math.PI / 180)
    return {
      x: centerX + (radius + offset) * Math.cos(angle),
      y: centerY + (radius + offset) * Math.sin(angle),
    }
  }

  const handleChartClick = () => {
    if (!isRotating) {
      setIsRotating(true)
      setTimeout(() => setIsRotating(false), 1000)
    }
  }

  return (
    <div ref={chartRef} style={{ height: `${height}px` }} className="w-full relative">
      <svg viewBox="0 0 100 100" className="w-full h-full cursor-pointer" onClick={handleChartClick}>
        {/* Pie segments */}
        <g>
          {segments.map((segment, index) => {
            const isHovered = hoveredSegment === index
            const labelPos = getLabelPosition(segment.startAngle, segment.endAngle, isHovered ? 20 : 15)

            return (
              <g key={index}>
                <motion.path
                  d={segment.pathData}
                  fill={segment.color}
                  stroke="white"
                  strokeWidth="0.5"
                  initial={
                    animate ? { opacity: 0, scale: 0.8, transformOrigin: "50px 50px" } : { opacity: 1, scale: 1 }
                  }
                  animate={{
                    opacity: isInView ? 1 : 0,
                    scale: isHovered ? 1.05 : 1,
                    rotate: isRotating ? 360 : 0,
                    transformOrigin: "50px 50px",
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: animate ? index * 0.1 : 0 },
                    scale: { duration: 0.3 },
                    rotate: { duration: 1, ease: "easeInOut" },
                  }}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  className="data-point"
                />

                {/* Segment value in center when hovered */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.g
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <circle cx={centerX} cy={centerY} r={radius * 0.6} fill="white" className="glow" />
                      <text
                        x={centerX}
                        y={centerY - 2}
                        textAnchor="middle"
                        fontSize="6"
                        fontWeight="bold"
                        fill={segment.color}
                      >
                        £{segment.value}
                      </text>
                      <text x={centerX} y={centerY + 5} textAnchor="middle" fontSize="3" fill="#6b7280">
                        {segment.label}
                      </text>
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Label lines and text */}
                <AnimatePresence>
                  {(isHovered || !animate || isInView) && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: animate ? 0.5 + index * 0.1 : 0 }}
                    >
                      <motion.line
                        x1={
                          centerX +
                          radius * Math.cos(((segment.startAngle + segment.endAngle) / 2 - 90) * (Math.PI / 180))
                        }
                        y1={
                          centerY +
                          radius * Math.sin(((segment.startAngle + segment.endAngle) / 2 - 90) * (Math.PI / 180))
                        }
                        x2={labelPos.x}
                        y2={labelPos.y}
                        stroke={segment.color}
                        strokeWidth="0.2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: animate ? 0.5 + index * 0.1 : 0 }}
                      />
                      <motion.g
                        initial={{ opacity: 0, x: labelPos.x > centerX ? -10 : 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: animate ? 0.8 + index * 0.1 : 0 }}
                      >
                        <rect
                          x={labelPos.x + (labelPos.x > centerX ? 1 : -16)}
                          y={labelPos.y - 4}
                          width="15"
                          height="8"
                          rx="2"
                          fill={segment.color}
                          fillOpacity="0.2"
                        />
                        <text
                          x={labelPos.x + (labelPos.x > centerX ? 8 : -8)}
                          y={labelPos.y}
                          textAnchor={labelPos.x > centerX ? "middle" : "middle"}
                          alignmentBaseline="middle"
                          fontSize="3"
                          fontWeight="bold"
                          fill={segment.color}
                        >
                          {segment.percentage}%
                        </text>
                      </motion.g>
                    </motion.g>
                  )}
                </AnimatePresence>
              </g>
            )
          })}
        </g>

        {/* Center circle for donut effect */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius * 0.6}
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={isRotating ? "" : "shine"}
        />

        {/* Center text */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {!hoveredSegment && (
            <>
              <text
                x={centerX}
                y={centerY - 2}
                textAnchor="middle"
                fontSize="6"
                fontWeight="bold"
                fill="#111827"
                className="float"
              >
                £{total}
              </text>
              <text x={centerX} y={centerY + 5} textAnchor="middle" fontSize="3" fill="#6b7280">
                Annual Savings
              </text>
            </>
          )}
        </motion.g>

        {/* Click hint */}
        <motion.text
          x={centerX}
          y={90}
          textAnchor="middle"
          fontSize="2.5"
          fill="#6b7280"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView && !isRotating ? 0.7 : 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Click to animate
        </motion.text>
      </svg>

      {/* Legend */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center px-2 py-1 rounded-full"
            style={{ backgroundColor: `${item.color}20` }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
            onMouseEnter={() => setHoveredSegment(index)}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
            <span className="font-medium" style={{ color: item.color }}>
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
