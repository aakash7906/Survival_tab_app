import { useState, useEffect } from "react"
import {
  ShieldCheck,
  Zap,
  Users,
  Calendar,
  Check,
  Plus,
  DropletOff,
  Clock,
  Compass,
  ArrowRight,
} from "lucide-react"
import type { ProductItem } from "../components/PurchaseSection"
import { EmergencyRationsSection } from "../components/EmergencyRationsSection"
import { SurvivalConceptSection } from "../components/SurvivalConceptSection"

const bannerImages = [
  { src: "/banners/trekking-camping-hiking-and-wild-life-concept.jpeg", alt: "Trekking and Camping Wilderness Adventure" },
  { src: "/banners/friends-camping-at-campsite.jpeg", alt: "Friends Camping at Scenic Campsite" },
  { src: "/banners/party-camping-of-men-and-women-group-at-forest.jpeg", alt: "Group Forest Camping and Outdoor Exploration" },
  { src: "/banners/everest-base-camp-mountains-landscape.jpeg", alt: "Everest Base Camp High Altitude Expedition" },
  { src: "/banners/ama-dablam-mountain-in-himalaya-inspirational-2.jpeg", alt: "Ama Dablam Mountain Summit Expedition" },
  { src: "/banners/alaskan-large.jpg", alt: "Alaskan Wilderness Survival Experience" },
  { src: "/banners/airman-alaska_large.jpg", alt: "Airman Alaska Survival Preparedness" },
  { src: "/banners/apollo-mission.jpeg", alt: "Apollo Mission Space Heritage" },
  { src: "/banners/astronaut-in-outer-space-PLEE4QR.jpeg", alt: "Astronaut in Outer Space Space Food Nutrition" },
]

const featuredProducts: ProductItem[] = [
  {
    id: "st-chocolate",
    name: "Survival Tabs Chocolate",
    flavor: "Chocolate",
    price: 39.95,
    illustration: "Roasted Cocoa",
    image: "/images/chocolate.png",
  },
  {
    id: "st-banana",
    name: "Survival Tabs Banana",
    flavor: "Banana",
    price: 39.95,
    illustration: "Natural Banana",
    image: "/images/banana.png",
  },
  {
    id: "Orange",
    name: "Survival Tabs Orange",
    flavor: "Orange",
    price: 39.95,
    illustration: "Tangy Citrus",
    image: "/images/orange.jpg",
  },
  {
    id: "st-Maple",
    name: "Survival Tabs Maple",
    flavor: "Maple",
    price: 39.95,
    illustration: "Rich Maple",
    image: "/images/maple.jpg",
  },
  {
    id: "st-vanilla",
    name: "Survival Tabs Vanilla Malt",
    flavor: "Vanilla Malt",
    price: 39.95,
    illustration: "Vanilla Bean",
    image: "/images/vanila malt.png",
  },
]

interface HomePageProps {
  onAddToCart: (product: ProductItem) => void
  onNavigateSubpage?: (page: string) => void
}

export function HomePage({ onAddToCart }: HomePageProps) {
  // Survival Days Calculator State
  const [persons, setPersons] = useState(2)
  const [days, setDays] = useState(30)
  const [activeFlavorId, setActiveFlavorId] = useState("st-chocolate")
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({})
  const [bannerSlide, setBannerSlide] = useState(0)

  // Auto-slide banner images every 2.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerSlide((prev) => (prev + 1) % bannerImages.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  // Calculator calculations: 12 chewable tabs per person per day, 180 tabs per jar (15 days for 1 person)
  const totalTabsNeeded = persons * days * 12
  const bottlesNeeded = Math.ceil((persons * days) / 15)
  const calculatedBundlePrice = (bottlesNeeded * 39.95).toFixed(2)

  const handleQuickAdd = (product: ProductItem) => {
    onAddToCart(product)
    setAddedItemMap((prev) => ({ ...prev, [product.id]: true }))
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [product.id]: false }))
    }, 1400)
  }

  const handleAddBundle = () => {
    const selectedProd = featuredProducts.find((p) => p.id === activeFlavorId) || featuredProducts[0]
    for (let i = 0; i < bottlesNeeded; i++) {
      onAddToCart(selectedProd)
    }
    setAddedItemMap((prev) => ({ ...prev, bundle: true }))
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, bundle: false }))
    }, 1800)
  }

  const selectedProduct = featuredProducts.find((p) => p.id === activeFlavorId) || featuredProducts[0]

  return (
    <main className="w-full space-y-6 px-4 pt-2 pb-12 font-sans">
      {/* 1. TOP HERO SECTION WITH HERO_SECTION_IMAGE */}
      <section className="relative rounded-3xl overflow-hidden bg-card border border-border/60 shadow-sm">
        {/* Full Image Container without tight cropping */}
        <div className="w-full overflow-hidden bg-card flex items-center justify-center">
          <img
            src="/images/hero_section_image.png"
            alt="Survival Tabs Mil-Spec Emergency Rations"
            className="w-full h-auto object-contain block select-none"
          />
        </div>
      </section>

      {/* 2. COMPACT & MINIMAL SURVIVAL DAYS CALCULATOR */}
      <section className="rounded-3xl bg-card p-4 sm:p-5 shadow-sm border border-border/60 space-y-3.5">
        {/* Compact Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Compass className="h-4 w-4 text-destructive stroke-[2.2]" />
            <h2 className="text-sm sm:text-base font-extrabold tracking-tight text-primary">
              Ration Calculator
            </h2>
          </div>
          <span className="text-[10px] font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded-full border border-border/50">
            12 Tabs / Person / Day
          </span>
        </div>

        {/* Compact Row 1: Persons */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-muted-foreground flex items-center gap-1">
              <Users className="h-3 w-3 text-muted-foreground" />
              Persons
            </span>
            <span className="font-extrabold text-destructive text-xs">
              {persons} {persons === 1 ? "Person" : "Persons"}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setPersons(num)}
                className={`py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-95 border ${
                  persons === num
                    ? "bg-destructive text-white border-destructive shadow-xs"
                    : "bg-secondary/60 hover:bg-secondary text-primary border-border/50"
                }`}
              >
                {num} {num === 1 ? "Adult" : "Adults"}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Row 2: Duration */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3 w-3 text-muted-foreground" />
              Duration
            </span>
            <span className="font-extrabold text-primary text-xs">
              {days} Days Reserve
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[15, 30, 60, 90].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDays(d)}
                className={`py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-95 border ${
                  days === d
                    ? "bg-primary text-primary-foreground border-primary shadow-xs"
                    : "bg-secondary/60 hover:bg-secondary text-primary border-border/50"
                }`}
              >
                {d}d
              </button>
            ))}
          </div>
        </div>

        {/* Compact Row 3: Flavor Selector */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold text-muted-foreground block">
            Flavor
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none]">
            {featuredProducts.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveFlavorId(p.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold shrink-0 transition-all cursor-pointer border ${
                  activeFlavorId === p.id
                    ? "bg-card border-destructive text-destructive shadow-xs ring-1 ring-destructive/30"
                    : "bg-secondary/60 border-border/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.illustration}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Summary & CTA */}
        <div className="rounded-2xl bg-secondary/60 p-3 border border-border/60 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs sm:text-sm font-extrabold text-primary block leading-tight">
                {bottlesNeeded}x {selectedProduct.flavor} Canisters
              </span>
              <span className="text-[10px] text-muted-foreground block">
                {totalTabsNeeded} Tabs &bull; {bottlesNeeded * 15} Single-Person Days
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-muted-foreground block line-through">
                ${(bottlesNeeded * 44.95).toFixed(2)}
              </span>
              <span className="text-sm sm:text-base font-black text-destructive leading-tight">
                ${calculatedBundlePrice}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddBundle}
            className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95 shadow-sm ${
              addedItemMap.bundle
                ? "bg-accent text-accent-foreground"
                : "bg-destructive hover:bg-destructive/90 text-white shadow-destructive/20"
            }`}
          >
            {addedItemMap.bundle ? (
              <>
                <Check className="h-3.5 w-3.5 stroke-[3]" />
                <span>Added {bottlesNeeded} to Cart!</span>
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5 stroke-[3]" />
                <span>Add Items to Cart</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* 3. INTERACTIVE QUICK-ADD FLAVOR CAROUSEL BAR */}
      <section className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div>
            <h3 className="text-base font-black text-primary">
              Quick-Add Canisters
            </h3>
          </div>
        </div>

        {/* Horizontal Scrolling Flavor Cards */}
        <div className="flex gap-3 overflow-x-auto pb-2 pt-1 -mx-4 px-4 [scrollbar-width:none]">
          {featuredProducts.map((product) => {
            const isAdded = !!addedItemMap[product.id]

            return (
              <div
                key={product.id}
                className="w-44 shrink-0 rounded-3xl bg-card border border-border/60 p-3.5 shadow-sm flex flex-col justify-between space-y-3"
              >
                <div className="relative aspect-square w-full rounded-2xl bg-secondary/50 flex items-center justify-center p-2 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-28 w-28 object-contain transition-transform hover:scale-105 duration-300 drop-shadow-sm"
                  />
                  <span className="absolute top-2 left-2 text-xs">
                    {product.illustration.split(" ")[0]}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-extrabold text-primary truncate">
                    {product.name}
                  </h4>
                  <p className="text-[10px] text-muted-foreground">
                    180 Chewable Tabs &bull; 15-Day Supply
                  </p>
                  <span className="text-xs font-black text-destructive block">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleQuickAdd(product)}
                  className={`w-full py-2 rounded-xl font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all ${
                    isAdded
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-primary border border-border/60"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
                      <span>Quick Add</span>
                    </>
                  )}
                </button>
              </div>
            )
          })}
        </div>

        {/* Swipe hint indicator aligned to the right */}
        <div className="flex items-center justify-end gap-1.5 pt-0.5 px-1 text-muted-foreground/80">
          <span className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground">
            Swipe
          </span>
          <ArrowRight className="h-3.5 w-3.5 animate-pulse text-muted-foreground" />
        </div>
      </section>

      {/* PHOTO BANNER FROM PURCHASE SECTION */}
      <section className="w-full">
        <div className="relative w-full h-44 min-[400px]:h-52 sm:h-64 rounded-3xl overflow-hidden shadow-xs bg-primary border border-border">
          {bannerImages.map((img, idx) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === bannerSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* Subtle bottom gradient & dot indicators */}
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-primary/70 to-transparent z-20 pointer-events-none" />

          {/* Dots Indicator */}
          <div className="absolute bottom-2.5 sm:bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-30">
            {bannerImages.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setBannerSlide(dotIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  dotIdx === bannerSlide
                    ? "w-5 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SURVIVAL ADVANTAGE MATRIX (Interactive Chips) */}
      <section className="rounded-3xl bg-card p-5 sm:p-6 shadow-sm border border-border/60 space-y-3">
        <h3 className="text-sm sm:text-base font-extrabold text-primary">
          Why Survival Tabs Outperform MREs & Freeze-Dried Food
        </h3>

        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <div className="rounded-2xl bg-secondary/60 p-3 space-y-1 border border-border/50">
            <DropletOff className="h-4 w-4 text-blue-500" />
            <span className="text-xs font-bold text-primary block">Zero Water Required</span>
            <span className="text-[10px] text-muted-foreground leading-tight block">
              Chew straight from the bottle during blizzards or droughts.
            </span>
          </div>

          <div className="rounded-2xl bg-secondary/60 p-3 space-y-1 border border-border/50">
            <Zap className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-bold text-primary block">99% Cellular ATP</span>
            <span className="text-[10px] text-muted-foreground leading-tight block">
              Absorbs within 5 minutes into the bloodstream without waste.
            </span>
          </div>

          <div className="rounded-2xl bg-secondary/60 p-3 space-y-1 border border-border/50">
            <Clock className="h-4 w-4 text-destructive" />
            <span className="text-xs font-bold text-primary block">25-Year Shelf Life</span>
            <span className="text-[10px] text-muted-foreground leading-tight block">
              Tested at 100°F storage without nutritional deterioration.
            </span>
          </div>

          <div className="rounded-2xl bg-secondary/60 p-3 space-y-1 border border-border/50">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span className="text-xs font-bold text-primary block">Mil-Spec Sealed</span>
            <span className="text-[10px] text-muted-foreground leading-tight block">
              Tamper-evident, hermetic seal resistant to moisture and pests.
            </span>
          </div>
        </div>
      </section>

      {/* 5. Complete Emergency Food Rations Section */}
      <EmergencyRationsSection />

      {/* 6. Survival Food Tab Concept Section (Video player & Space Program copy) */}
      <SurvivalConceptSection />
    </main>
  )
}

export default HomePage
