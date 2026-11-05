import { useState } from "react"

interface OnboardingScreenProps {
  onComplete: () => void
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [isExiting, setIsExiting] = useState(false)

  const handleNext = () => {
    setIsExiting(true)
    setTimeout(() => {
      onComplete()
    }, 300)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-black overflow-hidden font-sans transition-opacity duration-300 select-none ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* 1. Full-bleed Hero Image on top */}
      <div className="relative w-full flex-1 min-h-[50%] overflow-hidden">
        <img
          src="/images/onboarding.jpg"
          alt="Outdoor Survival Preparedness"
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle top vignette for mobile status bar readability */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* 2. Bottom Sheet Card with rounded-t-3xl */}
      <div className="relative -mt-6 rounded-t-[32px] bg-white px-6 sm:px-8 pt-8 pb-10 shadow-2xl flex flex-col justify-between space-y-6 z-10">
        <div className="space-y-4">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Be Ready for<br />Anything.
          </h1>

          {/* Subtitle description */}
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-medium">
            Stay prepared for life's unexpected moments with compact, lightweight emergency nutrition.
          </p>
        </div>

        {/* CTA Button matching the warm golden yellow in image */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleNext}
            className="w-full py-4 rounded-2xl bg-[#f5b800] hover:bg-[#e5ab00] active:scale-[0.98] transition-all text-white font-extrabold text-base tracking-wide cursor-pointer shadow-md shadow-[#f5b800]/25 text-center flex items-center justify-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default OnboardingScreen
