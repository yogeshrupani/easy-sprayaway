"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Lightbulb, Home, Thermometer, Banknote, ArrowRight } from "lucide-react"

export default function EnergySavingsCalculator() {
  const [homeSize, setHomeSize] = useState(150)
  const [currentBill, setCurrentBill] = useState(200)
  const [insulation, setInsulation] = useState("poor")
  const [calculatedSavings, setCalculatedSavings] = useState<number | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateSavings = () => {
    setIsCalculating(true)

    // Simulate API call or complex calculation
    setTimeout(() => {
      let savingsFactor = 0

      switch (insulation) {
        case "poor":
          savingsFactor = 0.35 // 35% savings potential
          break
        case "average":
          savingsFactor = 0.25 // 25% savings potential
          break
        case "good":
          savingsFactor = 0.15 // 15% savings potential
          break
      }

      // Calculate estimated monthly savings
      const estimatedSavings = Math.round(currentBill * savingsFactor)
      setCalculatedSavings(estimatedSavings)
      setIsCalculating(false)
    }, 1500)
  }

  return (
    <Card className="w-full shadow-lg border-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
        <CardTitle className="flex items-center text-2xl">
          <Lightbulb className="mr-2 h-6 w-6 text-primary" />
          Energy Savings Calculator
        </CardTitle>
        <CardDescription>Estimate how much you could save with SuperQuilt insulation</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6 pt-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label htmlFor="home-size" className="text-base flex items-center">
                    <Home className="mr-2 h-4 w-4 text-gray-500" />
                    Home Size (m²)
                  </Label>
                  <span className="text-sm font-medium">{homeSize} m²</span>
                </div>
                <Slider
                  id="home-size"
                  min={50}
                  max={350}
                  step={10}
                  value={[homeSize]}
                  onValueChange={(value) => setHomeSize(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Small</span>
                  <span>Medium</span>
                  <span>Large</span>
                </div>
              </div>

              <div className="pt-2">
                <Label htmlFor="current-bill" className="text-base flex items-center mb-2">
                  <Banknote className="mr-2 h-4 w-4 text-gray-500" />
                  Current Monthly Energy Bill (£)
                </Label>
                <Input
                  id="current-bill"
                  type="number"
                  value={currentBill}
                  onChange={(e) => setCurrentBill(Number.parseInt(e.target.value) || 0)}
                  className="text-lg"
                />
              </div>

              <div className="pt-2">
                <Label className="text-base flex items-center mb-3">
                  <Thermometer className="mr-2 h-4 w-4 text-gray-500" />
                  Current Insulation Quality
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    type="button"
                    variant={insulation === "poor" ? "default" : "outline"}
                    onClick={() => setInsulation("poor")}
                    className="h-auto py-3 flex flex-col"
                  >
                    <span>Poor</span>
                    <span className="text-xs mt-1 font-normal">No insulation</span>
                  </Button>
                  <Button
                    type="button"
                    variant={insulation === "average" ? "default" : "outline"}
                    onClick={() => setInsulation("average")}
                    className="h-auto py-3 flex flex-col"
                  >
                    <span>Average</span>
                    <span className="text-xs mt-1 font-normal">Basic insulation</span>
                  </Button>
                  <Button
                    type="button"
                    variant={insulation === "good" ? "default" : "outline"}
                    onClick={() => setInsulation("good")}
                    className="h-auto py-3 flex flex-col"
                  >
                    <span>Good</span>
                    <span className="text-xs mt-1 font-normal">Standard insulation</span>
                  </Button>
                </div>
              </div>
            </div>

            <Button onClick={calculateSavings} className="w-full mt-4" disabled={isCalculating}>
              {isCalculating ? "Calculating..." : "Calculate Savings"}
            </Button>
          </TabsContent>

          <TabsContent value="results" className="py-4">
            {calculatedSavings !== null ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-6"
              >
                <div className="mb-6">
                  <div className="inline-block rounded-full bg-green-100 p-3 mb-4">
                    <Banknote className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Estimated Monthly Savings</h3>
                  <div className="text-4xl font-bold text-green-600">£{calculatedSavings}</div>
                  <p className="text-gray-600 mt-2">That's £{calculatedSavings * 12} per year!</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-medium mb-2">With SuperQuilt insulation, you could save:</h4>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start">
                      <div className="rounded-full p-1 bg-green-100 mr-2 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span>Reduce heat loss by up to 95%</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full p-1 bg-green-100 mr-2 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span>Improve your home's energy rating</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full p-1 bg-green-100 mr-2 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span>Reduce your carbon footprint</span>
                    </li>
                  </ul>
                </div>

                <Button asChild>
                  <a href="/contact" className="flex items-center justify-center">
                    Get Your Free Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-600">Use the calculator to see your potential savings</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function Check(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
