"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ChartContainer from "@/components/charts/chart-container"
import EnergySavingsBarChart from "@/components/charts/energy-savings-bar-chart"
import EnergyCostLineChart from "@/components/charts/energy-cost-line-chart"
import EnergySavingsPieChart from "@/components/charts/energy-savings-pie-chart"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Home,
  ThermometerSnowflake,
  Droplets,
  PiggyBank,
  BarChart3,
  LineChart,
  PieChart,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Sample data
const monthlyBillData = [
  { label: "Standard", value: 180, color: "#ef4444" },
  { label: "With SuperQuilt", value: 108, color: "#0070f3", savings: 72 },
]

const yearlyBillData = [
  { label: "Standard", value: 2160, color: "#ef4444" },
  { label: "With SuperQuilt", value: 1296, color: "#0070f3", savings: 864 },
]

const monthlyLineData = [
  { month: "Jan", standard: 220, withSuperQuilt: 132 },
  { month: "Feb", standard: 210, withSuperQuilt: 126 },
  { month: "Mar", standard: 180, withSuperQuilt: 108 },
  { month: "Apr", standard: 150, withSuperQuilt: 90 },
  { month: "May", standard: 120, withSuperQuilt: 72 },
  { month: "Jun", standard: 90, withSuperQuilt: 54 },
  { month: "Jul", standard: 80, withSuperQuilt: 48 },
  { month: "Aug", standard: 85, withSuperQuilt: 51 },
  { month: "Sep", standard: 110, withSuperQuilt: 66 },
  { month: "Oct", standard: 150, withSuperQuilt: 90 },
  { month: "Nov", standard: 190, withSuperQuilt: 114 },
  { month: "Dec", standard: 210, withSuperQuilt: 126 },
]

const savingsBreakdownData = [
  { label: "Heating", value: 650, color: "#ef4444" },
  { label: "Hot Water", value: 120, color: "#0070f3" },
  { label: "Cooling", value: 94, color: "#10b981" },
]

const propertyTypes = [
  { type: "Detached", savings: 950 },
  { type: "Semi-Detached", savings: 864 },
  { type: "Terraced", savings: 780 },
  { type: "Flat", savings: 650 },
]

export default function EnergySavingsDashboard() {
  const [selectedPropertyType, setSelectedPropertyType] = useState("Semi-Detached")
  const [animate, setAnimate] = useState(true)
  const [showTip, setShowTip] = useState(false)

  // Get savings for selected property type
  const propertySavings = propertyTypes.find((p) => p.type === selectedPropertyType)?.savings || 864

  // Adjust data based on property type
  const adjustedYearlyData = [
    { label: "Standard", value: propertySavings / 0.4, color: "#ef4444" },
    { label: "With SuperQuilt", value: (propertySavings / 0.4) * 0.6, color: "#0070f3", savings: propertySavings },
  ]

  useEffect(() => {
    // Show tip after 3 seconds
    const timer = setTimeout(() => {
      setShowTip(true)
    }, 3000)

    // Hide tip after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowTip(false)
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div className="space-y-8">
      <AnimatePresence>
        {showTip && (
          <motion.div
            className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-lg shadow-lg z-50 max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <PiggyBank className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Pro Tip</h4>
                <p className="text-xs">
                  Try hovering over chart elements to see detailed information and interact with the visualizations!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid md:grid-cols-2 gap-6">
        <ChartContainer
          title="Monthly Energy Bill Comparison"
          description="Average monthly energy costs with and without SuperQuilt insulation"
          icon={<BarChart3 className="h-5 w-5" />}
          gradient="blue"
        >
          <EnergySavingsBarChart data={monthlyBillData} animate={animate} />
        </ChartContainer>

        <ChartContainer
          title="Annual Energy Bill Comparison"
          description="Total yearly energy costs with and without SuperQuilt insulation"
          icon={<PiggyBank className="h-5 w-5" />}
          gradient="green"
        >
          <div className="mb-4">
            <div className="text-sm mb-2 font-medium">Select your property type:</div>
            <div className="flex flex-wrap gap-2">
              {propertyTypes.map((property) => (
                <Button
                  key={property.type}
                  variant={selectedPropertyType === property.type ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedPropertyType(property.type)
                    setAnimate(false)
                    setTimeout(() => setAnimate(true), 50)
                  }}
                  className={selectedPropertyType === property.type ? "button-3d" : ""}
                >
                  {property.type}
                </Button>
              ))}
            </div>
          </div>
          <EnergySavingsBarChart data={adjustedYearlyData} animate={animate} />
          <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded-lg text-sm text-green-800">
            <div className="flex items-center">
              <PiggyBank className="h-4 w-4 mr-2 text-green-600" />
              <span className="font-medium">
                Save up to £{propertySavings} annually with SuperQuilt insulation in your {selectedPropertyType} home
              </span>
            </div>
          </div>
        </ChartContainer>
      </div>

      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-4">
          <TabsTrigger value="monthly" className="flex items-center gap-2">
            <LineChart className="h-4 w-4" />
            <span>Monthly Trends</span>
          </TabsTrigger>
          <TabsTrigger value="breakdown" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            <span>Savings Breakdown</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="monthly">
          <ChartContainer
            title="Monthly Energy Costs Throughout the Year"
            description="See how SuperQuilt insulation reduces your energy bills across all seasons"
            icon={<LineChart className="h-5 w-5" />}
            gradient="amber"
          >
            <EnergyCostLineChart data={monthlyLineData} height={350} animate={animate} />
            <div className="mt-4 grid grid-cols-4 gap-2 text-center">
              <div className="p-2 bg-blue-50 rounded-lg">
                <div className="text-xs text-gray-500">Winter Savings</div>
                <div className="text-lg font-bold text-blue-600">40%</div>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <div className="text-xs text-gray-500">Spring Savings</div>
                <div className="text-lg font-bold text-green-600">35%</div>
              </div>
              <div className="p-2 bg-amber-50 rounded-lg">
                <div className="text-xs text-gray-500">Summer Savings</div>
                <div className="text-lg font-bold text-amber-600">30%</div>
              </div>
              <div className="p-2 bg-red-50 rounded-lg">
                <div className="text-xs text-gray-500">Autumn Savings</div>
                <div className="text-lg font-bold text-red-600">38%</div>
              </div>
            </div>
          </ChartContainer>
        </TabsContent>

        <TabsContent value="breakdown">
          <ChartContainer
            title="Annual Savings Breakdown"
            description="How SuperQuilt insulation saves you money in different areas"
            icon={<PieChart className="h-5 w-5" />}
            gradient="red"
          >
            <EnergySavingsPieChart data={savingsBreakdownData} height={350} animate={animate} />
            <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <h4 className="text-sm font-medium mb-2">How SuperQuilt Saves You Money</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-red-100 mr-2 mt-0.5">
                    <ThermometerSnowflake className="h-3 w-3 text-red-600" />
                  </div>
                  <span>
                    <span className="font-medium">Heating (75%):</span> SuperQuilt's multi-layer design reflects heat
                    back into your home, reducing the need for heating.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-blue-100 mr-2 mt-0.5">
                    <Droplets className="h-3 w-3 text-blue-600" />
                  </div>
                  <span>
                    <span className="font-medium">Hot Water (14%):</span> Better insulation means your hot water stays
                    warmer for longer, reducing heating costs.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-green-100 mr-2 mt-0.5">
                    <ThermometerSnowflake className="h-3 w-3 text-green-600" />
                  </div>
                  <span>
                    <span className="font-medium">Cooling (11%):</span> In summer, SuperQuilt helps keep your home
                    cooler, reducing air conditioning costs.
                  </span>
                </li>
              </ul>
            </div>
          </ChartContainer>
        </TabsContent>
      </Tabs>

      <div className="bg-pattern rounded-xl border p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Home className="h-5 w-5 text-primary mr-2" />
          SuperQuilt Insulation Benefits
        </h3>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <motion.div
            className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-2">
              <ThermometerSnowflake className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">Reduced Energy Bills</span>
            </div>
            <p className="text-sm text-gray-600">
              Save up to 40% on your heating costs year-round with superior thermal performance.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-2">
              <Home className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">Improved EPC Rating</span>
            </div>
            <p className="text-sm text-gray-600">
              Boost your home's Energy Performance Certificate rating, increasing its market value.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-2">
              <Droplets className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">Condensation Control</span>
            </div>
            <p className="text-sm text-gray-600">
              Prevent dampness and mold growth with SuperQuilt's moisture-resistant design.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <Button asChild className="group shine">
            <Link href="/contact" className="flex items-center">
              Get Your Free Energy Savings Survey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
