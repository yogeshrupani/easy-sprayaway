import { Shield } from "lucide-react"

export const services = [
  {
    id: "loft-insulation",
    title: "Loft Insulation",
    description:
      "Comprehensive range of loft insulation solutions including SuperQuilt, sheep wool, fibreglass mineral wool, and hemp insulation to match individual customer needs.",
    features: [
      "SuperQuilt multi-layer technology",
      "Natural sheep wool insulation",
      "10-year product warranty",
      "1-year installation guarantee",
      "Improves EPC ratings",
      "Prevents condensation",
    ],
    icon: <Shield className="h-5 w-5 text-blue-600" />,
    image: "/images/superquilt-insulation.png",
    href: "/services#loft-insulation",
    color: "bg-blue-100",
    isPopular: true,
  },
]
