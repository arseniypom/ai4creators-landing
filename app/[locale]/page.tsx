import {
  Hero,
  ValuePropSection,
  WaitlistSection,
  HowItWorks,
  FaqSection,
  ScreenshotsSection,
  PricingSection,
} from '@/components/sections';
import { SiteHeader } from '@/components/layout/site-header';
import { resolveLocale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionary';

const SHOW_PRICING = process.env.NEXT_PUBLIC_ENABLE_PRICING === 'true';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = await getDictionary(resolvedLocale);
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
  } = dictionary;

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

        {/* <ContactSection
          titleStart={contact.titleStart}
          titleEmphasis={contact.titleEmphasis}
          titleEnd={contact.titleEnd}
          description={contact.description}
          ctaLabel={contact.cta}
        /> */}
    </main>
  );
}
