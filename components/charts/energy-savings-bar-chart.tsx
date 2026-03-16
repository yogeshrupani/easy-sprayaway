"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface BarChartData {
  label: string
  value: number
  color: string
  savings?: number
}

interface EnergySavingsBarChartProps {
  data: BarChartData[]
  height?: number
  showSavings?: boolean
  animate?: boolean
}

export default function EnergySavingsBarChart({
  data,
  height = 300,
  showSavings = true,
  animate = true,
}: EnergySavingsBarChartProps) {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  const [isInView, setIsInView] = useState(false)
  const chartRef = useRef<HTMLDivElement>(null)
  const maxValue = Math.max(...data.map((item) => item.value))
  const padding = { top: 20, right: 20, bottom: 40, left: 40 }
  const chartWidth = 100 - (padding.left + padding.right) / 10
  const barWidth = chartWidth / data.length / 1.5

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

  return (
    <div ref={chartRef} style={{ height: `${height}px` }} className="w-full relative">
      {/* Y-axis */}
      <div
        className="absolute h-full border-r border-gray-300 flex flex-col justify-between text-xs text-gray-500"
        style={{ left: `${padding.left - 10}px`, top: `${padding.top}px`, bottom: `${padding.bottom}px` }}
      >
        <div className="transform -translate-y-1/2 -translate-x-full font-medium">£{maxValue}</div>
        <div className="transform -translate-y-1/2 -translate-x-full">£{Math.round(maxValue * 0.75)}</div>
        <div className="transform -translate-y-1/2 -translate-x-full">£{Math.round(maxValue * 0.5)}</div>
        <div className="transform -translate-y-1/2 -translate-x-full">£{Math.round(maxValue * 0.25)}</div>
        <div className="transform -translate-y-1/2 -translate-x-full font-medium">£0</div>
      </div>

      {/* Chart area */}
      <div
        className="absolute"
        style={{
          left: `${padding.left}px`,
          top: `${padding.top}px`,
          right: `${padding.right}px`,
          bottom: `${padding.bottom}px`,
        }}
      >
        {/* Horizontal grid lines */}
        {[0.25, 0.5, 0.75, 1].map((tick) => (
          <div
            key={tick}
            className="absolute w-full border-t border-gray-200"
            style={{ bottom: `${tick * 100}%`, opacity: tick === 1 ? 0.8 : 0.4 }}
          />
        ))}

        {/* Bars */}
        <div className="absolute inset-0 flex justify-around items-end">
          {data.map((item, index) => {
            const barHeight = (item.value / maxValue) * 100
            const savingsHeight = item.savings ? (item.savings / maxValue) * 100 : 0

            return (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{ width: `${barWidth}%` }}
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <div className="relative w-full flex flex-col items-center">
                  {/* Savings indicator */}
                  {showSavings && item.savings && (
                    <AnimatePresence>
                      {hoveredBar === index && (
                        <motion.div
                          className="absolute w-full flex justify-center z-10"
                          style={{ bottom: `${barHeight + 5}%` }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="bg-green-100 text-green-800 text-xs px-3 py-1.5 rounded-full shadow-md whitespace-nowrap font-medium border border-green-200">
                            Save £{item.savings}/year
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Bar */}
                  <motion.div
                    className="w-full rounded-t-md relative group data-point"
                    style={{
                      background: `linear-gradient(to top, ${item.color}, ${item.color}CC)`,
                      height: "0%",
                      boxShadow: hoveredBar === index ? "0 0 15px rgba(0,0,0,0.1)" : "none",
                    }}
                    initial={{ height: "0%" }}
                    animate={{ height: animate && isInView ? `${barHeight}%` : "0%" }}
                    transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
                  >
                    {/* Value label on top of bar */}
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 tooltip"
                      animate={{ opacity: hoveredBar === index ? 1 : 0, y: hoveredBar === index ? 0 : 10 }}
                    >
                      £{item.value}
                    </motion.div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-t-md">
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, transparent 100%)",
                          height: "30%",
                        }}
                      ></div>
                    </div>
                  </motion.div>
                </div>

                {/* X-axis label */}
                <motion.div
                  className="mt-2 text-sm text-gray-700 font-medium text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {item.label}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
