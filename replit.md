# COARUS AI - AI Tool Matchmaker

## Overview

COARUS AI is a web application designed to help small and medium-sized businesses (SMBs) and individuals discover the right AI tools for their specific needs. The platform uses a guided wizard-based approach where users describe their challenges in plain language, and the system recommends curated AI tools from categories like customer support, marketing, finance, HR, productivity, and personal companions.

The application targets non-technical business owners and professionals globally (US, Korea, Latin America, and beyond) who want to leverage AI but don't know which tools to choose. Users complete a simple intake flow, receive personalized recommendations, and can explore tools via direct links (designed for future affiliate/referral integration).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool and development server.

**Routing**: Wouter is used for client-side routing instead of React Router, providing a lightweight alternative for single-page application navigation between Home (`/`) and Find Tools (`/find-tools`) pages.

**UI Component Library**: Shadcn/ui (New York style variant) with Radix UI primitives provides the component foundation. All UI components are locally customizable and built with Tailwind CSS utility classes. The design system emphasizes professional trust, scanning efficiency, and action-oriented patterns inspired by Linear, Stripe, and ProductHunt aesthetics.

**Styling**: Tailwind CSS with custom design tokens defined in CSS variables. The theme supports light/dark modes via HSL color system with semantic color naming (primary, secondary, muted, destructive, etc.). Typography uses Inter font from Google Fonts for clean, professional readability.

**State Management**: React Query (@tanstack/react-query) handles server state management and caching. Local component state uses React hooks. A wizard flow manages multi-step form state through a centralized `WizardState` object that tracks user path (SMB vs individual), business types, problems, priorities, personal goals, and preferences.

**Form Handling**: React Hook Form with Zod validation schemas (via @hookform/resolvers) provides type-safe form management.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Design**: RESTful API pattern with routes prefixed under `/api`. The routes are registered through a centralized `registerRoutes` function that accepts the HTTP server and Express app instances.

**Storage Layer**: An abstraction layer (`IStorage` interface) enables swapping between storage implementations. Currently implements `MemStorage` (in-memory storage) for development. The interface defines CRUD methods for user management (getUser, getUserByUsername, createUser).

**Session Management**: Express sessions are configured but not fully implemented in the current codebase. Dependencies include `express-session`, `connect-pg-simple` for PostgreSQL session storage, and `memorystore` as alternatives.

**Build Process**: Custom build script using esbuild for server bundling and Vite for client bundling. Server dependencies are selectively bundled (allowlist approach) to reduce syscalls and improve cold start times in production.

### Data Storage Solutions

**ORM**: Drizzle ORM provides type-safe database access with PostgreSQL as the target dialect.

**Database Schema**: Located in `shared/schema.ts`, the schema includes:
- `users` - User accounts (id, username, password)
- `leads` - Lead capture (email, type, wizard state)
- `toolClicks` - Referral tracking (tool ID, session, URL)
- `toolSources` - Data sources for tools (Manual, TAAFT API, ProductHunt, etc.)
- `toolCategories` - 15 categories with slugs, names, icons
- `aiTools` - Main AI tools database (155+ tools with trust scores, pricing models, features)
- `pendingTools` - Staging area for tools awaiting admin review
- `toolUpdatesLog` - Audit trail for all changes
- `adminUsers` - Admin dashboard access

**Database Provider**: Neon Database serverless driver (@neondatabase/serverless) enables serverless PostgreSQL connections.

**Migrations**: Drizzle Kit manages database migrations with output directory `./migrations` and schema source `./shared/schema.ts`.

**AI Tools Management System**: A hybrid database-driven system supporting:
- **155+ curated AI tools** across 15 categories seeded from initial research
- **Trust scoring** (0.00-1.00) to maintain quality of recommendations
- **Pending tools workflow** for reviewing newly discovered tools before publishing
- **Source tracking** to identify where tool data originates (manual entry, external APIs)
- **Audit logging** for all tool changes
- Ready for integration with external feeds (There's An AI For That API, ProductHunt)

### Authentication and Authorization

**Planned but Not Implemented**: The schema includes a users table with username/password fields, suggesting planned authentication. Dependencies include Passport.js (`passport`, `passport-local`) and JWT (`jsonwebtoken`), but no authentication middleware is currently active in the routes. The storage interface includes user CRUD methods as a foundation for future auth implementation.

**Current State**: No signup or login is required, aligning with the MVP goal of "no signup required" for tool recommendations.

### Wizard and Recommendation Logic

**Wizard Flow**: Multi-step wizard located in `client/src/components/wizard/Wizard.tsx` (not shown but referenced) guides users through:
1. Path selection (SMB vs Individual)
2. For SMB: business types, problems, priorities, workflow areas, time investment, budget
3. For Individual: personal intents, goals, companion types, content preferences (including adult content with age verification)

**Matching Algorithm**: Client-side matching logic (in `lib/tools.ts`) compares user selections against the tool database's keywords, categories, and target user fields. Results include a fit score and are returned as a `MatchResult` object containing the matched category and ranked tools.

**Results Display**: `EnhancedResultsView` component presents recommendations with fit scores, tool cards, category labels, and appropriate content warnings for adult/NSFW results.

## External Dependencies

### Third-Party UI Libraries

- **Radix UI**: Complete suite of accessible, unstyled UI primitives (@radix-ui/react-*) for dialogs, dropdowns, tooltips, accordions, tabs, etc.
- **Shadcn/ui**: Component system built on Radix UI with Tailwind styling
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-enabled carousel component

### Development and Build Tools

- **Vite**: Fast build tool and dev server with HMR support
- **TypeScript**: Static type checking across client, server, and shared code
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **esbuild**: JavaScript bundler used for server-side production builds
- **Replit Plugins**: Development plugins including runtime error modal, cartographer, and dev banner for Replit environment

### Data and API Libraries

- **React Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Runtime type validation and schema definition
- **Drizzle ORM**: Type-safe database ORM
- **Drizzle Zod**: Integration between Drizzle and Zod for schema validation

### Utilities

- **clsx / class-variance-authority**: Conditional class name composition
- **tailwind-merge**: Intelligent Tailwind class merging
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **Wouter**: Lightweight React routing

### Database and Backend Services

- **Neon Database**: Serverless PostgreSQL database provider
- **connect-pg-simple**: PostgreSQL session store for Express
- **Express**: Web application framework
- **CORS**: Cross-origin resource sharing middleware

### Planned Integrations (Dependencies Present)

- **OpenAI** (`openai`): Not currently used but available for future LLM-powered matching
- **Google Generative AI** (`@google/generative-ai`): Alternative LLM integration option
- **Stripe**: Payment processing for future monetization
- **Nodemailer**: Email functionality for saving matches/notifications
- **Multer**: File upload handling
- **Axios**: HTTP client for external API calls
- **WebSocket** (`ws`): Real-time communication capability