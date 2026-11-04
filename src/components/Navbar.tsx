import { useState, useEffect } from "react"
import { ShoppingBag, Menu, X, Phone, ChevronRight, ShieldCheck } from "lucide-react"
import { SurvivalLogo } from "./SurvivalLogo"

interface NavLinkItem {
  label: string
  href: string
  badge?: string
}

interface NavbarProps {
  cartCount?: number
  onOpenCart?: () => void
  currentPage?: string
  onNavigate?: (page: string) => void
}

export function Navbar({
  cartCount = 0,
  onOpenCart,
  currentPage = "home",
  onNavigate,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks: NavLinkItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "about" },
    { label: "FAQ", href: "faq" },
    { label: "Testimonials", href: "testimonials" },
    { label: "Contact Us", href: "contact" },
  ]

  const scrollContainerToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const container = document.getElementById("mobile-viewport-container")
    if (container) container.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollTo = (href: string) => {
    setMobileOpen(false)

    if (href === "about") {
      onNavigate?.("about")
      window.history.pushState(null, "", "/about")
      scrollContainerToTop()
      return
    }

    if (href === "faq") {
      onNavigate?.("faq")
      window.history.pushState(null, "", "/faq")
      scrollContainerToTop()
      return
    }

    if (href === "testimonials") {
      onNavigate?.("testimonials")
      window.history.pushState(null, "", "/testimonials")
      scrollContainerToTop()
      return
    }

    if (href === "contact") {
      onNavigate?.("contact")
      window.history.pushState(null, "", "/contact")
      scrollContainerToTop()
      return
    }

    if (currentPage !== "home") {
      onNavigate?.("home")
    }

    if (href === "hero" || href === "/") {
      window.history.pushState(null, "", "/")
      scrollContainerToTop()
      return
    }

    if (href === "purchase") {
      window.history.pushState(null, "", "/purchase")
    }

    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }, 60)
  }

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-[0_2px_15px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            scrollTo("/")
          }}
          className="shrink-0 transition-opacity hover:opacity-90"
        >
          <SurvivalLogo className="scale-95 sm:scale-100 origin-left" />
        </a>

        {/* Desktop Navigation Links (Visible on lg and larger screens) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isHomeActive = (link.href === "/" || link.href === "hero" || link.href === "#hero") && currentPage === "home"
            const isAboutActive = (link.href === "about" || link.href === "#about") && currentPage === "about"
            const isFaqActive = (link.href === "faq" || link.href === "#faq") && currentPage === "faq"
            const isTestimonialsActive = (link.href === "testimonials" || link.href === "#testimonials") && currentPage === "testimonials"
            const isContactActive = (link.href === "contact" || link.href === "#contact") && currentPage === "contact"
            const isActive = isHomeActive || isAboutActive || isFaqActive || isTestimonialsActive || isContactActive

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className={`rounded-lg px-3.5 py-2 text-xs xl:text-sm font-medium transition-colors ${
                  isActive
                    ? "text-red-600 bg-red-50 font-semibold"
                    : "text-foreground hover:text-red-600 hover:bg-secondary"
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right CTA, Cart & Mobile Menu Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Phone pill on medium/desktop screens */}
          <a
            href="tel:800-453-3238"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary px-3 py-1.5 rounded-full border border-border bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-600" />
            <span>800-453-3238</span>
          </a>

          {/* Desktop "Order Tabs" Primary Button */}
          <button
            onClick={() => scrollTo("#purchase")}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Order Tabs</span>
          </button>

          {/* Shopping Cart Button (Always visible on mobile & desktop) */}
          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card hover:bg-secondary text-primary transition-all shadow-xs cursor-pointer"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="h-4 sm:h-5 w-4 sm:w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {/* Hamburger Menu Toggle Button (Visible on mobile & tablet < lg) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground lg:hidden hover:bg-secondary hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-red-600" />
            ) : (
              <Menu className="h-5 w-5 text-primary" />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card px-5 py-6 shadow-2xl transition-all duration-200">
          <div className="flex flex-col space-y-4">
            
            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isHomeActive = (link.href === "/" || link.href === "hero" || link.href === "#hero") && currentPage === "home"
                const isAboutActive = (link.href === "about" || link.href === "#about") && currentPage === "about"
                const isFaqActive = (link.href === "faq" || link.href === "#faq") && currentPage === "faq"
                const isTestimonialsActive = (link.href === "testimonials" || link.href === "#testimonials") && currentPage === "testimonials"
                const isContactActive = (link.href === "contact" || link.href === "#contact") && currentPage === "contact"
                const isActive = isHomeActive || isAboutActive || isFaqActive || isTestimonialsActive || isContactActive

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(link.href)
                    }}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "text-primary hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    <span>{link.label}</span>
                    <div className="flex items-center gap-2">
                      {link.badge && (
                        <span className="bg-red-100 text-red-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                          {link.badge}
                        </span>
                      )}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-3 border-t border-border space-y-3">
              <button
                onClick={() => scrollTo("#purchase")}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-sm uppercase tracking-wider shadow-md transition-colors"
              >
                <span>Order Survival Tabs Now</span>
              </button>

              <a
                href="tel:800-453-3238"
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary py-2.5 text-xs font-semibold text-primary hover:bg-secondary/80 transition-colors"
              >
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>Call Toll-Free: 800-453-3238</span>
              </a>
            </div>

            {/* Mobile Trust strip */}
            <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-muted-foreground font-medium text-center">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Made in USA &bull; 25-Year Certified Shelf Life</span>
            </div>

          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar;
