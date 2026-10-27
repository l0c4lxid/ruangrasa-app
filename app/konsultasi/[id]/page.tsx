import Link from 'next/link';

const timeSlots = [
  { id: 1, time: '09:00', available: true },
  { id: 2, time: '10:00', available: true },
  { id: 3, time: '11:00', available: false },
  { id: 4, time: '14:00', available: true },
  { id: 5, time: '15:30', available: true },
  { id: 6, time: '16:00', available: false },
];

export default async function BookingPage({ params }: { params: { id: string } }) {
  return (
    <>
      <header className="mb-6">
        <Link href="/konsultasi" className="text-sm text-muted hover:text-primary mb-2 inline-block">← Semua Psikolog</Link>
        <h1 className="text-2xl font-bold">Jadwalkan Konsultasi</h1>
      </header>

      <div className="mb-6">
        <p className="text-sm text-muted">dr. Maya S. • Konseling Akademik & Burnout</p>
        <p className="font-semibold">Pilih Jadwal (Senin, 27 Oktober 2025)</p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-6">
        {timeSlots.map(slot => (
          <button
            key={slot.id}
            disabled={!slot.available}
            className={`p-3 rounded-lg border text-center text-sm font-medium transition ${
              slot.available
                ? 'border-border hover:border-primary hover:text-primary'
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
          >
            {slot.time}
          </button>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <p className="text-sm text-muted mb-4">
          <span className="font-semibold text-primary">Rp 35.000</span> — subsidi RuangRasa (normal Rp 75.000)
        </p>
        <button
          className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition"
        >
          Konfirmasi & Bayar
        </button>
        <p className="text-xs text-muted mt-2">Pembayaran aman via prinsip minimal data. UU PDP compliant.</p>
      </div>
    </>
  );
}
