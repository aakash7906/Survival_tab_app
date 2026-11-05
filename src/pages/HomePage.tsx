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
  ArrowRight,
  Award,
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

interface ExtendedProductItem extends ProductItem {
  colorBg: string
  pillColor: string
  rating: string
}

const featuredProducts: ExtendedProductItem[] = [
  {
    id: "st-chocolate",
    name: "Survival Tabs Chocolate",
    flavor: "Chocolate",
    price: 39.95,
    illustration: "🍫 Roasted Cocoa",
    image: "/images/chocolate.png",
    colorBg: "from-amber-950/20 to-orange-950/10",
    pillColor: "border-amber-700/30 text-amber-900 bg-amber-50/70",
    rating: "4.9 ★",
  },
  {
    id: "st-banana",
    name: "Survival Tabs Banana",
    flavor: "Banana",
    price: 39.95,
    illustration: "🍌 Natural Banana",
    image: "/images/banana.png",
    colorBg: "from-amber-400/20 to-yellow-500/10",
    pillColor: "border-yellow-600/30 text-yellow-900 bg-yellow-50/70",
    rating: "4.9 ★",
  },
  {
    id: "Orange",
    name: "Survival Tabs Orange",
    flavor: "Orange",
    price: 39.95,
    illustration: "🍊 Tangy Citrus",
    image: "/images/orange.png",
    colorBg: "from-orange-500/20 to-amber-500/10",
    pillColor: "border-orange-600/30 text-orange-900 bg-orange-50/70",
    rating: "4.8 ★",
  },
  {
    id: "st-Maple",
    name: "Survival Tabs Maple",
    flavor: "Maple",
    price: 39.95,
    illustration: "🍁 Rich Maple",
    image: "/images/maple.png",
    colorBg: "from-amber-600/20 to-red-950/10",
    pillColor: "border-amber-800/30 text-amber-900 bg-amber-50/70",
    rating: "4.9 ★",
  },
  {
    id: "st-vanilla",
    name: "Survival Tabs Vanilla Malt",
    flavor: "Vanilla Malt",
    price: 39.95,
    illustration: "🌼 Vanilla Bean",
    image: "/images/vanila malt.png",
    colorBg: "from-stone-300/30 to-amber-100/20",
    pillColor: "border-stone-400/30 text-stone-900 bg-stone-50/70",
    rating: "4.9 ★",
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
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Auto-slide banner images every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerSlide((prev) => (prev + 1) % bannerImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  // Swipe detection for user gesture
  const minSwipeDistance = 40
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setBannerSlide((prev) => (prev + 1) % bannerImages.length)
    } else if (isRightSwipe) {
      setBannerSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
    }
  }

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
    <main className="w-full space-y-7 px-4 pt-4 sm:pt-5 pb-16 font-sans">
      {/* 1. TOP HERO SECTION (PRESERVED INTACT WITH GENEROUS TOP CLEARANCE) */}
      <section className="relative rounded-3xl overflow-hidden bg-card border border-border/60 shadow-sm mt-1 sm:mt-2">
        <div className="w-full overflow-hidden bg-card flex items-center justify-center">
          <img
            src="/images/hero_section_image.png"
            alt="Survival Tabs Mil-Spec Emergency Rations"
            className="w-full h-auto object-contain block select-none"
          />
        </div>
      </section>

      {/* 2. VALUE TRUST STRIP (Aesthetic & Customer Centric) */}
      <section className="grid grid-cols-3 gap-2.5 sm:gap-3 py-1">
        <div className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-card border border-border/60 shadow-2xs text-center space-y-1.5">
          <Clock className="h-4 w-4 text-destructive stroke-[2.2]" />
          <span className="text-xs font-black text-primary">25 Years</span>
          <span className="text-[10px] text-muted-foreground font-medium">Guaranteed Shelf</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-card border border-border/60 shadow-2xs text-center space-y-1.5">
          <Zap className="h-4 w-4 text-amber-500 stroke-[2.2]" />
          <span className="text-xs font-black text-primary">99% Absorbed</span>
          <span className="text-[10px] text-muted-foreground font-medium">Zero Waste Energy</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-card border border-border/60 shadow-2xs text-center space-y-1.5">
          <Award className="h-4 w-4 text-accent stroke-[2.2]" />
          <span className="text-xs font-black text-primary">Space Heritage</span>
          <span className="text-[10px] text-muted-foreground font-medium">Apollo Tested</span>
        </div>
      </section>

      {/* 3. INTERACTIVE FLAVOR VAULT & QUICK-ADD CANISTERS */}
      <section className="space-y-3.5 py-1">
        <div className="flex items-center justify-between px-1">
          <div className="space-y-0.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-destructive">
              Pure Nutrition Flavors
            </span>
            <h3 className="text-base font-extrabold tracking-tight text-primary">
              Ready-To-Ship Canisters
            </h3>
          </div>
        </div>

        {/* Horizontal Scrolling Modern Cards with Glow & Quick Action */}
        <div className="flex gap-4 overflow-x-auto pb-3 pt-1 -mx-4 px-4 [scrollbar-width:none]">
          {featuredProducts.map((product) => {
            const isAdded = !!addedItemMap[product.id]

            return (
              <div
                key={product.id}
                className="w-48 shrink-0 rounded-3xl bg-card border border-border/60 p-3.5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3 relative group"
              >
                {/* Product Image with Flavor Ambience Background */}
                <div
                  className={`relative aspect-square w-full rounded-2xl bg-gradient-to-br ${product.colorBg} flex items-center justify-center p-2 overflow-hidden border border-border/40`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-108 drop-shadow-md"
                  />
                  {/* Flavor emoji tag */}
                  <span className="absolute top-2 left-2 text-xs bg-card/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-border/60 shadow-2xs font-bold text-primary">
                    {product.illustration.split(" ")[0]}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded-md border border-amber-200">
                      {product.rating}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-semibold">
                      180 Tabs
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-primary truncate leading-tight">
                    {product.name}
                  </h4>
                  <div className="pt-0.5">
                    <span className="text-xs font-black text-destructive">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Quick Add Button */}
                <button
                  type="button"
                  onClick={() => handleQuickAdd(product)}
                  className={`w-full py-2.5 rounded-xl font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all shadow-2xs ${
                    isAdded
                      ? "bg-accent text-accent-foreground"
                      : "bg-destructive hover:bg-destructive/90 text-white shadow-destructive/20"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-3.5 w-3.5 stroke-[2.8]" />
                      <span>Added To Cart!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="h-3.5 w-3.5 stroke-[2.8]" />
                      <span>Quick Add</span>
                    </>
                  )}
                </button>
              </div>
            )
          })}
        </div>

        {/* Swipe hint indicator aligned to the right */}
        <div className="flex items-center justify-end gap-1.5 pt-1 px-1 text-muted-foreground/80">
          <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">
            Swipe Flavors
          </span>
          <ArrowRight className="h-3 w-3 animate-pulse text-muted-foreground" />
        </div>
      </section>

      {/* 4. COMPACT & MINIMAL SURVIVAL DAYS CALCULATOR */}
      <section className="rounded-3xl bg-card p-5 sm:p-6 shadow-sm border border-border/60 space-y-4">
        {/* Compact Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <h2 className="text-sm sm:text-base font-extrabold tracking-tight text-primary">
              Ration Calculator
            </h2>
          </div>
          <span className="text-[10px] font-bold text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full border border-border/50">
            12 Tabs / Person / Day
          </span>
        </div>

        {/* Compact Row 1: Persons */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-muted-foreground flex items-center gap-1">
              <Users className="h-3 w-3 text-muted-foreground" />
              Persons
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setPersons(num)}
                className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-95 border ${
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
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3 w-3 text-muted-foreground" />
              Duration
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[15, 30, 60, 90].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDays(d)}
                className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-95 border ${
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
        <div className="space-y-2">
          <span className="text-[11px] font-semibold text-muted-foreground block">
            Flavor
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
            {featuredProducts.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveFlavorId(p.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer border ${
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
        <div className="rounded-2xl bg-secondary/60 p-4 border border-border/60 space-y-3">
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
            className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95 shadow-sm ${
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
                <span>Add Cache to Cart</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* 5. PHOTO BANNER CAROUSEL FROM PURCHASE SECTION */}
      <section className="w-full">
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative w-full h-44 min-[400px]:h-52 sm:h-60 rounded-3xl overflow-hidden shadow-xs bg-primary border border-border select-none cursor-grab active:cursor-grabbing"
        >
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

      {/* 6. SURVIVAL ADVANTAGE MATRIX (Why Survival Tabs Outperform MREs) */}
      <section className="rounded-3xl bg-card p-5 sm:p-6 shadow-sm border border-border/60 space-y-3">
        <h3 className="text-sm sm:text-base font-extrabold text-primary">
          Why Survival Tabs Outperform MREs &amp; Freeze-Dried Food
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

      {/* 8. COMPLETE EMERGENCY FOOD RATIONS SECTION */}
      <EmergencyRationsSection />

      {/* 9. SURVIVAL FOOD TAB CONCEPT SECTION (Video Player & Space Heritage) */}
      <SurvivalConceptSection />
    </main>
  )
}

export default HomePage
