import { useState, useEffect } from "react"
import { Iphone } from "./components/ui/iphone"
import { MobileTopBar } from "./components/MobileTopBar"
import { MobileBottomNav, type AppTab } from "./components/MobileBottomNav"
import { CartDrawer, type CartItem } from "./components/CartDrawer"
import type { ProductItem } from "./components/PurchaseSection"

// Tab Screen Views
import { HomePage } from "./pages/HomePage"
import { ShopPage } from "./pages/ShopPage"
import { NutritionPage } from "./pages/NutritionPage"
import { PartnersPage } from "./pages/PartnersPage"
import { MorePage } from "./pages/MorePage"

// Dedicated Sub-views (Accessible from More / Direct Links)
import { FaqPage } from "./pages/FaqPage"
import { TestimonialsPage } from "./pages/TestimonialsPage"
import { AboutPage } from "./pages/AboutPage"
import { ContactUsPage } from "./pages/ContactUsPage"
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage"
import { TermsPage } from "./pages/TermsPage"

type Subpage = "faq" | "testimonials" | "about" | "contact" | "privacy" | "terms" | null
type PartnerProgram = "wholesale" | "dropship" | "export" | "affiliate"

export default function App() {
  const [currentTab, setCurrentTab] = useState<AppTab>("home")
  const [activeSubpage, setActiveSubpage] = useState<Subpage>(null)
  const [partnerProgram, setPartnerProgram] = useState<PartnerProgram>("wholesale")

  const [cart, setCart] = useState<CartItem[]>([
    {
      product: {
        id: "st-banana",
        name: "Survival Tabs Banana",
        flavor: "Banana",
        price: 39.95,
        isNew: true,
        illustration: "🍌 Natural Banana",
        image: "/images/banana.png",
      },
      quantity: 1,
    },
  ])

  const [cartOpen, setCartOpen] = useState(false)

  // Sync route and clean up URL path
  useEffect(() => {
    const syncRouteFromUrl = () => {
      const rawPath = window.location.pathname.toLowerCase().replace(/^\/+|\/+$/g, "")
      const rawHash = window.location.hash.toLowerCase().replace(/^#+/, "")

      if (rawPath === "faq" || rawHash === "faq") {
        setCurrentTab("more")
        setActiveSubpage("faq")
      } else if (
        rawPath === "contact" ||
        rawPath === "contact-us" ||
        rawHash === "contact" ||
        rawHash === "contact-us"
      ) {
        setCurrentTab("more")
        setActiveSubpage("contact")
      } else if (
        rawPath === "about" ||
        rawPath === "about-us" ||
        rawHash === "about" ||
        rawHash === "about-us"
      ) {
        setCurrentTab("more")
        setActiveSubpage("about")
      } else if (
        rawPath === "testimonials" ||
        rawPath === "testimonial" ||
        rawPath === "reviews" ||
        rawHash === "testimonials" ||
        rawHash === "testimonial" ||
        rawHash === "reviews"
      ) {
        setCurrentTab("more")
        setActiveSubpage("testimonials")
      } else if (
        rawPath === "privacy" ||
        rawPath === "privacy-policy" ||
        rawHash === "privacy" ||
        rawHash === "privacy-policy"
      ) {
        setCurrentTab("more")
        setActiveSubpage("privacy")
      } else if (
        rawPath === "terms" ||
        rawPath === "terms-and-conditions" ||
        rawPath === "terms-conditions" ||
        rawHash === "terms" ||
        rawHash === "terms-and-conditions" ||
        rawHash === "terms-conditions"
      ) {
        setCurrentTab("more")
        setActiveSubpage("terms")
      } else if (
        rawPath === "shop" ||
        rawPath === "purchase" ||
        rawPath === "products" ||
        rawHash === "shop" ||
        rawHash === "purchase" ||
        rawHash === "products"
      ) {
        setCurrentTab("shop")
        setActiveSubpage(null)
      } else if (
        rawPath === "nutrition" ||
        rawPath === "science" ||
        rawPath === "concept" ||
        rawHash === "nutrition" ||
        rawHash === "science" ||
        rawHash === "concept"
      ) {
        setCurrentTab("nutrition")
        setActiveSubpage(null)
      } else if (
        rawPath === "wholesale" ||
        rawPath === "wholesale-distributor" ||
        rawHash === "wholesale" ||
        rawHash === "wholesale-distributor"
      ) {
        setCurrentTab("partners")
        setPartnerProgram("wholesale")
        setActiveSubpage(null)
      } else if (
        rawPath === "dropship" ||
        rawPath === "drop-shipping" ||
        rawPath === "dropshipping" ||
        rawHash === "dropship" ||
        rawHash === "drop-shipping" ||
        rawHash === "dropshipping"
      ) {
        setCurrentTab("partners")
        setPartnerProgram("dropship")
        setActiveSubpage(null)
      } else if (
        rawPath === "export" ||
        rawPath === "foreign-export" ||
        rawPath === "international" ||
        rawHash === "export" ||
        rawHash === "foreign-export" ||
        rawHash === "international"
      ) {
        setCurrentTab("partners")
        setPartnerProgram("export")
        setActiveSubpage(null)
      } else if (
        rawPath === "affiliate" ||
        rawPath === "affiliate-program" ||
        rawPath === "affiliates" ||
        rawHash === "affiliate" ||
        rawHash === "affiliate-program" ||
        rawHash === "affiliates"
      ) {
        setCurrentTab("partners")
        setPartnerProgram("affiliate")
        setActiveSubpage(null)
      } else if (
        rawPath === "partners" ||
        rawPath === "make-money" ||
        rawPath === "makemoney" ||
        rawPath === "resell" ||
        rawHash === "partners" ||
        rawHash === "make-money" ||
        rawHash === "makemoney" ||
        rawHash === "resell"
      ) {
        setCurrentTab("partners")
        setActiveSubpage(null)
      } else if (rawPath === "more" || rawHash === "more") {
        setCurrentTab("more")
        setActiveSubpage(null)
      } else {
        setCurrentTab("home")
        setActiveSubpage(null)
      }
    }

    syncRouteFromUrl()
    window.addEventListener("hashchange", syncRouteFromUrl)
    window.addEventListener("popstate", syncRouteFromUrl)
    return () => {
      window.removeEventListener("hashchange", syncRouteFromUrl)
      window.removeEventListener("popstate", syncRouteFromUrl)
    }
  }, [])

  const scrollContainerToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const container = document.getElementById("mobile-viewport-container")
    if (container) container.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSelectTab = (tab: AppTab) => {
    setCurrentTab(tab)
    setActiveSubpage(null)
    const cleanUrl = tab === "home" ? "/" : `/#${tab}`
    window.history.pushState(null, "", cleanUrl)
    scrollContainerToTop()
  }

  const handleOpenSubpage = (subpage: string) => {
    setActiveSubpage(subpage as Subpage)
    window.history.pushState(null, "", `/#${subpage}`)
    scrollContainerToTop()
  }

  const handleBackFromSubpage = () => {
    setActiveSubpage(null)
    const cleanUrl = currentTab === "home" ? "/" : `/#${currentTab}`
    window.history.pushState(null, "", cleanUrl)
    scrollContainerToTop()
  }

  const handleAddToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const nextQty = item.quantity + delta
            return nextQty > 0 ? { ...item, quantity: nextQty } : null
          }
          return item
        })
        .filter((item): item is CartItem => item !== null)
    )
  }

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id))
  }

  const handleClearCart = () => {
    setCart([])
  }

  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024
    }
    return false
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)")

    const handler = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches)
    }

    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  // Subpage title dictionary for TopBar
  const subpageTitles: Record<string, string> = {
    faq: "Frequently Asked Questions",
    testimonials: "Field Reviews & Reports",
    about: "About Survival Tabs",
    contact: "Contact & Support",
    privacy: "Privacy Policy",
    terms: "Security & Terms",
  }

  // Native Mobile App UI Content Shell
  const appContent = (
    <div className="flex flex-col flex-1 min-h-0 h-full w-full bg-background text-primary font-sans selection:bg-red-100 selection:text-red-900 overflow-hidden relative">
      {/* 1. Native Top App Bar */}
      <MobileTopBar
        title={activeSubpage ? subpageTitles[activeSubpage] : undefined}
        showBackButton={!!activeSubpage}
        onBack={handleBackFromSubpage}
        onOpenSearch={() => handleOpenSubpage("faq")}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        isRootTab={!activeSubpage}
      />

      {/* 2. Scrollable Active Screen Container */}
      <div
        id="mobile-viewport-container"
        className="flex-1 w-full overflow-y-auto overflow-x-hidden relative scroll-smooth overscroll-y-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Render Subpage if active */}
        {activeSubpage === "faq" && (
          <FaqPage onNavigateHome={() => handleSelectTab("home")} />
        )}

        {activeSubpage === "testimonials" && (
          <TestimonialsPage
            onNavigateHome={() => handleSelectTab("home")}
            onOrderNow={() => handleSelectTab("shop")}
          />
        )}

        {activeSubpage === "about" && (
          <AboutPage
            onNavigateHome={() => handleSelectTab("home")}
            onOrderNow={() => handleSelectTab("shop")}
          />
        )}

        {activeSubpage === "contact" && (
          <ContactUsPage
            onNavigateHome={() => handleSelectTab("home")}
            onNavigateFaq={() => handleOpenSubpage("faq")}
          />
        )}

        {activeSubpage === "privacy" && (
          <PrivacyPolicyPage
            onNavigateHome={() => handleSelectTab("home")}
            onNavigateContact={() => handleOpenSubpage("contact")}
          />
        )}

        {activeSubpage === "terms" && (
          <TermsPage
            onNavigateHome={() => handleSelectTab("home")}
            onNavigateContact={() => handleOpenSubpage("contact")}
          />
        )}

        {/* Render Core Tabs when not in subpage */}
        {!activeSubpage && (
          <>
            {currentTab === "home" && (
              <HomePage
                onAddToCart={handleAddToCart}
                onNavigateTab={handleSelectTab}
                onNavigateSubpage={handleOpenSubpage}
              />
            )}

            {currentTab === "shop" && (
              <ShopPage
                onAddToCart={handleAddToCart}
                onOpenCart={() => setCartOpen(true)}
              />
            )}

            {currentTab === "nutrition" && <NutritionPage />}

            {currentTab === "partners" && (
              <PartnersPage
                initialProgram={partnerProgram}
                onNavigateHome={() => handleSelectTab("home")}
                onNavigateContact={() => handleOpenSubpage("contact")}
              />
            )}

            {currentTab === "more" && (
              <MorePage onNavigateSubpage={handleOpenSubpage} />
            )}
          </>
        )}
      </div>

      {/* 3. Fixed Native Bottom Tab Bar */}
      <MobileBottomNav
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        cartCount={totalCartCount}
      />

      {/* 4. Sliding Bottom Sheet Cart */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  )

  // Direct Mobile / Tablet Viewport (< 1024px)
  if (!isDesktop) {
    return (
      <div className="h-screen h-dvh max-h-screen max-h-dvh w-full overflow-hidden flex flex-col">
        {appContent}
      </div>
    )
  }

  // Desktop Viewport (>= 1024px): Framed inside a high-fidelity mobile app chassis
  return (
    <div className="relative min-h-screen w-full h-screen overflow-hidden bg-[#070913] bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(16,36,75,0.28),rgba(6,8,20,1))] flex items-center justify-center p-4">
      {/* Left Info Panel */}
      <div className="hidden lg:flex flex-col justify-center space-y-3 max-w-[280px] xl:max-w-xs select-none text-left absolute left-8 lg:left-14 xl:left-24 top-1/2 -translate-y-1/2 z-20">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
          </span>
          <h1 className="text-xl xl:text-2xl font-bold tracking-tight text-white font-sans">
            Survival Tabs App
          </h1>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
          Mobile application experience for Survival Tabs. Built specifically for mobile and tablet touch viewports.
        </p>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-300 backdrop-blur-sm w-fit mt-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live Mobile App Viewport</span>
        </div>
      </div>

      {/* Center: Mobile Phone Shell */}
      <div className="relative z-10 w-[380px] sm:w-[395px] lg:w-[410px] xl:w-[420px] max-w-[92vw] max-h-[92vh] aspect-[433/882] shrink-0 flex items-center justify-center filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
        <Iphone className="size-full">
          {appContent}
        </Iphone>
      </div>
    </div>
  )
}
