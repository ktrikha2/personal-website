# Keshav Trikha - Personal Portfolio Website

A modern, high-contrast personal portfolio featuring the "Minimal Sharp" design system with bold typography, sharp edges, and striking red accents, built with Next.js 14+ and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Fonts:** Space Grotesk (primary), Inter (secondary) via next/font/google
- **Icons & Utilities:** clsx, tailwind-merge

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run type check
npx tsc --noEmit

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Homepage with all sections
│   ├── globals.css             # Tailwind + custom Minimal Sharp variables
│   ├── projects/               # Projects listing and detail pages
│   └── resume/                 # Resume page
├── components/
│   ├── Hero/                   # Hero section with name and intro
│   ├── Experience/             # Experience cards with timeline
│   ├── Projects/               # Filterable projects grid
│   ├── Coursework/             # Academic courses by category
│   ├── Skills/                 # Technical skills panels
│   ├── Hobbies/                # Hobbies and interests
│   ├── Contact/                # Contact section with links
│   ├── sections/               # Section wrappers (About, etc.)
│   ├── ui/                     # Reusable UI components
│   │   ├── Button.tsx          # Sharp button component
│   │   ├── Card.tsx            # Sharp card component
│   │   ├── Tag.tsx             # Tag component
│   │   ├── FilterBar.tsx       # Category filter
│   │   └── ProjectCard.tsx     # Project card
│   └── layout/                 # Header, Footer, SkipLink
├── data/                       # All content data
│   ├── site.ts                 # Site metadata and links
│   ├── experience.ts           # Work experience
│   ├── education.ts            # Education details
│   ├── projects.ts             # Portfolio projects
│   ├── coursework.ts           # Courses and academic projects
│   ├── skills.ts               # Technical skills
│   └── hobbies.ts              # Hobbies and interests
├── lib/                        # Utilities (utils.ts)
└── public/                     # Static assets
```



MIT
