export interface BeforeAfterItem {
  id: string
  title: string
  description: string
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  savings: string
  benefits: string[]
}

export const realBeforeAfterData: BeforeAfterItem[] = [
  {
    id: "loft-insulation-1",
    title: "SuperQuilt Loft Insulation Transformation",
    description:
      "This Victorian terrace home in Edinburgh was losing significant heat through an uninsulated loft. Our SuperQuilt installation created a thermal barrier that dramatically improved energy efficiency.",
    beforeImage: "/images/before-after/loft-before.jpeg",
    afterImage: "/images/before-after/loft-after.jpeg",
    beforeAlt: "Uninsulated loft space with exposed joists",
    afterAlt: "Loft space with SuperQuilt insulation installed",
    savings: "Potential annual savings of £300-500 on heating bills",
    benefits: [
      "Heat loss reduced by up to 95%",
      "Improved EPC rating from D to B",
      "Eliminated condensation issues",
      "Increased property value",
      "Warmer, more comfortable home",
    ],
  },
  {
    id: "roof-cleaning-1",
    title: "Roof Cleaning & Restoration",
    description:
      "This Glasgow property's roof was covered in moss and algae, causing water retention and potential damage. Our professional cleaning and protective coating restored its appearance and functionality.",
    beforeImage: "/images/before-after/roof-before.jpeg",
    afterImage: "/images/before-after/roof-after.jpeg",
    beforeAlt: "Moss-covered roof tiles before cleaning",
    afterAlt: "Clean roof tiles after professional treatment",
    savings: "Avoided costly roof replacement - saving thousands",
    benefits: [
      "Removed harmful moss and algae",
      "Applied protective coating",
      "Extended roof lifespan significantly",
      "Improved water drainage",
      "Enhanced kerb appeal",
    ],
  },
  {
    id: "driveway-cleaning-1",
    title: "Driveway Deep Clean & Restoration",
    description:
      "Years of weathering had left this Aberdeen driveway stained and slippery. Our pressure washing and sealing service restored it to like-new condition.",
    beforeImage: "/images/before-after/driveway-before.jpeg",
    afterImage: "/images/before-after/driveway-after.jpeg",
    beforeAlt: "Stained and dirty driveway before cleaning",
    afterAlt: "Clean and sealed driveway after treatment",
    savings: "Avoided driveway replacement - saving £2,000-4,000",
    benefits: [
      "Removed years of staining",
      "Eliminated slip hazards",
      "Applied protective sealant",
      "Dramatically improved appearance",
      "Extended surface lifespan",
    ],
  },
]
