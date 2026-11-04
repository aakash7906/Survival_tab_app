import { useState } from "react"
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Calendar,
  PackageCheck,
  Award,
} from "lucide-react"

export interface Testimonial {
  id: string
  name: string
  location: string
  role: string
  rating: number
  date: string
  flavor: string
  title: string
  content: string
  verified: boolean
  category: "all" | "wilderness" | "disaster" | "family" | "tactical"
}

const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    name: "Col. David Vance (Ret.)",
    location: "Bozeman, MT",
    role: "Former SAR Officer & Wilderness Guide",
    rating: 5,
    date: "March 2026",
    flavor: "Chocolate",
    title: "Lightweight, reliable, and keeps your stamina rock-solid",
    content:
      "I've packed Survival Tabs on remote backcountry rescues and mountain treks for over a decade. In freezing high-altitude conditions where cooking is out of the question, 1 tablet every hour kept me alert, sharp, and physically energized without any stomach heaviness or gastrointestinal distress. It's the only ration system I trust in my emergency rucksack.",
    verified: true,
    category: "wilderness",
  },
  {
    id: "review-2",
    name: "Sarah & Mark Jenkins",
    location: "Miami, FL",
    role: "Hurricane Preparedness Advocates",
    rating: 5,
    date: "February 2026",
    flavor: "Banana",
    title: "Invaluable peace of mind during extended power outages",
    content:
      "When Hurricane season hits, clean drinking water and cooking power can vanish for weeks. Having a case of The Survival Tabs in our storm closet gives our family absolute peace of mind. Our kids love the Banana flavor, and knowing each bottle lasts 25 years without rotating makes this the smartest prep investment we've ever made.",
    verified: true,
    category: "disaster",
  },
  {
    id: "review-3",
    name: "Dr. Gregory Allen",
    location: "Denver, CO",
    role: "Emergency Medicine Physician",
    rating: 5,
    date: "January 2026",
    flavor: "Vanilla Malt",
    title: "Scientifically superior bio-availability and nutrient profile",
    content:
      "From a clinical standpoint, most commercial survival foods generate massive amounts of metabolic waste, which stresses your liver and kidneys when water is limited. The Survival Tabs' formulation delivers genuine 99% bio-availability. The protein prevents muscle tissue catabolism and the 15 essential vitamins meet 100% of US RDA. Truly medical-grade survival engineering.",
    verified: true,
    category: "tactical",
  },
  {
    id: "review-4",
    name: "Elena Rostova",
    location: "Anchorage, AK",
    role: "Off-Grid Cabin Homesteader",
    rating: 5,
    date: "December 2025",
    flavor: "Maple",
    title: "Withstood sub-zero Alaskan winters without any degradation",
    content:
      "We keep canisters in our snowmobiles, bush plane, and remote winter cache. Even after being subjected to -30°F temperatures and high humidity, the nitrogen seal held completely airtight. The Maple flavor tastes fantastic—sweet, comforting, and gives you an instant morale boost when you're exhausted.",
    verified: true,
    category: "wilderness",
  },
  {
    id: "review-5",
    name: "Robert M. Callahan",
    location: "Dallas, TX",
    role: "Long-Term Prepper & Rancher",
    rating: 5,
    date: "November 2025",
    flavor: "Chocolate",
    title: "Tested tabs purchased in 2001—still crisp and potent 24 years later!",
    content:
      "I bought two canisters back in 2001 and stored them in my basement. Recently opened one just to test the 25-year claim. The nitrogen release hiss was clear, the tablets smelled fresh, and they tasted as good as the day I bought them. You cannot find this level of certified shelf life anywhere else in the emergency food market.",
    verified: true,
    category: "disaster",
  },
  {
    id: "review-6",
    name: "Jessica Lin, RN",
    location: "Sacramento, CA",
    role: "Disaster Response Volunteer",
    rating: 5,
    date: "October 2025",
    flavor: "Strawberry",
    title: "Compact enough for gloveboxes, emergency go-bags, and daypacks",
    content:
      "A traditional 72-hour food kit weighs 10-15 pounds and takes up half a backpack. A single bottle of The Survival Tabs weighs only 24 ounces and gives 15 full days of complete nutrition. I keep one in my car trunk, one at work, and one in my evacuation kit. Strawberry is deliciously fruity and smooth.",
    verified: true,
    category: "family",
  },
]

interface TestimonialsPageProps {
  onNavigateHome?: () => void
  onOrderNow?: () => void
}

export function TestimonialsPage({ onNavigateHome, onOrderNow }: TestimonialsPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filteredReviews = testimonialsData.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  )

  const filterTabs = [
    { id: "all", label: "All Reviews (480+)" },
    { id: "wilderness", label: "Wilderness & Hiking" },
    { id: "disaster", label: "Disaster Preparedness" },
    { id: "family", label: "Family & Home" },
    { id: "tactical", label: "Medical & First Responders" },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto px-4 space-y-6 pt-2 pb-12">
      {/* Header Banner */}
      <div className="relative rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs overflow-hidden text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-3 py-0.5 text-[11px] font-bold text-red-700 tracking-wider uppercase">
          <Award className="h-3 w-3 text-red-600 shrink-0" />
          <span>VERIFIED CUSTOMER REVIEWS &bull; 4.9 / 5.0 RATING</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary max-w-3xl mx-auto leading-tight">
          Trusted in the Field for Over 40 Years
        </h1>

        <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Read genuine field reports from wilderness adventurers, search-and-rescue teams,
          survivalists, and families across America who rely on The Survival Tabs.
        </p>

        {/* Rating & Metric Snapshot */}
        <div className="pt-2 grid grid-cols-2 gap-2.5 max-w-4xl mx-auto text-left">

          <div className="rounded-2xl bg-secondary border border-border p-3.5 sm:p-4 space-y-1 text-center">
            <div className="flex items-center justify-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 sm:h-4 w-3.5 sm:w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xl sm:text-2xl font-black text-primary">4.9 / 5.0</div>
            <span className="text-[10px] sm:text-[11px] text-muted-foreground font-medium">Over 2,400+ Verified Reviews</span>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-3.5 sm:p-4 space-y-1 text-center">
            <div className="text-xl sm:text-2xl font-black text-primary">25 Years</div>
            <div className="text-[11px] sm:text-xs font-bold text-emerald-700 uppercase">Certified Shelf Life</div>
            <span className="text-[10px] sm:text-[11px] text-muted-foreground font-medium">Nitrogen vacuum sealed</span>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-3.5 sm:p-4 space-y-1 text-center">
            <div className="text-xl sm:text-2xl font-black text-primary">99%</div>
            <div className="text-[11px] sm:text-xs font-bold text-red-700 uppercase">Bio-Availability</div>
            <span className="text-[10px] sm:text-[11px] text-muted-foreground font-medium">Instant cellular absorption</span>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-3.5 sm:p-4 space-y-1 text-center">
            <div className="text-xl sm:text-2xl font-black text-primary">100%</div>
            <div className="text-[11px] sm:text-xs font-bold text-primary uppercase">Made in the USA</div>
            <span className="text-[10px] sm:text-[11px] text-muted-foreground font-medium">cGMP certified quality</span>
          </div>

        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1 sm:pt-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${activeFilter === tab.id
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-card text-muted-foreground border border-border hover:bg-secondary hover:text-primary"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Testimonials Masonry / Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-card border border-border p-5 sm:p-7 shadow-xs hover:border-red-200 hover:shadow-md transition-all space-y-4 sm:space-y-5"
          >
            {/* Header: Stars & Flavor Tag */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                  {review.flavor}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-primary text-base leading-snug">
                &ldquo;{review.title}&rdquo;
              </h3>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                {review.content}
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 font-bold text-primary">
                  <span>{review.name}</span>
                  {review.verified && (
                    <span title="Verified Survival Tabs Purchaser" className="inline-flex text-emerald-600">
                      <CheckCircle2 className="h-3.5 w-3.5 fill-emerald-100" />
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-muted-foreground font-medium">
                  {review.role}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{review.location}</span>
                  <span>&bull;</span>
                  <Calendar className="h-3 w-3" />
                  <span>{review.date}</span>
                </div>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary border border-border text-muted-foreground">
                <Quote className="h-3.5 w-3.5" />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Trust & Guarantee Callout Banner */}
      <div className="rounded-2xl bg-primary text-primary-foreground p-5 sm:p-6 shadow-md flex flex-col items-center justify-between gap-5">
        <div className="space-y-2 text-center max-w-xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/10 px-3 py-0.5 text-[11px] font-semibold text-amber-400">
            <ShieldCheck className="h-3 w-3 text-emerald-400" />
            <span>25-YEAR SHELF-LIFE GUARANTEE</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
            Ready to Secure Your Family's Emergency Food Supply?
          </h2>
          <p className="text-xs text-primary-foreground/80 leading-relaxed">
            Join thousands of preparedness families, wilderness outfitters, and first responders who
            count on The Survival Tabs for dependable, compact emergency nutrition.
          </p>
        </div>

        <div className="shrink-0 flex flex-col gap-2.5 w-full">
          <button
            onClick={onOrderNow}
            className="flex items-center justify-center gap-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <PackageCheck className="h-4 w-4" />
            <span>Order Survival Tabs Now</span>
          </button>

          <button
            onClick={onNavigateHome}
            className="flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 hover:bg-primary-foreground/10 text-primary-foreground font-semibold px-6 py-3 text-xs transition-colors cursor-pointer"
          >
            <span>Return to Home Page</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default TestimonialsPage
