"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface DataPoint {
  month: string
  standard: number
  withSuperQuilt: number
}

interface EnergyCostLineChartProps {
  data: DataPoint[]
  height?: number
  animate?: boolean
}

export default function EnergyCostLineChart({ data, height = 300, animate = true }: EnergyCostLineChartProps) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
  const [isInView, setIsInView] = useState(false)
  const chartRef = useRef<HTMLDivElement>(null)
  const padding = { top: 20, right: 20, bottom: 40, left: 40 }

  // Calculate max value for scaling
  const allValues = data.flatMap((d) => [d.standard, d.withSuperQuilt])
  const maxValue = Math.max(...allValues)
  const minValue = Math.min(...allValues)

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

  // Calculate positions
  const getX = (index: number) => {
    const availableWidth = 100 - (padding.left + padding.right) / 10
    const step = availableWidth / (data.length - 1)
    return padding.left / 10 + index * step
  }

  const getY = (value: number) => {
    const availableHeight = 100 - (padding.top + padding.bottom) / 10
    return 100 - (padding.bottom / 10 + ((value - minValue) / (maxValue - minValue)) * availableHeight)
  }

  // Generate SVG paths
  const generatePath = (values: number[]) => {
    return values
      .map((value, index) => {
        const x = getX(index)
        const y = getY(value)
        return `${index === 0 ? "M" : "L"} ${x} ${y}`
      })
      .join(" ")
  }

  const standardPath = generatePath(data.map((d) => d.standard))
  const superQuiltPath = generatePath(data.map((d) => d.withSuperQuilt))

  return (
    <div ref={chartRef} style={{ height: `${height}px` }} className="w-full relative">
      {/* Y-axis */}
      <div
        className="absolute h-full border-r border-gray-300 flex flex-col justify-between text-xs text-gray-500"
        style={{ left: `${padding.left - 10}px`, top: `${padding.top}px`, bottom: `${padding.bottom}px` }}
      >
        <div className="transform -translate-y-1/2 -translate-x-full font-medium">£{maxValue}</div>
        <div className="transform -translate-y-1/2 -translate-x-full">£{Math.round((maxValue + minValue) / 2)}</div>
        <div className="transform -translate-y-1/2 -translate-x-full font-medium">£{minValue}</div>
      </div>

      {/* X-axis */}
      <div
        className="absolute w-full flex justify-between text-xs text-gray-500"
        style={{ left: `${padding.left}px`, right: `${padding.right}px`, bottom: "10px" }}
      >
        {data.map((point, index) => (
          <motion.div
            key={index}
            className="transform -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
          >
            {point.month}
          </motion.div>
        ))}
      </div>

      {/* Chart area */}
      <svg
        viewBox={`0 0 100 100`}
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full overflow-visible"
      >
        {/* Horizontal grid lines */}
        <motion.line
          x1={padding.left / 10}
          y1={getY(minValue)}
          x2={100 - padding.right / 10}
          y2={getY(minValue)}
          stroke="#e5e7eb"
          strokeWidth="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
        <motion.line
          x1={padding.left / 10}
          y1={getY((maxValue + minValue) / 2)}
          x2={100 - padding.right / 10}
          y2={getY((maxValue + minValue) / 2)}
          stroke="#e5e7eb"
          strokeWidth="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.line
          x1={padding.left / 10}
          y1={getY(maxValue)}
          x2={100 - padding.right / 10}
          y2={getY(maxValue)}
          stroke="#e5e7eb"
          strokeWidth="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Savings area */}
        <motion.path
          d={`${standardPath} L ${getX(data.length - 1)} ${getY(data[data.length - 1].withSuperQuilt)} ${superQuiltPath
            .split(" ")
            .reverse()
            .join(" ")
            .replace("M", "L")} Z`}
          fill="url(#savings-gradient)"
          fillOpacity="0.2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* Lines */}
        <motion.path
          d={standardPath}
          fill="none"
          stroke="#ef4444"
          strokeWidth="0.5"
          initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d={superQuiltPath}
          fill="none"
          stroke="#0070f3"
          strokeWidth="0.5"
          initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Data points */}
        {data.map((point, index) => (
          <g key={`standard-${index}`}>
            <motion.circle
              cx={getX(index)}
              cy={getY(point.standard)}
              r="1"
              fill="#ef4444"
              initial={animate ? { r: 0 } : { r: 1 }}
              animate={{ r: hoveredPoint === index ? 1.8 : 1 }}
              transition={{ duration: 0.3, delay: animate && isInView ? 1.5 + index * 0.1 : 0 }}
              onMouseEnter={() => setHoveredPoint(index)}
              onMouseLeave={() => setHoveredPoint(null)}
              style={{ cursor: "pointer" }}
              className="data-point"
            />
            <AnimatePresence>
              {hoveredPoint === index && (
                <motion.g
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <rect
                    x={getX(index) - 8}
                    y={getY(point.standard) - 10}
                    width="16"
                    height="7"
                    rx="2"
                    fill="#1f2937"
                    className="glow"
                  />
                  <text
                    x={getX(index)}
                    y={getY(point.standard) - 5.5}
                    textAnchor="middle"
                    fill="white"
                    fontSize="3"
                    fontWeight="bold"
                  >
                    £{point.standard}
                  </text>
                </motion.g>
              )}
            </AnimatePresence>
          </g>
        ))}

        {data.map((point, index) => (
          <g key={`superquilt-${index}`}>
            <motion.circle
              cx={getX(index)}
              cy={getY(point.withSuperQuilt)}
              r="1"
              fill="#0070f3"
              initial={animate ? { r: 0 } : { r: 1 }}
              animate={{ r: hoveredPoint === index ? 1.8 : 1 }}
              transition={{ duration: 0.3, delay: animate && isInView ? 1.5 + index * 0.1 : 0 }}
              onMouseEnter={() => setHoveredPoint(index)}
              onMouseLeave={() => setHoveredPoint(null)}
              style={{ cursor: "pointer" }}
              className="data-point"
            />
            <AnimatePresence>
              {hoveredPoint === index && (
                <motion.g
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <rect
                    x={getX(index) - 8}
                    y={getY(point.withSuperQuilt) - 10}
                    width="16"
                    height="7"
                    rx="2"
                    fill="#1f2937"
                    className="glow"
                  />
                  <text
                    x={getX(index)}
                    y={getY(point.withSuperQuilt) - 5.5}
                    textAnchor="middle"
                    fill="white"
                    fontSize="3"
                    fontWeight="bold"
                  >
                    £{point.withSuperQuilt}
                  </text>
                </motion.g>
              )}
            </AnimatePresence>
          </g>
        ))}

        {/* Savings indicators */}
        {hoveredPoint !== null && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <line
              x1={getX(hoveredPoint)}
              y1={getY(data[hoveredPoint].standard)}
              x2={getX(hoveredPoint)}
              y2={getY(data[hoveredPoint].withSuperQuilt)}
              stroke="#10b981"
              strokeWidth="0.3"
              strokeDasharray="0.5,0.5"
            />
            <rect
              x={getX(hoveredPoint) + 2}
              y={(getY(data[hoveredPoint].standard) + getY(data[hoveredPoint].withSuperQuilt)) / 2 - 5}
              width="14"
              height="7"
              rx="2"
              fill="#10b981"
              className="glow"
            />
            <text
              x={getX(hoveredPoint) + 9}
              y={(getY(data[hoveredPoint].standard) + getY(data[hoveredPoint].withSuperQuilt)) / 2 - 1.5}
              textAnchor="middle"
              fill="white"
              fontSize="3"
              fontWeight="bold"
            >
              -£{data[hoveredPoint].standard - data[hoveredPoint].withSuperQuilt}
            </text>
          </motion.g>
        )}

        <defs>
          <linearGradient id="savings-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0070f3" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0070f3" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Legend */}
      <div className="absolute top-2 right-2 flex items-center space-x-4 text-xs bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-1 shine"></div>
          <span className="font-medium">Standard</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-primary rounded-full mr-1 shine"></div>
          <span className="font-medium">With SuperQuilt</span>
        </div>
      </div>
    </div>
  )
}
