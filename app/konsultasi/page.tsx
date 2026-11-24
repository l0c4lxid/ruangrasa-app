import Link from "next/link";

export default function KonsultasiPage() {
  const psychologists = [
    {
      id: "nadia-larasati",
      name: "Nadia Larasati, M.Psi., Psikolog",
      title: "Psikolog Klinis Dewasa",
      experience: "6+ Th Pengalaman",
      sipp: "SIPPK Terverifikasi: 2024-0812-DEMO-JKT",
      rating: "4.95",
      reviews: "90+ Sesi",
      specialties: ["Stres Akademik", "Kecemasan", "Regulasi Emosi"],
      price: "Rp 150.000",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-KS4Iqk5cU1bv-5V2rzVqY8Aluv0cURxHTHTrn_oeF-iORigkN6ereuUX52wX9vjwsFar4nasygsMQu-TI-f1v7DOgxwU3rRYCT0lAP_nlQGWZZgBqOhcc8GlTca4RK6H_v-09meot57PmAzJaR7RDCaIeO7mu5Qh3K8rZLXoOBlJUsq5jLez2lnR9S2uTjRXOboo418nphsnUIiy3jksX_1C2R2PuEE3TZEJSZPJ10HbKX6sm6uz",
    },
    {
      id: "dimas-wicaksono",
      name: "Dimas Wicaksono, S.Psi., M.A.",
      title: "Konselor Hubungan & Akademik",
      experience: "5+ Th Pengalaman",
      sipp: "HIMPSI Terverifikasi: 2023-0145-DEMO-BDG",
      rating: "4.90",
      reviews: "75+ Sesi",
      specialties: ["Manajemen Emosi", "Relasi Interpersonal", "Quarter-Life"],
      price: "Rp 120.000",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC6mfh7tQAcdhKLSKpPxmRW-a8hkWB0QWRhOq7CNtcReNF6eTYZYRHfHfdVoXUKtnkEtlYPqv5izycfUEsnajalOywigIzDcZq06nQAzsAYkCCllGhNwjQ7pv1DCbpjwVQ1lczrti9UXWc8EydtlcKT8_rsctt6zu19f2eFXbuHedDQyj6lDXK24pNZfR3-kXV3uKCl72A-bp3tvygXHF1_CHXYNnUSJYhjjoLyQN--d_GpW7GVJcJx",
    },
  ];

  return (
    <>
      {/* Top App Bar with Modern Glass Header */}
      <header className="sticky top-0 z-40 glass-header flex justify-between items-center w-full px-5 py-3.5">
        <div className="flex items-center gap-3">
          <Link
            href="/home"
            aria-label="Kembali ke Beranda"
            className="w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-surface-container active:scale-95 transition-all focus:outline-none"
          >
            <span className="material-symbols-outlined text-[22px]">arrow_back</span>
          </Link>
          <h1 className="text-headline-sm font-headline-sm text-primary tracking-tight font-semibold">
            Konsultasi Profesional
          </h1>
        </div>
        <Link
          href="/konsultasi/saya"
          aria-label="Konsultasi Saya"
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all focus:outline-none"
          title="Sesi Saya"
        >
          <span className="material-symbols-outlined text-[22px]">calendar_month</span>
        </Link>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 px-5 pt-3 pb-24 flex flex-col gap-4">
        {/* Verification Status Banner with Modern Glass Card */}
        <section className="glass-card rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-xs">
          <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
          <p className="text-label-sm font-medium text-on-surface-variant">
            Seluruh psikolog mitra berlisensi resmi SIPPK | HIMPSI
          </p>
        </section>

        {/* Search Input Section */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]" data-icon="search">
              search
            </span>
          </div>
          <input
            className="w-full h-[50px] pl-10 pr-4 glass-input rounded-xl text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:bg-white transition-all shadow-xs"
            placeholder="Cari nama atau topik keahlian..."
            type="text"
          />
        </div>

        {/* Filter Chips Horizontal Scroll */}
        <section className="w-full -mx-5 px-5 overflow-x-auto no-scrollbar flex items-center gap-2 py-1">
          <button className="shrink-0 h-[36px] px-4 rounded-full bg-primary text-white flex items-center gap-1.5 active:scale-95 transition-all text-label-md font-label-md font-semibold shadow-xs">
            <span className="material-symbols-outlined text-[16px]">check</span>
            <span>Semua Keahlian</span>
          </button>
          <button className="shrink-0 h-[36px] px-3.5 rounded-full glass-pill text-on-surface-variant hover:bg-white flex items-center active:scale-95 transition-all text-label-md font-label-md shadow-xs">
            <span>Stres Akademik</span>
          </button>
          <button className="shrink-0 h-[36px] px-3.5 rounded-full glass-pill text-on-surface-variant hover:bg-white flex items-center active:scale-95 transition-all text-label-md font-label-md shadow-xs">
            <span>Kecemasan</span>
          </button>
          <button className="shrink-0 h-[36px] px-3.5 rounded-full glass-pill text-on-surface-variant hover:bg-white flex items-center active:scale-95 transition-all text-label-md font-label-md shadow-xs">
            <span>Manajemen Emosi</span>
          </button>
        </section>

        {/* Section Title & Counter */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-label-md font-label-md text-on-surface-variant font-medium">
            Mitra Konselor Tersedia
          </span>
          <span className="text-label-sm font-label-sm px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
            {psychologists.length} Psikolog
          </span>
        </div>

        {/* Professional Cards Stack */}
        <div className="flex flex-col gap-4">
          {psychologists.map((psych) => (
            <article
              key={psych.id}
              className="glass-card rounded-[22px] p-4.5 border border-white/80 shadow-xs flex flex-col gap-3.5 transition-all hover:border-primary/40"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-surface-container relative ring-2 ring-white/80">
                  <img
                    className="w-full h-full object-cover"
                    src={psych.avatar}
                    alt={psych.name}
                    width={64}
                    height={64}
                  />
                  <div
                    className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-0.5 shadow-xs flex items-center justify-center"
                    title="Terverifikasi"
                  >
                    <span
                      className="material-symbols-outlined text-[13px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check
                    </span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-label-sm font-label-sm px-2.5 py-0.5 rounded-full font-medium border border-primary/20">
                      <span className="material-symbols-outlined text-[13px] text-primary">
                        check_circle
                      </span>
                      SIPP Terverifikasi
                    </span>
                  </div>
                  <h2 className="text-headline-sm font-headline-sm text-on-surface mt-1 truncate font-semibold">
                    {psych.name}
                  </h2>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    {psych.title}
                  </p>
                  <p className="text-label-sm font-label-sm text-outline mt-0.5">
                    {psych.sipp}
                  </p>
                </div>
              </div>

              {/* Specialties Tags */}
              <div className="flex flex-wrap gap-1.5">
                {psych.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="px-2.5 py-1 rounded-lg bg-surface-container/70 text-on-surface-variant font-label-sm text-label-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Price and CTA */}
              <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between">
                <div>
                  <span className="text-label-sm font-label-sm text-on-surface-variant block">
                    Biaya Sesi (50 mnt)
                  </span>
                  <span className="text-headline-sm font-headline-sm text-primary font-bold">
                    {psych.price}
                  </span>
                </div>
                <Link
                  href={`/konsultasi/${psych.id}`}
                  className="min-h-[44px] px-4 py-2.5 rounded-xl bg-primary hover:bg-[#1B5E43] text-white font-label-md text-label-md font-semibold active:scale-95 transition-all shadow-xs flex items-center gap-1"
                >
                  Lihat Profil
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
