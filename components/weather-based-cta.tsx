"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cloud, Droplets, Snowflake, Sun, Thermometer } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

type WeatherCondition = "cold" | "rainy" | "snowy" | "mild" | "unknown"

export function WeatherBasedCTA() {
  const [weatherCondition, setWeatherCondition] = useState<WeatherCondition>("unknown")
  const [isLoading, setIsLoading] = useState(true)
  const [season, setSeason] = useState<string>("")

  useEffect(() => {
    // Determine current season
    const now = new Date()
    const month = now.getMonth()

    if (month >= 2 && month <= 4) setSeason("spring")
    else if (month >= 5 && month <= 7) setSeason("summer")
    else if (month >= 8 && month <= 10) setSeason("autumn")
    else setSeason("winter")

    // Simulate weather API call
    // In a real implementation, you would call a weather API for the user's location
    setTimeout(() => {
      // For demo purposes, we'll set a random weather condition
      // In production, this would come from a weather API
      const conditions: WeatherCondition[] = ["cold", "rainy", "snowy", "mild"]
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)]
      setWeatherCondition(randomCondition)
      setIsLoading(false)
    }, 1000)
  }, [])

  const getWeatherMessage = () => {
    switch (weatherCondition) {
      case "cold":
        return {
          icon: <Thermometer className="h-8 w-8 text-blue-500" />,
          title: "Feeling the Scottish Chill?",
          message:
            "It's cold out there! Proper insulation could save you up to 25% on your heating bills. Our SuperQuilt insulation keeps the warmth in and the cold out.",
          cta: "Stay Warm & Save Money",
        }
      case "rainy":
        return {
          icon: <Droplets className="h-8 w-8 text-blue-500" />,
          title: "Typical Scottish Weather, Eh?",
          message:
            "Don't let the rain damage your home. Our roof cleaning and protective coatings prevent water damage and extend the life of your roof.",
          cta: "Protect Your Home Today",
        }
      case "snowy":
        return {
          icon: <Snowflake className="h-8 w-8 text-blue-500" />,
          title: "Snow on the Forecast?",
          message:
            "Heavy snow can damage poorly insulated roofs. Our SuperQuilt insulation and roof coatings provide protection against harsh Scottish winters.",
          cta: "Winter-Proof Your Home",
        }
      case "mild":
        return {
          icon: <Sun className="h-8 w-8 text-yellow-500" />,
          title: "Enjoying the Rare Scottish Sunshine?",
          message:
            "Perfect weather for home improvements! Book your free survey now and get ahead before the weather turns.",
          cta: "Book While It's Dry!",
        }
      default:
        return {
          icon: <Cloud className="h-8 w-8 text-gray-500" />,
          title: "Ready to Improve Your Home?",
          message:
            "Whatever the Scottish weather brings, our services keep your home protected, efficient, and looking great all year round.",
          cta: "Get Your Free Survey",
        }
    }
  }

  const getSeasonalTip = () => {
    switch (season) {
      case "spring":
        return "Spring is the perfect time for roof cleaning and wall washing after the winter months."
      case "summer":
        return "Summer is ideal for driveway cleaning and exterior improvements to enjoy your outdoor space."
      case "autumn":
        return "Autumn is the best time to prepare your insulation before the cold Scottish winter arrives."
      case "winter":
        return "Winter is when you'll notice the biggest benefits from our SuperQuilt insulation."
      default:
        return "Any time is a good time to improve your home's efficiency and appearance."
    }
  }

  const weatherInfo = getWeatherMessage()

  return (
    <ScrollReveal animation="fade-in" className="py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10">
            {isLoading ? (
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-8 w-8 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded mb-6"></div>
                <div className="h-10 w-48 bg-gray-200 rounded"></div>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{weatherInfo.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{weatherInfo.title}</h3>
                <p className="text-gray-600 mb-6 max-w-2xl">{weatherInfo.message}</p>
                <p className="text-sm text-gray-500 italic mb-6">{getSeasonalTip()}</p>
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {weatherInfo.cta}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
