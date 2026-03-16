"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

interface TextBeforeAfterProps {
  title: string
  before: string
  after: string
  savings: string
  benefits: string[]
}

export function TextBeforeAfter({ title, before, after, savings, benefits = [] }: TextBeforeAfterProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-red-50 border border-red-100 rounded-xl p-6 flex flex-col"
      >
        <div className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full self-start mb-4">Before</div>
        <h3 className="text-xl font-bold mb-4 text-slate-800">{title} - Problem</h3>
        <p className="text-slate-600 mb-6">{before}</p>
        <div className="mt-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-red-100">
            <div className="flex items-center text-red-700 font-medium mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m14.5 9-5 5" />
                <path d="m9.5 9 5 5" />
              </svg>
              Issues
            </div>
            <ul className="space-y-1">
              <li className="flex items-start text-sm text-slate-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-red-500 mt-0.5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                Higher energy costs
              </li>
              <li className="flex items-start text-sm text-slate-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-red-500 mt-0.5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                Reduced comfort
              </li>
              <li className="flex items-start text-sm text-slate-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-red-500 mt-0.5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                Potential property damage
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-green-50 border border-green-100 rounded-xl p-6 flex flex-col"
      >
        <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full self-start mb-4">
          After
        </div>
        <h3 className="text-xl font-bold mb-4 text-slate-800">{title} - Solution</h3>
        <p className="text-slate-600 mb-6">{after}</p>
        <div className="mt-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-100">
            <div className="flex items-center text-green-700 font-medium mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="M9.5 12 12 15l3.5-5" />
              </svg>
              Benefits
            </div>
            <ul className="space-y-1">
              {Array.isArray(benefits) &&
                benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-sm text-slate-600">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    {benefit}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="md:col-span-2 bg-blue-50 border border-blue-100 rounded-xl p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-2">
              Potential Savings
            </div>
            <h3 className="text-xl font-bold text-slate-800">{savings}</h3>
          </div>
          <ArrowRight className="h-6 w-6 text-blue-500" />
        </div>
      </motion.div>
    </div>
  )
}
