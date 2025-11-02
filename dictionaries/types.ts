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
    eyebrow: string
    titlePrimary: string
    titleHighlight: string
    description: string
    cta: string
  }
  howItWorks: {
    title: string
    description: string
    steps: readonly {
      title: string
      description: string
      highlights: readonly string[]
      icon: "sparkles" | "rocket"
    }[]
  }
  screenshots: {
    title: string
    description: string
    items: readonly {
      title: string
      description: string
      imageSrc: string
      imageAlt?: string
    }[]
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
    columns: {
      instagrow: string
      chatgpt: string
    }
    features: readonly {
      label: string
      instagrow: boolean
      chatgpt: boolean
    }[]
  }
  faq: {
    title: string
    description: string
    items: readonly {
      question: string
      answer: string
    }[]
  }
  waitlist: {
    title: string
    description: string
    emailPlaceholder: string
    cta: string
    rotatingWords: readonly string[]
  }
}
