import { useState, type FormEvent } from "react"
import {
  Globe,
  ShieldCheck,
  Check,
  X,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  HeartPulse,
  Compass,
} from "lucide-react"

interface ForeignExportPageProps {
  onNavigateHome?: () => void
  onNavigateMakeMoney?: () => void
  onNavigateContact?: () => void
}

interface CompetitorComparison {
  brand: string
  name: string
  days: string
  cost: string
  weight: string
  shelfLife: string
  rda100: boolean
  absorption100: boolean
  lightweight: boolean
  noPrep: boolean
  nonGmo: boolean
  glutenFree: boolean
  freeShipping: boolean
  isHighlight?: boolean
}

const comparisonData: CompetitorComparison[] = [
  {
    brand: "SURVIVAL TABS",
    name: "Survival Tabs (Mil-Spec)",
    days: "15 Days",
    cost: "$38.50",
    weight: "2 LB",
    shelfLife: "25 YEARS",
    rda100: true,
    absorption100: true,
    lightweight: true,
    noPrep: true,
    nonGmo: true,
    glutenFree: true,
    freeShipping: true,
    isHighlight: true,
  },
  {
    brand: "LEGACY",
    name: "Legacy Premium Food",
    days: "15 Days",
    cost: "$89.38",
    weight: "11.53 LB",
    shelfLife: "25 YEARS",
    rda100: false,
    absorption100: false,
    lightweight: false,
    noPrep: false,
    nonGmo: false,
    glutenFree: false,
    freeShipping: true,
  },
  {
    brand: "WISE COMPANY",
    name: "Wise Company Food",
    days: "15 Days",
    cost: "$94.06",
    weight: "10.05 LB",
    shelfLife: "25 YEARS",
    rda100: false,
    absorption100: false,
    lightweight: false,
    noPrep: false,
    nonGmo: false,
    glutenFree: false,
    freeShipping: false,
  },
  {
    brand: "FOOD INSURANCE",
    name: "foodinsurance.com",
    days: "15 Days",
    cost: "$306.67",
    weight: "22.05 LB",
    shelfLife: "25 YEARS",
    rda100: false,
    absorption100: false,
    lightweight: false,
    noPrep: false,
    nonGmo: false,
    glutenFree: false,
    freeShipping: false,
  },
  {
    brand: "EFOODS",
    name: "efoods DIRECT",
    days: "15 Days",
    cost: "$128.46",
    weight: "20.42 LB",
    shelfLife: "25 YEARS",
    rda100: false,
    absorption100: false,
    lightweight: false,
    noPrep: false,
    nonGmo: false,
    glutenFree: false,
    freeShipping: false,
  },
  {
    brand: "MOUNTAIN HOUSE",
    name: "Mountain House",
    days: "15 Days",
    cost: "$82.99",
    weight: "15.00 LB",
    shelfLife: "25 YEARS",
    rda100: false,
    absorption100: false,
    lightweight: false,
    noPrep: false,
    nonGmo: false,
    glutenFree: false,
    freeShipping: false,
  },
  {
    brand: "LINDON FARMS",
    name: "Lindon Farms",
    days: "15 Days",
    cost: "$215.99",
    weight: "12.00 LB",
    shelfLife: "25 YEARS",
    rda100: false,
    absorption100: false,
    lightweight: false,
    noPrep: false,
    nonGmo: false,
    glutenFree: false,
    freeShipping: true,
  },
]

export function ForeignExportPage({
  onNavigateContact,
}: ForeignExportPageProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    country: "",
    email: "",
    phone: "",
    businessType: "International Wholesaler / Importer",
    projectedVolume: "Pallet Load (100+ cases)",
    portOrDestination: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const scrollToApply = () => {
    const el = document.getElementById("export-application")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 space-y-6 pt-2 pb-12">
      {/* Main Header Card (Verbatim from Image 1) */}
      <section className="relative rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs overflow-hidden text-center space-y-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[11px] font-bold text-blue-800 tracking-wider uppercase">
            <span>GLOBAL COMMERCE BULK SUPPLY</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary max-w-4xl mx-auto leading-tight">
            HOW DO SURVIVAL TABS WORK?
          </h1>
          <div className="h-0.5 w-12 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* 3 Core Functional Sections */}
        <div className="grid grid-cols-1 gap-4 text-left">
          {/* 1. The Main Purpose */}
          <div className="rounded-2xl bg-secondary border border-border p-6 sm:p-7 space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-sm">
                1
              </span>
              <Compass className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-base sm:text-lg font-black text-primary uppercase">
              THE MAIN PURPOSE
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Survival Tabs are meant to keep you alive and going for months at a time. A person can survive 4-5 months by eating The Survival Tabs exclusively. One daily serving of 12 tablets contains 240 calories, which gives the body the basic daily nourishment required when the recommended calorie intake cannot be met. The Survival Tabs eliminate the need to forage for food in situations where you are lost, stranded, or trapped.
            </p>
          </div>

          {/* 2. Disaster Preparedness */}
          <div className="rounded-2xl bg-secondary border border-border p-6 sm:p-7 space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white font-black text-sm">
                2
              </span>
              <ShieldCheck className="h-5 w-5 text-amber-600" />
            </div>
            <h2 className="text-base sm:text-lg font-black text-primary uppercase">
              DISASTER PREPAREDNESS
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              In an emergency situation, one 180-tablet bottle of chewable tabs supplies a person with 15 days worth of survival food based on the recommended consumption of 12 tablets per day. This can be stretched to a 30-day supply under extreme conditions. The Survival Tabs remain usable for 90 days once opened, before losing their efficacy. They have an unopened shelf life of 25 years. This makes them ideal to store in preparation for natural disasters.
            </p>
          </div>

          {/* 3. Advance Nutrition */}
          <div className="rounded-2xl bg-secondary border border-border p-6 sm:p-7 space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white font-black text-sm">
                3
              </span>
              <HeartPulse className="h-5 w-5 text-emerald-600" />
            </div>
            <h2 className="text-base sm:text-lg font-black text-primary uppercase">
              ADVANCE NUTRITION
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The quality of the food we eat is more important than the quantity. Of a foods&apos; theoretical calorie content, 30-60% is unused by the body and converts to unhealthy fat. The Survival Tabs are so completely and quickly digested they have a 99% absorption rate. Within five minutes of consuming the tabs, 97% of the protein is available to repair and replace essential body tissues and fluids. These tabs were created for the Early Space Program using high-quality protein, carbohydrates and fat to provide the body with 100% of the daily essential vitamins and minerals required to maintain physical functions such as dexterity, stamina and coordination.
            </p>
          </div>
        </div>

        {/* Global Users Banner */}
        <div className="pt-4 border-t border-border space-y-4">
          <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-primary max-w-3xl mx-auto">
            USED AS SURVIVAL FOOD AROUND THE WORLD BY: HIKERS, CAMPERS, CYCLIST, HUNTERS, RESCUE TEAMS, EXPEDITIONERS, SAFARIS, FIREMEN, MOUNTAIN CLIMBERS, AND PREPPERS
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="rounded-xl overflow-hidden aspect-[4/3] border border-border shadow-xs relative">
              <img
                src="/banners/trekking-camping-hiking-and-wild-life-concept.jpeg"
                alt="Hikers and Campers"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                Hikers &amp; Hunters
              </span>
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] border border-border shadow-xs relative">
              <img
                src="/banners/airman-alaska_large.jpg"
                alt="Rescue Teams and Firemen"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                Search &amp; Rescue
              </span>
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] border border-border shadow-xs relative">
              <img
                src="/banners/everest-base-camp-mountains-landscape.jpeg"
                alt="Mountain Climbers"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                Mountain Climbers
              </span>
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] border border-border shadow-xs relative">
              <img
                src="/banners/party-camping-of-men-and-women-group-at-forest.jpeg"
                alt="Expeditioners and Safaris"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">
                Expeditions &amp; Safaris
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 15-Day Food Supply Product Comparison Matrix (Verbatim from Image 2 & 3) */}
      <section className="rounded-2xl bg-card border border-border p-4 sm:p-5 shadow-xs space-y-5">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl sm:text-4xl font-black text-red-600">15 DAY</span>
            <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-primary text-left leading-tight">
              Food Supply <br />
              <span className="text-amber-500 font-bold">Product Comparison</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            See why international distributors and relief organizations choose Survival Tabs over heavy traditional bucket foods.
          </p>
        </div>

        {/* Responsive Table Wrapper with Horizontal Scroll */}
        <div className="overflow-x-auto rounded-2xl border border-border shadow-xs">
          <table className="w-full text-xs text-left text-foreground min-w-[760px]">
            {/* Table Header */}
            <thead className="text-[11px] uppercase tracking-wider bg-secondary border-b border-border text-primary">
              <tr>
                <th scope="col" className="px-4 py-3.5 font-bold sticky left-0 bg-secondary z-10 w-44">
                  Feature / Criteria
                </th>
                {comparisonData.map((col) => (
                  <th
                    key={col.brand}
                    scope="col"
                    className={`px-3 py-3.5 text-center font-bold ${
                      col.isHighlight ? "bg-red-50 text-red-700 font-black border-x border-red-200" : ""
                    }`}
                  >
                    <div className="whitespace-nowrap">{col.brand}</div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-border bg-card">
              {/* Row 1: Total Days */}
              <tr>
                <td className="px-4 py-3 font-semibold text-primary sticky left-0 bg-card z-10 border-r border-border">
                  Total Days of Supply
                </td>
                {comparisonData.map((c, i) => (
                  <td key={i} className={`px-3 py-3 text-center ${c.isHighlight ? "bg-red-50/50 font-bold text-primary border-x border-red-200" : ""}`}>
                    {c.days}
                  </td>
                ))}
              </tr>

              {/* Row 2: Total Cost */}
              <tr>
                <td className="px-4 py-3 font-semibold text-primary sticky left-0 bg-card z-10 border-r border-border">
                  Total Cost (with shipping)
                </td>
                {comparisonData.map((c, i) => (
                  <td
                    key={i}
                    className={`px-3 py-3 text-center ${
                      c.isHighlight
                        ? "bg-red-50/70 font-black text-red-600 text-sm border-x border-red-200"
                        : "text-muted-foreground font-medium"
                    }`}
                  >
                    {c.cost}
                  </td>
                ))}
              </tr>

              {/* Row 3: Total Package Weight (Key for Export!) */}
              <tr className="bg-secondary/60">
                <td className="px-4 py-3 font-semibold text-primary sticky left-0 bg-secondary z-10 border-r border-border">
                  Total Package Weight
                </td>
                {comparisonData.map((c, i) => (
                  <td
                    key={i}
                    className={`px-3 py-3 text-center ${
                      c.isHighlight
                        ? "bg-emerald-50 font-black text-emerald-700 text-sm border-x border-emerald-300"
                        : "text-muted-foreground font-medium"
                    }`}
                  >
                    {c.weight}
                  </td>
                ))}
              </tr>

              {/* Row 4: Shelf Life */}
              <tr>
                <td className="px-4 py-3 font-semibold text-primary sticky left-0 bg-card z-10 border-r border-border">
                  Shelf Life
                </td>
                {comparisonData.map((c, i) => (
                  <td key={i} className={`px-3 py-3 text-center ${c.isHighlight ? "bg-red-50/50 font-bold border-x border-red-200" : ""}`}>
                    {c.shelfLife}
                  </td>
                ))}
              </tr>

              {/* Row 5: 100% US RDA */}
              <tr>
                <td className="px-4 py-3 font-semibold text-primary sticky left-0 bg-card z-10 border-r border-border">
                  100% of US RDA (15 vitamins &amp; minerals)
                </td>
                {comparisonData.map((c, i) => (
                  <td key={i} className={`px-3 py-3 text-center ${c.isHighlight ? "bg-red-50/50 border-x border-red-200" : ""}`}>
                    {c.rda100 ? (
                      <Check className="h-4 w-4 text-emerald-600 mx-auto stroke-[3]" />
                    ) : (
                      <X className="h-4 w-4 text-red-400 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>

              {/* Row 6: 100% Absorption Rate */}
              <tr>
                <td className="px-4 py-3 font-semibold text-primary sticky left-0 bg-card z-10 border-r border-border">
                  100% Absorption Rate
                </td>
                {comparisonData.map((c, i) => (
                  <td key={i} className={`px-3 py-3 text-center ${c.isHighlight ? "bg-red-50/50 border-x border-red-200" : ""}`}>
                    {c.absorption100 ? (
                      <Check className="h-4 w-4 text-emerald-600 mx-auto stroke-[3]" />
                    ) : (
                      <X className="h-4 w-4 text-red-400 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>

              {/* Row 7: Convenient & Lightweight */}
              <tr>
                <td className="px-4 py-3 font-semibold text-primary sticky left-0 bg-card z-10 border-r border-border">
                  Convenient &amp; Lightweight For Easy Carrying
                </td>
                {comparisonData.map((c, i) => (
                  <td key={i} className={`px-3 py-3 text-center ${c.isHighlight ? "bg-red-50/50 border-x border-red-200" : ""}`}>
                    {c.lightweight ? (
                      <Check className="h-4 w-4 text-emerald-600 mx-auto stroke-[3]" />
                    ) : (
                      <X className="h-4 w-4 text-red-400 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>

              {/* Row 8: No Prep */}
              <tr>
                <td className="px-4 py-3 font-semibold text-primary sticky left-0 bg-card z-10 border-r border-border">
                  No Preparation Necessary
                </td>
                {comparisonData.map((c, i) => (
                  <td key={i} className={`px-3 py-3 text-center ${c.isHighlight ? "bg-red-50/50 border-x border-red-200" : ""}`}>
                    {c.noPrep ? (
                      <Check className="h-4 w-4 text-emerald-600 mx-auto stroke-[3]" />
                    ) : (
                      <X className="h-4 w-4 text-red-400 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>

              {/* Row 9: Non GMO */}
              <tr>
                <td className="px-4 py-3 font-semibold text-primary sticky left-0 bg-card z-10 border-r border-border">
                  Non GMO
                </td>
                {comparisonData.map((c, i) => (
                  <td key={i} className={`px-3 py-3 text-center ${c.isHighlight ? "bg-red-50/50 border-x border-red-200" : ""}`}>
                    {c.nonGmo ? (
                      <Check className="h-4 w-4 text-emerald-600 mx-auto stroke-[3]" />
                    ) : (
                      <X className="h-4 w-4 text-red-400 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>

              {/* Row 10: Gluten Free */}
              <tr>
                <td className="px-4 py-3 font-semibold text-primary sticky left-0 bg-card z-10 border-r border-border">
                  Gluten Free
                </td>
                {comparisonData.map((c, i) => (
                  <td key={i} className={`px-3 py-3 text-center ${c.isHighlight ? "bg-red-50/50 border-x border-red-200" : ""}`}>
                    {c.glutenFree ? (
                      <Check className="h-4 w-4 text-emerald-600 mx-auto stroke-[3]" />
                    ) : (
                      <X className="h-4 w-4 text-red-400 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>

              {/* Row 11: Free Shipping */}
              <tr>
                <td className="px-4 py-3 font-semibold text-primary sticky left-0 bg-card z-10 border-r border-border">
                  Free Shipping Option
                </td>
                {comparisonData.map((c, i) => (
                  <td key={i} className={`px-3 py-3 text-center ${c.isHighlight ? "bg-red-50/50 border-x border-red-200" : ""}`}>
                    {c.freeShipping ? (
                      <Check className="h-4 w-4 text-emerald-600 mx-auto stroke-[3]" />
                    ) : (
                      <X className="h-4 w-4 text-red-400 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA Bar below comparison */}
        <div className="text-center pt-4 space-y-3">
          <button
            onClick={scrollToApply}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-3.5 text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Become a Reseller now!</span>
          </button>
          <p className="text-xs text-muted-foreground">
            Fill out our Foreign Reseller Application to know find out about Survival Tabs and our Wholesale Pricing Options.
          </p>
          <div className="font-extrabold text-xs uppercase tracking-widest text-primary pt-1">
            SURVIVAL TABS IS A PRODUCT OF THE UNITED STATES OF AMERICA
          </div>
        </div>
      </section>

      {/* Foreign Reseller Application Form */}
      <section
        id="export-application"
        className="rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs space-y-6"
      >
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Global Trade Inquiry
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-primary uppercase">
            Foreign Reseller &amp; Export Application
          </h2>
          <div className="h-0.5 w-16 bg-primary mx-auto" />
          <p className="text-xs sm:text-sm text-muted-foreground">
            Our international freight &amp; compliance desk will review your inquiry and provide CIF/FOB freight quotes and customs documentation within 24 hours.
          </p>
        </div>

        {isSubmitted ? (
          <div className="max-w-xl mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white mx-auto shadow">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-emerald-950">
              Export Inquiry Received!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              Thank you, <strong>{formData.contactName}</strong>. Our international export desk has received your request for <strong>{formData.companyName || "your company"}</strong> ({formData.country}). We will email our international wholesale catalog and freight estimates to <strong>{formData.email}</strong> shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
            >
              Submit another export inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Company / Organization Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Global Emergency Supplies Ltd."
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Contact Person *
                </label>
                <input
                  required
                  type="text"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder="Alexander Rossi"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Destination Country / Region *
                </label>
                <input
                  required
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. United Kingdom, Japan, Australia"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Business Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="imports@globalcorp.com"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Phone (with Country Code) *
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+44 20 7946 0958"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Organization / Entity Type
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="International Wholesaler / Importer">International Wholesaler / Importer</option>
                  <option value="Military & Defense Contractor">Military &amp; Defense Contractor</option>
                  <option value="Disaster Relief / NGO Agency">Disaster Relief / NGO Agency</option>
                  <option value="Maritime & Aviation Supplier">Maritime &amp; Aviation Supplier</option>
                  <option value="Specialty Outdoor & Prepper Retailer">Specialty Outdoor &amp; Prepper Retailer</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Initial Order Scope
                </label>
                <select
                  value={formData.projectedVolume}
                  onChange={(e) => setFormData({ ...formData, projectedVolume: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="Quarter Pallet (25 Cases)">Quarter Pallet (25 Cases / 300 Bottles)</option>
                  <option value="Half Pallet (50 Cases)">Half Pallet (50 Cases / 600 Bottles)</option>
                  <option value="Full Pallet Load (100 Cases)">Full Pallet Load (100 Cases / 1,200 Bottles)</option>
                  <option value="20ft Container (10 Pallets)">20ft FCL Container (10 Pallets)</option>
                  <option value="40ft Container (20+ Pallets)">40ft FCL Container (20+ Pallets)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Target Port / Freight Forwarder
                </label>
                <input
                  type="text"
                  value={formData.portOrDestination}
                  onChange={(e) => setFormData({ ...formData, portOrDestination: e.target.value })}
                  placeholder="e.g. Port of Rotterdam or Los Angeles forwarder"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                Customs, Certificates, or Distribution Requirements
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Specify any Certificate of Analysis (COA), export documentation, or pallet tagging requirements..."
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Submitting Export Application...</span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Submit Foreign Reseller Application</span>
                </>
              )}
            </button>
          </form>
        )}
      </section>

      {/* Direct Contact Bar */}
      <section className="rounded-2xl bg-secondary border border-border p-5 flex flex-col gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-primary flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span>International Export Operations &bull; USA Logistics</span>
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            For container quotes, air-cargo charters, or institutional export contracts, contact our international desk.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-secondary-foreground">
          <a
            href="tel:800-944-1511"
            className="inline-flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-600" />
            <span>800-944-1511</span>
          </a>
          <span className="text-border">&bull;</span>
          <a
            href="mailto:Sales@FoodReserves.com"
            className="inline-flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-emerald-600" />
            <span>Sales@FoodReserves.com</span>
          </a>
          {onNavigateContact && (
            <>
              <span className="text-border">&bull;</span>
              <button
                onClick={onNavigateContact}
                className="hover:text-emerald-600 transition-colors cursor-pointer"
              >
                Online Support Form
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default ForeignExportPage;
