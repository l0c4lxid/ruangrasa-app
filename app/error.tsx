"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center bg-surface">
      <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-primary mb-4 shadow-xs">
        <span className="material-symbols-outlined text-[32px]">refresh</span>
      </div>
      <h1 className="text-headline-md font-headline-md font-bold text-on-surface">
        Terjadi Sedikit Kendala
      </h1>
      <p className="text-body-md font-body-md text-on-surface-variant mt-2 max-w-xs leading-relaxed">
        Jangan khawatir, tarik napas perlahan. Kamu bisa mencoba memuat ulang halaman ini.
      </p>
      <div className="mt-6 flex flex-col gap-2.5 w-full max-w-xs">
        <button
          onClick={() => reset()}
          className="w-full bg-primary text-on-primary py-3 px-4 rounded-xl text-label-md font-label-md font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-95 transition-all shadow-xs"
        >
          <span className="material-symbols-outlined text-[18px]">refresh</span>
          <span>Muat Ulang Halaman</span>
        </button>
        <Link
          href="/home"
          className="w-full bg-secondary-container text-primary py-3 px-4 rounded-xl text-label-md font-label-md font-semibold flex items-center justify-center gap-2 hover:bg-secondary-fixed active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">home</span>
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </div>
  );
}
