"use client"

import { motion } from "framer-motion"

interface AnimatedBenefitIconProps {
  icon: "energy" | "epc" | "condensation"
  className?: string
}

export default function AnimatedBenefitIcon({ icon, className = "" }: AnimatedBenefitIconProps) {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  }

  return (
    <motion.div
      className={`h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {icon === "energy" && (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M13 2L4.094 12.688C3.724 13.142 3.539 13.369 3.539 13.617C3.539 13.865 3.625 14.103 3.795 14.273C3.965 14.443 4.217 14.443 4.721 14.443H11L11 22L19.906 11.312C20.276 10.858 20.461 10.631 20.461 10.383C20.461 10.135 20.375 9.897 20.205 9.727C20.035 9.557 19.783 9.557 19.279 9.557H13L13 2Z"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
          />
        </svg>
      )}

      {icon === "epc" && (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M9 12H4.6C4.26863 12 4 11.7314 4 11.4V4.6C4 4.26863 4.26863 4 4.6 4H19.4C19.7314 4 20 4.26863 20 4.6V11.4C20 11.7314 19.7314 12 19.4 12H15"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            variants={pathVariants}
          />
          <motion.path d="M12 12V20" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" variants={pathVariants} />
          <motion.path d="M8 8L16 8" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" variants={pathVariants} />
          <motion.path
            d="M9 16L12 20L15 16"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
          />
        </svg>
      )}

      {icon === "condensation" && (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C20 7.79086 18.2091 6 16 6C13.7909 6 12 7.79086 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            variants={pathVariants}
          />
          <motion.path
            d="M12 16L12 18"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            variants={pathVariants}
          />
          <motion.path
            d="M16 16L16 18"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            variants={pathVariants}
          />
          <motion.path d="M8 16L8 18" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" variants={pathVariants} />
          <motion.path
            d="M10 20L10 22"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            variants={pathVariants}
          />
          <motion.path
            d="M14 20L14 22"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            variants={pathVariants}
          />
          <motion.path
            d="M18 20L18 22"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            variants={pathVariants}
          />
          <motion.path d="M6 20L6 22" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" variants={pathVariants} />
          <motion.path
            d="M4 10C4 6.68629 6.68629 4 10 4C12.7958 4 15.1449 5.91216 15.8203 8.5"
            stroke="#0070f3"
            strokeWidth="2"
            strokeLinecap="round"
            variants={pathVariants}
          />
        </svg>
      )}
    </motion.div>
  )
}
