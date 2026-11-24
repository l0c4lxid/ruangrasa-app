"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const HIDE_NAV_PREFIXES = [
  "/",            // landing/welcome page
  "/welcome",
  "/auth",
  "/onboarding",
  "/konsultasi/", // detail subpages like booking, payment, session
  "/konselor",    // counselor portal
  "/chat-ai",     // AI assistant chat page
];

function BottomNavigationContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isGuest = searchParams.get("guest") === "true";

  // Explicitly allow main /konsultasi and /konsultasi/saya to have bottom nav
  const isConsultationSubpage =
    pathname.startsWith("/konsultasi/") &&
    pathname !== "/konsultasi/saya";

  const shouldHide =
    HIDE_NAV_PREFIXES.some((prefix) => {
      if (prefix === "/") return pathname === "/";
      if (prefix === "/konsultasi/") return false;
      return pathname.startsWith(prefix);
    }) || isConsultationSubpage;

  if (shouldHide) return null;

  const isHome =
    pathname === "/home" ||
    pathname.startsWith("/home?") ||
    pathname === "/notifications" ||
    pathname.startsWith("/notifications");
  const isCurhat = pathname.startsWith("/curhat");
  const isKomunitas = pathname.startsWith("/komunitas");
  const isKonsultasi =
    pathname === "/konsultasi" || pathname === "/konsultasi/saya";
  const isProfile =
    pathname.startsWith("/profile") || pathname.startsWith("/settings");

  // Helper to preserve ?guest=true across all navigation tabs
  const getHref = (basePath: string) => {
    return isGuest ? `${basePath}?guest=true` : basePath;
  };

  return (
    <nav
      aria-label="Navigasi Utama"
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-2 py-2 glass-nav max-w-[412px] mx-auto w-full select-none"
    >
      {/* 1. Beranda */}
      <Link
        href={getHref("/home")}
        className={`min-h-[44px] min-w-[58px] flex flex-col items-center justify-center transition-all duration-150 active:scale-95 focus-visible:rounded-full ${
          isHome
            ? "bg-primary/15 text-primary rounded-full px-3.5 py-1 shadow-xs border border-primary/20"
            : "text-on-surface-variant hover:text-primary px-3 py-1"
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={isHome ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          home
        </span>
        <span
          className={`text-label-md font-label-md mt-0.5 ${
            isHome ? "font-semibold text-primary" : "font-normal"
          }`}
        >
          Beranda
        </span>
      </Link>

      {/* 2. Curhat */}
      <Link
        href={getHref("/curhat")}
        className={`min-h-[44px] min-w-[58px] flex flex-col items-center justify-center transition-all duration-150 active:scale-95 focus-visible:rounded-full ${
          isCurhat
            ? "bg-primary/15 text-primary rounded-full px-3.5 py-1 shadow-xs border border-primary/20"
            : "text-on-surface-variant hover:text-primary px-3 py-1"
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={isCurhat ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          favorite
        </span>
        <span
          className={`text-label-md font-label-md mt-0.5 ${
            isCurhat ? "font-semibold text-primary" : "font-normal"
          }`}
        >
          Curhat
        </span>
      </Link>

      {/* 3. Komunitas */}
      <Link
        href={getHref("/komunitas")}
        className={`min-h-[44px] min-w-[58px] flex flex-col items-center justify-center transition-all duration-150 active:scale-95 focus-visible:rounded-full ${
          isKomunitas
            ? "bg-primary/15 text-primary rounded-full px-3.5 py-1 shadow-xs border border-primary/20"
            : "text-on-surface-variant hover:text-primary px-3 py-1"
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={isKomunitas ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          groups
        </span>
        <span
          className={`text-label-md font-label-md mt-0.5 ${
            isKomunitas ? "font-semibold text-primary" : "font-normal"
          }`}
        >
          Komunitas
        </span>
      </Link>

      {/* 4. Konsultasi */}
      <Link
        href={getHref("/konsultasi")}
        className={`min-h-[44px] min-w-[58px] flex flex-col items-center justify-center transition-all duration-150 active:scale-95 focus-visible:rounded-full ${
          isKonsultasi
            ? "bg-primary/15 text-primary rounded-full px-3.5 py-1 shadow-xs border border-primary/20"
            : "text-on-surface-variant hover:text-primary px-3 py-1"
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={isKonsultasi ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          psychology
        </span>
        <span
          className={`text-label-md font-label-md mt-0.5 ${
            isKonsultasi ? "font-semibold text-primary" : "font-normal"
          }`}
        >
          Konsultasi
        </span>
      </Link>

      {/* 5. Profil */}
      <Link
        href={getHref("/profile")}
        className={`min-h-[44px] min-w-[58px] flex flex-col items-center justify-center transition-all duration-150 active:scale-95 focus-visible:rounded-full ${
          isProfile
            ? "bg-primary/15 text-primary rounded-full px-3.5 py-1 shadow-xs border border-primary/20"
            : "text-on-surface-variant hover:text-primary px-3 py-1"
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={isProfile ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          person
        </span>
        <span
          className={`text-label-md font-label-md mt-0.5 ${
            isProfile ? "font-semibold text-primary" : "font-normal"
          }`}
        >
          Profil
        </span>
      </Link>
    </nav>
  );
}

export function BottomNavigation() {
  return (
    <Suspense fallback={null}>
      <BottomNavigationContent />
    </Suspense>
  );
}
