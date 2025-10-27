import { i18n } from "@/i18n-config"

export function getPreferredLocale(acceptLanguage: string | null | undefined) {
  if (!acceptLanguage) {
    return i18n.defaultLocale
  }

  const preferredLocales = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0])
    .filter(Boolean)

  for (const locale of preferredLocales) {
    const normalizedLocale = locale.toLowerCase()

    if (i18n.locales.includes(normalizedLocale as (typeof i18n.locales)[number])) {
      return normalizedLocale as (typeof i18n.locales)[number]
    }

    const baseLocale = normalizedLocale.split("-")[0]
    if (i18n.locales.includes(baseLocale as (typeof i18n.locales)[number])) {
      return baseLocale as (typeof i18n.locales)[number]
    }
  }

  return i18n.defaultLocale
}
