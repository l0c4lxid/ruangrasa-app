# Agent Knowledge Base | RuangTeduh (RuangRasa App)

> **Catatan untuk AI Agent / Developer**: Direktori ini dibuat khusus sebagai pusat transfer pengetahuan (*knowledge sharing*) antar AI Agent. Setiap agent yang bekerja pada repositori ini wajib membaca dan memperbarui dokumentasi di folder ini ketika melakukan modifikasi arsitektur atau penambahan fitur baru.

---

## 📌 Daftar Dokumen Pengetahuan

1. [01. Arsitektur & Tech Stack](file:///d:/Coding/ruangrasa-app/agent-docs/01-ARCHITECTURE-AND-TECH-STACK.md)
   - Framework (Next.js 15 App Router, React 19, TypeScript)
   - Styling (Tailwind CSS, Material You Botanical Palette, Design Tokens)
   - Mobile Viewport Shell (Constraint 412px, safe area, Material Symbols)
   
2. [02. Logika Bisnis & Sistem Desain](file:///d:/Coding/ruangrasa-app/agent-docs/02-BUSINESS-LOGIC-AND-DESIGN-SYSTEM.md)
   - Visi & Pendekatan Berjenjang (*Stepped-Care Model*)
   - 4 Pilar Utama: Curhat Anonim, Komunitas Sebaya, Konsultasi Psikolog, Konselor
   - Aturan Desain: Tanpa emoji liar (gunakan SVG/Material Symbols), warna teduh, privasi UU PDP
   
3. [03. Fitur Chat AI Assistant Demo](file:///d:/Coding/ruangrasa-app/agent-docs/03-AI-CHAT-DEMO-FEATURE.md)
   - Tujuan fitur: Demo asisten interaktif untuk user
   - Kemampuan: Menjawab pertanyaan tentang aplikasi (*Apa itu RuangTeduh/RuangRasa*), membagikan nomor admin/CS (+ direct link WhatsApp), panduan darurat (119 ext 8)
   - Arsitektur komponen chat, state management, integrasi LLM (Gemini API / API Route)
   
4. [04. Panduan Development & Ekstensi](file:///d:/Coding/ruangrasa-app/agent-docs/04-DEV-GUIDE-AND-EXTENSIONS.md)
   - Cara menjalankan dev server & build di lingkungan Windows (`cmd /c npm ...`)
   - Konvensi penulisan kode, komponen shared UI, dan checklist sebelum commit

5. [05. Changelog & Riwayat Tugas](file:///d:/Coding/ruangrasa-app/agent-docs/05-CHANGELOG-AND-TASK-HISTORY.md)
   - Catatan historis modifikasi fitur dan keputusan teknis oleh AI Agent


---

## ⚡ Quick Start untuk AI Agent Baru
- **Proyek**: Web App Mobile-First RuangTeduh (layanan kesehatan mental aman mahasiswa Indonesia).
- **File Konfigurasi Utama**: `tailwind.config.js`, `tsconfig.json`, `app/globals.css`, `app/layout.tsx`.
- **Root Screen**: `app/page.tsx` (Welcome/Landing), `app/home/page.tsx` (Dashboard utama user).
- **Feature AI Chat**: `app/chat-ai/page.tsx` (Route `/chat-ai`) + Quick Access Floating Button di halaman utama.
- **Perintah Build**: Jalankan melalui `cmd /c "npm run build"` karena batasan PowerShell Execution Policy pada Windows.
