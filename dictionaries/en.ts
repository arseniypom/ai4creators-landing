import type { Dictionary } from "./types"

const dictionary = {
  metadata: {
    title: "InstaGrow — Smart Instagram Growth Companion",
    description:
      "Join the InstaGrow waitlist to get AI-powered Instagram strategies, reels scripts, and growth playbooks tailored to your brand.",
  },
  header: {
    brand: "InstaGrow",
    cta: "Join waitlist",
    localeSwitcher: {
      label: "Switch language",
      shortNames: {
        en: "EN",
        ru: "RU",
      },
      localeNames: {
        en: "English",
        ru: "Russian",
      },
    },
  },
  hero: {
    title: "Grow any Instagram account, the smart way",
    description:
      "Get a growth strategy tailored to your audience and generate high-performing Reels with one click.",
    cta: "Join the waitlist",
    rotatingWords: ["views", "followers", "engagement", "sales"],
    imageAlt: "Instagram growth preview",
  },
  whatWeDo: {
    title: "What can InstaGrow do for you?",
    steps: [
      {
        title: "Create a strategy",
        description:
          "We turn your business goals, niche, and audience insights into a clear Instagram growth playbook tailored to your brand.",
        imageAlt: "Strategy creation flow diagram",
      },
      {
        title:
          "Generate Reels scripts and posts for thousands of views with one click",
        description:
          "InstaGrow instantly crafts ready-to-post scripts, captions, and content calendars that are optimized for reach, engagement, and conversions.",
      },
    ],
  },
  valueProp: {
    title: "Why can't I just do this with ChatGPT?",
    description:
      "You can try — but only our system gives you the ingredients creators use to grow consistently without guesswork.",
    checklist: [
      "A proprietary unpacking strategy used by top producers worldwide",
      "A detailed report with a thoughtful structure and a step-by-step plan to grow your blog",
      "Reels templates that have hit millions of views — for any niche",
    ],
  },
  waitlist: {
    title: "Be the first to try and finally get results",
    description:
      "Join our waitlist and get notified when the app is launched. No spam, no newsletter.",
    emailPlaceholder: "Enter your email",
    cta: "Join waitlist",
  },
} satisfies Dictionary

export default dictionary
