// See data/trustpilot-reviews.ts for all customer reviews
// This file is kept for backwards compatibility but should not be used

import { customerReviews } from "./trustpilot-reviews"

// Export Trustpilot reviews for any legacy components still referencing this file
export const testimonials = customerReviews.map((review) => ({
  id: review.id.toString(),
  name: review.author,
  location: "UK", // Trustpilot reviews don't always include specific location
  rating: review.rating,
  text: review.content,
  service: review.title,
}))
