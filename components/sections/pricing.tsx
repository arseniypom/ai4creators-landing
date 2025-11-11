import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type PricingTier = {
  name: string;
  subtitle?: string;
  price: number;
  period: string;
  highlight?: boolean;
  benefits: readonly string[];
};

type PricingSectionProps = {
  title: string;
  tiers: readonly PricingTier[];
  badgePopular: string;
};

export function PricingSection({
  title,
  tiers,
  badgePopular,
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
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={cn(
              'overflow-hidden rounded-3xl border bg-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.3)]',
              tier.highlight
                ? 'border-[#c7c9ff] ring-2 ring-[#a7abff]/60'
                : 'border-zinc-200',
            )}
          >
            <div className="flex h-full flex-col gap-5 p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-zinc-800">
                  {tier.name}
                </h3>
                {tier.highlight && (
                  <span className="rounded-full bg-[#f3f4ff] px-3 py-1 text-xs font-medium text-[#4338ca]">
                    {badgePopular}
                  </span>
                )}
              </div>
              {tier.subtitle && (
                <p className="text-sm text-zinc-500">{tier.subtitle}</p>
              )}
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
                    <span className="mt-[2px] grid h-6 w-6 flex-none place-items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
