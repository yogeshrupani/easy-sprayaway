"use client"

import { motion } from "framer-motion"

export default function FloatingShapes() {
  const shapeVariants = {
    initial: { opacity: 0, scale: 0.5, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        delay: Math.random() * 0.5, // Stagger initial delays
        duration: 8 + Math.random() * 5, // Vary animation duration
      },
    },
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Circle 1 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl"
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        style={{ x: "-50%", y: "-50%" }}
      />
      {/* Medium Triangle */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent/5 transform rotate-45 blur-3xl"
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        style={{ x: "50%", y: "-50%" }}
      />
      {/* Small Circle 2 */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-primary/10 rounded-full blur-3xl"
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        style={{ x: "-50%", y: "50%" }}
      />
      {/* Large Abstract Blob */}
      <motion.div
        className="absolute bottom-1/3 right-1/2 w-64 h-64 bg-accent-orange/5 rounded-[40%_60%_70%_30%_/_60%_40%_60%_40%] blur-3xl"
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        style={{ x: "50%", y: "50%" }}
      />
      {/* Small Square */}
      <motion.div
        className="absolute top-1/5 right-1/5 w-20 h-20 bg-primary/5 rounded-lg blur-3xl"
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        style={{ x: "50%", y: "-50%" }}
      />
    </div>
  )
}
