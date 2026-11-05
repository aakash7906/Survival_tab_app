import { useState } from "react"
import { Check, ShoppingCart, Truck, ShieldCheck } from "lucide-react"
import type { ProductItem } from "../components/PurchaseSection"

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
    image: "/images/orange.jpg",
  },
  {
    id: "st-Maple",
    name: "Survival Tabs Maple",
    flavor: "Maple",
    price: 39.95,
    illustration: "🍁 Maple",
    image: "/images/maple.jpg",
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

interface ShopPageProps {
  onAddToCart: (item: ProductItem) => void
  onOpenCart?: () => void
}

export function ShopPage({ onAddToCart, onOpenCart }: ShopPageProps) {
  const [addedId, setAddedId] = useState<string | null>(null)
  const [selectedFlavorFilter, setSelectedFlavorFilter] = useState<string>("all")

  const handleAdd = (p: ProductItem) => {
    onAddToCart(p)
    setAddedId(p.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  const filteredProducts = selectedFlavorFilter === "all"
    ? products
    : products.filter((p) => p.flavor.toLowerCase().includes(selectedFlavorFilter.toLowerCase()))

  return (
    <div className="w-full space-y-4 px-4 pt-3 pb-8">
      {/* Top Value Banner */}
      <div className="flex items-center justify-between gap-2 p-2.5 rounded-2xl bg-secondary/80 border border-border text-xs">
        <div className="flex items-center gap-1.5 font-bold text-primary">
          <Truck className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>Free US Shipping Over $150</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-red-600 shrink-0" />
          <span>25-Yr Shelf Life</span>
        </div>
      </div>

      {/* Header & Filter Chips */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary">
              Order Rations
            </h1>
            <p className="text-xs text-muted-foreground">
              Select your favorite flavor or bundle canisters
            </p>
          </div>


        </div>

        {/* Horizontal Flavor Filter Scroll */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[
            { id: "all", label: "All Flavors" },
            { id: "chocolate", label: "🍫 Chocolate" },
            { id: "banana", label: "🍌 Banana" },
            { id: "orange", label: "🍊 Orange" },
            { id: "maple", label: "🍁 Maple" },
            { id: "vanilla", label: "🌼 Vanilla Malt" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFlavorFilter(f.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer active:scale-95 ${
                selectedFlavorFilter === f.id
                  ? "bg-primary text-primary-foreground shadow-xs font-bold"
                  : "bg-secondary text-muted-foreground border border-border hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile 2-Column Product Grid */}
      <div className="grid grid-cols-2 gap-3">
        {filteredProducts.map((p) => {
          const isAdded = addedId === p.id

          return (
            <div
              key={p.id}
              className="flex flex-col justify-between rounded-3xl bg-card p-3 sm:p-4 shadow-sm hover:shadow active:scale-[0.98] transition-all group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square rounded-2xl bg-secondary/50 flex items-center justify-center p-2 mb-2 overflow-hidden">
                {p.isNew && (
                  <span className="absolute top-2 left-2 z-10 rounded-full bg-red-600 text-white text-[9px] font-black px-2 py-0.5 shadow-sm">
                    NEW!
                  </span>
                )}
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200 mix-blend-multiply"
                />
              </div>

              {/* Flavor Tag & Title */}
              <div className="space-y-1 mb-2">
                <span className="text-[10px] font-bold text-muted-foreground block truncate">
                  {p.illustration}
                </span>
                <h3 className="font-black text-xs sm:text-sm text-primary leading-tight line-clamp-2">
                  {p.name}
                </h3>
              </div>

              {/* Price & Action Button */}
              <div className="pt-2 border-t border-border flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] text-muted-foreground">15 Days</span>
                  <span className="font-black text-sm sm:text-base text-primary">
                    ${p.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => handleAdd(p)}
                  className={`w-full flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-xs ${
                    isAdded
                      ? "bg-emerald-600 text-white"
                      : "bg-red-600 hover:bg-red-700 text-white"
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
            </div>
          )
        })}
      </div>

      {/* Floating View Cart Trigger Card */}
      {onOpenCart && (
        <div className="rounded-2xl bg-secondary border border-border p-3.5 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">Ready to review your rations?</span>
          </div>
          <button
            onClick={onOpenCart}
            className="font-bold text-red-600 hover:underline cursor-pointer"
          >
            Open Cart &rarr;
          </button>
        </div>
      )}
    </div>
  )
}

export default ShopPage
