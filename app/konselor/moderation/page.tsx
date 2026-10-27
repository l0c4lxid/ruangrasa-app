export default function KonselorModerationPage() {
  return (
    <>
      <section aria-label="Filter Permintaan Konsultasi" className="pt-1">
        <div
          className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar"
          role="tablist"
        >
          <button
            aria-selected="true"
            className="h-9 px-4 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-2 shadow-sm transition-all duration-150 shrink-0"
            role="tab"
          >
            <span>Semua Permintaan</span>
            <span className="w-5 h-5 rounded-full bg-on-primary/20 text-on-primary flex items-center justify-center font-label-sm text-label-sm font-semibold">
              3
            </span>
          </button>
          <button
            aria-selected="false"
            className="h-9 px-4 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/50 font-label-md text-label-md flex items-center gap-2 transition-all duration-150 shrink-0"
            role="tab"
          >
            <span>Sesi Perdana</span>
            <span className="w-5 h-5 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm font-semibold">
              2
            </span>
          </button>
          <button
            aria-selected="false"
            className="h-9 px-4 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/50 font-label-md text-label-md flex items-center gap-2 transition-all duration-150 shrink-0"
            role="tab"
          >
            <span>Sesi Lanjutan</span>
            <span className="w-5 h-5 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm font-semibold">
              1
            </span>
          </button>
        </div>
      </section>

      <section aria-label="Daftar Permintaan Masuk" className="flex flex-col gap-4.5">
        <article className="bg-surface-container-lowest rounded-[18px] border border-outline-variant/40 p- space-md flex flex-col gap-4 shadow-sm hover:border-primary-container/40 transition-all duration-200">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/70 flex items-center justify-center text-primary shrink-0 border border-secondary/20">
                <span className="material-symbols-outlined text-[24px]" data-icon="school">
                  school
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Klien Anonim
                  </h2>
                  <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Mahasiswa, 21 th • ID #RR-8921
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-medium border border-secondary-fixed-dim/40">
              <span className="material-symbols-outlined text-[14px]" data-icon="psychology">
                psychology
              </span>
              Sesi Perdana
            </span>
          </div>

          <div className="bg-surface-container-low rounded-xl p-3 flex flex-col gap-2 border border-outline-variant/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]" data-icon="videocam">
                  videocam
                </span>
                <span>Format Video Call (50 Mnt)</span>
              </div>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-medium">
                Terkonfirmasi Kuota
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-surface font-body-md text-body-md pt-1 border-t border-outline-variant/20">
              <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0" data-icon="calendar_month">
                calendar_month
              </span>
              <span className="font-medium">Besok, 25 Okt 2024 • 10:00 - 10:50 WIB</span>
            </div>
          </div>

          <div className="bg-surface-bright rounded-xl p-3 border-l-4 border-tertiary-container flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-on-surface-variant">
              <span className="font-label-sm text-label-sm font-medium flex items-center gap-1 text-tertiary">
                <span className="material-symbols-outlined text-[15px]" data-icon="format_quote">
                  format_quote
                </span>
                Catatan Kebutuhan Klien
              </span>
              <span className="font-label-sm text-label-sm text-outline">
                Keluhan Fisik &amp; Cemas
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
              "Sering merasa overwhelm menjelang sidang skripsi, detak jantung
              mendadak cepat dan sulit tidur teratur..."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              className="h-11 px-3 rounded-[14px] border border-outline-variant bg-surface-container-lowest text-secondary font-label-md text-label-md font-medium hover:bg-surface-container transition-colors duration-150 active:scale-95 flex items-center justify-center gap-1.5"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="event_repeat">
                event_repeat
              </span>
              Ajukan Waktu Lain
            </button>
            <button
              className="h-11 px-3 rounded-[14px] bg-primary-container text-on-primary font-label-md text-label-md font-medium hover:bg-primary transition-colors duration-150 active:scale-95 shadow-sm flex items-center justify-center gap-1.5"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="check_circle">
                check_circle
              </span>
              Terima &amp; Konfirmasi
            </button>
          </div>
        </article>

        <article className="bg-surface-container-lowest rounded-[18px] border border-outline-variant/40 p-space-md flex flex-col gap-4 shadow-sm hover:border-primary-container/40 transition-all duration-200">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/70 flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                <span className="material-symbols-outlined text-[24px]" data-icon="work">
                  work
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Klien Anonim
                  </h2>
                  <span className="w-2 h-2 rounded-full bg-primary-fixed-dim"></span>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Karyawan Muda, 24 th • ID #RR-7402
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-highest text-on-secondary-container font-label-sm text-label-sm font-medium border border-outline-variant/30">
              <span className="material-symbols-outlined text-[14px]" data-icon="cached">
                cached
              </span>
              Sesi Lanjutan
            </span>
          </div>

          <div className="bg-surface-container-low rounded-xl p-3 flex flex-col gap-2 border border-outline-variant/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-secondary font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]" data-icon="mic">
                  mic
                </span>
                <span>Format Voice / Audio Call</span>
              </div>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-medium">
                Sesi Ke-3
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-surface font-body-md text-body-md pt-1 border-t border-outline-variant/20">
              <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0" data-icon="calendar_month">
                calendar_month
              </span>
              <span className="font-medium">Kamis, 27 Okt 2024 • 16:30 WIB</span>
            </div>
          </div>

          <div className="bg-surface-bright rounded-xl p-3 border-l-4 border-secondary-container flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-on-surface-variant">
              <span className="font-label-sm text-label-sm font-medium flex items-center gap-1 text-secondary">
                <span className="material-symbols-outlined text-[15px]" data-icon="edit_note">
                  edit_note
                </span>
                Catatan Kemajuan Sesi
              </span>
              <span className="font-label-sm text-label-sm text-outline">
                Lembar Refleksi
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
              "Refleksi lembar pemantauan overthinking dari sesi sebelumnya"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              className="h-11 px-3 rounded-[14px] border border-outline-variant bg-surface-container-lowest text-secondary font-label-md text-label-md font-medium hover:bg-surface-container transition-colors duration-150 active:scale-95 flex items-center justify-center gap-1.5"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="event_repeat">
                event_repeat
              </span>
              Ajukan Waktu Lain
            </button>
            <button
              className="h-11 px-3 rounded-[14px] bg-primary-container text-on-primary font-label-md text-label-md font-medium hover:bg-primary transition-colors duration-150 active:scale-95 shadow-sm flex items-center justify-center gap-1.5"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="task_alt">
                task_alt
              </span>
              Terima Jadwal
            </button>
          </div>
        </article>

        <article className="bg-surface-container-lowest rounded-[18px] border border-outline-variant/40 p-space-md flex flex-col gap-4 shadow-sm hover:border-primary-container/40 transition-all duration-200">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/70 flex items-center justify-center text-primary shrink-0 border border-secondary/20">
                <span className="material-symbols-outlined text-[24px]" data-icon="luggage">
                  luggage
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Klien Anonim
                  </h2>
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Mahasiswa Rantau, 19 th • ID #RR-3109
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-medium border border-secondary-fixed-dim/40">
              <span className="material-symbols-outlined text-[14px]" data-icon="support_agent">
                support_agent
              </span>
              Konsultasi
            </span>
          </div>

          <div className="bg-surface-container-low rounded-xl p-3 flex flex-col gap-2 border border-outline-variant/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]" data-icon="videocam">
                  videocam
                </span>
                <span>Format Video Call (50 Mnt)</span>
              </div>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-medium">
                Baru Masuk
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-surface font-body-md text-body-md pt-1 border-t border-outline-variant/20">
              <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0" data-icon="calendar_month">
                calendar_month
              </span>
              <span className="font-medium">Jumat, 28 Okt 2024 • 14:00 WIB</span>
            </div>
          </div>

          <div className="bg-surface-bright rounded-xl p-3 border-l-4 border-tertiary-container flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-on-surface-variant">
              <span className="font-label-sm text-label-sm font-medium flex items-center gap-1 text-tertiary">
                <span className="material-symbols-outlined text-[15px]" data-icon="home_pin">
                  home_pin
                </span>
                Topik Penyesuaian Diri
              </span>
              <span className="font-label-sm text-label-sm text-outline">
                Homesick &amp; Isolasi
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
              "Adaptasi lingkungan baru terasa berat, kesulitan mencari teman
              yang sefrekuensi dan rindu suasana rumah..."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              className="h-11 px-3 rounded-[14px] border border-outline-variant bg-surface-container-lowest text-secondary font-label-md text-label-md font-medium hover:bg-surface-container transition-colors duration-150 active:scale-95 flex items-center justify-center gap-1.5"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="event_repeat">
                event_repeat
              </span>
              Ajukan Waktu Lain
            </button>
            <button
              className="h-11 px-3 rounded-[14px] bg-primary-container text-on-primary font-label-md text-label-md font-medium hover:bg-primary transition-colors duration-150 active:scale-95 shadow-sm flex items-center justify-center gap-1.5"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="check_circle">
                check_circle
              </span>
              Terima &amp; Konfirmasi
            </button>
          </div>
        </article>
      </section>

      <section className="mt-2 mb-4">
        <div className="rounded-2xl p-4 bg-surface-container border border-outline-variant/50 flex items-start gap-3.5 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[22px]" data-icon="search_off">
              search_off
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h3 className="font-label-lg text-label-lg font-semibold text-on-surface">
                Standar Pelayanan Respon (SLA)
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-semibold">
                2 Jam
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Konfirmasi dalam 2 jam untuk kenyamanan emosional klien. Respon
              cepat memberi rasa aman bagi mahasiswa yang sedang cemas menanti
              sesi.
            </p>
            <div className="mt-2 flex items-center gap-4 text-secondary">
              <span className="font-label-sm text-label-sm flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[15px]" data-icon="notifications_active">
                  notifications_active
                </span>
                Pengingat Otomatis Aktif
              </span>
              <a
                className="font-label-sm text-label-sm text-primary font-semibold hover:underline"
                href="#"
              >
                Pelajari Panduan
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
