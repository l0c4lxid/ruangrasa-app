import Link from "next/link";

export default function CurhatFeedPage() {
  return (
    <>
      {/* Top App Bar with Modern Glass Header */}
      <header className="sticky top-0 z-40 glass-header px-5 py-3.5 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile font-semibold text-primary tracking-tight">
            Curhat Bebas Nama
          </h1>
        </div>
        <div className="flex items-center space-x-1 text-on-surface-variant">
          <button
            aria-label="Cari curhat"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>
          <Link
            href="/notifications"
            aria-label="Notifikasi"
            className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-tertiary-container ring-2 ring-surface"></span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-32">
        {/* Protected Notice Banner */}
        <section className="px-5 pt-3 pb-1">
          <div className="glass-card rounded-2xl px-4 py-2.5 flex items-center gap-2.5 text-body-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px] text-primary">lock</span>
            <span className="text-label-sm font-medium">Ruang cerita terlindungi • Bebas penghakiman dan stigma</span>
          </div>
        </section>

        {/* Category Filter Chips (Horizontal Scroll) */}
        <section className="py-2.5">
          <div className="flex overflow-x-auto no-scrollbar space-x-2 px-5 py-1">
            {/* Active Chip */}
            <button className="shrink-0 h-9 px-4 rounded-full bg-primary text-white flex items-center space-x-1.5 active:scale-95 transition-transform shadow-xs font-semibold text-label-md font-label-md">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check
              </span>
              <span>Semua</span>
            </button>
            {/* Inactive Chips */}
            <button className="shrink-0 h-9 px-4 rounded-full glass-pill text-on-surface-variant hover:bg-white flex items-center active:scale-95 transition-all text-label-md font-label-md shadow-xs">
              <span>Akademik &amp; Skripsi</span>
            </button>
            <button className="shrink-0 h-9 px-4 rounded-full glass-pill text-on-surface-variant hover:bg-white flex items-center active:scale-95 transition-all text-label-md font-label-md shadow-xs">
              <span>Keluarga &amp; Relasi</span>
            </button>
            <button className="shrink-0 h-9 px-4 rounded-full glass-pill text-on-surface-variant hover:bg-white flex items-center active:scale-95 transition-all text-label-md font-label-md shadow-xs">
              <span>Kecemasan Karir</span>
            </button>
            <button className="shrink-0 h-9 px-4 rounded-full glass-pill text-on-surface-variant hover:bg-white flex items-center active:scale-95 transition-all text-label-md font-label-md shadow-xs">
              <span>Kesepian</span>
            </button>
            <button className="shrink-0 h-9 px-4 rounded-full glass-pill text-on-surface-variant hover:bg-white flex items-center active:scale-95 transition-all text-label-md font-label-md shadow-xs">
              <span>Adaptasi Kampus</span>
            </button>
          </div>
        </section>

        {/* Curhat Feed Posts */}
        <section className="px-5 py-2 space-y-4">
          {/* Card 1 */}
          <article className="glass-card rounded-[22px] p-5 border border-white/80 shadow-xs relative transition-all duration-200 hover:border-primary/40">
            {/* Header */}
            <div className="flex justify-between items-start mb-3.5">
              <div className="flex items-center space-x-3">
                {/* Anonymous Botanical Avatar */}
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary ring-2 ring-primary/20">
                  <span className="material-symbols-outlined text-[22px]">psychology</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-label-lg font-label-lg text-on-surface font-semibold">
                      Kawan Anonim #412
                    </h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                      Pikiran Teduh
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mt-0.5 text-on-surface-variant">
                    <span className="text-body-sm font-body-sm text-outline">15 menit lalu</span>
                    <span className="w-1 h-1 rounded-full bg-outline"></span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      Akademik &amp; Skripsi
                    </span>
                  </div>
                </div>
              </div>
              {/* Menu 3-dots */}
              <button
                aria-label="Opsi tambahan"
                className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </div>
            {/* Story snippet */}
            <Link href="/curhat/1" className="block group">
              <p className="text-body-md font-body-md text-on-surface leading-relaxed text-justify group-hover:text-primary transition-colors">
                Capek banget rasanya pura-pura baik-baik aja di depan orang tua. Tiap ditanya kapan wisuda, tenggorokan rasanya tercekat. Padahal tiap malam revisian bab 4 ga selesai-selesai...
              </p>
            </Link>
            {/* Interaction Bar */}
            <div className="mt-4 pt-3.5 border-t border-outline-variant/30 flex items-center justify-between text-on-surface-variant">
              {/* Peluk Virtual Action */}
              <button
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-secondary-container/60 hover:bg-secondary-container text-primary active:scale-95 transition-all min-h-[44px]"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
                <span className="text-label-md font-label-md font-semibold">Kirim Pelukan (42)</span>
              </button>
              {/* Secondary Actions */}
              <div className="flex items-center space-x-1">
                <Link
                  href="/curhat/1"
                  aria-label="Tanggapan komentar"
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-full hover:bg-surface-container active:scale-95 transition-all text-on-surface-variant min-h-[44px]"
                >
                  <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                  <span className="text-label-md font-label-md font-medium">12</span>
                </Link>
                <button
                  aria-label="Simpan curhat"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">bookmark_border</span>
                </button>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="glass-card rounded-[22px] p-5 border border-white/80 shadow-xs relative transition-all duration-200 hover:border-primary/40">
            {/* Header */}
            <div className="flex justify-between items-start mb-3.5">
              <div className="flex items-center space-x-3">
                {/* Anonymous Botanical Avatar */}
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed/60 flex items-center justify-center text-tertiary ring-2 ring-tertiary-fixed">
                  <span className="material-symbols-outlined text-[22px]">spa</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-label-lg font-label-lg text-on-surface font-semibold">
                      Kawan Anonim #889
                    </h2>
                  </div>
                  <div className="flex items-center space-x-2 mt-0.5 text-on-surface-variant">
                    <span className="text-body-sm font-body-sm text-outline">1 jam lalu</span>
                    <span className="w-1 h-1 rounded-full bg-outline"></span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-fixed/40 text-tertiary font-label-sm text-label-sm">
                      Kecemasan Karir
                    </span>
                  </div>
                </div>
              </div>
              <button
                aria-label="Opsi tambahan"
                className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </div>
            {/* Story snippet */}
            <Link href="/curhat/1" className="block group">
              <p className="text-body-md font-body-md text-on-surface leading-relaxed text-justify group-hover:text-primary transition-colors">
                Melihat teman-teman di LinkedIn sudah pada dapet management trainee atau kerja di startup besar, rasanya dada sesak setiap buka sosmed. Takut banget jadi beban keluarga...
              </p>
            </Link>
            {/* Interaction Bar */}
            <div className="mt-4 pt-3.5 border-t border-outline-variant/30 flex items-center justify-between text-on-surface-variant">
              <button
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-secondary-container/60 hover:bg-secondary-container text-primary active:scale-95 transition-all min-h-[44px]"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
                <span className="text-label-md font-label-md font-semibold">Kirim Pelukan (28)</span>
              </button>
              <div className="flex items-center space-x-1">
                <Link
                  href="/curhat/1"
                  aria-label="Tanggapan komentar"
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-full hover:bg-surface-container active:scale-95 transition-all text-on-surface-variant min-h-[44px]"
                >
                  <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                  <span className="text-label-md font-label-md font-medium">8</span>
                </Link>
                <button
                  aria-label="Simpan curhat"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">bookmark_border</span>
                </button>
              </div>
            </div>
          </article>
        </section>
      </main>

      {/* Floating Action Button (FAB) "+ Tulis Curhat" */}
      <div className="fixed bottom-20 left-0 right-0 max-w-[412px] mx-auto pointer-events-none z-40 px-5 flex justify-end">
        <Link
          href="/curhat/buat"
          className="pointer-events-auto shadow-md hover:shadow-lg bg-primary text-white rounded-full px-5 py-3 flex items-center space-x-2 active:scale-95 transition-transform duration-150 border border-white/40 group min-h-[44px]"
        >
          <span
            className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-90 duration-200"
          >
            add
          </span>
          <span className="text-label-lg font-label-lg font-semibold tracking-wide">
            Tulis Curhat
          </span>
        </Link>
      </div>
    </>
  );
}
