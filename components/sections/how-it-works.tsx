import type { ComponentType } from 'react';

import { Rocket, Sparkles } from 'lucide-react';

type HowItWorksStep = {
  title: string;
  subtitle?: string;
  description: string;
  preHighlights?: string;
  highlights: readonly string[];
  icon: 'sparkles' | 'rocket';
};

type HowItWorksProps = {
  title: string;
  description: string;
  steps: readonly HowItWorksStep[];
};

const iconMap: Record<
  HowItWorksStep['icon'],
  ComponentType<{ className?: string }>
> = {
  sparkles: Sparkles,
  rocket: Rocket,
};

export function HowItWorks({ title, description, steps }: HowItWorksProps) {
  return (
    <section className="relative px-6 py-20 sm:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-16 -z-10 h-[480px] rounded-[3rem] bg-linear-to-b from-[#d1d4ff]/70 via-white to-white blur-3xl sm:inset-x-12"
      />
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-zinc-600 sm:text-xl whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon];

          return (
            <article key={step.title} className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-4xl bg-linear-to-br from-[#a855f7]/35 via-[#6366f1]/25 to-[#ec4899]/35 blur-2xl"
              />
              <div className="relative flex h-full flex-col rounded-[1.75rem] border border-white/70 bg-white/90 p-8 shadow-[0_35px_100px_-60px_rgba(79,70,229,0.7)] backdrop-blur">
                <div className="flex items-center gap-3 mb-8">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-linear-to-b from-[#6366f1] to-[#a855f7] text-lg font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
                    {step.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[#6366f1]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-left mb-4">
                  {step.subtitle && (
                    <p className="font-semibold text-zinc-900">
                      {step.subtitle}
                    </p>
                  )}
                  <p className=" text-zinc-600">
                    {step.description}
                  </p>
                </div>

                {step.preHighlights ? (
                  <p className="mt-2 text-zinc-900">
                    {step.preHighlights}
                  </p>
                ) : null}

                <ul className="mt-2 space-y-2 text-left">
                  {step.highlights.map((highlight) => {
                    const dash = '—';
                    const dashIndex = highlight.indexOf(dash);
                    if (dashIndex === -1) {
                      return (
                        <li key={highlight} className="text-base text-zinc-900">
                          <span className="font-semibold">{highlight}</span>
                        </li>
                      );
                    }
                    const lead = highlight.slice(0, dashIndex).trim();
                    const rest = highlight.slice(dashIndex + dash.length).trim();
                    return (
                      <li key={highlight} className="text-base text-zinc-900">
                        <span className="font-semibold">{lead}</span>
                        {rest ? <span>{' — '}{rest}</span> : null}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
