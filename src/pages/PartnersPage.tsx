import { useState } from "react"
import { WholesaleDistributorPage } from "./WholesaleDistributorPage"
import { DropShippingPage } from "./DropShippingPage"
import { ForeignExportPage } from "./ForeignExportPage"
import { AffiliateProgramPage } from "./AffiliateProgramPage"

type PartnerTab = "wholesale" | "dropship" | "export" | "affiliate"

interface PartnersPageProps {
  initialProgram?: PartnerTab
  onNavigateHome?: () => void
  onNavigateContact?: () => void
}

export function PartnersPage({
  initialProgram = "wholesale",
  onNavigateHome,
  onNavigateContact,
}: PartnersPageProps) {
  const [activeTab, setActiveTab] = useState<PartnerTab>(initialProgram)

  return (
    <div className="w-full space-y-3 pt-2 pb-8">
      {/* Top Segmented Control for 4 Programs - Positioned directly under MobileTopBar and scrolls naturally with content */}
      <div className="px-4">
        <div className="flex rounded-2xl bg-secondary p-1 border border-border shadow-xs">
          <button
            onClick={() => setActiveTab("wholesale")}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer select-none active:scale-95 ${
              activeTab === "wholesale"
                ? "bg-card text-foreground shadow-xs font-black"
                : "text-muted-foreground hover:text-foreground font-medium"
            }`}
          >
            Wholesale
          </button>
          <button
            onClick={() => setActiveTab("dropship")}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer select-none active:scale-95 ${
              activeTab === "dropship"
                ? "bg-card text-foreground shadow-xs font-black"
                : "text-muted-foreground hover:text-foreground font-medium"
            }`}
          >
            Dropship
          </button>
          <button
            onClick={() => setActiveTab("export")}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer select-none active:scale-95 ${
              activeTab === "export"
                ? "bg-card text-foreground shadow-xs font-black"
                : "text-muted-foreground hover:text-foreground font-medium"
            }`}
          >
            Export
          </button>
          <button
            onClick={() => setActiveTab("affiliate")}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer select-none active:scale-95 ${
              activeTab === "affiliate"
                ? "bg-card text-foreground shadow-xs font-black"
                : "text-muted-foreground hover:text-foreground font-medium"
            }`}
          >
            Affiliate
          </button>
        </div>
      </div>

      {/* Program Views Container */}
      <div className="animate-fade-in-up">
        {activeTab === "wholesale" && (
          <WholesaleDistributorPage
            onNavigateHome={onNavigateHome}
            onNavigateMakeMoney={() => setActiveTab("wholesale")}
            onNavigateContact={onNavigateContact}
          />
        )}

        {activeTab === "dropship" && (
          <DropShippingPage
            onNavigateHome={onNavigateHome}
            onNavigateMakeMoney={() => setActiveTab("dropship")}
            onNavigateContact={onNavigateContact}
          />
        )}

        {activeTab === "export" && (
          <ForeignExportPage
            onNavigateHome={onNavigateHome}
            onNavigateMakeMoney={() => setActiveTab("export")}
            onNavigateContact={onNavigateContact}
          />
        )}

        {activeTab === "affiliate" && (
          <AffiliateProgramPage
            onNavigateHome={onNavigateHome}
            onNavigateMakeMoney={() => setActiveTab("affiliate")}
            onNavigateContact={onNavigateContact}
          />
        )}
      </div>
    </div>
  )
}

export default PartnersPage
