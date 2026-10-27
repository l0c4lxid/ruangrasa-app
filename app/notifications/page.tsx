"use client";

import { useState } from "react";
import Link from "next/link";

export default function NotificationsPage() {
  const [filter, setFilter] = useState<"semua" | "konsultasi" | "komunitas" | "sistem">("semua");
  const [readAll, setReadAll] = useState(false);

  const notifications = [
    {
      id: 1,
      category: "konsultasi",
      title: "Jadwal Konsultasi Disetujui",
      message: "Mbak Nadia Larasati telah mengonfirmasi jadwal sesi konselingmu hari ini pukul 14:00 WIB. Ruang sesi siap 10 menit sebelumnya.",
      time: "10 menit lalu",
      unread: true,
      icon: "psychology",
      iconColor: "text-primary",
      bgColor: "bg-secondary-container",
    },
    {
      id: 2,
      category: "komunitas",
      title: "Tanggapan Baru di Curhatmu",
      message: "Kawan Anonim #918 mengirimkan pelukan hangat dan komentar penguat di ceritamu: 'Wajar merasa lelah, istirahat cukup malam ini ya.'",
      time: "25 menit lalu",
      unread: true,
      icon: "favorite",
      iconColor: "text-primary",
      bgColor: "bg-secondary-container",
    },
    {
      id: 3,
      category: "komunitas",
      title: "Diskusi Hangat di Ruang Pejuang Skripsi",
      message: "Fasilitator Kak Dinda baru saja memulai thread mingguan: 'Strategi menghadapi bimbingan dosen dengan tenang.'",
      time: "2 jam lalu",
      unread: false,
      icon: "forum",
      iconColor: "text-secondary",
      bgColor: "bg-surface-container",
    },
    {
      id: 4,
      category: "sistem",
      title: "Pengingat Bernapas Tenang",
      message: "Sudah minum air dan beristirahat hari ini? Ingat untuk mengambil jeda sejenak dari layar.",
      time: "Kemarin",
      unread: false,
      icon: "spa",
      iconColor: "text-primary",
      bgColor: "bg-secondary-container",
    },
  ];

  const filtered = filter === "semua"
    ? notifications
    : notifications.filter((n) => n.category === filter);

  return (
    <>
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-5 py-3 shadow-sm border-b border-outline-variant/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              aria-label="Kembali ke Beranda"
              className="w-10 h-10 -ml-1 rounded-full flex items-center justify-center text-primary hover:bg-surface-container active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </Link>
            <div>
              <h1 className="text-headline-lg-mobile font-headline-lg-mobile font-semibold text-primary tracking-tight">
                RuangTeduh
              </h1>
              <p className="text-label-sm font-label-sm text-on-surface-variant">
                Kabar &amp; Pembaruan Teduh
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setReadAll(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-surface-container active:scale-95 transition-all text-primary text-label-md font-label-md"
              title="Tandai semua sudah dibaca"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">done_all</span>
              <span className="hidden sm:inline">Tandai Dibaca</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-5 pt-3 pb-24 space-y-4">
        {/* Privacy Shield Banner */}
        <section className="bg-surface-container-low border border-outline-variant/60 rounded-xl p-3.5 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[18px]">lock</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-label-lg font-label-lg font-semibold text-primary">
                Ruang Aman &amp; Terjaga
              </h2>
              <span className="text-label-sm font-label-sm px-2 py-0.5 rounded-full bg-secondary-container/70 text-on-secondary-container font-medium">
                Privasi Aktif
              </span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
              Sesuai komitmen etika kami, cuplikan pesan curhat pribadi tidak ditampilkan di notifikasi layar ini demi menjaga kenyamanan emosionalmu.
            </p>
          </div>
        </section>

        {/* Filter Chips Navigation */}
        <section className="overflow-x-auto pb-1 -mx-5 px-5 flex gap-2 no-scrollbar">
          <button
            onClick={() => setFilter("semua")}
            className={`flex items-center gap-1.5 h-9 px-4 rounded-full text-label-md font-label-md whitespace-nowrap transition-all ${
              filter === "semua"
                ? "bg-secondary-container border border-primary text-primary font-semibold shadow-xs"
                : "bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container"
            }`}
            type="button"
          >
            {filter === "semua" && (
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check
              </span>
            )}
            Semua
          </button>
          <button
            onClick={() => setFilter("konsultasi")}
            className={`flex items-center gap-1.5 h-9 px-4 rounded-full text-label-md font-label-md whitespace-nowrap transition-all ${
              filter === "konsultasi"
                ? "bg-secondary-container border border-primary text-primary font-semibold shadow-xs"
                : "bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">psychology</span>
            Konsultasi
          </button>
          <button
            onClick={() => setFilter("komunitas")}
            className={`flex items-center gap-1.5 h-9 px-4 rounded-full text-label-md font-label-md whitespace-nowrap transition-all ${
              filter === "komunitas"
                ? "bg-secondary-container border border-primary text-primary font-semibold shadow-xs"
                : "bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">forum</span>
            Komunitas &amp; Curhat
          </button>
          <button
            onClick={() => setFilter("sistem")}
            className={`flex items-center gap-1.5 h-9 px-4 rounded-full text-label-md font-label-md whitespace-nowrap transition-all ${
              filter === "sistem"
                ? "bg-secondary-container border border-primary text-primary font-semibold shadow-xs"
                : "bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">spa</span>
            Sistem
          </button>
        </section>

        {/* Notifications List */}
        <section className="space-y-3">
          {filtered.map((item) => {
            const isUnread = !readAll && item.unread;
            return (
              <article
                key={item.id}
                className={`p-4 rounded-2xl border transition-all ${
                  isUnread
                    ? "bg-surface-container-lowest border-primary/30 shadow-sm"
                    : "bg-surface-container-lowest/60 border-outline-variant/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center shrink-0 mt-0.5`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {item.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-label-lg text-label-lg font-semibold text-on-surface truncate">
                        {item.title}
                      </h3>
                      {isUnread && (
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse"></span>
                      )}
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      {item.message}
                    </p>
                    <span className="font-label-sm text-label-sm text-outline mt-2 block">
                      {item.time}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}
