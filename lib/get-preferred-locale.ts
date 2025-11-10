import { i18n, type Locale } from "@/i18n-config"

export function getPreferredLocale(
  acceptLanguage: string | null | undefined,
): Locale {
  if (!acceptLanguage) {
    return i18n.defaultLocale
  }

  type LanguagePreference = { tag: string; q: number; index: number }
  const preferences: LanguagePreference[] = acceptLanguage
    .split(",")
    .map((raw, index) => {
      const [tagRaw, qPart] = raw.trim().split(";")
      const tag = (tagRaw || "").toLowerCase()
      const q =
        qPart && qPart.trim().startsWith("q=")
          ? Number.parseFloat(qPart.trim().slice(2))
          : 1
      const weight = Number.isFinite(q) ? Math.max(0, Math.min(1, q)) : 0
      return { tag, q: weight, index }
    })
    .filter((p) => p.tag)

  const calcMaxWeightFor = (base: "en" | "ru") =>
    preferences.reduce((max, p) => {
      if (p.tag === base || p.tag.startsWith(`${base}-`)) {
        return Math.max(max, p.q)
      }
      return max
    }, 0)

  const findFirstIndexFor = (base: "en" | "ru") => {
    const match = preferences.find(
      (p) => p.tag === base || p.tag.startsWith(`${base}-`),
    )
    return match ? match.index : Number.POSITIVE_INFINITY
  }

  const ruWeight = calcMaxWeightFor("ru")
  const enWeight = calcMaxWeightFor("en")

  if (ruWeight > enWeight) return "ru"
  if (enWeight > ruWeight) return "en"

  // Tie-breaker: preserve user order when weights are equal
  const ruIndex = findFirstIndexFor("ru")
  const enIndex = findFirstIndexFor("en")

  if (ruIndex === Number.POSITIVE_INFINITY && enIndex === Number.POSITIVE_INFINITY) {
    return i18n.defaultLocale
  }
  if (ruIndex < enIndex) return "ru"
  return "en"
}
