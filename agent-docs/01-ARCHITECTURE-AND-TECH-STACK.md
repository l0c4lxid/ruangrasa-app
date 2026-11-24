# 01 | Arsitektur & Tech Stack

## 1. Spesifikasi Teknologi
- **Framework**: Next.js 15.5.28 (App Router)
- **Library UI**: React 19.0.0
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.4 + PostCSS 8.5.32
- **Iconography**: Google Material Symbols Outlined (Web Font + SVG icons)
- **Typography**: `Roboto Flex` via Google Fonts

## 2. Struktur Direktori Proyek
```text
ruangrasa-app/
├── agent-docs/                  # Knowledge Base untuk AI Agent
├── app/                         # Next.js App Router
│   ├── auth/                    # /auth/login, /auth/register
│   ├── chat-ai/                 # /chat-ai (Fitur AI Assistant Demo)
│   ├── curhat/                  # /curhat, /curhat/buat, /curhat/[id]
│   ├── home/                    # /home (Dashboard beranda)
│   ├── komunitas/               # /komunitas, /komunitas/[slug]
│   ├── konselor/                # /konselor, /konselor/kuota, /konselor/laporan, /konselor/moderation
│   ├── konsultasi/              # /konsultasi, /konsultasi/saya, /konsultasi/[id]/...
│   ├── notifications/           # /notifications
│   ├── onboarding/              # /onboarding/identity
│   ├── profile/                 # /profile
│   ├── settings/                # /settings
│   ├── welcome/                 # /welcome
│   ├── globals.css              # Global styles & font imports
│   ├── layout.tsx               # Root mobile frame layout
│   └── page.tsx                 # Root landing page (Welcome / Guest entry)
├── components/
│   └── ui/                      # Shared UI reusable components
│       ├── avatar.tsx
│       ├── bottom-navigation.tsx
│       ├── icon.tsx
│       ├── pseudonym-badge.tsx
│       ├── quota-tracker.tsx
│       └── time-slot-picker.tsx
├── PRD.md                       # Product Requirement Document
├── DESIGN.md                    # Design System Specification
├── tailwind.config.js           # Extended color tokens & typography
└── package.json
```

## 3. Layout Shell Mobile Viewport
Aplikasi dirancang dengan pendekatan **Mobile-First App Viewport**:
- File: `app/layout.tsx`
- Background luar: `#EAEFEA` (soft botanical outer canvas).
- Kontainer inti: `max-w-[412px] min-h-dvh bg-surface` di tengah layar, memberikan tampilan menyerupai smartphone native modern.
- Bilah navigasi bawah (`BottomNavigation`): `fixed bottom-0 max-w-[412px] mx-auto`.
  - Tersembunyi pada landing page (`/`), onboarding, auth, detail subpage konsultasi, konselor portal, dan chat AI fullscreen.

## 4. Design Tokens & Palette Warna
Mengacu pada palet botani Material You yang menenangkan (*Serene Botanical*):
- `primary`: `#096444` (Sapling Green utama)
- `primary-container`: `#2e7d5b`
- `secondary`: `#406655`
- `secondary-container`: `#bfe9d3`
- `surface`: `#edfef0`
- `surface-container-lowest`: `#ffffff` (Card background)
- `surface-container-low`: `#e7f8eb`
- `surface-container`: `#e1f2e5`
- `tertiary`: `#844728` (Care Coral / Terracotta accents)
- `tertiary-fixed`: `#ffdbcc` (Emergency alert banners)
- `on-surface`: `#111e17` (Charcoal primary text, hindari pure black `#000000`)
- `outline`: `#6f7a72` (Muted text / borders)
