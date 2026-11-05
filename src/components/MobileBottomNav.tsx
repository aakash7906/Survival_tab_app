import { Home, ShoppingBag, HeartPulse, Compass } from "lucide-react"

export type AppTab = "home" | "shop" | "nutrition" | "more"

interface MobileBottomNavProps {
  currentTab: AppTab
  onSelectTab: (tab: AppTab) => void
  cartCount?: number
}

export function MobileBottomNav({
  currentTab,
  onSelectTab,
  cartCount = 0,
}: MobileBottomNavProps) {
  const tabs = [
    {
      id: "home" as AppTab,
      label: "Home",
      icon: Home,
    },
    {
      id: "shop" as AppTab,
      label: "Shop",
      icon: ShoppingBag,
      badge: cartCount > 0 ? cartCount : undefined,
    },
    {
      id: "nutrition" as AppTab,
      label: "Nutrition",
      icon: HeartPulse,
    },
    {
      id: "more" as AppTab,
      label: "More",
      icon: Compass,
    },
  ]

  return (
    <nav className="sticky bottom-0 inset-x-0 z-40 w-full shrink-0 bg-card/85 backdrop-blur-2xl border-t border-border/60 shadow-[0_-4px_24px_rgba(0,0,0,0.04)] pb-[env(safe-area-inset-bottom,0.75rem)] mt-auto">
      <div className="max-w-md sm:max-w-xl mx-auto px-3 h-14 min-[360px]:h-16 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = currentTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`relative flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-2xl transition-all duration-200 cursor-pointer select-none active:scale-90 ${
                isActive
                  ? "text-destructive font-black"
                  : "text-muted-foreground hover:text-foreground font-medium"
              }`}
            >
              {/* Icon Container with Badge */}
              <div className="relative flex items-center justify-center h-6 w-6 mb-1">
                <Icon
                  className={`h-5 w-5 transition-all duration-200 ${
                    isActive ? "scale-115 stroke-[2.5]" : "stroke-[1.75]"
                  }`}
                />
                {tab.badge && tab.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-destructive text-[9px] font-black text-destructive-foreground ring-2 ring-card animate-pulse-subtle">
                    {tab.badge}
                  </span>
                )}
              </div>

              {/* Label */}
              <span className={`text-[10px] leading-tight tracking-tight transition-all duration-150 ${
                isActive ? "font-bold" : "font-medium"
              }`}>
                {tab.label}
              </span>

              {/* Native Active Tab Indicator Dot */}
              {isActive && (
                <span className="absolute -bottom-1 h-1 w-4 rounded-full bg-destructive transition-all duration-300" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileBottomNav
