import {
  Rocket,
  ShieldCheck,
  Award,
  Zap,
  Mountain,
  CheckCircle2,
  Package,
  Layers,
  HeartPulse,
  Flame,
  ArrowRight,
  Compass,
} from "lucide-react"

interface AboutPageProps {
  onNavigateHome?: () => void
  onOrderNow?: () => void
}

export function AboutPage({ onNavigateHome, onOrderNow }: AboutPageProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 space-y-6 pt-2 pb-12">
      {/* Hero / Header Section */}
      <section className="relative rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs overflow-hidden text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3 py-0.5 text-[11px] font-bold text-red-700 tracking-wider uppercase">
          <Rocket className="h-3 w-3 text-red-600 shrink-0" />
          <span>MIL-SPEC NUTRITION &bull; SINCE 1960s SPACE PROGRAM</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary max-w-4xl mx-auto leading-tight">
          About Survival Tabs
        </h1>

        <div className="h-0.5 w-16 bg-red-600 mx-auto rounded-full" />

        <p className="text-xs sm:text-sm text-foreground max-w-3xl mx-auto leading-relaxed">
          When Survival Food Tabs were formulated, a host of factors were considered in order to adapt them to their purpose as a lightweight, emergency, life-sustaining food ration.
        </p>
      </section>

      {/* 3 Core Scientific Factors Section */}
      <section className="space-y-4">
        <div className="text-left space-y-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
            Formulation Principles
          </span>
          <h2 className="text-lg sm:text-xl font-black text-primary">
            Why Survival Tabs Work When Everything Else Fails
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Factor 1 */}
          <div className="flex flex-col justify-between rounded-2xl bg-secondary border border-border p-6 sm:p-8 space-y-4 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-lg shadow-sm">
                  1
                </span>
                <Zap className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-primary">
                Digestive Efficiency
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                The less intake of food, the more efficient the body becomes. Basically, when food intake is reduced, it remains in the digestive tract longer and assimilates more completely.
              </p>
            </div>
            <div className="pt-2 border-t border-border text-[11px] font-semibold text-muted-foreground">
              Maximum nutrient retention in extreme scarcity
            </div>
          </div>

          {/* Factor 2 */}
          <div className="flex flex-col justify-between rounded-2xl bg-secondary border border-border p-6 sm:p-8 space-y-4 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-lg shadow-sm">
                  2
                </span>
                <HeartPulse className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-primary">
                100% Digestibility &amp; Assimilation
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Generally, of the food we eat, a great deal of it is not digested and used up as calories. Survival Food Tabs are 100% digestible as well as completely assimilated by the body. The quality of the food we eat is more important than the quantity. Poor quality protein, carbohydrate and fat can put a strain on digestive organs, especially the kidneys.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                In Survival Tabs, we have used protein of a high biological value, which is 100% utilized. This helps protect the body from cannibalism of its own protective tissues. The fat is composed totally of fatty acids which provide the essential ingredients of fat. The carbohydrates are of the high quality and 100% utilized too.
              </p>
            </div>
            <div className="pt-2 border-t border-border text-[11px] font-semibold text-muted-foreground">
              Zero organ burden &bull; Prevents tissue catabolism
            </div>
          </div>

          {/* Factor 3 */}
          <div className="flex flex-col justify-between rounded-2xl bg-secondary border border-border p-6 sm:p-8 space-y-4 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-lg shadow-sm">
                  3
                </span>
                <Compass className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-primary">
                The Margin of Survival
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                In 90% of all survival situations, some additional food will be available. Survival Food Tabs are designed to be the Margin of Survival. For example, if one were lost in a jungle area, one might have to find grubs, insects, berries, small animals or whatever to eat. One would have to adapt to the circumstances quickly until he found his way out or was rescued. Survival Food Tabs would be that Margin of Survival, along with whatever one could gather, to sustain oneself as long as necessary.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Another example would be desert or sea survival. In these cases, little supplemental food may be available. Survival Food Tabs would sustain one as long as he would expect to live normally, before being overcome by exposure, the elements, or lack of water.
              </p>
            </div>
            <div className="pt-2 border-t border-border text-[11px] font-semibold text-muted-foreground">
              Lifesaving bridge until search &amp; rescue arrival
            </div>
          </div>
        </div>
      </section>

      {/* Space Program Heritage & Government Research */}
      <section className="rounded-2xl bg-primary text-primary-foreground overflow-hidden shadow-xl border border-border">
        <div className="flex flex-col gap-5 p-5 sm:p-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 border border-red-500/40 px-3 py-0.5 text-[11px] font-bold text-red-400 uppercase tracking-wider">
              <Rocket className="h-3 w-3 text-red-400" />
              <span>Historic Aerospace Origins</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary-foreground leading-tight">
              Evolved From the Early Space Program
            </h2>

            <h3 className="text-xs sm:text-sm font-bold text-amber-400">
              The Best Possible Nutrition in the Smallest Possible Volume
            </h3>

            <p className="text-xs text-primary-foreground/80 leading-relaxed">
              Survival Tabs have a long history. Back in the 1960&apos;s the Federal Government was searching for a food source that could be used in specialty situations. The objective was to find a product that would provide the best possible nutrition in the smallest possible volume.
            </p>

            <p className="text-xs text-primary-foreground/80 leading-relaxed">
              The resulting research was extremely involved and intense, and the product that evolved was used in the early space program. Eventually, a tablet was perfected and used widely as an emergency food. It came to be known as <strong className="text-primary-foreground">&quot;Survival Tabs&quot;</strong>.
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl aspect-[16/9]">
              <img
                src="/banners/apollo-mission.jpeg"
                alt="Early Space Program NASA Apollo Research"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[10px] font-semibold text-primary-foreground/80">
                  Developed for zero-gravity and extreme mission weight limitations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Tabs Per Day & Nutrition Facts */}
      <section className="space-y-4">
        <div className="rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs space-y-4">
          <div className="space-y-2 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
              Daily Consumption Protocol
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-primary uppercase">
              12 Tabs Per Day Is All You&apos;ll Need
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Survival Tabs will keep you alive and moving for months at a time, on the amount you can carry in your backpack. Our recommended consumption of 12 tabs per day may be decreased when other foods are available in adequate amounts and quality. Or it may be increased in times of complete starvation or extreme physical exertion.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="rounded-xl bg-secondary border border-border p-4 sm:p-5 text-center space-y-1.5">
              <span className="text-2xl sm:text-3xl font-black text-primary">100%</span>
              <p className="text-xs font-bold text-primary uppercase">U.S. RDA</p>
              <p className="text-[11px] text-muted-foreground">15 Essential Vitamins &amp; Minerals</p>
            </div>
            <div className="rounded-xl bg-secondary border border-border p-4 sm:p-5 text-center space-y-1.5">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600">99%</span>
              <p className="text-xs font-bold text-primary uppercase">Bio-Availability</p>
              <p className="text-[11px] text-muted-foreground">Directly utilized for metabolic energy</p>
            </div>
            <div className="rounded-xl bg-secondary border border-border p-4 sm:p-5 text-center space-y-1.5">
              <span className="text-2xl sm:text-3xl font-black text-amber-600">97%</span>
              <p className="text-xs font-bold text-primary uppercase">Protein Retention</p>
              <p className="text-[11px] text-muted-foreground">Repairs blood, muscle &amp; nerve tissues</p>
            </div>
            <div className="rounded-xl bg-secondary border border-border p-4 sm:p-5 text-center space-y-1.5">
              <span className="text-2xl sm:text-3xl font-black text-primary">25+</span>
              <p className="text-xs font-bold text-primary uppercase">Years Shelf Life</p>
              <p className="text-[11px] text-muted-foreground">Certified airtight nitrogen preservation</p>
            </div>
          </div>

          {/* Deep Dive Note */}
          <div className="rounded-xl bg-secondary border border-border p-5 sm:p-6 space-y-2 text-foreground text-xs sm:text-sm leading-relaxed">
            <h4 className="font-bold text-primary text-sm sm:text-base">
              100% of the U.S. RDA of 15 Essential Vitamins &amp; Minerals
            </h4>
            <p>
              And that&apos;s not all. The reason Survival Tabs are so effective, is that they are literally jam-packed with concentrated nutrition. The protein we use is only of the highest quality. That&apos;s important because protein can be of varied quality. If it is poor quality, your body will not be able to assimilate it properly.
            </p>
            <p>
              With most food products, <strong>30%&ndash;60% of the calorie content leaves the body unused</strong>. Survival Tabs are so completely digestible that <strong>99% of their calorie content can be actually utilized for energy</strong>. <strong>97% of the protein content</strong> is available for repair or replacement of essential body substances, such as blood, muscle and nerves.
            </p>
          </div>
        </div>
      </section>

      {/* 25+ Year Shelf Life Engineering Section */}
      <section className="space-y-6">
        <div className="text-center sm:text-left space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Uncompromising Durability
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
            25+ Year Shelf Life: Engineered to Outlast Disasters
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
            The Tabs have been produced and packaged to last at least 25 years. We&apos;ve accomplished this through three critical layers of packaging engineering:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="rounded-2xl bg-card border border-border p-6 sm:p-7 space-y-3 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-primary">
              1. Multi-Ton Pressure Compression
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We have compressed the tablets with thousands of pounds of pressure using our specialized tablet presses. Oxygen and moisture, the arch-enemies of food, cannot penetrate the dense tablets to destroy the ingredients.
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border p-6 sm:p-7 space-y-3 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
              <Package className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-primary">
              2. Heavy-Duty Opaque Canisters
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We use a heavy-duty, opaque bottle to pack the Tabs. The bottle does not allow either light or outside oxygen to penetrate and deteriorate the high-grade nutritional actives.
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border p-6 sm:p-7 space-y-3 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-primary">
              3. Tamper-Resistant Hermetic Cap
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The closure is a specially designed screw-type lid which, along with being screwed tight on the bottle, is hermetically sealed with tamper-resistant safety tape.
            </p>
          </div>
        </div>

        {/* Made in USA & Global Trust Banner */}
        <div className="rounded-2xl bg-secondary border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/images/made-in-usa.png"
              alt="Made in the USA"
              className="h-12 w-auto object-contain shrink-0"
            />
            <div className="space-y-0.5">
              <h4 className="text-sm sm:text-base font-bold text-primary uppercase">
                Proudly Manufactured in the USA
              </h4>
              <p className="text-xs text-muted-foreground">
                100% sourced, pressed, and sealed under strict US food safety standards.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-xs font-bold text-emerald-800 shrink-0">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>25-YEAR CERTIFIED LONGEVITY</span>
          </div>
        </div>
      </section>

      {/* Field Proven Real World Trust (Alaska SAR & Mt. Everest) */}
      <section className="rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs space-y-5">
        <div className="text-center space-y-1.5 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
            Real-World Credentials
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-primary uppercase">
            Others Who Use Survival Tabs
          </h2>
          <div className="h-0.5 w-12 bg-red-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Alaskan SAR */}
          <div className="rounded-2xl border border-border bg-secondary overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="h-44 relative overflow-hidden">
              <img
                src="/banners/alaskan-large.jpg"
                alt="Alaskan Helicopter Search and Rescue Squad"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow">
                Standard Issue
              </div>
            </div>
            <div className="p-4 space-y-1.5">
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <Award className="h-4 w-4 text-primary shrink-0" />
                <span>Alaskan Helicopter Search &amp; Rescue Squad</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Survival Tabs are standard-issue and carried on all aircraft of the Alaskan Helicopter Search and Rescue Squad for the past 8 years! Proven in sub-zero survival environments.
              </p>
            </div>
          </div>

          {/* Mount Everest */}
          <div className="rounded-2xl border border-border bg-secondary overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="h-44 relative overflow-hidden">
              <img
                src="/banners/everest-base-camp-mountains-landscape.jpeg"
                alt="Mount Everest Ascents"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow">
                High Altitude Summit
              </div>
            </div>
            <div className="p-4 space-y-1.5">
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <Mountain className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Successful Ascents of Mt. Everest</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The Survival Tabs have been on several successful ascents of Mt. Everest! Trusted by mountaineers in the &quot;Death Zone&quot; where conventional food cannot be digested.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Bottom Line Section (Accented as shown in Image 2) */}
      <section className="rounded-2xl bg-primary text-primary-foreground p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30 px-3.5 py-0.5 text-[10px] font-black tracking-widest uppercase text-primary-foreground">
            <Flame className="h-3.5 w-3.5 text-amber-300" />
            <span>THE ULTIMATE RATION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary-foreground">
            BOTTOM LINE
          </h2>

          <p className="text-xs sm:text-sm text-primary-foreground/90 leading-relaxed">
            Survival Tabs are a convenient, compact, lightweight, lifesaving food ration for any emergency. They are completely nutritious, have a 25+ year shelf life and are absolutely delicious.
          </p>

          <p className="text-xs sm:text-sm font-semibold text-primary-foreground italic">
            &ldquo;Just let them melt in your mouth... you&apos;ll probably chew them up... they are so irresistibly good-tasting!&rdquo;
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOrderNow}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-background hover:bg-secondary text-primary px-7 py-3 text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Order Survival Tabs Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border px-6 py-3 text-sm font-medium transition-colors cursor-pointer"
            >
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage;
