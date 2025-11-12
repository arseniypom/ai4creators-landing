import type { Dictionary } from "./types"

const dictionary = {
  cta: {
    pay_now: "I'm ready",
  },
  dialog: {
    title: "Enter your email",
    email: "Email",
    submit: "Submit",
    cancel: "Cancel",
    error: "Please try again",
  },
  success: {
    message: {
      purchase_flow:
        "We’ll contact you within 24 hours to send the payment link and deliver your order.",
    },
  },
  metadata: {
    title: "InstaGrow — Smart Instagram Growth Companion",
    description:
      "Join the InstaGrow waitlist to get AI-powered Instagram strategies, reels scripts, and growth playbooks tailored to your brand.",
  },
  header: {
    brand: "InstaGrow",
    cta: "Join beta",
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
    titlePrimary: "Stop guessing what to post.",
    titleHighlight: "Start getting results.",
    description:
      "Say goodbye to one-off posts and chaotic content plans. InstaGrow builds data-driven strategy + creator-tested content for your niche and your goal.",
    cta: "Get early access",
  },
  howItWorks: {
    title: "How It Works",
    description:
      "Get a deep marketing research, and generate viral Reels scripts with 1 click",
    steps: [
      {
        title: "Marketing Strategy",
        subtitle: "Finally know what to post — and why it works.",
        description:
          "Complete a short brief, InstaGrow turns it into a strategy built for your goals.",
        preHighlights: "You’ll get:",
        highlights: [
          "🎯 Audience insights — know who your followers are and what drives them.",
          "🧭 Brand positioning — define your voice and stand out.",
          "🗓️ Content strategy — formats and ideas that fit your goal.",
          "💬 Profile optimization — turn your Instagram profile into a magnet.",
        ],
        icon: "sparkles",
      },
      {
        title: "Content Engine",
        subtitle: "Turn insights into viral Reels — in one click.",
        description:
          "Once your research is done, InstaGrow writes content that sounds like you and performs like top creators.",
        preHighlights: "You’ll get:",
        highlights: [
          "⚡ Reels scripts — built from viral patterns in your niche.",
          "🧩 Instant generation — your idea becomes a Reel in seconds.",
          "🎥 Hooks, stories, CTAs — ready to shoot and perform.",
          "✏️ Quick edits — change tone, length, or format in seconds.",
        ],
        icon: "rocket",
      },
    ],
  },
  screenshots: {
    title: "See InstaGrow in Action",
    description:
      "From creating a project to getting your strategy report — a quick peek at the product flow.",
    items: [
      {
        title: "Project creation",
        description: "Set up your Instagram content workspace in seconds.",
        imageSrc: "/images/screenshots/create-a-project.png",
      },
      {
        title: "Brief",
        description: "Answer guided questions to build your strategy foundation.",
        imageSrc: "/images/screenshots/brief.png",
      },
      {
        title: "Strategy report",
        description: "Comprehensive insights and a clear action plan.",
        imageSrc: "/images/screenshots/content-strategy-v2-1.png",
      },
      {
        title: "Strategy report",
        description: "Audience insights, pillars and formats tailored to you.",
        imageSrc: "/images/screenshots/content-strategy-v2-2.png",
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
    title: "Why not just use ChatGPT?",
    description: [
      "Because ChatGPT gives you text — not results.",
      "Our model was trained on hundreds of proven content frameworks — the same strategies used in top marketing courses and viral creators’ playbooks.",
      "So you don’t have to guess, prompt, or rewrite — it just works.",
    ],
    columns: {
      instagrow: "InstaGrow",
      chatgpt: "ChatGPT",
    },
    features: [
      {
        label:
          "Trained on real viral content patterns — knows what actually works",
        instagrow: true,
        chatgpt: false,
      },
      {
        label:
          "Understands your niche, audience & brand tone",
        instagrow: true,
        chatgpt: false,
      },
      {
        label: "Builds a full content funnel (not random ideas)",
        instagrow: true,
        chatgpt: false,
      },
      {
        label:
          "No prompt engineering needed — guided brief does the work for you",
        instagrow: true,
        chatgpt: false,
      },
      {
        label: "Saves hours of manual tweaking & rewrites",
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
    title: "Join our Beta launch today",
    description:
      "Pay $9 now & get your first Reels results in 24h + bonuses",
    emailPlaceholder: "Enter your email",
    cta: "Join beta",
    helper_text:
      "or leave your email and be the first to know when we launch",
    rotatingWords: ["views", "followers", "engagement", "sales"],
  },
  pricing: {
    title: "Pricing",
    badgePopular: "Best value",
    availableSoon: "Available soon",
    ctaFirstCard: "Get it now",
    moneybackNote: "Money‑back guarantee",
    tiers: [
      {
        name: "Early Access + Bonuses 🎉",
        subtitle: "Limited time offer",
        price: 9,
        period: "single payment",
        benefits: [
          "In-depth profile report",
          "Content strategy",
          "10 viral reels scripts",
          "1mo Pro access when we launch",
        ],
      },
      {
        name: "Personal",
        subtitle: "Perfect for solo-creators & experts",
        price: 9,
        period: "/ month",
        label: "Available soon",
        benefits: [
          "1 account",
          "1 deep Marketing Research report",
          "10 Reels scripts + 10 post ideas per month",
          "Weekly trending audios",
        ],
      },
      {
        name: "Pro",
        subtitle: "Perfect for SMMs & small teams",
        price: 39,
        period: "/ month",
        label: "Available soon",
        highlight: true,
        benefits: [
          "Up to 5 accounts",
          "5 deep Marketing Research reports",
          "50 Reels scripts monthly (shared across clients)",
          "Weekly trending audios",
          "30-day content calendar",
          "Export to Notion or client PDF",
        ],
      },
    ],
  },
} satisfies Dictionary

export default dictionary
