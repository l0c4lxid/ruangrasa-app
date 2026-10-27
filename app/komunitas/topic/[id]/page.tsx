import Link from 'next/link';

const threads = [
  { id: 1, title: 'Gimana ya coping dengan tekanan skripsi + pekerjaan paruh waktu?', author: 'P33', replies: 12, lastActive: '5 min ago' },
  { id: 2, 'title': 'Tips tidur nyenyak di tengah kebingungan pikiran', author: 'P7', replies: 8, lastActive: '2 hours ago' },
  { id: 3, title: 'Pengalaman nongkrong di luar kota, ada anjikan kos-kosan murah?', author: 'P21', replies: 15, lastActive: '1 day ago' },
];

export default async function TopicPage({ params }: { params: { id: string } }) {
  return (
    <>
      <header className="mb-6">
        <Link href="/komunitas" className="text-sm text-muted hover:text-primary mb-2 inline-block">← Semua Topik</Link>
        <h1 className="text-2xl font-bold">Topik: Skripsi & Akademik</h1>
        <p className="text-sm text-muted mt-1">{threads.length} thread aktif</p>
      </header>

      <div className="space-y-4">
        {threads.map(thread => (
          <Link
            key={thread.id}
            href={`/komunitas/thread/${thread.id}`}
            className="block p-4 rounded-lg border border-border hover:bg-gray-50 transition group"
          >
            <h3 className="font-semibold group-hover:text-primary transition">{thread.title}</h3>
            <div className="flex items-center gap-3 text-xs text-muted mt-2">
              <span>{thread.author}</span>
              <span>• {thread.replies} balasan</span>
              <span>{thread.lastActive}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
