export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>

<section className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/50 relative overflow-hidden">
{/* Subtle botanical accent in corner */}
<div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary-container/40 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-start gap-4">
<div className="relative shrink-0">
<img className="w-20 h-20 rounded-xl object-cover shadow-sm border-2 border-surface-container"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmSi8KHlMT8SudctPZNv5HewhG27fP7b2_8j1WaXyWPDUA-ESQdoOW0WHSfemTSx5VQ08OFmjUdKjHuVQpREjzhdcUinR0aCA1MoJ_MAKJKthNOZilBcOxw4-WfgPbLZMKnSOAWOFejp-AusmJAR61cZSMzif64nAj6njBTyVbaDZq34Z3BEu6crL8vGZv2y18mgSAhFL7JyfQs9jEl5wHAnJrmKP9AVMlDFqjnFiZwRwPYwvGcirM" data-alt="A warm, approachable Indonesian female clinical psychologist in her early thirties with a compassionate and gentle demeanor, wearing modest sage-green professional attire in a soft natural-lit modern counseling room with potted plants and wooden elements, creating a calm and reassuring atmosphere in high-key aesthetic." alt="A warm, approachable Indonesian female clinical psychologist in her early thirties with a compassionate and gentle demeanor, wearing modest sage-green professional attire in a soft natural-lit modern counseling room with potted plants and wooden elements, creating a calm and reassuring atmosphere in high-key aesthetic." />
<div className="absolute -bottom-1 -right-1 bg-primary text-on-primary rounded-full p-1 shadow-sm flex items-center justify-center" title="SIPP Terverifikasi">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-medium">
<span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                SIPP Aktif &amp; Terverifikasi Demo
              </span>
</div>
<h1 className="mt-1.5 font-headline-md text-headline-md text-primary font-semibold leading-tight">
              Nadia Larasati, M.Psi.
            </h1>
<p className="font-label-md text-label-md text-on-surface-variant mt-0.5">
              Psikolog Klinis Dewasa • 6+ Th Pengalaman
            </p>
<p className="font-label-sm text-label-sm text-outline mt-0.5">
              No. SIPP: 2024-0812-DEMO-JKT
            </p>
</div>
</div>
{/* Rating, Sesi & Respon Quick Matrix */}
<div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-outline-variant/40 text-center">
<div className="p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center justify-center gap-1 text-tertiary-container">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">4.9</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">90+ Sesi Teman</p>
</div>
<div className="p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center justify-center gap-1 text-primary">
<span className="material-symbols-outlined text-[18px]">cloud_download</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">100%</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Tepat Waktu</p>
</div>
<div className="p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center justify-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">100%</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Kerahasiaan</p>
</div>
</div>
</section>
{/* Empathetic Bio Intro (Bento Block 1) */}
<section className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/50 space-y-2.5">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Catatan Hangat Kak Nadia</h2>
</div>
<p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
          “Halo, kawan. Mengakui bahwa kita sedang lelah atau bingung bukanlah tanda kelemahan, melainkan langkah awal memeluk diri sendiri. Di ruang ini, tidak ada ekspektasi untuk terlihat tegar. Ceritakan harimu secara perlahan—aku di sini mendengarkan tanpa menghakimi.”
        </p>
<div className="pt-2 flex items-center gap-2 text-label-sm font-label-sm text-on-secondary-container bg-surface-container-low p-2.5 rounded-lg">
<span className="material-symbols-outlined text-primary text-[18px]">lock</span>
<span>Sesi aman terenkripsi &amp; tunduk pada Kode Etik Psikologi HIMPSI.</span>
</div>
</section>
{/* Spesialisasi Fokus & Pendekatan Konseling (Bento Split Layout) */}
<div className="grid grid-cols-1 gap-4">
{/* Spesialisasi Fokus */}
<section className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/50 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-container text-[20px]">psychology</span>
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Fokus Pendampingan</h2>
</div>
<span className="font-label-sm text-label-sm text-outline">Paling Relevan</span>
</div>
<p className="text-on-surface-variant font-body-sm text-body-sm">
            Topik yang paling sering Kak Nadia dampingi untuk kawan kuliah &amp; profesional muda:
          </p>
<div className="flex flex-wrap gap-2 pt-1">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Stres Skripsi &amp; Tugas Akhir
            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Burnout Kerja &amp; Akademik
            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Regulasi Emosi &amp; Overthinking
            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
              Quarter-life Crisis
            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
              Dinamika Relasi Personal
            </span>
</div>
</section>
{/* Pendekatan & Metode Terapi */}
<section className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/50 space-y-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">healing</span>
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Pendekatan Konseling</h2>
</div>
<div className="grid grid-cols-2 gap-2.5 pt-1">
<div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
<div>
<span className="font-label-lg font-semibold text-primary">CBT (Kognitif Perilaku)</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Mengurai pola pikir otomatis yang memicu cemas berlebih.</p>
</div>
<span className="text-label-sm font-label-sm text-outline mt-2">Berbasis Bukti</span>
</div>
<div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
<div>
<span className="font-label-lg font-semibold text-primary">Mindfulness Therapy</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Latihan berlabuh di saat ini dengan napas dan kesadaran utuh.</p>
</div>
<span className="text-label-sm font-label-sm text-outline mt-2">Holistik &amp; Teduh</span>
</div>
</div>
</section>
</div>
{/* Format Sesi & Keamanan Privasi */}
<section className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/50 space-y-3">
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">videocam</span>
          Durasi &amp; Format Konsultasi
        </h2>
<div className="space-y-2 pt-1">
<div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-primary mt-0.5">timer</span>
<div>
<p className="font-label-lg font-semibold text-on-surface">50 Menit Tatap Maya Intensif</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">40 menit eksplorasi terarah + 10 menit rencana tindak lanjut mandiri.</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-primary mt-0.5">security</span>
<div>
<p className="font-label-lg font-semibold text-on-surface">Video Call Terenkripsi Peer-to-Peer</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Panggilan privat langsung tanpa rekaman audio/video yang disimpan di peladen.</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-tertiary-container mt-0.5">assignment</span>
<div>
<p className="font-label-lg font-semibold text-on-surface">Ringkasan Lembar Teduh (Action Plan)</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Rangkuman poin penting &amp; panduan refleksi dikirim pasca-sesi ke tab Jurnalmu.</p>
</div>
</div>
</div>
</section>
{/* Tarif Transparan & Subsidi Mahasiswa Demo */}
<section className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/50 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">payments</span>
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Tarif Transparan</h2>
</div>
<span className="font-label-sm text-label-sm text-primary bg-secondary-container px-2.5 py-0.5 rounded-full font-medium">Bebas Biaya Admin</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-3">
<div className="flex items-baseline justify-between">
<div>
<div className="flex items-center gap-2">
<span className="line-through text-outline font-body-sm text-body-sm">Rp 250.000</span>
<span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded font-medium">Subsidi Mahasiswa Demo</span>
</div>
<p className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-primary mt-1">
                Rp 150.000 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ sesi (50 mnt)</span>
</p>
</div>
</div>
<div className="text-on-surface-variant font-body-sm text-body-sm border-t border-outline-variant/30 pt-2.5 flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">school</span>
<span>Program subsidi kemitraan RuangRasa x Kampus Inklusif demi akses kesehatan mental pemuda yang setara.</span>
</div>
</div>
</section>
{/* Ulasan Metode & Testimoni Anonim Kawan Sebaya */}
<section className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/50 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">reviews</span>
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Apresiasi Kawan Sebaya</h2>
</div>
<span className="font-label-sm text-label-sm text-outline">Anonim &amp; Terjaga</span>
</div>
<div className="space-y-3">
{/* Testimoni 1 */}
<div className="p-3.5 rounded-xl bg-surface-container-low space-y-2 border border-outline-variant/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm font-semibold">
                  A
                </div>
<span className="font-label-md font-medium text-on-surface">Mahasiswa Tingkat Akhir, 22 th</span>
</div>
<div className="flex text-tertiary-container text-[14px]">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant italic">
              “Awalnya takut dihakimi karena skripsi mandek setahun. Tapi Kak Nadia sangat sabar membedah ketakutan gagal saya jadi langkah-langkah kecil. Rasanya pundak saya jauh lebih ringan sekarang.”
            </p>
<span className="text-label-sm font-label-sm text-outline block">Konsultasi 3 hari lalu • Sesi CBT</span>
</div>
{/* Testimoni 2 */}
<div className="p-3.5 rounded-xl bg-surface-container-low space-y-2 border border-outline-variant/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm font-semibold">
                  R
                </div>
<span className="font-label-md font-medium text-on-surface">Fresh Graduate, 23 th</span>
</div>
<div className="flex text-tertiary-container text-[14px]">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant italic">
              “Suasana sesinya adem banget. Nggak ada istilah rumit yang bikin pusing, teknik pernapasan mindfulness yang diajarkan langsung bisa saya praktikkan waktu panik wawancara kerja.”
            </p>
<span className="text-label-sm font-label-sm text-outline block">Konsultasi 1 minggu lalu • Mindfulness</span>
</div>
</div>
<button className="w-full py-2 text-center text-primary font-label-md text-label-md hover:underline flex items-center justify-center gap-1" type="button">
          Lihat 18 Apresiasi Lainnya
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</section>
{/* Jadwal Praktik Mendatang (Preview) */}
<section className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/50 space-y-3 mb-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Jadwal Terdekat Tersedia</h2>
</div>
<span className="font-label-sm text-label-sm text-primary font-medium">Hari Ini &amp; Besok</span>
</div>
<div className="grid grid-cols-3 gap-2 pt-1">
<button className="p-2.5 rounded-lg border border-primary bg-secondary-container/50 text-center transition-colors active:scale-95" type="button">
<span className="block font-label-sm text-label-sm text-on-surface-variant">Hari ini</span>
<span className="block font-label-lg font-semibold text-primary mt-0.5">19:00 WIB</span>
</button>
<button className="p-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-center hover:bg-surface-container transition-colors active:scale-95" type="button">
<span className="block font-label-sm text-label-sm text-on-surface-variant">Besok</span>
<span className="block font-label-lg font-semibold text-on-surface mt-0.5">14:00 WIB</span>
</button>
<button className="p-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-center hover:bg-surface-container transition-colors active:scale-95" type="button">
<span className="block font-label-sm text-label-sm text-on-surface-variant">Besok</span>
<span className="block font-label-lg font-semibold text-on-surface mt-0.5">16:30 WIB</span>
</button>
</div>
</section>
    </div>
  );
}