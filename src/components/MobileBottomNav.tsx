import { Home, ShoppingBag, HeartPulse, TrendingUp, Compass } from "lucide-react"

export type AppTab = "home" | "shop" | "nutrition" | "partners" | "more"

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
      id: "partners" as AppTab,
      label: "Partners",
      icon: TrendingUp,
    },
    {
      id: "more" as AppTab,
      label: "More",
      icon: Compass,
    },
  ]

  return (
    <nav className="sticky bottom-0 inset-x-0 z-40 w-full shrink-0 bg-background/95 backdrop-blur-2xl border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom,0.5rem)] mt-auto">
      <div className="max-w-md sm:max-w-xl mx-auto px-2 h-16 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = currentTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`relative flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-2xl transition-all duration-150 cursor-pointer select-none active:scale-90 ${
                isActive
                  ? "text-red-600 font-bold"
                  : "text-muted-foreground hover:text-foreground font-medium"
              }`}
            >
              {/* Icon Container with Badge */}
              <div className="relative flex items-center justify-center h-6 w-6 mb-1">
                <Icon
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isActive ? "scale-110 stroke-[2.4]" : "stroke-[1.8]"
                  }`}
                />
                {tab.badge && tab.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 flex h-3.5 min-w-3.5 px-1 items-center justify-center rounded-full bg-red-600 text-[9px] font-black text-white">
                    {tab.badge}
                  </span>
                )}
              </div>

              {/* Label */}
              <span className="text-[10px] leading-tight tracking-tight">
                {tab.label}
              </span>

              {/* Active Sub-Dot Indicator */}
              {isActive && (
                <span className="absolute bottom-0 h-1 w-4 rounded-full bg-red-600 animate-fade-in-up" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileBottomNav
