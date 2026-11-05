import { useState, useEffect } from "react"
import { Iphone } from "./components/ui/iphone"
import { TopBar } from "./components/TopBar"
import { MobileBottomNav, type AppTab } from "./components/BottomNav"
import { CartPage, type CartItem } from "./pages/CartPage"
import type { ProductItem } from "./components/PurchaseSection"

// Tab Screen Views
import { HomePage } from "./pages/HomePage"
import { ShopPage } from "./pages/ShopPage"
import { NutritionPage } from "./pages/NutritionPage"

// Dedicated Sub-views (Accessible from Profile / Direct Links)
import { FaqPage } from "./pages/FaqPage"
import { AboutPage } from "./pages/AboutPage"
import { ContactUsPage } from "./pages/ContactUsPage"
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage"
import { TermsPage } from "./pages/TermsPage"
import { ProfilePage } from "./pages/ProfilePage"
import { EditProfilePage, type UserProfileData } from "./pages/EditProfilePage"
import { LoginPage } from "./pages/LoginPage"
import { SignupPage } from "./pages/SignupPage"
import { SplashScreen } from "./components/SplashScreen"
import { OnboardingScreen } from "./components/OnboardingScreen"

type Subpage =
  | "faq"
  | "about"
  | "contact"
  | "privacy"
  | "terms"
  | "profile"
  | "edit-profile"
  | "login"
  | "signup"
  | null

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [currentTab, setCurrentTab] = useState<AppTab>("home")
  const [activeSubpage, setActiveSubpage] = useState<Subpage>(null)

  // Global user profile state
  const [userProfile, setUserProfile] = useState<UserProfileData>({
    name: "Captain Alex Reynolds",
    email: "alex.reynolds@survivalist.org",
    phone: "+1 (800) 453-3238",
    primaryKit: "15-Day Chocolate Ration Jar",
    streetAddress: "100 Outer Marker Road",
    cityRegion: "Concordia, MO",
    postalCode: "64020",
  })

  const [cart, setCart] = useState<CartItem[]>([
    {
      product: {
        id: "st-banana",
        name: "Survival Tabs Banana",
        flavor: "Banana",
        price: 39.95,
        illustration: "🍌 Natural Banana",
        image: "/images/banana.png",
      },
      quantity: 1,
    },
  ])

  // Sync route and clean up URL path
  useEffect(() => {
    const syncRouteFromUrl = () => {
      const rawPath = window.location.pathname.toLowerCase().replace(/^\/+|\/+$/g, "")
      const rawHash = window.location.hash.toLowerCase().replace(/^#+/, "")

      if (rawPath === "faq" || rawHash === "faq") {
        setActiveSubpage("faq")
      } else if (
        rawPath === "contact" ||
        rawPath === "contact-us" ||
        rawHash === "contact" ||
        rawHash === "contact-us"
      ) {
        setActiveSubpage("contact")
      } else if (
        rawPath === "about" ||
        rawPath === "about-us" ||
        rawHash === "about" ||
        rawHash === "about-us"
      ) {
        setActiveSubpage("about")
      } else if (
        rawPath === "privacy" ||
        rawPath === "privacy-policy" ||
        rawHash === "privacy" ||
        rawHash === "privacy-policy"
      ) {
        setActiveSubpage("privacy")
      } else if (
        rawPath === "terms" ||
        rawPath === "terms-and-conditions" ||
        rawPath === "terms-conditions" ||
        rawHash === "terms" ||
        rawHash === "terms-and-conditions" ||
        rawHash === "terms-conditions"
      ) {
        setActiveSubpage("terms")
      } else if (
        rawPath === "login" ||
        rawPath === "signin" ||
        rawHash === "login" ||
        rawHash === "signin"
      ) {
        setActiveSubpage("login")
      } else if (
        rawPath === "signup" ||
        rawPath === "register" ||
        rawHash === "signup" ||
        rawHash === "register"
      ) {
        setActiveSubpage("signup")
      } else if (
        rawPath === "edit-profile" ||
        rawPath === "profile/edit" ||
        rawHash === "edit-profile" ||
        rawHash === "profile/edit"
      ) {
        setActiveSubpage("edit-profile")
      } else if (
        rawPath === "profile" ||
        rawPath === "account" ||
        rawHash === "profile" ||
        rawHash === "account" ||
        rawPath === "more" ||
        rawHash === "more"
      ) {
        setActiveSubpage("profile")
      } else if (
        rawPath === "cart" ||
        rawPath === "shopping-cart" ||
        rawPath === "checkout" ||
        rawHash === "cart" ||
        rawHash === "shopping-cart" ||
        rawHash === "checkout"
      ) {
        setCurrentTab("cart")
        setActiveSubpage(null)
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
    if (tab === "profile") {
      handleOpenSubpage("profile")
      return
    }
    setCurrentTab(tab)
    setActiveSubpage(null)
    const cleanUrl = tab === "home" ? "/" : `/${tab}`
    window.history.pushState(null, "", cleanUrl)
    scrollContainerToTop()
  }

  const handleOpenSubpage = (subpage: string) => {
    setActiveSubpage(subpage as Subpage)
    window.history.pushState(null, "", `/${subpage}`)
    scrollContainerToTop()
  }

  const handleBackFromSubpage = () => {
    setActiveSubpage(null)
    const cleanUrl = currentTab === "home" ? "/" : `/${currentTab}`
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
    about: "About Survival Tabs",
    contact: "Contact & Support",
    privacy: "Privacy Policy",
    terms: "Security & Terms",
    profile: "Profile",
    "edit-profile": "Edit Profile",
    login: "Sign In",
    signup: "Create Account",
  }

  // Native Mobile App UI Content Shell
  const appContent = (
    <div className="flex flex-col flex-1 min-h-0 h-full w-full bg-background text-primary font-sans selection:bg-red-100 selection:text-red-900 overflow-hidden relative">
      {/* Native App Splash Screen */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* Native Onboarding Screen (Appears immediately after splash) */}
      {!showSplash && showOnboarding && (
        <OnboardingScreen onComplete={() => setShowOnboarding(false)} />
      )}

      {/* 1. Native Top App Bar */}
      <TopBar
        title={
          activeSubpage
            ? subpageTitles[activeSubpage]
            : currentTab === "cart"
            ? "Shopping Cart"
            : undefined
        }
        showBackButton={!!activeSubpage || currentTab === "cart"}
        onBack={
          currentTab === "cart" && !activeSubpage
            ? () => handleSelectTab("home")
            : handleBackFromSubpage
        }
        onOpenCart={() => {
          handleSelectTab("cart")
        }}
        isCartActive={currentTab === "cart" && !activeSubpage}
        cartCount={totalCartCount}
        isRootTab={!activeSubpage && currentTab !== "cart"}
        rightAction={
          activeSubpage === "edit-profile" ? (
            <button
              onClick={() => {
                // Return to profile on save
                handleOpenSubpage("profile")
              }}
              className="px-2.5 py-1 text-xs font-bold text-destructive hover:text-destructive/80 active:scale-95 transition-all cursor-pointer"
            >
              Save
            </button>
          ) : undefined
        }
      />

      {/* 2. Scrollable Active Screen Container */}
      <div
        id="mobile-viewport-container"
        className="flex-1 w-full overflow-y-auto overflow-x-hidden relative scroll-smooth overscroll-y-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Render Subpage if active */}
        {activeSubpage === "faq" && (
          <FaqPage />
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

        {activeSubpage === "profile" && (
          <ProfilePage
            profileData={userProfile}
            onNavigateEditProfile={() => handleOpenSubpage("edit-profile")}
            onNavigateHome={() => handleSelectTab("home")}
            onNavigateShop={() => handleSelectTab("shop")}
            onNavigateSubpage={handleOpenSubpage}
          />
        )}

        {activeSubpage === "edit-profile" && (
          <EditProfilePage
            initialData={userProfile}
            onSave={(updated) => {
              setUserProfile(updated)
              handleOpenSubpage("profile")
            }}
            onCancel={() => handleOpenSubpage("profile")}
          />
        )}

        {activeSubpage === "login" && (
          <LoginPage
            onLoginSuccess={(email) => {
              setUserProfile((prev) => ({ ...prev, email }))
              handleOpenSubpage("profile")
            }}
            onNavigateSignup={() => handleOpenSubpage("signup")}
            onBack={() => handleSelectTab("home")}
          />
        )}

        {activeSubpage === "signup" && (
          <SignupPage
            onSignupSuccess={(data) => {
              setUserProfile((prev) => ({
                ...prev,
                name: data.name,
                email: data.email,
                phone: data.phone,
              }))
              handleOpenSubpage("profile")
            }}
            onNavigateLogin={() => handleOpenSubpage("login")}
            onBack={() => handleSelectTab("home")}
          />
        )}

        {/* Render Core Tabs when not in subpage */}
        {!activeSubpage && (
          <>
            {currentTab === "home" && (
              <HomePage
                onAddToCart={handleAddToCart}
                onNavigateSubpage={handleOpenSubpage}
              />
            )}

            {currentTab === "shop" && (
              <ShopPage
                onAddToCart={handleAddToCart}
              />
            )}

            {currentTab === "cart" && (
              <CartPage
                items={cart}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveFromCart}
                onClearCart={handleClearCart}
                onContinueShopping={() => handleSelectTab("shop")}
              />
            )}

            {currentTab === "nutrition" && <NutritionPage />}
          </>
        )}
      </div>

      {/* 3. Fixed Native Bottom Tab Bar with Profile Tab on the Right */}
      <MobileBottomNav
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenProfile={() => handleOpenSubpage("profile")}
        isProfileActive={activeSubpage === "profile" || activeSubpage === "edit-profile"}
      />
    </div>
  )

  // Direct Mobile / Tablet Viewport (< 1024px)
  if (!isDesktop) {
    return (
      <div className="h-full h-[100dvh] max-h-[100dvh] w-full overflow-hidden flex flex-col">
        {appContent}
      </div>
    )
  }

  // Desktop Viewport (>= 1024px): Framed inside a high-fidelity mobile app chassis
  return (
    <div className="relative min-h-screen w-full h-screen overflow-hidden bg-[#070913] bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(16,36,75,0.28),rgba(6,8,20,1))] flex items-center justify-center p-4">
      {/* Center: Mobile Phone Shell */}
      <div className="relative z-10 w-[380px] sm:w-[395px] lg:w-[410px] xl:w-[420px] max-w-[92vw] max-h-[92vh] aspect-[433/882] shrink-0 flex items-center justify-center filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
        <Iphone className="size-full">
          {appContent}
        </Iphone>
      </div>
    </div>
  )
}

