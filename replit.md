# CHIREC JMUN Website

## Overview

A Next.js-based website for the CHIREC JMUN (Model United Nations) 2025 conference, scheduled for November 1-2, 2025 at CHIREC International School, Serilingampally. The site features event information, Co-Secretary General addresses, schedule details, team information, and delegate registration capabilities. Built with modern animations, responsive design, and the conference slogan "Represent. Reason. Resolve."

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 15.3.5 with App Router**: Server-side rendering and file-based routing for optimal performance and SEO
- **React 19**: Latest React features for component composition
- **TypeScript 5**: Type safety and improved developer experience

### Styling & Animation
- **Tailwind CSS 4.1.11**: Utility-first CSS framework for rapid UI development
- **Framer Motion 12.23.1**: Declarative animations for page transitions and interactive elements
- **Custom CSS Animations**: Purpose-built animations (float, glow, morphing) for branded visual effects in `src/styles/animations.css`
- **Color Scheme**: Black background with light blue (sky-400) and blue accents throughout

### Component Architecture
- **Modular Component Structure**: 
  - Layout components (Navigation, Footer) in `src/components/layout/`
  - Reusable UI components (HeroSection, AnimatedSection, Countdown, etc.) in `src/components/ui/`
  - Feature-specific components (SpeakersSection for Co-Secretary Generals) in domain folders
- **Page-Level Logic**: Route-specific business logic lives in page files under `src/app/`
- **Barrel Exports**: Index files provide clean import paths for component groups

### Routing & Pages
- **File-Based Routing**: Using Next.js App Router convention
  - `/` - Home page with hero, countdown timer, about, and Co-Secretary Generals sections
  - `/about` - Information about Model United Nations and CHIREC JMUN
  - `/meet-the-team` - Team member profiles organized by department
  - `/schedule` - Conference schedule for both days
  - `/regulations` - Delegate rules and regulations
  - `/faq` - Frequently asked questions
  - `/not-found` - Custom 404 page

### Key Features
- **Countdown Timer**: Real-time countdown to November 1, 2025 event start
- **Co-Secretary Generals Section**: Features Anusha Anchlia and Arnav Reddy Jakka with professional photos and comprehensive biographies
- **JMUN Logo**: Integrated in navigation header alongside branding text
- **Animated Sections**: Scroll-triggered animations using Framer Motion's viewport detection
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Glass Morphism**: Backdrop blur effects for navigation and overlays
- **Abstract Background Elements**: Floating, pulsing shapes in blue tones for visual depth
- **Interactive Cards**: Hover and click-triggered overlays for team/leadership information

### Type System
- **Shared Types**: Common interfaces in `src/types/index.ts`
- **Domain Types**: Feature-specific types colocated with data (e.g., `TeamMember` in `teamData.ts`)
- **Strict TypeScript**: Enabled for compile-time safety

### Performance Optimizations
- **Next.js Image Component**: Automatic image optimization and lazy loading
- **Code Splitting**: Automatic route-based code splitting via App Router
- **Font Optimization**: Google Fonts loaded with Next.js font optimization (Geist, Inter, IBM Plex Sans)

### Development Experience
- **ESLint**: Code quality and consistency enforcement
- **Hot Module Replacement**: Fast refresh during development
- **Custom Port Configuration**: Development server runs on port 5000 with network access

## External Dependencies

### Analytics & Monitoring
- **Vercel Analytics (^1.5.0)**: User behavior tracking and insights
- **Vercel Speed Insights (^1.2.0)**: Performance monitoring and Core Web Vitals tracking

### Third-Party Services
- **Microsoft Forms**: External registration form integration (link to be updated)

### Development Tools
- **PostCSS (^8.5.6)**: CSS processing pipeline
- **Tailwind PostCSS Plugin (@tailwindcss/postcss ^4.1.11)**: Tailwind integration

### Hosting Platform
- **Vercel**: Implied deployment target based on Vercel-specific packages

### Asset Management
- **Static Assets**: Stored in `/public` directory
  - Co-Secretary General photos (anusha.png, arnav.png)
  - JMUN logo (jmun-logo.jpg)
  - Team member photos
  - Favicon and branding assets

### Font Loading
- **Google Fonts API**: Automatic font loading via Next.js font system
  - Geist (variable font)
  - Inter (variable font)
  - IBM Plex Sans (400, 500, 700 weights)

### Social Media
- **Instagram**: @chirec.jmun (linked in footer)
- **Email**: jmun@chirec.ac.in

## Recent Changes (October 19, 2025)

### Complete Transformation from TEDxYouth@CHIREC to CHIREC JMUN
- Rebranded all pages and components from TEDx to JMUN theme
- Updated color scheme from red to black and light blue (sky-400/blue-400)
- Changed event dates from August 2, 2025 to November 1-2, 2025
- Added countdown timer component targeting November 1, 2025
- Updated slogan to "Represent. Reason. Resolve."
- Transformed Speakers section to "Addresses by Co-Secretary Generals"
- Updated About, Schedule, FAQ, and Regulations pages with JMUN-appropriate content
- All animations preserved with new color scheme

### Co-Secretary Generals Content Update
- Added professional photos for both Co-Secretary Generals
- Integrated Anusha Anchlia's biography and background
- Integrated Arnav Reddy Jakka's biography and background
- Updated from 4 placeholder cards to 2 actual Co-Secretary Generals

### Branding & Assets
- Added JMUN logo to navigation header
- Logo displays next to site title with hover effects
- Updated footer credits to "Made with ❤️ by JMUN Team"
- Updated Instagram handle to @chirec.jmun

## Next Steps

1. Update registration form link to JMUN-specific form (currently placeholder Microsoft Forms link)
2. Finalize committee information and detailed Day 2 schedule
3. Review and finalize any specific JMUN rules and regulations
4. Consider adding committee descriptions page if needed
5. Prepare for deployment/publishing
