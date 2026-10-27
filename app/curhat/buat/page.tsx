export default function BuatCurhatPage() {
  return (
    <>
      {/* Top Action Bar (Dedicated Editor Context) */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-5 py-3 flex items-center justify-between shadow-sm">
        <button aria-label="Batal membuat cerita" className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95 text-label-lg font-label-lg py-1 px-2 -ml-2 rounded-lg" type="button">
          <span className="material-symbols-outlined text-[20px]">close</span>
          <span>Batal</span>
        </button>
        <h1 className="text-headline-sm font-headline-sm text-primary font-semibold tracking-tight">07 - Buat Curhat</h1>
        <button className="h-10 px-5 rounded-full bg-primary-container hover:bg-primary text-on-primary text-label-lg font-label-lg font-medium shadow-sm active:scale-95 transition-all duration-200 flex items-center gap-1.5" id="submit-btn" type="button">
          <span>Kirim Cerita</span>
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </header>
      {/* Canvas Scrollable Content */}
      <div className="px-5 pt-3 space-y-5 flex-1">
        {/* Privacy Assurance Banner */}
        <section aria-label="Informasi Privasi Pengguna" className="bg-surface-container-low border border-outline-variant/50 rounded-2xl p-4 flex gap-3 items-start shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[22px] icon-fill">shield_person</span>
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-label-md font-label-md font-semibold text-primary">Ruang Teduh &amp; Aman</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
              Ceritamu otomatis disamarkan sebagai <strong className="font-semibold text-on-surface font-label-sm">Kawan Anonim #742</strong>. Tidak ada data pribadi atau kampus yang dibagikan.
            </p>
          </div>
        </section>
        {/* Category Chip Horizontal Scroll */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-label-md font-label-md text-on-surface-variant font-medium" htmlFor="post-title">Pilih Topik Terkait</label>
            <span className="text-label-sm font-label-sm text-outline">Geser topik</span>
          </div>
          <div aria-label="Pilihan Kategori Curhat" className="flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-5 px-5" role="radiogroup">
            {/* Active Chip */}
            <button aria-checked="true" className="category-chip shrink-0 h-9 px-3.5 rounded-full bg-secondary-container border border-primary-container text-on-secondary-fixed font-label-md text-label-md flex items-center gap-1.5 transition-all duration-200 shadow-sm" role="radio" type="button">
              <span className="material-symbols-outlined text-[16px] text-primary icon-fill">school</span>
              <span>Akademik &amp; Skripsi</span>
            </button>
            <button aria-checked="false" className="category-chip shrink-0 h-9 px-3.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center gap-1.5 transition-all duration-200" role="radio" type="button">
              <span className="material-symbols-outlined text-[16px]">diversity_1</span>
              <span>Keluarga &amp; Relasi</span>
            </button>
            <button aria-checked="false" className="category-chip shrink-0 h-9 px-3.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center gap-1.5 transition-all duration-200" role="radio" type="button">
              <span className="material-symbols-outlined text-[16px]">work_alert</span>
              <span>Kecemasan Karir</span>
            </button>
            <button aria-checked="false" className="category-chip shrink-0 h-9 px-3.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center gap-1.5 transition-all duration-200" role="radio" type="button">
              <span className="material-symbols-outlined text-[16px]">sentiment_neutral</span>
              <span>Kesepian &amp; Adaptasi</span>
            </button>
            <button aria-checked="false" className="category-chip shrink-0 h-9 px-3.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center gap-1.5 transition-all duration-200" role="radio" type="button">
              <span className="material-symbols-outlined text-[16px]">more_horiz</span>
              <span>Lainnya</span>
            </button>
          </div>
        </section>
        {/* Main Input Flow */}
        <section className="space-y-4">
          {/* Optional Title Input */}
          <div className="space-y-1.5">
            <label className="text-label-md font-label-md text-on-surface-variant block" htmlFor="post-title">Judul Singkat (opsional)</label>
            <div className="relative">
              <input className="w-full min-h-[50px] bg-surface-container-low border border-outline-variant rounded-2xl px-4 py-2.5 text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:border-primary-container focus:ring-1 focus:ring-primary-container text-body-md font-body-md transition-all outline-none" id="post-title" maxLength={70} name="title" placeholder="Misal: Beban skripsi semester ini..." type="text" />
            </div>
          </div>
          {/* Story Textarea */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-label-md font-label-md text-on-surface-variant block" htmlFor="post-content">Ruang Refleksi &amp; Cerita</label>
              <span className="text-label-sm font-label-sm text-outline" id="char-counter">0 / 1000</span>
            </div>
            <div className="relative">
              <textarea className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:border-primary-container focus:ring-1 focus:ring-primary-container text-body-md font-body-md leading-relaxed resize-none transition-all outline-none" id="post-content" maxLength={1000} name="story" placeholder="Ceritakan apa yang kamu rasakan tanpa beban..." rows={7}></textarea>
            </div>
          </div>
        </section>
        {/* Interaction Controls (M3 Switches) */}
        <section className="bg-surface-container-low/70 border border-outline-variant/60 rounded-2xl p-4 space-y-4">
          <h2 className="text-label-md font-label-md font-semibold text-on-surface tracking-tight">Kenyamanan &amp; Batasan Berbagi</h2>
          {/* Toggle 1: Izinkan Komentar */}
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-0.5 pr-2">
              <p className="text-label-lg font-label-lg text-on-surface">Izinkan Komentar &amp; Saran</p>
              <p className="text-body-sm font-body-sm text-on-surface-variant">Beri ruang bagi kawan lain untuk menyapa dan merespons ceritamu</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input defaultChecked className="sr-only peer" id="toggle-comments" type="checkbox" />
              <div className="w-12 h-7 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
            </label>
          </div>
          <div className="h-px bg-outline-variant/40"></div>
          {/* Toggle 2: Tombol Dukungan Emosional */}
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-0.5 pr-2">
              <div className="flex items-center gap-1.5">
                <p className="text-label-lg font-label-lg text-on-surface">Izinkan Tombol Dukungan Emosional</p>
                <span className="material-symbols-outlined text-[16px] text-tertiary-container icon-fill">favorite</span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">Terima tepukan virtual "Kamu Hebat" dan "Peluk Hangat"</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input defaultChecked className="sr-only peer" id="toggle-support" type="checkbox" />
              <div className="w-12 h-7 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
            </label>
          </div>
        </section>
        {/* Community Rules Notice */}
        <footer className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/40 flex items-start gap-2.5">
          <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">spa</span>
          <p className="text-body-sm font-body-sm text-on-secondary-container leading-relaxed">
            Gunakan bahasa saling menghargai. Hindari data sensitif/nama orang lain demi menjaga keamanan sesama kawan.
          </p>
        </footer>
      </div>
      {/* RuangRasa Shared BottomNavBar (Curhat Active State) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-3 py-2 bg-surface shadow-md">
        {/* 1. Beranda */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:text-primary transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined text-[24px]">home</span>
          <span className="text-label-md font-label-md mt-0.5">Beranda</span>
        </a>
        {/* 2. Curhat (Active Target) */}
        <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-95 transition-transform duration-150 shadow-sm" href="#">
          <span className="material-symbols-outlined text-[24px] icon-fill">favorite</span>
          <span className="text-label-md font-label-md font-semibold mt-0.5">Curhat</span>
        </a>
        {/* 3. Komunitas */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:text-primary transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined text-[24px]">groups</span>
          <span className="text-label-md font-label-md mt-0.5">Komunitas</span>
        </a>
        {/* 4. Konsultasi */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:text-primary transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined text-[24px]">psychology</span>
          <span className="text-label-md font-label-md mt-0.5">Konsultasi</span>
        </a>
        {/* 5. Profil */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:text-primary transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined text-[24px]">person</span>
          <span className="text-label-md font-label-md mt-0.5">Profil</span>
        </a>
      </nav>
    </>
  );
}
