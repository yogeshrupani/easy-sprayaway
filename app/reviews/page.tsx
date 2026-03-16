import type { Metadata } from "next"
import ReviewsPageClient from "./ReviewsPageClient"

export const metadata: Metadata = {
  title: "Customer Reviews | Easy-Sprayaway",
  description:
    "Read what our customers have to say about our SuperQuilt insulation, roof cleaning, and wall & driveway cleaning services across the UK.",
}

export default function ReviewsPage() {
  return <ReviewsPageClient />
}
