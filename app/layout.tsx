import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "RuangRasa — Ruang Aman Bercerita",
  description:
    "Platform ruang aman kesehatan mental mahasiswa & dewasa muda Indonesia (pendekatan Stepped-Care). Curhat anonim, komunitas suportif, konseling profesional.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex justify-center">
        <main className="w-full max-w-[390px] min-h-screen bg-[#F7FAF7] flex flex-col justify-between px-5 pt-8 pb-7 relative overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
