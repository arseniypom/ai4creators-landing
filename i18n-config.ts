export const i18n = {
  defaultLocale: "en",
  locales: ["en", "ru"],
} as const

export type Locale = (typeof i18n)["locales"][number]

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && i18n.locales.includes(value as Locale)
}

export function resolveLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : i18n.defaultLocale
}
