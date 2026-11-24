import Link from "next/link";

export default function WelcomeLandingPage() {
  return (
    <div className="px-5 py-6 flex-1 flex flex-col justify-between min-h-screen">
      <div>
        {/* Top Header & Brand Anchor */}
        <header className="w-full flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                spa
              </span>
            </div>
            <div>
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight font-bold">
                RuangTeduh
              </span>
              <span className="block font-label-sm text-label-sm text-outline tracking-wider">
                RUANG NYAMAN &amp; TEDUH
              </span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/70 backdrop-blur-md rounded-full text-secondary border border-white/60 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="font-label-sm text-label-sm font-medium">Teman Aman</span>
          </div>
        </header>

        {/* Hero Banner with Modern Glass Styling */}
        <section className="w-full mb-5">
          <div className="relative w-full rounded-[24px] overflow-hidden glass-card p-4">
            {/* Visual Atmosphere Graphic */}
            <div className="relative w-full h-44 rounded-[18px] overflow-hidden mb-4 shadow-xs">
              <img
                className="w-full h-full object-cover"
                alt="Tempat berlindung botani teduh dengan dedaunan hijau sage untuk ketenangan emosional"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTk71Nlz4hjzI4GLLeq0_FPB6wlR2wUS-7XOaFVql6IIUg8Z2tTvhviuMDRJuF2mRMMydd44nqvSXeI1pdWHWJzwbFj0tmnB_UKKXbi7IsCipcr07PBg_J-kjpf_bL8nJ1d6WCtKk9IsAXZ1hhEXrDP7cLc46xz6GRwTBdkwLs0sp42jVy1cr8Eta99kPd9FmLCfPayLyHCw3StoxKLUttAaBQuwppXMP8Bk-AhylMa_EFTqHtkFPb"
                width={360}
                height={176}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111e17]/60 via-transparent to-transparent flex items-end p-3">
                <span className="font-label-md text-label-md text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                  <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    favorite
                  </span>
                  Kamu tidak sendirian di sini
                </span>
              </div>
            </div>

            {/* Headline & Tagline */}
            <div className="space-y-1.5 text-left">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-semibold tracking-tight">
                Ruang aman untuk bercerita dan mencari dukungan.
              </h1>
              <p className="font-body-md text-body-md text-outline leading-relaxed">
                Tempat mendengar tanpa penghakiman bagi mahasiswa dan dewasa muda Indonesia.
              </p>
            </div>
          </div>
        </section>

        {/* Three Pillars with Varied Rhythm (Not Copy-Paste AI Cards) */}
        <section className="w-full mb-6 space-y-3">
          {/* Flagship: Curhat Anonim */}
          <article className="p-4 rounded-[20px] bg-gradient-to-br from-white/95 to-secondary-container/40 backdrop-blur-md border border-white/80 shadow-xs flex items-start gap-3.5 transition-all hover:border-primary/30">
            <div className="w-11 h-11 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[22px]">visibility_off</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h2 className="font-label-lg text-label-lg font-semibold text-on-surface">Curhat Bebas Nama</h2>
                <span className="font-label-sm text-label-sm text-primary font-medium px-2.5 py-0.5 bg-primary/10 rounded-full border border-primary/20">
                  Pseudonim
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-outline mt-1 leading-snug">
                Tuangkan perasaanmu secara anonim dengan kode pseudonim unik dan terjaga.
              </p>
            </div>
          </article>

          {/* Secondary Pillars: Asymmetric Duo */}
          <div className="grid grid-cols-2 gap-2.5">
            <article className="p-3.5 rounded-[18px] glass-card flex flex-col justify-between transition-all hover:border-primary/30">
              <div>
                <div className="w-9 h-9 rounded-xl bg-secondary-container/70 text-secondary flex items-center justify-center mb-2.5">
                  <span className="material-symbols-outlined text-[20px]">groups</span>
                </div>
                <h2 className="font-label-md text-label-md font-semibold text-on-surface leading-tight">Lingkar Sebaya</h2>
                <p className="font-body-sm text-body-sm text-outline mt-1 leading-snug text-xs">
                  Diskusi tematik seputar skripsi dan karir.
                </p>
              </div>
            </article>

            <article className="p-3.5 rounded-[18px] glass-card flex flex-col justify-between transition-all hover:border-primary/30">
              <div>
                <div className="w-9 h-9 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center mb-2.5">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    psychology
                  </span>
                </div>
                <h2 className="font-label-md text-label-md font-semibold text-on-surface leading-tight">Psikolog SIPP</h2>
                <p className="font-body-sm text-body-sm text-outline mt-1 leading-snug text-xs">
                  Sesi konseling profesional berlisensi resmi.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>

      {/* Bottom Action Area with Refined Modern Glass */}
      <footer className="w-full space-y-2.5 pt-2 pb-2">
        {/* Primary Action CTA */}
        <Link
          href="/auth/register"
          className="w-full min-h-[48px] bg-primary text-white font-label-lg text-label-lg font-semibold rounded-2xl shadow-sm hover:bg-[#1B5E43] active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span>Daftar Akun</span>
        </Link>

        {/* Secondary Outlined CTA with Glass Touch */}
        <Link
          href="/auth/login"
          className="w-full min-h-[48px] bg-white/80 backdrop-blur-md border border-outline-variant/60 text-primary font-label-lg text-label-lg font-semibold rounded-2xl hover:bg-white active:scale-[0.98] transition-all flex items-center justify-center shadow-xs"
        >
          <span>Masuk ke Akun</span>
        </Link>

        {/* Guest Mode Access */}
        <Link
          href="/home?guest=true"
          className="w-full min-h-[44px] bg-secondary-container/50 hover:bg-secondary-container text-primary font-label-md text-label-md font-semibold rounded-2xl border border-secondary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">visibility_off</span>
          <span>Masuk sebagai Tamu Anonim</span>
        </Link>

        {/* Demo AI Chat Assistant CTA */}
        <Link
          href="/chat-ai"
          className="w-full min-h-[44px] glass-pill text-primary font-label-md text-label-md font-semibold rounded-2xl hover:bg-white active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xs"
        >
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            smart_toy
          </span>
          <span>Tanya Asisten Teduh (Demo Chat &amp; Kontak)</span>
        </Link>

        {/* Microcopy & Safety Notice */}
        <div className="pt-2 text-center">
          <p className="font-label-sm text-label-sm text-outline leading-tight">
            Bukan pengganti layanan darurat atau diagnosis medis.
          </p>
          <a
            href="tel:119"
            className="mt-1 inline-flex items-center justify-center gap-1 text-tertiary hover:underline cursor-pointer min-h-[44px] py-1"
          >
            <span className="material-symbols-outlined text-[14px]">call</span>
            <span className="font-label-sm text-label-sm font-semibold">
              Butuh bantuan darurat? Hubungi Hotline 119 ext 8
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
