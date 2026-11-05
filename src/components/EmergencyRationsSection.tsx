import { ShieldCheck, PackageCheck, Zap, Droplets, Clock } from "lucide-react"

export function EmergencyRationsSection() {
  return (
    <section id="emergency" className="w-full rounded-3xl bg-card p-4 sm:p-6 shadow-sm space-y-5">
      {/* Section Header */}
      <div className="space-y-1 text-left">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary">
          EMERGENCY FOOD
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-snug">
          The Survival Tabs reliable backup for the &ldquo;drop-everything-and-go&rdquo; scenario.
        </p>
      </div>

      {/* Made in USA Card + 60 Days Supply */}
      <div className="space-y-4">
        {/* USA Emblem Showcase */}
        <div className="relative w-full rounded-2xl bg-secondary/70 p-4 flex items-center justify-center">
          <img
            src="/images/made-in-usa.png"
            alt="Made in the USA - The Survival Tabs Certified Standard"
            className="w-full max-w-[220px] sm:max-w-[260px] h-auto object-contain drop-shadow-sm"
          />
        </div>

        {/* 60 Days Supply Highlight Banner */}
        <div className="rounded-2xl bg-red-50/70 border border-red-100 p-4 flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive text-destructive-foreground shadow-sm shadow-destructive/20">
            <PackageCheck className="h-5 w-5" />
          </div>
          <div className="space-y-0.5">
            <h3 className="font-black text-destructive text-sm uppercase tracking-tight">
              60 Days Food Supply
            </h3>
            <p className="text-xs text-foreground leading-relaxed">
              One compact 24 oz jar delivers 15 days of complete, 100% daily survival rations.
            </p>
          </div>
        </div>

        {/* 4 Feature Key Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left">
          <div className="rounded-2xl bg-secondary/70 p-3.5 flex items-start gap-2.5 transition-transform active:scale-[0.98]">
            <Droplets className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-primary text-xs block">Zero Water or Heat Needed</span>
              <p className="text-[11px] text-muted-foreground leading-tight">Ready to chew straight from canister. No stove or clean water required.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-secondary/70 p-3.5 flex items-start gap-2.5 transition-transform active:scale-[0.98]">
            <Zap className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-primary text-xs block">99% Bio-Availability</span>
              <p className="text-[11px] text-muted-foreground leading-tight">Nearly 100% of calories and nutrients absorbed directly with minimal waste.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-secondary/70 p-3.5 flex items-start gap-2.5 transition-transform active:scale-[0.98]">
            <Clock className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-primary text-xs block">25-Year Certified Shelf Life</span>
              <p className="text-[11px] text-muted-foreground leading-tight">Vacuum-sealed with food-grade nitrogen to guarantee long-term stability.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-secondary/70 p-3.5 flex items-start gap-2.5 transition-transform active:scale-[0.98]">
            <ShieldCheck className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-primary text-xs block">Prevents Muscle Wasting</span>
              <p className="text-[11px] text-muted-foreground leading-tight">High-purity protein formulation halts tissue cannibalism in scarcity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmergencyRationsSection
