import { ChevronLeft, User } from "lucide-react"
import { SurvivalLogo } from "./SurvivalLogo"

interface TopBarProps {
  title?: string
  showBackButton?: boolean
  onBack?: () => void
  onOpenProfile?: () => void
  isRootTab?: boolean
  isProfileActive?: boolean
}

export function TopBar({
  title,
  showBackButton = false,
  onBack,
  onOpenProfile,
  isRootTab = true,
  isProfileActive = false,
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-card/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-colors">
      <div className="max-w-3xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between gap-3">
        {/* Left: Back Button OR Logo */}
        <div className="flex items-center gap-2 min-w-0">
          {showBackButton && !isRootTab ? (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 -ml-1.5 py-1.5 px-2.5 rounded-2xl bg-secondary/80 hover:bg-secondary active:scale-90 transition-all cursor-pointer select-none"
              aria-label="Go Back"
            >
              <ChevronLeft className="h-5 w-5 text-foreground stroke-[2.5]" />
              <span className="text-xs font-bold text-foreground tracking-tight">Back</span>
            </button>
          ) : (
            <div className="flex items-center">
              <SurvivalLogo className="scale-90 origin-left" />
            </div>
          )}
        </div>

        {/* Center: Dynamic Title (Visible when navigating deeper or subpages) */}
        {showBackButton && !isRootTab && title && (
          <div className="truncate text-center px-2">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-primary truncate block">
              {title}
            </span>
          </div>
        )}

        {/* Right: Native Profile Icon Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenProfile}
            className={`flex h-9 w-9 items-center justify-center rounded-2xl transition-all duration-200 cursor-pointer active:scale-90 border ${
              isProfileActive
                ? "bg-primary text-primary-foreground border-primary shadow-xs"
                : "bg-secondary/80 hover:bg-secondary text-foreground border-border/60"
            }`}
            title="Profile"
            aria-label="User Profile"
          >
            <User className="h-4 w-4 stroke-[2]" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopBar
