"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function HomeContent() {
  const searchParams = useSearchParams();
  const isGuest = searchParams.get("guest") === "true";

  return (
    <>
      {/* TopAppBar with Modern Glass Header */}
      <header className="sticky top-0 z-40 glass-header px-5 py-3">
        <div className="flex justify-between items-center w-full">
          {/* Leading: Brand and Avatar */}
          <Link
            href={isGuest ? "/auth/login" : "/profile"}
            className="flex items-center gap-3 active:scale-95 transition-transform"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20 bg-surface-container-high flex-shrink-0 flex items-center justify-center">
              {isGuest ? (
                <span className="material-symbols-outlined text-primary text-[22px]">
                  sentiment_satisfied
                </span>
              ) : (
                <img
                  className="w-full h-full object-cover"
                  alt="Foto Profil Kawan Rasa"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxXYwi0WZ5kkpilPnESJdSW0xRUShzdqWe6ph4xXD6Wr5B4YNnvax1Xf3HSPx2KHj5CynmXh5t6ZP8_fr75vX_Gru-Zm_eFgrTvOBXN0GUptT6pm5tCn8-t_pa-KORutlrecIZgJVOsnHlMEqj_i79Hj9awpf5dhSdTmuyWnHIdCKhDRZChLAH5t1mdoawrvGMPeznJTTjPmYMKNw-LRF1kfo_p2iRk7AIeecfbklu6HSQHpYvJkSP"
                  width={40}
                  height={40}
                />
              )}
            </div>
            <div>
              <span className="text-label-sm font-label-sm text-secondary block leading-tight">
                {isGuest ? "Halo, Kawan Tamu" : "Halo, Kawan Rasa"}
              </span>
              <h1 className="text-headline-sm font-headline-sm font-bold text-primary tracking-tight">
                RuangTeduh
              </h1>
            </div>
          </Link>

          {/* Trailing actions */}
          <div className="flex items-center gap-1.5">
            <Link
              href="/chat-ai"
              aria-label="Tanya Asisten AI"
              className="w-10 h-10 rounded-full flex items-center justify-center text-primary bg-secondary-container/50 hover:bg-secondary-container active:scale-95 transition-all relative border border-primary/20 shadow-xs"
            >
              <span className="material-symbols-outlined text-[22px]">smart_toy</span>
            </Link>
            <Link
              href="/notifications"
              aria-label="Notifikasi"
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all relative"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="w-2 h-2 rounded-full bg-tertiary-container absolute top-2.5 right-2.5"></span>
            </Link>
            <Link
              href={isGuest ? "/auth/login" : "/profile"}
              aria-label="Pengaturan Profil"
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[22px]">
                settings
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col gap-5 px-5 pt-3 pb-24">
        {/* Guest Mode Notice */}
        {isGuest && (
          <div className="glass-card text-on-secondary-container p-3.5 rounded-2xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-[22px]">visibility_off</span>
              <div>
                <p className="font-label-md text-label-md font-semibold text-primary">Mode Tamu Anonim</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                  Membaca curhat &amp; komunitas. Masuk untuk booking psikolog.
                </p>
              </div>
            </div>
            <Link
              href="/auth/login"
              className="bg-primary text-white text-label-sm font-label-sm px-3.5 py-2 rounded-xl font-semibold shrink-0 active:scale-95 transition-all min-h-[44px] flex items-center"
            >
              Masuk
            </Link>
          </div>
        )}

        {/* Warm Empathetic Greeting Header */}
        <section className="mt-1">
          <p className="text-headline-md font-headline-md text-on-surface tracking-tight leading-snug">
            Halo, kamu boleh mulai dari hal kecil.
          </p>
          <p className="text-body-md font-body-md text-on-surface-variant mt-1">
            Tarik napas perlahan. Ruang ini aman untuk segala perasaanmu hari ini.
          </p>
        </section>

        {/* Emergency Alert Banner */}
        <section className="bg-tertiary-fixed text-on-tertiary-fixed p-3.5 rounded-2xl flex items-start gap-3 border border-tertiary-fixed-dim/40 shadow-xs">
          <span
            className="material-symbols-outlined text-tertiary mt-0.5 flex-shrink-0"
            data-icon="health_and_safety"
          >
            health_and_safety
          </span>
          <div className="flex-1">
            <p className="text-label-md font-label-md font-semibold text-tertiary">
              Bantuan Segera
            </p>
            <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5 leading-snug">
              Sedang dalam krisis? Hubungi layanan darurat{" "}
              <span className="font-semibold text-tertiary underline decoration-tertiary/40">
                119 ext 8
              </span>
            </p>
          </div>
          <a
            className="bg-surface-container-lowest text-tertiary text-label-sm font-label-sm px-3.5 py-2 rounded-full font-semibold self-center active:scale-95 transition-transform shadow-xs min-h-[44px] flex items-center"
            href="tel:119"
          >
            Hubungi
          </a>
        </section>

        {/* Three Primary Service Cards (Varied Composition, Not Uniform AI Slop) */}
        <section className="flex flex-col gap-3.5">
          <div className="flex items-center justify-between">
            <h2 className="text-label-lg font-label-lg font-semibold text-on-surface tracking-tight">
              Pilih Ruang Berbagimu
            </h2>
            <span className="text-label-sm font-label-sm text-secondary">
              Aman &amp; Terenkripsi
            </span>
          </div>

          {/* 1. Flagship Card: Curhat Anonim (Featured Full Treatment) */}
          <article className="glass-card rounded-[22px] p-4.5 border border-white/80 shadow-xs flex flex-col justify-between gap-3 relative overflow-hidden">
            <div className="flex items-start justify-between gap-3">
              <div className="w-11 h-11 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-[24px]">chat_bubble_outline</span>
              </div>
              <span className="bg-primary/10 text-primary font-label-sm text-label-sm px-3 py-1 rounded-full font-medium border border-primary/20">
                Privat &amp; Anonim
              </span>
            </div>
            <div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">
                Curhat Bebas Nama
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Tulis isi hatimu tanpa khawatir identitas publik. Ruang ini mendengar tanpa menghakimi.
              </p>
            </div>
            <Link
              href="/curhat"
              className="w-full bg-primary text-white min-h-[44px] py-2.5 px-4 rounded-xl text-label-md font-label-md font-semibold flex items-center justify-center hover:bg-primary/90 active:scale-95 transition-all shadow-xs"
            >
              Mulai Curhat Sekarang
            </Link>
          </article>

          {/* 2 & 3. Secondary Duo: Komunitas & Konsultasi */}
          <div className="grid grid-cols-2 gap-3">
            {/* Komunitas Teman Sebaya */}
            <article className="glass-card rounded-[20px] p-3.5 border border-white/80 flex flex-col justify-between gap-3 hover:border-primary/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-secondary flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[22px]">groups</span>
                </div>
                <h3 className="font-label-lg text-label-lg font-semibold text-on-surface leading-snug">
                  Lingkar Sebaya
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 text-xs leading-snug">
                  Diskusi bersama kawan seangkatan.
                </p>
              </div>
              <Link
                href="/komunitas"
                className="w-full bg-secondary-container/70 text-on-secondary-container min-h-[44px] py-2 px-3 rounded-xl text-label-sm font-label-sm font-semibold flex items-center justify-center hover:bg-secondary-container transition-all active:scale-95 text-center"
              >
                Buka Diskusi
              </Link>
            </article>

            {/* Konsultasi Profesional */}
            <article className="glass-card rounded-[20px] p-3.5 border border-white/80 flex flex-col justify-between gap-3 hover:border-primary/40 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    psychology
                  </span>
                </div>
                <h3 className="font-label-lg text-label-lg font-semibold text-on-surface leading-snug">
                  Psikolog Klinis
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 text-xs leading-snug">
                  Sesi privat berlisensi SIPP resmi.
                </p>
              </div>
              <Link
                href="/konsultasi"
                className="w-full bg-white text-primary border border-primary/20 min-h-[44px] py-2 px-3 rounded-xl text-label-sm font-label-sm font-semibold flex items-center justify-center hover:bg-primary/5 transition-all active:scale-95 text-center shadow-xs"
              >
                Pilih Jadwal
              </Link>
            </article>
          </div>
        </section>

        {/* Emotional Self-Check Guide */}
        <section className="glass-card rounded-[20px] p-4 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-secondary-container flex items-center justify-center text-primary shrink-0">
            <span
              className="material-symbols-outlined text-[24px]"
              data-icon="spa"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              spa
            </span>
          </div>
          <div className="flex-1">
            <p className="text-label-md font-label-md font-semibold text-on-surface">
              Panduan Emosional Hari Ini
            </p>
            <p className="text-body-sm font-body-sm text-on-surface-variant leading-snug">
              Beri waktu sejenak untuk diri sendiri sebelum melanjutkan rutinitas.
            </p>
          </div>
        </section>

        {/* Recent Discussion Snapshot */}
        <section className="flex flex-col gap-2.5 mb-2">
          <div className="flex items-center justify-between">
            <h2 className="text-label-lg font-label-lg font-semibold text-on-surface tracking-tight">
              Diskusi Hangat Terkini
            </h2>
            <Link href="/curhat" className="text-label-sm font-label-sm text-primary font-semibold hover:underline">
              Lihat Semua
            </Link>
          </div>
          <Link href="/curhat/1" className="block active:scale-[0.99] transition-transform">
            <article className="glass-card rounded-[20px] p-4.5 border border-white/80 hover:border-primary/40 transition-all">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[16px]">
                      visibility_off
                    </span>
                  </div>
                  <span className="text-label-sm font-label-sm text-on-surface font-semibold">
                    Kawan P412
                  </span>
                </div>
                <span className="text-label-sm font-label-sm text-outline">2 jam lalu</span>
              </div>
              <p className="text-body-md font-body-md text-on-surface italic leading-relaxed">
                “Merasa tertinggal skripsi dibanding teman seangkatan...”
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Terkadang rasanya berat buka laptop, tapi mencoba pelan-pelan menulis 1 paragraf hari ini.
              </p>
              <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-outline-variant/30 text-on-surface-variant">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-secondary">
                    <span
                      className="material-symbols-outlined text-[18px] text-primary"
                      data-icon="favorite"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      favorite
                    </span>
                    <span>24 peluk</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-outline">
                    <span className="material-symbols-outlined text-[18px]" data-icon="chat_bubble">
                      chat_bubble
                    </span>
                    <span>6 tanggapan</span>
                  </span>
                </div>
                <span className="text-primary text-label-sm font-label-sm font-semibold">
                  Beri Peluk
                </span>
              </div>
            </article>
          </Link>
        </section>
      </main>
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="p-5 text-center text-on-surface-variant">Memuat Beranda...</div>}>
      <HomeContent />
    </Suspense>
  );
}
