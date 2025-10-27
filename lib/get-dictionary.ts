import { resolveLocale, type Locale } from "@/i18n-config"
import type { Dictionary } from "@/dictionaries/types"

const dictionaryLoaders: Record<Locale, () => Promise<Dictionary>> = {
  en: async () => (await import("@/dictionaries/en")).default,
  ru: async () => (await import("@/dictionaries/ru")).default,
}

export async function getDictionary(locale: string | undefined) {
  const resolvedLocale = resolveLocale(locale)
  return dictionaryLoaders[resolvedLocale]()
}
