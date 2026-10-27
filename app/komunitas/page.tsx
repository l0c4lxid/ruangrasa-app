import Link from "next/link";

export default function KomunitasPage() {
  const communities = [
    {
      slug: "skripsi",
      title: "Ruang Pejuang Skripsi & Tugas Akhir",
      category: "Akademik",
      icon: "auto_stories",
      members: "1.2k Anggota",
      activeDiscussions: "18 diskusi aktif hari ini",
    },
    {
      slug: "quarter-life",
      title: "Quarter-Life Crisis & Karir Awal",
      category: "Karir & Masa Depan",
      icon: "explore",
      members: "850 Anggota",
      activeDiscussions: "12 diskusi aktif",
    },
    {
      slug: "rantau",
      title: "Adaptasi Anak Rantau & Homesick",
      category: "Relasi",
      icon: "cottage",
      members: "620 Anggota",
      activeDiscussions: "9 diskusi aktif",
    },
    {
      slug: "overthinking",
      title: "Manajemen Overthinking & Self-Care",
      category: "Kesehatan Mental",
      icon: "self_improvement",
      members: "1.5k Anggota",
      activeDiscussions: "Komunitas Hangat",
    },
  ];

  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-5 py-3.5 flex items-center justify-between shadow-sm border-b border-outline-variant/20">
        <div className="flex items-center gap-2">
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary tracking-tight font-semibold">
            Komunitas Teman Sebaya
          </h1>
        </div>
        <div className="flex items-center gap-1.5">
          <Link
            href="/notifications"
            aria-label="Notifikasi"
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all relative"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="w-2 h-2 rounded-full bg-tertiary-container absolute top-2.5 right-2.5"></span>
          </Link>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 px-5 pt-3 pb-24 flex flex-col gap-4">
        {/* Safe Circle Banner */}
        <section className="relative overflow-hidden rounded-2xl bg-surface-container-low p-4 border border-outline-variant/50">
          <div className="relative z-10 flex flex-col gap-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container w-fit">
              <span
                className="material-symbols-outlined text-[14px] text-on-secondary-fixed-variant"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                spa
              </span>
              <span className="text-label-sm font-label-sm text-on-secondary-fixed-variant font-medium">
                Ruang Lingkar Aman
              </span>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant mt-1 leading-snug">
              Ruang diskusi terfokus dan saling menguatkan bersama teman sebaya yang dipandu fasilitator ramah.
            </p>
          </div>
          <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-secondary-fixed/40 pointer-events-none blur-xl"></div>
        </section>

        {/* Search Input */}
        <section className="relative">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
              search
            </span>
            <input
              className="w-full h-[48px] pl-10 pr-4 rounded-xl bg-surface-container-lowest border border-outline-variant text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
              placeholder="Cari topik atau kelompok..."
              type="search"
            />
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <button className="h-9 px-4 rounded-full bg-secondary-container text-on-secondary-fixed-variant text-label-md font-label-md font-semibold border border-primary/20 flex items-center gap-1.5 shrink-0 shadow-sm active:scale-95 transition-all">
            <span
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check
            </span>
            Semua Komunitas
          </button>
          <button className="h-9 px-4 rounded-full bg-surface-container-lowest text-on-surface-variant text-label-md font-label-md font-medium border border-outline-variant hover:bg-surface-container shrink-0 active:scale-95 transition-all">
            Populer
          </button>
          <button className="h-9 px-4 rounded-full bg-surface-container-lowest text-on-surface-variant text-label-md font-label-md font-medium border border-outline-variant hover:bg-surface-container shrink-0 active:scale-95 transition-all">
            Tergabung
          </button>
        </section>

        {/* Community Cards Section */}
        <section className="flex flex-col gap-3.5 mt-1">
          {communities.map((comm) => (
            <article
              key={comm.slug}
              className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 shadow-sm flex flex-col gap-3 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <span className="inline-block px-2 py-0.5 rounded-md bg-surface-container-high text-on-secondary-fixed-variant text-label-sm font-label-sm w-fit font-medium">
                    {comm.category}
                  </span>
                  <h2 className="text-headline-sm font-headline-sm text-on-surface leading-snug">
                    {comm.title}
                  </h2>
                </div>
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[22px]">
                    {comm.icon}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-body-sm font-body-sm text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">groups</span>
                  {comm.members}
                </span>
                <span className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[16px]">forum</span>
                  {comm.activeDiscussions}
                </span>
              </div>

              <Link
                href={`/komunitas/${comm.slug}`}
                className="w-full h-11 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-label-lg font-label-lg font-medium flex items-center justify-center gap-2 active:scale-95 transition-all mt-0.5"
              >
                <span>Gabung Diskusi</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}