"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

import type { Locale } from "@/i18n-config"
import { cn } from "@/lib/utils"

type LocaleSwitcherProps = {
  currentLocale: Locale
  label: string
  shortNames: Record<Locale, string>
  localeNames: Record<Locale, string>
  availableLocales: readonly Locale[]
}

export function LocaleSwitcher({
  currentLocale,
  label,
  shortNames,
  localeNames,
  availableLocales,
}: LocaleSwitcherProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  if (!pathname) {
    return null
  }

  const createHref = (nextLocale: Locale) => {
    const segments = pathname.split("/")

    if (segments.length > 1) {
      segments[1] = nextLocale
    }

    const targetPath = segments.join("/") || "/"
    const query = searchParams.toString()

    return query ? `${targetPath}?${query}` : targetPath
  }

  return (
    <nav
      aria-label={label}
      className="flex items-center rounded-full border border-zinc-200 bg-white p-1 text-xs font-semibold text-zinc-600 shadow-inner"
    >
      {availableLocales.map((locale) => {
        const isActive = locale === currentLocale
        return (
          <Link
            key={locale}
            href={createHref(locale)}
            aria-label={localeNames[locale]}
            className={cn(
              "flex items-center justify-center rounded-full px-3 py-1 transition",
              isActive
                ? "bg-zinc-900 text-white shadow"
                : "hover:text-zinc-900",
            )}
            prefetch={false}
          >
            {shortNames[locale]}
          </Link>
        )
      })}
    </nav>
  )
}
