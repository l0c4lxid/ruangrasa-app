import Link from "next/link";

export default function KonselorLaporanPage() {
  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md px-5 py-4 border-b border-outline-variant/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/konselor"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <div>
            <h1 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
              Pusat Moderasi &amp; Laporan
            </h1>
            <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              Mod Tim Siaga Komunitas
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label-md text-label-md font-medium border border-tertiary-fixed-dim/60 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
            3 Laporan
          </span>
        </div>
      </header>

      <main className="flex-1 px-5 pt-4 pb-16 space-y-5">
        {/* Banner Etika & Panduan */}
        <section className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/50 relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary mt-0.5">
            <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>shield_with_heart</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h2 className="font-label-lg text-label-lg font-semibold text-primary">Prinsip Moderasi Teduh</h2>
              <span className="font-label-sm text-label-sm text-secondary bg-surface-container-highest px-2 py-0.5 rounded-full">SOP Ruang Aman</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Utamakan keselamatan kawan, empati, dan pedoman tanpa stigma. Konten privat konseling tidak dapat diakses di sini.
            </p>
          </div>
        </div>
      </section>
      {/* Filter Tabs / Chip Group */}
      <section className="overflow-x-auto custom-scroll -mx-5 px-5 flex items-center gap-2 pb-1">
        {/* Active Filter */}
        <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-semibold shrink-0 transition-transform active:scale-95 shadow-xs">
          <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>done</span>
          Semua Laporan (3)
        </button>
        {/* Filter Pills */}
        <button className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant/60 font-label-md text-label-md hover:bg-surface-container shrink-0 transition-colors">
          Curhat Publik (2)
        </button>
        <button className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant/60 font-label-md text-label-md hover:bg-surface-container shrink-0 transition-colors">
          Komentar Komunitas (1)
        </button>
        <button className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant/60 font-label-md text-label-md hover:bg-surface-container shrink-0 transition-colors">
          Selesai Ditinjau
        </button>
      </section>
      {/* Queue Header Info */}
      <div className="flex items-center justify-between pt-1">
        <h3 className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-2">
          <span>Antrean Laporan Aktif</span>
          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-[11px] font-medium">Auto-Sort Urgensi</span>
        </h3>
        <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">tune</span>
          Filter Prioritas
        </span>
      </div>
      {/* Moderation Cards List */}
      <div className="space-y-4">
        {/* KARTU 1: MOD-104 (High Priority / Crisis Alert) */}
        <article className="bg-surface-container-lowest rounded-2xl border border-tertiary-fixed-dim/70 shadow-sm p-4.5 space-y-3.5 transition-all hover:border-tertiary-container">
          {/* Card Header & Badge */}
          <div className="flex items-start justify-between gap-2 border-b border-surface-variant pb-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-label-md text-label-md font-bold text-tertiary tracking-wide">#MOD-104</span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">visibility_off</span>
                  Curhat Anonim #512
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[13px]" style={{fontVariationSettings: "'FILL' 1"}}>emergency</span>
                Prioritas Tinggi (Butuh Bantuan Krisis)
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 bg-surface-container px-2 py-0.5 rounded-md">
              4 mnt lalu
            </span>
          </div>
          {/* Reason & Snippet Box */}
          <div className="space-y-2">
            <div className="flex items-start gap-1.5 text-on-tertiary-fixed-variant">
              <span className="material-symbols-outlined text-[16px] text-tertiary mt-0.5 shrink-0">info</span>
              <p className="font-label-sm text-label-sm font-medium">
                Alasan Laporan: Terindikasi bahasa keputusasaan mendalam / butuh kontak krisis segera
              </p>
            </div>
            {/* Snippet Teks */}
            <div className="bg-surface-container-low rounded-xl p-3 border-l-4 border-tertiary-container text-on-surface">
              <p className="font-body-md text-body-md italic text-on-surface leading-snug">
                “Rasanya sudah tidak sanggup lagi lanjut skripsi, tidak ada gunanya...”
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px] text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">sentiment_very_dissatisfied</span>
                  AI Wellness Detector: Emosi Kritis (94%)
                </span>
                <span className="text-secondary font-medium">Kategori: Skripsi / Depresi</span>
              </div>
            </div>
          </div>
          {/* Fast Actions Container */}
          <div className="pt-1 flex flex-col gap-2">
            {/* Action 1: Krisis & Hotline */}
            <button className="w-full py-2.5 px-4 bg-tertiary-container hover:bg-tertiary text-on-tertiary-container rounded-xl font-label-lg text-label-lg font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-xs">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>support_agent</span>
              Tampilkan Pesan Krisis &amp; Hotline 119
            </button>
            <div className="grid grid-cols-2 gap-2">
              {/* Action 2: Teruskan ke Konselor Siaga */}
              <button className="py-2.5 px-3 bg-primary text-on-primary hover:bg-on-primary-fixed-variant rounded-xl font-label-md text-label-md font-medium flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined text-[16px]">psychology_alt</span>
                Teruskan ke Konselor Siaga
              </button>
              {/* Review Context */}
              <button className="py-2.5 px-3 bg-surface-container text-on-surface-variant hover:bg-surface-container-high rounded-xl font-label-md text-label-md font-medium flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                Lihat Thread Utuh
              </button>
            </div>
          </div>
        </article>
        {/* KARTU 2: MOD-102 (Community Guidelines / Judging Comments) */}
        <article className="bg-surface-container-lowest rounded-2xl border border-outline-variant/60 shadow-sm p-4.5 space-y-3.5 transition-all hover:border-secondary">
          {/* Card Header & Badge */}
          <div className="flex items-start justify-between gap-2 border-b border-surface-variant pb-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-label-md text-label-md font-bold text-secondary tracking-wide">#MOD-102</span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">forum</span>
                  Thread ‘Ruang Pejuang Skripsi’
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-medium">
                <span className="material-symbols-outlined text-[13px] text-tertiary">flag</span>
                Dilaporkan oleh: 3 Teman Sebaya
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 bg-surface-container px-2 py-0.5 rounded-md">
              18 mnt lalu
            </span>
          </div>
          {/* Reason & Snippet Box */}
          <div className="space-y-2">
            <div className="flex items-start gap-1.5 text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-tertiary mt-0.5 shrink-0">gavel</span>
              <p className="font-label-sm text-label-sm font-medium">
                Alasan: Komentar menghakimi / tidak suportif
              </p>
            </div>
            {/* Snippet Teks */}
            <div className="bg-surface-container-low/70 rounded-xl p-3 border border-outline-variant/40 text-on-surface space-y-1.5">
              <div className="flex items-center justify-between text-label-sm text-on-surface-variant">
                <span className="font-medium text-on-surface">Komentar Terlapor:</span>
                <span className="text-[11px] text-outline">User #8930</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-snug">
                “Gitu aja kok ngeluh, manja banget”
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-[11px] text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                <span>Melanggar Nilai RuangTeduh: Menghakimi perasaan kawan</span>
              </div>
            </div>
          </div>
          {/* Fast Actions Container */}
          <div className="pt-1 grid grid-cols-2 gap-2">
            {/* Action 1: Sembunyikan Komentar */}
            <button className="py-2.5 px-3 bg-surface-container-highest hover:bg-error-container hover:text-on-error-container text-on-surface rounded-xl font-label-md text-label-md font-medium flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all">
              <span className="material-symbols-outlined text-[16px]">visibility_off</span>
              Sembunyikan Komentar
            </button>
            {/* Action 2: Beri Pengingat Ramah */}
            <button className="py-2.5 px-3 bg-secondary-container hover:bg-secondary hover:text-on-secondary text-on-secondary-container rounded-xl font-label-md text-label-md font-medium flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all">
              <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>sms</span>
              Beri Pengingat Ramah
            </button>
          </div>
        </article>
      </div>
      {/* Action & Audit Trail Section */}
      <section className="pt-2 border-t border-outline-variant/40">
        <button className="w-full py-3 px-4 bg-surface-container rounded-xl border border-outline-variant/50 text-on-surface flex items-center justify-between hover:bg-surface-container-high transition-colors active:scale-[0.99]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[20px] text-primary">history_toggle_off</span>
            <div className="text-left">
              <span className="font-label-lg text-label-lg font-semibold block text-on-surface">Riwayat Tindakan Moderasi</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">14 kasus diselesaikan dalam 24 jam terakhir</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[20px] text-on-surface-variant">chevron_right</span>
        </button>
      </section>
      {/* Moderator Tips / Safety Footer Note */}
      <div className="text-center pt-2 pb-4">
        <p className="font-body-sm text-body-sm text-outline flex items-center justify-center gap-1.5">
          <span className="material-symbols-outlined text-[16px]">spa</span>
          Jaga napasmu tetap teratur. Luangkan jeda jika merasa lelah mendengarkan.
        </p>
      </div>
      </main>
    </>
  );
}
