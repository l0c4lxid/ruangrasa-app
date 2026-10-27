export default function WelcomeOnboardingPage() {
  return (
    <>
      {/* Top Header & Brand Anchor */}
      <header className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-[14px] bg-secondary-container flex items-center justify-center text-primary-container shadow-sm">
            <span className="material-symbols-outlined text-[26px]" style={{ fontVariationProperties: "'FILL' 1" }}>spa</span>
          </div>
          <div>
            <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight font-bold">RuangRasa</span>
            <span className="block font-label-sm text-label-sm text-outline tracking-wider">RUANG NYAMAN &amp; TEDUH</span>
          </div>
        </div>
        <div className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container rounded-full text-secondary">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span className="font-label-sm text-label-sm font-medium">Teman Aman</span>
        </div>
      </header>
      {/* Warm Organic Visual Banner with Bento Hero */}
      <section className="w-full mb-5">
        <div className="relative w-full rounded-[22px] overflow-hidden bg-surface-container-lowest gentle-border ambient-glow p-4">
          {/* Visual Atmosphere Graphic */}
          <div className="relative w-full h-44 rounded-[16px] overflow-hidden mb-4">
            <img className="w-full h-full object-cover" data-alt="A comforting and serene digital art illustration depicting a sheltered botanical sanctuary with soft organic curves, muted sage green foliage, warm terracotta clay accents, and gentle warm sunlight cascading softly. The aesthetic is clean, minimalist, and non-clinical, tailored for emotional healing and emotional peace with a tranquil, light mode ambiance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTk71Nlz4hjzI4GLLeq0_FPB6wlR2wUS-7XOaFVql6IIUg8Z2tTvhviuMDRJuF2mRMMydd44nqvSXeI1pdWHWJzwbFj0tmnB_UKKXbi7IsCipcr07PBg_J-kjpf_bL8nJ1d6WCtKk9IsAXZ1hhEXrDP7cLc46xz6GRwTBdkwLs0sp42jVy1cr8Eta99kPd9FmLCfPayLyHCw3StoxKLUttAaBQuwppXMP8Bk-AhylMa_EFTqHtkFPb" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111e17]/40 via-transparent to-transparent flex items-end p-3">
              <span className="font-label-md text-label-md text-surface-container-lowest bg-[#17251D]/60 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]" style={{ fontVariationProperties: "'FILL' 1" }}>favorite</span>
                Kamu tidak sendiri di sini
              </span>
            </div>
          </div>
          {/* Headline & Tagline */}
          <div className="space-y-1.5 text-left">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-semibold tracking-tight">
              Ruang aman untuk bercerita dan mencari dukungan.
            </h1>
            <p className="font-body-md text-body-md text-outline leading-relaxed">
              Tempat mendengar tanpa menghakimi bagi mahasiswa dan dewasa muda Indonesia.
            </p>
          </div>
        </div>
      </section>
      {/* Bento Value Propositions Grid */}
      <section className="w-full mb-6 space-y-2.5">
        {/* Value Proposition 1: Curhat Anonim */}
        <article className="p-3.5 rounded-[16px] bg-surface-container-lowest gentle-border ambient-glow flex items-start gap-3.5 transition-all hover:bg-surface-container-low">
          <div className="w-10 h-10 rounded-[12px] bg-secondary-container/60 text-primary-container flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[22px]">visibility_off</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h2 className="font-label-lg text-label-lg font-semibold text-on-surface">Curhat Anonim</h2>
              <span className="font-label-sm text-label-sm text-primary font-medium px-2 py-0.5 bg-surface-container rounded-full">100% Rahasia</span>
            </div>
            <p className="font-body-sm text-body-sm text-outline mt-0.5 leading-snug">
              Ceritakan isi hatimu tanpa khawatir identitas terbuka.
            </p>
          </div>
        </article>
        {/* Value Proposition 2: Komunitas Suportif */}
        <article className="p-3.5 rounded-[16px] bg-surface-container-lowest gentle-border ambient-glow flex items-start gap-3.5 transition-all hover:bg-surface-container-low">
          <div className="w-10 h-10 rounded-[12px] bg-surface-container text-secondary flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[22px]">groups</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h2 className="font-label-lg text-label-lg font-semibold text-on-surface">Komunitas Suportif</h2>
              <span className="font-label-sm text-label-sm text-secondary font-medium px-2 py-0.5 bg-surface-container rounded-full">Teman Sebaya</span>
            </div>
            <p className="font-body-sm text-body-sm text-outline mt-0.5 leading-snug">
              Saling menguatkan bersama teman sebaya dalam ruang diskusi teduh.
            </p>
          </div>
        </article>
        {/* Value Proposition 3: Konseling Terverifikasi */}
        <article className="p-3.5 rounded-[16px] bg-surface-container-lowest gentle-border ambient-glow flex items-start gap-3.5 transition-all hover:bg-surface-container-low">
          <div className="w-10 h-10 rounded-[12px] bg-tertiary-fixed text-tertiary flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationProperties: "'FILL' 1" }}>psychology</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h2 className="font-label-lg text-label-lg font-semibold text-on-surface">Konseling Terverifikasi</h2>
              <span className="font-label-sm text-label-sm text-tertiary font-medium px-2 py-0.5 bg-[#FFF2ED] rounded-full">SIPP Aktif</span>
            </div>
            <p className="font-body-sm text-body-sm text-outline mt-0.5 leading-snug">
              Terhubung dengan psikolog dan konselor profesional berlisensi.
            </p>
          </div>
        </article>
      </section>
      {/* Bottom Action Area */}
      <footer className="w-full space-y-3 pt-1">
        {/* Primary Action CTA */}
        <button className="w-full h-[50px] bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold rounded-[14px] shadow-sm hover:bg-primary active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="button">
          <span>Daftar Sekarang</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
        {/* Secondary Outlined CTA */}
        <button className="w-full h-[48px] bg-surface-container-lowest gentle-border text-primary-container font-label-lg text-label-lg font-semibold rounded-[14px] hover:bg-surface-container-low active:scale-[0.98] transition-all flex items-center justify-center" type="button">
          <span>Masuk ke Akun</span>
        </button>
        {/* Microcopy & Safety Notice */}
        <div className="pt-2 text-center">
          <p className="font-label-sm text-label-sm text-outline leading-tight">
            Bukan pengganti layanan darurat atau diagnosis medis.
          </p>
          <div className="mt-1 flex items-center justify-center gap-1 text-tertiary hover:underline cursor-pointer">
            <span className="material-symbols-outlined text-[14px]">call</span>
            <span className="font-label-sm text-label-sm font-semibold">Butuh bantuan darurgent segera? Hotline 119</span>
          </div>
        </div>
      </footer>
    </>
  );
}
