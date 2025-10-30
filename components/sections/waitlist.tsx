import Script from 'next/script';

type WaitlistSectionProps = {
  title: string;
  description: string;
  emailPlaceholder: string;
  ctaLabel: string;
};

export function WaitlistSection({ title, description }: WaitlistSectionProps) {
  return (
    <section id="waitlist" className="flex flex-col gap-8 px-6 py-12 sm:px-12 bg-[#f4f5ff]">
      <div className="max-w-lg mx-auto text-center">
        <div className="flex flex-col gap-4 mb-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="max-w-2xl text-base text-zinc-600">{description}</p>
        </div>
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
        <div
          id="getWaitlistContainer"
          data-waitlist_id="31722"
          data-widget_type="WIDGET_2"
        ></div>
      </div>
    </section>
  );
}
