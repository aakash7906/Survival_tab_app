import { useState } from "react"
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"

interface LoginPageProps {
  onLoginSuccess: (email: string) => void
  onNavigateSignup: () => void
  onBack?: () => void
}

export function LoginPage({
  onLoginSuccess,
  onNavigateSignup,
  onBack,
}: LoginPageProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLoginSuccess(email || "alex.reynolds@survivalist.org")
  }

  return (
    <div className="w-full max-w-md mx-auto min-h-full px-5 py-6 flex flex-col justify-between font-sans animate-fade-in-up">
      {/* Top Header / Branding */}
      <div className="space-y-6">
        <div>
          <img
            src="/images/survival_tabs_logo_outlined.png"
            alt="Survival Tabs"
            className="h-9 w-auto object-contain"
          />
        </div>

        {/* Title */}
        <div className="space-y-1.5 pt-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary">
            Welcome Back
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Sign in to manage your account.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {/* Email Field */}
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

          {/* Password Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-primary block">
                Password
              </label>
              <button
                type="button"
                onClick={() => alert("Password reset link will be sent to your registered email.")}
                className="text-[11px] font-bold text-destructive hover:underline cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative flex items-center">
              <Lock className="absolute left-3.5 h-4 w-4 text-muted-foreground stroke-[2] pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
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

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded-md border-border/80 text-destructive focus:ring-destructive/20 cursor-pointer accent-destructive"
            />
            <label htmlFor="rememberMe" className="text-xs text-muted-foreground cursor-pointer select-none">
              Keep me signed in
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-destructive hover:bg-destructive/90 active:scale-[0.98] transition-all text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider cursor-pointer shadow-md shadow-destructive/20 flex items-center justify-center gap-2"
            >
              <span>Sign In</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </button>
          </div>
        </form>

        {/* Skip Button in place of Demo Prepper Sign-In */}
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

      {/* Bottom Switch to Sign Up */}
      <div className="pt-6 pb-2 text-center text-xs text-muted-foreground">
        <span>Don't have an account? </span>
        <button
          type="button"
          onClick={onNavigateSignup}
          className="font-bold text-destructive hover:underline cursor-pointer"
        >
          Create Account
        </button>
      </div>
    </div>
  )
}

export default LoginPage
