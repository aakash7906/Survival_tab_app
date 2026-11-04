import { useState } from "react"
import { HeartPulse, Zap, Droplets, ShieldCheck, Award, CheckCircle2 } from "lucide-react"

export function NutritionPage() {
  const [activeSegment, setActiveSegment] = useState<"facts" | "science" | "video">("facts")

  return (
    <div className="w-full space-y-5 px-4 pt-3 pb-8">
      {/* Page Title & Subtitle */}
      <div className="space-y-1">
        <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary">
          Nutrition &amp; Science
        </h1>
        <p className="text-xs text-muted-foreground">
          100% US RDA of 15 essential vitamins &bull; 99% Bio-Availability
        </p>
      </div>

      {/* iOS Segmented Control Switcher */}
      <div className="flex rounded-2xl bg-secondary p-1 border border-border">
        <button
          onClick={() => setActiveSegment("facts")}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer active:scale-95 ${
            activeSegment === "facts"
              ? "bg-card text-primary shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Nutrition Facts
        </button>
        <button
          onClick={() => setActiveSegment("science")}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer active:scale-95 ${
            activeSegment === "science"
              ? "bg-card text-primary shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Assimilation
        </button>
        <button
          onClick={() => setActiveSegment("video")}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer active:scale-95 ${
            activeSegment === "video"
              ? "bg-card text-primary shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Concept Video
        </button>
      </div>

      {/* SEGMENT 1: FDA Nutrition Facts Card */}
      {activeSegment === "facts" && (
        <div className="space-y-4 animate-fade-in-up">
          {/* Quick Stats Pill Strip */}
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-2xl bg-secondary p-3 text-center border border-border">
              <span className="text-lg font-black text-primary block">240</span>
              <span className="text-[10px] text-muted-foreground font-semibold uppercase">Calories / 12 Tabs</span>
            </div>
            <div className="rounded-2xl bg-secondary p-3 text-center border border-border">
              <span className="text-lg font-black text-emerald-600 block">100%</span>
              <span className="text-[10px] text-muted-foreground font-semibold uppercase">15 Vitamins</span>
            </div>
            <div className="rounded-2xl bg-secondary p-3 text-center border border-border">
              <span className="text-lg font-black text-amber-600 block">15 Days</span>
              <span className="text-[10px] text-muted-foreground font-semibold uppercase">Per Bottle</span>
            </div>
          </div>

          {/* Official Nutrition Facts Panel */}
          <div className="rounded-3xl border border-border bg-card p-4 sm:p-6 shadow-xs space-y-4 font-sans">
            <div className="border-b-4 border-primary pb-1">
              <h2 className="text-2xl font-black text-primary tracking-tight leading-none uppercase">
                Nutrition Facts
              </h2>
              <div className="flex justify-between text-xs text-muted-foreground pt-1">
                <span>Serving Size: 12 Tablets</span>
                <span>Servings Per Container: 15</span>
              </div>
            </div>

            {/* Calories line */}
            <div className="flex justify-between items-baseline border-b-2 border-primary py-1.5 text-sm">
              <span className="font-black text-primary">Calories 240</span>
              <span className="text-xs text-muted-foreground">Calories from Fat 108</span>
            </div>

            <div className="text-right text-[10px] font-bold text-muted-foreground">
              % Daily Value*
            </div>

            {/* Macronutrients list */}
            <div className="divide-y divide-border text-xs">
              <div className="flex justify-between py-1.5">
                <span className="font-bold text-primary">Total Fat 12g</span>
                <span className="font-bold text-primary">18%</span>
              </div>
              <div className="flex justify-between py-1.5 pl-3 text-muted-foreground">
                <span>Saturated Fat 3g</span>
                <span className="font-bold text-primary">15%</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="font-bold text-primary">Cholesterol 3mg</span>
                <span className="font-bold text-primary">1%</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="font-bold text-primary">Sodium 140mg</span>
                <span className="font-bold text-primary">6%</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="font-bold text-primary">Total Carbohydrates 30g</span>
                <span className="font-bold text-primary">10%</span>
              </div>
              <div className="flex justify-between py-1.5 pl-3 text-muted-foreground">
                <span>Dietary Fiber 0g</span>
                <span className="font-bold text-primary">0%</span>
              </div>
              <div className="flex justify-between py-1.5 pl-3 text-muted-foreground">
                <span>Sugars 12g</span>
                <span>&mdash;</span>
              </div>
              <div className="flex justify-between py-1.5 font-bold text-primary">
                <span>Protein 4g</span>
                <span></span>
              </div>
            </div>

            {/* 15 Vitamins & Minerals Sub-Grid */}
            <div className="pt-2 border-t-2 border-primary">
              <span className="text-[11px] font-black uppercase text-primary tracking-wider block mb-2">
                15 Essential Vitamins &amp; Minerals (100% US RDA)
              </span>

              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Vitamin A</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Vitamin C</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Thiamin (B1)</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Riboflavin (B2)</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Niacin</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Vitamin D</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Pyridoxine (B6)</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Folic Acid</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Vitamin B12</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Vitamin E</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Iron</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Iodine</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Zinc</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Manganese</span>
                  <span className="font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Calcium</span>
                  <span className="font-bold text-primary">20%</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-border/60">
                  <span>Phosphorus</span>
                  <span className="font-bold text-primary">10%</span>
                </div>
              </div>
            </div>

            {/* Footnote */}
            <p className="text-[10px] text-muted-foreground italic pt-2 border-t border-border">
              *Percent Daily Values are based on a 2,000 calorie diet.
            </p>
          </div>

          {/* Full Ingredients List Inset Card */}
          <div className="rounded-2xl bg-secondary p-4 border border-border space-y-1.5">
            <span className="text-xs font-black uppercase text-primary tracking-wide block">
              Official Ingredients
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Non-fat Dry Milk Solids, Sucrose, Vegetable Oils (Sunflower and/or Safflower Oil), Calcium Phosphate, Ascorbic Acid, Vitamin E Acetate, Niacinamide, Ferrous Fumarate, Zinc Gluconate, Natural and Artificial Flavors, Calcium Pantothenate, Potassium Pyridoxine Hydrochloride, Riboflavin, Thiamin Hydrochloride, Vitamin A Palmitate, Vitamin D3, Folic Acid, Potassium Iodide, Cyanocobalamin.
            </p>
          </div>

          {/* Calorie Reference Comparison Table with Horizontal Scroll */}
          <div className="rounded-2xl border border-border bg-card p-4 space-y-2 overflow-x-auto">
            <span className="text-xs font-black uppercase text-primary block">
              Caloric Reference Baseline
            </span>
            <table className="w-full text-xs text-left min-w-[280px]">
              <thead>
                <tr className="border-b border-border text-primary font-bold">
                  <th className="py-1">Nutrient</th>
                  <th className="py-1">2,000 Cal</th>
                  <th className="py-1">2,500 Cal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="py-1 text-primary">Total Fat</td>
                  <td>Less than 65g</td>
                  <td>80g</td>
                </tr>
                <tr>
                  <td className="py-1 text-primary">Sat Fat</td>
                  <td>Less than 20g</td>
                  <td>25g</td>
                </tr>
                <tr>
                  <td className="py-1 text-primary">Cholesterol</td>
                  <td>Less than 300mg</td>
                  <td>300mg</td>
                </tr>
                <tr>
                  <td className="py-1 text-primary">Sodium</td>
                  <td>Less than 2,400mg</td>
                  <td>2,400mg</td>
                </tr>
                <tr>
                  <td className="py-1 text-primary">Carbohydrate</td>
                  <td>300g</td>
                  <td>375g</td>
                </tr>
                <tr>
                  <td className="py-1 text-primary">Dietary Fiber</td>
                  <td>25g</td>
                  <td>30g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SEGMENT 2: Assimilation Science & Formulation Principles */}
      {activeSegment === "science" && (
        <div className="space-y-4 animate-fade-in-up">
          {/* 3 Scientific Principles Cards */}
          <div className="rounded-2xl bg-secondary border border-border p-4 space-y-2">
            <div className="flex items-center gap-2 text-primary font-black text-sm uppercase">
              <Zap className="h-4 w-4 text-amber-500" />
              <span>1. 99% Bio-Availability</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              With most common foods, 30%&ndash;60% of the calorie content leaves the body completely unused. Survival Tabs are engineered to be 99% absorbed and directly converted to cellular ATP energy without producing digestive waste.
            </p>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-4 space-y-2">
            <div className="flex items-center gap-2 text-primary font-black text-sm uppercase">
              <HeartPulse className="h-4 w-4 text-red-500" />
              <span>2. Prevents Muscle Cannibalism</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Within 5 minutes of chewing a tablet, 97% of the protein content is available to repair or replace vital blood, muscle, and nerve tissue, halting starvation catabolism.
            </p>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-4 space-y-2">
            <div className="flex items-center gap-2 text-primary font-black text-sm uppercase">
              <Droplets className="h-4 w-4 text-emerald-600" />
              <span>3. Zero Stoves or Water Required</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Unlike freeze-dried pouch foods that demand boiling water, clean cups, and heating stoves, Survival Tabs can be chewed or dissolved straight from the bottle in extreme blizzards or flood conditions.
            </p>
          </div>

          {/* Margin of Survival Note */}
          <div className="rounded-2xl bg-primary text-primary-foreground p-5 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              <span>The Margin of Survival</span>
            </div>
            <p className="text-xs text-primary-foreground/90 leading-relaxed">
              In 90% of survival situations, individuals can supplement the tabs with whatever small amounts of food they might find (wild berries, fish, small game). Consuming 12 chewable tabs per day gives the full margin of survival to sustain life until rescue.
            </p>
          </div>
        </div>
      )}

      {/* SEGMENT 3: Concept Video Player & Heritage */}
      {activeSegment === "video" && (
        <div className="space-y-4 animate-fade-in-up">
          {/* Native Video Player Container */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-md border border-border aspect-video bg-black">
            <video
              src="/videos/survival-concept.mp4"
              poster="/images/video_thumbnail.png"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover block"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Space Program Narrative */}
          <div className="rounded-2xl bg-card border border-border p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-red-600 shrink-0" />
              <h2 className="text-sm font-black uppercase text-primary">
                Early Space Program Heritage
              </h2>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              The basic concept behind Survival Tabs originated in the early space program. The primary requirement was to produce a food that could be consumed in zero gravity and cramped spaces, providing the maximum nutrition in the smallest volume.
            </p>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Our bodies require Protein, Carbohydrates, and Fats along with essential vitamins and minerals. The protein used is of the highest biological value, completely digested without taxing the kidneys or digestive organs.
            </p>

            <div className="pt-2 border-t border-border flex items-center gap-2 text-xs font-bold text-emerald-700">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
              <span>25-Year Vacuum Sealed Nitrogen Longevity</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NutritionPage
