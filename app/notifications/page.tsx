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
      {/* Top App Bar with Modern Glass Header */}
      <header className="sticky top-0 z-40 glass-header px-5 py-3 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/home"
              aria-label="Kembali ke Beranda"
              className="w-10 h-10 -ml-1 rounded-full flex items-center justify-center text-primary hover:bg-surface-container active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </Link>
            <div>
              <h1 className="text-headline-lg-mobile font-headline-lg-mobile font-semibold text-primary tracking-tight">
                Notifikasi
              </h1>
              <p className="text-label-sm font-label-sm text-on-surface-variant">
                Pembaruan &amp; aktivitas terkini
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
        {/* Filter Chips Navigation */}
        <section className="overflow-x-auto pb-1 -mx-5 px-5 flex gap-2 no-scrollbar">
          {(["semua", "konsultasi", "komunitas", "sistem"] as const).map((cat) => {
            const active = filter === cat;
            const labels = {
              semua: "Semua",
              konsultasi: "Konsultasi",
              komunitas: "Komunitas",
              sistem: "Sistem",
            };
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`h-9 px-4 rounded-full flex items-center gap-1.5 text-label-md font-label-md font-medium shrink-0 transition-all active:scale-95 ${
                  active
                    ? "bg-primary text-white shadow-xs"
                    : "glass-pill text-on-surface-variant hover:bg-white"
                }`}
              >
                {labels[cat]}
              </button>
            );
          })}
        </section>

        {/* Notification Items */}
        <section className="space-y-3">
          {filtered.map((item) => {
            const isUnread = item.unread && !readAll;
            return (
              <article
                key={item.id}
                className={`glass-card rounded-[22px] p-4 border border-white/80 shadow-xs transition-all ${
                  isUnread ? "border-l-4 border-l-primary" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center shrink-0 shadow-xs`}>
                    <span className="material-symbols-outlined text-[22px]">
                      {item.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="text-label-lg font-label-lg font-semibold text-on-surface truncate">
                        {item.title}
                      </h2>
                      <span className="text-label-sm font-label-sm text-outline shrink-0">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-snug">
                      {item.message}
                    </p>
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
