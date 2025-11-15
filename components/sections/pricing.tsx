import { Check } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';
import { cn } from '@/lib/utils';

type PricingTier = {
  name: string;
  subtitle?: string;
  price: number;
  period: string;
  label?: string;
  highlight?: boolean;
  benefits: readonly string[];
};

type PricingSectionProps = {
  title: string;
  tiers: readonly PricingTier[];
  badgePopular: string;
  availableSoon: string;
  ctaFirstCard: string;
  moneybackNote: string;
};

export function PricingSection({
  title,
  tiers,
  badgePopular,
  availableSoon,
  ctaFirstCard,
  moneybackNote,
}: PricingSectionProps) {
  return (
    <section className="relative px-6 py-20 sm:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-10 -z-10 h-[520px] rounded-[3rem] bg-linear-to-b from-[#d1d4ff]/60 via-white to-white blur-3xl sm:inset-x-12"
      />

      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
          {title}
        </h2>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((tier, idx) => (
          <article
            key={tier.name}
            className={cn(
              'relative overflow-hidden rounded-3xl',
              idx === 0
                ? 'border border-zinc-200 bg-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.3)]'
                : 'border border-dashed border-zinc-300 bg-zinc-50'
            )}
          >
            <div className="flex h-full flex-col gap-5 p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-zinc-800">
                  {tier.name}
                </h3>
                {!tier.label && tier.highlight && (
                  <span className="rounded-full bg-[#f3f4ff] px-3 py-1 text-xs font-medium text-[#4338ca]">
                    {badgePopular}
                  </span>
                )}
              </div>
              {tier.subtitle && (
                <p
                  className={cn(
                    'text-sm',
                    idx === 0 ? 'text-[#f97316] font-medium' : 'text-zinc-500',
                  )}
                >
                  {tier.subtitle}
                </p>
              )}
              <div className={idx > 0 ? 'opacity-75' : undefined}>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-semibold text-zinc-900 sm:text-5xl">
                    ${tier.price}
                  </span>
                  <span className="pb-1 text-sm text-zinc-500">
                    {tier.period}
                  </span>
                </div>
                <ul className={cn("mt-2 space-y-3", idx === 0 && "ml-[calc(0.5rem+1px)]")}>
                  {tier.benefits
                    .slice(0, idx === 0 ? Math.max(0, tier.benefits.length - 3) : tier.benefits.length)
                    .map((benefit, idxInner) => (
                      <li
                        key={idxInner}
                        className="flex items-center gap-3 text-sm text-zinc-600"
                      >
                        <span className="mt-[2px] grid h-6 w-6 flex-none place-items-center rounded-full border border-[#a7abff]/60 bg-[#f3f4ff] text-[#4338ca]">
                          <Check className="h-4 w-4" />
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                </ul>
                {idx === 0 && (
                  <div className="relative group mt-3">
                    <div className="pointer-events-none absolute -bottom-1 left-2 translate-y-full rounded-md bg-orange-500 px-2 py-1 text-[11px] font-medium text-white shadow-sm opacity-0 invisible transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
                      Bonuses
                    </div>
                    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-2" title="Bonuses">
                      <ul className="space-y-3">
                        {tier.benefits.slice(-3).map((benefit, idxInner) => (
                          <li
                            key={idxInner}
                            className="flex items-center gap-3 text-sm text-zinc-600"
                          >
                            <span className="mt-[2px] grid h-6 w-6 flex-none place-items-center rounded-full border border-[#fdba74]/60 bg-orange-50 text-orange-600">
                              <Check className="h-4 w-4" />
                            </span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              {idx === 0 ? (
                <div className="mt-auto pt-2 flex flex-col gap-1">
                  <a
                    href="#waitlist"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#6366f1] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#555ae9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]"
                  >
                    {ctaFirstCard}
                  </a>
                  <p className="text-center text-xs text-zinc-500">{moneybackNote}</p>
                </div>
              ) : (
                <div className="mt-auto pt-2">
                  <button
                    type="button"
                    disabled
                    className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300 bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-600 opacity-80 disabled:cursor-auto"
                  >
                    {tier.label ?? availableSoon}
                  </button>
                </div>
              )}
            </div>
            {idx === 0 && (
              <>
                <BorderBeam
                  duration={6}
                  size={400}
                  className="from-transparent via-red-500 to-transparent"
                />
                <BorderBeam
                  duration={6}
                  delay={3}
                  size={400}
                  borderWidth={2}
                  className="from-transparent via-blue-500 to-transparent"
                />
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
