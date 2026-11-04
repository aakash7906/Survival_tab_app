import type { HTMLAttributes, ReactNode } from "react"

export interface IphoneProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  videoSrc?: string
  children?: ReactNode
}

export function Iphone({
  src,
  videoSrc,
  children,
  className = "",
  style,
  ...props
}: IphoneProps) {
  const hasVideo = !!videoSrc
  const hasImage = !hasVideo && !!src
  const hasChildren = !!children

  return (
    <div
      className={`relative inline-block w-full select-none ${className}`}
      style={{
        aspectRatio: "433 / 882",
        ...style,
      }}
      {...props}
    >
      {/* Outer Device Chassis - Uniform 9px Slim Bezel with Mathematically Concentric Curves */}
      <div className="relative w-full h-full rounded-[50px] bg-[#161922] p-[9px] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_25px_65px_rgba(0,0,0,0.85),0_0_35px_rgba(0,0,0,0.6)] ring-1 ring-black/90">
        
        {/* Physical Side Buttons */}
        {/* Silent / Action switch */}
        <div className="absolute -left-[3.5px] top-[115px] w-[3.5px] h-[26px] bg-[#2e3340] rounded-l-xs shadow-inner" />
        {/* Volume Up */}
        <div className="absolute -left-[3.5px] top-[160px] w-[3.5px] h-[52px] bg-[#2e3340] rounded-l-xs shadow-inner" />
        {/* Volume Down */}
        <div className="absolute -left-[3.5px] top-[228px] w-[3.5px] h-[52px] bg-[#2e3340] rounded-l-xs shadow-inner" />
        {/* Power / Lock button */}
        <div className="absolute -right-[3.5px] top-[180px] w-[3.5px] h-[78px] bg-[#2e3340] rounded-r-xs shadow-inner" />

        {/* Top Speaker Slit centered on top bezel */}
        <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-14 h-[3px] bg-[#2b303d] rounded-full z-30" />

        {/* Screen Window: 100% Concentric & Synchronized Clipping (50px - 9px = 41px) */}
        <div className="relative w-full h-full rounded-[41px] overflow-hidden bg-background flex flex-col [clip-path:inset(0_round_41px)] [isolation:isolate]">
          
          {hasVideo && (
            <video
              className="block size-full object-cover"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          )}

          {hasImage && (
            <img
              src={src}
              alt=""
              className="block size-full object-cover object-top"
            />
          )}

          {hasChildren && (
            <>
              {/* iOS Status Bar - Clean, minimal, NO camera cutout/notch */}
              <div className="sticky top-0 inset-x-0 z-40 flex items-center justify-between px-6 pt-2 pb-1.5 text-[11px] font-semibold text-foreground pointer-events-none bg-background/90 backdrop-blur-md shrink-0">
                <span className="font-semibold tracking-tight">9:41</span>
                <div className="flex items-center gap-1.5 text-foreground">
                  {/* Cellular signal */}
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M2 17h3v4H2v-4zm5-4h3v8H7v-8zm5-4h3v12h-3V10zm5-4h3v16h-3V6z" />
                  </svg>
                  {/* Wi-Fi */}
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 3C7.03 3 2.62 5.05.34 8.35L12 22 23.66 8.35C21.38 5.05 16.97 3 12 3zm0 4c3.31 0 6.32 1.35 8.49 3.51L12 19.51 3.51 10.51C5.68 8.35 8.69 7 12 7z" />
                  </svg>
                  {/* Battery */}
                  <div className="w-5 h-2.5 rounded-[3px] border border-current p-[1px] flex items-center">
                    <div className="h-full w-3 bg-current rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* Scrollable Screen Content Container */}
              <div
                id="mobile-viewport-container"
                className="w-full flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden select-text text-left"
              >
                {children}

                {/* iOS Home Indicator Bar at the bottom */}
                <div className="sticky bottom-1 inset-x-0 z-40 flex justify-center pointer-events-none pb-1 pt-1.5">
                  <div className="w-32 h-1 bg-foreground/25 rounded-full" />
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default Iphone
