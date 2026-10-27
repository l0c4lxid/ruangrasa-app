export default function SettingsPage() {
  return (
    <>
      <section className="bg-surface-container-lowest rounded-[20px] p-5 shadow-[0_4px_16px_-4px_rgba(23,37,29,0.06)] border border-outline-variant/40 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-36 h-36 bg-secondary-container/40 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex items-start gap-4 relative z-10">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center border-2 border-primary-container/30 shadow-inner overflow-hidden">
              <span
                className="material-symbols-outlined text-primary text-[36px]"
                data-icon="sentiment_calm"
                data-weight="fill"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                sentiment_calm
              </span>
            </div>
            <div
              className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center ring-2 ring-surface-container-lowest"
              title="Enkripsi Aktif"
            >
              <span
                className="material-symbols-outlined text-on-primary text-[12px]"
                data-icon="lock"
                data-weight="fill"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lock
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-headline-sm font-headline-sm text-on-surface truncate font-semibold">
                Kawan Tenang #782
              </h2>
            </div>
            <p className="text-label-md font-label-md text-on-surface-variant mt-0.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-outline" data-icon="lock_outline">
                lock_outline
              </span>
              <span>r***@kampus.id</span>
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant">
              <span
                className="material-symbols-outlined text-[16px] text-primary"
                data-icon="verified_user"
                data-weight="fill"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <span className="text-label-sm font-label-sm font-medium tracking-tight">
                Akun Mahasiswa Terverifikasi
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-primary" data-icon="shield">
              shield
            </span>
            Privasi Terlindungi End-to-End
          </span>
          <span className="text-label-sm font-label-sm text-primary font-medium">Aktif</span>
        </div>
      </section>

      <section className="space-y-2">
        <div className="px-1 flex items-center justify-between">
          <h3 className="text-label-lg font-label-lg text-primary font-semibold tracking-wide">
            Pengaturan Privasi &amp; Keamanan Data
          </h3>
          <span className="material-symbols-outlined text-outline text-[18px]" data-icon="vpn_key">
            vpn_key
          </span>
        </div>
        <div className="bg-surface-container-lowest rounded-[20px] border border-outline-variant/40 divide-y divide-surface-container shadow-sm overflow-hidden">
          <div
            className="p-4 flex items-center justify-between gap-3 hover:bg-surface-container/40 active:scale-[0.99] transition-all cursor-pointer"
            role="button"
            tabIndex={0}
          >
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
              <span className="material-symbols-outlined text-[20px]" data-icon="masks">
                masks
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-body-md font-body-md font-medium text-on-surface">
                Nama Samaran Publik
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant truncate">
                Ubah nama samaran anonim di ruang curhat
              </p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0 text-primary">
              <span className="material-symbols-outlined text-[20px]" data-icon="edit">
                edit
              </span>
            </div>
          </div>

          <div className="p-4 flex items-center justify-between gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
              <span className="material-symbols-outlined text-[20px]" data-icon="visibility_off">
                visibility_off
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-body-md font-body-md font-medium text-on-surface">
                Penyamaran Profil Otomatis
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant truncate">
                Sembunyikan detail identitas di komunitas
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
              <input
                defaultChecked
                className="sr-only peer"
                id="privacy-toggle"
                type="checkbox"
              />
              <div className="w-12 h-7 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-on-primary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
            </label>
          </div>

          <div
            className="p-4 flex items-center justify-between gap-3 hover:bg-surface-container/40 active:scale-[0.99] transition-all cursor-pointer"
            role="button"
            tabIndex={0}
          >
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
              <span className="material-symbols-outlined text-[20px]" data-icon="history_edu">
                history_edu
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-body-md font-body-md font-medium text-on-surface">
                Riwayat Sesi Konsultasi &amp; Catatan
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant truncate">
                Akses data sesi terenkripsi 256-bit
              </p>
            </div>
            <span className="material-symbols-outlined text-outline text-[20px]" data-icon="chevron_right">
              chevron_right
            </span>
          </div>

          <div
            className="p-4 flex items-center justify-between gap-3 hover:bg-surface-container/40 active:scale-[0.99] transition-all cursor-pointer"
            role="button"
            tabIndex={0}
          >
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
              <span className="material-symbols-outlined text-[20px]" data-icon="policy">
                policy
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-body-md font-body-md font-medium text-on-surface">
                Persetujuan Pengolahan Data
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant truncate">
                Tinjau izin, analitik &amp; privasi pribadi
              </p>
            </div>
            <span className="material-symbols-outlined text-outline text-[20px]" data-icon="chevron_right">
              chevron_right
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-2">
        <div className="px-1 flex items-center justify-between">
          <h3 className="text-label-lg font-label-lg text-primary font-semibold tracking-wide">
            Pusat Dukungan &amp; Legalitas
          </h3>
          <span className="material-symbols-outlined text-outline text-[18px]" data-icon="health_and_safety">
            health_and_safety
          </span>
        </div>
        <div className="bg-surface-container-lowest rounded-[20px] border border-outline-variant/40 divide-y divide-surface-container shadow-sm overflow-hidden">
          <div
            className="p-4 flex items-center justify-between gap-3 hover:bg-surface-container/40 active:scale-[0.99] transition-all cursor-pointer"
            role="button"
            tabIndex={0}
          >
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary">
              <span className="material-symbols-outlined text-[20px]" data-icon="auto_stories">
                auto_stories
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-body-md font-body-md font-medium text-on-surface">
                Pedoman Komunitas &amp; Kode Etik
              </p>
              <p className="text-body-sm font-body-sm text-on-surface-variant truncate">
                Ruang aman bebas perundungan &amp; stigma
              </p>
            </div>
            <span className="material-symbols-outlined text-outline text-[20px]" data-icon="chevron_right">
              chevron_right
            </span>
          </div>

          <div
            className="p-4 flex items-center justify-between gap-3 hover:bg-tertiary-fixed/30 active:scale-[0.99] transition-all cursor-pointer bg-tertiary-fixed/10"
            role="button"
            tabIndex={0}
          >
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center flex-shrink-0 text-tertiary">
              <span
                className="material-symbols-outlined text-[20px]"
                data-icon="emergency"
                data-weight="fill"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emergency
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-body-md font-body-md font-semibold text-tertiary">
                  Bantuan Krisis &amp; Hotline 119
                </p>
                <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Siaga 24 jam untuk keadaan darurat
              </p>
            </div>
            <span className="material-symbols-outlined text-tertiary text-[20px]" data-icon="call">
              call
            </span>
          </div>

          <div
            className="p-4 flex items-center justify-between gap-3 hover:bg-error-container/30 active:scale-[0.99] transition-all cursor-pointer"
            role="button"
            tabIndex={0}
          >
            <div className="w-10 h-10 rounded-full bg-error-container/50 flex items-center justify-center flex-shrink-0 text-error">
              <span className="material-symbols-outlined text-[20px]" data-icon="delete_forever">
                delete_forever
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-body-md font-body-md font-medium text-error">
                Unduh / Hapus Seluruh Data Saya
              </p>
              <p className="text-body-sm font-body-sm text-outline truncate">
                Hak penghapusan permanen GDPR/PDP
              </p>
            </div>
            <span className="material-symbols-outlined text-error text-[20px]" data-icon="chevron_right">
              chevron_right
            </span>
          </div>
        </div>
      </section>

      <div className="pt-2 pb-4 text-center">
        <p className="text-body-sm font-body-sm text-on-surface-variant/70 italic">
          "Ceritakan harimu, kamu tidak sendiri di RuangRasa."
        </p>
        <p className="text-label-sm font-label-sm text-outline mt-1">
          Versi 2.4.0 • Keamanan Kriptografi SHA-256
        </p>
      </div>
    </>
  )
}
