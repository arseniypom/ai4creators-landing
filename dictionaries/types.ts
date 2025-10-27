import type { Locale } from "@/i18n-config"

export type Dictionary = {
  metadata: {
    title: string
    description: string
  }
  header: {
    brand: string
    cta: string
    localeSwitcher: {
      label: string
      shortNames: Record<Locale, string>
      localeNames: Record<Locale, string>
    }
  }
  hero: {
    title: string
    description: string
    cta: string
    rotatingWords: readonly string[]
    imageAlt: string
  }
  whatWeDo: {
    title: string
    steps: readonly {
      title: string
      description: string
      imageAlt?: string
    }[]
  }
  valueProp: {
    title: string
    description: string
    checklist: readonly string[]
  }
  waitlist: {
    title: string
    description: string
    emailPlaceholder: string
    cta: string
  }
}
