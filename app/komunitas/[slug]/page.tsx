export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div>

<section className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant shadow-sm relative overflow-hidden">
{/* Botanical Atmosphere Accent Overlay */}
<div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-secondary-container/40 blur-2xl pointer-events-none"></div>
<div className="relative z-10 space-y-3">
{/* Tag & Verified Facilitator Badge */}
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container text-primary text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[14px] mr-1" data-icon="school">school</span>
              Akademik
            </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[15px] mr-1 text-primary" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              Fasilitator Ramah
            </span>
</div>
{/* Hero Headline */}
<h2 className="text-headline-md font-headline-md text-on-surface tracking-tight">
            Ruang Pejuang Skripsi &amp; Tugas Akhir
          </h2>
{/* Compassionate Description */}
<p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            Wadah aman berbagi keluh kesah, strategi bimbingan, dan saling menyemangati tanpa kompetisi berlebih.
          </p>
{/* Membership & Rules Actions */}
<div className="pt-1 flex items-center gap-2.5">
<button className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-label-md font-label-md hover:bg-secondary-fixed active:scale-95 transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px] mr-1.5" data-icon="check_circle" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Sudah Bergabung ✓
            </button>
<button className="inline-flex items-center justify-center px-3.5 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container active:scale-95 border border-outline-variant text-label-md font-label-md transition-all" type="button">
<span className="material-symbols-outlined text-[16px] mr-1.5" data-icon="menu_book">menu_book</span>
              Aturan Ruang Lingkar
            </button>
</div>
</div>
{/* Info Bar Statistik Strip */}
<div className="mt-4 pt-3.5 border-t border-outline-variant/60 flex flex-wrap items-center justify-between gap-y-2 text-label-sm font-label-sm text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary" data-icon="group">group</span>
<span className="font-medium text-on-surface">1.2k Anggota</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary-container" data-icon="chat_bubble">chat_bubble</span>
<span>18 Diskusi Aktif Hari Ini</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1.5 w-full sm:w-auto">
<span className="material-symbols-outlined text-[16px] text-primary" data-icon="psychology">psychology</span>
<span>Fasilitator: <span className="font-medium text-on-surface">Kak Dinda (Alumni Psikologi)</span></span>
</div>
</div>
</section>
{/* Gentle Botanical Mood Anchor Callout */}
<section className="bg-surface-container-low rounded-xl p-3.5 flex items-center gap-3 border border-outline-variant/70">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0 text-primary">
<span className="material-symbols-outlined text-[18px]" data-icon="spa">spa</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant">
          Setiap proses melangkah itu berharga. Tarik napas sejenak, bimbingan bukan perlombaan lari cepat.
        </p>
</section>
{/* Filter Pills Segment */}
<section className="space-y-2 pt-1">
<div className="flex items-center justify-between">
<h3 className="text-headline-sm font-headline-sm text-on-surface">Diskusi Teman Sebaya</h3>
<span className="text-label-sm font-label-sm text-on-surface-variant">Urutkan: Terhangat</span>
</div>
{/* Scrollable Filter Chips */}
<div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar -mx-4 px-4">
{/* Active Filter Chip */}
<button className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container border border-primary text-label-md font-label-md whitespace-nowrap shadow-sm active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px] mr-1.5 text-primary" data-icon="auto_awesome">auto_awesome</span>
            Diskusi Terbaru
          </button>
{/* Inactive Filter Chip 1 */}
<button className="inline-flex items-center px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant text-label-md font-label-md hover:bg-surface-container whitespace-nowrap active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px] mr-1.5" data-icon="help_outline">help_outline</span>
            Tanya Tips
          </button>
{/* Inactive Filter Chip 2 */}
<button className="inline-flex items-center px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant text-label-md font-label-md hover:bg-surface-container whitespace-nowrap active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px] mr-1.5" data-icon="favorite">favorite</span>
            Saling Menyemangati
          </button>
</div>
</section>
{/* Discussion Threads Cluster */}
<section className="space-y-3.5 pb-10">
{/* Card Thread 1 */}
<article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant shadow-sm hover:border-primary/50 transition-all">
{/* Thread Header */}
<div className="flex items-center justify-between mb-2.5">
<div className="flex items-center gap-2.5">
<div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary font-label-md">
<span className="material-symbols-outlined text-[18px]" data-icon="lock">lock</span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="text-label-md font-label-md text-on-surface">Kawan Anonim #302</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="text-label-sm font-label-sm text-on-surface-variant">15 menit lalu</span>
</div>
<span className="text-label-sm font-label-sm text-tertiary-container bg-surface-container-low px-2 py-0.5 rounded-md inline-block">
                  Butuh Solusi
                </span>
</div>
</div>
<button aria-label="Simpan Diskusi" className="text-on-surface-variant hover:text-primary p-1" type="button">
<span className="material-symbols-outlined text-[20px]" data-icon="bookmark_border">bookmark_border</span>
</button>
</div>
{/* Thread Question Body */}
<div className="space-y-1.5 mb-3.5">
<h4 className="text-body-lg font-headline-sm text-on-surface font-semibold leading-snug">
              Tips hadapi dosen pembimbing yang slow respon berminggu-minggu tanpa cemas berlebih?
            </h4>
<p className="text-body-md font-body-md text-on-surface-variant line-clamp-2">
              Sudah follow-up santun 2 kali di jam kerja tapi belum dibaca. Tiap buka chat WA deg-degan parah, rasanya seperti tertinggal dari teman seangkatan...
            </p>
</div>
{/* Thread Meta & Actions Footer */}
<div className="pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-label-md font-label-md text-on-surface-variant">
<div className="flex items-center gap-4">
<button className="flex items-center gap-1.5 hover:text-primary transition-colors active:scale-95" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="chat_bubble_outline">chat_bubble_outline</span>
<span>8 tanggapan</span>
</button>
<button className="flex items-center gap-1.5 hover:text-tertiary-container transition-colors active:scale-95" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="volunteer_activism">volunteer_activism</span>
<span>12 peluk</span>
</button>
</div>
<button className="text-primary text-label-md font-label-md flex items-center hover:underline" type="button">
              Beri Saran
              <span className="material-symbols-outlined text-[16px] ml-0.5" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</article>
{/* Card Thread 2 (Celebration / Warmth Accent) */}
<article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant shadow-sm hover:border-primary/50 transition-all relative overflow-hidden">
{/* Subtle warmth accent stripe */}
<div className="absolute top-0 left-0 right-0 h-1 bg-secondary-container"></div>
{/* Thread Header */}
<div className="flex items-center justify-between mb-2.5 pt-0.5">
<div className="flex items-center gap-2.5">
<div className="w-9 h-9 rounded-full bg-secondary-container/70 flex items-center justify-center text-primary font-label-md">
<span className="material-symbols-outlined text-[18px]" data-icon="verified_user">verified_user</span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="text-label-md font-label-md text-on-surface">Kawan Anonim #115</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="text-label-sm font-label-sm text-on-surface-variant">2 jam lalu</span>
</div>
<span className="text-label-sm font-label-sm text-primary bg-secondary-container/50 px-2 py-0.5 rounded-md inline-block">
                  Kabar Baik 🌿
                </span>
</div>
</div>
<button aria-label="Simpan Diskusi" className="text-on-surface-variant hover:text-primary p-1" type="button">
<span className="material-symbols-outlined text-[20px]" data-icon="bookmark_border">bookmark_border</span>
</button>
</div>
{/* Thread Celebration Body */}
<div className="space-y-1.5 mb-3.5">
<h4 className="text-body-lg font-headline-sm text-on-surface font-semibold leading-snug">
              Akhirnya bab 3 di-acc setelah 4 kali rombak total! Makasih teman-teman yang udah semangatin minggu lalu 🌿
            </h4>
<p className="text-body-md font-body-md text-on-surface-variant">
              Sempat mau nangis dan cuti semester, tapi baca ruang diskusi ini bikin ngerasa wajar kalau sempat buntu. Semangat buat yang lagi revisian juga ya!
            </p>
</div>
{/* Thread Meta & Actions Footer */}
<div className="pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-label-md font-label-md text-on-surface-variant">
<div className="flex items-center gap-4">
<button className="flex items-center gap-1.5 text-tertiary-container hover:text-tertiary font-medium active:scale-95 transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-tertiary-container" data-icon="favorite" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
<span>34 peluk hangat</span>
</button>
<button className="flex items-center gap-1.5 hover:text-primary transition-colors active:scale-95" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="chat_bubble_outline">chat_bubble_outline</span>
<span>14 komentar</span>
</button>
</div>
<button className="text-primary text-label-md font-label-md flex items-center hover:underline" type="button">
              Ikut Rayakan
              <span className="material-symbols-outlined text-[16px] ml-0.5" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</article>
</section>
    </div>
  );
}