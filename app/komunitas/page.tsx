"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type Community = {
  slug: string;
  title: string;
  category: "Akademik" | "Karir" | "Relasi" | "Kesehatan Mental";
  categoryLabel: string;
  icon: string;
  accentBg: string;
  accentColor: string;
  membersCount: string;
  activeOnline: string;
  facilitator: string;
  facilitatorRole: string;
  activeTopic: string;
  scheduleBadge?: string;
  tag: string;
};

const COMMUNITIES: Community[] = [
  {
    slug: "skripsi",
    title: "Ruang Pejuang Skripsi & Tugas Akhir",
    category: "Akademik",
    categoryLabel: "Akademik & Riset",
    icon: "auto_stories",
    accentBg: "bg-secondary-container",
    accentColor: "text-primary",
    membersCount: "320+ Kawan",
    activeOnline: "48 kawan aktif",
    facilitator: "Kak Dinda",
    facilitatorRole: "Alumni Psikologi",
    activeTopic: "Mengurai kebuntuan bab 4 tanpa cemas berlebih bersama dosen pembimbing",
    scheduleBadge: "Temu Daring: Kamis, 19:30 WIB",
    tag: "Paling Aktif",
  },
  {
    slug: "quarter-life",
    title: "Quarter-Life Crisis & Persiapan Karir",
    category: "Karir",
    categoryLabel: "Karir & Masa Depan",
    icon: "explore",
    accentBg: "bg-tertiary-fixed",
    accentColor: "text-tertiary",
    membersCount: "240+ Kawan",
    activeOnline: "32 kawan aktif",
    facilitator: "Mas Reza",
    facilitatorRole: "Career Coach & HR",
    activeTopic: "Menghadapi rasa tertinggal saat melihat pencapaian karir teman seangkatan",
    scheduleBadge: "Bedah CV: Sabtu, 14:00 WIB",
    tag: "Sesi Terjadwal",
  },
  {
    slug: "rantau",
    title: "Adaptasi Mahasiswa Rantau & Homesick",
    category: "Relasi",
    categoryLabel: "Relasi & Kehidupan",
    icon: "cottage",
    accentBg: "bg-[#FCEEE3]",
    accentColor: "text-[#844728]",
    membersCount: "190+ Kawan",
    activeOnline: "21 kawan aktif",
    facilitator: "Kak Maya",
    facilitatorRole: "Konselor Sebaya",
    activeTopic: "Mengatasi rasa sepi di kamar kos dan menjaga koneksi hangat dengan keluarga",
    tag: "Ruang Hangat",
  },
  {
    slug: "overthinking",
    title: "Manajemen Overthinking & Self-Care",
    category: "Kesehatan Mental",
    categoryLabel: "Kesehatan Mental",
    icon: "self_improvement",
    accentBg: "bg-primary/10",
    accentColor: "text-primary",
    membersCount: "410+ Kawan",
    activeOnline: "56 kawan aktif",
    facilitator: "Mbak Nadia, M.Psi.",
    facilitatorRole: "Psikolog Pembina",
    activeTopic: "Latihan teknik grounding 5-4-3-2-1 saat pikiran berkecamuk sebelum tidur",
    scheduleBadge: "Mindfulness: Rabu, 20:00 WIB",
    tag: "Didampingi Psikolog",
  },
];

const CATEGORIES = [
  { id: "all", label: "Semua Lingkar" },
  { id: "Akademik", label: "Akademik" },
  { id: "Karir", label: "Karir" },
  { id: "Relasi", label: "Relasi & Rantau" },
  { id: "Kesehatan Mental", label: "Kesehatan Mental" },
];

export default function KomunitasPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCommunities = useMemo(() => {
    return COMMUNITIES.filter((item) => {
      const matchCat =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.activeTopic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 glass-header px-5 py-3.5 flex items-center justify-between">
        <div>
          <span className="text-label-sm font-label-sm text-secondary font-medium block leading-tight">
            Ruang Lingkar Sebaya
          </span>
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary tracking-tight font-semibold">
            Komunitas Teduh
          </h1>
        </div>
        <div className="flex items-center gap-1.5">
          <Link
            href="/notifications"
            aria-label="Notifikasi Komunitas"
            className="min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-on-surface-variant hover:bg-white/40 active:scale-95 transition-all relative"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="w-2 h-2 rounded-full bg-tertiary-container absolute top-2.5 right-2.5"></span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 pt-3 pb-24 flex flex-col gap-4">
        {/* Intro banner */}
        <section className="glass-card rounded-2xl p-4 border border-white/80 shadow-xs flex items-center justify-between gap-3">
          <div className="space-y-0.5">
            <p className="text-label-md font-label-md font-semibold text-on-surface">
              Kelompok Diskusi Tematik
            </p>
            <p className="text-body-sm font-body-sm text-on-surface-variant leading-snug">
              Berbagi cerita tanpa kompetisi atau penghakiman dengan kawan sefrekuensi.
            </p>
          </div>
          <span className="shrink-0 text-label-sm font-label-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            4 Lingkar
          </span>
        </section>

        {/* Search Input */}
        <section className="relative">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
              search
            </span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[48px] pl-10 pr-10 rounded-xl glass-input text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:bg-white transition-all shadow-xs"
              placeholder="Cari topik diskusi atau kelompok..."
              type="search"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Hapus pencarian"
                className="absolute right-3 text-outline hover:text-on-surface min-w-[32px] min-h-[32px] flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 -mx-5 px-5">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[44px] px-4 rounded-full text-label-md font-label-md shrink-0 flex items-center gap-1.5 transition-all duration-150 active:scale-95 ${
                  active
                    ? "bg-primary text-white font-semibold shadow-xs"
                    : "glass-pill text-on-surface-variant hover:bg-white/70"
                }`}
              >
                {active && (
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check
                  </span>
                )}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </section>

        {/* Community List Header */}
        <div className="flex items-center justify-between px-1 pt-1">
          <h2 className="text-label-lg font-label-lg font-semibold text-on-surface">
            Daftar Lingkar Komunitas ({filteredCommunities.length})
          </h2>
          <span className="text-label-sm font-label-sm text-secondary">
            Bebas Masuk Kapan Saja
          </span>
        </div>

        {/* Community Cards: Crafted, Spacious, Zero-Truncation Layout */}
        <section className="space-y-4">
          {filteredCommunities.length === 0 ? (
            <div className="glass-card rounded-2xl p-6 text-center space-y-2">
              <span className="material-symbols-outlined text-[32px] text-outline">search_off</span>
              <p className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                Tidak ada lingkar yang cocok
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Coba gunakan kata kunci lain atau pilih kategori &quot;Semua Lingkar&quot;.
              </p>
            </div>
          ) : (
            filteredCommunities.map((item) => (
              <Link
                key={item.slug}
                href={`/komunitas/${item.slug}`}
                className="block active:scale-[0.99] transition-transform group"
              >
                <article className="glass-card rounded-[22px] p-5 border border-white/80 hover:border-primary/50 transition-all flex flex-col gap-3.5 shadow-xs">
                  {/* Card Top: Icon, Category Pill, and Status Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-2xl ${item.accentBg} ${item.accentColor} flex items-center justify-center shrink-0 shadow-xs`}
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <span className="text-label-sm font-label-sm text-secondary font-medium block">
                          {item.categoryLabel}
                        </span>
                        <span className="text-label-sm font-label-sm text-outline flex items-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                          {item.activeOnline}
                        </span>
                      </div>
                    </div>

                    <span className="text-label-sm font-label-sm font-semibold px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30 shrink-0">
                      {item.tag}
                    </span>
                  </div>

                  {/* Card Title: Full natural wrap, NO TRUNCATION */}
                  <div>
                    <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Active Discussion Callout: Natural quote box */}
                  <div className="p-3 rounded-xl bg-surface-container-low/80 border border-outline-variant/20 flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      chat_bubble_outline
                    </span>
                    <div className="space-y-0.5">
                      <span className="text-label-sm font-label-sm text-secondary font-medium block">
                        Topik Hangat Hari Ini:
                      </span>
                      <p className="text-body-sm font-body-sm text-on-surface leading-relaxed">
                        &ldquo;{item.activeTopic}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Optional Schedule Badge */}
                  {item.scheduleBadge && (
                    <div className="px-3 py-1.5 rounded-lg bg-secondary-container/60 border border-secondary/20 flex items-center gap-2 text-label-sm font-label-sm text-on-secondary-container">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        event_available
                      </span>
                      <span className="font-medium">{item.scheduleBadge}</span>
                    </div>
                  )}

                  {/* Card Bottom: Facilitator & Clean Action CTA */}
                  <div className="pt-2.5 border-t border-outline-variant/30 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-primary text-xs font-bold shrink-0">
                        {item.facilitator.charAt(item.facilitator.indexOf(" ") + 1) || item.facilitator.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <span className="text-label-sm font-label-sm text-on-surface font-semibold block truncate">
                          {item.facilitator}
                        </span>
                        <span className="text-label-sm font-label-sm text-outline block truncate">
                          {item.facilitatorRole}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-white text-label-sm font-label-sm font-semibold group-hover:bg-[#1B5E43] transition-colors shrink-0 shadow-xs">
                      <span>Masuk Lingkar</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))
          )}
        </section>

        {/* Ethical Safe Space Note */}
        <section className="glass-pill rounded-2xl p-4 flex items-start gap-3 text-on-surface-variant">
          <span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5">
            shield
          </span>
          <div className="space-y-0.5">
            <h3 className="text-label-md font-label-md font-semibold text-on-surface">
              Etika Ruang Aman Lingkar Sebaya
            </h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
              Semua peserta menggunakan nama samaran. Dilarang menghakimi, menyebarkan cerita kawan ke luar aplikasi, atau membanding-bandingkan beban.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
