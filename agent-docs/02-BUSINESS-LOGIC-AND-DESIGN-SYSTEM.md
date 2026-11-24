# 02 — Logika Bisnis & Sistem Desain

## 1. Visi Produk (RuangTeduh / RuangRasa)
Platform ruang aman kesehatan mental yang berfokus pada mahasiswa dan dewasa muda Indonesia, mengatasi stigma negatif terhadap kesehatan mental dengan prinsip:
- **Pendekatan Berjenjang (Stepped-Care Model)**: Menyediakan dukungan mulai dari refleksi mandiri, curhat anonim antar sebaya, komunitas terfasilitasi, hingga konsultasi psikolog profesional berlisensi (SIPP).
- **Privasi & UU PDP**: Menjaga anonimitas pengguna (kode pseudonim seperti `P24`, `P08`) agar pengguna merasa aman bercerita tanpa takut identitasnya diketahui orang lain.
- **Akses Bantuan Krisis**: Akses cepat ke hotline darurat kesehatan mental nasional (`119 ext 8`) untuk situasi genting.

## 2. 4 Pilar Layanan
1. **Curhat Anonim (Tier 1)**
   - Ruang menuangkan emosi bebas nama.
   - Menggunakan avatar gradien lembut dan badge pseudonim unik.
   - Komentar yang masuk difilter dengan prinsip empati dan validasi perasaan.
2. **Komunitas Lingkar Sebaya (Tier 2)**
   - Diskusi berbasis tema relevan (Skripsi/Tugas Akhir, Anak Rantau, Krisis Karier/Quarter-Life Crisis, Relasi Keluarga, Gangguan Tidur/Insomnia).
   - Thread dengan moderasi aktif untuk mencegah ujaran kebencian atau pemicu trauma.
3. **Konsultasi Psikolog Profesional (Tier 3)**
   - Direktori psikolog klinis berlisensi resmi SIPP.
   - Fitur pemilihan jadwal fleksibel (*TimeSlotPicker*), subsidi biaya hingga 50% untuk mahasiswa.
   - Sesi terenkripsi (video & live chat privat).
4. **Area Operasional & Konselor (Tier 4)**
   - Dashboard khusus konselor dan psikolog.
   - Fitur pelacak kuota anti-burnout (*QuotaTracker*) untuk menjaga beban kerja konselor.
   - Jalur eskalasi darurat.

## 3. Aturan Desain (Design Guidelines)
- **Tanpa Emoji Liar**: Seluruh ikonografi visual menggunakan Material Symbols Outlined atau ikon SVG resmi (`components/ui/icon.tsx`). Ini menjaga nuansa terapeutik, tenang, dan profesional.
- **Tipografi Ramah**: `Roboto Flex` dengan skala ukuran `label-sm`, `label-md`, `body-sm`, `body-md`, `headline-sm`, `headline-md`.
- **Target Sentuh**: Tombol dan area klik interaktif memiliki tinggi minimal 44px (`min-h-11`) untuk kemudahan navigasi jari tangan (mobile ergonomics).
- **Radius Sudut**: Sudut melengkung lembut (`rounded-2xl` untuk card, `rounded-xl` untuk elemen input/tombol, `rounded-full` untuk status pill dan avatar).
