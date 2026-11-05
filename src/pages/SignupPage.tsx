import { useState } from "react"
import { Mail, Lock, User, Phone, Eye, EyeOff, ShieldCheck } from "lucide-react"

interface SignupPageProps {
  onSignupSuccess: (data: { name: string; email: string; phone: string }) => void
  onNavigateLogin: () => void
  onBack?: () => void
}

export function SignupPage({
  onSignupSuccess,
  onNavigateLogin,
  onBack,
}: SignupPageProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSignupSuccess({
      name: name || "Captain Alex Reynolds",
      email: email || "alex.reynolds@survivalist.org",
      phone: phone || "+1 (800) 453-3238",
    })
  }

  return (
    <div className="w-full max-w-md mx-auto min-h-full px-5 py-6 flex flex-col justify-between font-sans animate-fade-in-up">
      {/* Top Header / Branding */}
      <div className="space-y-5">
        <div>
          <img
            src="/images/survival_tabs_logo_outlined.png"
            alt="Survival Tabs"
            className="h-9 w-auto object-contain"
          />
        </div>

        {/* Title */}
        <div className="space-y-1 pt-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary">
            Create Account
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Join verified preppers to secure your emergency food caches.
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Reynolds"
                className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-secondary/70 border border-border/70 text-xs sm:text-sm font-semibold text-primary placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-destructive/20 focus:border-destructive transition-all"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-primary block">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 h-4 w-4 text-muted-foreground stroke-[2] pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-secondary/70 border border-border/70 text-xs sm:text-sm font-semibold text-primary placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-destructive/20 focus:border-destructive transition-all"
              />
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (800) 000-0000"
                className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-secondary/70 border border-border/70 text-xs sm:text-sm font-semibold text-primary placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-destructive/20 focus:border-destructive transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-primary block">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3.5 h-4 w-4 text-muted-foreground stroke-[2] pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full pl-10 pr-10 py-3 rounded-2xl bg-secondary/70 border border-border/70 text-xs sm:text-sm font-semibold text-primary placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-destructive/20 focus:border-destructive transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-muted-foreground hover:text-foreground cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 stroke-[2]" />
                ) : (
                  <Eye className="h-4 w-4 stroke-[2]" />
                )}
              </button>
            </div>
          </div>

          {/* Terms Agreement Checkbox */}
          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="agreedToTerms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              required
              className="mt-0.5 h-4 w-4 rounded-md border-border/80 text-destructive focus:ring-destructive/20 cursor-pointer accent-destructive"
            />
            <label htmlFor="agreedToTerms" className="text-[11px] text-muted-foreground leading-snug cursor-pointer select-none">
              I agree to the <span className="font-bold text-primary">Terms of Service</span> and <span className="font-bold text-primary">Privacy Policy</span>.
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-destructive hover:bg-destructive/90 active:scale-[0.98] transition-all text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider cursor-pointer shadow-md shadow-destructive/20 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="h-4 w-4 stroke-[2.5]" />
              <span>Create Account</span>
            </button>
          </div>
        </form>

        {/* Skip Button */}
        {onBack && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onBack}
              className="w-full py-3.5 rounded-2xl bg-secondary/80 hover:bg-secondary text-primary font-bold text-xs uppercase tracking-wider border border-border/70 cursor-pointer active:scale-98 transition-all flex items-center justify-center"
            >
              <span>Skip</span>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Switch to Sign In */}
      <div className="pt-6 pb-2 text-center text-xs text-muted-foreground">
        <span>Already have an account? </span>
        <button
          type="button"
          onClick={onNavigateLogin}
          className="font-bold text-destructive hover:underline cursor-pointer"
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export default SignupPage
