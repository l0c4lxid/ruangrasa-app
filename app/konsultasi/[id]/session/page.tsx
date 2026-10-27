import React from 'react';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <main className="px-5 pt-3 space-y-5">
      {/* Emotional Reassurance Banner */}
      <div className="bg-surface-container-low rounded-2xl p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0">
          <span className="material-symbols-outlined fill-icon" data-icon="spa" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Ruang amanmu sudah disiapkan. Luangkan waktu sejenak untuk bernapas tenang sebelum sesi dimulai.
        </p>
      </div>
      {/* Counselor Profile Card */}
      <section className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant shadow-sm relative overflow-hidden">
        <div className="flex items-start gap-4">
          {/* Counselor Avatar */}
          <div className="relative flex-shrink-0">
            <img
              alt="Foto Nadia Larasati, M.Psi."
              className="w-16 h-16 rounded-2xl object-cover border border-surface-variant"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQrFU2xd8bkUWRu4CEXrKaLCHm6Orh58qlBqYdI3Q8iQQZyxwxdHRM2TF3QHNbwToKTu-nMvrST5_QNigvuFzLGbwZfG7VihatHzJaRfTsJq3MOQpZPvjPNFAkIJFUafOJB8QeU8O1uPV8uZ2cP2lDKcHzmTpAc-kbwPuSXGP9s-nf15hd-eXe-_8e6QksooMSl0_yFsZ1x9UKHwEZL1-Hf5g5uA0Cqe4tO2M8bRbKR9ti_nXr3K1H"
            />
            <div className="absolute -bottom-1 -right-1 bg-primary text-on-primary rounded-full p-1 shadow-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-xs fill-icon" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
          </div>
          {/* Counselor Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Nadia Larasati, M.Psi.</h2>
            </div>
            <p className="font-label-sm text-label-sm text-primary font-medium mt-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs" data-icon="verified_user">verified_user</span>
              <span>SIPP Terverifikasi: 198904-2021-088</span>
            </p>
            <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
              <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                Regulasi Emosi
              </span>
              <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-medium">
                Skripsi &amp; Burnout
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-3.5 border-t border-surface-variant flex items-center justify-between text-on-surface-variant">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-tertiary fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-label-md text-label-md font-semibold text-on-surface">4.95</span>
            <span className="font-label-sm text-label-sm text-outline">(140+ ulasan)</span>
          </div>
          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface text-primary font-medium">
            Psikolog Klinis Dewasa
          </span>
        </div>
      </section>
      {/* Schedule & Session Format Details */}
      <section className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant shadow-sm space-y-4">
        <h3 className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" data-icon="event">event</span>
          Waktu &amp; Media Pertemuan
        </h3>
        {/* Schedule Items */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low">
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Hari &amp; Tanggal</p>
              <p className="font-body-md text-body-md font-medium text-on-surface">Selasa, 25 Okt 2024</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low">
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-base" data-icon="schedule">schedule</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Waktu Konsultasi</p>
              <p className="font-body-md text-body-md font-medium text-on-surface">14:00 - 14:50 WIB <span className="text-primary font-semibold">(50 Menit)</span></p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low">
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-base" data-icon="lock">lock</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Format Sesi</p>
              <p className="font-body-md text-body-md font-medium text-on-surface">Video Call Terenkripsi Peer-to-Peer</p>
              <p className="font-label-sm text-label-sm text-outline mt-0.5">Koneksi aman, audio dan video tidak direkam.</p>
            </div>
          </div>
        </div>
        {/* Primary Action Button */}
        <div className="pt-2">
          <button className="w-full h-12 bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-primary active:scale-95 transition-all duration-150 shadow-sm" type="button">
            <span className="material-symbols-outlined text-xl" data-icon="videocam">videocam</span>
            <span>Buka Ruang Sesi Video</span>
          </button>
          <p className="text-center font-label-sm text-label-sm text-outline mt-2 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-xs" data-icon="timer">timer</span>
            Tombol ruang aktif 10 menit sebelum sesi dimulai (13:50 WIB)
          </p>
        </div>
      </section>
      {/* Checklist & Kenyamanan Sebelum Sesi */}
      <section className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant shadow-sm space-y-3.5">
        <div className="flex items-center justify-between">
          <h3 className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" data-icon="checklist_rtl">checklist_rtl</span>
            Panduan Kenyamanan Sesi
          </h3>
          <span className="font-label-sm text-label-sm text-primary bg-secondary-container/40 px-2 py-0.5 rounded-full font-medium">Teduh &amp; Aman</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Agar proses berbincang terasa lebih leluasa dan nyaman, pertimbangkan langkah-langkah sederhana ini:
        </p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-surface-container-low transition-colors">
            <div className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-sm font-semibold" data-icon="check">check</span>
            </div>
            <div className="flex-1">
              <p className="font-body-md text-body-md text-on-surface font-medium">Siapkan tempat yang tenang dan privat</p>
              <p className="font-body-sm text-body-sm text-outline">Cari sudut kamar atau ruangan di mana kamu bisa bicara tanpa distraksi.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-surface-container-low transition-colors">
            <div className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-sm font-semibold" data-icon="check">check</span>
            </div>
            <div className="flex-1">
              <p className="font-body-md text-body-md text-on-surface font-medium">Gunakan earphone atau headset</p>
              <p className="font-body-sm text-body-sm text-outline">Menjaga kejelasan audio serta privasi percakapan kedua belah pihak.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-surface-container-low transition-colors">
            <div className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-sm font-semibold" data-icon="check">check</span>
            </div>
            <div className="flex-1">
              <p className="font-body-md text-body-md text-on-surface font-medium">Siapkan catatan poin jika diperlukan</p>
              <p className="font-body-sm text-body-sm text-outline">Tuliskan kata kunci hal yang belakangan ini mengganjal agar tak terlewat.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 p-2.5 rounded-xl bg-surface-container-low/70">
            <div className="w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-sm fill-icon" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
            <div className="flex-1">
              <p className="font-body-md text-body-md text-on-surface font-medium">Tidak perlu merasa terburu-buru</p>
              <p className="font-body-sm text-body-sm text-outline">Sesi ini sepenuhnya bebas penghakiman. Bicaralah sesuai ritmemu sendiri.</p>
            </div>
          </li>
        </ul>
      </section>
      {/* Kebijakan Perubahan Sesi & Action Buttons */}
      <section className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant shadow-sm space-y-4">
        <div>
          <h3 className="font-label-lg text-label-lg font-semibold text-on-surface">Kelola Jadwal Konsultasi</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Reschedule gratis dapat dilakukan selambat-lambatnya 4 jam sebelum jadwal sesi konsultasi berlangsung.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-1">
          {/* Jadwalkan Ulang Button */}
          <button className="h-12 bg-secondary-container text-on-secondary-container rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-1.5 hover:bg-secondary-fixed active:scale-95 transition-all duration-150" type="button">
            <span className="material-symbols-outlined text-lg" data-icon="calendar_month">calendar_month</span>
            <span>Jadwalkan Ulang</span>
          </button>
          {/* Batalkan Sesi Button */}
          <button className="h-12 bg-surface-container-low text-error border border-outline-variant/60 rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-1.5 hover:bg-error-container hover:text-on-error-container active:scale-95 transition-all duration-150" type="button">
            <span className="material-symbols-outlined text-lg" data-icon="cancel">cancel</span>
            <span>Batalkan Sesi</span>
          </button>
        </div>
      </section>
      {/* Pusat Bantuan Konsultasi */}
      <section className="pt-1 pb-4">
        <a className="w-full py-3 px-4 rounded-xl border border-outline-variant bg-surface-container-lowest flex items-center justify-between hover:bg-surface-container transition-colors duration-150 group" href="#help-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-lg" data-icon="help_outline">help_outline</span>
            </div>
            <div className="text-left">
              <span className="font-label-lg text-label-lg font-medium text-on-surface block">Pusat Bantuan Konsultasi</span>
              <span className="font-label-sm text-label-sm text-outline">Kendala teknis, koneksi, atau tanya admin</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
        </a>
      </section>
    </main>
  );
}
