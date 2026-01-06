# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 16 app for **Santa Cruz O&G**, a medical services company. It uses the App Router with Tailwind CSS 4.

### Project Structure

- `app/` - Next.js App Router pages and components
  - `app/components/` - UI components organized in folders (each with `index.tsx` and `types.ts`)
  - `app/types/` - Shared TypeScript types
  - `app/data/` - Static data (testimonials, client logos)
  - `app/api/contact/route.ts` - Contact form API endpoint
- `lib/email/` - Email service using Nodemailer
- `public/santacruz/` - Static images and assets

### Pages (Spanish routes)

- `/` - Homepage
- `/quienes-somos` - About us
- `/servicios` - Services
- `/como-trabajamos` - How we work
- `/testimonios` - Testimonials
- `/contacto` - Contact form

### Key Patterns

**Path Alias:** `@/*` maps to project root (e.g., `@/lib/email`)

**Brand Colors:** Defined as CSS variables in `globals.css`:
- `--brand-orange: #df5600` - Primary brand color (accessible via `text-brand` or `bg-brand`)
- `--brand-dark: #0d0d0d`
- `--brand-gray: #f5f5f5`

**Component Pattern:** Components follow a consistent structure:
```
app/components/ComponentName/
  index.tsx  - Component implementation
  types.ts   - TypeScript interfaces (props, etc.)
```

**Client Components:** Most page-level components use `"use client"` for interactivity (carousels, maps, forms).

### Dependencies

- `react-leaflet` / `leaflet` - Interactive maps
- `lucide-react` - Icon library
- `react-swipeable` - Touch gesture support for carousels
- `nodemailer` - Email sending
