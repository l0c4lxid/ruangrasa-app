"use client";

import { useState } from "react";
import Link from "next/link";

export default function KonselorDashboardPage() {
  const [receivingConsultations, setReceivingConsultations] = useState(true);

  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
        <div className="px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/20 shadow-sm"
                alt="Nadia Larasati, M.Psi."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmYRMsuX6jkVKY_gQvZbOYrxZKN4TK1iA0WPFUoj1XN8hwZA4Cv6i63KlJRfpD26gpZHcdrO_fUm4VRZYQJ0TctKMVZm4_wAT69bIViEQFtvdvEBtzla1v-xr2b-IdSTCHNwRwFdf4J4bKedSmQpNV1AEsOiUTyNmojYGTW2-9qQy0swZ_UOPU55VDGZvT08Mz6E6Ifwq6J4WCKHBRxCs1Hit2K34IbA6x8AbXji4Nbf2d_BJLDtzp"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-primary rounded-full ring-2 ring-surface"></span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h1 className="text-headline-sm font-headline-sm text-on-surface font-semibold tracking-tight">
                  Mbak Nadia Larasati, M.Psi.
                </h1>
                <span
                  className="material-symbols-outlined text-[16px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
              <p className="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                Portal Mitra Konselor
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container active:scale-95 transition-transform"
              title="Beralih ke Tampilan Pengguna"
            >
              <span className="material-symbols-outlined text-[24px]">swap_horiz</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-5 pt-4 pb-20 space-y-5 flex-1">
        {/* Availability Toggle */}
        <section className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/40 shadow-sm flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2.5 w-2.5">
                {receivingConsultations && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                )}
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                    receivingConsultations ? "bg-primary" : "bg-outline"
                  }`}
                ></span>
              </span>
              <span
                className={`text-label-lg font-label-lg font-semibold ${
                  receivingConsultations ? "text-primary" : "text-outline"
                }`}
              >
                {receivingConsultations ? "Menerima Konsultasi" : "Istirahat / Tidak Praktik"}
              </span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              {receivingConsultations
                ? "Sistem siap menyalurkan sesi baru"
                : "Profil ditangguhkan sementara dari direktori"}
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={receivingConsultations}
              onChange={(e) => setReceivingConsultations(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-14 h-8 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary-container"></div>
          </label>
        </section>

        {/* Quick Operational Metrics */}
        <section className="grid grid-cols-3 gap-2.5">
          <Link
            href="/konselor/moderation"
            className="bg-surface-container-lowest p-3.5 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:border-primary/40 transition-all block"
          >
            <div className="flex items-center justify-between text-tertiary">
              <span className="material-symbols-outlined text-[20px]">pending_actions</span>
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            </div>
            <div className="mt-3">
              <span className="text-headline-md font-headline-md text-on-surface font-semibold block leading-tight">
                3
              </span>
              <span className="text-label-sm font-label-sm text-on-surface-variant leading-tight">
                Menunggu Respon
              </span>
            </div>
          </Link>

          <Link
            href="/konselor/kuota"
            className="bg-surface-container-lowest p-3.5 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:border-primary/40 transition-all block"
          >
            <div className="flex items-center justify-between text-primary">
              <span className="material-symbols-outlined text-[20px]">event_available</span>
              <span className="text-label-sm font-label-sm font-semibold bg-secondary-container text-on-secondary-container px-1.5 py-0.5 rounded-md">
                Hari Ini
              </span>
            </div>
            <div className="mt-3">
              <span className="text-headline-md font-headline-md text-on-surface font-semibold block leading-tight">
                3
              </span>
              <span className="text-label-sm font-label-sm text-on-surface-variant leading-tight">
                Sesi Terjadwal
              </span>
            </div>
          </Link>

          <Link
            href="/konselor/laporan"
            className="bg-surface-container-lowest p-3.5 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:border-primary/40 transition-all block"
          >
            <div className="flex items-center justify-between text-secondary">
              <span className="material-symbols-outlined text-[20px]">shield</span>
              <span className="w-2 h-2 rounded-full bg-primary"></span>
            </div>
            <div className="mt-3">
              <span className="text-headline-md font-headline-md text-on-surface font-semibold block leading-tight">
                3
              </span>
              <span className="text-label-sm font-label-sm text-on-surface-variant leading-tight">
                Laporan Komunitas
              </span>
            </div>
          </Link>
        </section>

        {/* Action Center: Navigasi Modul Konselor */}
        <section className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-label-lg font-label-lg font-semibold text-on-surface">
              Akses Modul Konselor
            </h2>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 divide-y divide-outline-variant/30 overflow-hidden shadow-sm">
            <Link
              href="/konselor/moderation"
              className="p-4 flex items-center justify-between hover:bg-surface-container/40 active:scale-[0.99] transition-all block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">hourglass_top</span>
                </div>
                <div>
                  <h3 className="font-label-lg text-label-lg font-semibold text-on-surface">
                    Permintaan Konsultasi Masuk
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Tinjau dan setujui jadwal janji temu klien
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
            </Link>

            <Link
              href="/konselor/kuota"
              className="p-4 flex items-center justify-between hover:bg-surface-container/40 active:scale-[0.99] transition-all block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                </div>
                <div>
                  <h3 className="font-label-lg text-label-lg font-semibold text-on-surface">
                    Kelola Slot &amp; Jam Praktik
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Buka atau kunci kuota sesi minggu ini
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
            </Link>

            <Link
              href="/konselor/laporan"
              className="p-4 flex items-center justify-between hover:bg-surface-container/40 active:scale-[0.99] transition-all block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container text-on-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">verified_user</span>
                </div>
                <div>
                  <h3 className="font-label-lg text-label-lg font-semibold text-on-surface">
                    Pusat Moderasi &amp; Laporan
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Evaluasi laporan ruang aman komunitas
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
            </Link>
          </div>
        </section>

        {/* Ethical Notice */}
        <section className="p-3 bg-surface-container-low/60 rounded-xl border border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-[18px] text-secondary flex-shrink-0">
            lock
          </span>
          <span>
            Kerahasiaan data dan identitas klien dijaga sesuai Kode Etik Psikologi Indonesia (HIMPSI).
          </span>
        </section>
      </main>
    </>
  );
}
