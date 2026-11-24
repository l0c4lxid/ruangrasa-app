"use client";

import { useState } from "react";
import Link from "next/link";
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
      {/* Top Back Navigation */}
      <div className="w-full flex items-center justify-between mb-3">
        <Link
          href="/"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant active:scale-95"
          aria-label="Kembali ke beranda"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </Link>
        <span className="text-label-sm font-label-sm text-secondary bg-surface-container px-3 py-1 rounded-full">
          Daftar Akun
        </span>
      </div>

      <div>
        {/* Top Brand Header */}
        <section className="flex flex-col items-center text-center mb-5">
          <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center mb-3 shadow-xs border border-outline-variant/40">
            <span
              className="material-symbols-outlined text-primary text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              spa
            </span>
          </div>
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile font-bold tracking-tight text-primary">
            RuangTeduh
          </h1>
          <p className="text-body-sm text-on-surface-variant mt-0.5">
            Buat akun untuk mulai curhat anonim dan konsultasi.
          </p>
        </section>

        {/* Card Form */}
        <div className="bg-surface-container-lowest rounded-3xl p-5 border border-outline-variant/60 shadow-sm">
          {/* Segmented Control Tabs (Masuk vs Daftar) */}
          <div className="bg-surface-container p-1 rounded-2xl flex items-center mb-5">
            <Link
              href="/auth/login"
              className="flex-1 py-2 rounded-xl text-label-md font-label-md font-medium text-center text-on-surface-variant hover:text-primary transition-all"
            >
              Masuk
            </Link>
            <button
              className="flex-1 py-2 rounded-xl text-label-md font-label-md font-semibold bg-surface-container-lowest text-primary shadow-xs transition-all"
              type="button"
            >
              Daftar
            </button>
          </div>

          {/* Registration Form */}
          <form className="space-y-3.5" onSubmit={handleRegister}>
            {/* Field: Nama */}
            <div>
              <label className="block text-label-md font-medium text-on-surface mb-1" htmlFor="name-input">
                Nama Lengkap / Panggilan
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
                  person
                </span>
                <input
                  id="name-input"
                  required
                  type="text"
                  placeholder="Nama kamu"
                  className="w-full h-[48px] pl-10 pr-4 bg-surface-container-low border border-outline-variant rounded-xl text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-all"
                />
              </div>
            </div>

            {/* Field: Email */}
            <div>
              <label className="block text-label-md font-medium text-on-surface mb-1" htmlFor="email-input">
                Email
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
                  mail
                </span>
                <input
                  id="email-input"
                  required
                  type="email"
                  placeholder="nama@email.com"
                  className="w-full h-[48px] pl-10 pr-4 bg-surface-container-low border border-outline-variant rounded-xl text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-all"
                />
              </div>
            </div>

            {/* Field: Kata Sandi */}
            <div>
              <label className="block text-label-md font-medium text-on-surface mb-1" htmlFor="password-input">
                Kata Sandi
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
                  lock
                </span>
                <input
                  id="password-input"
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimal 8 karakter"
                  className="w-full h-[48px] pl-10 pr-11 bg-surface-container-low border border-outline-variant rounded-xl text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label="Tampilkan atau sembunyikan kata sandi"
                  className="absolute right-3 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            {/* Field: Konfirmasi Kata Sandi */}
            <div>
              <label className="block text-label-md font-medium text-on-surface mb-1" htmlFor="confirm-input">
                Konfirmasi Kata Sandi
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
                  lock_reset
                </span>
                <input
                  id="confirm-input"
                  required
                  type={showConfirm ? "text" : "password"}
                  placeholder="Ulangi kata sandi"
                  className="w-full h-[48px] pl-10 pr-11 bg-surface-container-low border border-outline-variant rounded-xl text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  aria-label="Tampilkan atau sembunyikan konfirmasi kata sandi"
                  className="absolute right-3 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showConfirm ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  required
                  className="mt-1 w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer"
                />
                <span className="text-body-sm text-on-surface-variant leading-snug select-none">
                  Saya menyetujui{" "}
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-primary underline">
                    Syarat &amp; Ketentuan
                  </a>{" "}
                  dan{" "}
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-primary underline">
                    Kebijakan Privasi
                  </a>
                  .
                </span>
              </label>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full h-[48px] mt-2 bg-primary hover:bg-primary/90 text-on-primary font-label-lg font-semibold rounded-xl shadow-xs flex items-center justify-center gap-2 active:scale-[0.99] transition-all"
            >
              <span>Daftar Akun</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-4 flex items-center justify-center">
            <div className="w-full border-t border-outline-variant/40"></div>
            <span className="absolute bg-surface-container-lowest px-3 text-label-sm text-outline">
              atau
            </span>
          </div>

          {/* Google SSO Button */}
          <button
            type="button"
            onClick={() => router.push("/onboarding/identity")}
            className="w-full h-[46px] rounded-xl border border-outline-variant/60 bg-surface-container-lowest hover:bg-surface-container-low flex items-center justify-center gap-2.5 active:scale-[0.99] transition-all text-label-md font-medium text-on-surface"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
                fill="#4285F4"
              />
              <path
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.13C3.25 21.37 7.34 24 12 24z"
                fill="#34A853"
              />
              <path
                d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.26C.46 8.18 0 9.99 0 12s.46 3.82 1.26 5.42l4.02-3.13z"
                fill="#FBBC05"
              />
              <path
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.63 1.26 6.58l4.02 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                fill="#EA4335"
              />
            </svg>
            <span>Daftar dengan Google</span>
          </button>
        </div>

        {/* Bottom Login Link */}
        <div className="text-center mt-4">
          <p className="text-body-sm text-on-surface-variant">
            Sudah punya akun?{" "}
            <Link href="/auth/login" className="text-primary font-semibold hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
