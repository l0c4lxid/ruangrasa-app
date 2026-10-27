"use client"

import { useEffect } from "react"

export default function NotificationsPage() {
  useEffect(() => {
    const filterButtons = document.querySelectorAll(".filter-chip")
    const cards = document.querySelectorAll(".notification-card")

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => {
          b.classList.remove(
            "bg-secondary-container",
            "border-primary",
            "text-primary",
            "shadow-sm"
          )
          b.classList.add(
            "bg-surface-container-lowest",
            "border-outline-variant",
            "text-on-surface-variant"
          )
          const checkIcon = b.querySelector('[data-icon="check"]')
          if (checkIcon) checkIcon.remove()
        })

        btn.classList.add(
          "bg-secondary-container",
          "border-primary",
          "text-primary",
          "shadow-sm"
        )
        btn.classList.remove(
          "bg-surface-container-lowest",
          "border-outline-variant",
          "text-on-surface-variant"
        )

        const categoryId = btn.id.replace("filter-", "")

        cards.forEach((card) => {
          if (
            categoryId === "semua" ||
            card.getAttribute("data-category") === categoryId
          ) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      })
    })

    const markBtn = document.getElementById("markReadBtn")
    if (markBtn) {
      markBtn.addEventListener("click", () => {
        const badges = document.querySelectorAll(
          ".notification-card .animate-pulse"
        )
        badges.forEach((b) => b.classList.remove("animate-pulse", "bg-primary"))
        markBtn.innerHTML = `
          <span class="material-symbols-outlined text-[20px] text-primary" data-icon="done_all">done_all</span>
          <span class="text-label-md font-label-md text-primary">Selesai Dibaca</span>
        `
        markBtn.classList.add("bg-secondary-container/50")
      })
    }
  }, [])

  return (
    <>
      <section className="bg-surface-container-low border border-outline-variant/60 rounded-xl p-3.5 flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[18px]" data-icon="lock">
            lock
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-label-lg font-label-lg font-semibold text-primary">
              Ruang Aman &amp; Terjaga
            </h2>
            <span className="text-label-sm font-label-sm px-2 py-0.5 rounded-full bg-secondary-container/70 text-on-secondary-container">
              Privasi Aktif
            </span>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
            Sesuai komitmen etika kami, cuplikan pesan curhat pribadi tidak
            ditampilkan di notifikasi layar ini demi menjaga kenyamanan
            emosionalmu.
          </p>
        </div>
      </section>

      <section
        className="overflow-x-auto pb-1 -mx-5 px-5 flex gap-2 no-scrollbar"
        role="tablist"
      >
        <button
          className="filter-chip active flex items-center gap-1.5 h-9 px-4 rounded-full bg-secondary-container border border-primary text-primary text-label-md font-label-md whitespace-nowrap transition-all shadow-sm"
          id="filter-semua"
        >
          <span
            className="material-symbols-outlined text-[16px]"
            data-icon="check"
            data-weight="fill"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check
          </span>
          Semua
        </button>
        <button
          className="filter-chip flex items-center gap-1.5 h-9 px-4 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant text-label-md font-label-md whitespace-nowrap hover:bg-surface-container transition-all"
          id="filter-konsultasi"
        >
          <span className="material-symbols-outlined text-[16px]" data-icon="psychology">
            psychology
          </span>
          Konsultasi
        </button>
        <button
          className="filter-chip flex items-center gap-1.5 h-9 px-4 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant text-label-md font-label-md whitespace-nowrap hover:bg-surface-container transition-all"
          id="filter-komunitas"
        >
          <span className="material-symbols-outlined text-[16px]" data-icon="groups">
            groups
          </span>
          Aktivitas Komunitas
        </button>
      </section>

      <section className="space-y-3" id="notificationsContainer">
        <article
          className="notification-card bg-surface-container-lowest border border-outline-variant rounded-xl p-4 transition-all duration-200 hover:shadow-sm"
          data-category="konsultasi"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-secondary-container/80 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[24px]" data-icon="calendar_clock">
                calendar_clock
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-label-sm font-label-sm font-semibold text-primary px-2 py-0.5 rounded-full bg-secondary-container">
                  Konsultasi Terjadwal
                </span>
                <span className="text-label-sm font-label-sm text-outline">Besok, 14:00</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-medium text-on-surface mt-1.5">
                Pengingat Jadwal Konsultasi
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant mt-1">
                Sesi tatap maya bersama{" "}
                <span className="font-medium text-on-surface">
                  Psikolog Rarasati Dewi, M.Psi.
                </span>{" "}
                dijadwalkan besok siang. Silakan siapkan ruang tenang 10 menit
                sebelum mulai.
              </p>
              <div className="mt-3.5 pt-3 border-t border-outline-variant/40 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span>Tautan ruang aman tersedia</span>
                </div>
                <button className="h-9 px-3.5 rounded-xl bg-primary text-on-primary text-label-md font-label-md hover:bg-surface-tint active:scale-95 transition-all flex items-center gap-1">
                  <span>Lihat Detail Sesi</span>
                  <span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </article>

        <article
          className="notification-card bg-surface-container-lowest border border-outline-variant rounded-xl p-4 transition-all duration-200 hover:shadow-sm"
          data-category="konsultasi"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[24px]" data-icon="event_available">
                event_available
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-label-sm font-label-sm font-semibold text-secondary px-2 py-0.5 rounded-full bg-secondary-container/60">
                  Disetujui
                </span>
                <span className="text-label-sm font-label-sm text-outline">2 jam yang lalu</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-medium text-on-surface mt-1.5">
                Permintaan Jadwal Dikonfirmasi
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant mt-1">
                Terapis pendamping demo telah menyetujui pengajuan sesi
                konseling tematikmu untuk hari Kamis, 24 Oktober. Terima kasih
                telah berani melangkah.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold ring-2 ring-surface">
                    TR
                  </div>
                </div>
                <span className="text-label-sm font-label-sm text-on-surface-variant">
                  Terapis Relawan RuangRasa
                </span>
              </div>
            </div>
          </div>
        </article>

        <article
          className="notification-card bg-surface-container-lowest border border-outline-variant rounded-xl p-4 transition-all duration-200 hover:shadow-sm"
          data-category="komunitas"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary flex-shrink-0 mt-0.5">
              <span
                className="material-symbols-outlined text-[24px]"
                data-icon="favorite"
                data-weight="fill"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-label-sm font-label-sm font-medium text-on-tertiary-fixed-variant px-2 py-0.5 rounded-full bg-tertiary-fixed">
                  Dukungan Hangat
                </span>
                <span className="text-label-sm font-label-sm text-outline">Hari ini, 09:12</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-medium text-on-surface mt-1.5">
                Pelukan Virtual untuk Ceritamu
              </h3>
              <div className="my-2 p-2.5 rounded-lg bg-surface-container border border-outline-variant/50 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-tertiary" data-icon="visibility_off">
                  visibility_off
                </span>
                <p className="text-label-sm font-label-sm text-on-surface-variant italic">
                  Konten curhat dirahasiakan • Catatan Terproteksi Anonim
                </p>
              </div>
              <p className="text-body-md font-body-md text-on-surface">
                Curhat anonimmu mendapat{" "}
                <strong className="text-tertiary font-semibold">
                  12 pelukan virtual baru
                </strong>{" "}
                dan pesan kepedulian dari teman-teman sebaya. Kamu tidak
                sendirian berjalan melewati fase ini.
              </p>
              <div className="mt-3 flex items-center gap-2 text-label-sm font-label-sm text-tertiary">
                <span className="material-symbols-outlined text-[16px]" data-icon="volunteer_activism">
                  volunteer_activism
                </span>
                <span>Ruang Curhat Anonim</span>
              </div>
            </div>
          </div>
        </article>

        <article
          className="notification-card bg-surface-container-lowest border border-outline-variant rounded-xl p-4 transition-all duration-200 hover:shadow-sm"
          data-category="komunitas"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-secondary-container/80 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[24px]" data-icon="forum">
                forum
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-label-sm font-label-sm font-semibold text-primary px-2 py-0.5 rounded-full bg-secondary-container">
                  Diskusi Rekan
                </span>
                <span className="text-label-sm font-label-sm text-outline">Kemarin</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-medium text-on-surface mt-1.5">
                Respon Baru di Diskusi Komunitas
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant mt-1">
                Ada 5 tanggapan baru yang menyemangati pada thread{" "}
                <span className="font-medium text-on-surface">
                  "Ruang Pejuang Skripsi: Mengurai Beban &amp; Overthinking Bab 4"
                </span>
                .
              </p>
              <div className="mt-3 pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px]" data-icon="school">
                      school
                    </span>
                    Lingkar Akademik
                  </span>
                </div>
                <button className="text-label-md font-label-md font-medium text-primary hover:underline flex items-center gap-1">
                  Buka Thread
                  <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="bg-gradient-to-br from-surface-container-low to-secondary-container/30 border border-outline-variant/70 rounded-2xl p-4 text-center mt-6">
        <div className="inline-flex p-2 rounded-full bg-surface-container text-primary mb-2">
          <span className="material-symbols-outlined text-[22px]" data-icon="spa">
            spa
          </span>
        </div>
        <h4 className="text-headline-sm font-headline-sm text-on-surface">
          Perlu Jeda Sejenak?
        </h4>
        <p className="text-body-sm font-body-sm text-on-surface-variant max-w-xs mx-auto mt-1">
          Bila ada notifikasi yang memicu rasa lelahmu hari ini, tarik napas
          dalam-dalam. Semua kabar dapat menunggu hingga kamu siap.
        </p>
      </section>
    </>
  )
}
