export interface CV {
  name: string;
  title: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  personalWebsiteUrl: string;
  contact: Contact;
  work: Work[];
  education: Education[];
  skills: string[];
}

export interface Contact {
  email: string;
  tel: string;
  social: Social[];
}

export interface Social {
  name: string;
  url: string;
}

export interface Work {
  company: string;
  link: string;
  title: string;
  start: string;
  end: string | null;
  description: string;
  achievements?: string[];
  badges?: string[];
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string | null;
}

export const CV_DATA: CV = {
  name: "Joshua Jones",
  title: "Senior Full Stack Engineer",
  location: "Toronto, ON, Canada",
  locationLink: "https://www.google.com/maps/place/Toronto,+ON",
  about:
    "Senior full-stack engineer and founder-builder shipping clean, fast SaaS products end-to-end — from architecture and APIs to pixel-level UI polish.",
  summary: `Senior full-stack engineer with 6+ years building and scaling SaaS products from concept to production. I specialize in modern web stacks including Next.js, React, Node.js, Prisma, GraphQL, and PostgreSQL.

I enjoy owning problems end-to-end — from product design and APIs to frontend UX and deployment. My work spans multi-tenant enterprise platforms and founder-led SaaS products.

Highlights include building white-label SaaS systems used by global brands and launching real products such as SlipCheck and Precision.`,

  personalWebsiteUrl: "https://precision.to",

  contact: {
    email: "mrjoshuajones@protonmail.com",
    tel: "+1-438-458-8808",
    social: [
      { name: "GitHub", url: "https://github.com/joshjones-codes" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/joshuajoness" },
      { name: "SlipCheck", url: "https://slipcheck.pro" },
      { name: "Precision", url: "https://precision.to" },
    ],
  },

  work: [
    {
      company: "Boardera",
      link: "https://boardera.ca",
      title: "Full Stack Developer",
      start: "June 2020",
      end: "Present",
      description:
        "Lead development of a multi-tenant white-label SaaS platform for electronics manufacturers powering multiple global brands.",

      achievements: [
        "Led development of a multi-tenant white-label SaaS platform used by multiple brands, owning features end-to-end from requirements to production rollout.",
        "Architected scalable backend and frontend systems across Meteor, Node.js, and GraphQL enabling rapid client onboarding and customization.",
        "Improved maintainability and delivery speed through pragmatic architecture decisions, refactors, and development standards.",
        "Strengthened engineering quality through code reviews, mentorship, and collaborative engineering practices.",
        "Delivered complex business-critical workflows including pricing, quoting logic, and performance improvements while maintaining clean UX and operational reliability.",
      ],

      badges: [
        "Meteor",
        "Node.js",
        "React",
        "GraphQL (Apollo)",
        "tRPC",
        "Zod",
        "Prisma",
        "PostgreSQL",
        "MongoDB",
        "Temporal",
        "ERP Integrations",
        "Odoo",
        "xTuple",
        "AWS",
        "Docker",
        "Jest",
        "Cypress",
      ],
    },

    {
      company: "SlipCheck",
      link: "https://slipcheck.pro",
      title: "Founder / Developer",
      start: "2023",
      end: "Present",
      description:
        "Compliance SaaS for snow-removal companies with evidence-grade logging, GPS timestamps, and automated reporting.",

      achievements: [
        "Built a mobile-first compliance platform with GPS + timestamp logging and automated reporting workflows.",
        "Designed a system for generating standardized compliance reports improving audit readiness and reducing administrative overhead.",
        "Shipped a real product to real users and iterated rapidly through founder-led product development.",
      ],

      badges: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "Supabase",
        "Tailwind",
        "SaaS",
        "Product",
      ],
    },

    {
      company: "Precision",
      link: "https://precision.to",
      title: "Founder / Developer",
      start: "2024",
      end: "Present",
      description:
        "Bodybuilding companion app with nutrition tracking, AI-assisted logging and insights, journaling, and physique progress tracking.",

      achievements: [
        "Built a modern consumer SaaS for nutrition tracking and progress monitoring designed for consistent daily engagement.",
        "Implemented AI-assisted flows to reduce logging friction and improve adherence.",
        "Owned product design and engineering end-to-end including onboarding flows, paywall tiers, data models, UI system, and deployment.",
      ],

      badges: [
        "Next.js",
        "Prisma",
        "Supabase",
        "Apollo GraphQL",
        "Tailwind",
        "SaaS",
      ],
    },

    {
      company: "Shine Web Creations",
      link: "https://www.shinewebcreations.com/",
      title: "Full Stack Developer",
      start: "November 2019",
      end: "April 2020",
      description:
        "Built responsive React frontends and Node.js APIs for SMB clients with integrations across payments and operational systems.",

      achievements: [
        "Developed responsive React frontends and Node.js APIs for client projects with a focus on usability and delivery speed.",
        "Integrated third-party payment and logistics APIs improving client conversion and operational workflows.",
        "Worked directly with business stakeholders to translate requirements into production features.",
      ],

      badges: [
        "React",
        "Node.js",
        "REST APIs",
        "Payments",
        "Integrations",
        "JavaScript",
      ],
    },
  ],

  education: [
    {
      school: "Trent University",
      degree: "Philosophy & Business Administration",
      start: "2014",
      end: "2018",
    },
    {
      school: "Haiku Academy",
      degree: "Full-Stack Web Development Bootcamp",
      start: "2019",
      end: "2019",
    },
  ],

  skills: [
    "Node.js",
    "Express.js",
    "Prisma",
    "tRPC",
    "Zod",
    "GraphQL (Apollo)",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "Temporal",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Zustand",
    "React Hook Form",
    "AWS",
    "Vercel",
    "Supabase",
    "Docker",
    "Jest",
    "Cypress",
    "Git/GitHub/Bitbucket",
    "Agile/Scrum",
  ],
};
