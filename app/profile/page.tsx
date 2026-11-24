"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [autoMask, setAutoMask] = useState(true);

  return (
    <>
      {/* Top App Bar with Modern Glass Header */}
      <header className="sticky top-0 z-40 glass-header px-5 py-3.5 flex justify-between items-center w-full">
        <div className="flex items-center space-x-3">
          <Link
            href="/home"
            aria-label="Kembali ke Beranda"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </Link>
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile font-semibold text-primary tracking-tight">
            Profil &amp; Keamanan
          </h1>
        </div>
        <Link
          href="/settings"
          aria-label="Pengaturan"
          className="w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-surface-container transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-primary" data-icon="settings">
            settings
          </span>
        </Link>
      </header>

      {/* Scrollable Content Canvas */}
      <main className="flex-1 px-5 pt-3 pb-28 space-y-6">
        {/* Card Profil Pengguna (Modern Glass Surface) */}
        <section className="glass-card rounded-[24px] p-5 border border-white/80 shadow-xs relative overflow-hidden">
          <div className="flex items-start gap-4 relative z-10">
            {/* Anonymous Friendly Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center border-2 border-primary/20 shadow-inner overflow-hidden">
                <span
                  className="material-symbols-outlined text-primary text-[36px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  sentiment_calm
                </span>
              </div>
              <div
                className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center ring-2 ring-white"
                title="Enkripsi Aktif"
              >
                <span
                  className="material-symbols-outlined text-white text-[12px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lock
                </span>
              </div>
            </div>
            {/* User Identifiers */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-headline-sm font-headline-sm text-on-surface truncate font-semibold">
                  Kawan Tenang #782
                </h2>
              </div>
              <p className="text-label-md font-label-md text-on-surface-variant mt-0.5 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-outline">
                  lock_outline
                </span>
                <span>r***@kampus.id</span>
              </p>
              {/* Campus Verification Badge */}
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                <span
                  className="material-symbols-outlined text-[16px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
                <span className="text-label-sm font-label-sm font-medium tracking-tight">
                  Akun Mahasiswa Terverifikasi
                </span>
              </div>
            </div>
          </div>
          {/* Teduh Micro-Banner */}
          <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-primary">
                shield
              </span>
              Privasi Terlindungi
            </span>
            <span className="text-label-sm font-label-sm text-primary font-semibold">
              Aktif
            </span>
          </div>
        </section>

        {/* Section: Pengaturan Privasi & Keamanan Data */}
        <section className="space-y-2">
          <div className="px-1 flex items-center justify-between">
            <h3 className="text-label-lg font-label-lg text-primary font-semibold tracking-wide">
              Pengaturan Privasi &amp; Keamanan Data
            </h3>
            <span className="material-symbols-outlined text-outline text-[18px]">
              vpn_key
            </span>
          </div>
          <div className="glass-card rounded-[22px] border border-white/80 divide-y divide-outline-variant/20 shadow-xs overflow-hidden">
            {/* 1. Nama Samaran Publik */}
            <div
              className="p-4 flex items-center justify-between gap-3 hover:bg-white/40 active:scale-[0.99] transition-all cursor-pointer min-h-[44px]"
              role="button"
              tabIndex={0}
            >
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">masks</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-body-md font-body-md font-medium text-on-surface">
                  Nama Samaran Publik
                </p>
                <p className="text-body-sm font-body-sm text-on-surface-variant truncate">
                  Ubah nama samaran anonim di ruang curhat
                </p>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </div>
            </div>

            {/* 2. Penyamaran Profil Otomatis */}
            <div className="p-4 flex items-center justify-between gap-3 min-h-[44px]">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">visibility_off</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-body-md font-body-md font-medium text-on-surface">
                  Penyamaran Profil Otomatis
                </p>
                <p className="text-body-sm font-body-sm text-on-surface-variant truncate">
                  Sembunyikan detail identitas di komunitas
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                <input
                  type="checkbox"
                  checked={autoMask}
                  onChange={(e) => setAutoMask(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-12 h-7 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            {/* 3. Riwayat Sesi Konsultasi & Catatan */}
            <Link
              href="/konsultasi/saya"
              className="p-4 flex items-center justify-between gap-3 hover:bg-white/40 active:scale-[0.99] transition-all cursor-pointer block min-h-[44px]"
            >
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">history_edu</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-body-md font-body-md font-medium text-on-surface">
                  Riwayat Sesi Konsultasi &amp; Catatan
                </p>
                <p className="text-body-sm font-body-sm text-on-surface-variant truncate">
                  Akses data sesi terenkripsi
                </p>
              </div>
              <span className="material-symbols-outlined text-outline text-[20px]">
                chevron_right
              </span>
            </Link>

            {/* 4. Persetujuan Pengolahan Data */}
            <div
              className="p-4 flex items-center justify-between gap-3 hover:bg-white/40 active:scale-[0.99] transition-all cursor-pointer min-h-[44px]"
              role="button"
              tabIndex={0}
            >
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">policy</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-body-md font-body-md font-medium text-on-surface">
                  Persetujuan Pengolahan Data
                </p>
                <p className="text-body-sm font-body-sm text-on-surface-variant truncate">
                  Tinjau izin &amp; perlindungan data UU PDP
                </p>
              </div>
              <span className="material-symbols-outlined text-outline text-[20px]">
                chevron_right
              </span>
            </div>
          </div>
        </section>

        {/* Section: Pusat Dukungan & Akses Khusus */}
        <section className="space-y-2">
          <div className="px-1 flex items-center justify-between">
            <h3 className="text-label-lg font-label-lg text-primary font-semibold tracking-wide">
              Pusat Dukungan &amp; Layanan
            </h3>
            <span className="material-symbols-outlined text-outline text-[18px]">
              health_and_safety
            </span>
          </div>
          <div className="glass-card rounded-[22px] border border-white/80 divide-y divide-outline-variant/20 shadow-xs overflow-hidden">
            {/* Counselor Portal Switcher */}
            <Link
              href="/konselor"
              className="p-4 flex items-center justify-between gap-3 hover:bg-white/40 active:scale-[0.99] transition-all cursor-pointer block min-h-[44px]"
            >
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">psychology</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-body-md font-body-md font-semibold text-primary">
                    Portal Dashboard Konselor
                  </p>
                  <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-semibold">
                    Mitra
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Area kerja khusus psikolog &amp; konselor
                </p>
              </div>
              <span className="material-symbols-outlined text-primary text-[20px]">
                arrow_forward
              </span>
            </Link>

            {/* Bantuan Krisis & Hotline 119 */}
            <a
              href="tel:119"
              className="p-4 flex items-center justify-between gap-3 hover:bg-white/40 active:scale-[0.99] transition-all cursor-pointer block min-h-[44px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center flex-shrink-0 text-tertiary">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    emergency
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-body-md font-body-md font-semibold text-tertiary">
                      Bantuan Krisis &amp; Hotline 119
                    </p>
                    <span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span>
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Siaga 24 jam untuk keadaan darurat
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-tertiary text-[20px]">
                call
              </span>
            </a>
          </div>
        </section>

        {/* Logout Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="w-full min-h-[48px] rounded-2xl glass-card border border-white/80 text-on-surface-variant hover:text-error hover:bg-error-container/20 font-label-lg text-label-lg font-medium flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span>Keluar dari Akun</span>
          </Link>
        </div>

        {/* Microcopy */}
        <div className="pt-2 pb-4 text-center">
          <p className="text-body-sm font-body-sm text-on-surface-variant/70 italic">
            "Ceritakan harimu, kamu tidak sendiri di RuangTeduh."
          </p>
          <p className="text-label-sm font-label-sm text-outline mt-1">
            Versi 2.4.0 • Keamanan Kriptografi SHA-256
          </p>
        </div>
      </main>
    </>
  );
}
