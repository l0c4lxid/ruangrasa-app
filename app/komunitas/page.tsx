import Link from 'next/link';

const topics = [
  { id: 1, title: 'Skripsi & Studi', count: 42, color: 'primary' },
  { id: 2, title: 'Rantau & Relasi', count: 38, color: 'secondary' },
  { id: 3, title: 'Karier & Magang', count: 29, color: 'primary-dark' },
  { id: 4, title: 'Keluarga & Emosi', count: 51, color: 'muted' },
  { id: 5, title: 'Pola Tidur', count: 24, color: 'primary' },
];

export default function KomunitasPage() {
  return (
    <>
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Komunitas Lingkar Sebaya</h1>
          <p className="text-muted mt-1">Thread aman terfasilitasi untuk tematik kesehatan mental Anda.</p>
        </div>
        <Link
          href="/komunitas/buat"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition"
        >
          Buat Thread
        </Link>
      </header>

      <h2 className="text-xl font-semibold mb-4">Topik Terpopuler</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map(t => (
          <Link
            key={t.id}
            href={`/komunitas/topic/${t.id}`}
            className="block p-4 rounded-xl border border-border hover:shadow-md transition group"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold group-hover:text-primary transition">{t.title}</h3>
              <span className={`text-xs bg-${t.color}/10 text-${t.color} px-2 py-1 rounded-full`}>{t.count} thread</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
