import Link from "next/link";

export default async function PaymentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md w-full px-5 py-3 flex items-center justify-between border-b border-outline-variant/20 shadow-sm">
        <Link
          href={`/konsultasi/${id}`}
          aria-label="Tutup dan kembali"
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </Link>
        <span className="font-headline-sm text-headline-sm text-primary font-semibold tracking-tight">
          RuangTeduh
        </span>
        <button
          aria-label="Bantuan Informasi"
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">help_outline</span>
        </button>
      </header>

      <main className="px-5 pt-3 pb-12 flex-1 flex flex-col">
        {/* Confirmation Illustration */}
        <section className="flex flex-col items-center text-center mt-2 mb-6">
          <div className="relative w-24 h-24 flex items-center justify-center mb-4">
            <div
              className="absolute inset-0 rounded-full bg-secondary-container opacity-40 animate-ping"
              style={{ animationDuration: "3s" }}
            ></div>
            <div className="absolute inset-1 rounded-full bg-surface-container-high opacity-70"></div>
            <div className="relative w-[72px] h-[72px] rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
              <span
                className="material-symbols-outlined text-[36px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                calendar_month
              </span>
              <div className="absolute -bottom-1 -right-1 bg-surface-container-lowest text-primary rounded-full p-1 shadow-sm flex items-center justify-center border-2 border-surface">
                <span className="material-symbols-outlined text-[18px] font-bold">check_circle</span>
              </div>
            </div>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-semibold tracking-tight mb-2">
            Pengajuan Jadwal Terkirim
          </h1>
          <div className="bg-surface-container-low px-4 py-2.5 rounded-xl border border-outline-variant max-w-xs">
            <p className="font-label-md text-label-md text-primary font-semibold mb-0.5 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary-container animate-pulse">
                hourglass_top
              </span>
              Status: Menunggu Konfirmasi Terapis
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Booking belum resmi dikonfirmasi sebelum profesional menyetujui jadwal.
            </p>
          </div>
        </section>

        {/* Reservation Details Card */}
        <section className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant shadow-sm mb-4 space-y-4">
          {/* Counselor Profile Strip */}
          <div className="flex items-center gap-3.5 pb-4 border-b border-outline-variant/50">
            <div className="relative">
              <img
                className="w-14 h-14 rounded-2xl object-cover bg-surface-container border border-outline-variant"
                alt="Nadia Larasati, M.Psi."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_RI1LUUtSAc1M-snlGUsOjCM3IutZQzSpEoYjI7cuZhyWaGCDhjSIlHw7nFJwVB2ainYy_v7rWnxcnGYQUHaYI0VYTO7muUq2UTsLDVr1J7sz9u56p-boR3qS7sGjkw6NNLLE6aDR76Xh9YI0Trcu9JI1SxyRUs9_CFG_p6eXrNTkxd7aBe-Xk1BbkmRiZDOXCaU8Fye8CAmdizfL5qF9xfkJV9i_vPyAudw1So_67O7FAoYK7Dxy"
              />
              <div className="absolute -bottom-1 -right-1 bg-primary text-on-primary rounded-full w-5 h-5 flex items-center justify-center border-2 border-surface-container-lowest">
                <span
                  className="material-symbols-outlined text-[12px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-label-lg text-label-lg font-semibold text-on-surface leading-snug">
                Nadia Larasati, M.Psi.
              </h2>
              <p className="font-label-sm text-label-sm text-secondary font-medium">
                Psikolog Klinis Dewasa
              </p>
              <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-outline mt-0.5">
                <span className="material-symbols-outlined text-[13px] text-primary">
                  verified_user
                </span>
                Terverifikasi Demo
              </span>
            </div>
          </div>

          {/* Session Details List */}
          <div className="space-y-2.5 text-body-sm font-body-sm text-on-surface-variant">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">event</span>
                Tanggal Sesi
              </span>
              <span className="font-semibold text-on-surface">Selasa, 25 Okt 2024</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                Waktu &amp; Durasi
              </span>
              <span className="font-semibold text-on-surface">14:00 WIB (50 Menit)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">videocam</span>
                Format Konseling
              </span>
              <span className="font-semibold text-primary">Video Call Privat</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-outline-variant/40">
              <span className="font-semibold text-on-surface">Total Biaya Sesi</span>
              <span className="font-headline-sm text-headline-sm font-bold text-primary">
                Rp 150.000
              </span>
            </div>
          </div>
        </section>

        {/* Informational Guidance Notice */}
        <section className="space-y-3 mb-6">
          <div className="bg-tertiary-fixed/40 border border-tertiary-fixed-dim/70 rounded-xl p-3.5 flex gap-3 items-start">
            <span
              className="material-symbols-outlined text-[20px] text-tertiary mt-0.5 shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              alarm
            </span>
            <div>
              <h3 className="font-label-md text-label-md font-semibold text-on-tertiary-fixed">
                Persetujuan Jadwal Terapis
              </h3>
              <p className="font-body-sm text-body-sm text-on-tertiary-fixed font-medium leading-snug mt-0.5">
                Mbak Nadia akan meninjau ketersediaan dalam maksimal 2 jam. Pemberitahuan akan dikirim via notifikasi aplikasi.
              </p>
            </div>
          </div>
          {/* Privacy & Cancellation Policy */}
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-3.5 flex gap-3 items-start">
            <span className="material-symbols-outlined text-[20px] text-primary mt-0.5 shrink-0">
              shield
            </span>
            <div>
              <h3 className="font-label-md text-label-md font-semibold text-on-surface">
                Kebijakan Privasi &amp; Pembatalan
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-0.5">
                Pembatalan bebas biaya hingga 3 jam sebelum jadwal sesi dimulai.
              </p>
            </div>
          </div>
        </section>

        {/* Primary Action Buttons */}
        <section className="space-y-2.5 mt-auto">
          <Link
            href="/konsultasi/saya"
            className="w-full h-[50px] bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-semibold rounded-[14px] flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all duration-150"
          >
            <span>Lihat Sesi di Konsultasi Saya</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
          <Link
            href="/"
            className="w-full h-[46px] bg-transparent hover:bg-surface-container text-primary font-label-lg text-label-lg font-semibold rounded-[14px] flex items-center justify-center border border-outline-variant active:scale-95 transition-all duration-150"
          >
            <span>Kembali ke Beranda</span>
          </Link>
        </section>

        {/* Crisis Safety Net Microcopy */}
        <footer className="mt-6 pt-3 text-center border-t border-outline-variant/60">
          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-tertiary">emergency</span>
            <span>Butuh penanganan segera?</span>
            <a
              className="font-label-md text-label-md font-semibold text-tertiary underline decoration-tertiary/50 underline-offset-2 hover:text-on-surface"
              href="tel:119"
            >
              Hubungi Hotline Krisis 119
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
