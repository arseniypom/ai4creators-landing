import { Hero } from "@/components/hero"
import { SiteHeader } from "@/components/site-header"
import { ValuePropSection } from "@/components/sections/value-prop"
import { WaitlistSection } from "@/components/sections/waitlist"
import { WhatWeDo } from "@/components/sections/what-we-do"
import type { Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/get-dictionary"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  const { header, hero, whatWeDo, valueProp, waitlist } = dictionary

  return (
    <div className="min-h-screen bg-zinc-50 py-10 text-zinc-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.3)]">
        <SiteHeader
          brand={header.brand}
          ctaLabel={header.cta}
          locale={locale}
          localeSwitcher={header.localeSwitcher}
        />

        <Hero
          title={hero.title}
          description={hero.description}
          ctaLabel={hero.cta}
          rotatingWords={hero.rotatingWords}
          instagramImageSrc="/images/instagram.webp"
          imageAlt={hero.imageAlt}
        />

        <WhatWeDo
          title={whatWeDo.title}
          steps={whatWeDo.steps}
          schemaImageSrc="/images/strategy-schema.png"
        />

        <ValuePropSection
          title={valueProp.title}
          description={valueProp.description}
          checklistItems={valueProp.checklist}
        />

        <WaitlistSection
          title={waitlist.title}
          description={waitlist.description}
          emailPlaceholder={waitlist.emailPlaceholder}
          ctaLabel={waitlist.cta}
        />
      </main>
    </div>
  )
}
