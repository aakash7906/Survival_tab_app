import { useState, useEffect } from "react"
import { Iphone } from "@/registry/magicui/iphone"
import { Navbar } from "./components/Navbar"
import { HomePage } from "./pages/HomePage"
import { FaqPage } from "./pages/FaqPage"
import { ContactUsPage } from "./pages/ContactUsPage"
import { TestimonialsPage } from "./pages/TestimonialsPage"
import { AboutPage } from "./pages/AboutPage"
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage"
import { TermsPage } from "./pages/TermsPage"
import { MakeMoneyPage } from "./pages/MakeMoneyPage"
import { WholesaleDistributorPage } from "./pages/WholesaleDistributorPage"
import { DropShippingPage } from "./pages/DropShippingPage"
import { ForeignExportPage } from "./pages/ForeignExportPage"
import { AffiliateProgramPage } from "./pages/AffiliateProgramPage"
import { Footer } from "./components/Footer"
import { CartDrawer, type CartItem } from "./components/CartDrawer"
import type { ProductItem } from "./components/PurchaseSection"

type Page =
  | "home"
  | "faq"
  | "contact"
  | "testimonials"
  | "about"
  | "privacy"
  | "terms"
  | "make-money"
  | "wholesale"
  | "dropship"
  | "export"
  | "affiliate"

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home")
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

  // Sync route and clean up URL path (removing erroneous /hero or broken paths)
  useEffect(() => {
    const syncRouteFromUrl = () => {
      const rawPath = window.location.pathname.toLowerCase().replace(/^\/+|\/+$/g, "")
      const rawHash = window.location.hash.toLowerCase().replace(/^#+/, "")

      let targetPage: Page = "home"
      if (rawPath === "faq" || rawHash === "faq") {
        targetPage = "faq"
      } else if (
        rawPath === "contact" ||
        rawPath === "contact-us" ||
        rawHash === "contact" ||
        rawHash === "contact-us"
      ) {
        targetPage = "contact"
      } else if (
        rawPath === "about" ||
        rawPath === "about-us" ||
        rawHash === "about" ||
        rawHash === "about-us"
      ) {
        targetPage = "about"
      } else if (
        rawPath === "privacy" ||
        rawPath === "privacy-policy" ||
        rawHash === "privacy" ||
        rawHash === "privacy-policy"
      ) {
        targetPage = "privacy"
      } else if (
        rawPath === "terms" ||
        rawPath === "terms-and-conditions" ||
        rawPath === "terms-conditions" ||
        rawHash === "terms" ||
        rawHash === "terms-and-conditions" ||
        rawHash === "terms-conditions"
      ) {
        targetPage = "terms"
      } else if (
        rawPath === "make-money" ||
        rawPath === "makemoney" ||
        rawPath === "resell" ||
        rawPath === "promote" ||
        rawHash === "make-money" ||
        rawHash === "makemoney" ||
        rawHash === "resell" ||
        rawHash === "promote"
      ) {
        targetPage = "make-money"
      } else if (
        rawPath === "wholesale" ||
        rawPath === "wholesale-distributor" ||
        rawPath === "distributor" ||
        rawHash === "wholesale" ||
        rawHash === "wholesale-distributor" ||
        rawHash === "distributor"
      ) {
        targetPage = "wholesale"
      } else if (
        rawPath === "dropship" ||
        rawPath === "drop-shipping" ||
        rawPath === "dropshipping" ||
        rawHash === "dropship" ||
        rawHash === "drop-shipping" ||
        rawHash === "dropshipping"
      ) {
        targetPage = "dropship"
      } else if (
        rawPath === "export" ||
        rawPath === "foreign-export" ||
        rawPath === "international" ||
        rawHash === "export" ||
        rawHash === "foreign-export" ||
        rawHash === "international"
      ) {
        targetPage = "export"
      } else if (
        rawPath === "affiliate" ||
        rawPath === "affiliate-program" ||
        rawPath === "affiliates" ||
        rawHash === "affiliate" ||
        rawHash === "affiliate-program" ||
        rawHash === "affiliates"
      ) {
        targetPage = "affiliate"
      } else if (
        rawPath === "testimonials" ||
        rawPath === "testimonial" ||
        rawHash === "testimonials" ||
        rawHash === "testimonial"
      ) {
        targetPage = "testimonials"
      }

      setCurrentPage(targetPage)

      // Clean URL: Strip any unwanted /hero path and standardize clean URL
      const cleanUrl = targetPage === "home" ? "/" : `/#${targetPage}`
      if (
        window.location.pathname !== "/" ||
        (targetPage === "home" && (window.location.hash === "#hero" || window.location.hash === ""))
      ) {
        window.history.replaceState(null, "", cleanUrl)
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
    setIsDesktop(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches)
    }

    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  const scrollContainerToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const container = document.getElementById("mobile-viewport-container")
    if (container) container.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavigateHome = () => {
    setCurrentPage("home")
    window.history.pushState(null, "", "/")
    scrollContainerToTop()
  }

  const handleNavigateFaq = () => {
    setCurrentPage("faq")
    window.history.pushState(null, "", "/#faq")
    scrollContainerToTop()
  }

  const handleOrderNow = () => {
    setCurrentPage("home")
    window.history.pushState(null, "", "/#purchase")
    setTimeout(() => {
      const el = document.querySelector("#purchase")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 60)
  }

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  const appContent = (
    <div className="min-h-screen bg-background text-primary font-sans flex flex-col justify-between selection:bg-red-100 selection:text-red-900">
      {/* Official Header / Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page as Page)}
      />

      {/* Dedicated Page Views: Toggle between HomePage, FaqPage, ContactUsPage, and TestimonialsPage */}
      {currentPage === "faq" && (
        <FaqPage onNavigateHome={handleNavigateHome} />
      )}

      {currentPage === "contact" && (
        <ContactUsPage
          onNavigateHome={handleNavigateHome}
          onNavigateFaq={handleNavigateFaq}
        />
      )}

      {currentPage === "about" && (
        <AboutPage
          onNavigateHome={handleNavigateHome}
          onOrderNow={handleOrderNow}
        />
      )}

      {currentPage === "privacy" && (
        <PrivacyPolicyPage
          onNavigateHome={handleNavigateHome}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "terms" && (
        <TermsPage
          onNavigateHome={handleNavigateHome}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "make-money" && (
        <MakeMoneyPage
          onNavigateHome={handleNavigateHome}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "wholesale" && (
        <WholesaleDistributorPage
          onNavigateHome={handleNavigateHome}
          onNavigateMakeMoney={() => {
            setCurrentPage("make-money")
            window.history.pushState(null, "", "/#make-money")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "dropship" && (
        <DropShippingPage
          onNavigateHome={handleNavigateHome}
          onNavigateMakeMoney={() => {
            setCurrentPage("make-money")
            window.history.pushState(null, "", "/#make-money")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "export" && (
        <ForeignExportPage
          onNavigateHome={handleNavigateHome}
          onNavigateMakeMoney={() => {
            setCurrentPage("make-money")
            window.history.pushState(null, "", "/#make-money")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "affiliate" && (
        <AffiliateProgramPage
          onNavigateHome={handleNavigateHome}
          onNavigateMakeMoney={() => {
            setCurrentPage("make-money")
            window.history.pushState(null, "", "/#make-money")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          onNavigateContact={() => {
            setCurrentPage("contact")
            window.history.pushState(null, "", "/#contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      )}

      {currentPage === "testimonials" && (
        <TestimonialsPage
          onNavigateHome={handleNavigateHome}
          onOrderNow={handleOrderNow}
        />
      )}

      {currentPage === "home" && (
        <HomePage onAddToCart={handleAddToCart} />
      )}

      {/* Official Footer */}
      <Footer
        onNavigate={(page) => setCurrentPage(page as Page)}
      />

      {/* Sliding Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
      />
    </div>
  )

  if (!isDesktop) {
    return appContent
  }

  return (
    <div className="relative min-h-screen w-full h-screen overflow-hidden bg-[#070913] bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(16,36,75,0.28),rgba(6,8,20,1))] flex items-center justify-center p-4">
      
      {/* Left Info Panel (Floating on left side, identical to Precision Fuel layout) */}
      <div className="hidden lg:flex flex-col justify-center space-y-3 max-w-[280px] xl:max-w-xs select-none text-left absolute left-8 lg:left-14 xl:left-24 top-1/2 -translate-y-1/2 z-20">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
          </span>
          <h1 className="text-xl xl:text-2xl font-bold tracking-tight text-white font-sans">
            Survival Tabs
          </h1>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
          Welcome to the mobile experience portal. This application is optimized for mobile viewports to provide a focused, native-like interface.
        </p>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-300 backdrop-blur-sm w-fit mt-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live Mobile Viewport</span>
        </div>
      </div>

      {/* Center: Mobile Frame shifted to the EXACT DEAD CENTER of the display */}
      <div className="relative z-10 w-[380px] sm:w-[395px] lg:w-[410px] xl:w-[420px] max-w-[92vw] max-h-[92vh] aspect-[433/882] shrink-0 flex items-center justify-center filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
        <Iphone className="size-full">
          {appContent}
        </Iphone>
      </div>

    </div>
  )
}
