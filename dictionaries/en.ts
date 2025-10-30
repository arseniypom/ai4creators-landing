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
    description:
      "Get a deep marketing research, a personalized 1-month content plan, and generate viral Reels scripts with 1 click",
    steps: [
      {
        title: "Strategy: research and 1-month plan",
        description:
          "Complete a guided brief. AI analyzes your niche and goals and delivers a detailed report with deep market research and a personalized 1‑month content plan.",
        highlights: [
          "Guided brief that captures all key context — niche, audience, offers, constraints",
          "Deep marketing research tailored to your niche",
          "Personalized 1-month content plan",
          "Profile design (bio, highlights)",
          "Audience analysis: habits, interests, pains, personas",
          "Plan tailored to your goals: follower growth, engagement, clients",
        ],
        icon: "sparkles",
      },
      {
        title: "Generate viral Reels scripts and posts",
        description:
          "All insights from the strategy step are already in the system, so AI deeply understands your project. Generate from the plan or type your Reels idea, click ‘Generate’, and get a ready-to-use script with the right hook, engaging body, and a clear CTA.",
        highlights: [
          "Uses your full strategy context — AI knows your project",
          "One‑click generation from the plan or your idea",
          "Scripts include a strong hook, engaging body, and CTA",
          "Precise edits: tweak yourself or ask AI (e.g., change the hook, add details)",
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
        label: "Guided brief that captures all key context — niche, audience, offers, constraints",
        instagrow: true,
        chatgpt: false,
      },
      {
        label:
          "Expert market analysis tailored to your niche and competitors",
        instagrow: true,
        chatgpt: false,
      },
      {
        label: "Reels scripts from proven viral formats, tailored to your niche",
        instagrow: true,
        chatgpt: false,
      },
      {
        label: "Understands your brand context and goals to stay on‑message",
        instagrow: true,
        chatgpt: false,
      },
      {
        label:
          "Natural tone, clear structure, strong hooks and action‑driving CTAs",
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
        question: "Can I customize the strategy to fit my brand voice?",
        answer:
          "Yes. InstaGrow learns from your inputs and adapts tone, messaging, and creative angles so the strategy feels true to your brand.",
      },
    ],
  },
  waitlist: {
    title: "Be the first to try — and finally see results!",
    description:
      "Join our waitlist and get notified when the app is launched.\nNo spam, no newsletter.",
    emailPlaceholder: "Enter your email",
    cta: "Join waitlist",
  },
} satisfies Dictionary

export default dictionary
