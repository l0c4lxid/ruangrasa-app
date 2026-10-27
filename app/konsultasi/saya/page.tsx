import React from 'react';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-5 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary tracking-tight">Konsultasi Saya</h1>
        </div>
        <div className="flex items-center gap-1">
          <button aria-label="Bantuan atau Pertanyaan" className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[24px]">help</span>
          </button>
        </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 px-5 pt-3 pb-6 flex flex-col gap-5">
        {/* Gentle Empathetic Banner */}
        <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/60 flex items-start gap-3">
          <div className="p-2 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">spa</span>
          </div>
          <div className="flex-1">
            <p className="text-body-sm font-body-sm text-on-surface leading-snug">
              Ruang amanmu selalu terjaga. Kamu dapat melihat status janji temu psikolog dan persiapan sesi konseling di sini.
            </p>
          </div>
        </div>
        {/* Status Filter Tabs */}
        <nav aria-label="Filter Status Sesi" className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <button className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-md text-label-md shrink-0 shadow-sm flex items-center gap-1.5 transition-transform active:scale-95">
            <span>Menunggu</span>
            <span className="bg-on-primary/20 text-on-primary text-[10px] px-1.5 py-0.5 rounded-full font-semibold">1</span>
          </button>
          <button className="bg-surface-container-lowest border border-outline-variant text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md shrink-0 hover:bg-surface-container transition-all active:scale-95 flex items-center gap-1.5">
            <span>Mendatang</span>
            <span className="bg-surface-variant text-on-surface-variant text-[10px] px-1.5 py-0.5 rounded-full font-semibold">1</span>
          </button>
          <button className="bg-surface-container-lowest border border-outline-variant text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md shrink-0 hover:bg-surface-container transition-all active:scale-95 flex items-center gap-1.5">
            <span>Selesai</span>
            <span className="bg-surface-variant text-on-surface-variant text-[10px] px-1.5 py-0.5 rounded-full font-semibold">2</span>
          </button>
          <button className="bg-surface-container-lowest border border-outline-variant text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md shrink-0 hover:bg-surface-container transition-all active:scale-95 flex items-center gap-1.5">
            <span>Dibatalkan</span>
            <span className="bg-surface-variant text-on-surface-variant text-[10px] px-1.5 py-0.5 rounded-full font-semibold">0</span>
          </button>
        </nav>
        {/* Section: Permintaan Aktif */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-label-md font-label-md text-on-surface-variant tracking-wider uppercase">Pengajuan Aktif</span>
            <span className="text-label-sm font-label-sm text-tertiary flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">hourglass_top</span> Proses Cepat
            </span>
          </div>
          {/* Card: Nadia Larasati */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-5 shadow-sm transition-all hover:shadow-md relative overflow-hidden flex flex-col gap-4">
            {/* Subtle Top Ambient Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-tertiary-fixed-dim"></div>
            {/* Status Badge */}
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-label-sm font-label-sm">
                <span className="material-symbols-outlined text-[14px] animate-spin" style={{ animationDuration: "4s" }}>sync</span>
                <span>Menunggu Konfirmasi Terapis</span>
              </div>
              <span className="text-label-sm font-label-sm text-on-surface-variant">10 mnt lalu</span>
            </div>
            {/* Counselor Brief Info */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-outline-variant/60">
                <img className="w-full h-full object-cover" data-alt="Portrait of an empathetic Indonesian female clinical psychologist with warm smiling expression, wearing professional attire with soft natural lighting, tranquil sage green backdrop reflecting calm serene botanical ambiance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGtauwUcGLbvvhw46Hql8otkGnb_KHBHBMFPA4iHzY3Hou7ZTJM0MYOXMio7YR8ZRCBl7S4pcG6WfE4L6cEkILbGIcOL8TJp94b8t6n4GjP4H55YDrwFcN6O6v7w-4SN4WhAShh06sDJ7LQhx_kVKgEBaKrBcoKLV8a4q1pLMnSSk25rJxAOUSeey0bUstXa-j9JTMEy0nz9jCaxpxXL40KmFfHXlEwLK8LMMerIO2a30FUa36IoaN" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-headline-sm font-headline-sm text-on-surface truncate">Nadia Larasati, M.Psi.</h2>
                </div>
                <p className="text-body-sm font-body-sm text-primary font-medium truncate">Psikolog Klinis Dewasa</p>
                <div className="flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant mt-0.5">
                  <span className="material-symbols-outlined text-[14px] text-tertiary" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span>SIPPK Aktif • RuangRasa Demo</span>
                </div>
              </div>
            </div>
            {/* Session Detail Pill Box */}
            <div className="bg-surface-container-low rounded-xl p-3.5 flex flex-col gap-2.5 border border-outline-variant/50">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">calendar_today</span>
                <div className="flex-1">
                  <p className="text-label-md font-label-md text-on-surface font-semibold">Selasa, 25 Okt 2024, 14:00 WIB</p>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">Sesi Video Call (50 Mnt)</p>
                </div>
              </div>
              <div className="h-px bg-outline-variant/40 w-full"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-primary">payments</span>
                  <span className="text-label-md font-label-md text-on-surface-variant">Biaya Konsultasi</span>
                </div>
                <span className="text-label-lg font-label-lg text-primary font-semibold">Rp 150.000</span>
              </div>
            </div>
            {/* Information Notice */}
            <div className="flex items-start gap-2 text-on-surface-variant bg-surface-container/60 p-3 rounded-lg border border-outline-variant/40">
              <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">info</span>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Pengajuan dibuat 10 menit lalu. Sedang diverifikasi jadwal oleh konselor.
              </p>
            </div>
            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button className="h-11 px-3 rounded-xl border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-error-container hover:text-on-error-container hover:border-error transition-all active:scale-95 flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">close</span>
                <span>Batalkan Pengajuan</span>
              </button>
              <button className="h-11 px-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                <span>Detail Pengajuan</span>
              </button>
            </div>
          </div>
        </section>
        {/* Section: Preview Sesi Terjadwal */}
        <section className="flex flex-col gap-3 mt-1">
          <div className="flex items-center justify-between">
            <span className="text-label-md font-label-md text-on-surface-variant tracking-wider uppercase">Sesi Mendatang</span>
            <span className="text-label-sm font-label-sm text-primary font-medium flex items-center gap-0.5">
              Lihat Semua <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </span>
          </div>
          {/* Card: Dimas Wicaksono */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-5 shadow-sm transition-all hover:shadow-md flex flex-col gap-4">
            {/* Status Badge */}
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm">
                <span className="material-symbols-outlined text-[14px] text-primary" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-semibold text-primary">Dikonfirmasi</span>
              </div>
              <span className="text-label-sm font-label-sm text-primary font-medium">Dalam 3 Hari</span>
            </div>
            {/* Counselor Brief Info */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-outline-variant/60">
                <img className="w-full h-full object-cover" data-alt="Portrait of an experienced friendly young Indonesian male counselor with glasses smiling gently, serene natural light in a warm botanical modern counseling office studio, soft foliage in blurry background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6mfh7tQAcdhKLSKpPxmRW-a8hkWB0QWRhOq7CNtcReNF6eTYZYRHfHfdVoXUKtnkEtlYPqv5izycfUEsnajalOywigIzDcZq06nQAzsAYkCCllGhNwjQ7pv1DCbpjwVQ1lczrti9UXWc8EydtlcKT8_rsctt6zu19f2eFXbuHedDQyj6lDXK24pNZfR3-kXV3uKCl72A-bp3tvygXHF1_CHXYNnUSJYhjjoLyQN--d_GpW7GVJcJx" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-headline-sm font-headline-sm text-on-surface truncate">Dimas Wicaksono, S.Psi., M.A.</h2>
                <p className="text-body-sm font-body-sm text-secondary font-medium truncate">Konselor Hubungan &amp; Akademik</p>
                <div className="flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant mt-0.5">
                  <span className="material-symbols-outlined text-[14px] text-primary">chat</span>
                  <span>Sesi Chat Interaktif</span>
                </div>
              </div>
            </div>
            {/* Schedule Meta */}
            <div className="bg-surface-container-low rounded-xl p-3 flex items-center justify-between border border-outline-variant/40">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[20px] text-primary">event_available</span>
                <div>
                  <p className="text-label-md font-label-md text-on-surface font-semibold">Jumat, 28 Okt 2024</p>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">10:00 - 10:50 WIB</p>
                </div>
              </div>
              <button aria-label="Ingatkan Kalender" className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors">
                <span className="material-symbols-outlined text-[20px]">notifications_active</span>
              </button>
            </div>
            {/* Button Masuk Ruang Sesi */}
            <div className="flex flex-col gap-1.5 pt-1">
              <button className="w-full h-12 px-4 rounded-xl bg-surface-container text-on-surface-variant/70 font-label-md text-label-md cursor-not-allowed flex items-center justify-center gap-2 border border-outline-variant/60" disabled>
                <span className="material-symbols-outlined text-[18px]">lock_clock</span>
                <span>Masuk Ruang Sesi (Tersedia 10 mnt sebelum sesi)</span>
              </button>
              <p className="text-center text-label-sm font-label-sm text-outline">Tautan dan ruang chat akan aktif otomatis pada 09:50 WIB</p>
            </div>
          </div>
        </section>
        {/* Supportive Gentle Encouragement Note */}
        <div className="mt-2 text-center px-4 py-2">
          <p className="text-label-sm font-label-sm text-on-surface-variant">
            Perlu persiapan khusus? Baca <a className="text-primary underline font-medium hover:text-surface-tint" href="#">Panduan Konseling Tenang</a> kami.
          </p>
        </div>
      </main>
    </>
  );
}
