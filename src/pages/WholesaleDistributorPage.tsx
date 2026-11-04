import { useState, type FormEvent } from "react"
import {
  CheckCircle2,
  TrendingUp,

  Building2,
  Phone,
  Mail,
  Send,
  Truck,
  Award,
  Boxes,
} from "lucide-react"

interface WholesaleDistributorPageProps {
  onNavigateHome?: () => void
  onNavigateContact?: () => void
}

export function WholesaleDistributorPage({
  onNavigateContact,
}: WholesaleDistributorPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "Brick-and-Mortar Retail Store",
    taxId: "",
    email: "",
    phone: "",
    volume: "1 - 5 Master Cases / month",
    address: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 space-y-6 pt-2 pb-12">
      {/* Main Header Card (Verbatim from User Image) */}
      <section className="relative rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs overflow-hidden text-center space-y-4">
        <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary max-w-4xl mx-auto leading-tight">
          WHY YOU WANT TO BE A DISTRIBUTOR
        </h1>

        {/* 4 Core Perks Row (Verbatim from image) */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold text-emerald-800">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Improved Market Information</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Greater Stability of Supply</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Full Discount</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Better Pricing</span>
          </span>
        </div>

        {/* 1-Line Punchy Tagline with Key Highlights */}
        <p className="text-xs sm:text-sm font-medium text-muted-foreground max-w-xl mx-auto leading-relaxed text-center">
          Scale your retail store with direct US factory supply, Tier-1 bulk discounts, and 25-year shelf-life emergency rations.
        </p>
      </section>

      {/* Deep-Dive 4 Benefits Cards */}
      <section className="space-y-6">
        <div className="text-center sm:text-left space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Wholesale Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
            How Our Distribution Network Empowers Your Business
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Perk 1 */}
          <div className="rounded-2xl bg-secondary border border-border p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-primary">
              Improved Market Information
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Gain access to consumer emergency food demand trends, seasonal rush insights, and marketing collateral to optimize your sales velocity.
            </p>
          </div>

          {/* Perk 2 */}
          <div className="rounded-2xl bg-secondary border border-border p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
              <Truck className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-primary">
              Greater Stability of Supply
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Guaranteed inventory reserves from our US manufacturing plant. During national emergencies or supply chain disruptions, your orders take priority.
            </p>
          </div>

          {/* Perk 3 */}
          <div className="rounded-2xl bg-secondary border border-border p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
              <Boxes className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-primary">
              Full Discount Margins
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Enjoy substantial B2B discounts off retail MSRP. Capture high-margin profits per unit whether selling in-store or through your digital channels.
            </p>
          </div>

          {/* Perk 4 */}
          <div className="rounded-2xl bg-secondary border border-border p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-200">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-primary">
              Better Volume Pricing
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Scalable tier pricing by master case, quarter-pallet, or full-pallet shipments. The more volume you move, the higher your net profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Product Merchandising & Spec Highlights */}
      <section className="rounded-2xl bg-primary text-primary-foreground p-5 sm:p-6 shadow-xl border border-border">
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary-foreground leading-tight">
              Zero Expiration Loss with 25-Year Certified Shelf Life
            </h2>

            <p className="text-xs text-primary-foreground/80 leading-relaxed">
              Unlike traditional food products that risk spoiling on your retail shelves or in your warehouse, Survival Tabs maintain a certified 25-year shelf life. There are zero inventory write-offs or markdown sales due to looming expiration dates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-primary-foreground/80">
              <div className="space-y-1">
                <span className="font-bold text-primary-foreground block">Standard Retail Master Case</span>
                <p className="text-primary-foreground/70">12 airtight canisters per carton, individual UPC barcodes.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-primary-foreground block">4 Best-Selling Flavors</span>
                <p className="text-primary-foreground/70">Banana, Chocolate, Vanilla Malt, and Maple.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 text-center space-y-2">
            <img
              src="/images/made-in-usa.png"
              alt="Made in USA"
              className="h-12 w-auto object-contain"
            />
            <h3 className="text-sm font-bold text-primary-foreground uppercase tracking-wider">
              100% Sourced &amp; Made in USA
            </h3>
            <p className="text-xs text-primary-foreground/70 max-w-xs">
              Every master case is manufactured and sealed under rigorous US food quality and defense packaging regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Wholesale Distributor Application Form */}
      <section
        id="apply-form"
        className="rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs space-y-6"
      >
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Direct B2B Onboarding
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-primary uppercase">
            Wholesale Distributor Application
          </h2>
          <div className="h-0.5 w-16 bg-primary mx-auto" />
          <p className="text-xs sm:text-sm text-muted-foreground">
            Complete the form below to apply for an Authorized Wholesale Distributor account. Our B2B accounts team will review and reply within 1 business day with dealer pricing sheets.
          </p>
        </div>

        {isSubmitted ? (
          <div className="max-w-xl mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white mx-auto shadow">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-emerald-950">
              Application Successfully Submitted!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Your application for <strong>{formData.businessName || "your business"}</strong> has been logged with our wholesale team. We will email our wholesale pricing catalog to <strong>{formData.email}</strong> shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
            >
              Submit another inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Contact Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Business / Company Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="Tactical Gear Supply Co."
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="purchasing@company.com"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(800) 000-0000"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Business Model / Venue
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="Brick-and-Mortar Retail Store">Brick-and-Mortar Retail Store</option>
                  <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                  <option value="Military & Tactical Supplier">Military &amp; Tactical Supplier</option>
                  <option value="Outdoor & Survival Outfitter">Outdoor &amp; Survival Outfitter</option>
                  <option value="Government / Institutional Vendor">Government / Institutional Vendor</option>
                  <option value="Other Wholesale Distributor">Other Wholesale Distributor</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Projected Monthly Volume
                </label>
                <select
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="1 - 5 Master Cases / month">1 - 5 Master Cases (12 - 60 bottles)</option>
                  <option value="6 - 20 Master Cases / month">6 - 20 Master Cases (72 - 240 bottles)</option>
                  <option value="Quarter Pallet (25 Cases)">Quarter Pallet (300 bottles)</option>
                  <option value="Full Pallet (100 Cases+)">Full Pallet (1,200+ bottles)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                Resale Certificate / Tax ID (Optional)
              </label>
              <input
                type="text"
                value={formData.taxId}
                onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                placeholder="State Resale Permit or EIN"
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                Business Address or Special Requirements
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Store address, freight loading dock availability, or specific flavors requested..."
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full flex items-center justify-center rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 px-10 text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Submitting Wholesale Application...</span>
              ) : (
                <>
                  <Send className="absolute left-4 h-4 w-4 shrink-0" />
                  <span className="text-center">Submit Wholesale Distributor Application</span>
                </>
              )}
            </button>
          </form>
        )}
      </section>

      {/* Direct Contact Wholesale Desk */}
      <section className="rounded-2xl bg-secondary border border-border p-5 flex flex-col gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-primary flex items-center gap-2">
            <Building2 className="h-4 w-4 text-primary" />
            <span>Direct Wholesale Desk &bull; Concordia, Missouri</span>
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Have questions regarding master cases, freight shipping, or distributor agreements? Call our B2B team directly.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-secondary-foreground">
          <a
            href="tel:800-944-1511"
            className="inline-flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-600" />
            <span>800-944-1511</span>
          </a>
          <span className="text-border">&bull;</span>
          <a
            href="mailto:Sales@FoodReserves.com"
            className="inline-flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-emerald-600" />
            <span>Sales@FoodReserves.com</span>
          </a>
          {onNavigateContact && (
            <>
              <span className="text-border">&bull;</span>
              <button
                onClick={onNavigateContact}
                className="hover:text-emerald-600 transition-colors cursor-pointer"
              >
                Online Support Form
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default WholesaleDistributorPage;
