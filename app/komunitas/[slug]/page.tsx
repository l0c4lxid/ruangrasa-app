"use client";

import { useState, use } from "react";
import Link from "next/link";

type Thread = {
  id: string;
  author: string;
  authorInitial: string;
  timeAgo: string;
  tag: string;
  title: string;
  content: string;
  hugs: number;
  replies: number;
  hasHugged?: boolean;
};

const ROOM_DATA: Record<
  string,
  {
    title: string;
    category: string;
    description: string;
    threadCount: number;
    initialThreads: Thread[];
  }
> = {
  skripsi: {
    title: "Ruang Pejuang Skripsi & Tugas Akhir",
    category: "Akademik & Riset",
    description:
      "Ruang berbagi keluh kesah seputar revisi, dosen pembimbing, dan perjuangan tugas akhir sesama mahasiswa.",
    threadCount: 142,
    initialThreads: [
      {
        id: "t1",
        author: "Kawan Anonim #552",
        authorInitial: "S",
        timeAgo: "30 mnt lalu",
        tag: "Dosen Pembimbing",
        title: "Tips menghadapi revisian dosen pembimbing yang kontradiktif?",
        content:
          "Minggu lalu disuruh hapus bab 2 bagian teori motivasi, minggu ini ditanya kenapa teorinya ga ada... Ada yang pernah ngalamin hal serupa dan gimana cara komunikasikannya biar dospem ga tersinggung?",
        hugs: 34,
        replies: 14,
      },
      {
        id: "t2",
        author: "Kawan Anonim #104",
        authorInitial: "T",
        timeAgo: "2 jam lalu",
        tag: "Tempat Nugas",
        title: "Rekomendasi tempat nugas hening & ramah kantong di sekitar kampus?",
        content:
          "Lagi butuh suasana baru biar ga suntuk di kamar kos terus. Rekomendasi perpustakaan kota atau tempat tenang yang wifi-nya stabil dong kawan.",
        hugs: 19,
        replies: 22,
      },
      {
        id: "t3",
        author: "Kawan Anonim #721",
        authorInitial: "R",
        timeAgo: "5 jam lalu",
        tag: "Burnout & Jeda",
        title: "Boleh ga ya ambil jeda 1 semester kalau mental udah bener-bener ga kuat?",
        content:
          "Tiap kali buka laptop rasanya mual dan detak jantung kencang. Pengen istirahat sejenak tapi takut ngecewain orang tua. Boleh sharing pengalaman kalian yang pernah ambil cuti/jeda?",
        hugs: 52,
        replies: 28,
      },
    ],
  },
  "quarter-life": {
    title: "Quarter-Life Crisis & Persiapan Karir",
    category: "Karir & Masa Depan",
    description:
      "Diskusi hangat seputar persiapan masuk dunia kerja, portofolio, dan mengatasi kecemasan masa depan.",
    threadCount: 98,
    initialThreads: [
      {
        id: "t4",
        author: "Kawan Anonim #819",
        authorInitial: "K",
        timeAgo: "1 jam lalu",
        tag: "Ekspektasi Karir",
        title: "Capek dibanding-bandingin sama teman seangkatan yang udah dapet kerja di BUMN",
        content:
          "Tiap kumpul keluarga ditanya udah keterima di mana. Padahal udah apply puluhan tempat tapi belum ada panggilan. Rasanya minder banget...",
        hugs: 41,
        replies: 18,
      },
      {
        id: "t5",
        author: "Kawan Anonim #311",
        authorInitial: "M",
        timeAgo: "4 jam lalu",
        tag: "Tips Interview",
        title: "Gimana cara ngurangin gemetar pas ditanya kelemahan diri saat interview?",
        content:
          "Besok ada interview pertama. Tiap latihan di depan kaca selalu ngeblank pas pertanyaan tentang weakness. Boleh minta tips jawaban yang jujur tapi tetap profesional?",
        hugs: 27,
        replies: 15,
      },
    ],
  },
  rantau: {
    title: "Adaptasi Mahasiswa Rantau & Homesick",
    category: "Relasi & Kehidupan",
    description:
      "Tempat bercerita anak kos tentang rindu kampung halaman, mengelola keuangan mandiri, dan kesepian.",
    threadCount: 76,
    initialThreads: [
      {
        id: "t6",
        author: "Kawan Anonim #204",
        authorInitial: "A",
        timeAgo: "3 jam lalu",
        tag: "Homesick",
        title: "Pertama kali sakit di kamar kos sendirian tanpa orang tua, rasanya sedih banget",
        content:
          "Demam dari kemarin malam, mau beli makan aja ga ada tenaga. Baru berasa banget susahnya jauh dari keluarga. Teman-teman rantau biasanya ngapain kalau lagi di posisi ini?",
        hugs: 48,
        replies: 25,
      },
      {
        id: "t7",
        author: "Kawan Anonim #490",
        authorInitial: "P",
        timeAgo: "7 jam lalu",
        tag: "Pengelolaan Budget",
        title: "Tips makan sehat tapi tetap hemat buat anak kos akhir bulan",
        content:
          "Kadang karena pengen hemat cuma makan mie instan terus badan lemas. Ada ide menu masak sendiri yang praktis dan murah buat anak kos?",
        hugs: 31,
        replies: 19,
      },
    ],
  },
  overthinking: {
    title: "Manajemen Overthinking & Self-Care",
    category: "Kesehatan Mental",
    description:
      "Ruang saling menguatkan saat pikiran berkecamuk, insomnia, dan berbagi teknik merawat ketenangan.",
    threadCount: 165,
    initialThreads: [
      {
        id: "t8",
        author: "Kawan Anonim #901",
        authorInitial: "N",
        timeAgo: "15 mnt lalu",
        tag: "Insomnia & Cemas",
        title: "Ada yang suka overthinking tiba-tiba jam 1 pagi ga? Biasanya kalian lakuin apa?",
        content:
          "Pikiran suka mutar hal-hal masa lalu atau skenario buruk masa depan yang belum tentu terjadi. Biasanya kalian ngapain biar otak bisa istirahat?",
        hugs: 63,
        replies: 34,
      },
      {
        id: "t9",
        author: "Kawan Anonim #633",
        authorInitial: "B",
        timeAgo: "6 jam lalu",
        tag: "Self-Care Sederhana",
        title: "Hal kecil apa yang bikin kalian merasa tenang hari ini?",
        content:
          "Tadi sore nyempetin duduk di teras sambil minum teh tanpa megang HP selama 15 menit. Ternyata cukup ngebantu nurunin detak jantung yang tadinya tegang seharian.",
        hugs: 45,
        replies: 21,
      },
    ],
  },
};

export default function KomunitasDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const room = ROOM_DATA[slug] || ROOM_DATA.skripsi;

  const [threads, setThreads] = useState<Thread[]>(room.initialThreads);
  const [filter, setFilter] = useState<"semua" | "hangat">("semua");
  const [showComposer, setShowComposer] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newTag, setNewTag] = useState("Sharing Pengalaman");

  const handleToggleHug = (threadId: string) => {
    setThreads((prev) =>
      prev.map((t) => {
        if (t.id === threadId) {
          const hasHugged = !t.hasHugged;
          return {
            ...t,
            hasHugged,
            hugs: hasHugged ? t.hugs + 1 : t.hugs - 1,
          };
        }
        return t;
      })
    );
  };

  const handleCreateThread = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newThread: Thread = {
      id: "new-" + Date.now(),
      author: "Kawan Anonim (Kamu)",
      authorInitial: "K",
      timeAgo: "Baru saja",
      tag: newTag,
      title: newTitle.trim(),
      content: newContent.trim(),
      hugs: 1,
      replies: 0,
      hasHugged: true,
    };

    setThreads([newThread, ...threads]);
    setNewTitle("");
    setNewContent("");
    setShowComposer(false);
  };

  const displayedThreads = filter === "hangat"
    ? [...threads].sort((a, b) => b.hugs - a.hugs)
    : threads;

  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 glass-header px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden">
          <Link
            href="/komunitas"
            aria-label="Kembali ke Daftar Forum"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-on-surface hover:bg-white/40 active:scale-95 transition-all shrink-0"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <div className="min-w-0">
            <span className="text-label-sm font-label-sm text-secondary font-medium block truncate leading-tight">
              {room.category}
            </span>
            <h1 className="text-headline-sm font-headline-sm text-on-surface font-semibold truncate">
              {room.title}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Link
            href="/notifications"
            aria-label="Notifikasi Forum"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-on-surface-variant hover:bg-white/40 active:scale-95 transition-all relative"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="w-2 h-2 rounded-full bg-tertiary-container absolute top-2.5 right-2.5"></span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-5 pt-3 pb-28 space-y-4">
        {/* Room Header Banner */}
        <section className="glass-card rounded-[22px] p-4.5 border border-white/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-label-sm font-label-sm font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
              {room.category}
            </span>
            <span className="text-label-sm font-label-sm text-outline flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">forum</span>
              <span>{threads.length} Thread Aktif</span>
            </span>
          </div>

          <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
            {room.description}
          </p>

          <button
            onClick={() => setShowComposer(!showComposer)}
            className="w-full min-h-[44px] px-4 rounded-xl bg-primary hover:bg-[#1B5E43] text-white text-label-md font-label-md font-semibold flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">
              {showComposer ? "close" : "edit_note"}
            </span>
            <span>{showComposer ? "Tutup Form Diskusi" : "+ Tulis Thread Baru"}</span>
          </button>
        </section>

        {/* Interactive Thread Composer Form */}
        {showComposer && (
          <section className="glass-card rounded-[22px] p-4.5 border border-primary/30 shadow-md space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <h2 className="text-label-lg font-label-lg font-semibold text-on-surface">
                Mulai Diskusi Baru
              </h2>
              <span className="text-label-sm font-label-sm text-secondary font-medium">
                Identitas Samaran
              </span>
            </div>

            <form onSubmit={handleCreateThread} className="space-y-3">
              <div>
                <label className="text-label-sm font-label-sm text-on-surface-variant block mb-1">
                  Topik / Label
                </label>
                <select
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="w-full min-h-[40px] px-3 rounded-xl glass-input text-body-sm text-on-surface"
                >
                  <option value="Sharing Pengalaman">Sharing Pengalaman</option>
                  <option value="Tanya Solusi">Tanya Solusi</option>
                  <option value="Keluh Kesah">Keluh Kesah</option>
                  <option value="Saling Semangati">Saling Semangati</option>
                </select>
              </div>

              <div>
                <label className="text-label-sm font-label-sm text-on-surface-variant block mb-1">
                  Judul Thread
                </label>
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Contoh: Gimana cara kalian ngadepin..."
                  className="w-full min-h-[44px] px-3.5 rounded-xl glass-input text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="text-label-sm font-label-sm text-on-surface-variant block mb-1">
                  Isi Cerita / Pertanyaan
                </label>
                <textarea
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Ceritakan apa yang sedang kamu rasakan atau tanyakan kepada kawan sebaya..."
                  rows={3}
                  className="w-full p-3 rounded-xl glass-input text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary resize-none"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowComposer(false)}
                  className="min-h-[40px] px-4 rounded-xl glass-pill text-on-surface-variant text-label-sm font-label-sm"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="min-h-[40px] px-4 rounded-xl bg-primary text-white text-label-sm font-label-sm font-semibold active:scale-95 shadow-xs"
                >
                  Terbitkan Thread
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Filter Pills */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter("semua")}
              className={`min-h-[36px] px-3.5 rounded-full text-label-sm font-label-sm font-medium transition-all ${
                filter === "semua"
                  ? "bg-primary text-white font-semibold shadow-xs"
                  : "glass-pill text-on-surface-variant hover:bg-white/70"
              }`}
            >
              Semua Thread
            </button>
            <button
              onClick={() => setFilter("hangat")}
              className={`min-h-[36px] px-3.5 rounded-full text-label-sm font-label-sm font-medium transition-all ${
                filter === "hangat"
                  ? "bg-primary text-white font-semibold shadow-xs"
                  : "glass-pill text-on-surface-variant hover:bg-white/70"
              }`}
            >
              Paling Hangat
            </button>
          </div>
          <span className="text-label-sm font-label-sm text-outline">
            {displayedThreads.length} Diskusi
          </span>
        </div>

        {/* Thread Cards List */}
        <section className="space-y-3.5">
          {displayedThreads.map((thread) => (
            <article
              key={thread.id}
              className="glass-card rounded-[22px] p-5 border border-white/80 shadow-xs space-y-3 hover:border-primary/40 transition-all"
            >
              {/* Header: Author + Time + Tag */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary text-xs font-bold">
                    {thread.authorInitial}
                  </div>
                  <div>
                    <span className="text-label-md font-label-md font-semibold text-on-surface block">
                      {thread.author}
                    </span>
                    <span className="text-label-sm font-label-sm text-outline block leading-none mt-0.5">
                      {thread.timeAgo}
                    </span>
                  </div>
                </div>

                <span className="text-label-sm font-label-sm text-secondary bg-surface-container px-2.5 py-0.5 rounded-full font-medium">
                  #{thread.tag}
                </span>
              </div>

              {/* Title & Body: No Truncation */}
              <div>
                <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface leading-snug">
                  {thread.title}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1.5 leading-relaxed text-justify">
                  {thread.content}
                </p>
              </div>

              {/* Interaction Bar */}
              <div className="pt-2.5 border-t border-outline-variant/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleHug(thread.id)}
                    className={`min-h-[40px] px-3 rounded-full flex items-center gap-1.5 text-label-sm font-label-sm transition-all active:scale-95 ${
                      thread.hasHugged
                        ? "bg-secondary-container text-primary font-semibold"
                        : "glass-pill text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={thread.hasHugged ? { fontVariationSettings: "'FILL' 1" } : undefined}
                    >
                      favorite
                    </span>
                    <span>{thread.hugs} Pelukan</span>
                  </button>

                  <span className="min-h-[40px] px-3 rounded-full glass-pill flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">chat_bubble_outline</span>
                    <span>{thread.replies} Tanggapan</span>
                  </span>
                </div>

                <button
                  onClick={() => alert("Membuka kolom tanggapan diskusi...")}
                  className="text-primary text-label-sm font-label-sm font-semibold hover:underline min-h-[40px] flex items-center"
                >
                  Beri Tanggapan
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
