import {
  HelpCircle,
  Star,
  Info,
  Phone,
  Mail,
  ShieldCheck,
  FileText,
  ChevronRight,
  MapPin,
  Clock,
} from "lucide-react"
import { FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon, InstagramIcon } from "../components/ui/SocialIcons"

interface MorePageProps {
  onNavigateSubpage: (page: string) => void
}

export function MorePage({ onNavigateSubpage }: MorePageProps) {
  const customerMenuItems = [
    {
      id: "about",
      label: "About Survival Tabs",
      subtitle: "Aerospace origins, 1960s NASA research & Everest proof",
      icon: Info,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      id: "faq",
      label: "Frequently Asked Questions",
      subtitle: "22 answers on storage, calories, bio-availability & safety",
      icon: HelpCircle,
      color: "text-amber-600 bg-amber-50 border-amber-100",
      badge: "22 FAQs",
    },
    {
      id: "testimonials",
      label: "Customer Reviews & Reports",
      subtitle: "Verified field ratings from search & rescue and hikers",
      icon: Star,
      color: "text-yellow-600 bg-yellow-50 border-yellow-100",
      badge: "4.9 ★",
    },
    {
      id: "contact",
      label: "Contact Support Desk",
      subtitle: "Direct toll-free hotline & customer support form",
      icon: Phone,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
  ]

  const legalMenuItems = [
    {
      id: "privacy",
      label: "Privacy Policy",
      subtitle: "Sacrosanct customer privacy & air-gapped vault since 1989",
      icon: ShieldCheck,
      color: "text-emerald-700 bg-emerald-50 border-emerald-100",
    },
    {
      id: "terms",
      label: "Terms & Security Statement",
      subtitle: "128-bit Starfield SSL, Authorize.Net & Visa CISP compliance",
      icon: FileText,
      color: "text-primary bg-secondary border-border",
    },
  ]

  return (
    <div className="w-full space-y-6 px-4 pt-3 pb-12">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary">
          More &amp; Support
        </h1>
        <p className="text-xs text-muted-foreground">
          Knowledge base, field reports, contact lines, and certifications
        </p>
      </div>

      {/* Group 1: Support & Knowledge Base */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground px-1 block">
          Knowledge &amp; Support
        </span>

        <div className="rounded-3xl border border-border bg-card divide-y divide-border overflow-hidden shadow-xs">
          {customerMenuItems.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.id}
                onClick={() => onNavigateSubpage(item.id)}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left hover:bg-secondary/60 active:bg-secondary transition-colors cursor-pointer select-none"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 space-y-0.5">
                    <span className="font-bold text-xs sm:text-sm text-primary block truncate">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-muted-foreground block truncate">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  {item.badge && (
                    <span className="rounded-full bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Group 2: Legal, Security & Privacy */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground px-1 block">
          Trust &amp; Legal Compliance
        </span>

        <div className="rounded-3xl border border-border bg-card divide-y divide-border overflow-hidden shadow-xs">
          {legalMenuItems.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.id}
                onClick={() => onNavigateSubpage(item.id)}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left hover:bg-secondary/60 active:bg-secondary transition-colors cursor-pointer select-none"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 space-y-0.5">
                    <span className="font-bold text-xs sm:text-sm text-primary block truncate">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-muted-foreground block truncate">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 ml-2" />
              </button>
            )
          })}
        </div>
      </div>

      {/* Group 3: Direct Phone & Email Hotline Card */}
      <div className="rounded-3xl border border-border bg-secondary p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-primary">
            Direct Assistance
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <a
            href="tel:800-453-3238"
            className="flex items-center gap-2.5 p-3 rounded-2xl bg-card border border-border hover:border-emerald-300 text-primary active:scale-95 transition-all"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-muted-foreground block">Toll-Free Phone</span>
              <span className="font-bold text-primary">800-453-3238</span>
            </div>
          </a>

          <a
            href="mailto:Sales@FoodReserves.com"
            className="flex items-center gap-2.5 p-3 rounded-2xl bg-card border border-border hover:border-red-300 text-primary active:scale-95 transition-all"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Mail className="h-4 w-4" />
            </div>
            <div className="truncate">
              <span className="text-[10px] uppercase font-bold text-muted-foreground block">Email Inquiries</span>
              <span className="font-bold text-primary truncate block">Sales@FoodReserves.com</span>
            </div>
          </a>
        </div>

        <div className="pt-2 border-t border-border flex flex-col gap-1 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <span>Monday &ndash; Friday &bull; 8:00 AM &ndash; 5:00 PM PST</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <span>Good For You America &bull; Concordia, Missouri, 64020 USA</span>
          </div>
        </div>
      </div>

      {/* Social Follow Strip */}
      <div className="space-y-2 text-center pt-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Follow Survival Tabs
        </span>
        <div className="flex items-center justify-center gap-2">
          {[
            { name: "Facebook", href: "https://www.facebook.com/TheSurvivalTabs/", icon: FacebookIcon },
            { name: "Twitter / X", href: "https://twitter.com/SurvivalTabs", icon: TwitterIcon },
            { name: "LinkedIn", href: "https://www.linkedin.com/company/survivaltabs/", icon: LinkedinIcon },
            { name: "YouTube", href: "https://www.youtube.com/@TheSurvivalTabs", icon: YoutubeIcon },
            { name: "Instagram", href: "https://www.instagram.com/survivaltabs/", icon: InstagramIcon },
          ].map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-card border border-border text-muted-foreground hover:text-red-600 active:scale-95 transition-all"
                title={item.name}
                aria-label={item.name}
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </div>

      {/* Brand & App Version Footer */}
      <div className="text-center space-y-1 text-[11px] text-muted-foreground pt-3 border-t border-border">
        <p className="font-semibold text-primary">
          Survival Tabs® Mobile Experience v2.4
        </p>
        <p>&copy; 2026 Food Reserve, Inc. &bull; Made in the USA</p>
      </div>
    </div>
  )
}

export default MorePage
