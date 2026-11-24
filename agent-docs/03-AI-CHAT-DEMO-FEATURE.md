# 03 — Fitur Chat AI Assistant Demo

## 1. Ringkasan & Tujuan Fitur
Fitur **Chat AI Assistant ("Asisten Teduh")** dibuat untuk mendemonstrasikan pengalaman interaktif bagi pengguna aplikasi RuangTeduh. Asisten AI ini berfungsi sebagai titik kontak pertama (*first responder & guide*) yang ramah, hangat, dan informatif.

### Misi Utama Demo AI:
1. **Menjawab Pertanyaan Tentang Aplikasi**: Menjelaskan apa itu RuangTeduh/RuangRasa, pilar layanan, cara kerja curhat anonim, dan manfaat platform.
2. **Memberikan Kontak Admin**: Menjawab pertanyaan seputar customer support, nomor WhatsApp admin resmi, dan link langsung ke WhatsApp CS.
3. **Membantu Navigasi Fitur**: Memberikan shortcut langsung ke fitur Curhat (`/curhat`), Komunitas (`/komunitas`), dan Konsultasi Psikolog (`/konsultasi`).
4. **Protokol Keselamatan / Krisis**: Jika pengguna menunjukkan tanda krisis atau bahaya diri, AI segera menampilkan hotline darurat `119 ext 8`.

## 2. Lokasi & Rute
- **Halaman Utama Chat**: `app/chat-ai/page.tsx` (URL: `/chat-ai`)
- **Akses Cepat (Entry Point)**: 
  - Floating Action Button (FAB) AI Assistant di `app/home/page.tsx`
  - Banner / Quick Card AI Assistant di Beranda
  - Tombol bantuan langsung dari menu

## 3. Perilaku Interaktif (*Interactive Behaviors*)
- **Typing Indicator**: Tampilan visual animasi bouncing dots ketika AI sedang menyusun balasan untuk memberikan rasa percakapan nyata.
- **Quick Suggestion Chips**: Rekomendasi pertanyaan cepat yang dapat diklik satu sentuhan:
  - *"Apa itu RuangTeduh?"*
  - *"Berapa nomor admin / CS?"*
  - *"Bagaimana cara curhat anonim?"*
  - *"Bagaimana cara konsultasi dengan psikolog?"*
  - *"Apakah data saya aman?"*
- **Action Buttons di Balasan AI**:
  - Tombol hubungi WhatsApp Admin (`https://wa.me/6281234567890`)
  - Tombol buka halaman terkait di dalam aplikasi
- **Input Bebas**: Pengguna dapat mengetik pertanyaan bebas apa pun; sistem menggunakan intelligent keyword & intent matching dengan fallback terapeutik yang empatik.
- **Clear / Reset Chat**: Pengguna dapat menghapus riwayat percakapan untuk memulai sesi baru yang segar.

## 4. Panduan Ekstensi ke Real LLM (Next Steps untuk AI Agent Lain)
Jika di kemudian hari ingin menghubungkan chat ini ke model AI sungguhan (misal Google Gemini API):
1. Install SDK resmi: `npm install @google/genai`
2. Buat API route: `app/api/chat/route.ts`
3. Berikan System Instruction:
   ```text
   Kamu adalah "Asisten Teduh", AI pendamping ramah dari platform kesehatan mental RuangTeduh.
   Gaya bicaramu tenang, empatik, menggunakan Bahasa Indonesia yang hangat dan santun.
   Nomor Admin RuangTeduh: WhatsApp +62 812-3456-7890 (08:00 - 22:00 WIB).
   Hotline Darurat: 119 ext 8.
   Jangan pernah memberikan diagnosis medis klinis; selalu sarankan konsultasi dengan psikolog di menu /konsultasi jika memerlukan bantuan profesional.
   ```
4. Ganti handler mock pada `app/chat-ai/page.tsx` dengan fetch request ke `/api/chat`.
