export default function CurhatFeedPage() {
  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md px-5 py-3.5 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-2">
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile font-semibold text-primary tracking-tight">Curhat Anonim</h1>
        </div>
        <div className="flex items-center space-x-1 text-on-surface-variant">
          <button aria-label="Cari curhat" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[22px]" data-icon="search">search</span>
          </button>
          <button aria-label="Notifikasi" className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[22px]" data-icon="notifications">notifications</span>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-tertiary-container ring-2 ring-surface"></span>
          </button>
        </div>
      </header>
      {/* Privacy Guarantee Banner */}
      <section className="px-5 pt-3 pb-2">
        <div className="bg-surface-container-low rounded-2xl p-3.5 flex items-start space-x-3 border border-outline-variant/40 shadow-sm">
          <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[18px]" data-icon="lock">lock</span>
          </div>
          <div className="flex-1">
            <p className="text-label-md font-label-md text-primary font-semibold">Ruang Aman &amp; Terjaga</p>
            <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
              Semua cerita dibagikan tanpa nama asli atau identitas publik. Kamu didengar, tanpa penghakiman.
            </p>
          </div>
        </div>
      </section>
      {/* Category Filter Chips (Horizontal Scroll) */}
      <section className="py-2.5">
        <div className="flex overflow-x-auto no-scrollbar space-x-2 px-5 py-1">
          {/* Active Chip */}
          <button className="shrink-0 h-9 px-4 rounded-full bg-secondary-container border border-primary text-primary flex items-center space-x-1.5 active:scale-95 transition-transform shadow-xs">
            <span className="material-symbols-outlined text-[16px]" data-icon="check" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
            <span className="text-label-md font-label-md font-semibold">Semua</span>
          </button>
          {/* Inactive Chips */}
          <button className="shrink-0 h-9 px-4 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-on-surface-variant hover:bg-surface-container flex items-center active:scale-95 transition-all">
            <span className="text-label-md font-label-md">Akademik &amp; Skripsi</span>
          </button>
          <button className="shrink-0 h-9 px-4 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-on-surface-variant hover:bg-surface-container flex items-center active:scale-95 transition-all">
            <span className="text-label-md font-label-md">Keluarga &amp; Relasi</span>
          </button>
          <button className="shrink-0 h-9 px-4 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-on-surface-variant hover:bg-surface-container flex items-center active:scale-95 transition-all">
            <span className="text-label-md font-label-md">Kecemasan Karir</span>
          </button>
          <button className="shrink-0 h-9 px-4 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-on-surface-variant hover:bg-surface-container flex items-center active:scale-95 transition-all">
            <span className="text-label-md font-label-md">Kesepian</span>
          </button>
          <button className="shrink-0 h-9 px-4 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-on-surface-variant hover:bg-surface-container flex items-center active:scale-95 transition-all">
            <span className="text-label-md font-label-md">Adaptasi Kampus</span>
          </button>
        </div>
      </section>
      {/* Curhat Feed Posts */}
      <section className="px-5 py-2 space-y-4">
        {/* Card 1 */}
        <article className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/60 shadow-sm relative transition-all duration-200 hover:shadow-md">
          {/* Header */}
          <div className="flex justify-between items-start mb-3.5">
            <div className="flex items-center space-x-3">
              {/* Anonymous Botanical Avatar */}
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary ring-2 ring-primary-fixed">
                <span className="material-symbols-outlined text-[22px]" data-icon="psychology">psychology</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-label-lg font-label-lg text-on-surface font-semibold">Kawan Anonim #412</h2>
                </div>
                <div className="flex items-center space-x-2 mt-0.5 text-on-surface-variant">
                  <span className="text-body-sm font-body-sm text-outline">15 menit yang lalu</span>
                  <span className="w-1 h-1 rounded-full bg-outline"></span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">Akademik &amp; Skripsi</span>
                </div>
              </div>
            </div>
            {/* Menu 3-dots with subtle Laporkan */}
            <div className="relative group">
              <button aria-label="Opsi tambahan" className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
              </button>
              <div className="hidden group-hover:block absolute right-0 top-8 z-10 w-32 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg py-1">
                <button className="w-full text-left px-3 py-1.5 text-body-sm font-body-sm text-tertiary flex items-center space-x-1.5 hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[16px]" data-icon="flag">flag</span>
                  <span>Laporkan</span>
                </button>
              </div>
            </div>
          </div>
          {/* Story snippet */}
          <p className="text-body-md font-body-md text-on-surface leading-relaxed text-justify">
            Udah semester 9 tapi proposal skripsi selalu revisi berkali-kali sama dosen pembimbing. Kadang merasa gak cukup pintar dan takut ngecewain orang tua di kampung...
          </p>
          {/* Interaction Bar */}
          <div className="mt-4 pt-3.5 border-t border-surface-container flex items-center justify-between text-on-surface-variant">
            {/* Peluk Virtual Action */}
            <button className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-secondary-container/50 hover:bg-secondary-container text-primary active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[18px]" data-icon="favorite_border">favorite_border</span>
              <span className="text-label-md font-label-md font-medium">Beri Dukungan</span>
              <span className="text-label-sm font-label-sm font-bold bg-surface-container-lowest/80 px-1.5 py-0.2 rounded-full ml-1">42</span>
            </button>
            <div className="flex items-center space-x-2">
              <button aria-label="Tanggapan komentar" className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full hover:bg-surface-container active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[18px]" data-icon="chat_bubble">chat_bubble</span>
                <span className="text-label-md font-label-md">12</span>
              </button>
              <button aria-label="Simpan curhat" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[18px]" data-icon="bookmark_border">bookmark_border</span>
              </button>
            </div>
          </div>
        </article>
        {/* Card 2 */}
        <article className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/60 shadow-sm relative transition-all duration-200 hover:shadow-md">
          {/* Header */}
          <div className="flex justify-between items-start mb-3.5">
            <div className="flex items-center space-x-3">
              {/* Anonymous Botanical Avatar */}
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-tertiary-container ring-2 ring-tertiary-fixed">
                <span className="material-symbols-outlined text-[22px]" data-icon="spa">spa</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-label-lg font-label-lg text-on-surface font-semibold">Kawan Anonim #889</h2>
                </div>
                <div className="flex items-center space-x-2 mt-0.5 text-on-surface-variant">
                  <span className="text-body-sm font-body-sm text-outline">1 jam yang lalu</span>
                  <span className="w-1 h-1 rounded-full bg-outline"></span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-fixed/40 text-tertiary font-label-sm text-label-sm">Kecemasan Karir</span>
                </div>
              </div>
            </div>
            {/* Menu 3-dots with subtle Laporkan */}
            <div className="relative group">
              <button aria-label="Opsi tambahan" className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
              </button>
              <div className="hidden group-hover:block absolute right-0 top-8 z-10 w-32 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg py-1">
                <button className="w-full text-left px-3 py-1.5 text-body-sm font-body-sm text-tertiary flex items-center space-x-1.5 hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[16px]" data-icon="flag">flag</span>
                  <span>Laporkan</span>
                </button>
              </div>
            </div>
          </div>
          {/* Story snippet */}
          <p className="text-body-md font-body-md text-on-surface leading-relaxed text-justify">
            Melihat teman-teman di LinkedIn sudah pada dapet management trainee atau kerja di startup besar, rasanya dada sesak setiap buka sosmed...
          </p>
          {/* Interaction Bar */}
          <div className="mt-4 pt-3.5 border-t border-surface-container flex items-center justify-between text-on-surface-variant">
            {/* Peluk Virtual Action */}
            <button className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-secondary-container/50 hover:bg-secondary-container text-primary active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[18px]" data-icon="favorite_border">favorite_border</span>
              <span className="text-label-md font-label-md font-medium">Beri Dukungan</span>
              <span className="text-label-sm font-label-sm font-bold bg-surface-container-lowest/80 px-1.5 py-0.2 rounded-full ml-1">68</span>
            </button>
            <div className="flex items-center space-x-2">
              <button aria-label="Tanggapan komentar" className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full hover:bg-surface-container active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[18px]" data-icon="chat_bubble">chat_bubble</span>
                <span className="text-label-md font-label-md">19</span>
              </button>
              <button aria-label="Simpan curhat" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[18px]" data-icon="bookmark_border">bookmark_border</span>
              </button>
            </div>
          </div>
        </article>
        {/* Calming Ambient Prompt Box */}
        <div className="rounded-2xl p-4 bg-gradient-to-br from-surface-container-high/60 to-surface-container-low border border-outline-variant/40 flex items-center space-x-3.5">
          <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[20px]" data-icon="self_improvement">self_improvement</span>
          </div>
          <div>
            <p className="text-label-md font-label-md text-primary font-semibold">Tarik napas sejenak</p>
            <p className="text-body-sm font-body-sm text-on-surface-variant">Beban pikiranmu valid. Istirahatlah barang 5 menit tanpa memikirkan tuntutan apapun.</p>
          </div>
        </div>
      </section>
      {/* Floating Action Button (FAB) "+ Tulis Curhat" */}
      <div className="fixed bottom-20 right-5 z-40 max-w-[390px] mx-auto pointer-events-none">
        <button className="pointer-events-auto shadow-lg hover:shadow-xl bg-primary text-on-primary rounded-full px-5 py-3.5 flex items-center space-x-2 active:scale-95 transition-transform duration-150 border border-primary-fixed/20 group">
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-90 duration-200" data-icon="add">add</span>
          <span className="text-label-lg font-label-lg font-semibold tracking-wide">+ Tulis Curhat</span>
        </button>
      </div>
      {/* BottomNavBar (Shared Component from JSON, Curhat Active) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-3 py-2 bg-surface shadow-md">
        {/* Beranda */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:text-primary transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined text-[22px]" data-icon="home">home</span>
          <span className="text-label-md font-label-md mt-0.5">Beranda</span>
        </a>
        {/* Curhat (ACTIVE - style_active_navigation applied) */}
        <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-95 transition-transform duration-150" href="#">
          <span className="material-symbols-outlined text-[22px]" data-icon="favorite" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          <span className="text-label-md font-label-md font-semibold mt-0.5">Curhat</span>
        </a>
        {/* Komunitas */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:text-primary transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined text-[22px]" data-icon="groups">groups</span>
          <span className="text-label-md font-label-md mt-0.5">Komunitas</span>
        </a>
        {/* Konsultasi */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:text-primary transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined text-[22px]" data-icon="psychology">psychology</span>
          <span className="text-label-md font-label-md mt-0.5">Konsultasi</span>
        </a>
        {/* Profil */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:text-primary transition-colors duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined text-[22px]" data-icon="person">person</span>
          <span className="text-label-md font-label-md mt-0.5">Profil</span>
        </a>
      </nav>
    </>
  );
}
