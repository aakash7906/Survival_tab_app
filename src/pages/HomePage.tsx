
import { EmergencyRationsSection } from "../components/EmergencyRationsSection"
import { PurchaseSection, type ProductItem } from "../components/PurchaseSection"
import { NutritionFactsSection } from "../components/NutritionFactsSection"
import { SurvivalConceptSection } from "../components/SurvivalConceptSection"

interface HomePageProps {
  onAddToCart: (product: ProductItem) => void
  onNavigateSubpage?: (page: string) => void
}

export function HomePage({ onAddToCart }: HomePageProps) {
  return (
    <main className="w-full space-y-6 px-4 pt-3 pb-8">

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
