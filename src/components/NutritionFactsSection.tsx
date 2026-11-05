export function NutritionFactsSection() {
  return (
    <section
      id="nutrition"
      className="relative w-full rounded-3xl bg-card p-4 sm:p-6 shadow-sm overflow-hidden my-2 space-y-5"
    >
      {/* Subtle Winter Mountain / Cabin Background Silhouette matching official spec graphic */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] bg-bottom bg-no-repeat bg-cover"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 100%, var(--foreground), transparent 70%)`,
        }}
      />
      {/* Decorative SVG Mountain & Cabin silhouette watermark */}
      <div className="absolute inset-x-0 bottom-0 h-72 pointer-events-none opacity-[0.05] overflow-hidden flex items-end justify-center text-primary">
        <svg
          viewBox="0 0 1200 400"
          className="w-full h-full object-cover"
          fill="none"
          stroke="currentColor"
        >
          {/* Distant mountains */}
          <path
            d="M0 320 L180 180 L350 290 L520 140 L700 280 L880 150 L1050 260 L1200 170 L1200 400 L0 400 Z"
            fill="currentColor"
          />
          {/* Cabin silhouette */}
          <rect x="580" y="270" width="130" height="90" fill="currentColor" />
          <polygon points="565,270 645,210 725,270" fill="currentColor" />
          {/* Pine trees */}
          <polygon points="460,340 480,290 500,340" fill="currentColor" />
          <polygon points="465,310 480,260 495,310" fill="currentColor" />
          <polygon points="740,350 760,280 780,350" fill="currentColor" />
          <polygon points="745,310 760,250 775,310" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-6 sm:space-y-8 font-sans">
        {/* Main Headline */}
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary leading-tight">
            DELICIOUS! NUTRITIOUS! EASY TO STORE!
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
            <strong>Ingredients:</strong> Non-fat Dry Milk Solids, Sucrose, Vegetable Oils (Including Sunflower and/or Safflower Oil), Calcium Phosphate, Ascorbic Acid, Vitamin E Acetate, Niacinamide, Ferrous Fumarate, Zinc Gluconate, Natural and Artificial Flavors, Calcium Pantothenate, Potassium Pyridoxine Hydrochloride, Riboflavin, Thiamin Hudrochloride, Vitamin A Palmitate, Vitamin D3, Folic Acid, Potassium Iodide, Cyanocobalamin.
          </p>
        </div>

        {/* Nutrition Facts Heading */}
        <div className="text-center pt-1">
          <h3 className="text-lg sm:text-xl font-black text-primary tracking-tight">
            Nutrition Facts
          </h3>
        </div>

        {/* Official Nutrition Facts Layout */}
        <div className="grid grid-cols-1 gap-6 text-sm text-foreground border-t border-b border-border py-4">
          
          {/* Left Column: Macronutrients and Daily Values */}
          <div className="space-y-1.5 divide-y divide-border">
            
            <div className="flex justify-between items-baseline pb-1.5 font-bold text-xs sm:text-sm text-primary">
              <span>Serving Size Amount Per Serving</span>
              <span>Servings Per Container: 15</span>
            </div>

            <div className="flex justify-between items-baseline pt-2 text-xs sm:text-sm">
              <span className="font-semibold text-primary">Calories</span>
              <span className="font-bold text-primary">240</span>
            </div>

            <div className="flex justify-between items-baseline pt-2 text-xs sm:text-sm">
              <span className="text-foreground">Calories from Fat</span>
              <span className="font-bold text-primary">108</span>
            </div>

            <div className="text-right text-[11px] font-bold text-muted-foreground pt-2 pb-0.5">
              % Daily Value*
            </div>

            <div className="flex justify-between items-baseline pt-1.5 text-xs sm:text-sm">
              <span className="font-semibold text-primary">Total Fat 12g</span>
              <span className="font-bold text-primary">18%</span>
            </div>

            <div className="flex justify-between items-baseline pt-1.5 pl-3 text-xs sm:text-sm text-foreground">
              <span>Saturated Fat 3g</span>
              <span className="font-bold text-primary">15%</span>
            </div>

            <div className="flex justify-between items-baseline pt-1.5 text-xs sm:text-sm">
              <span className="font-semibold text-primary">Cholesterol 3mg</span>
              <span className="font-bold text-primary">1%</span>
            </div>

            <div className="flex justify-between items-baseline pt-1.5 text-xs sm:text-sm">
              <span className="font-semibold text-primary">Sodium 140mg</span>
              <span className="font-bold text-primary">6%</span>
            </div>

            <div className="flex justify-between items-baseline pt-1.5 text-xs sm:text-sm">
              <span className="font-semibold text-primary">Total Carbohydrates 30g</span>
              <span className="font-bold text-primary">10%</span>
            </div>

            <div className="flex justify-between items-baseline pt-1.5 pl-3 text-xs sm:text-sm text-foreground">
              <span>Dietary Fiber 0g</span>
              <span className="font-bold text-primary">0%</span>
            </div>

            <div className="flex justify-between items-baseline pt-1.5 pl-3 text-xs sm:text-sm text-foreground">
              <span>Sugars 12g</span>
              <span className="text-muted-foreground">&mdash;</span>
            </div>

            <div className="flex justify-between items-baseline pt-2 font-bold text-xs sm:text-sm text-primary">
              <span>Protein 4g</span>
              <span></span>
            </div>

          </div>

          {/* Right Column: Vitamins & Minerals (2-subcolumns) */}
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm self-start">
            
            {/* Sub-column 1 */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Vitamin A</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Calcium</span>
                <span className="font-bold text-primary">20%</span>
              </div>
              <div className="flex justify-between">
                <span>Thiamin (B1)</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Riboflavin (B2)</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Niacin</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Vitamin D</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Pyridoxine HCL (B6)</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Folic Acid</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Vitamin B12</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Iodine</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Zinc</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Manganese</span>
                <span className="font-bold text-primary">100%</span>
              </div>
            </div>

            {/* Sub-column 2 */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Vitamin C</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Iron</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Vitamin E</span>
                <span className="font-bold text-primary">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Phosphorous</span>
                <span className="font-bold text-primary">10%</span>
              </div>
            </div>

          </div>

        </div>

        {/* Footnote */}
        <p className="text-center text-xs text-muted-foreground font-sans italic">
          *Percent Daily Values are based on a 2,000 calories diet. Your daily values may be higher or lower depending on your calorie needs.
        </p>

        {/* Official Calorie Comparison Reference Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-xs text-left text-foreground border-t border-border">
            <thead>
              <tr className="border-b border-border text-primary font-bold">
                <th className="py-2.5">Total Fat</th>
                <th className="py-2.5">Calories</th>
                <th className="py-2.5 font-mono">2,000</th>
                <th className="py-2.5 font-mono">2,500</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-1.5 font-medium text-primary">Saturated Fat</td>
                <td className="py-1.5 text-muted-foreground">Less than</td>
                <td className="py-1.5 font-mono font-semibold">65g</td>
                <td className="py-1.5 font-mono font-semibold">80g</td>
              </tr>
              <tr>
                <td className="py-1.5 font-medium text-primary">Cholesterol</td>
                <td className="py-1.5 text-muted-foreground">Less than</td>
                <td className="py-1.5 font-mono font-semibold">20g</td>
                <td className="py-1.5 font-mono font-semibold">25g</td>
              </tr>
              <tr>
                <td className="py-1.5 font-medium text-primary">Sodium</td>
                <td className="py-1.5 text-muted-foreground">Less than</td>
                <td className="py-1.5 font-mono font-semibold">300mg</td>
                <td className="py-1.5 font-mono font-semibold">300mg</td>
              </tr>
              <tr>
                <td className="py-1.5 font-medium text-primary">Total Carbohydrate</td>
                <td className="py-1.5 text-muted-foreground">Less than</td>
                <td className="py-1.5 font-mono font-semibold">2,400mg</td>
                <td className="py-1.5 font-mono font-semibold">2,400mg</td>
              </tr>
              <tr>
                <td className="py-1.5 font-medium text-primary">Dietary Fiber</td>
                <td className="py-1.5 text-muted-foreground"></td>
                <td className="py-1.5 font-mono font-semibold">300g</td>
                <td className="py-1.5 font-mono font-semibold">375g</td>
              </tr>
              <tr>
                <td className="py-1.5 font-medium text-primary"></td>
                <td className="py-1.5 text-muted-foreground"></td>
                <td className="py-1.5 font-mono font-semibold">25g</td>
                <td className="py-1.5 font-mono font-semibold">30g</td>
              </tr>
            </tbody>
          </table>

          {/* Calories per gram footnote */}
          <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
            <span className="font-bold text-primary">Calories per gram:</span>
            <span>Fat 9 calories per gram</span>
            <span>Carbohydrate 4 calories per gram</span>
            <span>Protein 4 calories per gram</span>
          </div>
        </div>

      </div>
    </section>
  )
}
