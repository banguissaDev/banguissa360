# Banguissa Pulse - Project Instructions

## Project Overview
Banguissa Pulse is a Next.js web application for a 360 photobooth rental service with a premium, high-energy design. The application features a dark theme with a signature gold accent color (#f4ca54) and kinetic elegance visual style.

## Design System (Banguissa Pulse)
- **Theme:** Dark mode
- **Brand Color:** #f4ca54 (Gold)
- **Primary Font:** Lexend (for headlines)
- **Body Font:** Plus Jakarta Sans
- **Visual Style:** Kinetic Elegance

## Architecture & Structure
```
src/
├── app/                    # Next.js app directory
├── components/
│   ├── shared/            # TopAppBar, BottomNavBar, Footer
│   ├── sections/          # Page sections (Hero, Pricing, etc.)
│   └── ui/                # Reusable UI components
├── styles/                # Global styles, design tokens
├── lib/                   # Utility functions
└── public/                # Static assets
```

## Key Pages
1. **Landing Page (Mobile)** - Vertical mobile experience with hero, pricing, vibe section, process, and impact
2. **Landing Page (Desktop)** - Multi-column wide layout with enhanced visual hierarchy
3. **Additional Pages** - Pricing, Services, Contact, 0-Cost Event Application

## Technology Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS with dark mode
- **UI Library:** shadcn/ui (optional, highly recommended)
- **Font Loading:** next/font for Lexend and Plus Jakarta Sans
- **Components:** React with TypeScript (recommended)

## Design Guidelines
- Use `rounded-full` for buttons and card corners
- High contrast with tonal depth (no heavy borders)
- Glassmorphism effects: `bg-neutral-950/60 backdrop-blur-xl`
- Mobile-first approach, then scale to desktop
- Consistent spacing using Tailwind's spacing scale
- Animations should feel kinetic and premium

## Component Guidelines
- **TopAppBar:** Glassmorphism header with logo and "Book Now" CTA
- **BottomNavBar:** Mobile navigation with pill-shaped active states in gold
- **Footer:** Dark professional footer with links and copyright
- **Cards:** Dark background with tonal separation and gold accents
- **CTAs:** Primary button in gold (#f4ca54), secondary options available

## Content & Copy
- Service: 360 photobooth rentals
- Price Point: 89,000 RWF / Hour
- Key Features: Unlimited 360 Videos, Instant Social Sharing, Professional Attendant
- Social Impact: Free service available for non-profits and community events
- Headline: "Your Event, Our 360 Spin"

## Development Workflow
1. Build components from smallest to largest (atoms → organisms)
2. Test responsive design on mobile and desktop
3. Ensure all CTAs redirect to booking system
4. Validate color contrast for accessibility
5. Test dark mode across all pages

## Performance Considerations
- Optimize images for web (use next/image)
- Lazy load off-screen content
- Minimize CSS-in-JS runtime overhead
- Cache static assets appropriately

## Accessibility
- Maintain WCAG AA color contrast standards
- Ensure keyboard navigation works
- Add proper alt text for images
- Test with screen readers
