export default function Page() {
  return (
    <div>

<section className="bg-surface-container-low rounded-xl p-3.5 border border-outline-variant/40 flex items-start gap-2.5">
<span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5" data-icon="verified_user">verified_user</span>
<p className="text-label-sm font-label-sm text-on-surface-variant leading-relaxed">
          Seluruh psikolog dan konselor mitra terverifikasi SIPPK/HIMPSI. Data bertanda <span className="font-semibold text-primary">(Contoh Demo)</span> untuk evaluasi prototipe.
        </p>
</section>
{/* Search Input Section */}
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]" data-icon="search">search</span>
</div>
<input className="w-full h-[50px] pl-10 pr-4 bg-surface-container rounded-xl border border-outline-variant text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:bg-surface-container-lowest focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" placeholder="Cari nama atau spesialisasi..." type="text"/>
</div>
{/* Filter Chips Horizontal Scroll */}
<section className="w-full -mx-margin px-margin overflow-x-auto no-scrollbar flex items-center gap-2 py-1">
{/* Chip Active */}
<button className="shrink-0 h-[36px] px-3.5 rounded-full bg-secondary-container border border-primary text-primary flex items-center gap-1.5 active:scale-95 transition-all text-label-md font-label-md">
<span className="material-symbols-outlined text-[16px]" data-icon="check">check</span>
<span>Semua Spesialisasi</span>
</button>
{/* Inactive Chips */}
<button className="shrink-0 h-[36px] px-3.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant flex items-center active:scale-95 transition-all hover:bg-surface-container text-label-md font-label-md">
<span>Stres Akademik</span>
</button>
<button className="shrink-0 h-[36px] px-3.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant flex items-center active:scale-95 transition-all hover:bg-surface-container text-label-md font-label-md">
<span>Kecemasan</span>
</button>
<button className="shrink-0 h-[36px] px-3.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant flex items-center active:scale-95 transition-all hover:bg-surface-container text-label-md font-label-md">
<span>Manajemen Emosi</span>
</button>
<button className="shrink-0 h-[36px] px-3.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant flex items-center active:scale-95 transition-all hover:bg-surface-container text-label-md font-label-md">
<span>Relasi Interpersonal</span>
</button>
</section>
{/* Section Title & Counter */}
<div className="flex items-center justify-between pt-1">
<span className="text-label-md font-label-md text-on-surface-variant font-medium">Menampilkan mitra aktif</span>
<span className="text-label-sm font-label-sm px-2 py-0.5 rounded-full bg-surface-container text-primary font-semibold">2 Tersedia</span>
</div>
{/* Professional Cards Stack */}
<div className="flex flex-col gap-4">
{/* CARD 1: Nadia Larasati */}
<article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 shadow-[0_2px_8px_-2px_rgba(23,37,29,0.04)] flex flex-col gap-3.5 transition-all hover:shadow-[0_4px_16px_-4px_rgba(23,37,29,0.06)]">
<div className="flex items-start gap-3.5">
{/* Avatar */}
<div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-surface-container relative">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-KS4Iqk5cU1bv-5V2rzVqY8Aluv0cURxHTHTrn_oeF-iORigkN6ereuUX52wX9vjwsFar4nasygsMQu-TI-f1v7DOgxwU3rRYCT0lAP_nlQGWZZgBqOhcc8GlTca4RK6H_v-09meot57PmAzJaR7RDCaIeO7mu5Qh3K8rZLXoOBlJUsq5jLez2lnR9S2uTjRXOboo418nphsnUIiy3jksX_1C2R2PuEE3TZEJSZPJ10HbKX6sm6uz" data-alt="A warm, professional Indonesian female clinical psychologist in her early thirties smiling calmly against a serene sage green office backdrop. Soft natural window illumination creates a gentle, trusting atmosphere with authentic warm undertones. Her attire is tasteful and modern, evoking emotional safety and therapeutic empathy in a crisp minimalist portrait." alt="A warm, professional Indonesian female clinical psychologist in her early thirties smiling calmly against a serene sage green office backdrop. Soft natural window illumination creates a gentle, trusting atmosphere with authentic warm undertones. Her attire is tasteful and modern, evoking emotional safety and therapeutic empathy in a crisp minimalist portrait." />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="inline-flex items-center gap-1 bg-secondary-container/70 text-primary text-label-sm font-label-sm px-2 py-0.5 rounded-full font-medium">
<span className="material-symbols-outlined text-[13px] text-primary" data-icon="check_circle">check_circle</span>
                  Terverifikasi Demo
                </span>
</div>
<h2 className="text-headline-sm font-headline-sm text-on-surface mt-1 truncate font-semibold">Nadia Larasati, M.Psi., Psikolog</h2>
<p className="text-body-sm font-body-sm text-on-surface-variant line-clamp-1 mt-0.5">
                Stres Akademik &amp; Burnout Dewasa Muda • Pengalaman 5+ tahun
              </p>
</div>
</div>
{/* Approach / Pendekatan */}
<div className="bg-surface-container-low rounded-xl px-3 py-2 flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5" data-icon="psychology">psychology</span>
<div className="text-label-sm font-label-sm text-on-surface-variant">
<span className="font-medium text-on-surface">Pendekatan:</span> Cognitive Behavioral Therapy (CBT), Mindfulness
            </div>
</div>
{/* Sesi Detail Grid */}
<div className="grid grid-cols-2 gap-2 text-label-sm font-label-sm text-on-surface-variant">
<div className="flex items-center gap-1.5 bg-surface-container/50 px-2.5 py-1.5 rounded-lg">
<span className="material-symbols-outlined text-[16px] text-primary" data-icon="schedule">schedule</span>
<span>Durasi 50 Menit</span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container/50 px-2.5 py-1.5 rounded-lg">
<span className="material-symbols-outlined text-[16px] text-primary" data-icon="videocam">videocam</span>
<span>Video Call / Chat</span>
</div>
</div>
{/* Slot Terdekat Highlight */}
<div className="flex items-center justify-between px-1 text-label-md font-label-md">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-tertiary-container" data-icon="event_available">event_available</span>
              Slot Terdekat:
            </span>
<span className="text-primary font-semibold">Besok, 14:00 WIB</span>
</div>
{/* Divider */}
<div className="h-[1px] w-full bg-outline-variant/40"></div>
{/* Price & Action */}
<div className="flex items-center justify-between gap-3 pt-0.5">
<div className="flex flex-col">
<span className="text-label-sm font-label-sm text-on-surface-variant">Biaya Sesi</span>
<span className="text-body-md font-body-md text-on-surface font-semibold">Rp 150.000</span>
<span className="text-[10px] text-tertiary font-medium -mt-0.5">(Tarif Mahasiswa Terjangkau - Demo)</span>
</div>
<button className="h-[46px] px-5 bg-primary-container hover:bg-primary text-on-primary rounded-xl text-label-lg font-label-lg font-medium flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm focus:outline-none">
<span>Pilih Jadwal</span>
<span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</article>
{/* CARD 2: Dimas Wicaksono */}
<article className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 shadow-[0_2px_8px_-2px_rgba(23,37,29,0.04)] flex flex-col gap-3.5 transition-all hover:shadow-[0_4px_16px_-4px_rgba(23,37,29,0.06)]">
<div className="flex items-start gap-3.5">
{/* Avatar */}
<div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-surface-container relative">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgx_qap_bryxgYY2vJPDJF3CP2vRLIXxuX5nI_1qjM1Jdj0sxDpEdb0xkWBozTnhjYygdqxQHc4RJPBsWRxZ17NZYksld-Bw8BkpCAdsXu2rD9gWh5gbowyMlsxlJkhnJP_9GIYYLZ91XYj1atZEsvp9fFb_MaaF_5UW9wMV60ZAZr1p0hEp0HaTm5MkgqmiMvo0pDOFpibNZDdK4Iu8_EOqiXwokZihNLhwbu7jiV48--oQNbY4Im" data-alt="A thoughtful Indonesian male mental health counselor in smart casual attire sitting attentively in a softly illuminated, comfortable therapy space. Clean botanical green indoor plants in soft focus behind him create a calm and grounded ambiance. Warm daylight softly highlights his welcoming expression with authentic approachable demeanor." alt="A thoughtful Indonesian male mental health counselor in smart casual attire sitting attentively in a softly illuminated, comfortable therapy space. Clean botanical green indoor plants in soft focus behind him create a calm and grounded ambiance. Warm daylight softly highlights his welcoming expression with authentic approachable demeanor." />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="inline-flex items-center gap-1 bg-secondary-container/70 text-primary text-label-sm font-label-sm px-2 py-0.5 rounded-full font-medium">
<span className="material-symbols-outlined text-[13px] text-primary" data-icon="check_circle">check_circle</span>
                  Terverifikasi Demo
                </span>
</div>
<h2 className="text-headline-sm font-headline-sm text-on-surface mt-1 truncate font-semibold">Dimas Wicaksono, S.Psi., M.A.</h2>
<p className="text-body-sm font-body-sm text-on-surface-variant line-clamp-1 mt-0.5">
                Krisis Karir, Identitas Diri &amp; Quarter-life Crisis
              </p>
</div>
</div>
{/* Approach / Pendekatan */}
<div className="bg-surface-container-low rounded-xl px-3 py-2 flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5" data-icon="psychology">psychology</span>
<div className="text-label-sm font-label-sm text-on-surface-variant">
<span className="font-medium text-on-surface">Pendekatan:</span> Humanistic Person-Centered &amp; Solution-Focused Brief Therapy
            </div>
</div>
{/* Sesi Detail Grid */}
<div className="grid grid-cols-2 gap-2 text-label-sm font-label-sm text-on-surface-variant">
<div className="flex items-center gap-1.5 bg-surface-container/50 px-2.5 py-1.5 rounded-lg">
<span className="material-symbols-outlined text-[16px] text-primary" data-icon="schedule">schedule</span>
<span>Durasi 50 Menit</span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container/50 px-2.5 py-1.5 rounded-lg">
<span className="material-symbols-outlined text-[16px] text-primary" data-icon="videocam">videocam</span>
<span>Video Call / Chat</span>
</div>
</div>
{/* Slot Terdekat Highlight */}
<div className="flex items-center justify-between px-1 text-label-md font-label-md">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-tertiary-container" data-icon="event_available">event_available</span>
              Slot Terdekat:
            </span>
<span className="text-primary font-semibold">Rabu, 10:00 WIB</span>
</div>
{/* Divider */}
<div className="h-[1px] w-full bg-outline-variant/40"></div>
{/* Price & Action */}
<div className="flex items-center justify-between gap-3 pt-0.5">
<div className="flex flex-col">
<span className="text-label-sm font-label-sm text-on-surface-variant">Biaya Sesi</span>
<span className="text-body-md font-body-md text-on-surface font-semibold">Rp 150.000</span>
<span className="text-[10px] text-tertiary font-medium -mt-0.5">(Tarif Mahasiswa Terjangkau - Demo)</span>
</div>
<button className="h-[46px] px-5 bg-primary-container hover:bg-primary text-on-primary rounded-xl text-label-lg font-label-lg font-medium flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm focus:outline-none">
<span>Pilih Jadwal</span>
<span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</article>
</div>
{/* Quick Peer Care / Supportive Note */}
<div className="bg-surface-container/40 rounded-xl p-3.5 text-center mt-1 mb-2">
<p className="text-label-sm font-label-sm text-on-surface-variant">
          Perlu pendampingan segera di luar jadwal? <br />
          Gunakan fitur <span className="font-semibold text-primary">Curhat Teman Sebaya</span> kapan pun kamu butuhkan.
        </p>
</div>
    </div>
  );
}