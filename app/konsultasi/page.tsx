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
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md flex justify-between items-center w-full px-5 py-3.5 shadow-sm border-b border-outline-variant/20">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            aria-label="Kembali ke Beranda"
            className="w-9 h-9 rounded-full flex items-center justify-center text-primary hover:bg-surface-container active:scale-95 transition-all focus:outline-none"
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
          className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all focus:outline-none"
          title="Sesi Saya"
        >
          <span className="material-symbols-outlined text-[22px]">calendar_month</span>
        </Link>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 px-5 pt-3 pb-24 flex flex-col gap-4">
        {/* Ethical Compliance Disclaimer Banner */}
        <section className="bg-surface-container-low rounded-xl p-3.5 border border-outline-variant/40 flex items-start gap-2.5">
          <span
            className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
            data-icon="verified_user"
          >
            verified_user
          </span>
          <p className="text-label-sm font-label-sm text-on-surface-variant leading-relaxed">
            Seluruh psikolog dan konselor mitra terverifikasi SIPPK/HIMPSI. Data bertanda{" "}
            <span className="font-semibold text-primary">(Contoh Demo)</span> untuk evaluasi prototipe.
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
            className="w-full h-[50px] pl-10 pr-4 bg-surface-container rounded-xl border border-outline-variant text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:bg-surface-container-lowest focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all shadow-sm"
            placeholder="Cari nama atau spesialisasi..."
            type="text"
          />
        </div>

        {/* Filter Chips Horizontal Scroll */}
        <section className="w-full -mx-5 px-5 overflow-x-auto no-scrollbar flex items-center gap-2 py-1">
          <button className="shrink-0 h-[36px] px-3.5 rounded-full bg-secondary-container border border-primary text-primary flex items-center gap-1.5 active:scale-95 transition-all text-label-md font-label-md font-semibold shadow-xs">
            <span className="material-symbols-outlined text-[16px]" data-icon="check">
              check
            </span>
            <span>Semua Spesialisasi</span>
          </button>
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
          <span className="text-label-md font-label-md text-on-surface-variant font-medium">
            Menampilkan mitra aktif
          </span>
          <span className="text-label-sm font-label-sm px-2 py-0.5 rounded-full bg-surface-container text-primary font-semibold">
            {psychologists.length} Tersedia
          </span>
        </div>

        {/* Professional Cards Stack */}
        <div className="flex flex-col gap-4">
          {psychologists.map((psych) => (
            <article
              key={psych.id}
              className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/60 shadow-[0_2px_8px_-2px_rgba(23,37,29,0.04)] flex flex-col gap-3.5 transition-all hover:shadow-[0_4px_16px_-4px_rgba(23,37,29,0.06)]"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-surface-container relative">
                  <img
                    className="w-full h-full object-cover"
                    src={psych.avatar}
                    alt={psych.name}
                  />
                  <div
                    className="absolute -bottom-1 -right-1 bg-primary text-on-primary rounded-full p-0.5 shadow-sm flex items-center justify-center"
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
                    <span className="inline-flex items-center gap-1 bg-secondary-container/70 text-primary text-label-sm font-label-sm px-2 py-0.5 rounded-full font-medium">
                      <span className="material-symbols-outlined text-[13px] text-primary">
                        check_circle
                      </span>
                      Terverifikasi Demo
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
                    className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Price and CTA */}
              <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between">
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
                  className="px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-medium active:scale-95 transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span>Lihat Profil</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}