import { useState } from "react"
import {
  ChevronDown,
  HelpCircle,
  CheckCircle2,
} from "lucide-react"

export interface FaqItem {
  id: string
  category: "all" | "general" | "storage" | "nutrition" | "usage" | "survival"
  question: string
  answer: string
  highlights?: string[]
}

const faqData: FaqItem[] = [
  {
    "id": "what-are-survival-tabs",
    "category": "general",
    "question": "What are Survival Tabs?",
    "answer": "Survival Tabs are the best possible food source in the smallest possible volume. They are designed for situations where an immediate need for nutrition must be met or as a meal replacement for on the go snacking. One bottle provides you with up to 15 days of nutrition.",
    "highlights": [
      "Best possible food source in the smallest possible volume",
      "Provides up to 15 days of nutrition per bottle",
      "Emergency nutrition or on-the-go meal replacement"
    ]
  },
  {
    "id": "are-survival-food-tablets-supposed-to-be-considere",
    "category": "usage",
    "question": "Are Survival Food Tablets supposed to be considered as a sole daily food source or in combination with a daily food intake?",
    "answer": "Survival Tabs can be used as a daily sole source food if necessary. However, they were designed with the idea that there would be other foods available either from one’s own stocks or from the land, i.e. wildlife or fruits and vegetables. With this in mind, the Survival Tabs could be used to fill in when things were lean. Nonetheless, they can sustain a person for an extended period of time. How long, depends on many factors, including the person’s constitution, mentality and activities.",
    "highlights": [
      "Can be used as a daily sole source food if necessary",
      "Designed to fill in when other food sources are lean",
      "Sustains a person for extended periods"
    ]
  },
  {
    "id": "what-industry-professionals-use-survival-tabs",
    "category": "usage",
    "question": "What industry professionals use Survival Tabs?",
    "answer": "Survival Tabs are used by office workers, firemen, long distance truckers, professional athletes, cyclists, marathon runners, and military personnel as an emergency survival food or on the go meal replacement. They are many other industries that Survival Tabs can be beneficial too as well. They are the perfect compact food source for anyone.",
    "highlights": [
      "Used by office workers, firemen, truckers, athletes, and military",
      "Ideal compact emergency food or active meal replacement"
    ]
  },
  {
    "id": "what-are-some-examples-of-everyday-use-for-surviva",
    "category": "usage",
    "question": "What are some examples of everyday use for Survival Tabs?",
    "answer": "Survival Tabs are popular with busy moms who need a boost of energy without the crash caused by energy drinks. Students use them to keep their energy up and brains alert during study sessions and hectic class schedules. Office workers who often miss a meal rely on them for a sustainable energy snack. Hardcore (video) gamers also love the fast nutrition Survival Tabs provide for them without having to pause or leave their games.",
    "highlights": [
      "Boost of energy without the crash for busy parents and students",
      "Sustained energy snack for office workers and gamers"
    ]
  },
  {
    "id": "what-are-some-examples-of-outdoor-use-for-survival",
    "category": "usage",
    "question": "What are some examples of outdoor use for Survival Tabs?",
    "answer": "Survival Tabs are used by campers, scout masters, outdoors men, survivalist, and hunters when out in the wilderness. Their compact and lightweight design makes them ideal to have as a food supply when camping, exploring, or hiking.",
    "highlights": [
      "Used by campers, scout masters, survivalists, and hunters",
      "Lightweight and compact food supply for wilderness exploration"
    ]
  },
  {
    "id": "what-is-the-main-purpose-of-survival-tabs",
    "category": "general",
    "question": "What is the main purpose of Survival Tabs?",
    "answer": "Survival Tabs are meant to keep you alive and going for months at a time. A person can survive 4-5 months by eating Survival Tabs exclusively. In an emergency situation, one 180-tablet bottle of chewable tabs supplies a person with 15 days’ worth of survival food based on the recommended consumption of 12 tablets per day. This can be stretched to a 30-day supply under extreme conditions.",
    "highlights": [
      "Keeps a person sustained for months at a time (4-5 months exclusively)",
      "180-tablet bottle = 15 days of food at 12 tabs/day (stretchable to 30 days)"
    ]
  },
  {
    "id": "what-is-survival-tabs-concept",
    "category": "general",
    "question": "What is Survival Tabs concept?",
    "answer": "Survival Tabs are designed to provide you with the best possible nutrition in the smallest possible volume. State of the art development has made it possible for Survival Tabs to combine essential nutrients with important foods into a nutrient-dense food concentrate.",
    "highlights": [
      "Maximum nutrition in minimal volume",
      "Combines essential nutrients into nutrient-dense concentrate"
    ]
  },
  {
    "id": "how-should-i-store-survival-tabs-when-unopened-lon",
    "category": "storage",
    "question": "How should I store Survival Tabs when unopened; long-term?",
    "answer": "For long term storage when unopened, keep this bottle in a cool dry place at room temperature.",
    "highlights": [
      "Store unopened in a cool, dry place at room temperature",
      "Certified for long-term emergency readiness"
    ]
  },
  {
    "id": "how-should-i-store-survival-tabs-once-opened",
    "category": "storage",
    "question": "How should I store Survival Tabs once opened?",
    "answer": "Avoid extended periods of exposure to high temperatures, and keep the bottle closed. Also, avoid unnecessary exposure to air once opened.",
    "highlights": [
      "Keep bottle tightly closed after opening",
      "Avoid unnecessary air exposure and extended high temperatures"
    ]
  },
  {
    "id": "how-do-survival-tabs-work",
    "category": "nutrition",
    "question": "How do Survival Tabs Work?",
    "answer": "Survival Tabs provide you with high daily nutrition in a compact and lightweight form. The chewable tabs provide the body with 100% of the daily recommended vitamins and nutrients needed per serving. They are so completely and quickly digested they have a 99% absorption rate. Within five minutes of consuming the tabs, 97% of the protein is available to repair and replace essential body tissues and fluids. Survival Tabs allow you to utilize 99% of their calorie content for energy.",
    "highlights": [
      "99% absorption rate into the body with rapid assimilation",
      "97% of protein available within 5 minutes for tissue repair",
      "99% of calorie content utilized for energy"
    ]
  },
  {
    "id": "how-safe-are-survival-tabs-for-your-body",
    "category": "nutrition",
    "question": "How safe are Survival Tabs for your body?",
    "answer": "Survival Tabs are the best possible source of nutrition for your body when a reliable food source is not available. They are made using everyday ingredients that are safe and essential for the body.",
    "highlights": [
      "Safe and reliable nutrition when regular food is unavailable",
      "Made using everyday ingredients essential for the human body"
    ]
  },
  {
    "id": "what-industry-professionals-use-survival-tabs-alt",
    "category": "usage",
    "question": "What industry professionals use Survival Tabs?",
    "answer": "Survival Tabs are used by office workers, firemen, long distance truckers, professional athletes, cyclists, marathon runners, and military personnel as an emergency survival food or on the go meal replacement. They are many other industries that Survival Tabs can be beneficial too as well. They are the perfect compact food source for anyone.",
    "highlights": [
      "Used by office workers, firemen, truckers, athletes, and military",
      "Perfect compact food source for any demanding profession"
    ]
  },
  {
    "id": "how-many-calories-are-in-survival-tabs",
    "category": "nutrition",
    "question": "How many calories are in Survival Tabs?",
    "answer": "Survival Tabs provide you with 240 calories per serving of 12 tabs. This amount can be increased to meet a higher calorie intake if you desire.",
    "highlights": [
      "240 calories per recommended serving of 12 tabs",
      "Can be increased to meet higher daily caloric needs"
    ]
  },
  {
    "id": "how-long-are-survival-tabs-good-for-once-they-are-",
    "category": "storage",
    "question": "How long are Survival Tabs good for once they are opened?",
    "answer": "Once opened, Survival Tabs will remain usable for up to 90 days before losing their efficacy.",
    "highlights": [
      "Remains fully usable for up to 90 days once opened",
      "Tightly seal between uses to protect freshness"
    ]
  },
  {
    "id": "how-much-weight-loss-occurs-exclusively-using-surv",
    "category": "nutrition",
    "question": "How much weight loss occurs exclusively using Survival Tabs?",
    "answer": "When exclusively using Survival Tabs as a food source, you can may experience 5-8 pounds of weight loss in the first week, then an average of 2 pounds a week, thereafter. This is in consideration of a normal, active daily routine.",
    "highlights": [
      "5-8 lbs weight loss typical during first week under sole consumption",
      "Averages ~2 lbs/week thereafter under normal daily activity"
    ]
  },
  {
    "id": "how-many-tabs-per-day-can-i-eat",
    "category": "usage",
    "question": "How many tabs per day can I eat?",
    "answer": "We recommend 12 tabs a day, but you may consume more or less based on your appetite or situation.",
    "highlights": [
      "Recommended baseline: 12 chewable tabs per day",
      "Adjustable up or down based on appetite and situation"
    ]
  },
  {
    "id": "what-ages-are-these-intended-for",
    "category": "general",
    "question": "What ages are these intended for?",
    "answer": "Survival Tabs are intended for anyone who can consume the chewable tablets or allow them to dissolve in their mouth.",
    "highlights": [
      "Suitable for anyone who can chew tablets or let them dissolve in mouth"
    ]
  },
  {
    "id": "what-are-the-nutritional-benefits-of-survival-tabs",
    "category": "nutrition",
    "question": "What are the Nutritional Benefits of Survival Tabs?",
    "answer": "Survival Tabs provide you with 100% of the daily recommended Vitamins and minerals. For full nutrition facts please visit our nutrition page.",
    "highlights": [
      "Provides 100% of daily recommended vitamins and minerals",
      "Complete nutritional profile engineered for high bioavailability"
    ]
  },
  {
    "id": "what-are-shelf-life-and-sustainability",
    "category": "storage",
    "question": "What are Shelf Life and Sustainability?",
    "answer": "We have samples of Survival Tabs that were produced in 1974-75. They have been stored at room temperature. We test them periodically and have found little, if any, deterioration or loss of vitamin or food value.\n\nWe have also used accelerated storage testing at higher than normal temperatures to determine loss of food value and acceptability. Our results showed negligible loss in these areas\n\nFreezing temperatures will have no effect at all on these tablets.\n\nWe would estimate the shelf-life for Survival Tabs to be 25 years.",
    "highlights": [
      "Certified 25-Year estimated shelf-life based on 1974-75 sample testing",
      "Withstands accelerated high temperatures with negligible loss",
      "Freezing temperatures have zero negative effect"
    ]
  },
  {
    "id": "if-one-wants-to-use-these-tablets-for-long-period-",
    "category": "survival",
    "question": "If one wants to use these tablets for long period of time, for example 4-8 weeks with no food, what would happen with the deficiency of other nutrients?",
    "answer": "You could survive and sustain yourself for 4-8 weeks with the tabs, but you are right, you’d be deficient in some nutrients which we normally get from regular foods. Survival Tabs can’t replace all the nutrition that your body needs for an extended length of time.",
    "highlights": [
      "Can sustain a person for 4-8 weeks in emergency scarcity",
      "Supplies critical core nutrition when standard food is unavailable"
    ]
  },
  {
    "id": "one-tablet-provides-100-of-some-nutrients-such-as-",
    "category": "nutrition",
    "question": "One tablet provides 100% of some nutrients such as Iron, Vitamin A or Vitamin C. Twelve tablets provide 12 times of RDA?",
    "answer": "Twelve Survival Tabs supply 100% of the USRDA for practically all the vitamins and minerals indicated on the label, with the exception of Calcium, which in order to have 100% of the RDA we’d have to make Survival Tab as big as a golf ball.",
    "highlights": [
      "12 tabs supply 100% of US RDA for practically all indicated vitamins & minerals",
      "Formulated without excessive bulk filler"
    ]
  },
  {
    "id": "if-one-has-access-only-to-survival-tabs-but-enough",
    "category": "survival",
    "question": "If one has access only to Survival Tabs, but enough water and no food, how long could they survive maximum? What would be the medical consequences or complications for doing so?",
    "answer": "With just Survival Tabs and water, depending on the circumstances of course, one could maintain oneself for 3-4 months without any major difficulties. When Survival Tabs were first developed, there was a woman, deathly ill and expected to die soon, who could not keep anything down. Someone suggested Survival Tabs. She went on them exclusively and lived 2 years.\n\nThere was another man, who was given 2 months to live by his doctor. He could not eat or assimilate food to any extent. He took Survival Tabs, and lived another 6 months. These were sick people and these were random situations, not scientific tests. We have had healthy people go on Survival Tabs for 2 months, and the result was an initial loss of weight of 10-15 lbs, then a leveling off of another 10 lbs for the duration of the time.",
    "highlights": [
      "Maintains a person for 3-4 months with tabs and water alone",
      "Real-world track record sustaining individuals through severe illness and scarcity"
    ]
  }
]

export function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({})

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {}
    faqData.forEach((item) => {
      allOpen[item.id] = true
    })
    setOpenIds(allOpen)
  }

  const collapseAll = () => {
    setOpenIds({})
  }

  // Filter items based on active category & search query
  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch =
      !query ||
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.highlights?.some((h) => h.toLowerCase().includes(query))
    return matchesCategory && matchesSearch
  })

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General & Concept" },
    { id: "nutrition", label: "Nutrition & Bio-Availability" },
    { id: "storage", label: "Shelf Life & Storage" },
    { id: "usage", label: "Daily & Field Use" },
    { id: "survival", label: "Long-Term Survival" },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto px-4 space-y-6 pt-2 pb-12">
      {/* Header Banner */}
      <div className="relative rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-xs overflow-hidden text-center space-y-3">  
        <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary max-w-3xl mx-auto leading-tight">
          Frequently Asked Questions
        </h1>


      </div>

      {/* Category Pills & Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-card text-muted-foreground border border-border hover:bg-secondary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Expand / Collapse Controls */}
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground shrink-0">
          <button
            onClick={expandAll}
            className="hover:text-red-600 transition-colors cursor-pointer"
          >
            Expand All
          </button>
          <span>&bull;</span>
          <button
            onClick={collapseAll}
            className="hover:text-red-600 transition-colors cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-2xl border border-border p-8 space-y-3">
            <HelpCircle className="h-10 w-10 text-muted-foreground/50 mx-auto" />
            <h3 className="font-bold text-primary text-base">No matching questions found</h3>
            <p className="text-xs text-muted-foreground">
              Try adjusting your search terms or browse all categories above.
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("all")
              }}
              className="mt-2 text-xs font-bold text-red-600 hover:underline cursor-pointer"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((item, index) => {
            const isOpen = !!openIds[item.id]
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 bg-card overflow-hidden ${
                  isOpen
                    ? "border-red-200 shadow-sm ring-1 ring-red-50"
                    : "border-border hover:border-border"
                }`}
              >
                {/* Accordion Header / Toggle */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-muted-foreground mt-0.5">
                      {index + 1}
                    </span>
                    <span className="font-bold text-primary text-sm sm:text-base leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isOpen
                        ? "bg-red-50 border-red-200 text-red-600 rotate-180"
                        : "bg-secondary border-border text-muted-foreground"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-border space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                    <p className="text-foreground whitespace-pre-line leading-relaxed">{item.answer}</p>

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="pt-2 rounded-xl bg-secondary p-4 border border-border space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                          Key Takeaways:
                        </span>
                        <ul className="space-y-1.5 text-xs text-foreground">
                          {item.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default FaqPage
