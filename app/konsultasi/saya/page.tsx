import Link from "next/link";

export default function KonsultasiSayaPage() {
  return (
    <>
      {/* Top App Bar */}
      <header className="glass-header sticky top-0 z-40 px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/konsultasi"
            aria-label="Kembali ke Konsultasi"
            className="min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-on-surface hover:bg-white/40 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[22px]">arrow_back</span>
          </Link>
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary tracking-tight font-semibold">
            Konsultasi Saya
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <button
            aria-label="Bantuan atau Pertanyaan"
            className="min-w-[44px] min-h-[44px] text-on-surface-variant hover:bg-white/40 rounded-full active:scale-95 transition-all flex items-center justify-center"
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">help</span>
          </button>
        </div>
      </header>

      <main className="flex-1 px-5 pt-3 pb-24 flex flex-col gap-4">
        {/* Status Filter Tabs */}
        <nav aria-label="Filter Status Sesi" className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <button className="bg-primary text-white px-4 py-2 rounded-full font-label-md text-label-md shrink-0 shadow-sm flex items-center gap-1.5 transition-transform active:scale-95 font-semibold min-h-[44px]">
            <span>Semua Sesi</span>
            <span className="bg-on-primary/20 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold">2</span>
          </button>
          <button className="glass-pill px-4 py-2 rounded-full font-label-md text-label-md text-on-surface-variant shrink-0 hover:bg-white/60 transition-all active:scale-95 flex items-center gap-1.5 min-h-[44px]">
            <span>Mendatang</span>
            <span className="bg-surface-variant text-on-surface-variant text-[10px] px-1.5 py-0.5 rounded-full font-semibold">1</span>
          </button>
          <button className="glass-pill px-4 py-2 rounded-full font-label-md text-label-md text-on-surface-variant shrink-0 hover:bg-white/60 transition-all active:scale-95 flex items-center gap-1.5 min-h-[44px]">
            <span>Selesai</span>
            <span className="bg-surface-variant text-on-surface-variant text-[10px] px-1.5 py-0.5 rounded-full font-semibold">1</span>
          </button>
        </nav>

        {/* Sesi Terdekat */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-label-md font-label-md text-on-surface-variant tracking-wider uppercase font-semibold">
              Sesi Terdekat (Siap Masuk)
            </span>
            <span className="text-label-sm font-label-sm text-primary font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Live Room Siap
            </span>
          </div>

          <div className="glass-card rounded-2xl border-2 !border-primary/40 p-5 transition-all hover:shadow-md relative overflow-hidden flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm">
                <span
                  className="material-symbols-outlined text-[14px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="font-semibold text-primary">Dikonfirmasi Terapis</span>
              </div>
              <span className="text-label-sm font-label-sm text-primary font-bold bg-primary/10 px-2.5 py-0.5 rounded-full">
                Hari Ini, 14:00 WIB
              </span>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-outline-variant/60">
                <img
                  className="w-full h-full object-cover"
                  alt="Nadia Larasati, M.Psi."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_RI1LUUtSAc1M-snlGUsOjCM3IutZQzSpEoYjI7cuZhyWaGCDhjSIlHw7nFJwVB2ainYy_v7rWnxcnGYQUHaYI0VYTO7muUq2UTsLDVr1J7sz9u56p-boR3qS7sGjkw6NNLLE6aDR76Xh9YI0Trcu9JI1SxyRUs9_CFG_p6eXrNTkxd7aBe-Xk1BbkmRiZDOXCaU8Fye8CAmdizfL5qF9xfkJV9i_vPyAudw1So_67O7FAoYK7Dxy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-headline-sm font-headline-sm text-on-surface font-semibold truncate">
                  Nadia Larasati, M.Psi.
                </h2>
                <p className="text-body-sm font-body-sm text-secondary font-medium truncate">
                  Psikolog Klinis Dewasa
                </p>
                <div className="flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant mt-0.5">
                  <span className="material-symbols-outlined text-[14px] text-primary">videocam</span>
                  <span>Video Call (50 Menit)</span>
                </div>
              </div>
            </div>

            <Link
              href="/konsultasi/nadia-larasati/session"
              className="w-full min-h-[48px] px-4 rounded-xl bg-primary hover:bg-[#1B5E43] text-white font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all"
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                meeting_room
              </span>
              <span>Masuk Ruang Sesi Konseling</span>
            </Link>
          </div>
        </section>

        {/* Sesi Mendatang */}
        <section className="flex flex-col gap-3 mt-1">
          <div className="flex items-center justify-between">
            <span className="text-label-md font-label-md text-on-surface-variant tracking-wider uppercase font-semibold">
              Sesi Mendatang Lainnya
            </span>
            <span className="text-label-sm font-label-sm text-outline">Dalam 3 Hari</span>
          </div>

          <div className="glass-card rounded-2xl p-5 transition-all hover:shadow-md flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-label-sm font-label-sm">
                <span className="material-symbols-outlined text-[14px] text-primary">schedule</span>
                <span className="font-medium text-on-surface">Jumat, 28 Okt | 10:00 WIB</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-outline-variant/60">
                <img
                  className="w-full h-full object-cover"
                  alt="Dimas Wicaksono"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6mfh7tQAcdhKLSKpPxmRW-a8hkWB0QWRhOq7CNtcReNF6eTYZYRHfHfdVoXUKtnkEtlYPqv5izycfUEsnajalOywigIzDcZq06nQAzsAYkCCllGhNwjQ7pv1DCbpjwVQ1lczrti9UXWc8EydtlcKT8_rsctt6zu19f2eFXbuHedDQyj6lDXK24pNZfR3-kXV3uKCl72A-bp3tvygXHF1_CHXYNnUSJYhjjoLyQN--d_GpW7GVJcJx"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-headline-sm font-headline-sm text-on-surface font-semibold truncate">
                  Dimas Wicaksono, S.Psi., M.A.
                </h2>
                <p className="text-body-sm font-body-sm text-secondary font-medium truncate">
                  Konselor Hubungan &amp; Akademik
                </p>
                <div className="flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant mt-0.5">
                  <span className="material-symbols-outlined text-[14px] text-primary">chat</span>
                  <span>Sesi Chat Interaktif</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-1">
              <button
                className="w-full min-h-[44px] px-4 rounded-xl bg-surface-container text-on-surface-variant/70 font-label-md text-label-md cursor-not-allowed flex items-center justify-center gap-2 border border-outline-variant/60"
                disabled
              >
                <span className="material-symbols-outlined text-[18px]">lock_clock</span>
                <span>Masuk Ruang Sesi (Tersedia 10 mnt sebelum sesi)</span>
              </button>
            </div>
          </div>
        </section>

        {/* Supportive Note */}
        <div className="mt-2 text-center px-4 py-2">
          <p className="text-label-sm font-label-sm text-on-surface-variant">
            Perlu persiapan khusus? Baca{" "}
            <Link className="text-primary underline font-medium hover:text-surface-tint" href="/konselor">
              Panduan Konseling Tenang
            </Link>{" "}
            kami.
          </p>
        </div>
      </main>
    </>
  );
}
