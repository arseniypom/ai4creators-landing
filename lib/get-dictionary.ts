import type { Locale } from "@/i18n-config"

const dictionaries: Record<
  Locale,
  () => Promise<typeof import("@/dictionaries/en").default>
> = {
  en: () => import("@/dictionaries/en").then((module) => module.default),
  ru: () => import("@/dictionaries/ru").then((module) => module.default),
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]()
}
