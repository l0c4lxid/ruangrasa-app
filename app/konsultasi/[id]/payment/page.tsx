import React from 'react';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      {/* Top Bar Navigation */}
      <header className="w-full px-5 py-3 flex items-center justify-between z-10">
        <button aria-label="Tutup" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all" type="button">
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <span className="font-headline-sm text-headline-sm text-primary font-semibold tracking-tight">RuangRasa</span>
        <button aria-label="Bantuan Informasi" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all" type="button">
          <span className="material-symbols-outlined text-[22px]">help_outline</span>
        </button>
      </header>
      <div className="px-5 flex-1 flex flex-col">
        {/* Confirmation Illustration */}
        <section className="flex flex-col items-center text-center mt-2 mb-6">
          <div className="relative w-24 h-24 flex items-center justify-center mb-4">
            <div className="absolute inset-0 rounded-full bg-secondary-container opacity-40 animate-ping" style={{ animationDuration: "3s" }}></div>
            <div className="absolute inset-1 rounded-full bg-surface-container-high opacity-70"></div>
            <div className="relative w-18 h-18 w-[72px] h-[72px] rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
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
              <span className="material-symbols-outlined text-[16px] text-tertiary-container animate-pulse">hourglass_top</span>
              Status: Menunggu Konfirmasi Terapis
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Booking belum resmi dikonfirmasi sebelum profesional menyetujui jadwal.
            </p>
          </div>
        </section>
        {/* Reservation Details Card */}
        <section className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant shadow-sm mb-4">
          {/* Counselor Profile Strip */}
          <div className="flex items-center gap-3.5 pb-4 border-b border-outline-variant">
            <div className="relative">
              <img className="w-14 h-14 rounded-2xl object-cover bg-surface-container" alt="Potret psikolog klinis wanita Indonesia berbusana rapi bersahaja dan ramah dengan senyum hangat dan ekspresi teduh profesional di ruang konseling yang asri bernuansa tanaman hijau teduh dan pencahayaan alami lembut bergaya modern." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_RI1LUUtSAc1M-snlGUsOjCM3IutZQzSpEoYjI7cuZhyWaGCDhjSIlHw7nFJwVB2ainYy_v7rWnxcnGYQUHaYI0VYTO7muUq2UTsLDVr1J7sz9u56p-boR3qS7sGjkw6NNLLE6aDR76Xh9YI0Trcu9JI1SxyRUs9_CFG_p6eXrNTkxd7aBe-Xk1BbkmRiZDOXCaU8Fye8CAmdizfL5qF9xfkJV9i_vPyAudw1So_67O7FAoYK7Dxy" />
              <div className="absolute -bottom-1 -right-1 bg-primary text-on-primary rounded-full w-5 h-5 flex items-center justify-center border-2 border-surface-container-lowest">
                <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="font-label-lg text-label-lg font-semibold text-on-surface leading-snug">Nadia Larasati, M.Psi.</h2>
              </div>
              <p className="font-label-sm text-label-sm text-secondary font-medium">Psikolog Klinis Dewasa</p>
              <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-outline mt-0.5">
                <span className="material-symbols-outlined text-[13px] text-primary">verified_user</span>
                Terverifikasi Demo
              </span>
            </div>
          </div>
          {/* Appointment Specifics List */}
          <div className="space-y-3 pt-3.5">
            {/* Item 1: Schedule */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5 shrink-0">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
              </div>
              <div className="flex-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Jadwal Diajukan</span>
                <p className="font-label-md text-label-md font-medium text-on-surface">Selasa, 25 Oktober 2024</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">14:00 - 14:50 WIB (50 Menit)</p>
              </div>
            </div>
            {/* Item 2: Format */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5 shrink-0">
                <span className="material-symbols-outlined text-[18px]">videocam</span>
              </div>
              <div className="flex-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Format Konsultasi</span>
                <p className="font-label-md text-label-md font-medium text-on-surface">Video Call Terenkripsi RuangRasa</p>
                <span className="inline-block mt-0.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-0.5 rounded-full">End-to-End Encrypted</span>
              </div>
            </div>
            {/* Item 3: Anonymous Alias */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5 shrink-0">
                <span className="material-symbols-outlined text-[18px]">visibility_off</span>
              </div>
              <div className="flex-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Identitas Pemesan</span>
                <p className="font-label-md text-label-md font-medium text-on-surface">Kawan Tenang #782</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Identitas aslimu disamarkan demi privasi</p>
              </div>
            </div>
            {/* Item 4: Price & Rate Notice */}
            <div className="flex items-start gap-3 pt-1 border-t border-dashed border-outline-variant">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5 shrink-0">
                <span className="material-symbols-outlined text-[18px]">payments</span>
              </div>
              <div className="flex-1 flex justify-between items-baseline">
                <div>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Estimasi Tarif Sesi</span>
                  <span className="font-label-sm text-label-sm text-secondary font-medium">Tarif Mahasiswa Terjangkau - Demo</span>
                </div>
                <span className="font-headline-sm text-headline-sm font-semibold text-primary">Rp 150.000</span>
              </div>
            </div>
          </div>
        </section>
        {/* Important Notice & Cancellation Policy Cards */}
        <section className="space-y-2.5 mb-6">
          {/* Review Latency Notice */}
          <div className="bg-tertiary-fixed/40 border border-tertiary-fixed-dim/70 rounded-xl p-3.5 flex gap-3 items-start">
            <span className="material-symbols-outlined text-[20px] text-tertiary mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
            <div className="text-left">
              <p className="font-body-sm text-body-sm text-on-tertiary-fixed font-medium leading-snug">
                Mbak Nadia akan meninjau ketersediaan dalam maksimal 2 jam. Pemberitahian akan dikirim via notifikasi aplikasi.
              </p>
            </div>
          </div>
          {/* Privacy & Flexible Cancellation Policy */}
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-3.5 flex gap-3 items-start">
            <span className="material-symbols-outlined text-[20px] text-primary mt-0.5 shrink-0">shield</span>
            <div>
              <h3 className="font-label-md text-label-md font-semibold text-on-surface">Kebijakan Privasi &amp; Batal</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Pembatalan bebas biaya hingga 3 jam sebelum jadwal sesi dimulai. Dana deposit akan otomatis dikembalikan seutuhnya.
              </p>
            </div>
          </div>
        </section>
        {/* Primary Action Buttons */}
        <section className="space-y-2.5 mt-auto">
          {/* Primary Action */}
          <button className="w-full h-[50px] bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-semibold rounded-[14px] flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all duration-150" type="button">
            <span>Lihat Sesi di Konsultasi Saya</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
          {/* Secondary Action */}
          <button className="w-full h-[46px] bg-transparent hover:bg-surface-container text-primary font-label-lg text-label-lg font-semibold rounded-[14px] flex items-center justify-center border border-outline-variant active:scale-95 transition-all duration-150" type="button">
            <span>Kembali ke Beranda</span>
          </button>
        </section>
        {/* Crisis Safety Net Microcopy */}
        <footer className="mt-6 pt-3 text-center border-t border-outline-variant/60">
          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-tertiary">emergency</span>
            <span>Butuh penanganan segera?</span>
            <a className="font-label-md text-label-md font-semibold text-tertiary underline decoration-tertiary/50 underline-offset-2 hover:text-on-surface" href="tel:119">Hubungi Hotline Krisis 119</a>
          </p>
        </footer>
      </div>
    </>
  );
}
