import { Home, Store, HeartPulse, User } from "lucide-react"

export type AppTab = "home" | "shop" | "nutrition" | "profile" | "cart"

interface MobileBottomNavProps {
  currentTab: AppTab
  onSelectTab: (tab: AppTab) => void
  isProfileActive?: boolean
  onOpenProfile?: () => void
}

export function MobileBottomNav({
  currentTab,
  onSelectTab,
  isProfileActive = false,
  onOpenProfile,
}: MobileBottomNavProps) {
  const tabs = [
    {
      id: "home" as const,
      label: "Home",
      icon: Home,
      onClick: () => onSelectTab("home"),
      isActive: currentTab === "home" && !isProfileActive,
    },
    {
      id: "shop" as const,
      label: "Shop",
      icon: Store,
      onClick: () => onSelectTab("shop"),
      isActive: currentTab === "shop" && !isProfileActive,
    },
    {
      id: "nutrition" as const,
      label: "Nutrition",
      icon: HeartPulse,
      onClick: () => onSelectTab("nutrition"),
      isActive: currentTab === "nutrition" && !isProfileActive,
    },
    {
      id: "profile" as const,
      label: "Profile",
      icon: User,
      onClick: onOpenProfile ? onOpenProfile : () => onSelectTab("profile"),
      isActive: isProfileActive || currentTab === "profile",
    },
  ]

  return (
    <nav className="sticky bottom-0 inset-x-0 z-40 w-full shrink-0 bg-card/85 backdrop-blur-2xl border-t border-border/60 shadow-[0_-4px_24px_rgba(0,0,0,0.04)] pb-[env(safe-area-inset-bottom,0.75rem)] mt-auto">
      <div className="max-w-md sm:max-w-xl mx-auto px-4 h-14 min-[360px]:h-16 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = tab.isActive

          return (
            <button
              key={tab.id}
              onClick={tab.onClick}
              className={`relative flex flex-col items-center justify-center flex-1 py-1 px-2 rounded-2xl transition-all duration-200 cursor-pointer select-none active:scale-90 ${
                isActive
                  ? "text-destructive font-black"
                  : "text-muted-foreground hover:text-foreground font-medium"
              }`}
            >
              {/* Icon Container */}
              <div className="relative flex items-center justify-center h-6 w-6 mb-1">
                <Icon
                  className={`h-5 w-5 transition-all duration-200 ${
                    isActive ? "scale-115 stroke-[2.5]" : "stroke-[1.75]"
                  }`}
                />
              </div>

              {/* Label */}
              <span
                className={`text-[10px] leading-tight tracking-tight transition-all duration-150 ${
                  isActive ? "font-bold" : "font-medium"
                }`}
              >
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
