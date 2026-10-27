export default async function CurhatDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      {/* Top App Bar (Task Header) */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm shadow-sm transition-all">
        <div className="flex items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-3">
            <button aria-label="Kembali" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-transform duration-150" type="button">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex flex-col">
              <h1 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">Curhat Kawan #412</h1>
              <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary-container inline-block"></span>
                Ruang Aman &amp; Terjaga
              </span>
            </div>
          </div>
          {/* Trailing Menu */}
          <div className="relative">
            <button aria-label="Opsi lainnya" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-transform duration-150" id="menu-btn" type="button">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
            {/* Dropdown Action Menu (Hidden by default) */}
            <div className="hidden absolute right-0 mt-1 w-48 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant py-1.5 z-50" id="action-dropdown">
              <button className="w-full px-4 py-2 text-left font-label-lg text-label-lg text-on-surface hover:bg-surface-container flex items-center gap-2.5" type="button">
                <span className="material-symbols-outlined text-outline">share</span>
                Bagikan Curhat
              </button>
              <button className="w-full px-4 py-2 text-left font-label-lg text-label-lg text-error hover:bg-error-container/40 flex items-center gap-2.5" type="button">
                <span className="material-symbols-outlined text-error">flag</span>
                Laporkan Curhat
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Ambient Botanical Breathing Banner */}
      <div className="bg-surface-container-low rounded-2xl p-3.5 flex items-center justify-between border border-outline-variant/60">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Di sini kamu bebas berekspresi tanpa dihakimi.
          </p>
        </div>
        <span className="font-label-sm text-label-sm text-primary font-medium">Teduh</span>
      </div>
      {/* Kartu Utama Curhat */}
      <article className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-5 shadow-sm">
        {/* Author Info & Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary-container shadow-inner">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: "26px" }}>nest_eco_leaf</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-label-lg text-label-lg text-on-surface font-semibold">Kawan Anonim</span>
                <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">15 menit yang lalu</p>
            </div>
          </div>
          <span className="bg-surface-container text-primary px-3 py-1 rounded-full font-label-sm text-label-sm font-medium border border-secondary-fixed-dim">
            Akademik &amp; Skripsi
          </span>
        </div>
        {/* Post Content */}
        <div className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-5">
          Udah semester 9 tapi proposal skripsi selalu revisi berkali-kali sama dosen pembimbing. Kadang merasa gak cukup pintar dan takut ngecewain orang tua di kampung...
        </div>
        {/* Stats Bar: Empati & Balasan */}
        <div className="pt-3.5 border-t border-outline-variant/70 flex items-center justify-between text-on-surface-variant">
          <div className="flex items-center gap-1.5 font-label-md text-label-md text-primary font-medium">
            <span className="material-symbols-outlined text-tertiary-container text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
            <span>42 Pelukan Hangat</span>
          </div>
          <div className="flex items-center gap-1.5 font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px]">chat_bubble_outline</span>
            <span>12 Balasan Hangat</span>
          </div>
        </div>
        {/* Action Buttons Bar: Peluk Virtual & Simpan */}
        <div className="grid grid-cols-2 gap-2.5 mt-3 pt-2">
          <button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg transition-transform active:scale-95 shadow-sm" id="hug-btn" type="button">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            <span id="hug-text">Peluk Virtual (Aktif)</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container text-primary font-label-lg text-label-lg hover:bg-secondary-container transition-colors active:scale-95 border border-outline-variant/60" id="save-btn" type="button">
            <span className="material-symbols-outlined">bookmark_border</span>
            <span>Simpan</span>
          </button>
        </div>
      </article>
      {/* Section Header */}
      <section className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-2">
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Ruang Saling Menguatkan</h2>
          <span className="text-on-surface-variant font-label-md text-label-md">(12 Balasan)</span>
        </div>
        <span className="inline-flex items-center gap-1 bg-surface-container text-secondary font-label-sm text-label-sm px-2.5 py-1 rounded-full border border-outline-variant/50">
          <span className="material-symbols-outlined text-[14px]">shield</span>
          Dimoderasi &amp; Ramah
        </span>
      </section>
      {/* Daftar Respon/Komentar Teman */}
      <div className="flex flex-col gap-3">
        {/* Komentar 1: Kawan Anonim #619 */}
        <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant shadow-sm transition-all">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              </div>
              <div>
                <span className="font-label-lg text-label-lg text-on-surface font-semibold block">Kawan Anonim #619</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">8 menit yang lalu</span>
              </div>
            </div>
            <button aria-label="Opsi balasan" className="text-outline hover:text-on-surface p-1" type="button">
              <span className="material-symbols-outlined text-[18px]">more_horiz</span>
            </button>
          </div>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-3 pl-1">
            Tarik napas dulu kak. Semester 9 bukan akhir dunia, proses tiap orang beda-beda. Kamu sudah berjuang sejauh ini itu hebat!
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-outline-variant/40">
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container hover:bg-secondary-container text-primary font-label-sm text-label-sm font-medium active:scale-95 transition-all" type="button">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>thumb_up</span>
              <span>Dukung komentar (8)</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm flex items-center gap-1 py-1 px-2" type="button">
              <span className="material-symbols-outlined text-[16px]">reply</span>
              Balas
            </button>
          </div>
        </div>
        {/* Komentar 2: Fasilitator Komunitas (Laras) - Highlighting badge & botanical accent */}
        <div className="bg-surface-container-lowest rounded-2xl p-4 border-2 border-primary-container/40 shadow-sm relative overflow-hidden">
          {/* Ambient tint ribbon */}
          <div className="absolute top-0 right-0 bg-primary-container text-on-primary font-label-sm text-label-sm px-3 py-0.5 rounded-bl-xl font-medium flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">psychology</span>
            Fasilitator RuangRasa
          </div>
          <div className="flex items-center gap-2.5 mb-2.5 mt-1">
            <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-label-lg text-label-lg text-primary font-semibold">Laras</span>
                <span className="bg-secondary-container text-on-secondary-container text-[10px] px-1.5 py-0.2 rounded font-medium">Konselor Sebaya</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">3 menit yang lalu</span>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-3 bg-surface-container-low p-3 rounded-xl border border-outline-variant/50">
            Wajar merasa lelah. Ingat untuk istirahat cukup malam ini ya. Jika butuh teman diskusi skripsi, bisa mampir ke ruang komunitas kami.
          </p>
          <div className="flex items-center justify-between pt-1">
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm font-medium active:scale-95 transition-all" type="button">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <span>Dukung komentar (14)</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm flex items-center gap-1 py-1 px-2" type="button">
              <span className="material-symbols-outlined text-[16px]">reply</span>
              Balas
            </button>
          </div>
        </div>
      </div>
      {/* Sticky Bottom Bar: Input Komentar Penyemangat */}
      <div className="fixed bottom-14 left-0 right-0 mx-auto max-w-md bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2.5 z-40 shadow-[0_-4px_16px_rgba(23,37,29,0.06)]">
        <div className="flex items-center gap-2.5">
          {/* Avatar Anonim Pengguna */}
          <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary flex-shrink-0 border border-outline-variant">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
          {/* Input Field Teks */}
          <div className="flex-1 relative flex items-center">
            <input className="w-full bg-surface-container-low text-on-surface placeholder:text-outline text-body-md font-body-md rounded-full py-2.5 pl-4 pr-10 border border-outline-variant focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Tulis kata-kata penyemangat..." type="text" />
            <button aria-label="Emotikon empati" className="absolute right-3 text-outline hover:text-primary flex items-center justify-center" type="button">
              <span className="material-symbols-outlined text-[20px]">sentiment_satisfied</span>
            </button>
          </div>
          {/* Tombol Kirim Bulat Hijau Primary */}
          <button aria-label="Kirim respon" className="w-10 h-10 rounded-full bg-primary-container hover:bg-surface-tint text-on-primary flex items-center justify-center shadow-md active:scale-95 transition-transform flex-shrink-0" type="button">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
          </button>
        </div>
      </div>
      {/* Bottom Navigation Bar (Shared Component JSON Blueprint) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-3 py-2 bg-surface dark:bg-inverse-surface shadow-md dark:shadow-none">
        {/* Beranda (Inactive) */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-3 py-1 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 active:scale-95 transition-transform duration-150" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-md text-label-md">Beranda</span>
        </a>
        {/* Curhat (ACTIVE - Style injected from JSON Blueprint) */}
        <a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 active:scale-95 transition-transform duration-150" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          <span className="font-label-md text-label-md font-semibold">Curhat</span>
        </a>
        {/* Komunitas (Inactive) */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-3 py-1 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 active:scale-95 transition-transform duration-150" href="#">
          <span className="material-symbols-outlined">groups</span>
          <span className="font-label-md text-label-md">Komunitas</span>
        </a>
        {/* Konsultasi (Inactive) */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-3 py-1 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 active:scale-95 transition-transform duration-150" href="#">
          <span className="material-symbols-outlined">psychology</span>
          <span className="font-label-md text-label-md">Konsultasi</span>
        </a>
        {/* Profil (Inactive) */}
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-3 py-1 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 active:scale-95 transition-transform duration-150" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-md text-label-md">Profil</span>
        </a>
      </nav>
    </>
  );
}
