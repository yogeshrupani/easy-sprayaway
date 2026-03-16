import { Shield, Droplets, Home, Leaf } from "lucide-react"

// Centralized service data for consistency across pages
export const servicesData = [
  {
    id: "superquilt",
    title: "SuperQuilt Insulation",
    shortDescription: "Revolutionary multi-layer reflective insulation that reduces heat loss by up to 95%.",
    fullDescription:
      "Revolutionary multi-layer reflective insulation technology that reflects 97% of radiant heat with exceptional space efficiency at only 40mm thickness.",
    subtitle: "Advanced Multi-Layer Technology",
    features: [
      "40mm ultra-thin profile",
      "97% radiant heat reflection",
      "25-year manufacturer warranty",
      "Space-saving installation",
      "Reduces heat loss by up to 95%",
      "Improves EPC ratings significantly",
    ],
    image: "/images/superquilt-installation.png",
    thumbnailImage: "/images/superquilt-insulation.png",
    icon: Shield,
    popular: true,
    savings: "Save up to £400 annually on heating bills",
    category: "insulation",
    priority: 1,
  },
  {
    id: "sheep-wool",
    title: "Natural Sheep Wool Insulation",
    shortDescription: "100% pure sheep wool insulation with superior air purification and humidity regulation.",
    fullDescription:
      "100% pure sheep wool insulation with Ionic Protect® technology offering superior air purification, humidity regulation, and sustainable performance.",
    subtitle: "Premium Natural Solutions",
    features: [
      "Natural air purification",
      "33% humidity absorption capacity",
      "Renewable & sustainable",
      "Superior acoustic properties",
      "Fire protection rated",
      "Biocide-free protection",
    ],
    image: "/images/sheep-wool-insulation-rolls.jpeg",
    thumbnailImage: "/images/sheep-wool-insulation-rolls.jpeg",
    icon: Leaf,
    popular: false,
    savings: "Eco-friendly solution with excellent thermal performance",
    category: "insulation",
    priority: 2,
  },
  {
    id: "fibreglass",
    title: "Fibreglass Insulation",
    shortDescription: "High-performance fibreglass insulation delivering exceptional thermal efficiency.",
    fullDescription:
      "High-performance fibreglass insulation delivering exceptional thermal efficiency with proven reliability and cost-effectiveness for residential applications.",
    subtitle: "Proven Performance Solutions",
    features: [
      "Excellent thermal performance",
      "Fire-resistant properties",
      "Cost-effective solution",
      "Quick professional installation",
      "Widely available",
      "Good value for money",
    ],
    image: "/images/loft-after.png",
    thumbnailImage: "/images/loft-after.png",
    icon: Shield,
    popular: false,
    savings: "Affordable insulation with solid performance",
    category: "insulation",
    priority: 3,
  },
  {
    id: "roof-cleaning",
    title: "Professional Roof Care",
    shortDescription: "Comprehensive roof cleaning and protective coating services.",
    fullDescription:
      "Comprehensive roof cleaning and protective coating services designed to extend roof lifespan, enhance appearance, and protect your investment.",
    subtitle: "Protective Maintenance Solutions",
    features: [
      "Professional moss removal",
      "Protective coating systems",
      "Roof lifespan extension",
      "Property value enhancement",
      "Prevents water damage",
      "Professional equipment and techniques",
    ],
    image: "/images/roof-cleaning.png",
    thumbnailImage: "/images/roof-cleaning.png",
    icon: Home,
    popular: false,
    savings: "Protect your investment and avoid costly roof replacement",
    category: "cleaning",
    priority: 4,
  },
  {
    id: "wall-driveway",
    title: "Exterior Property Cleaning",
    shortDescription: "Advanced cleaning solutions for walls, driveways and exterior surfaces.",
    fullDescription:
      "Advanced cleaning solutions utilizing soft wash technology and precision pressure washing to restore and protect your property's exterior surfaces.",
    subtitle: "Professional Surface Restoration",
    features: [
      "Soft wash technology",
      "Precision pressure washing",
      "Eco-friendly solutions",
      "Protective sealing options",
      "Enhances curb appeal",
      "Protects surface integrity",
    ],
    image: "/images/driveway-cleaning.png",
    thumbnailImage: "/images/driveway-cleaning.png",
    icon: Droplets,
    popular: false,
    savings: "Restore and protect your property's exterior surfaces",
    category: "cleaning",
    priority: 5,
  },
]

// Helper functions to get services by category or ID
export const getServiceById = (id: string) => {
  return servicesData.find((service) => service.id === id)
}

export const getServicesByCategory = (category: string) => {
  return servicesData.filter((service) => service.category === category)
}

export const getMainServices = () => {
  return servicesData.filter((service) => service.priority <= 3)
}
