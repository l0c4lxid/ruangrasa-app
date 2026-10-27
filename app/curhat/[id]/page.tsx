import Link from "next/link";

export default async function CurhatDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      {/* Top App Bar (Task Header) */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm shadow-sm transition-all border-b border-outline-variant/20">
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
                <span className="w-2 h-2 rounded-full bg-primary-container inline-block"></span>
                Ruang Aman &amp; Terjaga
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
        {/* Ambient Botanical Breathing Banner */}
        <div className="bg-surface-container-low rounded-2xl p-3.5 flex items-center justify-between border border-outline-variant/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                spa
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Di sini kamu bebas berekspresi tanpa dihakimi.
            </p>
          </div>
          <span className="font-label-sm text-label-sm text-primary font-medium">
            Teduh
          </span>
        </div>

        {/* Kartu Utama Curhat */}
        <article className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-5 shadow-sm">
          {/* Author Info & Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary-container shadow-inner">
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
                  <span className="bg-secondary-fixed text-on-secondary-fixed text-[11px] px-2 py-0.5 rounded-full font-medium">
                    Penulis
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-outline block mt-0.5">
                  15 menit yang lalu • Anonim
                </span>
              </div>
            </div>
            <span className="bg-surface-container text-primary px-3 py-1 rounded-full font-label-sm text-label-sm font-medium border border-secondary-fixed-dim">
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
          <div className="mt-5 pt-4 border-t border-surface-container flex items-center justify-between">
            <button
              className="flex items-center gap-2 bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed px-4 py-2 rounded-full font-label-md text-label-md font-semibold active:scale-95 transition-transform"
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
              <span className="bg-surface-container text-primary text-label-sm px-2 py-0.5 rounded-full">
                12
              </span>
            </h3>
            <span className="font-label-sm text-label-sm text-outline">
              Terbaru
            </span>
          </div>

          {/* Komentar 1 */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-4 shadow-xs space-y-2">
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
                    8 menit yang lalu
                  </span>
                </div>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Peluk jauh buat kamu! Perasaanmu sangat valid kok. Skripsi itu perjalanan pribadi, bukan perlombaan. Ambil jeda hari ini ya, kamu udah berusaha hebat.
            </p>
            <div className="flex items-center gap-4 pt-1 text-on-surface-variant">
              <button
                className="flex items-center gap-1 text-label-sm font-label-sm text-primary hover:text-surface-tint"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
                <span>18 Pelukan</span>
              </button>
              <button
                className="text-label-sm font-label-sm text-outline hover:text-primary"
                type="button"
              >
                Balas
              </button>
            </div>
          </div>

          {/* Komentar 2 */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-4 shadow-xs space-y-2">
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
                    25 menit yang lalu
                  </span>
                </div>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Aku juga di posisi yang sama 3 bulan lalu. Tiap bimbingan bawaannya pengen nangis. Tapi perlahan bisa selesai satu paragraf per hari. Semangat ya, kamu pasti bisa lewatin ini!
            </p>
            <div className="flex items-center gap-4 pt-1 text-on-surface-variant">
              <button
                className="flex items-center gap-1 text-label-sm font-label-sm text-primary hover:text-surface-tint"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
                <span>9 Pelukan</span>
              </button>
              <button
                className="text-label-sm font-label-sm text-outline hover:text-primary"
                type="button"
              >
                Balas
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Bar: Input Komentar Penyemangat docked above the bottom nav */}
      <div className="fixed bottom-14 left-0 right-0 max-w-[412px] mx-auto bg-surface/95 backdrop-blur-md px-4 py-2.5 z-40 border-t border-outline-variant/30 shadow-[0_-4px_16px_rgba(23,37,29,0.06)]">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0 border border-outline-variant">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
          <div className="flex-1 relative flex items-center">
            <input
              className="w-full bg-surface-container-low text-on-surface placeholder:text-outline text-body-md font-body-md rounded-full py-2 pl-4 pr-10 border border-outline-variant focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-all"
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
            className="w-10 h-10 rounded-full bg-primary-container hover:bg-primary text-on-primary flex items-center justify-center shadow-md active:scale-95 transition-transform shrink-0"
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
