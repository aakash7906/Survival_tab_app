import { useState, type FormEvent } from "react"
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  MessageSquare,
  HelpCircle,
  Truck,
} from "lucide-react"

interface ContactUsPageProps {
  onNavigateHome?: () => void
  onNavigateFaq?: () => void
}

export function ContactUsPage({ onNavigateHome, onNavigateFaq }: ContactUsPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiries",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
        <button
          onClick={onNavigateHome}
          className="hover:text-red-600 transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-primary font-semibold">Contact Us</span>
      </nav>

      {/* Header Banner */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-10 lg:p-14 shadow-xs overflow-hidden text-center space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs font-bold text-red-700 tracking-wider uppercase">
          <MessageSquare className="h-3.5 w-3.5 text-red-600 shrink-0" />
          <span>DIRECT CUSTOMER &bull; WHOLESALE SUPPORT</span>
        </div>

        <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-primary max-w-3xl mx-auto leading-tight">
          Contact The Survival Tabs
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Have questions about personal emergency readiness, ration orders, shelf life verification,
          or bulk distributor pricing? Our US-based team is ready to assist you.
        </p>

        {/* Rapid Highlights */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-medium text-foreground">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border">
            <Clock className="h-3.5 w-3.5 text-amber-600 shrink-0" />
            <span>Fast 24-Hour Business Response</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border">
            <Building2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span>Government &amp; Bulk Quotes Available</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border">
            <ShieldCheck className="h-3.5 w-3.5 text-red-600 shrink-0" />
            <span>100% Made in the USA Guarantee</span>
          </div>
        </div>
      </div>

      {/* Main 2-Column Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Info & Channels */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Contact Methods Card */}
          <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-5 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-lg font-bold text-primary uppercase tracking-wide border-b border-border pb-3">
              Direct Channels
            </h2>

            <div className="space-y-5 text-sm">
              
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                    Toll-Free Phone
                  </span>
                  <a
                    href="tel:800-453-3238"
                    className="font-bold text-primary hover:text-red-600 transition-colors text-base"
                  >
                    800-453-3238
                  </a>
                  <p className="text-xs text-muted-foreground">
                    Direct line: <span className="font-semibold text-foreground">660-463-2158</span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-red-50 border border-red-100 text-red-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                    Customer Support Email
                  </span>
                  <a
                    href="mailto:support@survivaltabs.com"
                    className="font-bold text-primary hover:text-red-600 transition-colors text-sm break-all"
                  >
                    support@survivaltabs.com
                  </a>
                  <p className="text-xs text-muted-foreground">
                    Wholesale inquiries: <span className="font-semibold text-foreground">wholesale@survivaltabs.com</span>
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-50 border border-amber-100 text-amber-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                    Operating Hours
                  </span>
                  <p className="font-semibold text-primary text-sm">
                    Monday &ndash; Friday
                  </p>
                  <p className="text-xs text-muted-foreground">
                    8:00 AM &ndash; 5:00 PM PST (Pacific Standard Time)
                  </p>
                </div>
              </div>

              {/* Headquarters / Made in USA */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-secondary border border-border text-secondary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                    Manufacturing &amp; Fulfillment
                  </span>
                  <p className="font-semibold text-primary text-sm">
                    United States Production Facility
                  </p>
                  <p className="text-xs text-muted-foreground">
                    cGMP Certified &bull; FDA Inspected &bull; Worldwide Expedited Shipping
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Quick FAQ Link Box */}
          <div className="rounded-3xl bg-secondary border border-border p-6 space-y-3 text-center sm:text-left">
            <div className="flex items-center gap-2 font-bold text-primary text-sm">
              <HelpCircle className="h-4 w-4 text-red-600" />
              <span>Looking for Quick Answers?</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Check our official knowledge base for instant details on calorie assimilation, 25-year shelf life, and flavor options.
            </p>
            <button
              onClick={onNavigateFaq}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 hover:underline cursor-pointer"
            >
              <span>Browse Frequently Asked Questions &rarr;</span>
            </button>
          </div>

        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl sm:rounded-3xl bg-card border border-border p-5 sm:p-8 lg:p-10 shadow-xs space-y-6">
            
            <div className="border-b border-border pb-4 space-y-1">
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Fill out the form below and an emergency ration specialist will reply promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in-up">
                <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-black uppercase text-primary">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <strong>{formData.name || "friend"}</strong>. Our team has received your message and will get back to you at <strong>{formData.email}</strong> within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        inquiryType: "General Inquiries",
                        message: "",
                      })
                    }}
                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs uppercase px-6 py-2.5 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Miller"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Inquiry Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Phone Number <span className="text-muted-foreground font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary text-sm text-primary focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                    >
                      <option value="General Inquiries">General Question</option>
                      <option value="Order Status">Order Tracking &amp; Status</option>
                      <option value="Wholesale & Bulk">Wholesale &amp; Bulk Rations</option>
                      <option value="Government & SAR">Government &amp; Search and Rescue</option>
                      <option value="Shelf-Life Warranty">25-Year Warranty Question</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Your Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you with The Survival Tabs?"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Truck className="h-4 w-4 text-emerald-600" />
                    <span>Free shipping on all US orders over $150</span>
                  </div>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  )
}

export default ContactUsPage
