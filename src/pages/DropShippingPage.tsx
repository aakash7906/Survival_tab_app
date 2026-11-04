import { useState, type FormEvent } from "react"
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  PackageCheck,
  Send,
  Phone,
  Mail,
  Truck,
  DollarSign,
  Laptop,
  Building2,
} from "lucide-react"

interface DropShippingPageProps {
  onNavigateHome?: () => void
  onNavigateMakeMoney?: () => void
  onNavigateContact?: () => void
}

interface ReasonItem {
  id: string
  title: string
  summary: string
  details: string[]
}

const dropShipReasons: ReasonItem[] = [
  {
    id: "bucket-of-money",
    title: "You Don't Need Bucket of Money",
    summary:
      "Start an emergency food ecommerce business immediately without taking on debt or tying up thousands of dollars in warehouse stock.",
    details: [
      "It requires a lot of capital to stock a warehouse. You can eliminate the risk of going into debt to start your business by using dropshipping. Instead of purchasing an extensive inventory and hoping that it sells, you can start a dropshipping business with zero inventory and immediately start making money.",
      "The cost of inventory is one of the highest costs you'll have if you own and warehouse stock. You may end up with obsolete inventory – forcing you to find ways to reduce your stock – or you'll end up with too little inventory – leading to stockouts and lost revenue. Dropshipping allows you to avoid these issues and focus on growing your customer base and building your brand.",
    ],
  },
  {
    id: "convenience-efficiency",
    title: "Convenience & Efficiency",
    summary:
      "Eliminate the burden of packing boxes, buying shipping supplies, and managing postal logistics.",
    details: [
      "With Survival Tabs dropshipping, you never have to tape a single carton or wait in line at post offices. Once an order comes through your website, simply pass the order details to our fulfillment center.",
      "We handle the picking, heavy-duty packing, and swift carrier dispatch directly from our US climate-controlled facility. Best of all, we offer custom-branded packing slips featuring your company name and logo, ensuring 100% brand loyalty.",
    ],
  },
  {
    id: "mobile-freedom",
    title: "Drop Shipping Let's You Be Mobile",
    summary:
      "Operate your survival food business from home, a cabin, or while traveling with just a laptop.",
    details: [
      "Traditional retail businesses tie you down to a single physical location, lease commitments, and warehouse supervision. Dropshipping gives you true geographic freedom.",
      "As long as you have an internet connection to communicate with your customers and manage your digital storefront, you can run and scale your operations from anywhere in the world.",
    ],
  },
  {
    id: "trusted-model",
    title: "It's a Trusted Model",
    summary:
      "Join an industry-proven distribution model backed by over 35 years of reliable manufacturing.",
    details: [
      "Dropshipping is a well-established, highly respected supply chain framework embraced by major retail brands worldwide. At Survival Tabs, we have supported independent merchants and resellers since 1989.",
      "Our proven track record guarantees prompt order turnaround, verified tracking numbers uploaded promptly, and zero manufacturer cross-promotion on your customer packages.",
    ],
  },
]

export function DropShippingPage({
  onNavigateHome,
  onNavigateMakeMoney,
  onNavigateContact,
}: DropShippingPageProps) {
  const [openReasons, setOpenReasons] = useState<Record<string, boolean>>({
    "bucket-of-money": true, // Default open as shown in user screenshot
  })

  const [formData, setFormData] = useState({
    name: "",
    storeName: "",
    platform: "Shopify",
    website: "",
    email: "",
    phone: "",
    monthlyOrders: "1 - 25 orders/month",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleReason = (id: string) => {
    setOpenReasons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const scrollToApply = () => {
    const el = document.getElementById("dropship-application")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 space-y-6 pt-2 pb-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
        <button
          onClick={onNavigateHome}
          className="hover:text-primary transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>/</span>
        <button
          onClick={onNavigateMakeMoney}
          className="hover:text-primary transition-colors cursor-pointer"
        >
          Make Money
        </button>
        <span>/</span>
        <span className="text-primary font-semibold">Drop Shipping</span>
      </nav>

      {/* Main Header Card (Verbatim from User Screenshot) */}
      <section className="relative rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs overflow-hidden space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary max-w-4xl mx-auto leading-tight">
            WHY YOU WANT TO BE A DROP SHIPPER
          </h1>

          {/* 4 Checkmark Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-bold text-emerald-800 pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>You Don&apos;t Need Buckets of Money</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Convenience &amp; Efficiency</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Mobility</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>It&apos;s a Trusted Model</span>
            </span>
          </div>

          {/* Introductory Paragraph verbatim from screenshot */}
          <p className="text-sm sm:text-base text-foreground max-w-3xl mx-auto leading-relaxed text-justify sm:text-center pt-2">
            If you&apos;re still wavering back-and-forth, hopefully this will help convince you why you should&mdash;along with the most important practices to ensure you can scale your business while keeping unnecessary stress at bay. Here are four reasons why you should start a drop shipping business, and why you&apos;re leaving money on the table if you don&apos;t:
          </p>
        </div>

        {/* Accordion List for the 4 Reasons */}
        <div className="max-w-4xl mx-auto space-y-3 pt-4">
          {dropShipReasons.map((reason) => {
            const isOpen = !!openReasons[reason.id]
            return (
              <div
                key={reason.id}
                className="rounded-2xl border border-border bg-secondary overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleReason(reason.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-primary hover:text-blue-600 hover:bg-secondary/80 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{reason.title}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border pt-4 bg-card">
                    {reason.details.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Action Controls */}
        <div className="text-center pt-6 space-y-4">
          <button
            onClick={scrollToApply}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-3.5 text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>APPLY NOW!</span>
          </button>

          <div>
            <button
              onClick={onNavigateMakeMoney}
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 underline transition-colors cursor-pointer"
            >
              MORE WAYS TO MAKE MONEY!
            </button>
          </div>
        </div>
      </section>

      {/* 4 Value Propositions Grid */}
      <section className="grid grid-cols-1 gap-4">
        <div className="rounded-2xl bg-card border border-border p-6 space-y-3 shadow-xs">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
            <DollarSign className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-primary">Zero Inventory Debt</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Never pay for products upfront until your customer has already paid you in full on your store.
          </p>
        </div>

        <div className="rounded-2xl bg-card border border-border p-6 space-y-3 shadow-xs">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
            <PackageCheck className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-primary">Branded Packing Slips</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Your store name, contact info, and logo are printed on every customer invoice slip.
          </p>
        </div>

        <div className="rounded-2xl bg-card border border-border p-6 space-y-3 shadow-xs">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
            <Truck className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-primary">Fast US Dispatch</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Orders placed on business days ship within 24 hours with full tracking notifications.
          </p>
        </div>

        <div className="rounded-2xl bg-card border border-border p-6 space-y-3 shadow-xs">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
            <Laptop className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-primary">Complete Mobility</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Manage your store orders and marketing from your phone or laptop from anywhere in the world.
          </p>
        </div>
      </section>

      {/* Dropship Partner Application Form */}
      <section
        id="dropship-application"
        className="rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs space-y-6"
      >
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Start Selling Online
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-primary uppercase">
            Dropship Reseller Application
          </h2>
          <div className="h-0.5 w-16 bg-primary mx-auto" />
          <p className="text-xs sm:text-sm text-muted-foreground">
            Fill out the form below to connect your store with our dropshipping fulfillment network.
          </p>
        </div>

        {isSubmitted ? (
          <div className="max-w-xl mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white mx-auto shadow">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-emerald-950">
              Dropship Application Received!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Our fulfillment team has received your registration for <strong>{formData.storeName || "your online store"}</strong>. We will email our dropship order CSV templates and product image packs to <strong>{formData.email}</strong> shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
            >
              Submit another application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Online Store / Business Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.storeName}
                  onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                  placeholder="Prepper Gear Depot"
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
                  placeholder="support@prepperstore.com"
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
                  Ecommerce Platform
                </label>
                <select
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="Shopify">Shopify</option>
                  <option value="WooCommerce">WooCommerce</option>
                  <option value="BigCommerce">BigCommerce</option>
                  <option value="Amazon Marketplace">Amazon Marketplace</option>
                  <option value="eBay Store">eBay Store</option>
                  <option value="Custom Storefront">Custom Storefront / Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Estimated Monthly Order Volume
                </label>
                <select
                  value={formData.monthlyOrders}
                  onChange={(e) => setFormData({ ...formData, monthlyOrders: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="1 - 25 orders/month">1 - 25 orders/month</option>
                  <option value="26 - 100 orders/month">26 - 100 orders/month</option>
                  <option value="101 - 300 orders/month">101 - 300 orders/month</option>
                  <option value="300+ orders/month">300+ orders/month</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                Store Website URL
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://yourstore.com"
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                Additional Notes or Integration Questions
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your audience, specific shipping requirements, or packing slip logo..."
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Submitting Registration...</span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Submit Dropship Application</span>
                </>
              )}
            </button>
          </form>
        )}
      </section>

      {/* Direct Contact Bar */}
      <section className="rounded-2xl bg-secondary border border-border p-5 flex flex-col gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-primary flex items-center gap-2">
            <Building2 className="h-4 w-4 text-primary" />
            <span>Dropship Support Team &bull; Concordia, Missouri</span>
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Need custom API integration or batch CSV upload support? Reach out to our technical fulfillment team.
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

export default DropShippingPage;
