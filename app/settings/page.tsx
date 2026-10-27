"use client";

import { useState } from "react";
import Link from "next/link";

export default function SettingsPage() {
  const [autoMask, setAutoMask] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-5 py-3.5 shadow-sm border-b border-outline-variant/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/profile"
            aria-label="Kembali ke Profil"
            className="w-10 h-10 -ml-1 rounded-full flex items-center justify-center text-primary hover:bg-surface-container active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile font-semibold text-primary tracking-tight">
            Pengaturan Aplikasi
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 pt-3 pb-24 space-y-5">
        <section className="space-y-2">
          <h2 className="text-label-lg font-label-lg text-primary font-semibold tracking-wide px-1">
            Preferensi Akun &amp; Notifikasi
          </h2>
          <div className="bg-surface-container-lowest rounded-[20px] border border-outline-variant/40 divide-y divide-surface-container shadow-sm overflow-hidden">
            <div className="p-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-body-md font-body-md font-medium text-on-surface">
                  Notifikasi Pengingat Sesi
                </p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Kirim pengingat 15 menit sebelum sesi konseling
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-12 h-7 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-on-primary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
              </label>
            </div>

            <div className="p-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-body-md font-body-md font-medium text-on-surface">
                  Penyamaran Otomatis
                </p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Samarkan nama secara acak saat menulis cerita
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={autoMask}
                  onChange={(e) => setAutoMask(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-12 h-7 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-on-primary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
              </label>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-label-lg font-label-lg text-primary font-semibold tracking-wide px-1">
            Keamanan &amp; Data
          </h2>
          <div className="bg-surface-container-lowest rounded-[20px] border border-outline-variant/40 divide-y divide-surface-container shadow-sm overflow-hidden">
            <Link
              href="/profile"
              className="p-4 flex items-center justify-between gap-3 hover:bg-surface-container/40 active:scale-[0.99] transition-all block"
            >
              <div className="flex-1">
                <p className="text-body-md font-body-md font-medium text-on-surface">
                  Kebijakan Privasi UU PDP
                </p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Pelajari bagaimana data Anda dilindungi
                </p>
              </div>
              <span className="material-symbols-outlined text-outline text-[20px]">
                chevron_right
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
