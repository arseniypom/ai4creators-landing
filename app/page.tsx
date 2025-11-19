import { i18n } from "@/i18n-config"
import { getDictionary } from "@/lib/get-dictionary"
import { SiteHeader } from "@/components/layout/site-header"
import {
  Hero,
  HowItWorks,
  ValuePropSection,
  ScreenshotsV2Section,
  ScreenshotsV3Section,
  PricingSection,
  WaitlistSection,
  FaqSection,
} from "@/components/sections"

const SHOW_PRICING = process.env.NEXT_PUBLIC_ENABLE_PRICING === "true"

export async function generateMetadata() {
  const dictionary = await getDictionary(i18n.defaultLocale)
  const { metadata } = dictionary
  return {
    title: metadata.title,
    description: metadata.description,
    applicationName: "InstaGrow",
    manifest: "/site.webmanifest",
  }
}

export default async function RootPage() {
  const resolvedLocale = i18n.defaultLocale
  const dictionary = await getDictionary(resolvedLocale)
  const {
    header,
    hero,
    howItWorks,
    screenshots,
    valueProp,
    pricing,
    waitlist,
    faq,
    cta,
    contact,
  } = dictionary

  return (
    <main className="w-full">
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

      <div className="lg:hidden">
        <ScreenshotsV2Section
          title={screenshots.title}
          description={screenshots.description}
        />
      </div>
      <div className="hidden lg:block">
        <ScreenshotsV3Section
          title={screenshots.title}
          description={screenshots.description}
        />
      </div>

      <ValuePropSection
        title={valueProp.title}
        description={valueProp.description}
        columns={valueProp.columns}
        features={valueProp.features}
      />

      {SHOW_PRICING && (
        <PricingSection
          title={pricing.title}
          tiers={pricing.tiers}
          badgePopular={pricing.badgePopular}
          availableSoon={pricing.availableSoon}
          ctaFirstCard={pricing.ctaFirstCard}
          moneybackNote={pricing.moneybackNote}
        />
      )}

      <WaitlistSection
        title={waitlist.title}
        description={waitlist.description}
        rotatingWords={waitlist.rotatingWords}
        bonuses={waitlist.bonuses}
        payNowLabel={cta.pay_now}
      />

      <FaqSection
        leftTitleStart={contact.titleStart}
        leftTitleEmphasis={contact.titleEmphasis}
        leftTitleEnd={contact.titleEnd}
        leftDescription={contact.description}
        ctaLabel={contact.cta}
        items={faq.items}
      />
    </main>
  )
}
