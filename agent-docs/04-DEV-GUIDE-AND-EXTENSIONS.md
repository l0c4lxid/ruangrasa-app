# 04 | Panduan Development & Ekstensi

## 1. Perintah Standar (Windows Environment)
Pada sistem operasi Windows, PowerShell default mungkin membatasi script `.ps1`. Gunakan wrapper `cmd /c` untuk menjalankan npm command:

- **Jalankan Development Server**:
  ```powershell
  cmd /c "npm run dev"
  ```
  Akses di browser pada: `http://localhost:3000`

- **Build Production**:
  ```powershell
  cmd /c "npm run build"
  ```

- **Jalankan Hasil Build**:
  ```powershell
  cmd /c "npm run start"
  ```

## 2. Aturan Penting Saat Mengedit Kode
1. **Selalu Jaga Shell 412px**: Jangan menghapus wrapper `max-w-[412px]` di `app/layout.tsx`. Seluruh halaman harus tetap pas dan teratur di dalam viewport mobile ini.
2. **Patuhi `DESIGN.md`**:
   - Gunakan token warna Tailwind yang sudah didefinisikan (`primary`, `secondary-container`, `surface-container-lowest`, `text-on-surface`, dll.).
   - Jangan gunakan emoji sembarangan pada elemen UI; gunakan `Material Symbols Outlined` atau SVG kustom.
3. **TypeScript Strictness**:
   - Next.js 15 App Router menggunakan async params pada Dynamic Route:
     ```tsx
     // Pola Next.js 15:
     export default function Page({ params }: { params: Promise<{ id: string }> }) {
       const { id } = React.use(params);
       ...
     }
     ```
4. **Sharing Pengetahuan Antar Agent**:
   - Apabila Anda menambahkan halaman atau fitur baru, perbarui file markdown di `agent-docs/` dan tuliskan changelog secara jelas agar agent berikutnya tahu apa yang telah dilakukan.
