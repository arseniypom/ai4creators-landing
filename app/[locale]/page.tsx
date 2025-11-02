import { Hero } from "@/components/hero"
import { SiteHeader } from "@/components/site-header"
import { ValuePropSection } from "@/components/sections/value-prop"
import { WaitlistSection } from "@/components/sections/waitlist"
import { HowItWorks } from "@/components/sections/how-it-works"
import { FaqSection } from "@/components/sections/faq"
import { ScreenshotsSection } from "@/components/sections/screenshots"
import { resolveLocale } from "@/i18n-config"
import { getDictionary } from "@/lib/get-dictionary"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const resolvedLocale = resolveLocale(locale)
  const dictionary = await getDictionary(resolvedLocale)
  const { header, hero, howItWorks, screenshots, valueProp, waitlist, faq } = dictionary

  return (
    <div className="min-h-screen bg-zinc-50 py-10 text-zinc-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.3)]">
        <SiteHeader
          brand={header.brand}
          ctaLabel={header.cta}
          locale={resolvedLocale}
          localeSwitcher={header.localeSwitcher}
        />

        <Hero
          eyebrow={hero.eyebrow}
          titlePrimary={hero.titlePrimary}
          titleHighlight={hero.titleHighlight}
          description={hero.description}
          ctaLabel={hero.cta}
        />

        <HowItWorks
          title={howItWorks.title}
          description={howItWorks.description}
          steps={howItWorks.steps}
        />

        <ScreenshotsSection
          title={screenshots.title}
          description={screenshots.description}
          items={screenshots.items}
        />

        {/* TODO: Re-enable WhatWeDo section when refreshed content/design is ready */}
        {/*
        <WhatWeDo
          title={whatWeDo.title}
          steps={whatWeDo.steps}
          schemaImageSrc="/images/strategy-schema.png"
        />
        */}

        <ValuePropSection
          title={valueProp.title}
          description={valueProp.description}
          columns={valueProp.columns}
          features={valueProp.features}
        />

        <WaitlistSection
          title={waitlist.title}
          description={waitlist.description}
          emailPlaceholder={waitlist.emailPlaceholder}
          ctaLabel={waitlist.cta}
          rotatingWords={waitlist.rotatingWords}
        />

        <FaqSection
          title={faq.title}
          description={faq.description}
          items={faq.items}
        />
      </main>
    </div>
  )
}
