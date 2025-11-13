import { ArrowRight } from 'lucide-react';

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

      <div className="relative mt-14">
        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => {
            return (
              <article key={step.title} className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-4xl bg-linear-to-br from-[#a855f7]/35 via-[#6366f1]/25 to-[#ec4899]/35 blur-2xl"
                />
                <div className="relative flex h-full flex-col rounded-[1.75rem] border border-white/70 bg-white/90 p-8 shadow-[0_35px_100px_-60px_rgba(79,70,229,0.7)] backdrop-blur origin-center transform-gpu transition-transform duration-300 md:hover:scale-[1.02] md:hover:z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div
                      className={`grid h-8 w-8 place-items-center rounded-full text-lg font-semibold text-white ${
                        index % 2 === 0
                          ? 'bg-linear-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30'
                          : 'bg-linear-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
                      {step.title}
                    </h3>
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

                  <ul className="mt-2 space-y-3 text-left">
                    {step.highlights.map((highlight) => {
                      const dash = '—';
                      const dashIndex = highlight.indexOf(dash);
                      if (dashIndex === -1) {
                        return (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-base text-zinc-900"
                          >
                            <div
                              className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                                index % 2 === 0 ? 'bg-purple-100' : 'bg-blue-100'
                              }`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  index % 2 === 0 ? 'bg-purple-500' : 'bg-blue-500'
                                }`}
                              />
                            </div>
                            <span className="font-semibold">{highlight}</span>
                          </li>
                        );
                      }
                      const lead = highlight.slice(0, dashIndex).trim();
                      const rest = highlight.slice(dashIndex + dash.length).trim();
                      return (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-base text-zinc-900"
                        >
                          <div
                            className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                              index % 2 === 0 ? 'bg-purple-100' : 'bg-blue-100'
                            }`}
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${
                                index % 2 === 0 ? 'bg-purple-500' : 'bg-blue-500'
                              }`}
                            />
                          </div>
                          <div>
                            <span className="font-semibold">{lead}</span>
                            {rest ? <span className="text-zinc-600">{' — '}{rest}</span> : null}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center justify-center z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30"></div>
            <div className="relative w-16 h-16 bg-linear-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/40">
              <ArrowRight className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex md:hidden items-center justify-center z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-b from-purple-500 to-blue-500 rounded-full blur-xl opacity-30"></div>
            <div className="relative w-14 h-14 bg-linear-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/40">
              <ArrowRight className="w-7 h-7 text-white rotate-90" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
