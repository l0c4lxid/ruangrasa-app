import Link from 'next/link';

const psychologists = [
  {
    id: 1,
    name: 'dr. Maya S.',
    specialty: 'Konseling Akademik & Burnout',
    rating: 4.9,
    price: 'Rp 75.000',
    priceSubsidized: 'Rp 35.000',
    image: 'https://picsum.photos/seed/psych1/80/80',
    nextAvailable: 'Besok, 10:00',
    verified: true,
  },
  {
    id: 2,
    name: 'dr. Andi R.',
    specialty: 'Hubungan & Keluarga',
    rating: 4.8,
    price: 'Rp 80.000',
    priceSubsidized: 'Rp 40.000',
    image: 'https://picsum.photos/seed/psych2/80/80',
    nextAvailable: 'Hari ini, 15:30',
    verified: true,
  },
  {
    id: 3,
    name: 'dr. Sari T.',
    specialty: 'Kesehatan Mental Remaja',
    rating: 4.7,
    price: 'Rp 70.000',
    priceSubsidized: 'Rp 30.000',
    image: 'https://picsum.photos/seed/psych3/80/80',
    nextAvailable: 'Besok, 09:00',
    verified: true,
  },
];

export default function KonsultasiPage() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Konsultasi Psikolog Profesional</h1>
        <p className="text-muted mt-1">
          Konsultasi bersubsidi, jadwal fleksibel, panduan ruang tenang.
        </p>
      </header>

      <p className="mb-4 text-sm text-muted">
        Harga normal <span className="line-through">Rp 75.000</span> — subsidi RuangRasa turun hingga 50%
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {psychologists.map(p => (
          <Link
            key={p.id}
            href={`/konsultasi/${p.id}`}
            className="block p-6 rounded-xl border border-border hover:shadow-lg transition group"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-primary/10"
            />
            <div className="text-center">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              {p.verified && <span className="text-xs text-primary">✓ Terverifikasi SIPP</span>}
              <p className="text-sm text-muted mt-1">{p.specialty}</p>
              <div className="mt-2">
                <span className="text-primary font-semibold">{p.priceSubsidized}</span>
                <span className="text-xs text-muted"> / sesi</span>
              </div>
              <p className="text-xs text-muted mt-1">Tersedia: {p.nextAvailable}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
