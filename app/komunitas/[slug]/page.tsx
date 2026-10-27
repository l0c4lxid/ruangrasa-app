import Link from "next/link";

export default async function KomunitasDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const titles: Record<string, { title: string; category: string; facilitator: string }> = {
    skripsi: {
      title: "Ruang Pejuang Skripsi",
      category: "Akademik",
      facilitator: "Kak Dinda (Alumni Psikologi)",
    },
    "quarter-life": {
      title: "Quarter-Life Crisis & Karir Awal",
      category: "Karir & Masa Depan",
      facilitator: "Mas Reza (HR & Career Coach)",
    },
    rantau: {
      title: "Adaptasi Anak Rantau & Homesick",
      category: "Relasi",
      facilitator: "Kak Maya (Konselor Sebaya)",
    },
    overthinking: {
      title: "Manajemen Overthinking & Self-Care",
      category: "Kesehatan Mental",
      facilitator: "Mbak Nadia, M.Psi.",
    },
  };

  const current = titles[slug] || {
    title: "Ruang Pejuang Skripsi",
    category: "Akademik",
    facilitator: "Kak Dinda (Alumni Psikologi)",
  };

  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-4 py-3 flex items-center justify-between shadow-sm border-b border-outline-variant/20">
        <div className="flex items-center gap-2 overflow-hidden">
          <Link
            href="/komunitas"
            aria-label="Kembali ke Daftar Komunitas"
            className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container active:scale-95 transition-all shrink-0"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-headline-sm font-headline-sm text-on-surface font-semibold truncate">
            {current.title}
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <Link
            href="/notifications"
            aria-label="Notifikasi Komunitas"
            className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all relative"
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="w-2 h-2 rounded-full bg-tertiary-container absolute top-2.5 right-2.5"></span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-4 pt-3 pb-24 space-y-4">
        {/* Community Hero Banner Bento Block */}
        <section className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-secondary-container/40 blur-2xl pointer-events-none"></div>
          <div className="relative z-10 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container text-primary text-label-sm font-label-sm">
                <span className="material-symbols-outlined text-[14px] mr-1">school</span>
                {current.category}
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container text-label-sm font-label-sm">
                <span
                  className="material-symbols-outlined text-[15px] mr-1 text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                Fasilitator Ramah
              </span>
            </div>

            <h2 className="text-headline-md font-headline-md text-on-surface tracking-tight font-semibold">
              {current.title}
            </h2>

            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              Wadah aman berbagi keluh kesah, strategi bimbingan, dan saling menyemangati tanpa kompetisi berlebih.
            </p>

            <div className="pt-1 flex items-center gap-2.5">
              <button
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-label-md font-label-md font-semibold hover:bg-secondary-fixed active:scale-95 transition-all shadow-sm"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-[16px] mr-1.5 text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                Sudah Bergabung ✓
              </button>
              <button
                className="inline-flex items-center justify-center px-3.5 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container active:scale-95 border border-outline-variant text-label-md font-label-md transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px] mr-1.5">menu_book</span>
                Aturan Ruang Lingkar
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-4 pt-3.5 border-t border-outline-variant/60 flex flex-wrap items-center justify-between gap-y-2 text-label-sm font-label-sm text-on-surface-variant">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-primary">group</span>
              <span className="font-medium text-on-surface">1.2k Anggota</span>
            </div>
            <span className="text-outline-variant">•</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-tertiary-container">
                chat_bubble
              </span>
              <span>18 Diskusi Aktif Hari Ini</span>
            </div>
            <span className="text-outline-variant">•</span>
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <span className="material-symbols-outlined text-[16px] text-primary">psychology</span>
              <span>
                Fasilitator: <span className="font-medium text-on-surface">{current.facilitator}</span>
              </span>
            </div>
          </div>
        </section>

        {/* Gentle Botanical Mood Anchor Callout */}
        <section className="bg-surface-container-low rounded-xl p-3.5 flex items-center gap-3 border border-outline-variant/70">
          <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              spa
            </span>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant leading-snug">
            Setiap cerita yang kamu bagikan di ruang ini terlindungi kode etik komunitas saling jaga.
          </p>
        </section>

        {/* Discussions List */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-label-lg text-label-lg font-semibold text-on-surface">
              Thread Diskusi Terkini
            </h3>
            <span className="font-label-sm text-label-sm text-primary font-medium">Terhangat</span>
          </div>

          {/* Thread 1 */}
          <article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-primary text-xs font-semibold">
                  S
                </div>
                <span className="font-label-md text-label-md font-semibold text-on-surface">
                  Kawan Anonim #552
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-outline text-[11px]">30 mnt lalu</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Tips mengatasi revisian dosen pembimbing yang kontradiktif?
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Minggu lalu disuruh hapus bab 2 bagian teori motivasi, minggu ini ditanya kenapa teorinya ga ada... Ada yang pernah ngalamin hal serupa?
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-outline-variant/30 text-on-surface-variant text-label-sm">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-primary">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    favorite
                  </span>
                  <span>34 dukungan</span>
                </span>
                <span className="flex items-center gap-1 text-outline">
                  <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                  <span>14 tanggapan</span>
                </span>
              </div>
              <span className="text-primary font-medium">Balas Thread</span>
            </div>
          </article>

          {/* Thread 2 */}
          <article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-tertiary text-xs font-semibold">
                  T
                </div>
                <span className="font-label-md text-label-md font-semibold text-on-surface">
                  Kawan Anonim #104
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-outline text-[11px]">2 jam lalu</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Tempat nugas hening &amp; ramah kantong di sekitar kampus?
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Lagi butuh suasana baru biar ga suntuk di kamar kos terus. Rekomendasi perpustakaan kota atau coworking yang tenang dong kawan.
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-outline-variant/30 text-on-surface-variant text-label-sm">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-primary">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    favorite
                  </span>
                  <span>19 dukungan</span>
                </span>
                <span className="flex items-center gap-1 text-outline">
                  <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                  <span>22 tanggapan</span>
                </span>
              </div>
              <span className="text-primary font-medium">Balas Thread</span>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}