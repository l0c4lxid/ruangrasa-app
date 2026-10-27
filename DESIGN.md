# Design System: RuangRasa

## 1. Visual Theme & Atmosphere
A restrained, warm-minimalist interface with confident asymmetric layouts and fluid spring-physics micro-motion. The atmosphere is clinical yet nurturing — like a well-lit counseling center with natural wood accents. Calm confidence for mental health accessibility. Density: Balanced (5). Variance: Offset Asymmetric (7). Motion: Fluid CSS (6).

## 2. Color Palette & Roles
- **Canvas Warm White** (#FAFAFB) — Primary background, gradient from warm white to very light oat
- **Pure Surface** (#FFFFFF) — Card and container fill, elevated surfaces
- **Charcoal Ink** (#1F2937) — Primary text, Zinc-800 depth
- **Muted Sage** (#6B7280) — Secondary text, descriptions, metadata
- **Whisper Border** (rgba(226, 232, 240, 0.5)) — Card borders, 1px structural lines
- **Sapling Green** (#22C58E) — Single accent for CTAs, active states, positive affirmation badges. Saturation 52%. Calming therapeutic green.
- **Care Coral** (#F59E0B) — Warm accent variant for gentle warnings and reminder badges (secondary to Sapling Green)

## 3. Typography Rules
- **Display:** Poppins — Track-tight, rounded geometric, friendly yet professional. Weight-driven hierarchy (700 for headlines, 600 for subheads)
- **Body:** Poppins — Relaxed leading (1.6), 65ch max-width, neutral secondary color
- **Mono:** JetBrains Mono — For code, timestamps, metadata in operational dashboards
- **Banned:** Inter, generic serifs in all UI. No pure black — use Charcoal Ink.

## 4. Component Stylings
- **Buttons:** Flat, no outer glow. Tactile -1px translate on active. Sapling Green fill for primary, ghost/outline for secondary. Rounded-lg (0.5rem) for standard, rounded-full for pill tags. Micro-spring scale (0.97) on hover.
- **Cards:** Generously rounded corners (1rem). Diffused whisper shadow `0 1px 3px rgba(0,0,0,0.05)`. Used for content groupings. High-density operational panels: replace with border-top dividers.
- **Avatar:** Soft rounded (0.75rem) for user photos, with fallback gradient from Sapling Green to Care Coral. Pseudonym badges use subtle chip style.
- **Inputs:** Label above input, helper text optional, error text below. Focus ring: 2px solid Sapling Green with offset. No floating labels — clarity over animation.
- **Loaders:** Skeletal shimmer matching exact layout dimensions. No circular spinners. Pulse opacity for loading states.
- **Empty States:** Composed illustrations — not just "No data" text. For mental health context: gentle wave patterns, warm illustrations.
- **Tag Badges:** Rounded-full pills for pseudonyms, status indicators. Success green, warning amber, info blue muted.

## 5. Layout Principles
Grid-first responsive architecture. Asymmetric splits for Hero sections using CSS Grid. Strict single-column collapse below 768px. Max-width containment at 1440px. No flexbox percentage math. Generous internal padding: 4rem section gaps, 1.5rem content gutters. Hero uses 40/60 split with inline image typography (photos between words at type-height, rounded).

## 6. Motion & Interaction
Spring physics for all interactive elements: stiffness 100, damping 20. Staggered cascade reveals for lists (100ms between items). Perpetual micro-loops: subtle pulse on notification badges, shimmer on loading. Hardware-accelerated transforms only — animate transform and opacity. min-h-[100dvh] for full-height sections, never h-screen.

## 7. Anti-Patterns (Banned)
- No emojis (use therapeutic iconography only)
- No Inter font
- No pure black (#000000)
- No neon/outer glow shadows
- No oversaturated accents
- No 3-column equal card layouts — use 2-column Zig-Zag or asymmetric
- No generic placeholder names — use culturally appropriate pseudonyms
- No broken image links — use picsum.photos with seed
- No centering Hero sections (variance > 4)
- No AI copywriting clichés ("Elevate", "Seamless", "Unleash")
- No filler UI text ("Scroll to explore", chevrons)
- No circular spinner loaders

## 8. Cultural & Accessibility Notes
- Bahasa Indonesia as primary language, English as secondary
- High contrast ratios: minimum 4.5:1 for text, 3:1 for UI components
- Touch targets: minimum 44px tap target
- Typography scaling via clamp() — headlines 1.5rem to 2.5rem, body 0.875rem to 1.125rem
- WCAG 2.1 AA compliance mandatory — semantic HTML, ARIA labels, keyboard navigation
- UU PDP compliance — data minimization, consent-first flows

