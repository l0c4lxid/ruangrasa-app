"use client"

import { useEffect } from "react"

export default function KonselorDashboardPage() {
  useEffect(() => {
    const toggle = document.getElementById("consultation-toggle")
    if (toggle) {
      toggle.addEventListener("change", function (e) {
        const textElement = this.closest("section")?.querySelector(
          "span.text-label-lg"
        )
        if (textElement) {
          if (this.checked) {
            textElement.textContent = "Menerima Konsultasi"
            textElement.className =
              "text-label-lg font-label-lg font-semibold text-primary"
          } else {
            textElement.textContent = "Istirahat / Tidak Praktik"
            textElement.className =
              "text-label-lg font-label-lg font-semibold text-outline"
          }
        }
      })
    }
  }, [])

  return (
    <>
      <section className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/40 shadow-sm flex items-center justify-between">
        <div className="space-y-0.5">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-label-lg font-label-lg font-semibold text-primary">
              Menerima Konsultasi
            </span>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant">
            Sistem siap menyalurkan sesi baru
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            defaultChecked
            className="sr-only peer"
            id="consultation-toggle"
            type="checkbox"
          />
          <div className="w-14 h-8 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary-container"></div>
        </label>
      </section>

      <section className="grid grid-cols-3 gap-2.5">
        <div className="bg-surface-container-lowest p-3.5 rounded-2xl border border-outline-variant/40 flex flex-col justify-between">
          <div className="flex items-center justify-between text-tertiary">
            <span className="material-symbols-outlined text-[20px]" data-icon="pending_actions">
              pending_actions
            </span>
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          </div>
          <div className="mt-3">
            <span className="text-headline-md font-headline-md text-on-surface font-semibold block leading-tight">
              2
            </span>
            <span className="text-label-sm font-label-sm text-on-surface-variant leading-tight">
              Menunggu Respon
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-3.5 rounded-2xl border border-outline-variant/40 flex flex-col justify-between">
          <div className="flex items-center justify-between text-primary">
            <span className="material-symbols-outlined text-[20px]" data-icon="event_available">
              event_available
            </span>
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
        </div>
        <div className="bg-surface-container-lowest p-3.5 rounded-2xl border border-outline-variant/40 flex flex-col justify-between">
          <div className="flex items-center justify-between text-secondary">
            <span className="material-symbols-outlined text-[20px]" data-icon="schedule">
              schedule
            </span>
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant" data-icon="north_east">
              north_east
            </span>
          </div>
          <div className="mt-3">
            <span className="text-label-md font-label-md text-primary font-semibold block truncate leading-tight">
              13:00 - 20:00
            </span>
            <span className="text-label-sm font-label-sm text-on-surface-variant leading-tight">
              Jam Praktik Aktif
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-label-lg font-label-lg font-semibold text-on-surface flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-primary" data-icon="nest_clock_farsight_analog">
              nest_clock_farsight_analog
            </span>
            Sesi Konsultasi Terdekat
          </h2>
          <span className="text-label-sm font-label-sm text-on-surface-variant">
            Dalam 18 Menit
          </span>
        </div>
        <div className="bg-gradient-to-br from-surface-container-lowest via-surface-container-lowest to-surface-container-low rounded-2xl border border-primary/30 p-4 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-secondary-container/60 flex items-center justify-center text-primary font-semibold text-headline-sm">
                <span className="material-symbols-outlined text-[26px]" data-icon="shield_person">
                  shield_person
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-label-lg font-label-lg font-semibold text-on-surface">
                    Klien #RR-4819
                  </span>
                  <span className="text-[10px] font-label-sm bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full border border-outline-variant/30">
                    Identitas Terproteksi
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-tertiary" data-icon="psychology">
                    psychology
                  </span>
                  Fokus: Kecemasan Akademik &amp; Regulasi Emosi
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary" data-icon="schedule">
                schedule
              </span>
              <span className="font-medium text-on-surface">14:00 - 15:00 WIB</span>
            </div>
            <div className="flex items-center gap-1 text-primary text-label-sm font-label-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              Sesi Dimulai 18m Lagi
            </div>
          </div>
          <div className="mt-3.5 pt-1">
            <button className="w-full bg-primary hover:bg-primary-container text-on-primary py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-label-lg text-label-lg font-medium shadow-sm transition-transform active:scale-[0.98]">
              <span className="material-symbols-outlined text-[20px]" data-icon="video_camera_front">
                video_camera_front
              </span>
              Buka Ruang Sesi Video Terenkripsi
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <h2 className="text-label-lg font-label-lg font-semibold text-on-surface">
              Permintaan Baru Masuk
            </h2>
            <span className="bg-tertiary-fixed text-on-tertiary-fixed font-semibold text-label-sm font-label-sm px-2 py-0.5 rounded-full">
              2 Tertunda
            </span>
          </div>
          <button className="text-primary text-label-sm font-label-sm font-medium hover:underline flex items-center gap-0.5">
            Semua Permintaan
            <span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">
              chevron_right
            </span>
          </button>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-4 space-y-3 shadow-sm transition-all hover:border-primary-container/40">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[22px]" data-icon="account_circle">
                  account_circle
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-label-md font-label-md font-semibold text-on-surface">
                    Klien Anonim (Mahasiswa, 21th)
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                  <span className="text-label-sm font-label-sm text-tertiary font-medium">
                    Sesi Perdana
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]" data-icon="calendar_today">
                    calendar_today
                  </span>
                  Besok, 10:00 - 11:00 WIB (Online Video)
                </p>
              </div>
            </div>
            <span className="text-[11px] font-label-sm bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-md">
              15m lalu
            </span>
          </div>
          <div className="bg-surface-container-low/70 rounded-xl p-2.5 border border-outline-variant/20">
            <p className="text-body-sm font-body-sm text-on-surface italic line-clamp-2">
              "Sering merasa overwhelm menjelang sidang skripsi, detak jantung
              mendadak cepat dan sulit tidur teratur seminggu terakhir."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface py-2.5 px-3 rounded-xl text-label-md font-label-md font-medium border border-outline-variant/30 flex items-center justify-center gap-1.5 transition-colors active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="edit_calendar">
                edit_calendar
              </span>
              Ajukan Waktu Lain
            </button>
            <button
              className="w-full bg-primary hover:bg-primary-container text-on-primary py-2.5 px-3 rounded-xl text-label-md font-label-md font-medium flex items-center justify-center gap-1.5 shadow-sm transition-colors active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="check_circle">
                check_circle
              </span>
              Terima Jadwal
            </button>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-4 space-y-3 shadow-sm transition-all hover:border-primary-container/40">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[22px]" data-icon="account_circle">
                  account_circle
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-label-md font-label-md font-semibold text-on-surface">
                    Klien Anonim (Karyawan, 26th)
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                  <span className="text-label-sm font-label-sm text-secondary font-medium">
                    Sesi Lanjutan
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]" data-icon="calendar_today">
                    calendar_today
                  </span>
                  Lusa, 19:00 - 20:00 WIB (Online Voice)
                </p>
              </div>
            </div>
            <span className="text-[11px] font-label-sm bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-md">
              42m lalu
            </span>
          </div>
          <div className="bg-surface-container-low/70 rounded-xl p-2.5 border border-outline-variant/20">
            <p className="text-body-sm font-body-sm text-on-surface italic line-clamp-2">
              "Ingin merefleksikan lembar pemantauan trigger kecemasan
              kerja dari latihan minggu lalu."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface py-2.5 px-3 rounded-xl text-label-md font-label-md font-medium border border-outline-variant/30 flex items-center justify-center gap-1.5 transition-colors active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="edit_calendar">
                edit_calendar
              </span>
              Ajukan Waktu Lain
            </button>
            <button
              className="w-full bg-primary hover:bg-primary-container text-on-primary py-2.5 px-3 rounded-xl text-label-md font-label-md font-medium flex items-center justify-center gap-1.5 shadow-sm transition-colors active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="task_alt">
                task_alt
              </span>
              Terima Jadwal
            </button>
          </div>
        </div>
      </section>

      <section className="bg-surface-container rounded-2xl p-4 border border-outline-variant/40 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-surface-container-lowest text-primary shadow-sm">
            <span className="material-symbols-outlined text-[24px]" data-icon="more_time">
              more_time
            </span>
          </div>
          <div>
            <h3 className="text-label-lg font-label-lg font-semibold text-on-surface">
              Kelola Slot &amp; Jam Praktik
            </h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Buka atau kunci kuota sesi minggu ini
            </p>
          </div>
        </div>
        <button
          aria-label="Buka Pengaturan Jadwal"
          className="p-2 text-primary hover:bg-surface-container-high rounded-full active:scale-95 transition-transform"
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]" data-icon="arrow_forward_ios">
            arrow_forward_ios
          </span>
        </button>
      </section>

      <section className="p-3 bg-surface-container-low/60 rounded-xl border border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
        <span className="material-symbols-outlined text-[18px] text-secondary flex-shrink-0" data-icon="lock">
          lock
        </span>
        <span>
          Kerahasiaan data dan identitas klien dijaga sesuai Kode Etik
          Psikologi Indonesia (HIMPSI).
        </span>
      </section>
    </>
  )
}
