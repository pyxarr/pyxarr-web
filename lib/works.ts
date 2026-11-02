export interface Overview {
  client: string;
  services: string;
  industry: string;
  role: string;
}

export interface About {
  headline: string;
  body: string;
}

export interface Challenge {
  heading: string;
  body: string;
  bullets: string[];
}

export interface Approach {
  heading: string;
  body: string;
}

export interface Solution {
  heading: string;
  body: string;
}

export interface Work {
  slug: string;
  name: string;
  year: string;
  category: string;
  overview: Overview;
  about: About;
  challenge: Challenge;
  approach: Approach;
  solution: Solution;
}

export const works: Work[] = [
  {
    slug: "arclune",
    name: "Arclune",
    year: "2026",
    category: "SaaS / Analytics",
    overview: {
      client: "Lumenix",
      services: "UI/UX Design, Product Strategy, Design System",
      industry: "SaaS / Analytics",
      role: "End-to-end product design",
    },
    about: {
      headline: "Redesigning a complex analytics dashboard for clarity at scale",
      body: "Lumenix approached us with a mature analytics product that had grown feature-rich but visually inconsistent. The dashboard served enterprise customers who needed to monitor thousands of metrics in real time. Our mandate was to redesign the core interface, establish a cohesive design system, and improve the information hierarchy without disrupting existing workflows.",
    },
    challenge: {
      heading: "Information density versus cognitive load",
      body: "The legacy dashboard packed dense data tables, nested navigation, and real-time charts into a single view. Power users relied on muscle memory while new customers struggled to find key actions. The existing design system had fragmented across three years of feature additions, resulting in inconsistent spacing, typography, and component behavior.",
      bullets: [
        "Over 200 unique screen states with no unified component library",
        "Critical actions buried in multi-level menus",
        "Color system lacked semantic meaning for data states",
        "Responsive behavior broken below 1440px viewport",
      ],
    },
    approach: {
      heading: "Audit, systematize, then redesign",
      body: "We started with a full interface audit mapping every component, pattern, and user flow. A new design system was built in Figma with tokens for color, spacing, and typography that mapped directly to the codebase. We then redesigned the core dashboard using a modular card-based layout that prioritizes the most frequent tasks while keeping advanced features accessible through progressive disclosure.",
    },
    solution: {
      heading: "A scalable dashboard that grows with the product",
      body: "The new Arclune dashboard reduces time-to-insight by 40 percent through a reorganized navigation, semantic color coding for alert states, and a responsive grid that adapts from ultrawide monitors to tablet views. The design system now powers three product lines with consistent components, cutting design-to-dev handoff time in half.",
    },
  },
  {
    slug: "quantis",
    name: "Quantis",
    year: "2025",
    category: "Fintech",
    overview: {
      client: "Vordex",
      services: "Web Design, Development",
      industry: "Fintech",
      role: "Design and development",
    },
    about: {
      headline: "Building a modern investment tracking platform from the ground up",
      body: "Vordex needed a consumer-facing platform that simplified portfolio tracking across multiple asset classes. The product had to feel trustworthy enough for serious investors while remaining approachable for newcomers. We handled the full design and development cycle from brand touchpoints to production deployment.",
    },
    challenge: {
      heading: "Trust and clarity in a crowded market",
      body: "Fintech users are skeptical by default. The platform had to communicate security, reliability, and transparency at every touchpoint. Complex financial data needed to be presented in a way that felt intuitive rather than overwhelming. Regulatory copy requirements added constraints to the UI.",
      bullets: [
        "Real-time multi-asset portfolio aggregation with sub-second updates",
        "KYC and compliance flows that could not feel bureaucratic",
        "Data visualization for both novice and expert mental models",
        "Dark-mode-first design for extended trading sessions",
      ],
    },
    approach: {
      heading: "Design for confidence, build for speed",
      body: "We established a visual language built on restraint: generous whitespace, a restricted color palette with semantic meaning, and typography that guides the eye to what matters. The frontend was built with Next.js and a type-safe API layer to ensure data integrity. Every interaction was prototyped and tested with target users before a line of production code was written.",
    },
    solution: {
      heading: "A platform that feels like a premium financial tool",
      body: "Quantis launched with a 4.8-star app store rating and processed over $200M in tracked assets in the first quarter. The onboarding flow completes in under three minutes. The component library is now the foundation for Vordex's expanding product suite including tax optimization and estate planning features.",
    },
  },
  {
    slug: "vexora",
    name: "Vexora",
    year: "2025",
    category: "E-commerce",
    overview: {
      client: "Stolta",
      services: "Brand Identity, Web Design, Development",
      industry: "E-commerce / Lifestyle",
      role: "Full digital build",
    },
    about: {
      headline: "Crafting a lifestyle brand that converts browsers into believers",
      body: "Stolta wanted to launch a direct-to-consumer brand for curated lifestyle products. They had the product sourcing and logistics solved but needed a complete digital presence: brand identity, e-commerce site, and a content strategy that would build community around the products. We delivered the full stack from logo to checkout.",
    },
    challenge: {
      heading: "Standing out in a saturated DTC landscape",
      body: "The lifestyle category is crowded with lookalike brands using similar aesthetics. Stolta needed a distinct visual voice that could scale across product categories without feeling generic. The site had to drive conversions on first visit while supporting a content-led retention strategy.",
      bullets: [
        "Brand system flexible enough for seasonal collections",
        "Editorial content seamlessly integrated with product pages",
        "Checkout optimized for mobile-first traffic",
        "Internationalization ready for EU and APAC expansion",
      ],
    },
    approach: {
      heading: "Brand as the product differentiator",
      body: "We developed a brand identity rooted in material honesty — a typographic logo, a restrained color palette drawn from natural pigments, and a photographic style that emphasizes texture over aspiration. The e-commerce experience was built on Shopify with a custom theme that blends editorial storytelling with frictionless purchasing. Content modules allow the brand to publish lookbooks, maker stories, and guides without developer involvement.",
    },
    solution: {
      heading: "A brand that sells and a site that scales",
      body: "Vexora exceeded first-year revenue targets by 60 percent. Repeat purchase rate sits at 34 percent driven by the content ecosystem. The modular theme architecture allowed Stolta to launch three seasonal collections without design debt. The brand system has been extended to physical packaging, pop-up retail, and a wholesale portal.",
    },
  },
  {
    slug: "zentrova",
    name: "Zentrova",
    year: "2024",
    category: "Mobile App",
    overview: {
      client: "Halcyon",
      services: "Mobile App Design, Prototyping",
      industry: "Health / Wellness",
      role: "UI/UX design",
    },
    about: {
      headline: "Designing a wellness companion that feels personal not clinical",
      body: "Halcyon envisioned a mobile app that helps users build sustainable wellness habits through gentle guidance rather than rigid tracking. The target audience was people who had tried and abandoned fitness apps before. The experience needed to feel supportive, adaptive, and respectful of user autonomy.",
    },
    challenge: {
      heading: "Avoiding the guilt trap of habit apps",
      body: "Most wellness apps rely on streaks, badges, and notifications that create pressure. Halcyon wanted the opposite: an experience that adapts to the user's rhythm and celebrates small wins without punishment for missed days. The challenge was designing an engagement model that sustains long-term use without gamification mechanics that backfire.",
      bullets: [
        "Onboarding that learns user intent without lengthy questionnaires",
        "Adaptive content that shifts tone based on engagement patterns",
        "No push notifications — user controls all communication",
        "Accessibility first for users with varying motor and cognitive abilities",
      ],
    },
    approach: {
      heading: "Designing for relationship not retention",
      body: "We mapped the emotional journey of habit formation and designed interactions that mirror a supportive coach rather than a taskmaster. The interface uses progressive disclosure to reveal depth only when the user seeks it. Micro-interactions provide delight without distraction. The prototype was validated through a six-week longitudinal study with 200 participants.",
    },
    solution: {
      heading: "An app people return to because they want to",
      body: "Zentrova achieved 68 percent 90-day retention — more than double the category average. Users report the app feels like a calm companion rather than another demand on their attention. The design system and interaction patterns are now being adapted for Halcyon's enterprise wellness platform.",
    },
  },
];