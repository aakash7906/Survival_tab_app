import { ShieldCheck, PackageCheck, Zap, Droplets, Clock } from "lucide-react"

export function EmergencyRationsSection() {
  return (
    <section id="emergency" className="w-full rounded-3xl bg-card border border-border p-4 sm:p-6 shadow-xs space-y-5">
      {/* Section Header */}
      <div className="space-y-1 text-left">
        <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full inline-block mb-1">
          SURVIVAL FOOD RATIONS
        </span>
        <h2 className="text-xl sm:text-2xl font-black tracking-tight text-primary uppercase">
          EMERGENCY FOOD RATIONS
        </h2>
        <p className="text-xs sm:text-sm text-primary font-semibold leading-snug">
          The Survival Tabs reliable backup for the &ldquo;drop-everything-and-go&rdquo; scenario.
        </p>
      </div>

      {/* Made in USA Card + 60 Days Supply */}
      <div className="space-y-4">
        {/* USA Emblem Showcase */}
        <div className="relative w-full rounded-2xl bg-secondary border border-border p-4 flex items-center justify-center">
          <img
            src="/images/made-in-usa.png"
            alt="Made in the USA - The Survival Tabs Certified Standard"
            className="w-full max-w-[220px] sm:max-w-[260px] h-auto object-contain drop-shadow-sm"
          />
        </div>

        {/* 60 Days Supply Highlight Banner */}
        <div className="rounded-2xl bg-red-50 border border-red-200 p-4 flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-xs">
            <PackageCheck className="h-5 w-5" />
          </div>
          <div className="space-y-0.5">
            <h3 className="font-black text-red-700 text-sm uppercase tracking-tight">
              60 Days Food Supply Order (1 Canister)
            </h3>
            <p className="text-xs text-foreground leading-relaxed">
              One compact 24 oz jar delivers 15 days of complete, 100% daily survival rations, or up to 60 days of vital supplemental nutrition when rations are stretched.
            </p>
          </div>
        </div>

        {/* Core Description Text */}
        <div className="space-y-2 text-muted-foreground text-xs leading-relaxed">
          <p>
            For stay-at-home protection or rapid vehicle bug-out readiness, The Survival Tabs are a solid, shelf-stable, ultra-compact backup food supply.
          </p>
          <p>
            The Survival Tabs emergency food rations provide <strong>100% of the US RDA of 15 essential vitamins and minerals</strong> for emergency nutrition and disaster survival kits. Highly assimilated and engineered for immediate cellular fuel.
          </p>
        </div>

        {/* 4 Feature Key Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left">
          <div className="rounded-2xl bg-secondary border border-border p-3 flex items-start gap-2.5">
            <Droplets className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-primary text-xs block">Zero Water or Heat Needed</span>
              <p className="text-[11px] text-muted-foreground leading-tight">Ready to chew straight from canister. No stove or clean water required.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-3 flex items-start gap-2.5">
            <Zap className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-primary text-xs block">99% Bio-Availability</span>
              <p className="text-[11px] text-muted-foreground leading-tight">Nearly 100% of calories and nutrients absorbed directly with minimal waste.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-3 flex items-start gap-2.5">
            <Clock className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-primary text-xs block">25-Year Certified Shelf Life</span>
              <p className="text-[11px] text-muted-foreground leading-tight">Vacuum-sealed with food-grade nitrogen to guarantee long-term stability.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-3 flex items-start gap-2.5">
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
