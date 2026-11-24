# 05 | Changelog & Riwayat Tugas

Dokumen ini mencatat setiap perubahan, penambahan fitur, dan keputusan teknis yang dilakukan pada repositori `ruangrasa-app`.

---

## 📅 [2026-11-24] | Perbaikan UX Navigasi, Deklutter AI Slop, & Format Judul Pipeline (|)
- **Bottom Navigation Active State**: Mengarahkan rute `/notifications` agar secara intuitif mengaktifkan tab **Beranda** (Home) dan bukan Profil.
- **Back Button**: Mengubah tombol kembali pada rute `/notifications` dan `/konsultasi` agar kembali ke `/home` bukan root landing `/`.
- **Deklutter & Kurangi AI Slop**: Menghilangkan banner edukasi/privasi berlebihan di `/notifications`, `/curhat`, `/komunitas`, `/konsultasi/saya`, dan `/konsultasi/[id]/session` agar antarmuka terasa natural layaknya aplikasi native nyata.
- **Format Judul Pipeline**: Mengganti seluruh format pemisah judul yang sebelumnya menggunakan em-dash (`—`) atau `--` menjadi pipeline (`|`) sesuai arahan desain.
- **Verifikasi Semua Rute**: Memastikan tidak ada rute blank (seluruh 22 rute terimplementasi lengkap).

---

## 📅 [2026-11-24] | Implementasi Fitur Chat AI Assistant & Sistem Knowledge Sharing AI Agent

### 1. Sistem Knowledge Sharing untuk AI Agent
- **Folder Baru**: Dibuat direktori [`agent-docs/`](file:///d:/Coding/ruangrasa-app/agent-docs) di root repositori.
- **Tujuan**: Memastikan transfer pengetahuan yang mulus ke AI Agent lainnya yang bekerja di proyek ini di masa depan.
- **Daftar Berkas Pengetahuan**:
  - `README.md`: Peta navigasi dokumentasi dan quick start.
  - `01-ARCHITECTURE-AND-TECH-STACK.md`: Spesifikasi Next.js 15, App Router, React 19, Tailwind tokens, dan mobile viewport shell (412px).
  - `02-BUSINESS-LOGIC-AND-DESIGN-SYSTEM.md`: 4 Pilar Stepped-Care RuangTeduh, aturan ikon tanpa emoji liar, palet warna *Serene Botanical*.
  - `03-AI-CHAT-DEMO-FEATURE.md`: Spesifikasi lengkap fitur AI Chat Demo, intent respons, dan panduan integrasi LLM sungguhan.
  - `04-DEV-GUIDE-AND-EXTENSIONS.md`: Panduan run command di Windows (`cmd /c npm ...`) dan konvensi penulisan kode.
  - `05-CHANGELOG-AND-TASK-HISTORY.md`: Catatan riwayat task ini.

---

### 2. Fitur Chat AI Assistant Demo (`/chat-ai`)
- **File Halaman**: [`app/chat-ai/page.tsx`](file:///d:/Coding/ruangrasa-app/app/chat-ai/page.tsx)
- **Kemampuan Utama**:
  1. **Pertanyaan Seputar Aplikasi**:
     - User menanyakan *"Apps apa ini sebenarnya?"* atau sejenisnya.
     - AI memberikan penjelasan hangat mengenai RuangTeduh/RuangRasa, pendekatan berjenjang (*Stepped-Care*), dan 3 pilar utama (Curhat Anonim, Lingkar Sebaya, Konsultasi Psikolog).
     - Disertai shortcut tombol langsung ke rute `/curhat`, `/komunitas`, dan `/konsultasi`.
  2. **Pertanyaan Kontak Admin**:
     - User menanyakan *"Berapa nomor kontak Admin?"*, *"WA admin"*, *"customer service"*, dll.
     - AI memberikan nomor resmi WhatsApp: `+62 812-3456-7890` (0812-RUANG-TEDUH), jam operasional (08:00 - 22:00 WIB), email `halo@ruangteduh.id`.
     - Terdapat tombol aksi sekali klik:
       - **Chat WhatsApp Admin** (tautan `https://wa.me/6281234567890` dengan pesan template).
       - **Salin Nomor** (tersedia feedback toast "Nomor admin disalin ke clipboard!").
  3. **Penanganan Krisis / Bantuan Darurat**:
     - Menampilkan informasi cepat hotline Kemenkes Darurat `119 ext 8` dan tombol direct call `tel:119`.
  4. **UI & Interaksi**:
     - Animasi *typing indicator* tiga titik sebelum AI membalas (delay ~900ms untuk efek natural).
     - *Quick Suggestion Chips* di bagian bawah untuk pertanyaan sekali sentuh.
     - Input text bebas dengan tombol kirim dan tombol hapus input.
     - Tombol *Reset Percakapan* di header untuk membersihkan riwayat pesan.
     - Auto-scroll mulus ke pesan terbaru.
     - Header dengan status *Online* (pulsing green dot) dan tombol kembali ke `/home`.

---

### 3. Integrasi Rute & Navigasi
- **Bottom Navigation** ([`components/ui/bottom-navigation.tsx`](file:///d:/Coding/ruangrasa-app/components/ui/bottom-navigation.tsx)):
  - Menambahkan `"/chat-ai"` ke dalam daftar `HIDE_NAV_PREFIXES` agar keyboard dan input bar chat tidak tertimpa bilah navigasi bawah.
- **Beranda** ([`app/home/page.tsx`](file:///d:/Coding/ruangrasa-app/app/home/page.tsx)):
  - Menempatkan akses chat AI secara elegan di **pojok kanan atas (header)** berupa ikon robot `smart_toy` dengan *pulse indicator*.
  - Menghapus banner kartu AI dan floating widget di body beranda agar layout utama tetap bersih (*decluttered*) dan fokus pada konten emosional utama.
- **Halaman Selamat Datang / Landing** ([`app/page.tsx`](file:///d:/Coding/ruangrasa-app/app/page.tsx)):
  - Menambahkan tombol CTA *"Coba Demo Chat AI (Tanya Info & Admin)"* agar penguji/user baru bisa langsung mencoba demo dari awal.
- **Halaman Not Found** ([`app/not-found.tsx`](file:///d:/Coding/ruangrasa-app/app/not-found.tsx)):
  - Dibuat halaman 404 resmi sesuai design system untuk menangani rute tidak valid dan mengoptimalkan build App Router Next.js 15.

---

### 4. Hasil Verifikasi
- Menjalankan `cmd /c "npm run build"`.
- Hasil: **Kompilasi sukses 100% tanpa error TypeScript maupun linting** (`Exit code 0`, 22 rute ter-generate).
