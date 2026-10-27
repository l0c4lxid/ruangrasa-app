import Link from 'next/link';

export default function CurhatPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Ruang Curhat Anonim</h1>
      <p className="text-muted mb-8">
        Cerita tanpa nama, pseudonimitas otomatis, dan pelukan virtual yang menyentuh.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Buat Curhat Baru</h2>
        <form className="space-y-4 max-w-lg">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="topic">Topik</label>
            <select
              id="topic"
              className="w-full rounded-lg border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue=""
            >
              <option value="" disabled>Pilih topik</option>
              <option>Skripsi & Akademik</option>
              <option>Rantau & Relasi</option>
              <option>Cinta & Hubungan</option>
              <option>Keluarga</option>
              <option>Karier & Masa Depan</option>
              <option>Lainnya</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="story">Cerita Anda</label>
            <textarea
              id="story"
              rows={6}
              className="w-full rounded-lg border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Ceritakan apa yang Anda rasakan..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition"
          >
            Kirim Pelukan Virtual
          </button>
        </form>
      </div>

      <h2 className="text-xl font-semibold mb-4">Curhat Terbaru</h2>
      <div className="space-y-4">
        {[1, 2, 3].map(n => (
          <Link
            key={n}
            href={`/curhat/${n}`}
            className="block p-4 rounded-lg border border-border hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">P{n}</span>
              <span className="font-medium">Pengguna {n}</span>
              <span className="text-xs text-muted ml-auto">2 jam lalu</span>
            </div>
            <p className="text-sm text-muted line-clamp-2">
              Sedang merasa capek dengan tugas akhir, sepertinya butuh istirahat...
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
