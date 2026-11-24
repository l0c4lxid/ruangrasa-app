import Link from "next/link";

export default async function BookingJadwalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      {/* Top App Bar */}
      <header className="glass-header sticky top-0 z-30 px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href={`/konsultasi/${id}`}
            aria-label="Kembali ke Detail Psikolog"
            className="min-w-[44px] min-h-[44px] -ml-1 rounded-full flex items-center justify-center text-on-surface hover:bg-white/40 active:scale-95 transition-all duration-150"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <h1 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
            Pilih Jadwal Konsultasi
          </h1>
        </div>
        <button
          aria-label="Informasi sesi"
          className="min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-on-surface-variant hover:bg-white/40 active:scale-95 transition-all"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">help_outline</span>
        </button>
      </header>

      <main className="flex-1 px-5 pt-3 pb-36 space-y-5">
        {/* Counselor Profile Snapshot */}
        <section className="glass-card rounded-[18px] p-4 flex items-start gap-3.5">
          <div className="relative shrink-0">
            <img
              className="w-14 h-14 rounded-2xl object-cover border border-outline-variant"
              alt="Nadia Larasati, M.Psi."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJXMkBgmo-o3IWLP7jX2ghGx6wvMBLcAb_vAywGHlWwnrUi1PboWue01MZDCNKNraJmaG2vEb46iMf0WnTwfT-PRojZv-iF_GjtcHdk7Tf-NbF9NcZBSlpdENxlcD_zyNpvC48CjR9J_in6TGy8DuQJ8baMzNEsWAVZFAol1VkOMjyeJsENj6nSiF_BEAtjCv-tXcJoB6J45OfpEv9uGOXAV-qH0-7bCGWLGYK2QMwVVTP8KRa0mw9"
            />
            <div
              className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-0.5 flex items-center justify-center ring-2 ring-white"
              title="Terverifikasi"
            >
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h2 className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                Nadia Larasati, M.Psi.
              </h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-medium">
                Terverifikasi Demo
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Psikolog Klinis Dewasa
            </p>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/40">
              <span className="font-label-md text-label-md text-on-surface-variant">Biaya Sesi</span>
              <span className="font-label-lg text-label-lg text-primary font-semibold">
                Rp 150.000{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ 50 mnt</span>
              </span>
            </div>
          </div>
        </section>

        {/* Metode Konsultasi */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="font-label-lg text-label-lg text-on-surface font-medium">Metode Konsultasi</label>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Pilih format ternyaman</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-[14px] bg-secondary-container border-2 border-primary text-on-secondary-fixed-variant transition-all duration-150 active:scale-95 shadow-sm text-left min-h-[44px]"
              type="button"
            >
              <span
                className="material-symbols-outlined text-[20px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                videocam
              </span>
              <span className="font-label-lg text-label-lg font-semibold flex-1">Video Call</span>
              <span className="material-symbols-outlined text-[18px] text-primary font-bold">check_circle</span>
            </button>
            <button
              className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-[14px] glass-pill text-on-surface-variant hover:bg-white/60 active:scale-95 transition-all duration-150 text-left min-h-[44px]"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
              <span className="font-label-lg text-label-lg font-normal flex-1">Chat Interaktif</span>
              <span className="w-4 h-4 rounded-full border border-outline shrink-0"></span>
            </button>
          </div>
        </section>

        {/* Tanggal */}
        <section className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
              <span className="font-label-lg text-label-lg text-on-surface font-medium">Pilih Tanggal</span>
            </div>
            <span className="font-label-md text-label-md text-primary font-medium">Oktober 2024</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <button className="flex-1 py-3 px-1 rounded-2xl glass-pill flex flex-col items-center justify-center hover:bg-white/60 active:scale-95 transition-all duration-150 min-h-[44px]" type="button">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Sen</span>
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface mt-0.5">24</span>
              <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1"></span>
            </button>
            <button className="flex-1 py-3 px-1 rounded-2xl bg-secondary-container border-2 border-primary text-primary flex flex-col items-center justify-center shadow-sm active:scale-95 transition-all duration-150 min-h-[44px]" type="button">
              <span className="font-label-sm text-label-sm font-semibold text-primary">Sel</span>
              <span className="font-headline-sm text-headline-sm font-bold text-primary mt-0.5">25</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1"></span>
            </button>
            <button className="flex-1 py-3 px-1 rounded-2xl glass-pill flex flex-col items-center justify-center hover:bg-white/60 active:scale-95 transition-all duration-150 min-h-[44px]" type="button">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Rab</span>
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface mt-0.5">26</span>
              <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1"></span>
            </button>
            <button className="flex-1 py-3 px-1 rounded-2xl glass-pill flex flex-col items-center justify-center hover:bg-white/60 active:scale-95 transition-all duration-150 min-h-[44px]" type="button">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Kam</span>
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface mt-0.5">27</span>
              <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1"></span>
            </button>
          </div>
        </section>

        {/* Slot Waktu */}
        <section className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="font-label-lg text-label-lg text-on-surface font-medium">Slot Waktu Tersedia</label>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Zona WIB</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <button className="py-3 px-4 rounded-[14px] glass-pill text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-white/60 active:scale-95 transition-all duration-150 min-h-[44px]" type="button">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">schedule</span>
              <span>10:00 WIB</span>
            </button>
            <button className="py-3 px-4 rounded-[14px] bg-secondary-container/60 border-2 border-primary text-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all duration-150 min-h-[44px]" type="button">
              <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>alarm_on</span>
              <span>14:00 WIB</span>
            </button>
            <button className="py-3 px-4 rounded-[14px] glass-pill text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-white/60 active:scale-95 transition-all duration-150 min-h-[44px]" type="button">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">schedule</span>
              <span>16:30 WIB</span>
            </button>
            <button className="py-3 px-4 rounded-[14px] glass-pill text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-white/60 active:scale-95 transition-all duration-150 min-h-[44px]" type="button">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">schedule</span>
              <span>19:00 WIB</span>
            </button>
          </div>
        </section>

        {/* Status Info */}
        <section className="rounded-[16px] p-3.5 bg-[#FFF8E7] border border-[#F3E1B9] flex items-start gap-3">
          <span className="material-symbols-outlined text-[20px] text-[#A26D00] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
          <div>
            <p className="font-label-md text-label-md text-[#6D4900] font-semibold">
              Status: Menunggu Konfirmasi Terapis setelah pemesanan
            </p>
            <p className="font-body-sm text-body-sm text-[#7D5B18] mt-0.5 leading-snug">
              Jadwal akan divalidasi oleh Mbak Nadia dalam waktu maksimal 2 jam setelah pengajuan.
            </p>
          </div>
        </section>

        {/* Persetujuan */}
        <section className="glass-card rounded-[16px] p-3.5">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              defaultChecked
              className="mt-1 w-5 h-5 rounded text-primary border-outline focus:ring-primary focus:ring-offset-0 transition duration-150 cursor-pointer"
              type="checkbox"
            />
            <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed select-none">
              Saya menyetujui bahwa sesi ini bersifat bimbingan psikologis profesional dan{" "}
              <span className="font-medium text-on-surface">bukan penanganan darurat krisis medis</span>.
            </span>
          </label>
        </section>
      </main>

      {/* Bottom Action Bar */}
      <div className="glass-nav fixed bottom-0 left-0 right-0 max-w-[412px] mx-auto w-full p-4 z-40">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Total Estimasi</span>
          <span className="font-headline-sm text-headline-sm text-primary font-bold">Rp 150.000</span>
        </div>
        <Link
          href={`/konsultasi/${id}/payment`}
          className="w-full min-h-[52px] bg-primary hover:bg-[#1B5E43] text-white rounded-[14px] font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-150 shadow-md"
        >
          <span>Ajukan Jadwal Konsultasi</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </Link>
        <p className="font-label-sm text-label-sm text-center text-on-surface-variant mt-2">
          Privasi &amp; kerahasiaan terenkripsi standar RuangTeduh
        </p>
      </div>
    </>
  );
}
