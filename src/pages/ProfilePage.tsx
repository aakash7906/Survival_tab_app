import { useState } from "react"
import {
  User,
  Package,
  MapPin,
  CreditCard,
  Bell,
  ShieldCheck,
  ChevronRight,
  LogOut,
  Edit3,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react"

interface ProfilePageProps {
  onNavigateHome?: () => void
  onNavigateShop?: () => void
}

export function ProfilePage({ onNavigateShop }: ProfilePageProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 space-y-5 animate-fade-in-up">
      {/* 1. User Identity Header Card */}
      <section className="relative rounded-3xl bg-card p-5 sm:p-6 shadow-sm flex items-center justify-between gap-4 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-destructive/10 blur-2xl pointer-events-none" />

        <div className="flex items-center gap-4 min-w-0">
          {/* Avatar with status ring */}
          <div className="relative shrink-0">
            <div className="flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-2xl bg-secondary text-primary font-extrabold text-xl shadow-inner border border-border/50">
              <User className="h-8 w-8 text-foreground/80 stroke-[1.8]" />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground ring-2 ring-card">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </span>
          </div>

          {/* User Details */}
          <div className="min-w-0 space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-extrabold tracking-tight text-primary truncate">
                Captain Alex Reynolds
              </h1>
            </div>
            <p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 shrink-0" />
              alex.reynolds@survivalist.org
            </p>
            <div className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2.5 py-0.5 text-[10px] font-bold text-destructive">
              <Sparkles className="h-3 w-3" />
              <span>Verified Prepper Member</span>
            </div>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button
          onClick={() => alert("Edit profile details modal")}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-secondary hover:bg-secondary/80 text-foreground active:scale-90 transition-all cursor-pointer border border-border/60"
          aria-label="Edit Profile"
        >
          <Edit3 className="h-4 w-4" />
        </button>
      </section>

      {/* 2. Rations Readiness Quick Status */}
      <section className="grid grid-cols-3 gap-2.5">
        <div className="rounded-2xl bg-card p-3 text-center shadow-sm space-y-1">
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block">
            Rations Stored
          </span>
          <span className="text-lg sm:text-xl font-extrabold text-primary block">
            60 Days
          </span>
          <span className="text-[10px] font-bold text-accent">Active Reserve</span>
        </div>

        <div className="rounded-2xl bg-card p-3 text-center shadow-sm space-y-1">
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block">
            Past Orders
          </span>
          <span className="text-lg sm:text-xl font-extrabold text-primary block">
            3
          </span>
          <span className="text-[10px] font-bold text-primary">All Delivered</span>
        </div>

        <div className="rounded-2xl bg-card p-3 text-center shadow-sm space-y-1">
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block">
            Ration Shelf
          </span>
          <span className="text-lg sm:text-xl font-extrabold text-destructive block">
            2051
          </span>
          <span className="text-[10px] font-bold text-muted-foreground">25 Yr Guarantee</span>
        </div>
      </section>

      {/* 3. Orders & Orders Tracking Group */}
      <section className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">
          Orders & Subscriptions
        </span>
        <div className="rounded-3xl bg-card shadow-sm divide-y divide-border/60 overflow-hidden">
          <button
            onClick={() => alert("Recent Orders list")}
            className="w-full flex items-center justify-between p-4 hover:bg-secondary/40 active:bg-secondary/70 transition-colors text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Package className="h-5 w-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-sm font-bold text-primary block">Order History</span>
                <span className="text-xs text-muted-foreground">Track shipments and view past receipts</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <span className="text-xs font-semibold text-accent">1 In Transit</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </button>

          <button
            onClick={onNavigateShop}
            className="w-full flex items-center justify-between p-4 hover:bg-secondary/40 active:bg-secondary/70 transition-colors text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <ShieldCheck className="h-5 w-5 stroke-[1.8] text-destructive" />
              </div>
              <div>
                <span className="text-sm font-bold text-primary block">Auto-Ration Restock</span>
                <span className="text-xs text-muted-foreground">Emergency supply replenishment schedule</span>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </section>

      {/* 4. Account Settings & Preferences */}
      <section className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">
          Account Preferences
        </span>
        <div className="rounded-3xl bg-card shadow-sm divide-y divide-border/60 overflow-hidden">
          <button
            onClick={() => alert("Shipping addresses management")}
            className="w-full flex items-center justify-between p-4 hover:bg-secondary/40 active:bg-secondary/70 transition-colors text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <MapPin className="h-5 w-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-sm font-bold text-primary block">Delivery Addresses</span>
                <span className="text-xs text-muted-foreground">Home bunker & outpost destinations</span>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>

          <button
            onClick={() => alert("Payment methods")}
            className="w-full flex items-center justify-between p-4 hover:bg-secondary/40 active:bg-secondary/70 transition-colors text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <CreditCard className="h-5 w-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-sm font-bold text-primary block">Payment Methods</span>
                <span className="text-xs text-muted-foreground">Visa ending in 4242 & PayPal</span>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>

          {/* Native Toggle Switch */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Bell className="h-5 w-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-sm font-bold text-primary block">Disaster & Restock Alerts</span>
                <span className="text-xs text-muted-foreground">Critical notifications and restock news</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
                notificationsEnabled ? "bg-accent" : "bg-muted"
              }`}
              role="switch"
              aria-checked={notificationsEnabled}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out my-0.5 ${
                  notificationsEnabled ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Support & Emergency Contact */}
      <section className="rounded-3xl bg-secondary/80 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-primary block">Need Ration Guidance?</span>
            <span className="text-[11px] text-muted-foreground">Our Missouri HQ specialists are ready.</span>
          </div>
          <a
            href="tel:800-453-3238"
            className="inline-flex items-center gap-1.5 rounded-xl bg-card border border-border/80 px-3 py-2 text-xs font-bold text-primary active:scale-95 transition-all shadow-xs"
          >
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span>Call Desk</span>
          </a>
        </div>
      </section>

      {/* 6. Sign Out Button */}
      <div className="pt-2">
        <button
          onClick={() => alert("Logged out")}
          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-secondary/70 hover:bg-destructive/10 hover:text-destructive text-muted-foreground font-bold py-3.5 text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-98"
        >
          <LogOut className="h-4 w-4 stroke-[2]" />
          <span>Sign Out of Account</span>
        </button>
        <span className="block text-center text-[10px] text-muted-foreground/60 mt-3">
          SurvivalTabs® Mobile App v2.4.0 &bull; Mil-Spec Emergency Rations
        </span>
      </div>
    </div>
  )
}

export default ProfilePage
