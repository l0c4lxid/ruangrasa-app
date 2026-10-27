type Props = {
  used: number;
  total: number;
  label?: string;
};

/** QuotaTracker — anti-burnout progress bar for counselors */
export default function QuotaTracker({ used, total, label = "kuota harian" }: Props) {
  const pct = Math.max(0, Math.min(100, (used / total) * 100));
  const remaining = total - used;
  return (
    <section aria-label={label}>
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-xs text-[#6b7280]">{label}</span>
        <span className="text-xs font-medium text-[#22c58e]">
          {remaining} dari {total} tersisa
        </span>
      </div>
      <div className="h-3 w-full rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full bg-[#22c58e] rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-[10px] text-[#6b7280] mt-1">{pct}% terpakai</p>
    </section>
  );
}
