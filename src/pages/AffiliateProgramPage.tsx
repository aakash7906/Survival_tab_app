import { useState, type FormEvent } from "react"
import {
  Share2,
  Megaphone,
  LineChart,
  DollarSign,
  Send,
  CheckCircle2,
  MousePointerClick,
  Phone,
  Mail,
  Building2,
} from "lucide-react"

interface AffiliateProgramPageProps {
  onNavigateHome?: () => void
  onNavigateMakeMoney?: () => void
  onNavigateContact?: () => void
}

export function AffiliateProgramPage({
  onNavigateHome,
  onNavigateMakeMoney,
  onNavigateContact,
}: AffiliateProgramPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    promoChannel: "Content Creator / Blog",
    audienceSize: "5,000 - 25,000 monthly visitors",
    payoutMethod: "PayPal",
    paypalEmail: "",
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

  const scrollToApply = () => {
    const el = document.getElementById("affiliate-registration")
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
        <span className="text-primary font-semibold">Affiliate Program</span>
      </nav>

      {/* Main Header Card (Verbatim from User Screenshot) */}
      <section className="relative rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs overflow-hidden space-y-4">
        <div className="text-center space-y-2 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[11px] font-bold text-blue-800 tracking-wider uppercase">
            <Share2 className="h-3 w-3 text-blue-600 shrink-0" />
            <span>PARTNER NETWORK EARN COMMISSIONS</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary leading-tight">
            JOIN SURVIVAL TABS AFFILIATE PROGRAM
          </h1>
          <div className="h-0.5 w-12 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Overview & Audience Layout */}
        <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
          {/* Our Affiliate Program in a Nutshell */}
          <div className="rounded-2xl bg-secondary border border-border p-6 sm:p-7 space-y-2.5">
            <h2 className="text-base sm:text-lg font-black text-primary uppercase">
              Our Affiliate Program in a Nutshell
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Join thousands of marketers who are earning commissions as a member of one of the highest paying affiliate programs. Refer your friends, colleagues, clients, followers and fellow digital marketing experts to Survival Tabs and earn commissions from purchases your referrals make.
            </p>
          </div>

          {/* Who is The Affiliate Program For? */}
          <div className="rounded-2xl bg-secondary border border-border p-6 sm:p-7 space-y-2.5">
            <h2 className="text-base sm:text-lg font-black text-primary uppercase">
              Who is The Affiliate Program For?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We welcome bloggers, webmasters, paid search professionals, speakers, agency marketers, trainers, and all-around digital marketing gurus! By becoming a Survival Tabs affiliate, you&apos;re joining an affiliate program with high earnings potential. You will receive the necessary tools to extract maximum value from your affiliate marketing efforts through data, insight and control.
            </p>
          </div>
        </div>

        {/* How to Become a Survival Tabs Affiliate? Context Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-secondary border border-border p-6 sm:p-8 space-y-2.5">
          <h2 className="text-base sm:text-lg font-black text-primary uppercase">
            HOW TO BECOME A SURVIVAL TABS AFFILIATE?
          </h2>
          <p className="text-xs sm:text-sm text-foreground leading-relaxed">
            The quality of the food we eat is more important than the quantity. Of a foods&apos; theoretical calorie content, 30-60% is unused by the body and converts to unhealthy fat. Survival Tabs are so completely and quickly digested they have a 99% absorption rate. Within five minutes of consuming the tabs, 97% of the protein is available to repair and replace essential body tissues and fluids. These tabs were created for the Early Space Program using high-quality protein, carbohydrates and fat to provide the body with 100% of the daily essential vitamins and minerals required to maintain physical functions such as dexterity, stamina and coordination.
          </p>
        </div>

        {/* 4 Steps Process Cards (Verbatim from User Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Step 1: Sign Up */}
          <div className="flex flex-col justify-between rounded-2xl bg-card border border-border p-6 space-y-4 shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 border border-red-100">
                <MousePointerClick className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black text-primary uppercase tracking-tight">
                SIGN UP
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We pre-approve affiliate applications, so it only takes a few minutes to register. Once you sign up you get access to educational and marketing content, along with your unique referral links.
              </p>
            </div>
            <div className="pt-2 border-t border-border text-[11px] font-bold text-red-600 uppercase">
              Instant Link Access
            </div>
          </div>

          {/* Step 2: Promote */}
          <div className="flex flex-col justify-between rounded-2xl bg-card border border-border p-6 space-y-4 shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
                <Megaphone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black text-primary uppercase tracking-tight">
                PROMOTE
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Mention our products on your blog, in your newsletters, client meetings, during webinars or any other way you see fit, by using your referral links. Choose from many pre-made marketing materials and get started in a few clicks.
              </p>
            </div>
            <div className="pt-2 border-t border-border text-[11px] font-bold text-amber-600 uppercase">
              Pre-Made Creatives
            </div>
          </div>

          {/* Step 3: Track */}
          <div className="flex flex-col justify-between rounded-2xl bg-card border border-border p-6 space-y-4 shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black text-primary uppercase tracking-tight">
                TRACK
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                When you use your unique referral links, we track website visitors, trial activations and purchases that originated from them within 90 days from your referrals&apos; first visits and attribute them to your affiliate account.
              </p>
            </div>
            <div className="pt-2 border-t border-border text-[11px] font-bold text-blue-600 uppercase">
              90-Day Cookie Window
            </div>
          </div>

          {/* Step 4: Earn */}
          <div className="flex flex-col justify-between rounded-2xl bg-card border border-border p-6 space-y-4 shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black text-primary uppercase tracking-tight">
                EARN
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Every time your referrals purchase a Survival Tabs product from our website, you earn commissions on Every Retail Purchase made by Customers you refer to SurvivalTabs.com!
              </p>
            </div>
            <div className="pt-2 border-t border-border text-[11px] font-bold text-emerald-600 uppercase">
              Monthly Direct Payouts
            </div>
          </div>
        </div>

        {/* CTA Banner (Verbatim from bottom of image) */}
        <div className="rounded-2xl bg-primary text-primary-foreground p-5 sm:p-6 text-center space-y-3">
          <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-primary-foreground">
            JOIN SURVIVAL TABS AFFILIATE PROGRAM
          </h2>
          <p className="text-xs text-primary-foreground/80 max-w-xl mx-auto">
            Earn generous commissions on Every Retail Purchase made by Customers you refer to SurvivalTabs.com!
          </p>

          <div className="pt-2 space-y-3">
            <div>
              <button
                onClick={scrollToApply}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-3.5 text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>JOIN THE PROGRAM</span>
              </button>
            </div>

            <div>
              <button
                onClick={onNavigateMakeMoney}
                className="text-xs font-bold uppercase tracking-wider text-primary-foreground/80 hover:text-primary-foreground underline transition-colors cursor-pointer"
              >
                MORE WAYS TO MAKE MONEY!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Registration Form */}
      <section
        id="affiliate-registration"
        className="rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs space-y-6"
      >
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Fast Approval
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-primary uppercase">
            Affiliate Sign-Up Application
          </h2>
          <div className="h-0.5 w-16 bg-primary mx-auto" />
          <p className="text-xs sm:text-sm text-muted-foreground">
            Submit your information below to receive your personalized referral links, tracking dashboard login, and official promotional banners.
          </p>
        </div>

        {isSubmitted ? (
          <div className="max-w-xl mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white mx-auto shadow">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-emerald-950">
              Registration Received!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              Welcome, <strong>{formData.name}</strong>! Your affiliate application has been logged. We will send your unique referral tracking link, banner access credentials, and onboarding materials to <strong>{formData.email}</strong> within minutes.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
            >
              Register another account
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
                  placeholder="Alex Rivera"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@outdoorguide.com"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Website / YouTube / Social URL *
                </label>
                <input
                  required
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://youtube.com/@yourchannel"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Promotional Channel
                </label>
                <select
                  value={formData.promoChannel}
                  onChange={(e) => setFormData({ ...formData, promoChannel: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="Content Creator / Blog">Content Creator / Blog</option>
                  <option value="YouTube / Video Creator">YouTube / Video Creator</option>
                  <option value="Instagram / TikTok / Social">Instagram / TikTok / Social</option>
                  <option value="Email Newsletter / List">Email Newsletter / List</option>
                  <option value="Podcast Host">Podcast Host</option>
                  <option value="Forum / Prepper Community">Forum / Prepper Community</option>
                  <option value="Paid Search / Media Buyer">Paid Search / Media Buyer</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Estimated Audience / Traffic
                </label>
                <select
                  value={formData.audienceSize}
                  onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="Under 5,000 monthly visitors">Under 5,000 monthly visitors</option>
                  <option value="5,000 - 25,000 monthly visitors">5,000 - 25,000 monthly visitors</option>
                  <option value="25,000 - 100,000 monthly visitors">25,000 - 100,000 monthly visitors</option>
                  <option value="100,000+ monthly visitors">100,000+ monthly visitors</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Preferred Payout Method
                </label>
                <select
                  value={formData.payoutMethod}
                  onChange={(e) => setFormData({ ...formData, payoutMethod: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="PayPal">PayPal</option>
                  <option value="Direct ACH / Bank Transfer">Direct ACH / Bank Transfer (US)</option>
                  <option value="Wire Transfer">Wire Transfer (International)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                PayPal Email for Commission Payouts (if applicable)
              </label>
              <input
                type="email"
                value={formData.paypalEmail}
                onChange={(e) => setFormData({ ...formData, paypalEmail: e.target.value })}
                placeholder="payouts@example.com"
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                How do you plan to promote Survival Tabs?
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share links to specific articles, videos, or campaigns you are planning..."
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Submitting Affiliate Registration...</span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Submit Affiliate Application</span>
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
            <span>Affiliate Management Desk &bull; Concordia, Missouri</span>
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Have questions about custom commission tiers, sponsored reviews, or creative banner sizing? Contact our affiliate manager.
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

export default AffiliateProgramPage;
