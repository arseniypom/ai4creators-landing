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
                <ul className="mt-2 space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-zinc-600"
                    >
                      <span className="mt-[2px] grid h-6 w-6 flex-none place-items-center rounded-full border border-[#a7abff]/60 bg-[#f3f4ff] text-[#4338ca]">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {idx === 0 ? (
                <div className="mt-auto pt-2 flex flex-col gap-1">
                  <a
                    href="#waitlist"
                    className="inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] px-6 py-3.5 text-sm font-medium text-white shadow-[0_24px_54px_-22px_rgba(168,85,247,0.85)] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ec4899]"
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
