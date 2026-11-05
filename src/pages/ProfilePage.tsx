import {
  User,
  Package,
  ChevronRight,
  LogOut,
  Edit3,
  CheckCircle2,
  Phone,
  HelpCircle,
  Info,
  Lock,
  FileText,
  Trash2,
} from "lucide-react"
import type { UserProfileData } from "./EditProfilePage"

interface ProfilePageProps {
  profileData: UserProfileData
  onNavigateEditProfile: () => void
  onNavigateHome?: () => void
  onNavigateShop?: () => void
  onNavigateSubpage?: (subpage: string) => void
}

export function ProfilePage({
  profileData,
  onNavigateEditProfile,
  onNavigateSubpage,
}: ProfilePageProps) {
  const handleSubpage = (subpage: string) => {
    if (onNavigateSubpage) {
      onNavigateSubpage(subpage)
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-4 space-y-4 animate-fade-in-up pb-12 font-sans relative">
      {/* 1. User Identity Header Card */}
      <section className="rounded-3xl bg-card p-5 sm:p-6 shadow-sm border border-border/60 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-secondary text-primary font-extrabold text-xl overflow-hidden ring-2 ring-border/60">
                {profileData.avatarUrl ? (
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-8 w-8 text-foreground/80 stroke-[1.8]" />
                )}
              </div>
              <span className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-accent-foreground ring-2 ring-card">
                <CheckCircle2 className="h-3 w-3" />
              </span>
            </div>

            {/* User Details */}
            <div className="min-w-0 space-y-0.5">
              <h1 className="text-base sm:text-lg font-extrabold tracking-tight text-primary truncate">
                {profileData.name}
              </h1>
              <p className="text-xs text-muted-foreground truncate font-medium">
                {profileData.email}
              </p>
            </div>
          </div>

          {/* Edit Profile Pencil Button */}
          <button
            onClick={onNavigateEditProfile}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 text-foreground active:scale-90 transition-all cursor-pointer border border-border/60"
            aria-label="Edit Profile"
            title="Edit Profile"
          >
            <Edit3 className="h-4 w-4 stroke-[2]" />
          </button>
        </div>  
      </section>

      {/* 2. Primary Navigation & Action Menu Group */}
      <section className="rounded-3xl bg-card shadow-sm border border-border/60 overflow-hidden">
        {/* Saved Rations & Orders */}
        <button
          onClick={() => alert("Recent Orders: 3 completed shipments to " + profileData.streetAddress)}
          className="w-full flex items-center justify-between p-4 hover:bg-secondary/40 active:bg-secondary/70 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Package className="h-5 w-5 stroke-[1.8]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-primary block">My Rations Orders</span>
                <span className="rounded-md bg-destructive/10 text-destructive text-[10px] font-extrabold px-1.5 py-0.5">
                  1 IN TRANSIT
                </span>
              </div>
              <span className="text-xs text-muted-foreground">Track shipments</span>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Contact Us */}
        <button
          onClick={() => handleSubpage("contact")}
          className="w-full flex items-center justify-between p-4 hover:bg-secondary/40 active:bg-secondary/70 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Phone className="h-5 w-5 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-sm font-bold text-primary block">Contact Us</span>
              <span className="text-xs text-muted-foreground">Call, email, or visit us</span>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* About Us */}
        <button
          onClick={() => handleSubpage("about")}
          className="w-full flex items-center justify-between p-4 hover:bg-secondary/40 active:bg-secondary/70 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Info className="h-5 w-5 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-sm font-bold text-primary block">About Us</span>
              <span className="text-xs text-muted-foreground">Our space program heritage</span>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* FAQ */}
        <button
          onClick={() => handleSubpage("faq")}
          className="w-full flex items-center justify-between p-4 hover:bg-secondary/40 active:bg-secondary/70 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
              <HelpCircle className="h-5 w-5 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-sm font-bold text-primary block">Frequently Asked Questions</span>
              <span className="text-xs text-muted-foreground">Shelf life, daily usage, water requirements</span>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Privacy Policy */}
        <button
          onClick={() => handleSubpage("privacy")}
          className="w-full flex items-center justify-between p-4 hover:bg-secondary/40 active:bg-secondary/70 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Lock className="h-5 w-5 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-sm font-bold text-primary block">Privacy Policy</span>
              <span className="text-xs text-muted-foreground">Zero data broker sharing</span>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Terms of Service */}
        <button
          onClick={() => handleSubpage("terms")}
          className="w-full flex items-center justify-between p-4 hover:bg-secondary/40 active:bg-secondary/70 transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
              <FileText className="h-5 w-5 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-sm font-bold text-primary block">Terms of Service</span>
              <span className="text-xs text-muted-foreground">25-year guarantee warranty</span>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>
      </section>

      {/* 3. Action Buttons (Logout & Delete Account) */}
      <div className="space-y-3 pt-2">
        <button
          onClick={() => {
            if (handleSubpage) {
              handleSubpage("login")
            }
          }}
          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-secondary/80 hover:bg-secondary text-primary font-bold py-3.5 text-xs sm:text-sm tracking-wide transition-all cursor-pointer active:scale-98 border border-border/70"
        >
          <LogOut className="h-4 w-4 stroke-[2]" />
          <span>Logout / Switch Account</span>
        </button>

        <button
          onClick={() => {
            if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
              alert("Account deletion request submitted.")
            }
          }}
          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-red-50 hover:bg-red-100/80 text-destructive font-bold py-3.5 text-xs sm:text-sm tracking-wide transition-all cursor-pointer active:scale-98 border border-red-200"
        >
          <Trash2 className="h-4 w-4 stroke-[2]" />
          <span>Delete Account</span>
        </button>

        <span className="block text-center text-[10px] text-muted-foreground/60 pt-1">
          SurvivalTabs® Mobile App &bull; Emergency Rations
        </span>
      </div>
    </div>
  )
}

export default ProfilePage
