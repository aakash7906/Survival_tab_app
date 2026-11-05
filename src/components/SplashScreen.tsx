import { useEffect, useState } from "react"

interface SplashScreenProps {
  onFinish?: () => void
  durationMs?: number
}

export function SplashScreen({ onFinish, durationMs = 2200 }: SplashScreenProps) {
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    // Start fade out slightly before completion
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true)
    }, Math.max(durationMs - 400, 500))

    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish()
    }, durationMs)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(finishTimer)
    }
  }, [durationMs, onFinish])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-400 select-none ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full w-full max-w-sm px-6">
        {/* Center Logo Area */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/survival_tabs_logo_outlined.png"
            alt="Survival Tabs - Just In Case"
            className="w-64 sm:w-72 h-auto object-contain animate-fade-in-up"
          />
        </div>

        {/* Bottom Loading Spinner matching attached image */}
        <div className="pb-24 sm:pb-32 flex items-center justify-center">
          <div className="relative h-7 w-7 text-neutral-800 animate-spin">
            {/* iOS / Native Style Radial Tick Spinner */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
              <span
                key={angle}
                className="absolute top-0 left-1/2 -ml-[1px] h-2 w-[2px] rounded-full bg-current origin-[center_14px]"
                style={{
                  transform: `rotate(${angle}deg)`,
                  opacity: 0.25 + (idx / 8) * 0.75,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
