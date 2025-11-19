'use client';
import { useCallback } from 'react';
import { WordRotate } from '@/components/ui/word-rotate';
import { cn } from '@/lib/utils';

type WaitlistSectionProps = {
  title: string;
  description: string;
  rotatingWords: readonly string[];
  payNowLabel: string;
  bonuses: readonly string[];
};

export function WaitlistSection({
  title,
  description,
  rotatingWords,
  payNowLabel,
  bonuses,
}: WaitlistSectionProps) {
  const handlePayNow = useCallback(() => {
    // Fire Google Ads conversion event if available
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag_report_conversion?.()
    } catch {
      // no-op
    }
    window.open(
      'https://getwaitlist.com/waitlist/31868',
      '_blank',
      'noopener,noreferrer',
    );
  }, []);

  return (
    <section
      id="waitlist"
      className="flex flex-col gap-8 px-6 py-20 sm:px-12 bg-[#f4f5ff] scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-xl mx-auto text-center">
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden="true" className="text-3xl sm:text-4xl">
              🎁
            </span>
            <h2 className="bg-linear-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
              {title}
            </h2>
          </div>
          <p className="text-base text-zinc-800 font-medium">{description}</p>
          <ul className="mx-auto w-fit flex flex-wrap items-center justify-center text-left">
            {bonuses.map((item, index) => {
              const isBonus = index >= bonuses.length - 3;
              return (
                <li
                  key={`${item}-${index}`}
                  className={cn(
                    "flex items-center before:mx-2 before:content-['•'] first:before:content-['']",
                    isBonus
                      ? 'text-orange-500 before:text-zinc-400'
                      : 'text-zinc-700 before:text-zinc-400'
                  )}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={handlePayNow}
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] px-8 py-3.5 text-base font-semibold text-white shadow-[0_24px_54px_-22px_rgba(168,85,247,0.85)] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ec4899]"
          >
            {payNowLabel}
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1 ml-[25%] md:ml-[35%]">
            <span
              aria-hidden="true"
              className="text-md font-medium text-zinc-700"
            >
              +
            </span>
            <WordRotate
              words={rotatingWords}
              className="text-md font-medium text-zinc-700"
              duration={2200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
