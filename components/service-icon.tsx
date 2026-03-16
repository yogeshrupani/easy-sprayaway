"use client"

import { motion } from "framer-motion"

interface ServiceIconProps {
  type: "superquilt" | "roof" | "wall" | "spray"
  size?: number
  color?: string
}

export default function ServiceIcon({ type, size = 80, color = "#0070f3" }: ServiceIconProps) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  }

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {type === "superquilt" && (
        <>
          {/* House outline */}
          <motion.path
            d="M20,60 L50,30 L80,60 L80,90 L20,90 Z"
            fill="none"
            stroke={color}
            strokeWidth="2"
            variants={pathVariants}
          />

          {/* Roof */}
          <motion.path d="M15,60 L50,25 L85,60" fill="none" stroke={color} strokeWidth="3" variants={pathVariants} />

          {/* Insulation layers */}
          <motion.path
            d="M25,55 Q35,45 45,55 Q55,65 65,55 Q75,45 85,55"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeDasharray="3,3"
            variants={pathVariants}
          />

          <motion.path
            d="M25,45 Q35,35 45,45 Q55,55 65,45 Q75,35 85,45"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeDasharray="3,3"
            variants={pathVariants}
          />

          <motion.path
            d="M25,35 Q35,25 45,35 Q55,45 65,35 Q75,25 85,35"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeDasharray="3,3"
            variants={pathVariants}
          />
        </>
      )}

      {type === "roof" && (
        <>
          {/* House outline */}
          <motion.path
            d="M20,60 L50,30 L80,60 L80,90 L20,90 Z"
            fill="none"
            stroke={color}
            strokeWidth="2"
            variants={pathVariants}
          />

          {/* Roof */}
          <motion.path d="M15,60 L50,25 L85,60" fill="none" stroke={color} strokeWidth="3" variants={pathVariants} />

          {/* Cleaning spray */}
          <motion.path
            d="M40,20 L45,15 L55,15 L60,20"
            fill="none"
            stroke={color}
            strokeWidth="2"
            variants={pathVariants}
          />

          <motion.path d="M50,15 L50,10" fill="none" stroke={color} strokeWidth="2" variants={pathVariants} />

          <motion.path d="M45,10 L55,10" fill="none" stroke={color} strokeWidth="2" variants={pathVariants} />

          {/* Spray droplets */}
          <motion.path d="M40,25 L35,35" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />

          <motion.path d="M45,22 L45,32" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />

          <motion.path d="M50,22 L55,32" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />

          <motion.path d="M55,22 L65,32" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />

          <motion.circle cx="35" cy="35" r="2" fill={color} variants={pathVariants} />

          <motion.circle cx="45" cy="32" r="2" fill={color} variants={pathVariants} />

          <motion.circle cx="55" cy="32" r="2" fill={color} variants={pathVariants} />

          <motion.circle cx="65" cy="32" r="2" fill={color} variants={pathVariants} />
        </>
      )}

      {type === "wall" && (
        <>
          {/* Wall outline */}
          <motion.rect
            x="20"
            y="20"
            width="60"
            height="60"
            fill="none"
            stroke={color}
            strokeWidth="2"
            variants={pathVariants}
          />

          {/* Brick pattern */}
          <motion.path
            d="M20,30 L80,30 M20,40 L80,40 M20,50 L80,50 M20,60 L80,60 M20,70 L80,70"
            fill="none"
            stroke={color}
            strokeWidth="1"
            variants={pathVariants}
          />

          <motion.path
            d="M30,20 L30,80 M40,20 L40,80 M50,20 L50,80 M60,20 L60,80 M70,20 L70,80"
            fill="none"
            stroke={color}
            strokeWidth="1"
            variants={pathVariants}
          />

          {/* Cleaning spray */}
          <motion.path
            d="M85,40 L90,35 L90,25 L85,20"
            fill="none"
            stroke={color}
            strokeWidth="2"
            variants={pathVariants}
          />

          <motion.path d="M90,30 L95,30" fill="none" stroke={color} strokeWidth="2" variants={pathVariants} />

          {/* Spray droplets */}
          <motion.path d="M80,35 L70,40" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />

          <motion.path d="M80,30 L70,30" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />

          <motion.path d="M80,25 L70,20" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />

          <motion.circle cx="70" cy="40" r="2" fill={color} variants={pathVariants} />

          <motion.circle cx="70" cy="30" r="2" fill={color} variants={pathVariants} />

          <motion.circle cx="70" cy="20" r="2" fill={color} variants={pathVariants} />
        </>
      )}

      {type === "spray" && (
        <>
          {/* Spray foam outline */}
          <motion.path
            d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z"
            fill="none"
            stroke={color}
            strokeWidth="2"
            variants={pathVariants}
          />

          {/* Spray gun */}
          <motion.path
            d="M15,50 L30,50 M15,45 L15,55 M10,45 L10,55"
            fill="none"
            stroke={color}
            strokeWidth="2"
            variants={pathVariants}
          />

          {/* Foam bubbles */}
          <motion.circle cx="40" cy="40" r="5" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />

          <motion.circle cx="50" cy="30" r="4" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />

          <motion.circle cx="60" cy="40" r="6" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />

          <motion.circle cx="40" cy="60" r="6" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />

          <motion.circle cx="60" cy="60" r="5" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />

          <motion.circle cx="50" cy="50" r="7" fill="none" stroke={color} strokeWidth="1" variants={pathVariants} />
        </>
      )}
    </motion.svg>
  )
}
