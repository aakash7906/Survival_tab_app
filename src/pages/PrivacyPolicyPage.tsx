import {
  ShieldCheck,
  Lock,
  Cookie,
  UserX,
  CheckCircle2,
  ArrowLeft,
  FileText,
  Mail,
  Phone,
} from "lucide-react"

interface PrivacyPolicyPageProps {
  onNavigateHome?: () => void
  onNavigateContact?: () => void
}

export function PrivacyPolicyPage({
  onNavigateHome,
  onNavigateContact,
}: PrivacyPolicyPageProps) {
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
        <span className="text-primary font-semibold">Privacy Policy</span>
      </nav>

      {/* Header Banner */}
      <section className="relative rounded-2xl sm:rounded-3xl bg-card border border-border p-6 sm:p-10 lg:p-14 shadow-xs overflow-hidden text-center space-y-4 sm:space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 tracking-wider uppercase">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span>ZERO DATA BROKERING &bull; SACROSANCT CUSTOMER PRIVACY SINCE 1989</span>
        </div>

        <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-primary max-w-3xl mx-auto leading-tight">
          Privacy Policy
        </h1>

        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />

        <p className="text-sm sm:text-base lg:text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
          At Survivaltabs, we regard the personal lives of our customers as sacrosanct, so when someone asks us a question or places an order &mdash; whether on the internet, by phone, fax, mail &mdash; it is treated as confidential correspondence.
        </p>

        <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto italic">
          Information on web visitors who come to our site is treated in the same way.
        </p>
      </section>

      {/* Trust Metrics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="rounded-2xl bg-secondary border border-border p-4 sm:p-6 text-center space-y-1">
          <span className="text-2xl sm:text-3xl font-black text-primary">1989</span>
          <p className="text-xs font-bold uppercase tracking-wider text-secondary-foreground">Established</p>
          <p className="text-[11px] text-muted-foreground">Decades of unbroken trust</p>
        </div>
        <div className="rounded-2xl bg-secondary border border-border p-4 sm:p-6 text-center space-y-1">
          <span className="text-2xl sm:text-3xl font-black text-emerald-600">200K+</span>
          <p className="text-xs font-bold uppercase tracking-wider text-secondary-foreground">Customers of Record</p>
          <p className="text-[11px] text-muted-foreground">Nationwide prepper network</p>
        </div>
        <div className="rounded-2xl bg-secondary border border-border p-4 sm:p-6 text-center space-y-1">
          <span className="text-2xl sm:text-3xl font-black text-primary">0</span>
          <p className="text-xs font-bold uppercase tracking-wider text-secondary-foreground">Card Compromises</p>
          <p className="text-[11px] text-muted-foreground">Zero incidents in our entire history</p>
        </div>
        <div className="rounded-2xl bg-secondary border border-border p-4 sm:p-6 text-center space-y-1">
          <span className="text-2xl sm:text-3xl font-black text-amber-600">100%</span>
          <p className="text-xs font-bold uppercase tracking-wider text-secondary-foreground">Air-Gapped Vault</p>
          <p className="text-[11px] text-muted-foreground">Decoupled from public internet</p>
        </div>
      </div>

      {/* Core Rigid Procedures Section */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Rigid Operating Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
            To this end we maintain the following rigid procedures:
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Procedure 1: Cookie Policy */}
          <div className="flex flex-col justify-between rounded-2xl bg-card border border-border p-6 sm:p-8 space-y-4 shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                  <Cookie className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  No Tracking Cookies
                </span>
              </div>

              <h3 className="text-lg font-bold text-primary">
                Zero Behavioral Tracking
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                With the exception of the required use by our eCommerce software, no Cookies are being used on our sites. Despite the widespread, popular use of these &quot;web visitor data collection&quot; mechanisms, Survivaltabs refuses to use them.
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                To obtain information on a customer, or track their web habits, without their express permission, is a violation of our customer&apos;s trust. If we have information about you on our files, it is because you volunteered this information &mdash; and even then, only in conjunction with your business with us.
              </p>
            </div>

            <div className="pt-3 border-t border-border flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>No cross-site trackers or ad pixels</span>
            </div>
          </div>

          {/* Procedure 2: No Third Party Sales */}
          <div className="flex flex-col justify-between rounded-2xl bg-card border border-border p-6 sm:p-8 space-y-4 shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary border border-border">
                  <UserX className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-secondary px-2.5 py-0.5 rounded-full border border-border">
                  Zero Data Brokering
                </span>
              </div>

              <h3 className="text-lg font-bold text-primary">
                No &quot;Third Party&quot; Sales
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Web merchants often sell &quot;information&quot; on their site&apos;s web visitors or customers to other people. Some people don&apos;t mind having private information sold to other parties. But most abhor it.
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Never in our company&apos;s history (since we started in 1989) have we sold, or attempted to sell, our customers&apos; information, any of it, to any other party. The money which web merchants make in profiteering from the peddling in their customer&apos;s information does not, in our humble opinion, compensate for the violation of trust that occurs between that merchant and their customer.
              </p>

              <p className="text-xs sm:text-sm font-semibold text-primary italic border-l-2 border-primary pl-3 py-1 bg-secondary rounded-r">
                &ldquo;If our company cannot generate its own leads, maintain the loyalty of its own existing customers, and constantly generate new interest by the public, we are not fit to be in business.&rdquo;
              </p>
            </div>

            <div className="pt-3 border-t border-border flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Strict zero-monetization policy</span>
            </div>
          </div>

          {/* Procedure 3: Secure Maintenance of Customer Records */}
          <div className="flex flex-col justify-between rounded-2xl bg-card border border-border p-6 sm:p-8 space-y-4 shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Lock className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Air-Gapped Vault
                </span>
              </div>

              <h3 className="text-lg font-bold text-primary">
                Secure Maintenance of Customer Records
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                As a service to our 200,000+ mail order customers of record, a number that is constantly growing, we maintain, in addition to names and mailing addresses, credit card information.
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Any hard copy credit card information, once committed to database files, is destroyed immediately.
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                The computer that handles this sensitive information is completely decoupled from our network. The computer and any backup media are kept locked in a separate locked room in our administrative offices.
              </p>
            </div>

            <div className="pt-3 border-t border-border flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Physically decoupled storage vault</span>
            </div>
          </div>
        </div>
      </section>

      {/* Flawless Track Record Highlight Box */}
      <section className="rounded-2xl sm:rounded-3xl bg-primary text-primary-foreground p-6 sm:p-10 lg:p-12 shadow-xl border border-border relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1 text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>FLAWLESS SECURITY RECORD</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-primary-foreground leading-snug">
            In our entire history there has never been a report of a misappropriated credit card number.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-primary-foreground/80 leading-relaxed">
            We pride ourselves in keeping any and all information regarding our web visitors and our customers confidential. And we are proud of the high standard of privacy we maintain on our customers&apos; behalf.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-background hover:bg-secondary text-primary px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Home</span>
            </button>
            <button
              onClick={onNavigateContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            >
              <Mail className="h-4 w-4 text-emerald-600" />
              <span>Have a Privacy Question? Contact Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* Official Contact for Privacy Inquiries */}
      <section className="rounded-2xl bg-secondary border border-border p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-primary flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <span>Direct Inquiries Regarding Privacy Practices</span>
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            For questions about our confidentiality procedures, contact our administrative office in Concordia, Missouri.
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
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage;
