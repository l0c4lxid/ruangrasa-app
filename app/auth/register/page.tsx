"use client";
import { useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/onboarding/identity");
  };

  return (
    <div className="px-5 pt-4 pb-10 flex flex-col justify-between min-h-screen relative">
      {/* Subtle Atmospheric Accent Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-secondary-container/30 blur-3xl pointer-events-none -z-10 rounded-full"></div>

      <div>
        {/* Top Back Navigation */}
        <div className="w-full flex items-center justify-between mb-4">
          <Link
            href="/"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant"
            aria-label="Kembali ke halaman awal"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </Link>
          <span className="text-label-sm font-label-sm text-secondary bg-surface-container px-3 py-1 rounded-full">
            Daftar Akun
          </span>
        </div>

        {/* Top Brand & Header Section */}
        <header className="mb-6">
          <div className="flex items-center justify-between mb-4">
            {/* Logo Badge */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-2xl fill" data-icon="spa" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
              </div>
              <span className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-primary tracking-tight">RuangTeduh</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/60 text-secondary font-label-sm text-label-sm">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span>Ruang Aman</span>
            </div>
          </div>
        {/* Welcome Headline */}
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-on-background tracking-tight mb-2">
          Mulai Perjalanan Teduhmu
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Buat akun untuk mengakses ruang curhat anonim dan dukungan teman sebaya.
        </p>
      </header>
      {/* Quick Sign-Up Options (SSO) */}
      <section className="space-y-2.5 mb-6">
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Pendaftaran Cepat Mahasiswa &amp; Mitra</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* SSO Kampus Partner */}
          <button className="flex items-center justify-center gap-2.5 h-12 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant/80 hover:bg-surface-container transition-colors duration-200 active:scale-95 text-left" type="button">
            <span className="material-symbols-outlined text-primary fill" data-icon="school" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            <div className="truncate">
              <span className="font-label-md text-label-md text-on-surface block truncate font-medium">SSO Mahasiswa</span>
              <span className="font-label-md text-label-md text-secondary block -mt-0.5">Kampus Partner</span>
            </div>
          </button>
          {/* Akun Google */}
          <button className="flex items-center justify-center gap-2.5 h-12 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant/80 hover:bg-surface-container transition-colors duration-200 active:scale-95 text-left" type="button">
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z" fill="#4285F4"></path>
              <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.13C3.25 21.37 7.34 24 12 24z" fill="#34A853"></path>
              <path d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.26C.46 8.18 0 9.99 0 12s.46 3.82 1.26 5.42l4.02-3.13z" fill="#FBBC05"></path>
              <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.63 1.26 6.58l4.02 3.13c.95-2.83 3.6-4.96 6.72-4.96z" fill="#EA4335"></path>
            </svg>
            <span className="font-label-md text-label-md text-on-surface font-medium">Akun Google</span>
          </button>
        </div>
      </section>
      {/* Divider */}
      <div className="relative flex items-center mb-6">
        <div className="flex-grow border-t border-outline-variant/60"></div>
        <span className="flex-shrink mx-3 font-label-md text-label-md text-outline bg-background px-2">atau daftar dengan email</span>
        <div className="flex-grow border-t border-outline-variant/60"></div>
      </div>
      {/* Registration Form */}
      <form className="space-y-4" id="registration-form" onSubmit={handleRegister}>
        {/* Field 1: Nama Tampilan Awal */}
        <div className="space-y-1.5">
          <label className="block font-label-lg text-label-lg font-medium text-on-surface" htmlFor="display_name">
            Nama Tampilan Awal <span className="text-tertiary">*</span>
          </label>
          <div className="relative flex items-center">
            <input className="w-full h-[52px] px-4 pl-11 rounded-[14px] bg-surface-container-low border border-outline-variant focus:bg-surface-container-lowest focus:border-2 focus:border-primary-container focus:outline-none text-on-surface placeholder:text-on-surface-variant font-body-md transition-all" id="display_name" placeholder="Contoh: Rian atau AnginTeduh" required type="text" />
            <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant" data-icon="badge">badge</span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5 pt-0.5">
            <span className="material-symbols-outlined text-[15px] text-secondary" data-icon="masks">masks</span>
            <span>Nanti otomatis disamarkan di ruang curhat publik demi privasi penuh.</span>
          </p>
        </div>
        {/* Field 2: Email Kampus atau Pribadi */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="block font-label-lg text-label-lg font-medium text-on-surface" htmlFor="user_email">
              Email Kampus atau Pribadi <span className="text-tertiary">*</span>
            </label>
            <span className="inline-flex items-center gap-1 text-[11px] font-label-sm text-primary font-medium bg-secondary-container/40 px-2 py-0.5 rounded-full">
              <span className="material-symbols-outlined text-[13px]" data-icon="verified">verified</span>
              Verifikasi Instan
            </span>
          </div>
          <div className="relative flex items-center">
            <input className="w-full h-[52px] px-4 pl-11 rounded-[14px] bg-surface-container-low border border-outline-variant focus:bg-surface-container-lowest focus:border-2 focus:border-primary-container focus:outline-none text-on-surface placeholder:text-on-surface-variant font-body-md transition-all" id="user_email" placeholder="nama@kampus.ac.id atau email@gmail.com" required type="email" />
            <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant" data-icon="mail">mail</span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 pt-0.5">
            <span className="material-symbols-outlined text-[15px] text-primary" data-icon="info">info</span>
            <span>Gunakan akhiran <span className="font-semibold text-primary">@kampus.ac.id</span> untuk verifikasi instan mahasiswa &amp; konseling gratis.</span>
          </p>
        </div>
        {/* Field 3: Kata Sandi */}
        <div className="space-y-1.5">
          <label className="block font-label-lg text-label-lg font-medium text-on-surface" htmlFor="password">
            Kata Sandi <span className="text-tertiary">*</span>
          </label>
          <div className="relative flex items-center">
            <input className="w-full h-[52px] px-4 pl-11 pr-12 rounded-[14px] bg-surface-container-low border border-outline-variant focus:bg-surface-container-lowest focus:border-2 focus:border-primary-container focus:outline-none text-on-surface placeholder:text-on-surface-variant font-body-md transition-all" id="password" placeholder="Minimal 8 karakter aman" required type={showPassword ? "text" : "password"} />
            <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant" data-icon="lock">lock</span>
            <button aria-label="Tampilkan atau sembunyikan kata sandi" className="absolute right-3.5 p-1 rounded-lg text-on-surface-variant hover:text-on-surface focus:outline-none transition-colors" id="togglePassword" type="button" onClick={() => setShowPassword((v) => !v)}>
              <span className="material-symbols-outlined" data-icon={showPassword ? "visibility_off" : "visibility"} id="eyeIcon">{showPassword ? "visibility_off" : "visibility"}</span>
            </button>
          </div>
          {/* Password Strength Meter */}
          <div className="pt-1 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Kekuatan Sandi:</span>
              <span className="font-label-sm text-label-sm font-semibold text-secondary" id="strengthText">Cukup Teduh &amp; Kuat</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 h-1.5 w-full">
              <div className="h-full rounded-full bg-primary-container"></div>
              <div className="h-full rounded-full bg-primary-container"></div>
              <div className="h-full rounded-full bg-primary-container"></div>
              <div className="h-full rounded-full bg-outline-variant/60"></div>
            </div>
          </div>
        </div>
        {/* Field 4: Konfirmasi Kata Sandi */}
        <div className="space-y-1.5">
          <label className="block font-label-lg text-label-lg font-medium text-on-surface" htmlFor="confirm_password">
            Konfirmasi Kata Sandi <span className="text-tertiary">*</span>
          </label>
          <div className="relative flex items-center">
            <input className="w-full h-[52px] px-4 pl-11 pr-12 rounded-[14px] bg-surface-container-low border border-outline-variant focus:bg-surface-container-lowest focus:border-2 focus:border-primary-container focus:outline-none text-on-surface placeholder:text-on-surface-variant font-body-md transition-all" id="confirm_password" placeholder="Ulangi kata sandi Anda" required type={showConfirm ? "text" : "password"} />
            <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant" data-icon="lock_reset">lock_reset</span>
            <button aria-label="Tampilkan atau sembunyikan konfirmasi kata sandi" className="absolute right-3.5 p-1 rounded-lg text-on-surface-variant hover:text-on-surface focus:outline-none transition-colors" id="toggleConfirmPassword" type="button" onClick={() => setShowConfirm((v) => !v)}>
              <span className="material-symbols-outlined" data-icon={showConfirm ? "visibility_off" : "visibility"} id="eyeConfirmIcon">{showConfirm ? "visibility_off" : "visibility"}</span>
            </button>
          </div>
        </div>
        {/* Checkbox Terms & Privacy */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center pt-0.5">
              <input className="w-5 h-5 rounded-[6px] border-2 border-outline-variant text-primary-container focus:ring-0 focus:ring-offset-0 transition duration-200 cursor-pointer" id="terms_agree" defaultChecked type="checkbox" />
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant select-none leading-relaxed">
              Saya menyetujui <a className="text-primary font-medium hover:underline" href="#" onClick={(e) => e.preventDefault()}>Syarat &amp; Ketentuan Komunitas</a> serta <a className="text-primary font-medium hover:underline" href="#" onClick={(e) => e.preventDefault()}>Kebijakan Privasi &amp; Perlindungan Data Terenkripsi</a>.
            </span>
          </label>
        </div>
        {/* Submit CTA Button */}
        <div className="pt-3">
          <button className="w-full h-[52px] bg-primary-container hover:bg-[#1b5e43] text-on-primary font-label-lg text-label-lg font-semibold rounded-[14px] shadow-sm flex items-center justify-center gap-2 active:scale-95 transition-all duration-200 group" type="submit">
            <span>Daftar Akun Baru</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
          </button>
        </div>
      </form>
      {/* Sign In Link */}
      <div className="text-center py-5">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Sudah punya akun?
          <Link className="text-primary font-semibold hover:underline decoration-primary-container inline-flex items-center gap-0.5" href="/auth/login">
            Masuk di sini
            <span className="material-symbols-outlined text-[16px]" data-icon="north_east">north_east</span>
          </Link>
        </p>
      </div>
      {/* Security & Encryption Guarantee Card */}
      <footer className="mt-auto pt-2 pb-6">
        <div className="rounded-2xl bg-surface-container border border-outline-variant/60 p-4 flex items-start gap-3.5 shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-secondary-container/70 text-primary flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined fill text-primary" data-icon="lock" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          </div>
          <div className="space-y-0.5">
            <h2 className="font-label-lg text-label-lg font-semibold text-on-surface flex items-center gap-1.5">
              <span>Privasi &amp; Keamanan Berlapis</span>
              <span className="material-symbols-outlined text-[16px] text-primary" data-icon="verified_user">verified_user</span>
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Identitas pribadimu dilindungi enkripsi end-to-end. Curahan hati, catatan emosional, dan sesi konseling tidak pernah dibagikan ke pihak universitas maupun pihak ketiga.
            </p>
          </div>
        </div>
        {/* Warm Empathetic Micro-message */}
        <div className="text-center mt-4">
          <p className="font-label-sm text-label-sm text-secondary italic">
            "Ruang aman untuk bernapas, bercerita, dan kembali pulih."
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}
