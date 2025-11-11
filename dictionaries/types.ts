import type { Locale } from "@/i18n-config"

export type Dictionary = {
  metadata: {
    title: string
    description: string
  }
  cta: {
    pay_now: string
  }
  dialog: {
    title: string
    email: string
    submit: string
    cancel: string
    error?: string
  }
  success: {
    message: {
      purchase_flow: string
    }
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
      subtitle?: string
      description: string
      preHighlights?: string
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
    description: string | readonly string[]
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
    helper_text?: string
    rotatingWords: readonly string[]
  }
  pricing: {
    title: string
    badgePopular: string
    tiers: readonly {
      name: string
      subtitle?: string
      price: number
      period: string
      highlight?: boolean
      benefits: readonly string[]
    }[]
  }
}
