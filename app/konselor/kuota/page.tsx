export default function KonselorKuotaPage() {
  return (
    <>
      <section className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
        <div className="w-10 h-10 rounded-xl bg-secondary-container flex-shrink-0 flex items-center justify-center text-primary mt-0.5">
          <span className="material-symbols-outlined text-[22px]" data-icon="calendar_month">
            calendar_month
          </span>
        </div>
        <div className="space-y-1">
          <h2 className="font-label-lg text-label-lg font-semibold text-primary">
            Ruang Teduh Konsultasi
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Atur hari dan jam ketersediaan untuk menerima sesi konsultasi
            video/chat mahasiswa dengan tenang dan terencana.
          </p>
        </div>
      </section>

      <section className="bg-surface-container-lowest border border-outline-variant/80 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                Buka Penerimaan Klien Baru
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Minggu ini (24 - 30 Okt) profil Anda tampil aktif di direktori.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer select-none">
            <input
              defaultChecked
              className="sr-only peer"
              type="checkbox"
            />
            <div className="w-13 h-7 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5.5 after:w-5.5 after:transition-all peer-checked:bg-primary-container"></div>
          </label>
        </div>
      </section>

      <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="font-label-lg text-label-lg font-semibold text-on-surface">
            Pilih Hari Praktek
          </span>
          <span className="font-label-sm text-label-sm text-secondary font-medium">
            Oktober 2024
          </span>
        </div>
        <div className="grid grid-cols-7 gap-1.5 bg-surface-container-lowest p-2 rounded-2xl border border-outline-variant/70 shadow-sm">
          <button className="flex flex-col items-center py-2.5 px-1 rounded-xl hover:bg-surface-container transition text-center group" type="button">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Sen
            </span>
            <span className="font-label-md text-label-md font-semibold text-on-surface mt-1">
              24
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container mt-1.5"></span>
          </button>
          <button className="flex flex-col items-center py-2.5 px-1 rounded-xl bg-primary-container text-on-primary shadow-sm text-center" type="button">
            <span className="font-label-sm text-label-sm text-on-primary-container">
              Sel
            </span>
            <span className="font-label-md text-label-md font-bold text-on-primary mt-1">
              25
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-on-primary-container mt-1.5"></span>
          </button>
          <button className="flex flex-col items-center py-2.5 px-1 rounded-xl text-outline opacity-60 text-center" type="button">
            <span className="font-label-sm text-label-sm">Rab</span>
            <span className="font-label-md text-label-md mt-1">26</span>
            <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1.5"></span>
          </button>
          <button className="flex flex-col items-center py-2.5 px-1 rounded-xl hover:bg-surface-container transition text-center" type="button">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Kam
            </span>
            <span className="font-label-md text-label-md font-semibold text-on-surface mt-1">
              27
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container mt-1.5"></span>
          </button>
          <button className="flex flex-col items-center py-2.5 px-1 rounded-xl hover:bg-surface-container transition text-center" type="button">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Jum
            </span>
            <span className="font-label-md text-label-md font-semibold text-on-surface mt-1">
              28
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container mt-1.5"></span>
          </button>
          <button className="flex flex-col items-center py-2.5 px-1 rounded-xl text-outline opacity-60 text-center" type="button">
            <span className="font-label-sm text-label-sm">Sab</span>
            <span className="font-label-md text-label-md mt-1">29</span>
            <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1.5"></span>
          </button>
          <button className="flex flex-col items-center py-2.5 px-1 rounded-xl text-outline opacity-60 text-center" type="button">
            <span className="font-label-sm text-label-sm">Min</span>
            <span className="font-label-md text-label-md mt-1">30</span>
            <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1.5"></span>
          </button>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-label-lg text-label-lg font-semibold text-on-surface">
              Slot Waktu: Selasa, 25 Okt
            </h2>
            <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-label-sm text-label-sm">
              Hari Aktif
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            3 dari 4 slot terisi/buka
          </span>
        </div>

        <div className="space-y-2.5">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[20px]" data-icon="wb_twilight">
                  wb_twilight
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-label-md text-label-md font-semibold text-on-surface">
                    10:00 - 11:00 WIB
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-medium">
                    Slot Pagi
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span
                    className="material-symbols-outlined text-[15px] text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    1 Klien terjadwal
                  </span>
                </div>
              </div>
            </div>
            <span className="bg-secondary-container/70 text-on-secondary-container px-2.5 py-1 rounded-full font-label-sm text-label-sm font-medium">
              Terjadwal
            </span>
          </div>

          <div className="bg-surface-container-lowest border-2 border-primary-container/40 rounded-2xl p-4 flex items-center justify-between shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
            <div className="flex items-center gap-3 pl-1">
              <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[20px]" data-icon="light_mode">
                  light_mode
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-label-md text-label-md font-semibold text-on-surface">
                    14:00 - 15:00 WIB
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-medium">
                    Slot Siang
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span
                    className="material-symbols-outlined text-[15px] text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    videocam
                  </span>
                  <span className="font-body-sm text-body-sm text-primary font-medium">
                    Klien #RR-4819 (Konseling Daring)
                  </span>
                </div>
              </div>
            </div>
            <button
              aria-label="Lihat Detail Sesi"
              className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="more_vert">
                more_vert
              </span>
            </button>
          </div>

          <div className="bg-surface-container-lowest border-2 border-primary-container/40 rounded-2xl p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-secondary-container/50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]" data-icon="nest_clock_farsight_analog">
                  nest_clock_farsight_analog
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-label-md text-label-md font-semibold text-on-surface">
                    16:30 - 17:30 WIB
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-medium">
                    Slot Sore
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-primary font-medium mt-0.5">
                  Tersedia / Dibuka untuk Mahasiswa
                </p>
              </div>
            </div>
            <button
              className="text-tertiary hover:bg-tertiary-fixed/30 p-1.5 rounded-lg transition"
              title="Tutup Slot"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]" data-icon="toggle_on">
                toggle_on
              </span>
            </button>
          </div>

          <div className="bg-surface-container/60 border border-outline-variant/60 rounded-2xl p-4 flex items-center justify-between opacity-80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-surface-dim flex items-center justify-center text-outline">
                <span className="material-symbols-outlined text-[20px]" data-icon="dark_mode">
                  dark_mode
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-label-md text-label-md font-medium text-on-surface-variant">
                    19:00 - 20:00 WIB
                  </span>
                  <span className="font-label-sm text-label-sm text-outline">
                    Slot Malam
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-outline mt-0.5">
                  Terkunci (Waktu Istirahat Mandiri)
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline text-[20px]" data-icon="lock">
              lock
            </span>
          </div>
        </div>

        <button
          className="w-full py-3 px-4 rounded-xl border border-dashed border-primary-container text-primary font-label-lg text-label-lg font-medium flex items-center justify-center gap-2 bg-surface-container-low/50 hover:bg-secondary-container/40 active:scale-[0.99] transition duration-150"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]" data-icon="add_circle">
            add_circle
          </span>
          + Tambah Slot Waktu Baru
        </button>
      </section>

      <section className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 space-y-4 shadow-sm">
        <div className="flex items-center gap-2 border-b border-surface-container pb-2.5">
          <span className="material-symbols-outlined text-primary text-[20px]" data-icon="spa">
            spa
          </span>
          <h3 className="font-label-lg text-label-lg font-semibold text-on-surface">
            Regulasi Kesejahteraan Konselor
          </h3>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-label-md text-label-md font-semibold text-on-surface">
                Kuota Maksimal Sesi Per Hari
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Mencegah kelelahan profesional (*burnout*)
              </p>
            </div>
            <div className="flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-xl border border-outline-variant/40">
              <button
                aria-label="Kurangi kuota"
                className="w-6 h-6 flex items-center justify-center text-primary hover:bg-surface-container-highest rounded-full transition active:scale-90"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]" data-icon="remove">
                  remove
                </span>
              </button>
              <span className="font-headline-sm text-headline-sm font-bold text-primary px-1">
                3
              </span>
              <button
                aria-label="Tambah kuota"
                className="w-6 h-6 flex items-center justify-center text-primary hover:bg-surface-container-highest rounded-full transition active:scale-90"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]" data-icon="add">
                  add
                </span>
              </button>
            </div>
          </div>
          <p className="font-label-sm text-label-sm text-secondary italic">
            Maks. 3 sesi/hari sesuai rekomendasi psikolog pembina RuangRasa.
          </p>
        </div>

        <div className="h-[1px] bg-surface-variant"></div>

        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-label-md text-label-md font-semibold text-on-surface">
                Jeda Istirahat Antar-Sesi
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Waktu refleksi &amp; penyusunan catatan klinis
              </p>
            </div>
            <span className="bg-secondary-container text-primary font-label-md text-label-md font-semibold px-2.5 py-1 rounded-lg">
              15 Menit
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              className="py-2 px-1 text-center rounded-xl border border-outline-variant font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container"
              type="button"
            >
              10 Menit
            </button>
            <button
              className="py-2 px-1 text-center rounded-xl bg-secondary-container border border-primary-container font-label-sm text-label-sm text-primary font-semibold flex items-center justify-center gap-1"
              type="button"
            >
              <span className="material-symbols-outlined text-[14px]" data-icon="check">
                check
              </span>{" "}
              15 Menit
            </button>
            <button
              className="py-2 px-1 text-center rounded-xl border border-outline-variant font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container"
              type="button"
            >
              20 Menit
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
