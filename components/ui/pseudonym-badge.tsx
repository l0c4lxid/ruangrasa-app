/** PseudonymBadge — culturally-appropriate anonymous chip (Pxx) */
export default function PseudonymBadge({ pseudo }: { pseudo: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full bg-[#22c58e]/10 text-[#22c58e] px-2.5 py-0.5 text-xs font-medium"
      aria-label={`Pengguna anonim ${pseudo}`}
    >
      {pseudo}
    </span>
  );
}
