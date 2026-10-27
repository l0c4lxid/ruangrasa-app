import Link from 'next/link';
import Image from 'next/image';

export default async function CurhatDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <article className="max-w-2xl mx-auto">
      <Link href="/curhat" className="text-sm text-muted hover:text-primary mb-6 inline-block">← Kembali ke Curhat</Link>

      <header className="flex items-start gap-4 mb-6">
        <img
          src={`https://picsum.photos/seed/user${id}/64/64`}
          alt="Avatar"
          className="w-16 h-16 rounded-full object-cover border-2 border-primary/10"
        />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Anon#9347</span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Topik: Skripsi</span>
          </div>
          <span className="text-xs text-muted">Dikirim 3 jam lalu</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <p>Assalamu'alaikum warahmatullahi wabarakatuh,</p>
        <p>Saya lagi di akhir skripsi, tapi terasa benar-benar nggak bertenaga. Setiap malam bangun, baca paper, ngoding, tapi hasilnya nggak nyambung. Kepala sakit, hati nggak enak, dan lagi-lagi mikirin masa depan. Kadang-kadang mikir, mungkin ini adalah tanda bahwa...</p>
        <blockquote className="border-l-4 border-primary pl-4 italic">
          "Anda tidak sendirian. Banyak yang merasa sama — rasa lelah ini valid, dan butuh istirahat bukan kemalasan."
        </blockquote>
        <p>Thank you sudah menguatkan saya. Semoga kita semua bisa melewati ini dengan lebih baik.</p>
      </div>

      <footer className="border-t border-border mt-8 pt-6">
        <p className="text-xs text-muted">Anda dapat memberikan dukungan dengan menyampaikan semangat. Ingat: ini adalah ruang anonim, jadi komunikasi tetap menjaga privasi.</p>
      </footer>
    </article>
  );
}
