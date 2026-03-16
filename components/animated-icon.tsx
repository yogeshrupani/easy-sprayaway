"use client"

import { motion } from "framer-motion"
import {
  Zap,
  Shield,
  Star,
  Home,
  Droplet,
  Thermometer,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Clock,
  Percent,
} from "lucide-react"

type IconType =
  | "energy"
  | "shield"
  | "star"
  | "home"
  | "water"
  | "temperature"
  | "award"
  | "users"
  | "calendar"
  | "check"
  | "clock"
  | "percent"

interface AnimatedIconProps {
  icon: IconType
  className?: string
}

export function AnimatedIcon({ icon, className = "w-6 h-6" }: AnimatedIconProps) {
  const renderIcon = () => {
    switch (icon) {
      case "energy":
        return <Zap className={className} />
      case "shield":
        return <Shield className={className} />
      case "star":
        return <Star className={className} />
      case "home":
        return <Home className={className} />
      case "water":
        return <Droplet className={className} />
      case "temperature":
        return <Thermometer className={className} />
      case "award":
        return <Award className={className} />
      case "users":
        return <Users className={className} />
      case "calendar":
        return <Calendar className={className} />
      case "check":
        return <CheckCircle className={className} />
      case "clock":
        return <Clock className={className} />
      case "percent":
        return <Percent className={className} />
      default:
        return <Star className={className} />
    }
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      {renderIcon()}
    </motion.div>
  )
}
