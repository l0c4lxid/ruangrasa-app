"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDE_NAV_PREFIXES = [
  "/welcome",
  "/auth",
  "/onboarding",
  "/konsultasi/", // detail subpages like booking, payment, session
  "/konselor",    // counselor portal
];

export function BottomNavigation() {
  const pathname = usePathname();

  // Explicitly allow main /konsultasi and /konsultasi/saya to have bottom nav
  const isConsultationSubpage =
    pathname.startsWith("/konsultasi/") &&
    pathname !== "/konsultasi/saya";

  const shouldHide =
    HIDE_NAV_PREFIXES.some(
      (prefix) => prefix !== "/konsultasi/" && pathname.startsWith(prefix)
    ) || isConsultationSubpage;

  if (shouldHide) return null;

  const isHome = pathname === "/";
  const isCurhat = pathname.startsWith("/curhat");
  const isKomunitas = pathname.startsWith("/komunitas");
  const isKonsultasi =
    pathname === "/konsultasi" || pathname === "/konsultasi/saya";
  const isProfile =
    pathname.startsWith("/profile") || pathname.startsWith("/settings");

  return (
    <nav
      aria-label="Navigasi Utama"
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-3 py-2 bg-surface/95 backdrop-blur-md border-t border-outline-variant/30 shadow-md max-w-[412px] mx-auto w-full select-none"
    >
      {/* 1. Beranda */}
      <Link
        href="/"
        className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-95 ${
          isHome
            ? "bg-secondary-container text-on-secondary-container rounded-full px-4 py-1"
            : "text-on-surface-variant hover:text-primary px-3 py-1"
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          style={isHome ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          home
        </span>
        <span
          className={`text-label-md font-label-md mt-0.5 ${
            isHome ? "font-semibold" : "font-normal"
          }`}
        >
          Beranda
        </span>
      </Link>

      {/* 2. Curhat */}
      <Link
        href="/curhat"
        className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-95 ${
          isCurhat
            ? "bg-secondary-container text-on-secondary-container rounded-full px-4 py-1"
            : "text-on-surface-variant hover:text-primary px-3 py-1"
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          style={isCurhat ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          favorite
        </span>
        <span
          className={`text-label-md font-label-md mt-0.5 ${
            isCurhat ? "font-semibold" : "font-normal"
          }`}
        >
          Curhat
        </span>
      </Link>

      {/* 3. Komunitas */}
      <Link
        href="/komunitas"
        className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-95 ${
          isKomunitas
            ? "bg-secondary-container text-on-secondary-container rounded-full px-4 py-1"
            : "text-on-surface-variant hover:text-primary px-3 py-1"
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          style={isKomunitas ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          groups
        </span>
        <span
          className={`text-label-md font-label-md mt-0.5 ${
            isKomunitas ? "font-semibold" : "font-normal"
          }`}
        >
          Komunitas
        </span>
      </Link>

      {/* 4. Konsultasi */}
      <Link
        href="/konsultasi"
        className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-95 ${
          isKonsultasi
            ? "bg-secondary-container text-on-secondary-container rounded-full px-4 py-1"
            : "text-on-surface-variant hover:text-primary px-3 py-1"
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          style={
            isKonsultasi ? { fontVariationSettings: "'FILL' 1" } : undefined
          }
        >
          psychology
        </span>
        <span
          className={`text-label-md font-label-md mt-0.5 ${
            isKonsultasi ? "font-semibold" : "font-normal"
          }`}
        >
          Konsultasi
        </span>
      </Link>

      {/* 5. Profil */}
      <Link
        href="/profile"
        className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-95 ${
          isProfile
            ? "bg-secondary-container text-on-secondary-container rounded-full px-4 py-1"
            : "text-on-surface-variant hover:text-primary px-3 py-1"
        }`}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          style={isProfile ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          person
        </span>
        <span
          className={`text-label-md font-label-md mt-0.5 ${
            isProfile ? "font-semibold" : "font-normal"
          }`}
        >
          Profil
        </span>
      </Link>
    </nav>
  );
}
