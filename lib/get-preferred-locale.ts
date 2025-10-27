import { i18n, isLocale, type Locale } from "@/i18n-config"

export function getPreferredLocale(
  acceptLanguage: string | null | undefined,
): Locale {
  if (!acceptLanguage) {
    return i18n.defaultLocale
  }

  const preferredLocales = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0])
    .filter(Boolean)

  for (const locale of preferredLocales) {
    const normalizedLocale = locale.toLowerCase()

    if (isLocale(normalizedLocale)) {
      return normalizedLocale
    }

    const baseLocale = normalizedLocale.split("-")[0]
    if (isLocale(baseLocale)) {
      return baseLocale
    }
  }

  return i18n.defaultLocale
}
