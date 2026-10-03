// CV content shown in the in-site viewer. Contact details come from site.ts,
// so the Upwork build never contains them.
export const cv = {
  name: 'Ahmed Mohamed Amin',
  title: 'Frontend Engineer · React & Next.js',
  location: 'Giza, Egypt',
  summary:
    'Frontend Engineer with 4+ years building production React and Next.js applications across AI, SaaS and enterprise platforms. Currently part of the team building a React 19 + Vite platform for configuring AI chat agents. Consistent track record of improving performance by 30 to 60%, delivering bilingual RTL interfaces, and integrating complex API-driven workflows at scale.',
  experience: [
    {
      company: 'Lucidya',
      role: 'Frontend Engineer',
      meta: 'Full-time, Remote · Jeddah, Saudi Arabia',
      period: 'Jan 2026 - Present',
      points: [
        'Build core frontend features, as part of a cross-functional squad, for a React 19 + Vite SPA powering an AI chat-agent configuration platform: agent identity, guardrails, knowledge sources, webhooks, human handoff flows and audit logs.',
        'Built a token-based design system of 23+ reusable MUI components (DataTable, DateRangePicker, multi-select and more) that the team uses across all 23 feature pages, keeping theming consistent and speeding up feature work for everyone.',
        'Delivered full bilingual support (English/Arabic) with RTL layout switching, directional icon mirroring and CLDR-compliant plural rules.',
        'Implemented route-level code splitting, lazy loading with chunk-retry fallbacks and image optimization, reducing total asset size by 60% and eliminating post-deploy stale-chunk errors.',
        'Standardized form architecture across 15+ complex flows using React Hook Form and Zod, unifying validation, error handling and API submission patterns.',
        'Write Vitest and React Testing Library tests for shared components and critical flows; collaborate with backend, design and QA in agile sprints through pull requests, code reviews and Bitbucket Pipelines CI.',
      ],
    },
    {
      company: 'Dussur',
      role: 'Mid-Level Frontend Developer',
      meta: 'Remote · Riyadh, Saudi Arabia · started part-time, then full-time',
      period: 'Jun 2023 - Dec 2025',
      points: [
        'Architected and launched the company website from scratch with Next.js and Tailwind CSS, achieving 95+ Lighthouse performance scores with full responsiveness.',
        'Engineered role-based authentication and access control for three user groups (customers, admins, freelancers), streamlining CRUD operations and closing cross-role permission gaps.',
        'Reduced initial load time by 30 to 35% and removed most unnecessary re-renders on high-traffic pages through code splitting, lazy loading and targeted memoization.',
      ],
    },
    {
      company: 'Huawei',
      role: 'Junior Frontend Developer',
      meta: 'Giza, Egypt',
      period: 'Jun 2022 - Feb 2024',
      points: [
        "Delivered production React features in a 5-person frontend team on Etisalat's NOC Knowledgebase and Topology Viewer, internal tools used daily by network operations teams.",
        'Built search, filtering and user guide modules for the NOC Knowledgebase, improving discoverability of operational documentation and reducing time-to-resolution.',
        'Contributed map-based visualizations, path tracing and connection detail views to an interactive network topology viewer.',
        'Partnered with product and QA to define acceptance criteria and write UAT cases, contributing to a 10 to 15% reduction in post-release UI defects.',
      ],
    },
  ],
  skills: [
    { label: 'Languages', value: 'JavaScript (ES2022+), TypeScript, HTML5, CSS3' },
    {
      label: 'Frameworks & Libraries',
      value:
        'React 19, Next.js 14, Redux Toolkit, TanStack Query, Zustand, React Hook Form, Zod, Tailwind CSS, MUI v7, shadcn/ui, Framer Motion, Leaflet, NextAuth.js',
    },
    { label: 'Build & Tooling', value: 'Vite, Webpack, ESLint, Prettier, Vitest, React Testing Library, Git, GitHub, Bitbucket' },
    { label: 'APIs & Practices', value: 'REST, WebSockets, JWT auth, i18next (RTL/LTR), Agile/Scrum, code review, CI/CD' },
  ],
  projects: [
    { name: 'D-Wash (client)', stack: 'React, TypeScript, Tailwind CSS, i18next', text: 'Bilingual car wash platform with customer, admin and provider portals: booking, payments, discount codes, real-time chat and map location picking. Rated 5.0 by the client.' },
    { name: 'Mehna (client)', stack: 'React, React Native, TypeScript, React Query, WebSockets', text: 'Services marketplace with customer web app, provider portal, admin dashboard and React Native mobile app: bookings, real-time chat and maps, in Arabic and English.' },
    { name: 'Lamo2a5za Seafood', stack: 'Next.js, TypeScript, Tailwind CSS', text: 'Arabic-first landing page for a Cairo seafood brand with menu, reviews, branches and one-tap delivery ordering.' },
    { name: 'Casa Colina, Abkhazia', stack: 'Next.js, TypeScript, i18n', text: 'Editorial travel site for stays, car rental and local experiences in Russian, English and Arabic, with an admin dashboard.' },
  ],
  education: { school: 'Modern Academy, Maadi, Cairo', degree: 'Bachelor of Science in Computer Science' },
  languages: 'Arabic (native), English (fluent)',
}
