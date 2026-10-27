"use client";
import { use } from "react";
import Link from "next/link";

export default function ConsultationSessionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-5 py-3 shadow-sm border-b border-outline-variant/20 transition-colors">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/konsultasi/saya"
            aria-label="Kembali ke Konsultasi Saya"
            className="w-10 h-10 -ml-1 rounded-full flex items-center justify-center text-primary hover:bg-surface-container active:scale-95 transition-all duration-150"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="flex-1 text-center">
            <h1 className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">
              Detail Sesi Konseling
            </h1>
          </div>
          {/* Status Pill Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-label-sm font-semibold">Terkonfirmasi</span>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="px-5 pt-3 pb-24 space-y-5 flex-1">
        {/* Emotional Reassurance Banner */}
        <div className="bg-surface-container-low rounded-2xl p-4 flex items-center gap-3 border border-outline-variant/40">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              spa
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Ruang amanmu sudah disiapkan. Luangkan waktu sejenak untuk bernapas tenang sebelum sesi dimulai.
          </p>
        </div>

        {/* Counselor Profile Card */}
        <section className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant shadow-sm relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="relative flex-shrink-0">
              <img
                alt="Foto Nadia Larasati, M.Psi."
                className="w-16 h-16 rounded-2xl object-cover border border-surface-variant"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQrFU2xd8bkUWRu4CEXrKaLCHm6Orh58qlBqYdI3Q8iQQZyxwxdHRM2TF3QHNbwToKTu-nMvrST5_QNigvuFzLGbwZfG7VihatHzJaRfTsJq3MOQpZPvjPNFAkIJFUafOJB8QeU8O1uPV8uZ2cP2lDKcHzmTpAc-kbwPuSXGP9s-nf15hd-eXe-_8e6QksooMSl0_yFsZ1x9UKHwEZL1-Hf5g5uA0Cqe4tO2M8bRbKR9ti_nXr3K1H"
              />
              <div className="absolute -bottom-1 -right-1 bg-primary text-on-primary rounded-full p-1 shadow-sm flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-xs"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">
                  Nadia Larasati, M.Psi.
                </h2>
              </div>
              <p className="font-label-sm text-label-sm text-primary font-medium mt-0.5 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">verified_user</span>
                <span>SIPP Terverifikasi: 198904-2021-088</span>
              </p>
              <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                  Regulasi Emosi
                </span>
                <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-medium">
                  Skripsi &amp; Burnout
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3.5 border-t border-surface-variant flex items-center justify-between text-on-surface-variant">
            <div className="flex items-center gap-1">
              <span
                className="material-symbols-outlined text-sm text-tertiary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-label-md text-label-md font-semibold text-on-surface">
                4.95
              </span>
              <span className="font-label-sm text-label-sm text-outline">(140+ ulasan)</span>
            </div>
            <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface text-primary font-medium">
              Psikolog Klinis Dewasa
            </span>
          </div>
        </section>

        {/* Schedule & Session Format Details */}
        <section className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant shadow-sm space-y-4">
          <h3 className="font-label-lg text-label-lg font-semibold text-on-surface">
            Informasi Janji Temu
          </h3>
          <div className="space-y-3 text-body-sm font-body-sm text-on-surface-variant">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">event</span>
                Tanggal
              </span>
              <span className="font-semibold text-on-surface">Hari ini, 25 Okt 2024</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                Jam Mulai
              </span>
              <span className="font-semibold text-on-surface">14:00 WIB (50 Menit)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">videocam</span>
                Format
              </span>
              <span className="font-semibold text-primary">Video Call Terenkripsi</span>
            </div>
          </div>
        </section>

        {/* Preparation Checklist */}
        <section className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/60 space-y-3">
          <h3 className="font-label-md text-label-md font-semibold text-primary flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">checklist</span>
            Panduan Menjelang Sesi
          </h3>
          <ul className="space-y-2 text-body-sm font-body-sm text-on-surface-variant">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
              Gunakan earphone atau headset untuk menjaga privasi suaramu.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
              Pilih sudut ruangan yang nyaman dan minim gangguan.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
              Sediakan air minum dan tisu di dekatmu jika diperlukan.
            </li>
          </ul>
        </section>

        {/* Enter Room Button */}
        <div className="pt-2">
          <button
            onClick={() => alert("Menghubungkan ke ruang video aman RuangRasa...")}
            className="w-full h-12 bg-primary hover:bg-[#1B5E43] text-on-primary rounded-xl font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">videocam</span>
            <span>Masuk ke Ruang Panggilan Video</span>
          </button>
        </div>
      </main>
    </>
  );
}
