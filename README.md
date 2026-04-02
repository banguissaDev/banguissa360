# Banguissa Pulse - 360 Photobooth Rental Web Application

A premium Next.js web application for showcasing Banguissa Pulse's 360-degree photobooth rental services with a modern, dark-themed design featuring kinetic elegance.

## Project Overview

Banguissa Pulse is a 360 photobooth rental service. This web application provides:
- **Mobile-Optimized Landing Page** - Vertical experience with hero, pricing, vibe, process, and impact sections
- **Desktop Landing Page** - Enhanced multi-column layout for wider screens
- **Glassmorphism Design** - Premium, kinetic visual style with dark theme and gold accents
- **Responsive Components** - Shared navigation, footer, and reusable UI components

## Technology Stack

- **Framework:** Next.js 16.2.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with dark mode
- **Runtime:** Node.js
- **Package Manager:** npm

## Design System

### Brand Identity
- **Primary Color:** #f4ca54 (Gold)
- **Theme:** Dark mode (slate palette)
- **Primary Font:** Lexend (headlines)
- **Body Font:** Plus Jakarta Sans (body text)
- **Visual Style:** Kinetic Elegance

### Key Components
- **TopAppBar:** Glassmorphism header with logo and "Book Now" CTA
- **BottomNavBar:** Mobile navigation with pill-shaped active states
- **Footer:** Professional dark footer with links
- **Cards:** Dark background with tonal separation and gold accents
- **Buttons:** Rounded-full primary (gold) and secondary options

## Project Structure

```
src/
├── app/                           # Next.js app directory
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Home page
├── components/
│   ├── shared/                   # Shared components
│   │   ├── TopAppBar.tsx        # Header navigation
│   │   ├── BottomNavBar.tsx     # Mobile bottom navigation
│   │   └── Footer.tsx            # Footer component
│   ├── sections/                 # Page sections
│   │   ├── HeroSection.tsx       # Hero banner
│   │   ├── PricingSection.tsx    # Pricing details
│   │   ├── VibeSection.tsx       # Vibe showcase
│   │   ├── VideoPreviewSection.tsx
│   │   ├── ProcessSection.tsx    # 3-step process
│   │   └── ImpactSection.tsx     # Social impact/giving back
│   └── ui/                        # Reusable UI components (expandable)
├── styles/
│   └── globals.css               # Global styles and animations
├── lib/                          # Utility functions
└── public/                       # Static assets

.github/
└── copilot-instructions.md       # Project guidelines for Copilot

Configuration Files:
- next.config.js                  # Next.js configuration
- tailwind.config.ts             # Tailwind CSS theme
- postcss.config.js              # PostCSS configuration
- tsconfig.json                  # TypeScript configuration
- .eslintrc.json                 # ESLint configuration
- package.json                   # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000` (or next available port)

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

5. **Run linting:**
   ```bash
   npm run lint
   ```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint on the codebase

## VS Code Tasks

VS Code tasks are configured in `.vscode/tasks.json` for:
- **dev** (default build task) - Run development server
- **build** - Create production build
- **lint** - Run code linting

Access tasks via:
- Command Palette: `Ctrl+Shift+P` → "Run Task"
- Terminal menu: "Run Build Task" or "Run Task"

## Content & Pricing

- **Service:** 360 Photobooth Rentals
- **Price Point:** 89,000 RWF / Hour
- **Key Features:**
  - Unlimited 360 Videos
  - Instant Social Sharing
  - Professional Attendant
- **Social Impact:** Free service for non-profits and community events

## Design Guidelines

- Use `rounded-full` for buttons and card corners
- High contrast with tonal depth (no heavy borders)
- Glassmorphism effects: `bg-slate-950/60 backdrop-blur-xl`
- Mobile-first approach, then scale to desktop
- Animations should feel kinetic and premium

## Performance Optimization

- Uses Next.js image optimization with `next/image`
- CSS-in-JS minimal (mostly Tailwind)
- Static pre-rendering where possible
- Lazy-loaded off-screen content

## Accessibility

- WCAG AA color contrast standards maintained
- Keyboard navigation support
- Semantic HTML structure
- Alt text for images (to be added when assets are included)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-optimized (iOS Safari, Chrome Mobile)

## Development Notes

### Color Palette (Tailwind Slate)
- `slate-950` - Darkest (backgrounds)
- `slate-900` - Dark cards
- `slate-800` - Borders
- `slate-400` - Secondary text
- `slate-50` - Primary text
- `brand: #f4ca54` - Gold accents

### Custom CSS Features
- `.btn-primary` - Primary gold button
- `.btn-secondary` - Secondary outline button
- `.card-dark` - Dark card with glassmorphism
- `.glassmorphism` - Glassmorphism effect for headers
- `.animate-slide-up` - Entrance animation
- `.animate-pulse-glow` - Glow effect animation

## Next Steps

1. **Add Images:** Replace placeholder images with actual 360 photobooth photography
2. **Implement Booking System:** Connect to booking/calendar service
3. **Add More Pages:** Create dedicated pricing, services, and contact pages
4. **SEO Optimization:** Add structured data and meta tags
5. **Analytics:** Integrate analytics tracking
6. **Form Validation:** Add validation to contact/application forms
7. **API Integration:** Connect to backend services for bookings

## License

© 2024 Banguissa Pulse. Kinetic Elegance.

## Support

For issues or questions about this project, refer to the [copilot-instructions.md](.github/copilot-instructions.md) file for detailed project guidelines.
