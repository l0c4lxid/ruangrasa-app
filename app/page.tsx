export default function HomePage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md px-5 py-3 shadow-sm">
        <div className="flex justify-between items-center w-full">
          {/* Leading: Brand and Avatar */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20 bg-surface-container-high flex-shrink-0">
              <img className="w-full h-full object-cover" alt="A gentle portrait profile of a young Indonesian student with a calm, serene smile in a sunlit warm room with lush indoor plants. The lighting is soothing and natural, emphasizing safety, warmth, and grounded presence, captured with organic earthy tones and gentle green hues." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxXYwi0WZ5kkpilPnESJdSW0xRUShzdqWe6ph4xXD6Wr5B4YNnvax1Xf3HSPx2KHj5CynmXh5t6ZP8_fr75vX_Gru-Zm_eFgrTvOBXN0GUptT6pm5tCn8-t_pa-KORutlrecIZgJVOsnHlMEqj_i79Hj9awpf5dhSdTmuyWnHIdCKhDRZChLAH5t1mdoawrvGMPeznJTTjPmYMKNw-LRF1kfo_p2iRk7AIeecfbklu6HSQHpYvJkSP" />
            </div>
            <div>
              <span className="text-label-sm font-label-sm text-secondary block leading-tight">Halo, Kawan Rasa</span>
              <h1 className="text-headline-sm font-headline-sm font-bold text-primary tracking-tight">RuangRasa</h1>
            </div>
          </div>
          {/* Trailing action */}
          <button aria-label="Pengaturan" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all" type="button">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
          </button>
        </div>
      </header>
      {/* Main Content Canvas */}
      {/* Warm Empathetic Greeting Header */}
      <section className="mt-1">
        <p className="text-headline-md font-headline-md text-on-surface tracking-tight leading-snug">
          Halo, kamu boleh mulai dari hal kecil.
        </p>
        <p className="text-body-md font-body-md text-on-surface-variant mt-1">
          Tarik napas perlahan. Ruang ini aman untuk segala perasaanmu hari ini.
        </p>
      </section>
      {/* Emergency Alert Banner / Disclaimer */}
      <section className="bg-tertiary-fixed text-on-tertiary-fixed p-3.5 rounded-2xl flex items-start gap-3 border border-tertiary-fixed-dim/40 custom-shadow-resting">
        <span className="material-symbols-outlined text-tertiary mt-0.5 flex-shrink-0" data-icon="health_and_safety">health_and_safety</span>
        <div className="flex-1">
          <p className="text-label-md font-label-md font-semibold text-tertiary">Bantuan Segera</p>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5 leading-snug">
            Sedang dalam krisis? Hubungi layanan darurat <span className="font-semibold text-tertiary underline decoration-tertiary/40">119 ext 8</span>
          </p>
        </div>
        <a className="bg-surface-container-lowest text-tertiary text-label-sm font-label-sm px-2.5 py-1.5 rounded-full font-semibold self-center active:scale-95 transition-transform shadow-xs" href="tel:119">
          Hubungi
        </a>
      </section>
      {/* Three Primary Service Cards */}
      <section className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <h2 className="text-label-lg font-label-lg font-semibold text-on-surface tracking-tight">Pilih Ruang Berbagimu</h2>
          <span className="text-label-sm font-label-sm text-secondary">Aman &amp; Terenkripsi</span>
        </div>
        {/* 1. Curhat Anonim */}
        <article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 custom-shadow-resting hover:border-primary/40 transition-all flex flex-col justify-between gap-3">
          <div className="flex items-start justify-between gap-3">
            <div className="w-11 h-11 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary" data-icon="chat_bubble_outline">chat_bubble_outline</span>
            </div>
            <span className="bg-surface-container-high text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Privat &amp; Aman
            </span>
          </div>
          <div>
            <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">Curhat Anonim</h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
              Tulis apa yang sedang kamu rasakan tanpa identitas publik.
            </p>
          </div>
          <button className="w-full bg-primary text-on-primary py-2.5 px-4 rounded-xl text-label-md font-label-md font-medium flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-95 transition-all" type="button">
            <span>Mulai Curhat</span>
            <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
          </button>
        </article>
        {/* 2. Komunitas Teman Sebaya */}
        <article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 custom-shadow-resting hover:border-primary/40 transition-all flex flex-col justify-between gap-3">
          <div className="flex items-start justify-between gap-3">
            <div className="w-11 h-11 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary" data-icon="groups">groups</span>
            </div>
            <span className="bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full font-medium">
              5 Topik Aktif
            </span>
          </div>
          <div>
            <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">Komunitas Teman Sebaya</h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
              Temukan cerita dan saling memberi dukungan bersama kawan seperjuangan.
            </p>
          </div>
          <button className="w-full bg-secondary-container text-on-secondary-container py-2.5 px-4 rounded-xl text-label-md font-label-md font-medium flex items-center justify-center gap-2 hover:bg-secondary-fixed transition-all active:scale-95" type="button">
            <span>Jelajahi</span>
            <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
          </button>
        </article>
        {/* 3. Konsultasi Profesional */}
        <article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 custom-shadow-resting hover:border-primary/40 transition-all flex flex-col justify-between gap-3">
          <div className="flex items-start justify-between gap-3">
            <div className="w-11 h-11 rounded-xl bg-surface-container-high text-primary flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary" data-icon="psychology">psychology</span>
            </div>
            <span className="bg-surface-container-low text-primary border border-outline-variant/50 font-label-sm text-label-sm px-2.5 py-1 rounded-full font-medium">
              Konselor Terverifikasi
            </span>
          </div>
          <div>
            <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">Konsultasi Profesional</h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
              Cari konselor atau psikolog berlisensi untuk bimbingan terarah.
            </p>
          </div>
          <button className="w-full bg-surface-container text-primary border border-outline-variant/50 py-2.5 px-4 rounded-xl text-label-md font-label-md font-medium flex items-center justify-center gap-2 hover:bg-surface-container-high transition-all active:scale-95" type="button">
            <span>Cari Jadwal</span>
            <span className="material-symbols-outlined text-sm" data-icon="calendar_month">calendar_month</span>
          </button>
        </article>
      </section>
      {/* Section: Panduan Emosional Hari Ini */}
      <section className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-label-lg font-label-lg font-semibold text-on-surface tracking-tight">Panduan Emosional Hari Ini</h2>
          <a className="text-label-sm font-label-sm text-primary font-medium hover:underline" href="#">Lihat Semua</a>
        </div>
        <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/50 custom-shadow-resting relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm font-label-sm px-2.5 py-0.5 rounded-full font-medium">
              Akademik
            </span>
            <span className="text-label-sm font-label-sm text-outline flex items-center gap-1">
              <span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span>
              4 menit baca
            </span>
          </div>
          <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface leading-snug">
            Mengelola Beban Tugas &amp; Ekspektasi Diri
          </h3>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
            Mengenali batas kapasitas mental di tengah semester padat tanpa menyalahkan diri sendiri.
          </p>
          <div className="mt-3 pt-3 border-t border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm" data-icon="spa">spa</span>
              <span className="text-label-sm font-label-sm text-secondary">Refleksi Santai</span>
            </div>
            <button className="text-label-sm font-label-sm text-primary font-semibold flex items-center gap-1" type="button">
              Baca Panduan
              <span className="material-symbols-outlined text-xs" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
      {/* Section: Diskusi Hangat Terkini */}
      <section className="flex flex-col gap-2.5 mb-2">
        <div className="flex items-center justify-between">
          <h2 className="text-label-lg font-label-lg font-semibold text-on-surface tracking-tight">Diskusi Hangat Terkini</h2>
          <span className="text-label-sm font-label-sm text-outline">Anonim &amp; Terjaga</span>
        </div>
        <article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 custom-shadow-resting">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-base" data-icon="visibility_off">visibility_off</span>
              </div>
              <span className="text-label-sm font-label-sm text-on-surface font-medium">Mahasiswa Tingkat Akhir</span>
            </div>
            <span className="text-label-sm font-label-sm text-outline">2 jam lalu</span>
          </div>
          <p className="text-body-md font-body-md text-on-surface italic leading-relaxed">
            “Merasa tertinggal skripsi dibanding teman seangkatan...”
          </p>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
            Terkadang rasanya berat buka laptop, tapi mencoba pelan-pelan menulis 1 paragraf hari ini.
          </p>
          <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-outline-variant/20 text-on-surface-variant">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-label-sm font-label-sm text-tertiary-container hover:text-tertiary active:scale-95 transition-transform" type="button">
                <span className="material-symbols-outlined text-base" data-icon="favorite" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <span>24 dukungan</span>
              </button>
              <button className="flex items-center gap-1.5 text-label-sm font-label-sm text-outline hover:text-primary active:scale-95 transition-transform" type="button">
                <span className="material-symbols-outlined text-base" data-icon="chat_bubble">chat_bubble</span>
                <span>6 tanggapan</span>
              </button>
            </div>
            <button aria-label="Beri pelukan virtual" className="text-primary text-label-sm font-label-sm font-semibold" type="button">
              Kirim Peluk
            </button>
          </div>
        </article>
      </section>
      {/* Bottom Navigation Bar (Docked full-width bottom-0, 5 destinations, Beranda active) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-3 py-2 bg-surface dark:bg-inverse-surface shadow-md dark:shadow-none max-w-[390px] mx-auto right-0">
        {/* Tab 1: Beranda (ACTIVE) */}
        <a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 active:scale-95 transition-transform duration-150" href="#">
          <span className="material-symbols-outlined" data-icon="home" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="text-label-md font-label-md font-semibold">Beranda</span>
        </a>
        {/* Tab 2: Curhat */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-3 py-1 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 active:scale-95 transition-transform duration-150" href="#">
          <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
          <span className="text-label-md font-label-md">Curhat</span>
        </a>
        {/* Tab 3: Komunitas */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-3 py-1 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 active:scale-95 transition-transform duration-150" href="#">
          <span className="material-symbols-outlined" data-icon="groups">groups</span>
          <span className="text-label-md font-label-md">Komunitas</span>
        </a>
        {/* Tab 4: Konsultasi */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-3 py-1 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 active:scale-95 transition-transform duration-150" href="#">
          <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
          <span className="text-label-md font-label-md">Konsultasi</span>
        </a>
        {/* Tab 5: Profil */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-3 py-1 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 active:scale-95 transition-transform duration-150" href="#">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="text-label-md font-label-md">Profil</span>
        </a>
      </nav>
    </>
  );
}
