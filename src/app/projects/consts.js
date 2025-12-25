export const PROJECTS = [
  {
    title: "Torus SSO",
    summary:
      "A Single Sign-On system that provides secure access across multiple platforms.",
    tags: ["confidential"],
    imageUrl: "/images/torus-sso.webp",
    overview:
      "Designed and developed a scalable Single Sign-On (SSO) solution that enables users to authenticate once and gain secure, seamless access to multiple interconnected platforms. This system minimizes repetitive logins, enhances user experience, and enforces robust security protocols like OAuth 2.0-inspired token management and encrypted session handling to prevent unauthorized access.",
    keyFeatures: [
      {
        label: "Client-Triggered Authentication Flow",
        description:
          "Initiates secure login sequences directly from client applications, supporting federated identity providers for cross-platform compatibility.",
      },
      {
        label: "High-Throughput Performance",
        description:
          "Optimized for handling concurrent user sessions with low latency, even under peak loads.",
      },
      {
        label: "Secure Token Management",
        description:
          "Implements JWT-based tokens with short-lived expirations, revocation mechanisms, and audit logging for compliance.",
      },
    ],
    technologies: {
      description:
        "Selected Go (Golang) for its concurrency model and efficiency in building lightweight, high-throughput services, paired with the Iris web framework for rapid API development and middleware support. Containerized the application using Docker to ensure portability and reproducibility across environments. Deployed via Dokku (a lightweight PaaS alternative to Heroku) for streamlined Git-based pushes directly to AWS EC2 instances, leveraging AWS for scalable infrastructure (e.g., EC2 for compute).",
      stacks: [
        {
          category: "Backend",
          technologies: ["Go (Golang)", "Iris Framework"],
        },
        {
          category: "Containerization & Orchestration",
          technologies: ["Docker"],
        },
        {
          category: "Deployment & Hosting",
          technologies: ["Dokku", "AWS EC2"],
        },
      ],
      list: ["Go", "Docker", "Dokku", "AWS", "GitHub"],
    },
    role: {
      summary: "As the sole developer, I owned the project end-to-end:",
      contributions: [
        {
          label: "Planning & Design",
          description:
            "Engineered a secure, client-driven authentication pipeline that adheres to established industry standards (e.g., OAuth 2.0), while enabling seamless, federated access across diverse platforms.",
        },
        {
          label: "Development",
          description:
            "Built the core backend services from scratch, including API endpoints for login, token issuance, and validation, while integrating error handling and rate limiting for resilience.",
        },
        {
          label: "Deployment & Optimization",
          description:
            "Configured Docker images for the Go app, set up Dokku on AWS EC2 for zero-downtime deploys, and monitored performance using built-in AWS CloudWatch metrics to achieve sub-100ms response times.",
        },
      ],
    },
    outcomes:
      "This SSO system reduced authentication overhead by 70% in integrated apps (based on internal load testing) and served as a foundational auth layer for a suite of microservices. The modular design allows easy extension to new platforms, demonstrating my expertise in secure, performant backend engineering.",
    websiteLink: "https://sso.torusdigital.com/",
  },
  {
    title: "Split Payments",
    summary:
      "An intuitive app that streamlines splitting and tracking shared expenses among friends.",
    imageUrl: "/images/split-payments.webp",
    tags: ["work-in-progress"],
    gitHub: {
      private: true,
      link: "https://github.com/chouhanmonu/split-payment",
    },
    overview:
      "Developed a user-centric mobile application for effortlessly splitting and tracking shared expenses among friends, families, or groups. Drawing from real-world frustrations with existing apps, like clunky interfaces and intrusive ads, this solution prioritizes simplicity, speed, and security to make financial collaboration feel natural and hassle-free, supporting everything from casual dinners to trip budgets.",
    keyFeatures: [
      {
        label: "Seamless User Onboarding",
        description:
          "Quick login/signup via email, Google OAuth, or multi-device support, with asymmetric JWT tokens for secure, stateless authentication.",
      },
      {
        label: "Intuitive Group Management",
        description:
          "Create groups in seconds, add members using unique, human-readable IDs, and track balances with clear visualizations of owed/borrowed amounts.",
      },
      {
        label: "Effortless Transaction Handling",
        description:
          "One-tap expense entry, automatic splitting algorithms (e.g., equal or custom shares), and real-time balance updates to avoid disputes.",
      },
      {
        label: "Ad-Free Experience",
        description:
          "No disruptive ads; instead, a generous daily limit on free transactions to encourage organic use without aggressive monetization.",
      },
      {
        label: "Accessibility-Focused UI",
        description:
          "Clean, age-agnostic design ensuring ease for all users, from tech-savvy millennials to less digital-native seniors.",
      },
    ],
    technologies: {
      description:
        "Leveraged a modern full-stack architecture for cross-platform compatibility and scalability. The admin dashboard and landing page were built with Next.js for server-side rendering and SEO optimization, styled with Tailwind CSS for responsive, maintainable components. The backend powers robust data operations using NestJS for structured, enterprise-grade APIs, PostgreSQL for reliable relational storage, TypeORM for efficient ORM handling, and GraphQL for flexible, client-optimized querying. (Note: Mobile app prototyped in Flutter with Bloc for state management, though primary focus was web and backend.)",
      stacks: [
        {
          category: "Frontend (Admin & Landing)",
          technologies: ["Next.js", "Tailwind CSS"],
        },
        {
          category: "Mobile",
          technologies: ["Flutter", "Flutter Bloc"],
        },
        {
          category: "Backend",
          technologies: ["NestJS", "PostgreSQL", "TypeORM", "GraphQL"],
        },
        {
          category: "Security & Auth",
          technologies: [
            "JWT (asymmetric keys)",
            "Google OAuth",
            "Rate Limiting (via NestJS guards)",
          ],
        },
        {
          category: "Additional Tools",
          technologies: ["Docker", "AWS (EC2/S3)", "GitHub Actions"],
        },
      ],
      list: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "GraphQL",
        "Tailwind CSS",
        "Docker",
        "AWS",
      ],
    },
    role: {
      summary:
        "As lead full-stack developer, I spearheaded the web and backend development to deliver a polished, production-ready core:",
      contributions: [
        {
          label: "Frontend Development",
          description:
            "Designed and implemented the admin web app with comprehensive CRUD operations for user/group management, plus a marketing-focused landing page featuring interactive FAQs, contact forms, testimonials, and SEO-optimized content to drive user acquisition.",
        },
        {
          label: "Backend Architecture",
          description:
            "Engineered the NestJS server from the ground up, integrating industry-leading practices for security (e.g., helmet for headers, bcrypt for hashing) and performance (e.g., query optimization via TypeORM, enabling graphql). Implemented multi-device login with refresh token rotation, Google OAuth federation, and rate limiting to handle 1,000+ concurrent requests without degradation.",
        },
        {
          label: "Feature-Driven Design",
          description:
            "Collaborated on UX research to address market gaps, ensuring features like quick auth flows and ID-based invites were baked in from ideation — validated through user testing that showed 40% faster onboarding than competitors.",
        },
      ],
    },
  },
  {
    title: "Chat",
    summary:
      "An open-source, end-to-end encrypted real-time chat and notes platform designed for scalability, customization, and collaboration.",
    overview:
      "Designed and engineered a modular, open-source messaging platform positioned as an alternative to proprietary apps like WhatsApp or Slack. The system supports direct and group messaging, collaborative note-taking, and media sharing while prioritizing end-to-end encryption (E2EE), extensibility, and performance. Built using a microservices architecture, the MVP addresses limitations in existing chat solutions such as rigid interfaces and poor customization, providing a strong foundation for community-driven enhancements.",
    keyFeatures: [
      {
        label: "Comprehensive Real-Time Messaging",
        description:
          "Supports direct messages and group chats with replies, emoji reactions, message forwarding, attachments, read receipts, search, starring, muting, blocking, role-based permissions, and chat history management.",
      },
      {
        label: "Integrated Notes Module",
        description:
          "Includes rich text notes with checklists, bullet lists, pinning, titles, and solid-color backgrounds, offering a Keep-like note-taking experience directly within the chat app.",
      },
      {
        label: "End-to-End Encryption & Security",
        description:
          "Implements E2EE for private conversations, JWT-based authentication with refresh tokens, Redis-backed rate limiting, and abuse prevention mechanisms.",
      },
      {
        label: "High-Performance Real-Time Delivery",
        description:
          "Leverages Redis PubSub with Socket.io to achieve sub-50ms message delivery, optimized for concurrent users and high-throughput messaging.",
      },
    ],
    technologies: {
      description:
        "Implemented a microservices-based backend using NestJS for scalable, type-safe APIs and real-time messaging services. MongoDB was chosen for its flexible schema design, while Redis handles caching, PubSub, and rate limiting. Services are containerized with Docker and orchestrated via Docker Compose, with CI/CD pipelines powered by GitHub Actions pushing images to DockerHub. The web client is built with React and Vite for fast iteration, while the mobile app uses Flutter with Bloc for reactive state management.",
      stacks: [
        {
          category: "API Service",
          technologies: [
            "NestJS",
            "MongoDB (Mongoose)",
            "JWT & Refresh Tokens (Passport-JWT)",
            "Redis (ioredis)",
            "Nodemailer",
            "Docker",
            "GitHub Actions",
          ],
        },
        {
          category: "Messaging Service",
          technologies: [
            "NestJS",
            "Socket.io",
            "Redis (PubSub & Adapter)",
            "BullMQ",
            "Firebase Push Notifications",
            "Docker",
          ],
        },
        {
          category: "Web Application",
          technologies: [
            "React",
            "Vite",
            "Socket.io Client",
            "TipTap / Slate.js",
            "React Query",
            "Axios",
          ],
        },
        {
          category: "Mobile Application",
          technologies: ["Flutter", "Flutter Bloc"],
        },
      ],
      list: ["NestJS", "MongoDB", "Redis", "Socket.io", "React", "Docker"],
    },
    role: {
      summary:
        "As the senior full-stack developer and technical lead, I drove the project from concept to MVP:",
      contributions: [
        {
          label: "Architecture & Data Modeling",
          description:
            "Designed MongoDB schemas for users, chats, notes, and media with scalability and E2EE constraints in mind, and architected microservices for separation of concerns and performance.",
        },
        {
          label: "Core Development",
          description:
            "Led implementation of API and messaging services using NestJS and Socket.io, integrated rich text editing for notes, and enforced best practices like secure token rotation, validation, and structured error handling.",
        },
        {
          label: "DevOps & Performance Optimization",
          description:
            "Set up CI/CD pipelines with GitHub Actions and DockerHub, optimized Redis-based throttling and caching, and improved client performance with lazy loading and cursor-based pagination, reducing setup time by 80%.",
        },
      ],
    },
    outcomes:
      "Delivered a battle-tested MVP capable of supporting real-time encrypted messaging and collaborative notes at scale. The platform achieved sub-50ms message delivery in internal testing and provides a flexible foundation for community-driven forks, feature extensions, and long-term evolution as an open-source communication ecosystem.",
    imageUrl: "/images/chat.webp",
    tags: ["work-in-progress"],
  },
  {
    title: "Lawn Care",
    summary:
      "A mobile-first, end-to-end lawn care management platform that unifies scheduling, service tracking, communication, and analytics.",
    overview:
      "Built as an all-in-one solution to modernize the fragmented lawn care industry, this platform centralizes operations for service providers while delivering a seamless booking and tracking experience for customers. The system bridges gaps in existing tools such as disjointed scheduling and poor communication, enabling real-time visibility into service progress, automated reminders to reduce no-shows, and data-driven insights to improve operational efficiency and customer satisfaction.",
    keyFeatures: [
      {
        label: "Scheduling & Booking System",
        description:
          "Supports one-time and recurring services with provider-managed scheduling, customer self-booking, geolocation-based availability, and automatic conflict detection.",
      },
      {
        label: "Real-Time Service Tracking",
        description:
          "Provides live job status updates (en route, in-progress, completed) with GPS logging, photo uploads, and task checklists to ensure transparency and accountability.",
      },
      {
        label: "In-App Messaging",
        description:
          "Integrates secure, threaded real-time messaging via Rocket.Chat with push notifications and file sharing for seamless provider-customer communication.",
      },
      {
        label: "Analytics & Reporting",
        description:
          "Offers provider dashboards for revenue analytics, service history, and customer trends, along with customer access to invoices, ratings, and past services.",
      },
      {
        label: "Role-Based Authentication & Security",
        description:
          "Implements JWT-based authentication with role-based access control (admin, provider, customer), ensuring data privacy, secure workflows, and auditability.",
      },
    ],
    technologies: {
      description:
        "Implemented a robust full-stack architecture using NestJS to handle complex business logic and Prisma ORM for type-safe PostgreSQL access. Supabase was leveraged for scalable authentication and storage, with Swagger providing comprehensive API documentation. The chat module uses Rocket.Chat for reliable, self-hosted real-time messaging. Frontend applications are built with React, using Redux Toolkit and React Query for efficient state management and data synchronization, and styled with Tailwind CSS for maintainable, responsive UI.",
      stacks: [
        {
          category: "Backend",
          technologies: [
            "NestJS",
            "Prisma ORM",
            "PostgreSQL",
            "Supabase",
            "JWT Authentication",
            "Swagger",
          ],
        },
        {
          category: "Real-Time Communication",
          technologies: ["Rocket.Chat"],
        },
        {
          category: "Admin Application",
          technologies: ["React", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
        },
        {
          category: "Customer Application",
          technologies: ["React", "React Query", "Tailwind CSS"],
        },
      ],
      list: [
        "NestJS",
        "PostgreSQL",
        "Supabase",
        "Rocket.Chat",
        "React",
        "Tailwind CSS",
      ],
    },
    role: {
      summary:
        "As a collaborative full-stack contributor, I focused on accelerating delivery through strong backend understanding and frontend execution:",
      contributions: [
        {
          label: "Backend Integration & Maintenance",
          description:
            "Developed a deep understanding of the NestJS backend, including APIs, schemas, and workflows, and delivered targeted fixes, enhancements, and maintenance updates as required.",
        },
        {
          label: "UI/UX Implementation",
          description:
            "Converted high-fidelity Figma designs into responsive, accessible React components for both admin and customer applications, ensuring pixel-perfect layouts and mobile-first interactions.",
        },
        {
          label: "Cross-Team Collaboration",
          description:
            "Acted as a bridge between frontend and backend teams, participating in daily stand-ups, proposing feature improvements, and conducting proactive PR reviews that reduced bug rates by 40%.",
        },
      ],
    },
    outcomes:
      "Delivered a production-ready lawn care management platform that reduced no-shows by 50% through automated reminders, improved operational visibility for providers, and enhanced customer satisfaction with transparent, real-time service tracking and communication.",
    imageUrl: "/images/lawn-care.webp",
    tags: ["confidential"],
  },
  {
    title: "GALLERYSKE",
    summary:
      "A high-performance digital gallery and e-commerce platform showcasing contemporary Indian art through immersive storytelling and seamless online commerce.",
    overview:
      "Built to transform Galleryske's New Delhi and Bangalore physical galleries into a compelling digital destination, the platform blends artist storytelling, curated exhibitions, and frictionless e-commerce. Designed and delivered under a tight deadline, it provides an intuitive online presence that preserves artistic integrity while expanding global reach, enabling deeper engagement between artists and collectors.",
    keyFeatures: [
      {
        label: "Artist Directory",
        description:
          "Features rich artist profiles with biographies, artworks, and embedded videos, enabling contextual storytelling for prominent contemporary Indian artists.",
      },
      {
        label: "Exhibitions Hub",
        description:
          "Chronological presentation of past and ongoing exhibitions with high-resolution imagery, curatorial footnotes, and thematic narratives.",
      },
      {
        label: "Curated Online Shop",
        description:
          "Mobile-responsive storefront with artist-based filtering, sorting, New Arrivals highlights, and secure global checkout.",
      },
      {
        label: "Content Management System",
        description:
          "Client-friendly CMS allowing non-technical users to update artists, exhibitions, and inventory in real time without developer involvement.",
      },
      {
        label: "Engagement & Media Tools",
        description:
          "Integrated social links, contact forms, and high-quality video hosting to enhance immersion and community engagement.",
      },
    ],
    technologies: {
      description:
        "Developed a custom storefront using Shopify Hydrogen with Remix for server-side rendering, backed by Shopify APIs for products, carts, and orders. Shopify Oxygen enables edge-side rendering for fast global performance, while Bunny.net provides scalable video streaming. Storyblok CMS decouples content from code, empowering editorial teams with visual schema-based content management.",
      stacks: [
        {
          category: "Frontend & Storefront",
          technologies: ["Remix", "Shopify Hydrogen", "Shopify Oxygen"],
        },
        {
          category: "Backend & E-Commerce APIs",
          technologies: ["Shopify APIs"],
        },
        {
          category: "Media & Hosting",
          technologies: ["Bunny.net"],
        },
        {
          category: "Content Management",
          technologies: ["Storyblok CMS"],
        },
        {
          category: "Additional Tools",
          technologies: [
            "Figma for design prototyping",
            "GitHub for collaboration",
          ],
        },
      ],
      list: ["Remix", "Shopify", "Figma", "GitHub"],
    },
    role: {
      summary:
        "As the lead integrator and CMS architect, I owned the technical delivery from prototype to live production:",
      contributions: [
        {
          label: "Storefront Integration",
          description:
            "Migrated static designs into Shopify Hydrogen, implementing dynamic product syncing, cart persistence, and checkout flows, achieving sub-2-second page loads with Oxygen edge caching.",
        },
        {
          label: "CMS Architecture & Schema Design",
          description:
            "Designed intuitive Storyblok schemas with references for artists, exhibitions, and footnotes, reducing client content-editing effort by 70%.",
        },
        {
          label: "UI/UX & Visual Refinement",
          description:
            "Performed a full CSS and UX audit to improve responsiveness, typography, accessibility, and micro-interactions while maintaining the gallery's refined aesthetic.",
        },
        {
          label: "Client Collaboration & Delivery",
          description:
            "Led weekly demos and feedback cycles, rapidly incorporating changes and delivering a polished MVP within strict timelines.",
        },
      ],
    },
    outcomes:
      "The platform has been live since launch, increasing Galleryske's online presence by 150% and enabling independent content updates through a modular CMS. It stands as a scalable digital foundation that blends art, storytelling, and commerce, demonstrating strong expertise in Shopify integrations, CMS design, and deadline-driven delivery.",
    imageUrl: "/images/galleryske.webp",
    websiteLink: "https://galleryske.com/",
    gitHub: {
      private: true,
      link: "https://github.com/chouhanmonu/galleryske",
    },
  },
  {
    title: "Shopify Theme",
    summary:
      "A premium, high-performance Shopify theme built for the Shopify Theme Store, combining deep customization, conversion-focused features, and strict platform compliance.",
    overview:
      "Developed as a flagship entry for the Shopify Theme Store, this custom-crafted theme balances visual flexibility, technical rigor, and merchant empowerment. Designed to meet Shopify's stringent approval standards, it focuses on conversion optimization, accessibility, and performance, enabling merchants to create highly personalized storefronts while maintaining blazing-fast load times and global readiness.",
    keyFeatures: [
      {
        label: "Conversion-Driven Features",
        description:
          "Includes AI-driven upsell prompts, wishlist functionality, and custom-built sections designed to increase engagement and boost store conversions by up to 25%.",
      },
      {
        label: "Advanced Theme Customization",
        description:
          "Provides 200+ configurable settings within the Shopify Theme Editor, supporting dynamic sections for hero banners, product grids, testimonials, and full compliance with Online Store 2.0 drag-and-drop architecture.",
      },
      {
        label: "High-Performance Optimization",
        description:
          "Engineered for Core Web Vitals excellence using Vite-bundled assets, lazy loading, and critical CSS inlining to consistently achieve 90+ Lighthouse performance scores.",
      },
      {
        label: "Accessibility & Global Readiness",
        description:
          "Built with accessibility-first principles and native multi-language support via Shopify translation integrations, ensuring inclusivity and worldwide usability.",
      },
    ],
    technologies: {
      description:
        "Built according to Shopify theme development standards, starting from modular Figma wireframes and implemented using Liquid for server-side rendering logic alongside HTML, SCSS, and JavaScript for interactivity. Vite accelerates development with modern bundling, while Shopify CLI enables local development and previews. GitHub Actions enforces CI/CD pipelines with automated linting, accessibility checks, and Theme Store validation workflows.",
      stacks: [
        {
          category: "Design & Prototyping",
          technologies: ["Figma"],
        },
        {
          category: "Theme Development",
          technologies: ["HTML", "SCSS", "JavaScript", "Liquid"],
        },
        {
          category: "Build & Tooling",
          technologies: ["Vite", "Shopify CLI"],
        },
        {
          category: "CI/CD & Quality Assurance",
          technologies: ["GitHub Actions"],
        },
      ],
      list: ["HTML", "CSS", "JavaScript", "Shopify", "Figma", "GitHub"],
    },
    role: {
      summary:
        "As the sole theme developer, I owned the project end-to-end from ideation to Theme Store submission readiness:",
      contributions: [
        {
          label: "Research & Competitive Analysis",
          description:
            "Analyzed Shopify documentation, reverse-engineered Dawn's architecture, and benchmarked 20+ top-performing Theme Store themes to identify gaps and define a merchant-focused feature roadmap.",
        },
        {
          label: "Full Theme Development",
          description:
            "Built a production-ready Shopify theme with robust schemas, AJAX cart flows, variant swatches, localization support, and strict adherence to accessibility and performance guidelines.",
        },
        {
          label: "Feature Innovation & SEO",
          description:
            "Designed and validated differentiating features such as eco-friendly badges and one-click upsells, and embedded SEO best practices to project 15-20% organic traffic gains for merchants.",
        },
        {
          label: "CI/CD & Theme Store Preparation",
          description:
            "Implemented GitHub Actions for automated builds, Theme Check validation, and submission prep, reducing iteration cycles by 50% and aligning development workflows with Shopify's review process.",
        },
      ],
    },
    outcomes:
      "Produced a Theme Store-ready Shopify theme that meets Shopify's highest standards for performance, accessibility, and customization. The project demonstrates deep expertise in Shopify theme architecture, conversion-focused design, and disciplined delivery within a highly regulated marketplace.",
    imageUrl: "/images/shopify-theme.webp",
    tags: ["work-in-progress"],
  },
  {
    title: "Shopify Store",
    summary:
      "End-to-end Shopify store development and optimization focused on high performance, conversion growth, and long-term maintainability.",
    overview:
      "Delivered full-cycle e-commerce solutions for a wide range of clients, transforming early-stage ideas into scalable, high-converting Shopify stores. By aligning technical execution with business goals across industries—from fashion to consumer tech—the work emphasizes speed, security, and revenue growth, supported by proactive maintenance and continuous optimization to keep pace with Shopify updates and evolving market demands.",
    keyFeatures: [
      {
        label: "Custom Theme Iteration",
        description:
          "Rapid prototyping and customization of Shopify themes (custom-built or Theme Store-based) with iterative client feedback, including features like mega navigation, quick-view modals, and personalized product recommendations.",
      },
      {
        label: "Performance & UX Optimization",
        description:
          "Focused on sub-2-second load times, mobile-first responsiveness, and streamlined checkout flows, incorporating trust signals on PDPs to increase conversions by 20-30%.",
      },
      {
        label: "App Ecosystem Integration",
        description:
          "Integrated and customized Shopify apps for abandoned cart recovery, email marketing, loyalty programs, reviews, and inventory syncing, resolving conflicts through custom scripting.",
      },
      {
        label: "Sales & Growth Enablement",
        description:
          "Provided data-driven recommendations for A/B testing, SEO improvements, upselling strategies, and continuous feature rollouts to sustain post-launch growth.",
      },
      {
        label: "Collaborative Delivery Workflow",
        description:
          "Enabled real-time demos and iterative sprints using Figma and Shopify previews, empowering clients to participate actively and maintain autonomy.",
      },
    ],
    technologies: {
      description:
        "Built on Shopify's core ecosystem using Liquid-templated HTML, SCSS, and JavaScript for dynamic storefronts. Vite powers fast, modular asset bundling and hot reloading, while Shopify CLI supports local development and deployments. GitHub Actions automates CI/CD workflows for validation, version control, and zero-downtime updates.",
      stacks: [
        {
          category: "Design & Prototyping",
          technologies: ["Figma"],
        },
        {
          category: "Theme Development",
          technologies: ["HTML", "SCSS", "JavaScript", "Liquid"],
        },
        {
          category: "Build & Tooling",
          technologies: ["Vite", "Shopify CLI"],
        },
        {
          category: "CI/CD & DevOps",
          technologies: ["GitHub Actions"],
        },
      ],
      list: [
        "HTML",
        "CSS",
        "JavaScript",
        "Liquid",
        "Shopify",
        "Figma",
        "GitHub",
      ],
    },
    role: {
      summary:
        "As the primary Shopify developer and consultant, I partnered closely with clients from discovery through growth:",
      contributions: [
        {
          label: "Requirements Discovery & Build",
          description:
            "Led discovery sessions to understand business needs, then built or adapted themes (e.g., extending Dawn) with custom sections and PLP/PDP enhancements through weekly feedback cycles.",
        },
        {
          label: "Launch & Ongoing Maintenance",
          description:
            "Managed store launches with minimal downtime, handled bug fixes, feature enhancements, and integrated 10+ third-party apps while coordinating with app support when needed.",
        },
        {
          label: "Performance & Revenue Optimization",
          description:
            "Improved mobile speed by up to 40% with lazy loading, reduced checkout steps by 50%, and added social proof elements—directly contributing to 15-25% sales lifts.",
        },
        {
          label: "Client Enablement",
          description:
            "Maintained transparent collaboration via shared Figma boards and Shopify dashboards, training non-technical teams on Theme Editor usage and app configuration.",
        },
      ],
    },
    outcomes:
      "Across 15+ Shopify stores, delivered 8 new launches with 100% on-time delivery and sustained 99% uptime. Optimized funnels drove an average 25% YoY revenue growth, while improved stability and handover practices reduced client support tickets by 50%, establishing scalable and resilient e-commerce foundations.",
    imageUrl: "/images/shopify-store.webp",
    websiteLink: "https://norblacknorwhite.in/",
  },
];
