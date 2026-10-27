# RuangTeduh Design System

## Brand
Platform ruang aman kesehatan mental mahasiswa & dewasa muda Indonesia. Pendekatan berjenjang (Stepped-Care). Emotional anchor: *teduh* — calm, safe, non-judgmental, quietly empowering.

## Colors
| Token | Value | Usage |
|---|---|---|
| `canvas` | `#FAFAFB` | Page background |
| `surface` | `#FFFFFF` | Cards, containers |
| `ink` | `#1F2937` | Primary text |
| `sage` | `#6B7280` | Secondary text |
| `border` | `rgba(226,232,240,0.5)` | Borders, dividers |
| `primary` (Sapling Green) | `#22C58E` | Primary actions, links, icons |
| `primary-dark` | `#16A34A` | Pressed / hover |
| `secondary` (Care Coral) | `#F59E0B` | Accents, warnings, FAB |
| `on-surface` | `#111e17` | Material You text |

## Typography
- **Font**: Poppins (400/500/600/700) via Google Fonts
- **Scale**: `text-xs` → `text-sm` → `text-base` → `text-xl` → `text-2xl` → `text-3xl`
- **Body**: `text-base` leading-relaxed
- **Headlines**: `font-semibold` tracking-tight
- **Labels**: `text-xs` `label-sm`

## Layout
- **Mobile-first**: single column `<768px`, max-width `1440px` (`max-w-7xl`)
- **Outer padding**: `px-4 sm:px-6`
- **Tap targets**: `min-h-11` (44px) minimum
- **Spacing**: 4px / 8px rhythm. `space-y-2`, `space-y-3`, `space-y-4`

## Corners & Shadows
- **Cards**: `rounded-xl` (border radius 0.75rem → 1rem on larger)
- **Buttons**: `rounded-lg` (0.5rem)
- **Pills / Badges**: `rounded-full`
- **Avatars**: `rounded-2xl`
- **Shadow resting**: `shadow-sm`
- **Shadow interactive**: `hover:shadow-md`

## Motion
- **Spring**: `transition-transform 0.2s ease, opacity 0.2s ease` (`.transition-spring`)
- **Buttons**: `active:scale-95`
- **Links**: `hover:scale-95` / `hover:text-primary`

## Components (components/ui)
| Component | Props |
|---|---|
| `Avatar` | `{ src?: string, name: string, size?: number }` — soft gradient fallback, 56px on profile |
| `PseudonymBadge` | `{ pseudo: string }` — `Pxx` chip `bg-primary/10` |
| `Icon` | `{ name: string, className? }` — therapeutic SVG (curhat/komunitas/konsultasi/konselor) |
| `TimeSlotPicker` | `{ slots, value?, onChange? }` — 3-col grid, selected = `bg-primary` |
| `QuotaTracker` | `{ used, total, label? }` — anti-burnout progress bar |

## Patterns
- No emojis — all icons SVG via `Icon` component
- No Inter — Poppins only
- No pure black #000 — charcoal `#1F2937`
- No neon — botanical green + terracotta
- Auth forms: 768px max modal card, input height 52px, label above
- Lists: `space-y-3` cards, `p-4` minimum touch padding
- Bottom nav (mobile): `fixed bottom-0`, 5 destinations, active = green pill

## Routes (23 screens)
| # | Route | Status |
|---|---|---|
| 0 | `/` | ✅ Home dashboard — pills, 3 action cards, panduan emosional, diskusi terbaru |
| 1 | `/auth/login` | ✅ Masuk — SSO, Google, UU PDP consent |
| 2 | `/auth/register` | ✅ Daftar — institusi, password strength |
| 3 | `/curhat` | ✅ Feed curhat — list + quick create |
| 4 | `/curhat/buat` | ✅ Form create — topic, judul, cerita, anon toggle |
| 5 | `/curhat/[id]` | ✅ Detail curhat — Avatar, PseudonymBadge, balasan |
| 6 | `/komunitas` | ✅ Daftar topik — grid |
| 7 | `/komunitas/buat` | ✅ Form thread — judul, topik, tag, body |
| 8 | `/komunitas/search` | ✅ Search bar + results |
| 9 | `/komunitas/topic/[id]` | ✅ Thread list per topik |
| 10 | `/komunitas/topic/[id]/thread/[threadId]` | ✅ Detail thread + balasan |
| 11 | `/konsultasi` | ✅ Daftar psikolog — cards |
| 12 | `/konsultasi/[id]` | ✅ Profil + booking slot |
| 13 | `/konsultasi/[id]/payment` | ✅ Ringkasan + metode bayar |
| 14 | `/konsultasi/[id]/session` | ✅ Live session — video + chat |
| 15 | `/konsultasi/[id]/ulasan` | ✅ Rating + review |
| 16 | `/konselor` | ✅ Dashboard — QuotaTracker + aksi |
| 17 | `/konselor/moderation` | ✅ Antrian moderasi |
| 18 | `/konselor/kuota` | ✅ Kuota harian + rekomendasi |
| 19 | `/konselor/pasien` | ✅ Daftar pasien |
| 20 | `/profile` | ✅ Profil + Logout → `/settings` |
| 21 | `/settings` | ✅ Daftar pengaturan — notifikasi → `/notifications` |
| 22 | `/notifications` | ✅ Preferensi notifikasi + empty state |
