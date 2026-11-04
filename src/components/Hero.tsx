import { Clock, ShieldCheck, Truck, ArrowRight } from "lucide-react"

interface HeroProps {
  onOrderNow?: () => void
}

export function Hero({ onOrderNow }: HeroProps) {
  const handleOrder = () => {
    if (onOrderNow) {
      onOrderNow()
      return
    }
    const el = document.querySelector("#purchase")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="w-full">
      {/* Mobile App Spotlight Card Container */}
      <div className="relative w-full rounded-3xl overflow-hidden bg-primary shadow-md border border-border">
        {/* Background wilderness image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2400&auto=format&fit=crop')`,
          }}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/95" />

        {/* Content */}
        <div className="relative z-10 px-4 py-6 sm:p-7 flex flex-col justify-between text-primary-foreground space-y-4">
          
          {/* Top Pill: Emergency Mil-Spec Tag */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
              <span>MIL-SPEC RATIONS</span>
            </span>

            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-bold text-amber-300">
              <Clock className="h-3 w-3 shrink-0" />
              <span>25-Year Certified Shelf Life</span>
            </div>
          </div>

          {/* Center Lockup: Headline + Bottle preview */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <div className="space-y-2 flex-1">
              <h1 className="text-xl min-[400px]:text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-sm">
                The Best Nutrition in Smallest Packaging
              </h1>

              <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed max-w-xs">
                100% of 15 essential vitamins &amp; minerals. Engineered for emergency survival kits.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleOrder}
                  className="inline-flex items-center gap-2 rounded-2xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-black px-4 sm:px-5 py-2.5 text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <span>Order Rations</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Bottle Image */}
            <div className="relative shrink-0 flex items-center justify-center -mr-2">
              <div className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full scale-110 pointer-events-none" />
              <img
                src="/images/banana.png"
                alt="The Survival Tabs Banana"
                className="relative z-10 h-36 min-[400px]:h-44 sm:h-52 w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Bottom Trust Indicators Carousel */}
          <div className="pt-3 border-t border-white/15 flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-[10px] sm:text-[11px] font-semibold text-white/90">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/10 backdrop-blur-md shrink-0 border border-white/10">
              <Truck className="h-3 w-3 text-emerald-400 shrink-0" />
              <span>Free Shipping Over $150</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/10 backdrop-blur-md shrink-0 border border-white/10">
              <ShieldCheck className="h-3 w-3 text-red-400 shrink-0" />
              <span>Gluten-Free &amp; Non-GMO</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/10 backdrop-blur-md shrink-0 border border-white/10">
              <img
                src="/images/made-in-usa.png"
                alt="Made in USA"
                className="h-3.5 w-auto object-contain shrink-0"
              />
              <span>100% Made in USA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
