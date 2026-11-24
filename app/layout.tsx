import "./globals.css";
import type { ReactNode } from "react";
import { BottomNavigation } from "@/components/ui/bottom-navigation";

export const metadata = {
  title: "RuangTeduh | Ruang Aman Bercerita",
  description:
    "Platform ruang aman kesehatan mental mahasiswa & dewasa muda Indonesia (pendekatan Stepped-Care). Curhat anonim, komunitas suportif, konseling profesional.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-dvh bg-[#E8EFE9] flex justify-center text-on-surface antialiased selection:bg-secondary-container selection:text-primary">
        {/* Mobile Device Viewport Shell Container with subtle modern glass border */}
        <div className="w-full max-w-[412px] min-h-dvh bg-surface flex flex-col relative shadow-[0_0_60px_rgba(23,37,29,0.08)] border-x border-white/60 overflow-x-hidden">
          {children}
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
