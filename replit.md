# Overview

This is a full-stack web application for AutoEscola Plus, a driving school website built with modern technologies. The application serves as an institutional website designed to convert visitors into students through an elegant, responsive interface. It features a complete contact form system, testimonials, service information, and detailed company information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using **React 18** with **TypeScript** and **Vite** as the build tool. The application follows a component-based architecture with:

- **Routing**: Uses Wouter for lightweight client-side routing
- **UI Framework**: Implements shadcn/ui components built on top of Radix UI primitives
- **Styling**: TailwindCSS for utility-first styling with custom CSS variables for theming
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe forms

The frontend structure follows a clear separation of concerns:
- `/components`: Reusable UI components and layout components
- `/pages`: Route-specific page components
- `/lib`: Utility functions and configurations
- `/hooks`: Custom React hooks

## Backend Architecture

The backend is built with **Express.js** and follows a RESTful API pattern:

- **Server Framework**: Express.js with TypeScript
- **API Routes**: Simple route handlers for contact form submissions
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Data Validation**: Zod schemas for request/response validation
- **Development Setup**: Vite middleware integration for seamless development experience

The backend implements a clean architecture with:
- Route handlers in `/server/routes.ts`
- Storage abstraction in `/server/storage.ts`
- Shared schemas between frontend and backend in `/shared/schema.ts`

## Data Storage Solutions

The application uses **Drizzle ORM** configured for PostgreSQL:

- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured but can use any SQL database)
- **Schema**: Shared TypeScript schemas for contacts and users
- **Migrations**: Drizzle Kit for database migrations
- **Development Storage**: In-memory storage implementation for rapid development

The data layer supports:
- Contact form submissions with validation
- User management (schema defined, ready for authentication)
- Type-safe database operations with full TypeScript support

## Design System

The application implements a comprehensive design system:

- **Component Library**: shadcn/ui with Radix UI primitives
- **Theme System**: CSS custom properties for consistent theming
- **Typography**: Inter font family for modern, readable text
- **Color Palette**: Professional blue and green color scheme
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Icons**: Font Awesome icons for consistency

## Development Experience

The project is optimized for modern development workflows:

- **Hot Module Replacement**: Vite HMR for instant updates
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Code Quality**: ESLint and TypeScript strict mode
- **Build Process**: Optimized production builds with code splitting
- **Development Tools**: Replit integration with cartographer for enhanced debugging

# External Dependencies

## Core Framework Dependencies

- **@neondatabase/serverless**: Serverless PostgreSQL adapter for Neon database
- **drizzle-orm**: Modern TypeScript ORM for SQL databases
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Performant form library with minimal re-renders
- **wouter**: Lightweight routing for React applications

## UI and Design Dependencies

- **@radix-ui/**: Complete collection of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **lucide-react**: Modern icon library

## Development Dependencies

- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **@hookform/resolvers**: Form validation resolvers
- **zod**: TypeScript-first schema validation
- **date-fns**: Modern date utility library

## Database and Storage

- **PostgreSQL**: Primary database (via Neon or other providers)
- **Drizzle Kit**: Database migration and introspection tools
- **connect-pg-simple**: PostgreSQL session store (ready for authentication)

## Third-party Integrations

- **Font Awesome**: Icon library for consistent iconography
- **Google Fonts**: Web font delivery (Inter font family)
- **Unsplash**: High-quality stock photography for visual content
- **WhatsApp Business API**: Direct messaging integration for customer contact