'use client';
import Script from 'next/script';
import { useCallback } from 'react';
import { WordRotate } from '@/components/ui/word-rotate';

type WaitlistSectionProps = {
  title: string;
  description: string;
  rotatingWords: readonly string[];
  payNowLabel: string;
  helperText: string;
};

export function WaitlistSection({
  title,
  rotatingWords,
  payNowLabel,
  helperText,
}: WaitlistSectionProps) {
  const handlePayNow = useCallback(() => {
    window.open(
      'https://getwaitlist.com/waitlist/31868',
      '_blank',
      'noopener,noreferrer',
    );
  }, []);

  return (
    <section
      id="waitlist"
      className="flex flex-col gap-8 px-6 py-12 sm:px-12 bg-[#f4f5ff]"
    >
      <div className="max-w-lg mx-auto text-center">
        <div className="flex flex-col gap-4 mb-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        </div>
        <div className="flex justify-center my-5">
          <button
            type="button"
            onClick={handlePayNow}
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] px-8 py-3.5 text-base font-semibold text-white shadow-[0_24px_54px_-22px_rgba(168,85,247,0.85)] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ec4899]"
          >
            {payNowLabel}
          </button>
        </div>
        <p className="text-sm text-zinc-600">{helperText}</p>
        <Script
          id="waitlist-css-loader"
          dangerouslySetInnerHTML={{
            __html: `
let head = document.getElementsByTagName('HEAD')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css';
head.appendChild(link);
`,
          }}
        />
        <Script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js" />
        <div className="flex flex-col">
          <div
            id="getWaitlistContainer"
            data-waitlist_id="31722"
            data-widget_type="WIDGET_2"
            className="max-w-sm mx-auto"
          ></div>
          <div className="flex items-baseline gap-2 ml-[37%] md:ml-[43%]">
            <span
              aria-hidden="true"
              className="text-xl font-medium text-zinc-700"
            >
              +
            </span>
            <WordRotate
              words={rotatingWords}
              className="text-xl font-medium text-zinc-700"
              duration={2200}
            />
          </div>
        </div>
        {/* <div className="flex items-baseline justify-center gap-2">
          <span
            aria-hidden="true"
            className="text-3xl font-medium text-zinc-700"
          >
            +
          </span>
          <WordRotate
            words={rotatingWords}
            className="text-3xl font-medium text-zinc-700"
            duration={2200}
          />
        </div> */}
      </div>
    </section>
  );
}
