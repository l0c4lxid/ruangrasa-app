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
      {/* Top Action Bar */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-5 py-3 flex items-center justify-between shadow-sm border-b border-outline-variant/20">
        <Link
          href="/curhat"
          aria-label="Batal membuat cerita"
          className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95 text-label-lg font-label-lg py-1 px-2 -ml-2 rounded-lg"
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
          className="h-10 px-4 rounded-full bg-primary-container hover:bg-primary disabled:opacity-50 text-on-primary text-label-lg font-label-lg font-medium shadow-sm active:scale-95 transition-all duration-200 flex items-center gap-1.5"
          type="button"
        >
          <span>{isSubmitting ? "Mengirim..." : "Kirim"}</span>
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </header>

      {/* Canvas Scrollable Content */}
      <main className="px-5 pt-3 pb-24 space-y-5 flex-1">
        {/* Privacy Assurance Banner */}
        <section
          aria-label="Informasi Privasi Pengguna"
          className="bg-surface-container-low border border-outline-variant/50 rounded-2xl p-4 flex gap-3 items-start shadow-sm"
        >
          <div className="w-9 h-9 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
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
                Ruang Teduh &amp; Aman
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
              Ceritamu otomatis disamarkan sebagai{" "}
              <strong className="font-semibold text-on-surface font-label-sm">
                Kawan Anonim #742
              </strong>
              . Tidak ada data pribadi atau kampus yang dibagikan.
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
                  onClick={() => setCategory(cat.name)}
                  className={`shrink-0 h-9 px-3.5 rounded-full font-label-md text-label-md flex items-center gap-1.5 transition-all duration-200 ${
                    active
                      ? "bg-secondary-container border border-primary text-primary font-semibold shadow-sm"
                      : "bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:text-primary"
                  }`}
                  type="button"
                >
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    {cat.icon}
                  </span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Judul Input */}
        <section className="space-y-1.5">
          <label
            className="text-label-md font-label-md text-on-surface-variant font-medium block"
            htmlFor="post-title"
          >
            Judul Singkat (Opsional)
          </label>
          <input
            id="post-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Gambarkan apa yang sedang kamu rasakan..."
            className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/70 rounded-xl text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
          />
        </section>

        {/* Story Text Area */}
        <section className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              className="text-label-md font-label-md text-on-surface-variant font-medium"
              htmlFor="post-content"
            >
              Ceritakan Isi Hatimu
            </label>
            <span
              className={`text-label-sm font-label-sm ${
                content.length > 900 ? "text-tertiary font-semibold" : "text-outline"
              }`}
            >
              {content.length} / 1000
            </span>
          </div>
          <div className="relative">
            <textarea
              id="post-content"
              rows={6}
              maxLength={1000}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Ceritakan dengan bebas tanpa takut dihakimi. Ruang ini ada untuk mendengarmu perlahan..."
              className="w-full p-4 bg-surface-container-lowest border border-outline-variant/70 rounded-2xl text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm resize-none leading-relaxed"
            />
          </div>
        </section>

        {/* Privacy & Support Toggles */}
        <section className="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-4 divide-y divide-outline-variant/30 space-y-3">
          <div className="flex items-center justify-between pt-1">
            <div>
              <p className="text-body-md font-body-md font-medium text-on-surface">
                Mode Anonim Penuh
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Nama samaran otomatis, identitas asli terlindungi
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-12 h-7 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
            </label>
          </div>

          <div className="flex items-center justify-between pt-3">
            <div>
              <p className="text-body-md font-body-md font-medium text-on-surface">
                Izinkan Pelukan Virtual
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Terima respon hangat dan pelukan dari kawan rasa
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={supportEnabled}
                onChange={(e) => setSupportEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-12 h-7 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
            </label>
          </div>
        </section>

        {/* Community Guidelines Notice */}
        <footer className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/40 flex items-start gap-2.5">
          <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
            spa
          </span>
          <p className="text-body-sm font-body-sm text-on-secondary-container leading-relaxed">
            Gunakan bahasa saling menghargai. Hindari data sensitif atau nama pihak ketiga demi menjaga keamanan sesama kawan.
          </p>
        </footer>
      </main>
    </>
  );
}
