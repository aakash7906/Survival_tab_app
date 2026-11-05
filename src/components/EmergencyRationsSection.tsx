import { ShieldCheck, PackageCheck, Zap, Droplets, Clock } from "lucide-react"

export function EmergencyRationsSection() {
  return (
    <section id="emergency" className="w-full space-y-4 text-left">
      {/* Section Header (Seamlessly on page canvas) */}
      <div className="space-y-1 px-1">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary">
          Emergency Food
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-snug">
          The Survival Tabs reliable backup for the &ldquo;drop-everything-and-go&rdquo; scenario.
        </p>
      </div>

      {/* Made in USA Card Showcase */}
      <div className="relative w-full rounded-3xl bg-secondary/50 border border-border/50 p-5 flex items-center justify-center shadow-2xs">
        <img
          src="/images/made-in-usa.png"
          alt="Made in the USA - The Survival Tabs Certified Standard"
          className="w-full max-w-[220px] sm:max-w-[260px] h-auto object-contain drop-shadow-sm"
        />
      </div>

      {/* 60 Days Supply Highlight Banner */}
      <div className="rounded-3xl bg-red-50/70 border border-red-200/60 p-4 flex items-center gap-3.5 shadow-2xs">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-destructive text-destructive-foreground shadow-sm shadow-destructive/25">
          <PackageCheck className="h-5 w-5" />
        </div>
        <div className="space-y-0.5">
          <h3 className="font-extrabold text-destructive text-xs sm:text-sm uppercase tracking-wide">
            60 Days Food Supply
          </h3>
          <p className="text-xs text-foreground/80 leading-relaxed font-medium">
            One compact 24 oz jar delivers 15 days of complete, 100% daily survival rations.
          </p>
        </div>
      </div>

      {/* 4 Feature Key Pillars (Clean Native Mobile Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div className="rounded-2xl bg-card border border-border/60 p-4 flex items-start gap-3 shadow-2xs transition-all active:scale-[0.98]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
            <Droplets className="h-4 w-4 stroke-[2.2]" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="font-bold text-primary text-xs block leading-tight">
              Zero Water or Heat Needed
            </span>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Ready to chew straight from canister. No stove or clean water required.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-border/60 p-4 flex items-start gap-3 shadow-2xs transition-all active:scale-[0.98]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
            <Zap className="h-4 w-4 stroke-[2.2]" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="font-bold text-primary text-xs block leading-tight">
              99% Bio-Availability
            </span>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Nearly 100% of calories and nutrients absorbed directly with minimal waste.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-border/60 p-4 flex items-start gap-3 shadow-2xs transition-all active:scale-[0.98]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-50 text-destructive border border-red-100">
            <Clock className="h-4 w-4 stroke-[2.2]" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="font-bold text-primary text-xs block leading-tight">
              25-Year Certified Shelf Life
            </span>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Vacuum-sealed with food-grade nitrogen to guarantee long-term stability.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-border/60 p-4 flex items-start gap-3 shadow-2xs transition-all active:scale-[0.98]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary border border-border/50">
            <ShieldCheck className="h-4 w-4 stroke-[2.2]" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="font-bold text-primary text-xs block leading-tight">
              Prevents Muscle Wasting
            </span>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              High-purity protein formulation halts tissue cannibalism in scarcity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmergencyRationsSection
