"use client"

import Link from "next/link"
import Image from "next/image"
import { MouseEvent, Suspense } from "react"

import { i18n, type Locale } from "@/i18n-config"

import { LocaleSwitcher } from "./locale-switcher"

type SiteHeaderProps = {
  brand: string
  ctaLabel: string
  ctaHref?: string
  locale: Locale
  localeSwitcher: {
    label: string
    shortNames: Record<Locale, string>
    localeNames: Record<Locale, string>
  }
}

export function SiteHeader({
  brand,
  ctaLabel,
  ctaHref = "#waitlist",
  locale,
  localeSwitcher,
}: SiteHeaderProps) {
  const SHOW_LOCALE_SWITCHER = false
  const handleCtaClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!ctaHref.startsWith("#")) {
      return
    }

    event.preventDefault()

    const target = document.querySelector(ctaHref)
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState(null, "", ctaHref)
    }
  }

  return (
    <header className="flex gap-4 border-b border-zinc-200 px-6 py-6 flex-row items-center justify-between sm:px-12">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg?v=2" alt={brand} width={30} height={30} priority />
        <span className="text-lg font-semibold sm:text-xl">{brand}</span>
      </div>
      <div className="flex gap-3 flex-row items-center sm:gap-4">
        {SHOW_LOCALE_SWITCHER && (
          <Suspense fallback={null}>
            <LocaleSwitcher
              currentLocale={locale}
              label={localeSwitcher.label}
              shortNames={localeSwitcher.shortNames}
              localeNames={localeSwitcher.localeNames}
              availableLocales={i18n.locales}
            />
          </Suspense>
        )}
        <Link
          href={ctaHref}
          onClick={handleCtaClick}
          className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-900 transition hover:border-zinc-900 hover:text-zinc-900"
        >
          {ctaLabel}
        </Link>
      </div>
    </header>
  )
}
