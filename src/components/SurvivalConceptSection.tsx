export function SurvivalConceptSection() {
  return (
    <section id="concept" className="w-full rounded-3xl bg-card p-4 sm:p-5 shadow-sm space-y-3.5 border border-border/60">
      {/* Header */}
      <div className="text-left">
        <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-primary">
          Survival Food Tab Concept
        </h2>
      </div>

      {/* Concept Video Player */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-xs border border-border aspect-video bg-black">
        <video
          src="/videos/survival-concept.mp4"
          poster="/images/video_thumbnail.png"
          controls
          playsInline
          preload="metadata"
          className="w-full h-full object-cover block"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Concise Summary */}
      <p className="text-xs font-semibold text-primary leading-snug">
        Specifically designed for extreme conditions where weight and space matter. 12 tabs per day provide 100% US RDA for 15 essential vitamins &amp; minerals.
      </p>
    </section>
  )
}

export default SurvivalConceptSection
