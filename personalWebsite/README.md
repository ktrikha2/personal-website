# Keshav Trikha - Personal Portfolio Website

A visually unique personal portfolio featuring a 3D "F1 Race Control Desk" hero with scroll-driven portal transition, built with Next.js 14+, Three.js (R3F), GSAP, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS v4
- **3D:** Three.js via react-three-fiber (R3F) + @react-three/drei
- **Animation:** GSAP + ScrollTrigger
- **Smooth Scroll:** Lenis
- **Dev Tools:** Leva (dev-only scene parameter tuning)

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
│   ├── layout.tsx              # Root layout with metadata + providers
│   ├── page.tsx                # Homepage with 3D hero + sections
│   ├── globals.css             # Tailwind + custom styles
│   ├── projects/               # Projects listing and detail pages
│   └── resume/                 # Resume PDF embed page
├── components/
│   ├── Hero3D/                 # 3D scene components
│   │   ├── index.tsx           # Main R3F Canvas wrapper
│   │   ├── Scene.tsx           # Scene composition
│   │   ├── DeskSetup.tsx       # F1 desk with monitor, keyboard, etc.
│   │   ├── MonitorScreen.tsx   # Telemetry UI on monitor
│   │   ├── AmbientEffects.tsx  # Lighting, particles, fog
│   │   ├── CameraRig.tsx       # GSAP scroll-driven camera
│   │   ├── PortalOverlay.tsx   # Transition overlay
│   │   ├── SkipIntroButton.tsx # Skip 3D intro
│   │   └── HeroFallback.tsx    # Mobile/reduced-motion fallback
│   ├── Timeline/               # Career timeline scrubber
│   ├── sections/               # Page sections (About, Experience, etc.)
│   ├── ui/                     # Reusable UI components
│   ├── layout/                 # Header, Footer, SkipLink
│   └── providers/              # SmoothScrollProvider
├── data/                       # All content data (experience, projects, etc.)
├── hooks/                      # Custom React hooks
├── lib/                        # Utilities (gsap, utils)
└── public/                     # Static assets
```

## Features

### 3D Hero Experience
- F1 Race Control Desk scene with ultrawide monitor
- Scroll-driven camera animation pushing into the monitor
- Portal transition crossfade into main content
- Skip intro button for accessibility
- Mobile/reduced-motion fallback

### Career Timeline ("Career Laps")
- Interactive timeline scrubber
- Keyboard accessible (arrow keys)
- Data-driven from single TypeScript file

### Content Sections
- About (education, background)
- Experience (timeline + detailed entries)
- Projects (filterable grid with detail pages)
- Coursework (grouped by category)
- Skills (grouped tags)
- Hobbies (F1 theme inspiration noted)
- Contact (social links, resume download)

## Performance Optimizations

- **Dynamic Import:** Hero3D loaded only on client-side
- **R3F Optimizations:**
  - `frameloop="demand"` - renders only when needed
  - `dpr={[1, 1.5]}` - capped pixel ratio
  - Suspense boundaries for async loading
- **Code Splitting:** 3D code isolated to homepage
- **Lenis + GSAP Integration:** Smooth scroll synced with animations

## Accessibility

- Skip link to bypass 3D hero
- `prefers-reduced-motion` respected (shows fallback)
- Keyboard navigation for timeline
- Focus states on all interactive elements
- Semantic HTML structure
- ARIA labels where appropriate

## Customization

### Update Content
All content is in the `data/` folder:
- `experience.ts` - Work experience
- `education.ts` - Education details
- `coursework.ts` - Courses and projects
- `projects.ts` - Portfolio projects
- `skills.ts` - Technical skills
- `timeline.ts` - Career timeline entries
- `hobbies.ts` - Hobbies/interests
- `site.ts` - Site metadata and links

### Update Theme
- Colors defined in `app/globals.css` under `@theme inline`
- Tailwind classes throughout components
- F1-inspired accent colors (red, green, blue)

### Upgrade 3D Scene
The current scene uses primitives. To upgrade:
1. Add GLTF models to `public/models/`
2. Use `useGLTF` from drei in `DeskSetup.tsx`
3. Add textures to `public/textures/`

## TODO Items

Search for "TODO" in the codebase for placeholder content that needs updating:
- Update email, LinkedIn, GitHub links in `data/site.ts`
- Add actual resume PDF to `public/resume.pdf`
- Add project details (problem, approach, results) in `data/projects.ts`
- Add coursework project details in `data/coursework.ts`
- Create OG image at `public/og-image.png`

## Development Checklist

### MVP (Day 1) ✓
- [x] Next.js project setup
- [x] Basic R3F Canvas with desk scene
- [x] GSAP ScrollTrigger + camera animation
- [x] Lenis smooth scroll
- [x] Skip intro + reduced motion fallback
- [x] All data files populated
- [x] Section components
- [x] Timeline scrubber
- [x] Mobile fallback

### Polish (Week 1)
- [ ] Add detailed textures to desk scene
- [ ] LED strip animations refined
- [ ] Portal crossfade effects polished
- [ ] Timeline synced with 3D telemetry
- [ ] Contact form (client-side)
- [ ] OG image created
- [ ] Lighthouse audit
- [ ] GLTF model upgrade (optional)

## License

MIT
