// Real Trustpilot reviews from https://uk.trustpilot.com/review/easy-sprayaway.co.uk
// Updated to comply with trading standards requirements - all reviews sourced from Trustpilot

export const customerReviews = [
  {
    id: 1,
    author: "Moira",
    date: "28 Nov 2025",
    rating: 5,
    title: "Fast, efficient, friendly",
    content:
      "We had a visit from Dayo the sales representative to assess our needs. He was extremely professional, polite and courteous and certainly knew his product. He thoroughly surveyed our loft space and explained how the product would be fitted and how it would work. There was absolutely no unpleasant hard sales pitch, no complicated brochures, technical baffling discourse, just very straightforward efficient service. We decided to have the insulation installed which happened within a few days, carried out quickly and easily. No fuss no mess. We now have a much cosier, breathable loft space and look forward to seeing our heating bills reduce. Thank you.",
  },
  {
    id: 2,
    author: "Helen Darroch",
    date: "19 Nov 2025",
    rating: 5,
    title: "Excellent service - end to end",
    content:
      "Grant was the surveyor who came to see me - it was a slightly longer appointment than id expected but he was very pleasant and well mannered and explained everything coherently as to why he was suggesting superquilt was my best option. I did not feel pressured into agreeing to going ahead. The unexpected incusion of a pre/post fitting service to empty and refil my loft space sold the deal for me. All staff were very pleasant and helpful through the full process. My loft is definitely warmer just intime for this cold spell to test it out. I would recommend this company for their efficient staff and service. A really good experience all round.",
  },
  {
    id: 3,
    author: "L&R King",
    date: "18 Nov 2025",
    rating: 5,
    title: "Loft insulation",
    content:
      "After our first visit from Mark the surveyor we had a discussion on the best insulation for the loft. There was no pressure just very good advice as which would be best. We went for superquilt lite. Mark and the company kept us well informed before and after the installation was done. The two men that came and did the job were great.",
  },
  {
    id: 4,
    author: "Eleanor Curin",
    date: "17 Oct 2025",
    rating: 5,
    title: "So Far So Good",
    content:
      "Ross was the surveyor who came to see us. He was very pleasant and well mannered. He explained everything coherently as to why he was suggesting we install superquilt. We did not feel pressured into agreeing to going ahead. Two men came to do the installation. They were also very nice and made sure to cover the stairs. Job done.👍 Our loft is definitely warmer. Just hoping the superquilt works in summer to deflect the heat. I would recommend this company for their efficient staff and service. A really good experience all round.",
  },
  {
    id: 5,
    author: "Debbie",
    date: "10 Sept 2025",
    rating: 5,
    title: "Brilliant service",
    content:
      "Paul came to survey the loft for my mum. Very polite and knowledgeable. Made my mum feel at ease and answered all her concerns. Very upfront and honest. Business still looking after customers even after job completed as follow ups to ensure all is working. Instillation now booked and will review again once completed.",
  },
  {
    id: 6,
    author: "Margaret Paterson",
    date: "24 Sept 2025",
    rating: 5,
    title: "Hi just to let you know how…",
    content:
      "Hi just to let you know how appreciative of the young man Paul who kindly came to see me today assessing me for loft insulation very informative indeed made me aware of how important it is for my home to be well insulated and the right company to carry the work out. Not moved forward as yet but not to say I won't. Thank you for all the advise and the manner in which it was done. Many Thanks. Margaret",
  },
  {
    id: 7,
    author: "AnnT",
    date: "11 Jul 2025",
    rating: 5,
    title: "From the time the measure and estimate…",
    content:
      "From the time the measure and estimate were done until the insulation was installed everything was done efficiently and professionally. It only took 3 days from getting the estimate to the work being completed. The team who carried out the work arrived a whole five minutes early and finished much quicker than expected. It was installed with no fuss, noise or mess. We started to feel the difference almost immediately and are looking forward to a toasty winter. Many thanks to all involved.",
  },
  {
    id: 8,
    author: "Christine Purchase",
    date: "25 Mar 2025",
    rating: 5,
    title: "Loft insulation",
    content:
      "Loft inspection and advice undertaken by Paul. He was very open regarding the condition of the loft and kept me informed every step of the way including photographic evidence. His advice on the way forward and best product was very helpful. He was very patient with someone with little technical experience. Everything ran smoothly. Today 25 the team arrived on time were polite, courteous, obliging and very tidy. Pleasant experience all round.",
  },
]

// Customer review summary - Real data from Trustpilot
export const trustpilotSummary = {
  rating: 4.8,
  reviewCount: 53,
  ratingText: "Excellent",
  url: "https://uk.trustpilot.com/review/easy-sprayaway.co.uk",
}

export function getDisplayReviews(count = 6) {
  return customerReviews.slice(0, count)
}

export function getReviewStats() {
  const totalReviews = customerReviews.length
  const totalRating = customerReviews.reduce((sum, review) => sum + review.rating, 0)
  const averageRating = Math.round((totalRating / totalReviews) * 10) / 10

  const ratingDistribution = {
    5: customerReviews.filter((r) => r.rating === 5).length,
    4: customerReviews.filter((r) => r.rating === 4).length,
    3: customerReviews.filter((r) => r.rating === 3).length,
    2: customerReviews.filter((r) => r.rating === 2).length,
    1: customerReviews.filter((r) => r.rating === 1).length,
  }

  return {
    totalReviews: trustpilotSummary.reviewCount,
    averageRating: trustpilotSummary.rating,
    displayedReviews: totalReviews,
    ratingDistribution,
  }
}
