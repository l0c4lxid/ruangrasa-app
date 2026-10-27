import "./globals.css";
import type { ReactNode } from "react";
import { BottomNavigation } from "@/components/ui/bottom-navigation";

export const metadata = {
  title: "RuangRasa — Ruang Aman Bercerita",
  description:
    "Platform ruang aman kesehatan mental mahasiswa & dewasa muda Indonesia (pendekatan Stepped-Care). Curhat anonim, komunitas suportif, konseling profesional.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#EAEFEA] flex justify-center text-on-surface antialiased">
        {/* Mobile Device Viewport Shell Container */}
        <div className="w-full max-w-[412px] min-h-screen bg-surface flex flex-col relative shadow-[0_0_50px_rgba(0,0,0,0.08)] border-x border-outline-variant/30 overflow-x-hidden">
          {children}
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
