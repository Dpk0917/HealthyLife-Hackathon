# Overview

HealthyLife is a modern, professional healthcare and wellness website built as a full-stack application. The platform serves as a comprehensive wellness companion offering health services, doctor profiles, health tips, and user engagement features. The project follows a monorepo structure with separate client and server directories, implementing a complete healthcare-focused web application with contact forms, newsletter subscriptions, and interactive UI components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **Routing**: Wouter for client-side routing with single-page application structure
- **UI Framework**: Shadcn/ui components built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom health-themed color palette and responsive design
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: GSAP and AOS (Animate On Scroll) libraries for interactive animations
- **Form Handling**: React Hook Form with Zod validation schemas

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM module support
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas for request/response validation
- **Development**: Hot reload with Vite middleware integration
- **Storage**: Abstract storage interface with in-memory implementation for development

## Data Layer
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Design**: Three main entities:
  - Users table with authentication fields
  - Newsletter subscriptions with email uniqueness constraints
  - Contact messages with full user details and timestamps
- **Migrations**: Drizzle Kit for database schema management

## API Design
- **Architecture**: RESTful API endpoints with consistent error handling
- **Endpoints**: 
  - POST `/api/newsletter/subscribe` - Newsletter subscription management
  - POST `/api/contact/send` - Contact form submissions
  - GET `/api/contact/messages` - Admin contact message retrieval
- **Validation**: Zod schema validation on all input data
- **Error Handling**: Centralized error middleware with proper HTTP status codes

## Development Architecture
- **Build System**: Vite for frontend bundling, esbuild for server compilation
- **Type Safety**: Shared TypeScript schemas between client and server
- **Development Server**: Express with Vite middleware for hot reload
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/, @assets/)

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless** - Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm** and **drizzle-kit** - Type-safe PostgreSQL ORM and migration toolkit
- **@tanstack/react-query** - Server state management and data fetching
- **wouter** - Minimalist routing library for React applications

## UI and Styling
- **@radix-ui/** components - Accessible primitive components for building the UI
- **tailwindcss** - Utility-first CSS framework with custom health theme
- **class-variance-authority** and **clsx** - Conditional styling utilities
- **lucide-react** - Icon library for consistent iconography

## Animation and Interaction
- **gsap** - Professional animation library for complex animations
- **aos** - Animate On Scroll library for scroll-triggered animations
- **embla-carousel-react** - Carousel/slider component for testimonials

## Form and Validation
- **react-hook-form** and **@hookform/resolvers** - Form handling with validation
- **zod** and **drizzle-zod** - Schema validation and type inference
- **input-otp** - OTP input component for potential authentication features

## Development Tools
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling
- **tsx** - TypeScript execution for development server
- **connect-pg-simple** - PostgreSQL session store for potential session management