import Link from "next/link";

export default async function PsikologDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      {/* Top Action Navigation Header */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-5 py-3 flex items-center justify-between transition-colors shadow-sm border-b border-outline-variant/20">
        <Link
          href="/konsultasi"
          aria-label="Kembali ke Direktori Konsultasi"
          className="w-10 h-10 rounded-full flex items-center justify-center text-primary bg-surface-container hover:bg-secondary-container transition-colors active:scale-95 duration-150"
        >
          <span className="material-symbols-outlined text-primary">arrow_back</span>
        </Link>
        <span className="font-headline-sm text-headline-sm text-primary font-semibold tracking-tight">
          Detail Psikolog
        </span>
        <button
          aria-label="Simpan Profil"
          className="w-10 h-10 rounded-full flex items-center justify-center text-primary bg-surface-container hover:bg-secondary-container transition-colors active:scale-95 duration-150"
          type="button"
        >
          <span className="material-symbols-outlined text-primary">bookmark_border</span>
        </button>
      </header>

      {/* Content Canvas */}
      <main className="px-5 pt-3 pb-36 space-y-5 flex-1">
        {/* Header Card: Profile Identity & Verification Status */}
        <section className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/50 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary-container/40 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-start gap-4 relative z-10">
            <div className="relative shrink-0">
              <img
                className="w-20 h-20 rounded-2xl object-cover shadow-sm border-2 border-surface-container"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmSi8KHlMT8SudctPZNv5HewhG27fP7b2_8j1WaXyWPDUA-ESQdoOW0WHSfemTSx5VQ08OFmjUdKjHuVQpREjzhdcUinR0aCA1MoJ_MAKJKthNOZilBcOxw4-WfgPbLZMKnSOAWOFejp-AusmJAR61cZSMzif64nAj6njBTyVbaDZq34Z3BEu6crL8vGZv2y18mgSAhFL7JyfQs9jEl5wHAnJrmKP9AVMlDFqjnFiZwRwPYwvGcirM"
                alt="Nadia Larasati, M.Psi."
              />
              <div
                className="absolute -bottom-1 -right-1 bg-primary text-on-primary rounded-full p-1 shadow-sm flex items-center justify-center"
                title="SIPP Terverifikasi"
              >
                <span
                  className="material-symbols-outlined text-[14px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-medium">
                  <span
                    className="material-symbols-outlined text-[13px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  SIPP Aktif &amp; Terverifikasi Demo
                </span>
              </div>
              <h1 className="mt-1.5 font-headline-md text-headline-md text-primary font-semibold leading-tight">
                Nadia Larasati, M.Psi.
              </h1>
              <p className="font-label-md text-label-md text-on-surface-variant mt-0.5">
                Psikolog Klinis Dewasa • 6+ Th Pengalaman
              </p>
              <p className="font-label-sm text-label-sm text-outline mt-0.5">
                No. SIPP: 2024-0812-DEMO-JKT
              </p>
            </div>
          </div>

          {/* Rating Matrix */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-outline-variant/40 text-center">
            <div className="p-2.5 rounded-xl bg-surface-container-low">
              <div className="flex items-center justify-center gap-1 text-tertiary-container">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  4.95
                </span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                90+ Sesi Teman
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-surface-container-low">
              <div className="flex items-center justify-center gap-1 text-primary">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  100%
                </span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                Tepat Waktu
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-surface-container-low">
              <div className="flex items-center justify-center gap-1 text-secondary">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  100%
                </span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                Kerahasiaan
              </p>
            </div>
          </div>
        </section>

        {/* Empathetic Bio Intro */}
        <section className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/50 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">
              psychology
            </span>
            <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
              Tentang Psikolog
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            "Halo, saya Nadia. Dalam setiap sesi, tujuan utama saya adalah menyediakan ruang aman di mana kamu bebas menjadi dirimu sendiri tanpa takut dinilai. Kita akan bersama-sama mengurai benang kusut kecemasan, kelelahan akademik, dan dinamika hubungan yang sedang kamu hadapi."
          </p>
        </section>

        {/* Fokus Keahlian */}
        <section className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/50 space-y-3">
          <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
            Fokus Pendampingan
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-secondary-container/60 text-primary font-label-md text-label-md font-medium">
              Stres Akademik &amp; Skripsi
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-secondary-container/60 text-primary font-label-md text-label-md font-medium">
              Kecemasan &amp; Overthinking
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-secondary-container/60 text-primary font-label-md text-label-md font-medium">
              Regulasi Emosi &amp; Burnout
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-secondary-container/60 text-primary font-label-md text-label-md font-medium">
              Quarter-Life Crisis
            </span>
          </div>
        </section>

        {/* Jadwal Terdekat */}
        <section className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/50 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
              Jadwal Terdekat Tersedia
            </h2>
            <span className="font-label-sm text-label-sm text-primary font-medium">
              Hari Ini &amp; Besok
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="p-2.5 rounded-xl border border-primary bg-secondary-container/50 text-center">
              <span className="block font-label-sm text-label-sm text-on-surface-variant">
                Hari ini
              </span>
              <span className="block font-label-lg font-semibold text-primary mt-0.5">
                19:00 WIB
              </span>
            </div>
            <div className="p-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-center">
              <span className="block font-label-sm text-label-sm text-on-surface-variant">
                Besok
              </span>
              <span className="block font-label-lg font-semibold text-on-surface mt-0.5">
                14:00 WIB
              </span>
            </div>
            <div className="p-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-center">
              <span className="block font-label-sm text-label-sm text-on-surface-variant">
                Besok
              </span>
              <span className="block font-label-lg font-semibold text-on-surface mt-0.5">
                16:30 WIB
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Bottom CTA Section anchored inside mobile container */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-t border-outline-variant/30 py-3 px-5 max-w-[412px] mx-auto w-full shadow-lg">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block">
              Total Biaya Sesi
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-sm text-headline-sm font-bold text-primary">
                Rp 150.000
              </span>
              <span className="font-label-sm text-label-sm text-outline">/ 50 mnt</span>
            </div>
          </div>
          <Link
            href={`/konsultasi/${id}/booking`}
            className="flex-1 max-w-[210px] h-[50px] bg-primary hover:bg-[#1B5E43] text-on-primary font-label-lg text-label-lg font-medium rounded-xl flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95 duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
            <span>Pilih Jadwal</span>
          </Link>
        </div>
      </div>
    </>
  );
}