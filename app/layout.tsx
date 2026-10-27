import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'RuangRasa — Ruang Aman Kesehatan Mental',
  description: 'Platform ruang aman kesehatan mental mahasiswa & dewasa muda Indonesia dengan pendekatan berjenjang (Stepped-Care).',
  icons: [{ rel: 'icon', url: '/favicon.svg' }],
};

const nav = [
  { label: 'Beranda', href: '/' },
  { label: 'Curhat', href: '/curhat' },
  { label: 'Komunitas', href: '/komunitas' },
  { label: 'Konsultasi', href: '/konsultasi' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-border">
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-primary">RuangRasa</Link>
            <nav className="flex items-center gap-4">
              {nav.map(item => (
                <Link key={item.href} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">{item.label}</Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
        <footer className="border-t border-border mt-16">
          <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-muted flex items-center gap-4">
            <span>Bersertifikat WCAG 2.1 AA • SLT 2 14 100%</span>
            <span>© {new Date().getFullYear()} RuangRasa. Hak dilindungi.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
