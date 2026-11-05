import { useState } from "react"
import {
  User,
  Mail,
  Phone,
  Package,
  MapPin,
  Lock,
  Camera,
  Check,
  ChevronDown,
} from "lucide-react"

export interface UserProfileData {
  name: string
  email: string
  phone: string
  primaryKit: string
  streetAddress: string
  cityRegion: string
  postalCode: string
  avatarUrl?: string
}

interface EditProfilePageProps {
  initialData: UserProfileData
  onSave: (data: UserProfileData) => void
  onCancel: () => void
}

const RATION_KIT_OPTIONS = [
  "15-Day Chocolate Ration Jar",
  "15-Day Banana Ration Jar",
  "15-Day Vanilla Ration Jar",
  "15-Day Strawberry Ration Jar",
  "60-Day Multi-Flavor Reserve Pack",
  "120-Day Emergency Preparedness Cache",
]

export function EditProfilePage({
  initialData,
  onSave,
  onCancel,
}: EditProfilePageProps) {
  const [formData, setFormData] = useState<UserProfileData>({ ...initialData })

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-4 space-y-5 animate-fade-in-up pb-10 font-sans">
      {/* 1. Large Centered Avatar with Camera Badge */}
      <div className="flex flex-col items-center justify-center pt-2">
        <div className="relative">
          <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full ring-4 ring-destructive/20 overflow-hidden bg-secondary flex items-center justify-center shadow-md">
            {formData.avatarUrl ? (
              <img
                src={formData.avatarUrl}
                alt={formData.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <User className="h-12 w-12 sm:h-14 sm:w-14 text-foreground/70 stroke-[1.5]" />
            )}
          </div>
          {/* Camera edit badge button */}
          <button
            type="button"
            onClick={() => alert("Avatar upload will open your camera or photo library")}
            className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-white shadow-md ring-2 ring-card hover:bg-destructive/90 active:scale-90 transition-all cursor-pointer"
            aria-label="Change photo"
          >
            <Camera className="h-4 w-4 stroke-[2.2]" />
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 2. Personal Information Card */}
        <section className="rounded-3xl bg-card p-5 sm:p-6 shadow-sm border border-border/60 space-y-4">
          <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Personal Information
          </h2>

          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-primary block">
              Full Name
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3.5 h-4 w-4 text-muted-foreground stroke-[2] pointer-events-none" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-secondary/70 border border-border/70 text-xs sm:text-sm font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-destructive/20 focus:border-destructive transition-all"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Email Address (Not Editable) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-primary block">
                Email Address
              </label>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded-md border border-border/50">
                <Lock className="h-2.5 w-2.5" />
                Not Editable
              </span>
            </div>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 h-4 w-4 text-muted-foreground stroke-[2] pointer-events-none" />
              <input
                type="email"
                disabled
                value={formData.email}
                className="w-full pl-10 pr-10 py-3 rounded-2xl bg-secondary/50 border border-border/50 text-xs sm:text-sm text-muted-foreground cursor-not-allowed select-none font-medium"
              />
              <Lock className="absolute right-3.5 h-3.5 w-3.5 text-muted-foreground/70 pointer-events-none" />
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-primary block">
              Phone Number
            </label>
            <div className="relative flex items-center">
              <Phone className="absolute left-3.5 h-4 w-4 text-muted-foreground stroke-[2] pointer-events-none" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-secondary/70 border border-border/70 text-xs sm:text-sm font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-destructive/20 focus:border-destructive transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Primary Ration Kit / Emergency Supply Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-primary block">
              Primary Ration Supply
            </label>
            <div className="relative flex items-center">
              <Package className="absolute left-3.5 h-4 w-4 text-muted-foreground stroke-[2] pointer-events-none" />
              <select
                value={formData.primaryKit}
                onChange={(e) => setFormData({ ...formData, primaryKit: e.target.value })}
                className="w-full pl-10 pr-9 py-3 rounded-2xl bg-secondary/70 border border-border/70 text-xs sm:text-sm font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-destructive/20 focus:border-destructive transition-all appearance-none cursor-pointer"
              >
                {RATION_KIT_OPTIONS.map((kit) => (
                  <option key={kit} value={kit}>
                    {kit}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 h-4 w-4 text-muted-foreground pointer-events-none stroke-[2]" />
            </div>
          </div>
        </section>

        {/* 3. Service Delivery Address Card */}
        <section className="rounded-3xl bg-card p-5 sm:p-6 shadow-sm border border-border/60 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Service Delivery Address
            </h2>
          </div>

          {/* Street Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-primary block">
              Street Address
            </label>
            <div className="relative flex items-center">
              <MapPin className="absolute left-3.5 h-4 w-4 text-muted-foreground stroke-[2] pointer-events-none" />
              <input
                type="text"
                value={formData.streetAddress}
                onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-secondary/70 border border-border/70 text-xs sm:text-sm font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-destructive/20 focus:border-destructive transition-all"
                placeholder="Street address or P.O. Box"
              />
            </div>
          </div>

          {/* City / Region & Postal Code (2 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-primary block">
                City / Region
              </label>
              <input
                type="text"
                value={formData.cityRegion}
                onChange={(e) => setFormData({ ...formData, cityRegion: e.target.value })}
                className="w-full px-3.5 py-3 rounded-2xl bg-secondary/70 border border-border/70 text-xs sm:text-sm font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-destructive/20 focus:border-destructive transition-all"
                placeholder="City, State"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-primary block">
                Postal Code
              </label>
              <input
                type="text"
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                className="w-full px-3.5 py-3 rounded-2xl bg-secondary/70 border border-border/70 text-xs sm:text-sm font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-destructive/20 focus:border-destructive transition-all"
                placeholder="Postal / ZIP Code"
              />
            </div>
          </div>
        </section>

        {/* 4. Action Buttons (Cancel & Save Changes) */}
        <div className="pt-2 flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-3.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground font-bold text-xs uppercase tracking-wider cursor-pointer active:scale-95 transition-all text-center border border-border/60"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-extrabold text-xs uppercase tracking-wider cursor-pointer active:scale-95 transition-all shadow-md shadow-destructive/20"
          >
            <Check className="h-4 w-4 stroke-[2.5]" />
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProfilePage
