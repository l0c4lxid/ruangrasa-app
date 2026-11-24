import Link from "next/link";

export default async function CurhatDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      {/* Top App Bar with Modern Glass Header */}
      <header className="sticky top-0 z-40 glass-header shadow-xs transition-all">
        <div className="flex items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-3">
            <Link
              href="/curhat"
              aria-label="Kembali ke Curhat Feed"
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-transform duration-150"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div className="flex flex-col">
              <h1 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                Curhat Kawan #{id || "412"}
              </h1>
              <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                Ruang Aman Terjaga
              </span>
            </div>
          </div>
          {/* Trailing Menu */}
          <div className="relative">
            <button
              aria-label="Opsi lainnya"
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-transform duration-150"
              type="button"
            >
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Scrollable Area */}
      <main className="px-5 pt-3 pb-36 space-y-4 flex-1">
        {/* Kartu Utama Curhat with Modern Glass Card */}
        <article className="glass-card rounded-[22px] border border-white/80 p-5 shadow-xs">
          {/* Author Info & Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary shadow-inner">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1", fontSize: "26px" }}
                >
                  nest_eco_leaf
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                    Kawan Anonim #{id || "412"}
                  </span>
                  <span className="bg-secondary-container text-on-secondary-container text-[11px] px-2 py-0.5 rounded-full font-semibold">
                    Penulis
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-outline block mt-0.5">
                  15 menit lalu • Anonim
                </span>
              </div>
            </div>
            <span className="bg-white/70 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm font-medium border border-outline-variant/30">
              Akademik &amp; Skripsi
            </span>
          </div>

          {/* Isi Curhat Lengkap */}
          <div className="space-y-3 text-on-surface">
            <h2 className="font-headline-sm text-headline-sm font-semibold text-primary">
              Capek banget rasanya pura-pura baik-baik aja...
            </h2>
            <p className="font-body-md text-body-md leading-relaxed text-justify">
              Tiap ditanya kapan wisuda sama keluarga besar, tenggorokan rasanya tercekat. Padahal tiap malam revisian bab 4 ga selesai-selesai karena dosen pembimbing susah banget dihubungi. Kadang ngerasa apa aku yang ga mampu ya?
            </p>
            <p className="font-body-md text-body-md leading-relaxed text-justify text-on-surface-variant">
              Malam ini bener-bener butuh tempat cerita yang ga nyalahin atau banding-bandingin aku sama saudara lain. Terima kasih buat siapa pun yang baca ini.
            </p>
          </div>

          {/* Empathy Action Bar */}
          <div className="mt-5 pt-4 border-t border-outline-variant/30 flex items-center justify-between">
            <button
              className="flex items-center gap-2 bg-secondary-container/70 text-on-secondary-container hover:bg-secondary-container px-4 py-2 rounded-full font-label-md text-label-md font-semibold active:scale-95 transition-transform min-h-[44px]"
              type="button"
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
              <span>Kirim Pelukan Hangat (42)</span>
            </button>
            <span className="font-body-sm text-body-sm text-outline">
              12 Tanggapan
            </span>
          </div>
        </article>

        {/* Section Komentar & Dukungan Kawan */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-2">
              <span>Dukungan Kawan Sebaya</span>
              <span className="bg-primary/10 text-primary text-label-sm px-2 py-0.5 rounded-full font-semibold">
                12
              </span>
            </h3>
            <span className="font-label-sm text-label-sm text-outline">
              Terbaru
            </span>
          </div>

          {/* Komentar 1 */}
          <div className="glass-card rounded-[20px] border border-white/80 p-4 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary text-sm font-semibold">
                  K
                </div>
                <div>
                  <span className="font-label-md text-label-md font-semibold text-on-surface block">
                    Kawan Anonim #918
                  </span>
                  <span className="font-body-sm text-body-sm text-outline text-[11px]">
                    8 menit lalu
                  </span>
                </div>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Peluk jauh buat kamu! Perasaanmu sangat valid kok. Skripsi itu perjalanan pribadi, bukan perlombaan. Ambil jeda hari ini ya, kamu udah berusaha hebat.
            </p>
            <div className="flex items-center gap-4 pt-1 text-on-surface-variant">
              <button
                className="flex items-center gap-1 text-label-sm font-label-sm text-primary hover:text-surface-tint min-h-[44px]"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
                <span>18 Pelukan</span>
              </button>
              <button
                className="text-label-sm font-label-sm text-outline hover:text-primary min-h-[44px]"
                type="button"
              >
                Balas
              </button>
            </div>
          </div>

          {/* Komentar 2 */}
          <div className="glass-card rounded-[20px] border border-white/80 p-4 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-tertiary text-sm font-semibold">
                  R
                </div>
                <div>
                  <span className="font-label-md text-label-md font-semibold text-on-surface block">
                    Kawan Anonim #305
                  </span>
                  <span className="font-body-sm text-body-sm text-outline text-[11px]">
                    25 menit lalu
                  </span>
                </div>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Aku juga di posisi yang sama 3 bulan lalu. Tiap bimbingan bawaannya pengen nangis. Tapi perlahan bisa selesai satu paragraf per hari. Semangat ya, kamu pasti bisa lewatin ini!
            </p>
            <div className="flex items-center gap-4 pt-1 text-on-surface-variant">
              <button
                className="flex items-center gap-1 text-label-sm font-label-sm text-primary hover:text-surface-tint min-h-[44px]"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
                <span>9 Pelukan</span>
              </button>
              <button
                className="text-label-sm font-label-sm text-outline hover:text-primary min-h-[44px]"
                type="button"
              >
                Balas
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Bar: Input Komentar Penyemangat with Glass Nav Styling */}
      <div className="fixed bottom-14 left-0 right-0 max-w-[412px] mx-auto glass-nav px-4 py-2.5 z-40 border-t border-white/80 shadow-[0_-4px_16px_rgba(23,37,29,0.04)]">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center text-primary shrink-0 border border-outline-variant/30">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
          <div className="flex-1 relative flex items-center">
            <input
              className="w-full glass-input text-on-surface placeholder:text-outline text-body-md font-body-md rounded-full py-2 pl-4 pr-10 border border-outline-variant/40 focus:outline-none focus:border-primary focus:bg-white transition-all"
              placeholder="Tulis kata-kata penyemangat..."
              type="text"
            />
            <button
              aria-label="Emotikon empati"
              className="absolute right-3 text-outline hover:text-primary flex items-center justify-center"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                sentiment_satisfied
              </span>
            </button>
          </div>
          <button
            aria-label="Kirim respon"
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-xs active:scale-95 transition-transform shrink-0"
            type="button"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              send
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
