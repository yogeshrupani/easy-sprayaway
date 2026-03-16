export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  title: string
  description?: string
  isBefore?: boolean
  afterId?: string
  isAfter?: boolean
  beforeId?: string
  tags?: string[]
  location?: string
  date?: string
  featured?: boolean
}

// Organize images by service category
export const galleryImages: GalleryImage[] = [
  // Loft Insulation Projects
  {
    id: "superquilt-installation-main",
    src: "/images/services/superquilt-installation.jpeg",
    alt: "Professional SuperQuilt insulation installation in progress",
    category: "loft-insulation",
    title: "SuperQuilt Installation",
    description: "Professional installation of SuperQuilt multi-layer insulation system in Glasgow home",
    tags: ["superquilt", "energy-efficient", "professional-installation"],
    location: "Glasgow, Scotland",
    date: "2024-01-15",
    featured: true,
  },
  {
    id: "loft-insulation-complete",
    src: "/images/services/loft-insulation-main.jpeg",
    alt: "Completed loft insulation project showing full coverage",
    category: "loft-insulation",
    title: "Complete Loft Insulation",
    description: "Fully insulated loft space providing optimal thermal efficiency for Edinburgh property",
    tags: ["complete-coverage", "thermal-efficiency", "energy-saving"],
    location: "Edinburgh, Scotland",
    date: "2024-01-20",
    featured: true,
  },
  {
    id: "sheep-wool-insulation",
    src: "/images/services/sheep-wool-insulation.jpeg",
    alt: "Eco-friendly sheep wool insulation installation",
    category: "loft-insulation",
    title: "Sheep Wool Insulation",
    description: "Natural, eco-friendly sheep wool insulation for sustainable homes in the Highlands",
    tags: ["eco-friendly", "natural", "sustainable", "sheep-wool"],
    location: "Highland, Scotland",
    date: "2024-01-25",
    featured: true,
  },
  {
    id: "glass-mineral-wool",
    src: "/images/services/glass-mineral-wool.jpeg",
    alt: "Glass mineral wool insulation in loft",
    category: "loft-insulation",
    title: "Glass Mineral Wool",
    description: "High-performance glass mineral wool insulation installation in Aberdeen home",
    tags: ["mineral-wool", "high-performance", "fire-resistant"],
    location: "Aberdeen, Scotland",
    date: "2024-02-01",
  },
  {
    id: "hemp-insulation",
    src: "/images/services/hemp-insulation.jpeg",
    alt: "Hemp insulation material being installed",
    category: "loft-insulation",
    title: "Hemp Insulation",
    description: "Sustainable hemp-based insulation for environmentally conscious homeowners",
    tags: ["hemp", "sustainable", "eco-friendly", "natural"],
    location: "Perth, Scotland",
    date: "2024-02-05",
  },
  {
    id: "scottish-borders-insulation",
    src: "/images/services/scottish-borders-insulation.jpeg",
    alt: "Professional insulation installation in Scottish Borders loft space",
    category: "loft-insulation",
    title: "Scottish Borders Loft Insulation",
    description: "Professional installation of high-quality insulation material in Scottish Borders property",
    tags: ["professional", "borders", "quality-installation"],
    location: "Scottish Borders",
    date: "2024-02-10",
  },

  // Roof Cleaning & Maintenance
  {
    id: "roof-cleaning-main",
    src: "/images/services/roof-cleaning-main.jpeg",
    alt: "Professional roof cleaning service in action",
    category: "roof-cleaning",
    title: "Professional Roof Cleaning",
    description: "Complete roof cleaning and maintenance service in Dundee",
    tags: ["professional", "maintenance", "cleaning"],
    location: "Dundee, Scotland",
    date: "2024-01-18",
    featured: true,
  },
  {
    id: "roof-clean-red-tiles-after",
    src: "/images/roof-clean-red.png",
    alt: "Red tiled roof after professional cleaning showing pristine condition",
    category: "roof-cleaning",
    title: "Red Tile Roof - After Cleaning",
    description: "Restoration of traditional red roof tiles to pristine condition",
    tags: ["after", "restoration", "red-tiles", "transformation"],
    location: "Inverness, Scotland",
    date: "2024-01-28",
    featured: true,
  },
  {
    id: "roof-clean-gray-slate-after",
    src: "/images/roof-clean-gray.png",
    alt: "Gray slate roof after cleaning treatment showing restored appearance",
    category: "roof-cleaning",
    title: "Slate Roof - After Cleaning",
    description: "Professional cleaning and treatment of natural slate roofing",
    tags: ["after", "slate", "restoration", "professional"],
    location: "Paisley, Scotland",
    date: "2024-02-02",
  },

  // Exterior & Driveway Cleaning
  {
    id: "driveway-cleaning-main",
    src: "/images/services/driveway-cleaning-main.jpeg",
    alt: "Professional driveway cleaning service in progress",
    category: "exterior-cleaning",
    title: "Driveway Cleaning",
    description: "Professional pressure washing and cleaning of driveways in Ayr",
    tags: ["driveway", "pressure-washing", "professional"],
    location: "Ayr, Scotland",
    date: "2024-01-30",
    featured: true,
  },
  {
    id: "exterior-cleaning-service",
    src: "/images/services/exterior-cleaning.jpeg",
    alt: "Complete exterior property cleaning service",
    category: "exterior-cleaning",
    title: "Exterior Property Cleaning",
    description: "Comprehensive exterior cleaning for residential properties",
    tags: ["exterior", "comprehensive", "residential"],
    location: "Kilmarnock, Scotland",
    date: "2024-02-03",
  },
  {
    id: "house-exterior-clean-after",
    src: "/images/house-clean-exterior.png",
    alt: "House exterior after professional cleaning showing pristine condition",
    category: "exterior-cleaning",
    title: "House Exterior - After Cleaning",
    description: "Complete exterior house cleaning and restoration service",
    tags: ["after", "exterior", "restoration", "pristine"],
    location: "Hamilton, Scotland",
    date: "2024-02-06",
    featured: true,
  },
  {
    id: "patio-cleaning-service-after",
    src: "/images/patio-clean.png",
    alt: "Clean patio after professional service showing restored surface",
    category: "exterior-cleaning",
    title: "Patio Cleaning - After",
    description: "Professional cleaning of patios and outdoor living spaces",
    tags: ["after", "patio", "restoration", "outdoor-living"],
    location: "Motherwell, Scotland",
    date: "2024-02-08",
  },

  // Featured Projects
  {
    id: "real-roof-transformation",
    src: "/images/real-roof-before-after.png",
    alt: "Real customer roof transformation project showing dramatic results",
    category: "featured-projects",
    title: "Customer Roof Transformation",
    description: "Real customer project showing dramatic roof cleaning results in Cumbernauld",
    tags: ["transformation", "customer-project", "dramatic-results"],
    location: "Cumbernauld, Scotland",
    date: "2024-02-12",
    featured: true,
  },
  {
    id: "superquilt-detail-work",
    src: "/images/superquilt-detail.png",
    alt: "Detailed view of SuperQuilt insulation installation technique",
    category: "featured-projects",
    title: "SuperQuilt Detail Work",
    description: "Close-up view of professional SuperQuilt installation technique",
    tags: ["detail", "technique", "professional", "superquilt"],
    location: "East Kilbride, Scotland",
    date: "2024-02-15",
  },
]

// Define gallery categories with enhanced labels
export const galleryCategories = ["loft-insulation", "roof-cleaning", "exterior-cleaning", "featured-projects"]

// Define available tags for filtering
export const galleryTags = [
  "superquilt",
  "energy-efficient",
  "professional",
  "eco-friendly",
  "before-after",
  "transformation",
  "moss-removal",
  "restoration",
  "pressure-washing",
  "sustainable",
  "natural",
  "quality-service",
]

// Define locations for filtering
export const galleryLocations = [
  "Glasgow",
  "Edinburgh",
  "Aberdeen",
  "Dundee",
  "Stirling",
  "Perth",
  "Inverness",
  "Paisley",
  "Hamilton",
  "Motherwell",
  "Ayr",
  "Kilmarnock",
  "Falkirk",
  "Highland",
  "Scottish Borders",
  "Cumbernauld",
  "East Kilbride",
]
