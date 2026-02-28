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

## Design Features

### Minimal Sharp Design System
- **High Contrast**: Pure white (#FFFFFF) and deep black (#0A0A0A) backgrounds
- **Sharp Edges**: Zero border radius throughout (or minimal 2-4px)
- **Bold Typography**: Space Grotesk for headings (96px display), Inter for body
- **Red Accent**: Vibrant #FF4D4D used strategically for CTAs and highlights
- **Clean Spacing**: Large padding (160px sections, 64px horizontal)
- **Micro-interactions**: Instant transitions, subtle card lifts

### Content Sections
- **Hero**: Large typography with name, title, and description
- **Experience**: Black background with white cards in 2-column grid
- **Projects**: Filterable grid with category tags
- **Coursework**: Academic courses grouped by theme
- **Skills**: Technical skills organized by domain
- **Hobbies**: Personal interests showcase
- **Contact**: Social links and email

## Performance Features

- **Next.js App Router:** Fast routing and server components
- **Font Optimization:** next/font/google for optimal font loading
- **Tailwind CSS:** Minimal CSS bundle with purging
- **Static Generation:** Pages built at build time for fast delivery
- **Responsive Design:** Mobile-first approach with breakpoints

## Accessibility

- Skip link to main content
- `prefers-reduced-motion` support for animations
- Keyboard navigation throughout
- Focus states on all interactive elements
- Semantic HTML structure
- ARIA labels where appropriate
- High contrast color ratios (WCAG AAA compliant)

## Customization

### Update Content
All content is in the `data/` folder:
- `experience.ts` - Work experience entries
- `education.ts` - Education details
- `coursework.ts` - Academic courses and projects
- `projects.ts` - Portfolio projects with categories
- `skills.ts` - Technical skills by domain
- `hobbies.ts` - Hobbies and interests
- `site.ts` - Site metadata, links, and configuration

### Update Design System
- **Colors**: Defined in `app/globals.css` CSS variables and `tailwind.config.ts`
- **Typography**: Font sizes and weights in `tailwind.config.ts`
- **Spacing**: Custom spacing scale in `tailwind.config.ts`
- **Components**: Reusable UI components in `components/ui/`

### Minimal Sharp Theme Variables
```css
--primary: #FF4D4D
--secondary: #0A0A0A
--bg-primary: #FFFFFF
--bg-dark: #0A0A0A
--text-primary: #0A0A0A
--text-secondary: #666666
```

## TODO Items

Search for "TODO" comments in the codebase for placeholder content:
- Update email, LinkedIn, GitHub URLs in `data/site.ts`
- Add actual resume PDF to `public/resume.pdf`
- Add detailed project descriptions in `data/projects.ts`
- Create OG image at `public/og-image.png`
- Add project detail pages content

## Recent Updates

### Minimal Sharp Redesign ✓
- [x] Implemented Minimal Sharp design system
- [x] Updated typography (Space Grotesk + Inter)
- [x] Redesigned all sections with sharp aesthetic
- [x] Black/white high-contrast color scheme
- [x] Red accent color throughout (#FF4D4D)
- [x] Removed 3D hero and F1 theme
- [x] Cleaned up unused components and dependencies

## License

MIT
