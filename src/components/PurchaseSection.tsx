import { useState, useEffect } from "react"
import { Check, ShoppingCart } from "lucide-react"

export interface ProductItem {
  id: string
  name: string
  flavor: string
  price: number
  isNew?: boolean
  illustration: string
  image: string
}

const products: ProductItem[] = [
  {
    id: "st-chocolate",
    name: "Survival Tabs Chocolate",
    flavor: "Chocolate",
    price: 39.95,
    illustration: "🍫 Roasted Cocoa",
    image: "/images/chocolate.png",
  },
  {
    id: "st-banana",
    name: "Survival Tabs Banana",
    flavor: "Banana",
    price: 39.95,
    illustration: "🍌 Natural Banana",
    image: "/images/banana.png",
  },
  {
    id: "Orange",
    name: "Survival Tabs Orange",
    flavor: "Orange",
    price: 39.95,
    illustration: "🍊 Orange",
    image: "/images/orange.png",
  },
  {
    id: "st-Maple",
    name: "Survival Tabs Maple",
    flavor: "Maple",
    price: 39.95,
    illustration: "🍁 Maple",
    image: "/images/maple.png",
  },
  {
    id: "st-vanilla",
    name: "Survival Tabs Vanilla Malt",
    flavor: "Vanilla Malt",
    price: 39.95,
    illustration: "🌼 Vanilla Bean",
    image: "/images/vanila malt.png",
  },
]

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

interface PurchaseSectionProps {
  onAddToCart: (item: ProductItem) => void
}

export function PurchaseSection({ onAddToCart }: PurchaseSectionProps) {
  const [addedId, setAddedId] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-swipe every 1.5 seconds (1500ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  const handleAdd = (p: ProductItem) => {
    onAddToCart(p)
    setAddedId(p.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  return (
    <section id="purchase" className="w-full py-2 bg-background space-y-6">
      <div className="w-full space-y-6">

        {/* Camping & Adventure Photo Banner Carousel - Auto-Swipes every 1.5s */}
        <div className="relative w-full h-44 min-[400px]:h-52 sm:h-64 rounded-3xl overflow-hidden shadow-xs bg-primary border border-border">
          {bannerImages.map((img, idx) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
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
                onClick={() => setCurrentSlide(dotIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${dotIdx === currentSlide
                    ? "w-5 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary">
            Purchase Survival Tabs
          </h2>
          <div className="h-0.5 w-12 bg-red-600 mx-auto" />
        </div>

        {/* 5 Authentic Product Columns with Official Bottle Images (Mobile 2-Column Grid) */}
        <div className="grid grid-cols-2 gap-3">
          {products.map((p) => {
            const isAdded = addedId === p.id

            return (
              <div
                key={p.id}
                className="flex flex-col items-center justify-between text-center p-3 sm:p-4 rounded-3xl bg-card shadow-sm hover:shadow active:scale-[0.98] transition-all"
              >
                {/* Official Product Bottle Image from public/images */}
                <div className="relative w-full h-32 min-[400px]:h-36 sm:h-44 flex items-center justify-center p-2 my-1 group">
                  {p.isNew && (
                    <span className="absolute top-0 right-1 z-10 rounded-full bg-red-600 text-white text-[9px] font-black px-2 py-0.5 shadow-xs">
                      NEW!
                    </span>
                  )}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200 mix-blend-multiply"
                  />
                </div>

                {/* Flavor Illustration */}
                <div className="text-[10px] sm:text-[11px] font-semibold text-muted-foreground mb-1 truncate w-full">
                  {p.illustration}
                </div>

                {/* Product Title */}
                <h3 className="font-bold text-xs sm:text-sm text-primary leading-tight mb-1.5 line-clamp-2">
                  {p.name}
                </h3>

                {/* Price */}
                <div className="font-black text-sm sm:text-base text-primary mb-2.5">
                  ${p.price.toFixed(2)}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAdd(p)}
                  className={`w-full flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-xs ${isAdded
                      ? "bg-emerald-600 text-white"
                      : "bg-red-600 hover:bg-red-700 text-white shadow-xs"
                    }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-3.5 w-3.5" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
