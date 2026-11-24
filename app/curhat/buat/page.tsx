"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BuatCurhatPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Akademik & Skripsi");
  const [anonymous, setAnonymous] = useState(true);
  const [supportEnabled, setSupportEnabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { name: "Akademik & Skripsi", icon: "school" },
    { name: "Keluarga & Relasi", icon: "diversity_1" },
    { name: "Kecemasan Karir", icon: "work_alert" },
    { name: "Kesepian & Adaptasi", icon: "sentiment_neutral" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/curhat");
    }, 600);
  };

  return (
    <>
      {/* Top Action Bar with Modern Glass Header */}
      <header className="sticky top-0 z-40 glass-header px-5 py-3 flex items-center justify-between shadow-xs">
        <Link
          href="/curhat"
          aria-label="Batal membuat cerita"
          className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95 text-label-lg font-label-lg py-1 px-2 -ml-2 rounded-lg min-h-[44px]"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
          <span>Batal</span>
        </Link>
        <h1 className="text-headline-sm font-headline-sm text-primary font-semibold tracking-tight">
          Tulis Curhat Baru
        </h1>
        <button
          onClick={handleSubmit}
          disabled={!content.trim() || isSubmitting}
          className="min-h-[44px] px-4 rounded-full bg-primary hover:bg-[#1B5E43] disabled:opacity-50 text-white text-label-lg font-label-lg font-medium shadow-xs active:scale-95 transition-all duration-200 flex items-center gap-1.5"
          type="button"
        >
          <span>{isSubmitting ? "Mengirim..." : "Kirim"}</span>
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </header>

      {/* Canvas Scrollable Content */}
      <main className="px-5 pt-3 pb-24 space-y-5 flex-1">
        {/* Privacy Assurance Banner with Glass Touch */}
        <section
          aria-label="Informasi Privasi Pengguna"
          className="glass-card rounded-2xl p-4 flex gap-3 items-start shadow-xs"
        >
          <div className="w-10 h-10 rounded-xl bg-secondary-container text-primary flex items-center justify-center shrink-0 mt-0.5">
            <span
              className="material-symbols-outlined text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              shield_person
            </span>
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-label-md font-label-md font-semibold text-primary">
                Ruang Teduh &amp; Terjaga
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
              Ceritamu otomatis disamarkan dengan pseudonim acak. Tidak ada data pribadi yang dibagikan ke publik.
            </p>
          </div>
        </section>

        {/* Category Chip Horizontal Scroll */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-label-md font-label-md text-on-surface-variant font-medium">
              Pilih Topik Terkait
            </label>
            <span className="text-label-sm font-label-sm text-outline">Pilih 1 topik</span>
          </div>
          <div
            aria-label="Pilihan Kategori Curhat"
            className="flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-5 px-5"
          >
            {categories.map((cat) => {
              const active = category === cat.name;
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setCategory(cat.name)}
                  className={`h-10 px-4 rounded-full flex items-center gap-1.5 text-label-md font-label-md font-medium shrink-0 transition-all active:scale-95 ${
                    active
                      ? "bg-primary text-white shadow-xs"
                      : "glass-pill text-on-surface-variant hover:bg-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {cat.icon}
                  </span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Judul Curhat */}
          <div className="space-y-1.5">
            <label className="block text-label-md font-label-md font-medium text-on-surface">
              Judul Cerita (Opsional)
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Contoh: Merasa buntu dengan revisian..."
              className="w-full glass-input rounded-xl px-4 py-3 text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:bg-white transition-all"
            />
          </div>

          {/* Isi Curhat */}
          <div className="space-y-1.5">
            <label className="block text-label-md font-label-md font-medium text-on-surface">
              Apa yang sedang berkecamuk di pikiranmu?
            </label>
            <textarea
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tumpahkan segalanya di sini. Tidak ada yang akan menghakimi perasaanmu..."
              className="w-full glass-input rounded-2xl p-4 text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:bg-white transition-all resize-none leading-relaxed"
            />
          </div>

          {/* Privacy Toggles */}
          <div className="glass-card rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-label-md font-label-md font-semibold text-on-surface block">
                  Kirim dengan Pseudonim Anonim
                </span>
                <span className="text-body-sm font-body-sm text-outline">
                  Identitasmu disamarkan sepenuhnya
                </span>
              </div>
              <input
                type="checkbox"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
                className="w-5 h-5 accent-primary rounded"
              />
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-outline-variant/30">
              <div>
                <span className="text-label-md font-label-md font-semibold text-on-surface block">
                  Buka Tanggapan Empati
                </span>
                <span className="text-body-sm font-body-sm text-outline">
                  Izinkan teman sebaya memberi kata penyemangat
                </span>
              </div>
              <input
                type="checkbox"
                checked={supportEnabled}
                onChange={(e) => setSupportEnabled(e.target.checked)}
                className="w-5 h-5 accent-primary rounded"
              />
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
