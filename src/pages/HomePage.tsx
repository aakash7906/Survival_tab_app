
import { EmergencyRationsSection } from "../components/EmergencyRationsSection"
import { PurchaseSection, type ProductItem } from "../components/PurchaseSection"
import { NutritionFactsSection } from "../components/NutritionFactsSection"
import { SurvivalConceptSection } from "../components/SurvivalConceptSection"
import { ShoppingBag, HeartPulse, TrendingUp, HelpCircle } from "lucide-react"

interface HomePageProps {
  onAddToCart: (product: ProductItem) => void
  onNavigateTab?: (tab: "home" | "shop" | "nutrition" | "partners" | "more") => void
  onNavigateSubpage?: (page: string) => void
}

export function HomePage({ onAddToCart, onNavigateTab, onNavigateSubpage }: HomePageProps) {
  return (
    <main className="w-full space-y-6 px-4 pt-3 pb-8">

      {/* 2. Quick Action App Tiles */}
      {onNavigateTab && (
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => onNavigateTab("shop")}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-secondary hover:bg-red-50 text-primary hover:text-red-600 border border-border text-center active:scale-95 transition-all cursor-pointer group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-card border border-border group-hover:border-red-200 shadow-xs mb-1 text-red-600">
              <ShoppingBag className="h-4 w-4" />
            </div>
            <span className="text-[10px] font-bold tracking-tight">Shop Rations</span>
          </button>

          <button
            onClick={() => onNavigateTab("nutrition")}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-secondary hover:bg-emerald-50 text-primary hover:text-emerald-700 border border-border text-center active:scale-95 transition-all cursor-pointer group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-card border border-border group-hover:border-emerald-200 shadow-xs mb-1 text-emerald-600">
              <HeartPulse className="h-4 w-4" />
            </div>
            <span className="text-[10px] font-bold tracking-tight">Nutrition</span>
          </button>

          <button
            onClick={() => onNavigateTab("partners")}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-secondary hover:bg-blue-50 text-primary hover:text-blue-700 border border-border text-center active:scale-95 transition-all cursor-pointer group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-card border border-border group-hover:border-blue-200 shadow-xs mb-1 text-blue-600">
              <TrendingUp className="h-4 w-4" />
            </div>
            <span className="text-[10px] font-bold tracking-tight">Resellers</span>
          </button>

          <button
            onClick={() => {
              if (onNavigateSubpage) onNavigateSubpage("faq")
              else onNavigateTab("more")
            }}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-secondary hover:bg-amber-50 text-primary hover:text-amber-700 border border-border text-center active:scale-95 transition-all cursor-pointer group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-card border border-border group-hover:border-amber-200 shadow-xs mb-1 text-amber-600">
              <HelpCircle className="h-4 w-4" />
            </div>
            <span className="text-[10px] font-bold tracking-tight">FAQs</span>
          </button>
        </div>
      )}

      {/* 3. Emergency Food Rations Section (USA Emblem + 60 Days Supply + 4 Pillars) */}
      <EmergencyRationsSection />

      {/* 4. Complete Purchase Section (Auto-Swipe Carousel + 5 Product Flavors) */}
      <PurchaseSection onAddToCart={onAddToCart} />

      {/* 5. Complete Nutrition Facts Section (FDA table, ingredients, calorie table) */}
      <NutritionFactsSection />

      {/* 6. Survival Food Tab Concept Section (Video player & Space Program copy) */}
      <SurvivalConceptSection />
    </main>
  )
}

export default HomePage
