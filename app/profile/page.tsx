"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [autoMask, setAutoMask] = useState(true);

  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-5 py-3.5 shadow-sm border-b border-outline-variant/20 flex justify-between items-center w-full">
        <div className="flex items-center space-x-3">
          <Link
            href="/"
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
        {/* Card Profil Pengguna (Bento-style Elevated Organic Surface) */}
        <section className="bg-surface-container-lowest rounded-[20px] p-5 shadow-[0_4px_16px_-4px_rgba(23,37,29,0.06)] border border-outline-variant/40 relative overflow-hidden">
          {/* Botanical Organic Accent Wave */}
          <div className="absolute -right-12 -top-12 w-36 h-36 bg-secondary-container/40 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-start gap-4 relative z-10">
            {/* Anonymous Friendly Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center border-2 border-primary-container/30 shadow-inner overflow-hidden">
                <span
                  className="material-symbols-outlined text-primary text-[36px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  sentiment_calm
                </span>
              </div>
              <div
                className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center ring-2 ring-surface-container-lowest"
                title="Enkripsi Aktif"
              >
                <span
                  className="material-symbols-outlined text-on-primary text-[12px]"
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
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant">
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
          {/* Teduh / Safe Space Micro-Banner */}
          <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-primary">
                shield
              </span>
              Privasi Terlindungi End-to-End
            </span>
            <span className="text-label-sm font-label-sm text-primary font-medium">
              Aktif
            </span>
          </div>
        </section>

        {/* Section: Pengaturan Privasi & Keamanan Data (MD3 List Style) */}
        <section className="space-y-2">
          <div className="px-1 flex items-center justify-between">
            <h3 className="text-label-lg font-label-lg text-primary font-semibold tracking-wide">
              Pengaturan Privasi &amp; Keamanan Data
            </h3>
            <span className="material-symbols-outlined text-outline text-[18px]">
              vpn_key
            </span>
          </div>
          <div className="bg-surface-container-lowest rounded-[20px] border border-outline-variant/40 divide-y divide-surface-container shadow-sm overflow-hidden">
            {/* 1. Nama Samaran Publik */}
            <div
              className="p-4 flex items-center justify-between gap-3 hover:bg-surface-container/40 active:scale-[0.99] transition-all cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
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

            {/* 2. Penyamaran Profil Otomatis (Switch Toggle) */}
            <div className="p-4 flex items-center justify-between gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
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
                <div className="w-12 h-7 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-on-primary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
              </label>
            </div>

            {/* 3. Riwayat Sesi Konsultasi & Catatan */}
            <Link
              href="/konsultasi/saya"
              className="p-4 flex items-center justify-between gap-3 hover:bg-surface-container/40 active:scale-[0.99] transition-all cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">history_edu</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-body-md font-body-md font-medium text-on-surface">
                  Riwayat Sesi Konsultasi &amp; Catatan
                </p>
                <p className="text-body-sm font-body-sm text-on-surface-variant truncate">
                  Akses data sesi terenkripsi 256-bit
                </p>
              </div>
              <span className="material-symbols-outlined text-outline text-[20px]">
                chevron_right
              </span>
            </Link>

            {/* 4. Persetujuan Pengolahan Data */}
            <div
              className="p-4 flex items-center justify-between gap-3 hover:bg-surface-container/40 active:scale-[0.99] transition-all cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">policy</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-body-md font-body-md font-medium text-on-surface">
                  Persetujuan Pengolahan Data
                </p>
                <p className="text-body-sm font-body-sm text-on-surface-variant truncate">
                  Tinjau izin, analitik &amp; UU PDP
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
          <div className="bg-surface-container-lowest rounded-[20px] border border-outline-variant/40 divide-y divide-surface-container shadow-sm overflow-hidden">
            {/* Counselor Portal Switcher */}
            <Link
              href="/konselor"
              className="p-4 flex items-center justify-between gap-3 hover:bg-secondary-container/30 active:scale-[0.99] transition-all cursor-pointer block bg-secondary-container/10"
            >
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">psychology</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-body-md font-body-md font-semibold text-primary">
                    Portal Dashboard Konselor
                  </p>
                  <span className="text-[10px] bg-primary text-on-primary px-2 py-0.5 rounded-full font-semibold">
                    Mitra
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Area kerja khusus psikolog &amp; konselor RuangRasa
                </p>
              </div>
              <span className="material-symbols-outlined text-primary text-[20px]">
                arrow_forward
              </span>
            </Link>

            {/* Bantuan Krisis & Hotline 119 */}
            <a
              href="tel:119"
              className="p-4 flex items-center justify-between gap-3 hover:bg-tertiary-fixed/30 active:scale-[0.99] transition-all cursor-pointer bg-tertiary-fixed/10 block"
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
                    <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
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

            {/* Unduh / Hapus Data */}
            <div
              className="p-4 flex items-center justify-between gap-3 hover:bg-error-container/30 active:scale-[0.99] transition-all cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <div className="w-10 h-10 rounded-full bg-error-container/50 flex items-center justify-center flex-shrink-0 text-error">
                <span className="material-symbols-outlined text-[20px]">delete_forever</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-body-md font-body-md font-medium text-error">
                  Unduh / Hapus Seluruh Data Saya
                </p>
                <p className="text-body-sm font-body-sm text-outline truncate">
                  Hak penghapusan permanen UU PDP
                </p>
              </div>
              <span className="material-symbols-outlined text-error text-[20px]">
                chevron_right
              </span>
            </div>
          </div>
        </section>

        {/* Logout Button */}
        <div className="pt-2">
          <Link
            href="/welcome"
            className="w-full h-12 rounded-2xl bg-surface-container border border-outline-variant text-on-surface-variant hover:text-error hover:bg-error-container/20 font-label-lg text-label-lg font-medium flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span>Keluar dari Akun</span>
          </Link>
        </div>

        {/* Microcopy */}
        <div className="pt-2 pb-4 text-center">
          <p className="text-body-sm font-body-sm text-on-surface-variant/70 italic">
            "Ceritakan harimu, kamu tidak sendiri di RuangRasa."
          </p>
          <p className="text-label-sm font-label-sm text-outline mt-1">
            Versi 2.4.0 • Keamanan Kriptografi SHA-256
          </p>
        </div>
      </main>
    </>
  );
}
