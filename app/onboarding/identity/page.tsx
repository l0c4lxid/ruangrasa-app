"use client";
import { useState } from "react";
import Link from "next/link";

const pseudonyms = [
  { name: "Kawan Teduh #304", icon: "🌿" },
  { name: "Kawan Damai #119", icon: "🍃" },
  { name: "Kawan Tenang #782", icon: "🌱" },
  { name: "Kawan Hening #405", icon: "☁️" },
  { name: "Kawan Lembayung #221", icon: "🌸" },
];

const topics = [
  "Mengurai Beban Skripsi",
  "Mengelola Cemas & Overthinking",
  "Mencari Teman Berbagi",
  "Konsultasi Psikolog",
];

export default function OnboardingIdentityPage() {
  const [pseudonymIndex, setPseudonymIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [selected, setSelected] = useState([true, false, false, false]);

  const handleShuffle = () => {
    setAnimating(true);
    setTimeout(() => {
      setPseudonymIndex((i) => (i + 1) % pseudonyms.length);
      setAnimating(false);
    }, 150);
  };

  const toggleChip = (idx: number) =>
    setSelected((prev) => prev.map((v, i) => (i === idx ? !v : v)));

  const chipBase =
    "topic-chip h-9 px-4 rounded-full font-label-md text-label-md flex items-center gap-1.5 transition-all duration-200";
  const chipSelected =
    chipBase +
    " bg-secondary-container border border-primary text-primary-container active:scale-95 shadow-sm";
  const chipUnselected =
    chipBase +
    " bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low active:scale-95";

  return (
    <div className="px-5 py-6 flex-1 flex flex-col justify-between min-h-screen relative overflow-hidden">
      {/* Ambient Botanical Backdrop Glow */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 -left-16 w-56 h-56 bg-surface-container-high/60 rounded-full blur-2xl pointer-events-none -z-10"></div>
      <div>
      {/* Header Section */}
      <header className="space-y-4">
        {/* Step Indicator & Back Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/auth/register"
            aria-label="Kembali"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest/80 text-on-surface hover:bg-surface-container transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-[20px]" data-icon="arrow_back">arrow_back</span>
          </Link>
          <div className="flex items-center space-x-1.5 px-3 py-1 bg-surface-container rounded-full border border-outline-variant/40">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span className="w-4 h-2 rounded-full bg-primary transition-all"></span>
          </div>
        </div>
        {/* Icon & Screen Title */}
        <div className="pt-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary-container text-primary mb-3 shadow-sm">
            <span className="material-symbols-outlined text-[32px]" data-icon="shield_with_heart" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-semibold tracking-tight">
            Privasi &amp; Ruang Amanmu
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5 leading-relaxed">
            RuangRasa dirancang agar kamu bisa bersuara tanpa rasa cemas dihakimi, dengan perlindungan pseudonimitas yang teruji.
          </p>
        </div>
      </header>
      {/* Main Content Area */}
      <main className="my-6 space-y-6 flex-1">
        {/* Interactive Pseudonym Preview Card */}
        <section className="bg-surface-container-lowest border border-outline-variant/60 rounded-[20px] p-5 shadow-[0_2px_12px_-2px_rgba(23,37,29,0.05)] relative overflow-hidden">
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-primary text-[18px]" data-icon="badge">badge</span>
              <span className="font-label-md text-label-md text-secondary font-medium tracking-wide uppercase">Identitas Samaran Aktif</span>
            </div>
            <button className="inline-flex items-center space-x-1 text-primary hover:text-primary-container font-label-md text-label-md transition-colors active:scale-95 duration-150" id="btn-shuffle" type="button" onClick={handleShuffle}>
              <span className="material-symbols-outlined text-[16px]" data-icon="sync">sync</span>
              <span>Acak Nama</span>
            </button>
          </div>
          {/* Identity Badge Display */}
          <div className="flex items-center space-x-3.5 p-3.5 bg-surface-container-low rounded-[16px] border border-outline-variant/40">
            <div className={"w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-inner font-semibold text-lg transition-transform duration-300 " + (animating ? "scale-75" : "")} id="avatar-icon">
              {pseudonyms[pseudonymIndex].icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h2 className={"font-headline-sm text-headline-sm text-on-surface font-semibold truncate " + (animating ? "opacity-40" : "")} id="pseudonym-name">
                  {pseudonyms[pseudonymIndex].name}
                </h2>
                <span className="material-symbols-outlined text-primary text-[18px]" data-icon="verified_user" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                Tampil di ruang Curhat &amp; Teman Sebaya
              </p>
            </div>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant/80 mt-2.5 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-primary" data-icon="lock">lock</span>
            Nama asli &amp; kampusmu terenkripsi dan tidak pernah ditampilkan ke publik.
          </p>
        </section>
        {/* 3 Pillars of Protection (Asymmetric Feature Cards) */}
        <section className="space-y-3">
          <h3 className="font-label-lg text-label-lg text-on-surface font-semibold px-1">
            3 Pilar Perlindungan Ruang Rasa
          </h3>
          {/* Pilar 1 */}
          <div className="p-4 bg-surface-container-lowest rounded-[18px] border border-outline-variant/50 flex items-start space-x-3.5 transition-all">
            <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]" data-icon="incognito">incognito</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface text-[15px] leading-tight font-semibold">
                Pseudonimitas Publik
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Nama akun otomatis digantikan identitas samaran unik di ruang Curhat dan Komunitas, sehingga kamu bebas berekspresi tanpa stigma.
              </p>
            </div>
          </div>
          {/* Pilar 2 */}
          <div className="p-4 bg-surface-container-lowest rounded-[18px] border border-outline-variant/50 flex items-start space-x-3.5 transition-all">
            <div className="w-9 h-9 rounded-xl bg-secondary-container/60 flex items-center justify-center text-primary shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]" data-icon="key">key</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface text-[15px] leading-tight font-semibold">
                Batas Kerahasiaan Berlapis
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Data identitas asli dan institusi kampus dienkripsi end-to-end. Verifikasi hanya digunakan untuk mencegah akun palsu atau penyalahgunaan.
              </p>
            </div>
          </div>
          {/* Pilar 3 */}
          <div className="p-4 bg-surface-container-lowest rounded-[18px] border border-outline-variant/50 flex items-start space-x-3.5 transition-all">
            <div className="w-9 h-9 rounded-xl bg-tertiary-fixed/60 flex items-center justify-center text-tertiary shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]" data-icon="tune">tune</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface text-[15px] leading-tight font-semibold">
                Kontrol Berbagi Penuh
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Atur dengan bebas apakah ceritamu menerima tanggapan diskusi atau hanya pelukan empati virtual tanpa teks.
              </p>
            </div>
          </div>
        </section>
        {/* Multi-select Chips: Kebutuhan Utama Pengguna */}
        <section className="space-y-2.5 pt-1">
          <label className="font-label-lg text-label-lg text-on-surface font-semibold block px-1">
            Apa fokus utama yang ingin kamu rawat?
            <span className="font-body-sm text-body-sm text-on-surface-variant block font-normal">Pilih satu atau beberapa:</span>
          </label>
          <div className="flex flex-wrap gap-2 pt-1" id="topic-chips">
            {topics.map((label, idx) => {
              const sel = selected[idx];
              return (
                <button
                  key={label}
                  className={sel ? chipSelected : chipUnselected}
                  data-selected={sel}
                  type="button"
                  onClick={() => toggleChip(idx)}
                >
                  <span
                    className={"material-symbols-outlined text-[16px] chip-icon " + (sel ? "" : "hidden")}
                    data-icon="check"
                    style={sel ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    check
                  </span>
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </section>
      </main>
      </div>
      {/* Bottom Action & Ethical Note Area */}
      <footer className="pt-4 space-y-4">
        {/* Primary Action CTA */}
        <Link
          href="/"
          className="w-full h-[52px] bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-semibold rounded-[14px] flex items-center justify-center space-x-2 transition-all duration-200 active:scale-95 shadow-[0_4px_16px_-4px_rgba(23,125,91,0.25)]"
        >
          <span>Lanjut ke Beranda Tenang</span>
          <span className="material-symbols-outlined text-[20px]" data-icon="arrow_forward">arrow_forward</span>
        </Link>
        {/* Ethical Notice Disclaimer */}
        <div className="p-3 bg-surface-container-low/70 border border-outline-variant/30 rounded-[12px] flex items-center space-x-2.5">
          <span className="material-symbols-outlined text-tertiary-container shrink-0 text-[18px]" data-icon="info">info</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
            <strong>Catatan Etika:</strong> RuangRasa adalah platform pendukung teman sebaya dan bukan pengganti layanan gawat darurat medis atau psikiatri krisis 24 jam.
          </p>
        </div>
      </footer>
    </div>
  );
}
