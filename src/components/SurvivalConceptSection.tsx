export function SurvivalConceptSection() {
  return (
    <section id="concept" className="w-full rounded-3xl bg-card p-4 sm:p-6 shadow-sm space-y-4">
      {/* Title */}
      <div className="space-y-1 text-left">
        <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full inline-block">
          AEROSPACE TECHNOLOGY
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-primary">
          SURVIVAL FOOD TAB CONCEPT
        </h2>
      </div>

      {/* Concept Video Player - Seamless edge-to-edge video fit */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-border aspect-video bg-black">
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

      {/* Narrative Paragraphs verbatim from survivaltabs.com */}
      <div className="space-y-3 text-foreground text-xs leading-relaxed text-left">
        <p className="font-semibold text-primary">
          Specifically designed for situations where storage space, weight, and extreme conditions make normal food impractical. 12 tabs per day provide 100% of US RDA for 15 vitamins and minerals.
        </p>

        <p className="text-muted-foreground">
          The basic concept behind Survival Tabs originated in the early space program. The primary requirement was to produce a food that could be consumed in zero gravity and cramped spaces, providing the maximum nutrition in the smallest volume.
        </p>

        <p className="text-muted-foreground">
          Our bodies require basic nutrients: Protein, Carbohydrates, and Fats along with essential vitamins and minerals. Most regular food is not completely assimilated by the body, generating considerable waste. The Survival Tabs are designed to be completely assimilated (99% absorption rate) so that almost every calorie and nutrient is absorbed and utilized directly.
        </p>

        <p className="text-muted-foreground">
          The protein used is of the highest quality and is completely digested, preventing your body from breaking down its own muscle tissue (tissue cannibalism). The fats are high-quality fatty acids that supply steady energy, while the carbohydrates furnish quick energy without stressing the kidneys or digestive system.
        </p>

        <p className="font-semibold text-primary border-l-2 border-red-600 pl-3 py-1.5 italic bg-secondary rounded-r text-[11px]">
          Margin of Survival: In roughly 90% of survival situations, individuals can supplement the tabs with whatever small amounts of food they might find (wild game, edible plants, fish). Consuming 12 tablets a day gives the full margin of survival.
        </p>
      </div>
    </section>
  )
}

export default SurvivalConceptSection
