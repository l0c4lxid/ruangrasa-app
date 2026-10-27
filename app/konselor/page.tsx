// Area Operasional Konselor — anti-burnout quota & dashboard moderasi komunitas

const moderationQueue = [
  { id: 1, user: 'P42', content: 'Butuh bantuan, sedang sangat cemas...', flags: 'cemas', status: 'pending' },
  { id: 2, user: 'P17', content: 'Thread skripsi, ternyata supervisor tidak responsif...', flags: 'skripsi', status: 'escalated' },
  { id: 3, user: 'P8', content: 'Percakapan keluarga meletup... butuh dengar.', flags: 'keluarga', status: 'pending' },
];

export default function KonselorDashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard Konselor</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Kuota Harian (Anti-Burnout)</h2>
        <p className="text-muted mb-2">Sisa kuota: <span className="font-semibold text-primary">3 dari 10</span></p>
        <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
          <div className="h-full bg-primary w-3/10 rounded-full transition-all"></div>
        </div>
        <p className="text-xs text-muted mt-1">30% kuota terpakai • Istirahat 15 menit setiap 5 sesi</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Antrian Moderasi Komunitas</h2>
        <div className="space-y-3">
          {moderationQueue.map(item => (
            <div
              key={item.id}
              className={`p-4 rounded-lg border ${item.status === 'escalated' ? 'border-orange-200 bg-orange-50' : 'border-border'}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-medium">{item.user}</span>
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${item.status === 'escalated' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>{item.status}</span>
                  <p className="text-sm text-muted mt-1">{item.content}</p>
                </div>
                {item.status === 'escalated' && (
                  <a
                    href="tel:119"
                    className="text-xs text-secondary font-semibold underline"
                  >
                    Hubungi Hotline 119
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
