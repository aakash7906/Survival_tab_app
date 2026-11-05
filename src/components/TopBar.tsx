import { ChevronLeft, ShoppingBag } from "lucide-react"
import { SurvivalLogo } from "./SurvivalLogo"

interface TopBarProps {
  title?: string
  showBackButton?: boolean
  onBack?: () => void
  onOpenCart?: () => void
  isRootTab?: boolean
  isCartActive?: boolean
  cartCount?: number
  rightAction?: React.ReactNode
}

export function TopBar({
  title,
  showBackButton = false,
  onBack,
  onOpenCart,
  isRootTab = true,
  isCartActive = false,
  cartCount = 0,
  rightAction,
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-card/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-colors">
      <div className="max-w-3xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between gap-3">
        {/* Left: Back Button OR Logo */}
        <div className="flex items-center gap-2 min-w-0">
          {showBackButton && !isRootTab ? (
            <button
              onClick={onBack}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-secondary/80 hover:bg-secondary active:scale-90 transition-all cursor-pointer select-none border border-border/50"
              aria-label="Go Back"
            >
              <ChevronLeft className="h-5 w-5 text-foreground stroke-[2.2]" />
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
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-primary truncate block font-sans">
              {title}
            </span>
          </div>
        )}

        {/* Right Action (e.g. Save button in Edit Profile) OR Shopping Bag Cart Icon Button */}
        <div className="flex items-center gap-2 shrink-0">
          {rightAction ? (
            rightAction
          ) : (
            <button
              onClick={onOpenCart}
              className={`relative flex h-9 w-9 items-center justify-center rounded-2xl transition-all duration-200 cursor-pointer active:scale-90 border ${
                isCartActive
                  ? "bg-destructive text-destructive-foreground border-destructive shadow-xs"
                  : "bg-secondary/80 hover:bg-secondary text-foreground border-border/60"
              }`}
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-4 w-4 stroke-[2]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-destructive text-[9px] font-black text-white ring-2 ring-card animate-pulse-subtle">
                  {cartCount}
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default TopBar
