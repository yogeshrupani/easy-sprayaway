"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const scottishFaqs = [
  {
    question: "How effective is SuperQuilt insulation for Scottish tenement flats?",
    answer:
      "SuperQuilt is extremely effective for Scottish tenements. Its multi-layer design is perfect for the solid stone walls common in traditional Scottish buildings, helping to retain heat while preventing the condensation issues that plague many tenement properties. Many of our Glasgow and Edinburgh customers report heating bill reductions of 25-35% after installation.",
  },
  {
    question: "Will your insulation help with the damp issues common in Scottish homes?",
    answer:
      "Absolutely. Our insulation solutions are specifically designed to address the high humidity and damp issues common in Scottish properties. SuperQuilt creates an effective moisture barrier that prevents condensation from forming within walls and lofts, significantly reducing damp and mould problems that are prevalent in Scotland's humid climate.",
  },
  {
    question: "How long does installation take for a typical Scottish home?",
    answer:
      "For a standard Scottish semi-detached home or tenement flat, SuperQuilt installation typically takes 1-2 days. Larger detached properties may",
  },
]

const FaqItem = ({ faq }: { faq: (typeof scottishFaqs)[0] }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li className="border-b border-gray-200">
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2 font-medium">
          <HelpCircle className="h-5 w-5 text-gray-500" />
          {faq.question}
        </span>
        <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: 10 },
              collapsed: { opacity: 0, height: 0, marginTop: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="py-4 text-gray-500">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

const ScottishFaqs = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Frequently Asked Questions about Insulation in Scotland
        </h2>
        <ul className="divide-y divide-gray-200">
          {scottishFaqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ScottishFaqs
