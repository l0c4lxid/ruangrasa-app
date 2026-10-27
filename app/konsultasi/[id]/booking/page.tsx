import React from 'react';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <main className="flex-1 px-5 pt-2 pb-32 space-y-5">
      {/* Counselor Profile Snapshot Card */}
      <section className="bg-surface-container-lowest rounded-[18px] p-4 border border-outline-variant shadow-sm flex items-start gap-3.5">
        <div className="relative shrink-0">
          <img className="w-14 h-14 rounded-2xl object-cover border border-outline-variant" alt="A warm, professional portrait of an Indonesian female clinical psychologist wearing soft sage green and cream attire with a gentle reassuring smile, natural soft daylight studio setting with minimalist botanical indoor plants blurred in the background, calm emotional well-being theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJXMkBgmo-o3IWLP7jX2ghGx6wvMBLcAb_vAywGHlWwnrUi1PboWue01MZDCNKNraJmaG2vEb46iMf0WnTwfT-PRojZv-iF_GjtcHdk7Tf-NbF9NcZBSlpdENxlcD_zyNpvC48CjR9J_in6TGy8DuQJ8baMzNEsWAVZFAol1VkOMjyeJsENj6nSiF_BEAtjCv-tXcJoB6J45OfpEv9uGOXAV-qH0-7bCGWLGYK2QMwVVTP8KRa0mw9" />
          <div className="absolute -bottom-1 -right-1 bg-primary text-on-primary rounded-full p-0.5 flex items-center justify-center ring-2 ring-surface-container-lowest" title="Terverifikasi">
            <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h2 className="font-label-lg text-label-lg text-on-surface font-semibold truncate">Nadia Larasati, M.Psi.</h2>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-medium">Terverifikasi Demo</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Psikolog Klinis Dewasa</p>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-surface-container-highest">
            <span className="font-label-md text-label-md text-on-surface-variant">Biaya Sesi</span>
            <span className="font-label-lg text-label-lg text-primary font-semibold">Rp 150.000 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ 50 mnt</span></span>
          </div>
        </div>
      </section>
      {/* Selection: Jenis Sesi (Pills) */}
      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="font-label-lg text-label-lg text-on-surface font-medium">Metode Konsultasi</label>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Pilih format ternyaman</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {/* Selected Pill: Video Call */}
          <button className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-[14px] bg-secondary-container border-2 border-primary text-on-secondary-fixed-variant transition-all duration-150 active:scale-95 shadow-sm text-left" type="button">
            <span className="material-symbols-outlined text-[20px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>videocam</span>
            <span className="font-label-lg text-label-lg font-semibold flex-1">Video Call</span>
            <span className="material-symbols-outlined text-[18px] text-primary font-bold">check_circle</span>
          </button>
          {/* Inactive Pill: Chat Interaktif */}
          <button className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-[14px] bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all duration-150 text-left" type="button">
            <span className="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
            <span className="font-label-lg text-label-lg font-normal flex-1">Chat Interaktif</span>
            <span className="w-4 h-4 rounded-full border border-outline shrink-0"></span>
          </button>
        </div>
      </section>
      {/* Horizontal Date Selector (Minggu Ini) */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
            <span className="font-label-lg text-label-lg text-on-surface font-medium">Pilih Tanggal</span>
          </div>
          <span className="font-label-md text-label-md text-primary font-medium">Oktober 2024</span>
        </div>
        <div className="flex justify-between items-center gap-2">
          {/* Senin 24 */}
          <button className="flex-1 py-3 px-1 rounded-2xl bg-surface-container-lowest border border-outline-variant flex flex-col items-center justify-center hover:bg-surface-container active:scale-95 transition-all duration-150" type="button">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Sen</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">24</span>
            <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1"></span>
          </button>
          {/* Selasa 25 (Aktif Hijau) */}
          <button className="flex-1 py-3 px-1 rounded-2xl bg-primary text-on-primary flex flex-col items-center justify-center ring-2 ring-primary ring-offset-2 ring-offset-surface active:scale-95 transition-all duration-150 shadow-sm" type="button">
            <span className="font-label-sm text-label-sm text-on-primary-container font-medium">Sel</span>
            <span className="font-headline-sm text-headline-sm text-on-primary font-bold mt-1">25</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed mt-1"></span>
          </button>
          {/* Rabu 26 */}
          <button className="flex-1 py-3 px-1 rounded-2xl bg-surface-container-lowest border border-outline-variant flex flex-col items-center justify-center hover:bg-surface-container active:scale-95 transition-all duration-150" type="button">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Rab</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">26</span>
            <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1"></span>
          </button>
          {/* Kamis 27 */}
          <button className="flex-1 py-3 px-1 rounded-2xl bg-surface-container-lowest border border-outline-variant flex flex-col items-center justify-center hover:bg-surface-container active:scale-95 transition-all duration-150" type="button">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Kam</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">27</span>
            <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1"></span>
          </button>
        </div>
      </section>
      {/* Slot Waktu (Chips Grid) */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <label className="font-label-lg text-label-lg text-on-surface font-medium">Slot Waktu Tersedia</label>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Zona WIB</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {/* Slot 10:00 WIB */}
          <button className="py-3 px-4 rounded-[14px] bg-surface-container-lowest border border-outline-variant text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-surface-container active:scale-95 transition-all duration-150" type="button">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">schedule</span>
            <span>10:00 WIB</span>
          </button>
          {/* Slot 14:00 WIB (Terpilih) */}
          <button className="py-3 px-4 rounded-[14px] bg-surface-container-lowest border-2 border-primary text-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-sm ring-1 ring-primary/20 active:scale-95 transition-all duration-150" type="button">
            <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>alarm_on</span>
            <span>14:00 WIB</span>
          </button>
          {/* Slot 16:30 WIB */}
          <button className="py-3 px-4 rounded-[14px] bg-surface-container-lowest border border-outline-variant text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-surface-container active:scale-95 transition-all duration-150" type="button">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">schedule</span>
            <span>16:30 WIB</span>
          </button>
          {/* Slot 19:00 WIB */}
          <button className="py-3 px-4 rounded-[14px] bg-surface-container-lowest border border-outline-variant text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-surface-container active:scale-95 transition-all duration-150" type="button">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">schedule</span>
            <span>19:00 WIB</span>
          </button>
        </div>
      </section>
      {/* Status Ringkasan Transaksi / Verifikasi (Badge Kuning Lembut) */}
      <section className="rounded-[16px] p-3.5 bg-[#FFF8E7] border border-[#F3E1B9] flex items-start gap-3">
        <span className="material-symbols-outlined text-[20px] text-[#A26D00] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
        <div>
          <p className="font-label-md text-label-md text-[#6D4900] font-semibold">Status: Menunggu Konfirmasi Terapis setelah pemesanan</p>
          <p className="font-body-sm text-body-sm text-[#7D5B18] mt-0.5 leading-snug">Jadwal akan divalidasi oleh Mbak Nadia dalam waktu maksimal 2 jam setelah pengajuan.</p>
        </div>
      </section>
      {/* Card Catatan Persetujuan & Etika */}
      <section className="bg-surface-container-lowest rounded-[16px] p-3.5 border border-outline-variant">
        <label className="flex items-start gap-3 cursor-pointer">
          <input defaultChecked className="mt-1 w-5 h-5 rounded text-primary border-outline focus:ring-primary focus:ring-offset-0 transition duration-150 cursor-pointer" type="checkbox" />
          <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed select-none">
            Saya menyetujui bahwa sesi ini bersifat bimbingan psikologis profesional dan <span className="font-medium text-on-surface">bukan penanganan darurat krisis medis</span>.
          </span>
        </label>
      </section>
    </main>
  );
}
