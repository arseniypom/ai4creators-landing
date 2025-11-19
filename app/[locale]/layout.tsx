import type { Metadata, Viewport } from "next"

import { i18n, resolveLocale } from "@/i18n-config"
import { getDictionary } from "@/lib/get-dictionary"

// Note: Global CSS, fonts, and scripts are provided by the root layout

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const resolvedLocale = resolveLocale(locale)
  const dictionary = await getDictionary(resolvedLocale)
  const metadata = dictionary.metadata

  return {
    title: metadata.title,
    description: metadata.description,
    applicationName: "InstaGrow",
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.svg?v=2", type: "image/svg+xml" },
        { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
        {
          url: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/favicon.svg?v=2",
    },
  }
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
