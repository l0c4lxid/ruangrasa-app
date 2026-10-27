---
name: Serene Botanical Material
colors:
  surface: '#edfef0'
  surface-dim: '#cdded2'
  surface-bright: '#edfef0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e7f8eb'
  surface-container: '#e1f2e5'
  surface-container-high: '#dcecdf'
  surface-container-highest: '#d6e7da'
  on-surface: '#111e17'
  on-surface-variant: '#3f4943'
  inverse-surface: '#25342b'
  inverse-on-surface: '#e4f5e8'
  outline: '#6f7a72'
  outline-variant: '#bec9c1'
  surface-tint: '#176b4b'
  primary: '#096444'
  on-primary: '#ffffff'
  primary-container: '#2e7d5b'
  on-primary-container: '#d0ffe3'
  inverse-primary: '#88d6af'
  secondary: '#406655'
  on-secondary: '#ffffff'
  secondary-container: '#bfe9d3'
  on-secondary-container: '#446a59'
  tertiary: '#844728'
  on-tertiary: '#ffffff'
  tertiary-container: '#a25e3e'
  on-tertiary-container: '#fff2ed'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a4f3ca'
  primary-fixed-dim: '#88d6af'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#c2ecd6'
  secondary-fixed-dim: '#a6d0bb'
  on-secondary-fixed: '#002115'
  on-secondary-fixed-variant: '#284e3e'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb694'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#70371a'
  background: '#edfef0'
  on-background: '#111e17'
  surface-variant: '#d6e7da'
typography:
  display-lg:
    fontFamily: Roboto Flex
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  display-md:
    fontFamily: Roboto Flex
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg:
    fontFamily: Roboto Flex
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Roboto Flex
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Roboto Flex
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Roboto Flex
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Roboto Flex
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Roboto Flex
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: Roboto Flex
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Roboto Flex
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-sm: 0.75rem
  margin: 1.25rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system is tailored for an emotional well-being, peer support, and professional mental health consultation platform dedicated to Indonesian university students and young professionals (ages 18–30). The emotional anchor of the brand is *teduh* (sheltered and calm), safe, non-judgmental, and quietly empowering.

The design philosophy harmonizes Google's Material Design 3 (Material You) with an organic, grounding aesthetic. It avoids the sterile, clinical feel of traditional healthcare apps as well as the overly bright, chaotic gamification common in student apps. The visual language favors open breathing space, soft organic surfaces, deeply comforting typography, and natural tactile feedback. 

Copy and tone of voice use gentle, empathetic Indonesian phrasing (*"Ceritakan harimu,"* *"Kamu tidak sendiri"*), treating the interface as a patient, warm companion rather than an assertive dashboard.

## Colors

The palette draws directly from grounded botanical greens and grounding earth tones to stabilize user mood and reduce screen fatigue.

- **Primary (`#2E7D5B`)**: The deep forest botanical anchor. Used for primary interactive triggers, active navigation items, critical states, and strong brand presence.
  - *Primary Dark (`#1B5E43`)*: Pressed states, elevated emphasis, and high-contrast badges.
  - *Primary Light (`#D8F0E3`)*: Tonal card backgrounds, active pill highlights, selected chips, and supportive containers.
- **Secondary (`#557C6A`)**: Soft sage green used for secondary actions, supporting metadata tags, subtle icons, and secondary navigational elements.
- **Tertiary (`#D98C68`)**: Warm terracotta clay. Provides warmth and human presence. Reserved for mood trackers, gentle alerts, journal highlights, and celebratory reflective milestones.
- **Neutral / Background (`#F7FAF7`) & Surface (`#FFFFFF`)**: A calm, tinted off-white canvas preventing harsh glare during nighttime or stress-driven app usage.
  - *Surface Variant (`#EAF1EC`)*: Segmented controls, input fill containers, resting card backgrounds.
- **Text & Outlines**:
  - *Text Primary (`#17251D`)*: Deep forest evergreen black, maintaining accessible contrast while softer than pure `#000000`.
  - *Text Secondary (`#526258`)*: Muted leaf tone for subtitles, placeholder copy, timestamps, and metadata.
  - *Outline (`#CBD7CE`)*: Ghost borders, dividers, unselected tab boundaries, and card perimeters.
- **Functional Semantics**:
  - *Success (`#287A4B`)*, *Warning (`#98651C`)*, *Error (`#B3261E`)*.

## Typography

The typography leverages `Roboto Flex` to deliver the structural rigor of Material Design while offering high legibility across varied screen densities. 

- **Display & Headlines**: Generous optical spacing and relaxed line-heights avoid anxiety-inducing visual density. Used for welcome banners, mood check-ins, and session hero cards.
- **Body**: Relaxed leading (`lineHeight: 24px` on 16px text) guarantees high comfort during long therapy logs, journal reflections, and psych-educational articles.
- **Labels**: Medium-weighted (`500`) tokens guarantee legible interactive affordances across action buttons, category filters, and session tags.

## Layout & Spacing

The layout is built mobile-first, keyed to a standard 390px viewport width (typical modern device width in the Indonesian mobile demographic), scaling cleanly through fluid single-column mobile arrangements to dual-column tablet forms.

- **Mobile Canvas (320px – 480px)**: 4-column layout with `margin: 1.25rem` (20px) outer padding, allowing touch targets to reach screen boundaries gracefully without thumb strain.
- **Tablet / Large Mobile (481px – 840px)**: 8-column layout with 24px gutters, enabling side-by-side arrangement for therapist profiles, appointment calendars, and journal archives.
- **Rhythm**: All layout spaces adhere strictly to 4px and 8px rhythmic steps. Micro-spaces (`space-xs`, `space-sm`) structure chip groupings, mood rating tags, and badge paddings. Macro-spaces (`space-lg`, `space-xl`) isolate delicate reflection spaces, maintaining emotional lightness.

## Elevation & Depth

This design system uses a hybrid of **Material 3 Tonal Containers** and **Ambient Botanical Diffusion** rather than sharp dropped shadows, producing a calm, non-threatening atmosphere.

- **Level 0 (Base Canvas)**: Background `#F7FAF7`. Flat, resting un-elevated.
- **Level 1 (Resting Cards & Containers)**: Surface `#FFFFFF` with a thin structural boundary (`1px solid #CBD7CE`) and ambient tinted shadow: `box-shadow: 0 2px 8px -2px rgba(23, 37, 29, 0.04), 0 1px 4px -1px rgba(46, 125, 91, 0.03)`.
- **Level 2 (Interactive Cards / Floating Chips)**: Surface `#FFFFFF`, `box-shadow: 0 4px 16px -4px rgba(23, 37, 29, 0.06), 0 2px 6px -2px rgba(46, 125, 91, 0.05)`.
- **Level 3 (Modals, Bottom Sheets & Sticky Actions)**: Surface `#FFFFFF` with backdrop overlay `rgba(23, 37, 29, 0.35)` with `backdrop-filter: blur(4px)`. Elevated element carries `box-shadow: 0 12px 32px -8px rgba(23, 37, 29, 0.12)`.

## Shapes

The shape system adopts soft organic corners to evoke safety and approachability. The baseline `roundedness: 2` establishes a 16px default border-radius (`1rem`) across standard cards, with deliberate variations:

- **Buttons & Input Fields**: 12px to 16px corner radius.
- **Cards & Consultation Tiles**: 16px to 20px radius.
- **Bottom Sheets**: 28px top-left and top-right radii.
- **Chips, Mood Indicators & Floating Badges**: Full pill shape (`9999px`).

## Components

### Buttons
- **Primary Button**: Height of 48–52px. Full width on mobile. Solid `#2E7D5B` background with `#FFFFFF` text. Corner radius of 14px (`0.875rem`). Hover/focused state transitions to `#1B5E43`.
- **Secondary / Tonal Button**: Height of 48px. Solid `#D8F0E3` background with `#1B5E43` text. No border.
- **Tertiary / Ghost Button**: Height of 44px. Transparent background, text colored with `#2E7D5B`, subtle rounded hover state using `#EAF1EC`.
- **Destructive / Urgent Action**: Subtle `#B3261E` tint on `#FFFFFF` with thin error outline.

### Input Fields & Text Areas
- Built for open emotional journaling and confidential form inputs.
- Minimum tap target height of 52px. Background `#EAF1EC` in resting state with a 1px border of `#CBD7CE`. Corner radius of 14px.
- Focus state switches background to `#FFFFFF` with a 2px active border in `#2E7D5B`. Text color is `#17251D`, placeholder in `#526258`.
- Helper texts and character counts sit comfortably below with a 4px vertical clearance in `label-sm`.

### Chips & Filter Pills
- **Filter Chips**: Height of 36px. Border radius of 9999px (full pill). Resting background `#FFFFFF` with 1px border `#CBD7CE`. Text `#526258`.
- **Active / Selected Chip**: Background `#D8F0E3`, border `#2E7D5B`, text `#1B5E43`, leading checkmark or botanical dot icon.
- **Mood Rating Chips**: Height of 42px with 16px padding. Terracotta accents (`#D98C68`) when expressing vulnerable/intense moods; primary green (`#2E7D5B`) when expressing grounded/relaxed moods.

### Cards
- **Consultation / Counselor Card**: White (`#FFFFFF`) surface, 18px border radius, 1px border `#CBD7CE`. Padding `space-lg` (24px). Accommodates counselor avatar (56px, rounded-2xl), name, psychological specialty tag, rating badge, and appointment booking CTA.
- **Journal / Prompt Card**: Background `#EAF1EC` or tonal `#D8F0E3`. 16px radius. Warm terracotta accent bar or pill tag (`#D98C68`) indicating daily reflection topics.

### Checkboxes & Radio Controls
- Radio controls and checkboxes feature 22px tap sizes wrapped in a minimum 48px touch boundary.
- Unchecked: 2px border `#CBD7CE` on `#FFFFFF`.
- Checked: Filled `#2E7D5B` with white checkmark or inner dot. Transitions utilize a 200ms ease-out spring.

### Bottom Sheets & Modal Drawers
- Used extensively for mobile consultation bookings, mood check-ins, and crisis intervention resources (*Bantuan Segera*).
- Surface `#FFFFFF` with 28px top corners, dragging handle of 36x4px in `#CBD7CE` centered at top with 12px margin.

### Emotional Support Extras
- **Panic / Crisis Button ("Butuh Teman Cerita?")**: Fixed bottom floating action pill with a comforting, non-alarming tertiary clay accent `#D98C68` and high-contrast text `#FFFFFF`.
- **Breathing / Mindfulness Timer**: Circular ambient container pulsing using translucent primary green rings (`rgba(46, 125, 91, 0.15)` to `rgba(216, 240, 227, 0.4)`).