import { ChevronLeft, ShoppingBag, Phone } from "lucide-react"
import { SurvivalLogo } from "./SurvivalLogo"

interface MobileTopBarProps {
  title?: string
  showBackButton?: boolean
  onBack?: () => void
  onOpenSearch?: () => void
  cartCount?: number
  onOpenCart?: () => void
  isRootTab?: boolean
}

export function MobileTopBar({
  title,
  showBackButton = false,
  onBack,
  cartCount = 0,
  onOpenCart,
  isRootTab = true,
}: MobileTopBarProps) {
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

        {/* Right Action Icons: Phone Call + Search + Cart */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Quick Call hotline button */}
          <a
            href="tel:800-453-3238"
            className="flex h-9 w-9 items-center justify-center rounded-2xl bg-secondary/80 text-primary hover:text-emerald-600 active:scale-90 transition-all cursor-pointer border border-border/50"
            title="Toll-Free Support"
            aria-label="Call Toll-Free Support"
          >
            <Phone className="h-4 w-4 text-emerald-600" />
          </a>

          {/* Cart Pill with Dynamic Badge */}
          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-destructive hover:bg-destructive/90 text-destructive-foreground active:scale-90 transition-all cursor-pointer shadow-sm shadow-destructive/20"
              title="View Rations Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-4 w-4 stroke-[2.2]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-accent text-[10px] font-black text-accent-foreground ring-2 ring-card animate-pulse-subtle">
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

export default MobileTopBar
