import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const pillars = [
    {
      id: 'curhat',
      title: 'Ruang Curhat Anonim',
      desc: 'Cerita tanpa nama, pseudonimitas otomatis, dan pelukan virtual yang menyentuh.',
      href: '/curhat',
      color: 'primary',
      icon: '🗣',
    },
    {
      id: 'komunitas',
      title: 'Komunitas Lingkar Sebaya',
      desc: 'Thread aman terfasilitasi untuk tematik kesehatan mental Anda.',
      href: '/komunitas',
      color: 'secondary',
      icon: '👥',
    },
    {
      id: 'konsultasi',
      title: 'Konsultasi Psikolog',
      desc: 'Konsultasi bersubsidi, jadwal fleksibel, panduan ruang tenang.',
      href: '/konsultasi',
      color: 'primary-dark',
      icon: '🩺',
    },
    {
      id: 'konselor',
      title: 'Area Operasional Konselor',
      desc: 'Anti-burnout quota & dashboard moderasi komunitas.',
      href: '/konselor',
      color: 'muted',
      icon: '🛡',
    },
  ];

  return (
    <>
      <section className="grid lg:grid-cols-2 gap-12 items-center min-h-[70dvh] py-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ruang <span className="text-primary">Rasa</span>
          </h1>
          <p className="text-xl text-muted mb-8 max-w-md">
            Ruang aman kesehatan mental Anda. Pendekatan berjenjang (Stepped-Care) untuk mahasiswa dan dewasa muda Indonesia.
          </p>
          <Link
            href="/curhat"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition hover:scale-95 hover:bg-primary-dark"
          >
            Mulai Curhat
          </Link>
        </div>
        <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
          <span className="text-6xl">💬</span>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold mb-2">Empat Pilar RuangRasa</h2>
        <p className="text-muted mb-12">Satu platform, empat jalur dukungan kesehatan mental.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map(p => (
            <Link
              key={p.id}
              href={p.href}
              className="block p-6 rounded-xl bg-white border border-border transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-full bg-${p.color}/10 flex items-center justify-center text-2xl mb-4`}>{p.icon}</div>
              <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
