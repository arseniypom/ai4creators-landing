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
    eyebrow: "Your AI co-pilot for Instagram growth",
    titlePrimary: "Grow your Instagram",
    titleHighlight: "smarter with AI",
    description:
      "InstaGrow helps creators and SMM professionals boost reach, engagement, and content strategy — all powered by AI.",
    cta: "Join the waitlist",
  },
  howItWorks: {
    title: "How It Works",
    description: "Launch your creator business in just two simple steps",
    steps: [
      {
        title: "Create Your Shop",
        description:
          "Set up your personalized creator shop in minutes. Choose your branding, add your products or services, and customize everything to match your unique style. No coding or technical skills required.",
        highlights: [
          "Custom branding and design",
          "Easy product management",
          "Built-in payment processing",
        ],
        icon: "sparkles",
      },
      {
        title: "Launch & Grow",
        description:
          "Share your shop with your audience and start earning. Access powerful analytics, marketing tools, and community features to help you grow your creator business and connect with your fans.",
        highlights: [
          "Real-time analytics dashboard",
          "Marketing automation tools",
          "Community engagement features",
        ],
        icon: "rocket",
      },
    ],
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
      "You can try — but only our system includes:",
    columns: {
      instagrow: "InstaGrow",
      chatgpt: "ChatGPT",
    },
    features: [
      {
        label: "A thoughtful intake to unpack your project and capture every detail",
        instagrow: true,
        chatgpt: false,
      },
      {
        label:
          "Marketing analysis distilled from today's top experts (like taking 100 courses on marketing, audiences, and content in one go)",
        instagrow: true,
        chatgpt: false,
      },
      {
        label: "Reels scripts generated from proven viral formats tailored to your niche",
        instagrow: true,
        chatgpt: false,
      },
      {
        label: "Deep understanding of your brand context and goals",
        instagrow: true,
        chatgpt: false,
      },
      {
        label:
          "Natural tone of voice, clear structure, attention hooks, and action-driving CTAs",
        instagrow: true,
        chatgpt: false,
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Everything you need to know about InstaGrow before you join the waitlist.",
    items: [
      {
        question: "How much does it cost to get started?",
        answer:
          "Joining the waitlist is free. When InstaGrow launches, you'll get transparent pricing and a generous trial so you can explore the platform before upgrading.",
      },
      {
        question: "Do I need technical skills to use InstaGrow?",
        answer:
          "Not at all. InstaGrow guides you through a simple onboarding flow and handles the heavy lifting. If you can answer a few questions about your brand, you can use InstaGrow.",
      },
      {
        question: "What types of content can I create with InstaGrow?",
        answer:
          "You can generate viral-ready Reels scripts, captions, and content plans tailored to your audience. We continuously expand formats to cover the trends that matter.",
      },
      {
        question: "How do payments and monetization work?",
        answer:
          "You'll be able to connect your preferred payment provider when monetization tools roll out. Until then, you can focus on audience growth and content quality.",
      },
      {
        question: "Can I customize the strategy to fit my brand voice?",
        answer:
          "Yes. InstaGrow learns from your inputs and adapts tone, messaging, and creative angles so the strategy feels true to your brand.",
      },
      {
        question: "What kind of support do you offer?",
        answer:
          "Early users will receive priority onboarding help, best-practice playbooks, and direct support from our team as we refine the product together.",
      },
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
