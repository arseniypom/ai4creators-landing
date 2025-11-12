'use client';
import Script from 'next/script';
import { MessageSquare } from 'lucide-react';

export function ContactSection() {
  return (
    <>
      <section className="px-6 py-8 sm:px-8 bg-zinc-50">
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-4 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
                Help us make InstaGrow better for{' '}
                <em className="italic">you</em>
              </h2>
              <p className="mt-2 max-w-lg text-zinc-600">
                Tell us what feature, content, or tool you&apos;d love to see inside
                InstaGrow — and we&apos;ll send you a small thank-you gift 💌
              </p>
            </div>
            <div className="md:shrink-0">
              <button
                type="button"
                data-tally-open="GxvGok"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]"
              >
                Share
                <MessageSquare aria-hidden="true" className="ml-2 size-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
