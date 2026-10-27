export default function Page() {
  return (
    <div>

<section className="relative overflow-hidden rounded-2xl bg-surface-container-low p-4 border border-outline-variant/50">
<div className="relative z-10 flex flex-col gap-1.5">
<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container w-fit">
<span className="material-symbols-outlined text-[14px] text-on-secondary-fixed-variant" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
<span className="text-label-sm font-label-sm text-on-secondary-fixed-variant">Ruang Lingkar Aman</span>
</div>
<p className="text-body-md font-body-md text-on-surface-variant mt-1 leading-snug">
            Ruang diskusi terfokus dan saling menguatkan bersama teman sebaya yang dipandu fasilitator ramah.
          </p>
</div>
<div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-secondary-fixed/40 pointer-events-none blur-xl"></div>
</section>
{/* Search Input */}
<section className="relative">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">search</span>
<input className="w-full h-[48px] pl-10 pr-4 rounded-xl bg-surface-container-lowest border border-outline-variant text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="Cari topik atau kelompok..." type="search"/>
</div>
</section>
{/* Filter Tabs */}
<section className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
<button className="h-9 px-4 rounded-full bg-secondary-container text-on-secondary-fixed-variant text-label-md font-label-md font-medium border border-primary/20 flex items-center gap-1.5 shrink-0 shadow-sm active:scale-95 transition-all">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
          Semua Komunitas
        </button>
<button className="h-9 px-4 rounded-full bg-surface-container-lowest text-on-surface-variant text-label-md font-label-md font-medium border border-outline-variant hover:bg-surface-container shrink-0 active:scale-95 transition-all">
          Populer
        </button>
<button className="h-9 px-4 rounded-full bg-surface-container-lowest text-on-surface-variant text-label-md font-label-md font-medium border border-outline-variant hover:bg-surface-container shrink-0 active:scale-95 transition-all">
          Tergabung
        </button>
</section>
{/* Community Cards Section */}
<section className="flex flex-col gap-3.5 mt-1">
{/* Card 1: Pejuang Skripsi */}
<article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 shadow-sm flex flex-col gap-3 hover:border-outline-variant transition-colors">
<div className="flex items-start justify-between gap-3">
<div className="flex flex-col gap-1">
<span className="inline-block px-2 py-0.5 rounded-md bg-surface-container-high text-on-secondary-fixed-variant text-label-sm font-label-sm w-fit font-medium">Akademik</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface leading-snug">Ruang Pejuang Skripsi &amp; Tugas Akhir</h2>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-[22px]">auto_stories</span>
</div>
</div>
<div className="flex items-center gap-4 text-body-sm font-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">groups</span>
              1.2k Anggota
            </span>
<span className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[16px]">forum</span>
              18 diskusi aktif hari ini
            </span>
</div>
<button className="w-full h-11 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-label-lg font-label-lg font-medium flex items-center justify-center gap-2 active:scale-95 transition-all mt-0.5">
<span>Gabung Diskusi</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</article>
{/* Card 2: Quarter-Life Crisis */}
<article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 shadow-sm flex flex-col gap-3 hover:border-outline-variant transition-colors">
<div className="flex items-start justify-between gap-3">
<div className="flex flex-col gap-1">
<span className="inline-block px-2 py-0.5 rounded-md bg-surface-container-high text-on-secondary-fixed-variant text-label-sm font-label-sm w-fit font-medium">Karir &amp; Masa Depan</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface leading-snug">Quarter-Life Crisis &amp; Karir Awal</h2>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-[22px]">explore</span>
</div>
</div>
<div className="flex items-center gap-4 text-body-sm font-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">groups</span>
              850 Anggota
            </span>
<span className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[16px]">forum</span>
              12 diskusi aktif
            </span>
</div>
<button className="w-full h-11 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-label-lg font-label-lg font-medium flex items-center justify-center gap-2 active:scale-95 transition-all mt-0.5">
<span>Gabung Diskusi</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</article>
{/* Card 3: Anak Rantau */}
<article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 shadow-sm flex flex-col gap-3 hover:border-outline-variant transition-colors">
<div className="flex items-start justify-between gap-3">
<div className="flex flex-col gap-1">
<span className="inline-block px-2 py-0.5 rounded-md bg-surface-container-high text-on-secondary-fixed-variant text-label-sm font-label-sm w-fit font-medium">Relasi</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface leading-snug">Adaptasi Anak Rantau &amp; Homesick</h2>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-[22px]">cottage</span>
</div>
</div>
<div className="flex items-center gap-4 text-body-sm font-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">groups</span>
              620 Anggota
            </span>
<span className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[16px]">forum</span>
              9 diskusi aktif
            </span>
</div>
<button className="w-full h-11 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-label-lg font-label-lg font-medium flex items-center justify-center gap-2 active:scale-95 transition-all mt-0.5">
<span>Gabung Diskusi</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</article>
{/* Card 4: Overthinking & Self-Care */}
<article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 shadow-sm flex flex-col gap-3 hover:border-outline-variant transition-colors">
<div className="flex items-start justify-between gap-3">
<div className="flex flex-col gap-1">
<span className="inline-block px-2 py-0.5 rounded-md bg-surface-container-high text-on-secondary-fixed-variant text-label-sm font-label-sm w-fit font-medium">Kesehatan Mental</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface leading-snug">Manajemen Overthinking &amp; Self-Care</h2>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-[22px]">self_improvement</span>
</div>
</div>
<div className="flex items-center gap-4 text-body-sm font-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">groups</span>
              1.5k Anggota
            </span>
<span className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[16px]">forum</span>
              Komunitas Hangat
            </span>
</div>
<button className="w-full h-11 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-label-lg font-label-lg font-medium flex items-center justify-center gap-2 active:scale-95 transition-all mt-0.5">
<span>Gabung Diskusi</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</article>
</section>
    </div>
  );
}