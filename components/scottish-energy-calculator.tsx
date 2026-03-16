"use client"

import { useState, useEffect } from "react"
import { Calculator, Home, TrendingUp, Thermometer } from "lucide-react"

type HomeType = "detached" | "semi-detached" | "terraced" | "flat"
type HomeAge = "pre1919" | "1919-1982" | "1983-2002" | "post2002"
type InsulationType = "none" | "basic" | "superquilt"

export function ScottishEnergyCalculator() {
  const [homeType, setHomeType] = useState<HomeType>("detached")
  const [homeAge, setHomeAge] = useState<HomeAge>("1919-1982")
  const [homeSize, setHomeSize] = useState<number>(100)
  const [currentInsulation, setCurrentInsulation] = useState<InsulationType>("basic")
  const [results, setResults] = useState<{
    annualSavings: number
    co2Reduction: number
    ercImprovement: number
  } | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  // Calculate results when inputs change
  useEffect(() => {
    if (homeType && homeAge && homeSize > 0 && currentInsulation) {
      calculateSavings()
    }
  }, [homeType, homeAge, homeSize, currentInsulation])

  const calculateSavings = () => {
    setIsCalculating(true)

    // Simulate calculation delay
    setTimeout(() => {
      // Base values - these would be more sophisticated in a real calculator
      let baseHeatingCost = 0

      // Home type factors
      const typeFactors = {
        detached: 1.3,
        "semi-detached": 1.1,
        terraced: 0.9,
        flat: 0.7,
      }

      // Age factors
      const ageFactors = {
        pre1919: 1.4,
        "1919-1982": 1.2,
        "1983-2002": 1.0,
        post2002: 0.8,
      }

      // Current insulation factors
      const insulationFactors = {
        none: 1.5,
        basic: 1.0,
        superquilt: 0.6,
      }

      // Calculate base heating cost
      baseHeatingCost =
        homeSize * typeFactors[homeType] * ageFactors[homeAge] * insulationFactors[currentInsulation] * 10 // £10 per unit factor

      // Calculate savings with SuperQuilt
      const savingsPercentage = currentInsulation === "none" ? 0.45 : 0.25
      const annualSavings = Math.round(baseHeatingCost * savingsPercentage)

      // Calculate CO2 reduction
      const co2Reduction = Math.round(annualSavings * 0.2) // 0.2 tonnes CO2 per £100 saved (example)

      // Calculate EPC improvement
      let ercImprovement = 0
      if (currentInsulation === "none") ercImprovement = 15
      else if (currentInsulation === "basic") ercImprovement = 8

      setResults({
        annualSavings,
        co2Reduction,
        ercImprovement,
      })

      setIsCalculating(false)
    }, 1000)
  }

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Scottish Home Energy <span className="text-blue-600">Savings Calculator</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how much you could save on your energy bills with our SuperQuilt insulation. Designed specifically for
            Scottish homes and weather conditions.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Calculator Inputs */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Calculator className="mr-2 text-blue-600" size={20} />
                  Your Home Details
                </h3>

                <div className="space-y-6">
                  {/* Home Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type of Home</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: "detached", label: "Detached" },
                        { value: "semi-detached", label: "Semi-Detached" },
                        { value: "terraced", label: "Terraced" },
                        { value: "flat", label: "Flat/Apartment" },
                      ].map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          className={`py-2 px-3 text-sm font-medium rounded-md border transition-all ${
                            homeType === type.value
                              ? "bg-blue-50 border-blue-300 text-blue-700"
                              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                          onClick={() => setHomeType(type.value as HomeType)}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Home Age */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age of Home</label>
                    <select
                      value={homeAge}
                      onChange={(e) => setHomeAge(e.target.value as HomeAge)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="pre1919">Pre-1919 (Traditional)</option>
                      <option value="1919-1982">1919-1982</option>
                      <option value="1983-2002">1983-2002</option>
                      <option value="post2002">Post-2002</option>
                    </select>
                  </div>

                  {/* Home Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Approximate Size (m²)</label>
                    <input
                      type="number"
                      min="10"
                      max="500"
                      value={homeSize}
                      onChange={(e) => setHomeSize(Number.parseInt(e.target.value) || 0)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  {/* Current Insulation */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Insulation</label>
                    <div className="space-y-2">
                      {[
                        { value: "none", label: "None/Minimal" },
                        { value: "basic", label: "Basic (e.g., old fibreglass)" },
                        { value: "superquilt", label: "Already have SuperQuilt" },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="insulation"
                            value={option.value}
                            checked={currentInsulation === option.value}
                            onChange={() => setCurrentInsulation(option.value as InsulationType)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <TrendingUp className="mr-2 text-blue-600" size={20} />
                  Your Potential Savings
                </h3>

                {isCalculating ? (
                  <div className="flex flex-col items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    <p className="mt-4 text-gray-600">Calculating your savings...</p>
                  </div>
                ) : results ? (
                  <div className="space-y-8">
                    {/* Annual Savings */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                          <Thermometer className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Annual Savings</h4>
                          <p className="text-2xl font-bold text-blue-600">£{results.annualSavings}</p>
                          <p className="text-xs text-gray-500 mt-1">Based on current energy prices</p>
                        </div>
                      </div>
                    </div>

                    {/* Other Benefits */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">CO₂ Reduction</span>
                        <span className="font-medium">{results.co2Reduction} tonnes/year</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">EPC Rating Improvement</span>
                        <span className="font-medium">Up to {results.ercImprovement} points</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Payback Period</span>
                        <span className="font-medium">
                          {Math.round((3000 / results.annualSavings) * 10) / 10} years
                        </span>
                      </div>
                    </div>

                    {/* Scottish Context */}
                    <div className="bg-blue-50 rounded-lg p-4 text-sm text-gray-700">
                      <p className="font-medium mb-2">Did you know?</p>
                      <p>
                        Scottish homes are typically exposed to colder temperatures than the rest of the UK. Our
                        SuperQuilt insulation is specifically designed to handle Scottish weather conditions.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                    <Home className="h-12 w-12 mb-4 text-gray-400" />
                    <p>Enter your home details to see potential savings</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
