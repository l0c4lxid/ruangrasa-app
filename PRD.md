# PRD — RuangRasa (Prototype)

## Visi
Platform ruang aman kesehatan mental mahasiswa & dewasa muda Indonesia, pendekatan berjenjang (Stepped-Care). WCAG 2.1 AA. UU PDP (minimal data, consent-first).

## 4 Pilar
1. **Ruang Curhat Anonim** — curhat bebas nama, pseudonimitas otomatis, balasan empatik.
2. **Komunitas Lingkar Sebaya** — thread terfasilitasi aman, topik berkelompok.
3. **Konsultasi Psikolog Profesional** — bersubsidi hingga 50%, jadwal fleksibel, ruang tenang.
4. **Area Operasional Konselor** — quota anti-burnout, moderasi, hotline 119.

## Design Tokens (lihat DESIGN.md)
- Canvas #FAFAFB, Surface #FFFFFF, Text #1F2937, Sage #6B7280
- Border rgba(226,232,240,0.5), Sapling Green #22C58E, Care Coral #F59E0B
- Font Poppins (400/500/600/700)

## Mobile-first
Single-column <768px. Max-width 1440px. Tap target ≥44px. No emoji. No Inter.

## 23 Layar
### Home
1. `/` — dashboard: greeting, emergency banner (119 ext 8), 3 service cards, panduan emosional, diskusi terbaru, bottom nav 5-tab

### Curhat (4)
2. `/curhat` — feed: quick create + list cards (Avatar + PseudonymBadge)
3. `/curhat/buat` — form: topic, judul, cerita, anon toggle
4. `/curhat/[id]` — detail: cerita + komentar balasan

### Komunitas (5)
5. `/komunitas` — grid topik (Skripsi, Rantau, Karier, Keluarga, Tidur)
6. `/komunitas/buat` — form thread (judul, topik, body, tag)
7. `/komunitas/search` — search bar + filterable results
8. `/komunitas/topic/[id]` — daftar thread per topik
9. `/komunitas/topic/[id]/thread/[threadId]` — detail thread + balas (fixed input)

### Konsultasi (6)
10. `/konsultasi` — list psikolog card
11. `/konsultasi/[id]` — profil + TimeSlotPicker booking
12. `/konsultasi/[id]/payment` — ringkasan + metode bayar
13. `/konsultasi/[id]/session` — live video + chat
14. `/konsultasi/[id]/ulasan` — rating bintang + review

### Konselor (4)
15. `/konselor` — dashboard: QuotaTracker + aksi grid
16. `/konselor/moderation` — antrian (Setujui / Tolak + hotline 119)
17. `/konselor/kuota` — kuota harian + rekomendasi istirahat
18. `/konselor/pasien` — daftar pasien pseudom

### Akun (5)
19. `/auth/login` — email + password, UU PDP consent, SSO/Google
20. `/auth/register` — nama, email, institusi, password
21. `/profile` — Avatar + pseudom, settings link, logout
22. `/settings` — daftar: notifikasi, privasi, tema, bahasa, hapus akun
23. `/notifications` — preferensi notifikasi + empty state

## Shared UI (components/ui/)
- `avatar.tsx` — AvatarSoftGradient fallback
- `pseudonym-badge.tsx` — chip Pxx anonim
- `time-slot-picker.tsx` — grid slot selectable
- `quota-tracker.tsx` — progress bar anti-burnout
- `icon.tsx` — therapeutic SVG iconography
