export type Lang = 'en' | 'ar'

export type Project = {
  id: string
  title: string
  meta: string
  summary: string
  highlights: string[]
  stack: string[]
  image?: string
  mobile?: string
  badge?: string
  live?: string
  code?: string
  note?: string
}

export type Job = {
  company: string
  role: string
  period: string
  place: string
  note?: string
  points: string[]
}

const stackLucidya = ['React 19', 'Vite', 'TypeScript', 'MUI v7', 'React Hook Form', 'Zod', 'i18next', 'Vitest']

export const content = {
  en: {
    nav: { work: 'Work', services: 'Services', experience: 'Experience', contact: 'Contact', cv: 'CV' },
    hero: {
      eyebrow: 'Frontend Engineer',
      title: ['I build fast, polished', 'React & Next.js products.'],
      sub: 'SaaS dashboards, AI platforms and bilingual Arabic/English interfaces with proper RTL. Right now I am building an AI agent platform at Lucidya.',
      primary: 'See my work',
      contact: 'Get in touch',
      upwork: 'Hire me on Upwork',
      available: 'Available for freelance work',
      stats: [
        { value: '3+', label: 'years shipping production React' },
        { value: '100%', label: 'Job Success on Upwork' },
        { value: '5.0', label: 'average client rating' },
        { value: 'EN / AR', label: 'interfaces with full RTL' },
      ],
    },
    work: {
      kicker: 'Selected work',
      title: 'Products I have built',
      live: 'Live site',
      code: 'Source',
      private: 'Internal product',
    },
    projects: [
      {
        id: 'lucidya',
        title: 'AI Agent Configuration Platform',
        meta: 'Lucidya · 2026 · Frontend Engineer',
        summary:
          'A React 19 platform where businesses set up their AI chat agents: identity, guardrails, knowledge sources, webhooks, human handoff and audit logs.',
        highlights: [
          'Built a token-based design system of 23+ MUI components used on every feature page',
          'Full English/Arabic support: RTL switching, icon mirroring and correct plural rules',
          'Route-level code splitting with chunk-retry fallbacks: 60% smaller assets and no stale-chunk errors after deploys',
          'Unified 15+ complex forms on one React Hook Form + Zod architecture',
        ],
        stack: stackLucidya,
        note: 'Internal product, not publicly available. The preview is an illustration.',
      },
      {
        id: 'dussur',
        title: 'Dussur Company Website',
        meta: 'Dussur · Next.js · Bilingual',
        summary:
          'Marketing site for a Saudi software company, built from scratch. English and Arabic, dark and light themes, and an interactive globe hero.',
        highlights: [
          '95+ Lighthouse performance score',
          'Full RTL Arabic version that mirrors the layout properly',
          'Fully responsive across mobile, tablet and desktop',
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
        image: '/projects/dussur.webp',
        mobile: '/projects/dussur-m.webp',
        live: 'https://dussur.sa/en',
      },
      {
        id: 'lamo',
        title: 'Lamo2a5za Seafood',
        meta: 'Restaurant brand · Next.js · Arabic-first',
        summary:
          'Arabic-first landing page for a Cairo seafood brand with over a million social followers: menu, family meals, reviews and branches, with one-tap delivery ordering.',
        highlights: [
          'Designed around conversion: order buttons and phone ordering always in reach',
          'Rich, food-first visuals that stay fast on mobile data',
          'Native Arabic typography and RTL layout',
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        image: '/projects/lamo.webp',
        mobile: '/projects/lamo-m.webp',
        live: 'https://lamo2a5za.vercel.app/',
      },
      {
        id: 'casa',
        title: 'Casa Colina, Abkhazia',
        meta: 'Travel & stays · Next.js · 3 languages',
        summary:
          'Editorial travel site for stays, car rental and local experiences on the Black Sea coast, in Russian, English and Arabic, with its own admin dashboard.',
        highlights: [
          'Magazine-style design with large photography and calm typography',
          'Three languages including a full RTL Arabic version',
          'Admin dashboard for listings and requests',
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
        image: '/projects/casa.webp',
        mobile: '/projects/casa-m.webp',
        live: 'https://abkhazia-travel.vercel.app',
        badge: 'In progress',
      },
      {
        id: 'oasis',
        title: 'The Wild Oasis',
        meta: 'Full-stack · Next.js 14 · Supabase',
        summary:
          'Booking platform for a luxury cabin hotel: live availability, Google sign-in, and reservations managed with Server Actions and optimistic UI.',
        highlights: [
          'Server Components and Server Actions for data and mutations',
          'OAuth authentication with NextAuth',
          'Date-range booking with live availability',
        ],
        stack: ['Next.js 14', 'Supabase', 'NextAuth.js', 'Tailwind CSS'],
        image: '/projects/oasis.webp',
        mobile: '/projects/oasis-m.webp',
        live: 'https://the-wild-oasis-cx.vercel.app/',
        code: 'https://github.com/Ahmed-Serag19/the-wild-oasis-customer',
      },
      {
        id: 'parking',
        title: 'Parking Reservation System',
        meta: 'Real-time · React · TypeScript',
        summary:
          'Gate, checkpoint and admin interfaces for a parking operator, with live zone availability over WebSockets and type-safe forms.',
        highlights: [
          'Real-time zone and admin updates over WebSockets',
          'Role-based screens for gates, employees and admins',
          'Tested with Vitest and React Testing Library',
        ],
        stack: ['React 18', 'TypeScript', 'Zustand', 'React Query', 'Zod', 'shadcn/ui'],
        image: '/projects/parking-diagram.webp',
        code: 'https://github.com/Ahmed-Serag19/parking-reservation-system',
      },
    ] as Project[],
    services: {
      kicker: 'Services',
      title: 'How I can help',
      items: [
        { title: 'SaaS dashboards & admin panels', body: 'Data tables, filters, role-based access, complex forms and API integration, built to stay maintainable.' },
        { title: 'Landing pages from Figma', body: 'Pixel-accurate, responsive and fast. 95+ Lighthouse is the target, not a bonus.' },
        { title: 'Arabic & RTL done right', body: 'Bilingual apps with proper mirroring, Arabic typography and i18n that does not break as the product grows.' },
        { title: 'Speeding up slow React apps', body: 'Code splitting, lazy loading and re-render fixes. I have cut load times by 30 to 60% on production apps.' },
      ],
    },
    experience: {
      kicker: 'Experience',
      title: 'Where I have worked',
      jobs: [
        {
          company: 'Lucidya',
          role: 'Frontend Engineer',
          period: 'Jan 2026 - Present',
          place: 'Remote · Jeddah, Saudi Arabia',
          points: [
            'Build core features of an AI chat-agent platform in React 19 and Vite',
            'Created the shared design system and the bilingual EN/AR experience',
            'Own performance, form architecture and tests for critical flows',
          ],
        },
        {
          company: 'Dussur',
          role: 'Frontend Developer',
          period: 'Jun 2023 - Dec 2025',
          place: 'Remote · Riyadh, Saudi Arabia',
          note: 'Started part-time alongside Huawei, then full-time.',
          points: [
            'Built the company website from scratch with Next.js (95+ Lighthouse)',
            'Role-based auth and access control for customers, admins and freelancers',
            'Cut initial load time by 30 to 35% with code splitting and memoization',
          ],
        },
        {
          company: 'Huawei',
          role: 'Junior Frontend Developer',
          period: 'Jun 2022 - Feb 2024',
          place: 'Giza, Egypt',
          points: [
            'Built features for Etisalat NOC Knowledgebase and Topology Viewer, used daily by network teams',
            'Map-based topology views, path tracing and search modules',
            'Helped cut post-release UI defects by 10 to 15%',
          ],
        },
      ] as Job[],
    },
    skills: {
      kicker: 'Toolbox',
      title: 'What I work with',
      groups: [
        { name: 'Core', items: ['React 19', 'Next.js', 'TypeScript', 'JavaScript'] },
        { name: 'UI', items: ['Tailwind CSS', 'MUI', 'shadcn/ui', 'Framer Motion', 'Design systems'] },
        { name: 'Data & forms', items: ['TanStack Query', 'Redux Toolkit', 'Zustand', 'React Hook Form', 'Zod', 'REST', 'WebSockets'] },
        { name: 'Quality', items: ['Vitest', 'React Testing Library', 'Vite', 'ESLint', 'CI/CD', 'Git'] },
        { name: 'Languages', items: ['i18next', 'RTL / LTR', 'Arabic typography'] },
      ],
    },
    reviews: {
      kicker: 'Client feedback',
      title: '5.0 on every Upwork job',
      items: [
        { quote: 'His React skills are top-notch, and he delivered a clean, user-friendly, and visually appealing app.', who: 'Car wash platform client' },
        { quote: 'Delivered a high-quality, responsive landing page using Next.js. The design was clean, functional, and aligned perfectly with our goals.', who: 'Software company client' },
        { quote: 'Ahmed was outstanding, having the patience to do all the small things we have asked for.', who: 'Landing page client' },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Have a project in mind?',
      sub: 'Send me your Figma, your repo or just the idea. I usually reply within a few hours.',
      upworkSub: 'Send me your Figma, your repo or just the idea on Upwork. I usually reply within a few hours.',
      email: 'Email me',
      whatsapp: 'WhatsApp',
      cv: 'Download CV',
    },
    footer: 'Built with React, TypeScript and Tailwind CSS.',
  },

  ar: {
    nav: { work: 'أعمالي', services: 'الخدمات', experience: 'الخبرات', contact: 'تواصل', cv: 'السيرة الذاتية' },
    hero: {
      eyebrow: 'مطوّر واجهات أمامية',
      title: ['أبني منتجات سريعة ومتقنة', 'بـ React و Next.js'],
      sub: 'لوحات تحكم SaaS ومنصات ذكاء اصطناعي وواجهات ثنائية اللغة عربي وإنجليزي بدعم كامل لاتجاه RTL. أعمل حاليًا على منصة وكلاء ذكاء اصطناعي في Lucidya.',
      primary: 'شاهد أعمالي',
      contact: 'تواصل معي',
      upwork: 'وظّفني على Upwork',
      available: 'متاح لمشاريع العمل الحر',
      stats: [
        { value: '+3', label: 'سنوات في تطوير React لمنتجات حقيقية' },
        { value: '100%', label: 'نسبة نجاح المشاريع على Upwork' },
        { value: '5.0', label: 'متوسط تقييم العملاء' },
        { value: 'AR / EN', label: 'واجهات بدعم كامل لـ RTL' },
      ],
    },
    work: {
      kicker: 'أعمال مختارة',
      title: 'منتجات قمت ببنائها',
      live: 'الموقع',
      code: 'الكود',
      private: 'منتج داخلي',
    },
    projects: [
      {
        id: 'lucidya',
        title: 'منصة إعداد وكلاء الذكاء الاصطناعي',
        meta: 'Lucidya · 2026 · مطوّر واجهات أمامية',
        summary:
          'منصة مبنية بـ React 19 تتيح للشركات إعداد وكلاء المحادثة الذكية: الهوية، الضوابط، مصادر المعرفة، الـ Webhooks، التحويل لموظف بشري وسجلات التدقيق.',
        highlights: [
          'بناء نظام تصميم من أكثر من 23 مكوّن MUI مستخدم في كل صفحات المنصة',
          'دعم كامل للعربية والإنجليزية: تبديل RTL، عكس الأيقونات وقواعد الجمع الصحيحة',
          'تقسيم الكود على مستوى الصفحات مع إعادة المحاولة عند فشل التحميل: حجم أقل بنسبة 60% وبدون أخطاء بعد النشر',
          'توحيد أكثر من 15 نموذجًا معقدًا على بنية واحدة باستخدام React Hook Form و Zod',
        ],
        stack: stackLucidya,
        note: 'منتج داخلي غير متاح للعامة. المعاينة رسم توضيحي.',
      },
      {
        id: 'dussur',
        title: 'الموقع الرسمي لشركة دسر',
        meta: 'دسر · Next.js · ثنائي اللغة',
        summary:
          'موقع تعريفي لشركة برمجيات سعودية، تم بناؤه من الصفر. عربي وإنجليزي، وضع داكن وفاتح، وواجهة رئيسية بكرة أرضية تفاعلية.',
        highlights: [
          'تقييم أداء أعلى من 95 على Lighthouse',
          'نسخة عربية كاملة بتخطيط معكوس بشكل صحيح',
          'متجاوب بالكامل على الجوال والتابلت والكمبيوتر',
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
        image: '/projects/dussur-ar.webp',
        mobile: '/projects/dussur-m.webp',
        live: 'https://dussur.sa/ar',
      },
      {
        id: 'lamo',
        title: 'لامؤاخذة للمأكولات البحرية',
        meta: 'مطعم · Next.js · عربي أولًا',
        summary:
          'صفحة هبوط عربية لعلامة مأكولات بحرية في القاهرة يتابعها أكثر من مليون شخص: المنيو، الوجبات العائلية، آراء العملاء والفروع، مع طلب دليفري بضغطة واحدة.',
        highlights: [
          'تصميم يركّز على الطلب: أزرار الطلب والاتصال دائمًا في المتناول',
          'صور أكل غنية مع سرعة تحميل ممتازة على الجوال',
          'خطوط عربية واتجاه RTL أصلي',
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        image: '/projects/lamo.webp',
        mobile: '/projects/lamo-m.webp',
        live: 'https://lamo2a5za.vercel.app/',
      },
      {
        id: 'casa',
        title: 'Casa Colina، أبخازيا',
        meta: 'سفر وإقامة · Next.js · 3 لغات',
        summary:
          'موقع سفر بطابع مجلّات للإقامة وتأجير السيارات والتجارب المحلية على ساحل البحر الأسود، بالروسية والإنجليزية والعربية، مع لوحة تحكم خاصة.',
        highlights: [
          'تصميم بأسلوب المجلات مع صور كبيرة وخطوط هادئة',
          'ثلاث لغات منها نسخة عربية كاملة بـ RTL',
          'لوحة تحكم لإدارة العروض والطلبات',
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
        image: '/projects/casa.webp',
        mobile: '/projects/casa-m.webp',
        live: 'https://abkhazia-travel.vercel.app',
        badge: 'قيد التطوير',
      },
      {
        id: 'oasis',
        title: 'The Wild Oasis',
        meta: 'Full-stack · Next.js 14 · Supabase',
        summary:
          'منصة حجز لفندق أكواخ فاخر: توفر لحظي للمواعيد، تسجيل دخول بجوجل، وإدارة الحجوزات عبر Server Actions مع تحديث فوري للواجهة.',
        highlights: [
          'استخدام Server Components و Server Actions للبيانات والتعديلات',
          'تسجيل دخول OAuth عبر NextAuth',
          'حجز بنطاق تواريخ مع عرض التوفر لحظيًا',
        ],
        stack: ['Next.js 14', 'Supabase', 'NextAuth.js', 'Tailwind CSS'],
        image: '/projects/oasis.webp',
        mobile: '/projects/oasis-m.webp',
        live: 'https://the-wild-oasis-cx.vercel.app/',
        code: 'https://github.com/Ahmed-Serag19/the-wild-oasis-customer',
      },
      {
        id: 'parking',
        title: 'نظام حجز المواقف',
        meta: 'لحظي · React · TypeScript',
        summary:
          'واجهات للبوابات ونقاط التفتيش ولوحة الإدارة لشركة مواقف سيارات، مع توفر المناطق لحظيًا عبر WebSockets ونماذج آمنة الأنواع.',
        highlights: [
          'تحديثات لحظية للمناطق والإدارة عبر WebSockets',
          'شاشات حسب الصلاحية للبوابات والموظفين والمديرين',
          'اختبارات باستخدام Vitest و React Testing Library',
        ],
        stack: ['React 18', 'TypeScript', 'Zustand', 'React Query', 'Zod', 'shadcn/ui'],
        image: '/projects/parking-diagram.webp',
        code: 'https://github.com/Ahmed-Serag19/parking-reservation-system',
      },
    ] as Project[],
    services: {
      kicker: 'الخدمات',
      title: 'كيف أقدر أساعدك',
      items: [
        { title: 'لوحات تحكم SaaS وأنظمة إدارة', body: 'جداول بيانات، فلاتر، صلاحيات حسب الدور، نماذج معقدة وربط مع الـ API، بكود سهل الصيانة.' },
        { title: 'صفحات هبوط من تصميم Figma', body: 'مطابقة للتصميم، متجاوبة وسريعة. تقييم 95+ على Lighthouse هو الهدف وليس إضافة.' },
        { title: 'عربي و RTL بالشكل الصحيح', body: 'تطبيقات ثنائية اللغة بعكس صحيح للتخطيط وخطوط عربية وترجمة لا تنكسر مع نمو المنتج.' },
        { title: 'تسريع تطبيقات React البطيئة', body: 'تقسيم الكود والتحميل الكسول وإصلاح إعادة الرسم الزائدة. قللت أوقات التحميل بنسبة 30 إلى 60% في منتجات حقيقية.' },
      ],
    },
    experience: {
      kicker: 'الخبرات',
      title: 'أين عملت',
      jobs: [
        {
          company: 'Lucidya',
          role: 'مطوّر واجهات أمامية',
          period: 'يناير 2026 - الآن',
          place: 'عن بُعد · جدة، السعودية',
          points: [
            'بناء الميزات الأساسية لمنصة وكلاء محادثة بالذكاء الاصطناعي باستخدام React 19 و Vite',
            'بناء نظام التصميم المشترك وتجربة العربي والإنجليزي',
            'مسؤول عن الأداء وبنية النماذج والاختبارات للمسارات الحرجة',
          ],
        },
        {
          company: 'دسر',
          role: 'مطوّر واجهات أمامية',
          period: 'يونيو 2023 - ديسمبر 2025',
          place: 'عن بُعد · الرياض، السعودية',
          note: 'بدأت بدوام جزئي بالتوازي مع هواوي، ثم بدوام كامل.',
          points: [
            'بناء موقع الشركة من الصفر باستخدام Next.js (أداء 95+ على Lighthouse)',
            'نظام صلاحيات وتسجيل دخول للعملاء والمديرين والمستقلين',
            'تقليل وقت التحميل الأولي بنسبة 30 إلى 35%',
          ],
        },
        {
          company: 'هواوي',
          role: 'مطوّر واجهات أمامية (Junior)',
          period: 'يونيو 2022 - فبراير 2024',
          place: 'الجيزة، مصر',
          points: [
            'تطوير ميزات لأنظمة NOC الخاصة باتصالات (قاعدة المعرفة وعارض الشبكة) المستخدمة يوميًا',
            'عروض خرائط للشبكة وتتبع المسارات ووحدات البحث',
            'المساهمة في تقليل أخطاء الواجهة بعد الإطلاق بنسبة 10 إلى 15%',
          ],
        },
      ] as Job[],
    },
    skills: {
      kicker: 'الأدوات',
      title: 'ما أعمل به',
      groups: [
        { name: 'الأساسيات', items: ['React 19', 'Next.js', 'TypeScript', 'JavaScript'] },
        { name: 'الواجهات', items: ['Tailwind CSS', 'MUI', 'shadcn/ui', 'Framer Motion', 'أنظمة التصميم'] },
        { name: 'البيانات والنماذج', items: ['TanStack Query', 'Redux Toolkit', 'Zustand', 'React Hook Form', 'Zod', 'REST', 'WebSockets'] },
        { name: 'الجودة', items: ['Vitest', 'React Testing Library', 'Vite', 'ESLint', 'CI/CD', 'Git'] },
        { name: 'اللغات', items: ['i18next', 'RTL / LTR', 'الخطوط العربية'] },
      ],
    },
    reviews: {
      kicker: 'آراء العملاء',
      title: 'تقييم 5.0 في كل مشروع على Upwork',
      items: [
        { quote: 'كان لي الشرف بالعمل مع أحمد، وكانت التجربة رائعة بكل المقاييس. أظهر مهارات استثنائية في تطوير الواجهات، وسلّم المشروع في الوقت المحدد وبجودة عالية.', who: 'عميل على Upwork' },
        { quote: 'مهاراته في React من الطراز الأول، وسلّم تطبيقًا نظيفًا وسهل الاستخدام وجذابًا بصريًا.', who: 'عميل منصة غسيل سيارات · مترجم' },
        { quote: 'سلّم صفحة هبوط عالية الجودة ومتجاوبة باستخدام Next.js، بتصميم نظيف ومتوافق تمامًا مع أهدافنا.', who: 'عميل شركة برمجيات · مترجم' },
      ],
    },
    contact: {
      kicker: 'تواصل',
      title: 'عندك مشروع؟',
      sub: 'ابعتلي تصميم Figma أو الـ repo أو حتى الفكرة بس. عادةً بردّ خلال ساعات قليلة.',
      upworkSub: 'ابعتلي تصميم Figma أو الـ repo أو حتى الفكرة على Upwork. عادةً بردّ خلال ساعات قليلة.',
      email: 'راسلني',
      whatsapp: 'واتساب',
      cv: 'تحميل السيرة الذاتية',
    },
    footer: 'مبني باستخدام React و TypeScript و Tailwind CSS.',
  },
}

export type Content = (typeof content)['en']
