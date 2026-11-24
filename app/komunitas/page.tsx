"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type CommunityForum = {
  slug: string;
  title: string;
  category: "Akademik" | "Karir" | "Relasi" | "Kesehatan Mental";
  categoryLabel: string;
  description: string;
  icon: string;
  threadCount: number;
  replyCount: number;
  latestThread: {
    author: string;
    title: string;
    timeAgo: string;
  };
};

const COMMUNITIES: CommunityForum[] = [
  {
    slug: "skripsi",
    title: "Ruang Pejuang Skripsi & Tugas Akhir",
    category: "Akademik",
    categoryLabel: "Akademik & Riset",
    description: "Ruang berbagi keluh kesah revisi, tips menghadapi dosen pembimbing, dan motivasi tugas akhir.",
    icon: "auto_stories",
    threadCount: 142,
    replyCount: 580,
    latestThread: {
      author: "Kawan #552",
      title: "Dosen pembimbing revisi terus tapi ga kasih arahan jelas, kalian gimana ngadepinnya?",
      timeAgo: "20 mnt lalu",
    },
  },
  {
    slug: "quarter-life",
    title: "Quarter-Life Crisis & Persiapan Karir",
    category: "Karir",
    categoryLabel: "Karir & Masa Depan",
    description: "Sharing seputar kecemasan pasca-kampus, persiapan CV/interview, dan mencari arah hidup.",
    icon: "explore",
    threadCount: 98,
    replyCount: 412,
    latestThread: {
      author: "Kawan #819",
      title: "Capek dibanding-bandingin sama teman seangkatan yang udah dapet kerja di BUMN",
      timeAgo: "1 jam lalu",
    },
  },
  {
    slug: "rantau",
    title: "Adaptasi Mahasiswa Rantau & Homesick",
    category: "Relasi",
    categoryLabel: "Relasi & Kehidupan",
    description: "Cerita anak kos tentang rindu rumah, adaptasi budaya baru, dan mengelola biaya hidup.",
    icon: "cottage",
    threadCount: 76,
    replyCount: 329,
    latestThread: {
      author: "Kawan #204",
      title: "Pertama kali sakit di kamar kos sendirian tanpa orang tua, rasanya sedih banget",
      timeAgo: "3 jam lalu",
    },
  },
  {
    slug: "overthinking",
    title: "Manajemen Overthinking & Self-Care",
    category: "Kesehatan Mental",
    categoryLabel: "Kesehatan Mental",
    description: "Saling dukung saat pikiran terasa berisik, cemas berlebih, dan berbagi rutinitas jeda tenang.",
    icon: "self_improvement",
    threadCount: 165,
    replyCount: 740,
    latestThread: {
      author: "Kawan #901",
      title: "Ada yang suka overthinking tiba-tiba jam 1 pagi ga? Biasanya kalian lakuin apa?",
      timeAgo: "15 mnt lalu",
    },
  },
];

const CATEGORIES = [
  { id: "all", label: "Semua Forum" },
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
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.latestThread.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 glass-header px-5 py-3.5 flex items-center justify-between">
        <div>
          <span className="text-label-sm font-label-sm text-secondary font-medium block leading-tight">
            Forum Berbagi Sebaya
          </span>
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary tracking-tight font-semibold">
            Komunitas RuangTeduh
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
              placeholder="Cari ruang diskusi atau topik sharing..."
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

        {/* Category Pills */}
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

        {/* Room Header */}
        <div className="flex items-center justify-between px-1 pt-1">
          <h2 className="text-label-lg font-label-lg font-semibold text-on-surface">
            Pilih Ruang Diskusi ({filteredCommunities.length})
          </h2>
          <span className="text-label-sm font-label-sm text-secondary">
            Bebas Baca &amp; Sharing
          </span>
        </div>

        {/* Forum Room Cards */}
        <section className="space-y-4">
          {filteredCommunities.length === 0 ? (
            <div className="glass-card rounded-2xl p-6 text-center space-y-2">
              <span className="material-symbols-outlined text-[32px] text-outline">search_off</span>
              <p className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                Tidak ada forum yang cocok
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Coba gunakan kata kunci lain seperti &quot;skripsi&quot;, &quot;karir&quot;, atau &quot;overthinking&quot;.
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
                  {/* Top Bar: Icon + Category + Thread Count */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-secondary-container text-primary flex items-center justify-center shrink-0 shadow-xs">
                        <span className="material-symbols-outlined text-[22px]">
                          {item.icon}
                        </span>
                      </div>
                      <span className="text-label-sm font-label-sm font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-label-sm font-label-sm text-outline">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">forum</span>
                        <span>{item.threadCount}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">chat_bubble_outline</span>
                        <span>{item.replyCount}</span>
                      </span>
                    </div>
                  </div>

                  {/* Title and Room Description */}
                  <div>
                    <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Latest Thread Snippet */}
                  <div className="p-3 rounded-xl bg-surface-container-low/70 border border-outline-variant/20 flex flex-col gap-1">
                    <div className="flex items-center justify-between text-label-sm font-label-sm text-outline">
                      <span className="font-medium text-secondary">
                        Diskusi Terkini • {item.latestThread.author}
                      </span>
                      <span>{item.latestThread.timeAgo}</span>
                    </div>
                    <p className="text-body-sm font-body-sm text-on-surface italic leading-snug">
                      &ldquo;{item.latestThread.title}&rdquo;
                    </p>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-on-surface-variant">
                      Kawan sebaya sedang berdiskusi
                    </span>
                    <span className="inline-flex items-center gap-1 text-primary text-label-sm font-label-sm font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Buka Forum</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))
          )}
        </section>
      </main>
    </>
  );
}
