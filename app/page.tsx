import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-5 py-3 shadow-sm border-b border-outline-variant/20">
        <div className="flex justify-between items-center w-full">
          {/* Leading: Brand and Avatar */}
          <Link href="/profile" className="flex items-center gap-3 active:scale-95 transition-transform">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20 bg-surface-container-high flex-shrink-0">
              <img
                className="w-full h-full object-cover"
                alt="Foto Profil Kawan Rasa"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxXYwi0WZ5kkpilPnESJdSW0xRUShzdqWe6ph4xXD6Wr5B4YNnvax1Xf3HSPx2KHj5CynmXh5t6ZP8_fr75vX_Gru-Zm_eFgrTvOBXN0GUptT6pm5tCn8-t_pa-KORutlrecIZgJVOsnHlMEqj_i79Hj9awpf5dhSdTmuyWnHIdCKhDRZChLAH5t1mdoawrvGMPeznJTTjPmYMKNw-LRF1kfo_p2iRk7AIeecfbklu6HSQHpYvJkSP"
              />
            </div>
            <div>
              <span className="text-label-sm font-label-sm text-secondary block leading-tight">
                Halo, Kawan Rasa
              </span>
              <h1 className="text-headline-sm font-headline-sm font-bold text-primary tracking-tight">
                RuangRasa
              </h1>
            </div>
          </Link>
          {/* Trailing action */}
          <div className="flex items-center gap-1">
            <Link
              href="/notifications"
              aria-label="Notifikasi"
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all relative"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="w-2 h-2 rounded-full bg-tertiary-container absolute top-2.5 right-2.5"></span>
            </Link>
            <Link
              href="/profile"
              aria-label="Pengaturan Profil"
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined" data-icon="settings">
                settings
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col gap-5 px-5 pt-3 pb-24">
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
          <span
            className="material-symbols-outlined text-tertiary mt-0.5 flex-shrink-0"
            data-icon="health_and_safety"
          >
            health_and_safety
          </span>
          <div className="flex-1">
            <p className="text-label-md font-label-md font-semibold text-tertiary">
              Bantuan Segera
            </p>
            <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5 leading-snug">
              Sedang dalam krisis? Hubungi layanan darurat{" "}
              <span className="font-semibold text-tertiary underline decoration-tertiary/40">
                119 ext 8
              </span>
            </p>
          </div>
          <a
            className="bg-surface-container-lowest text-tertiary text-label-sm font-label-sm px-3 py-1.5 rounded-full font-semibold self-center active:scale-95 transition-transform shadow-xs"
            href="tel:119"
          >
            Hubungi
          </a>
        </section>

        {/* Three Primary Service Cards */}
        <section className="flex flex-col gap-3.5">
          <div className="flex items-center justify-between">
            <h2 className="text-label-lg font-label-lg font-semibold text-on-surface tracking-tight">
              Pilih Ruang Berbagimu
            </h2>
            <span className="text-label-sm font-label-sm text-secondary">
              Aman &amp; Terenkripsi
            </span>
          </div>

          {/* 1. Curhat Anonim */}
          <article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 custom-shadow-resting hover:border-primary/40 transition-all flex flex-col justify-between gap-3">
            <div className="flex items-start justify-between gap-3">
              <div className="w-11 h-11 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="chat_bubble_outline"
                >
                  chat_bubble_outline
                </span>
              </div>
              <span className="bg-surface-container-high text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Privat &amp; Aman
              </span>
            </div>
            <div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">
                Curhat Anonim
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Tulis apa yang sedang kamu rasakan tanpa identitas publik.
              </p>
            </div>
            <Link
              href="/curhat"
              className="w-full bg-primary text-on-primary py-2.5 px-4 rounded-xl text-label-md font-label-md font-medium flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-95 transition-all"
            >
              <span>Mulai Curhat</span>
              <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                arrow_forward
              </span>
            </Link>
          </article>

          {/* 2. Komunitas Teman Sebaya */}
          <article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 custom-shadow-resting hover:border-primary/40 transition-all flex flex-col justify-between gap-3">
            <div className="flex items-start justify-between gap-3">
              <div className="w-11 h-11 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary" data-icon="groups">
                  groups
                </span>
              </div>
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full font-medium">
                4 Topik Aktif
              </span>
            </div>
            <div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">
                Komunitas Teman Sebaya
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Temukan cerita dan saling memberi dukungan bersama kawan seperjuangan.
              </p>
            </div>
            <Link
              href="/komunitas"
              className="w-full bg-secondary-container text-on-secondary-container py-2.5 px-4 rounded-xl text-label-md font-label-md font-medium flex items-center justify-center gap-2 hover:bg-secondary-fixed transition-all active:scale-95"
            >
              <span>Jelajahi Komunitas</span>
              <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                arrow_forward
              </span>
            </Link>
          </article>

          {/* 3. Konsultasi Profesional */}
          <article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 custom-shadow-resting hover:border-primary/40 transition-all flex flex-col justify-between gap-3">
            <div className="flex items-start justify-between gap-3">
              <div className="w-11 h-11 rounded-xl bg-surface-container-high text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary" data-icon="psychology">
                  psychology
                </span>
              </div>
              <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full font-medium">
                SIPP Terverifikasi
              </span>
            </div>
            <div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">
                Konsultasi Profesional
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Jadwalkan sesi bersama psikolog klinis tersertifikasi secara privat.
              </p>
            </div>
            <Link
              href="/konsultasi"
              className="w-full bg-surface-container-high text-primary py-2.5 px-4 rounded-xl text-label-md font-label-md font-medium flex items-center justify-center gap-2 hover:bg-secondary-container transition-all active:scale-95"
            >
              <span>Cari Psikolog</span>
              <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                arrow_forward
              </span>
            </Link>
          </article>
        </section>

        {/* Emotional Self-Check Guide */}
        <section className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/40 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
            <span
              className="material-symbols-outlined text-xl"
              data-icon="spa"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              spa
            </span>
          </div>
          <div className="flex-1">
            <p className="text-label-md font-label-md font-semibold text-on-surface">
              Panduan Emosional Hari Ini
            </p>
            <p className="text-body-sm font-body-sm text-on-surface-variant leading-snug">
              Beri waktu sejenak untuk diri sendiri sebelum melanjutkan rutinitas.
            </p>
          </div>
        </section>

        {/* Recent Discussion Snapshot */}
        <section className="flex flex-col gap-2.5 mb-2">
          <div className="flex items-center justify-between">
            <h2 className="text-label-lg font-label-lg font-semibold text-on-surface tracking-tight">
              Diskusi Hangat Terkini
            </h2>
            <Link href="/konsultasi" className="text-label-sm font-label-sm text-primary font-medium hover:underline">
              Lihat Semua
            </Link>
          </div>
          <Link href="/curhat/1" className="block">
            <article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 custom-shadow-resting hover:border-primary/40 transition-all">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-base" data-icon="visibility_off">
                      visibility_off
                    </span>
                  </div>
                  <span className="text-label-sm font-label-sm text-on-surface font-medium">
                    Mahasiswa Tingkat Akhir
                  </span>
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
                  <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-tertiary-container">
                    <span
                      className="material-symbols-outlined text-base"
                      data-icon="favorite"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      favorite
                    </span>
                    <span>24 dukungan</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-outline">
                    <span className="material-symbols-outlined text-base" data-icon="chat_bubble">
                      chat_bubble
                    </span>
                    <span>6 tanggapan</span>
                  </span>
                </div>
                <span className="text-primary text-label-sm font-label-sm font-semibold">
                  Beri Peluk
                </span>
              </div>
            </article>
          </Link>
        </section>
      </main>
    </>
  );
}
