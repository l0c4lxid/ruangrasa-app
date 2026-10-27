"use client";

type Slot = { time: string; available: boolean };

type Props = {
  slots: Slot[];
  value?: string;
  onChange?: (time: string) => void;
};

/** TimeSlotPicker — selectable grid, mobile 3-col */
export default function TimeSlotPicker({ slots, value, onChange }: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {slots.map((s) => {
        const busy = !s.available;
        const selected = value === s.time;
        return (
          <button
            key={s.time}
            type="button"
            disabled={busy}
            onClick={() => !busy && !selected && onChange?.(s.time)}
            className={[
              "h-12 rounded-lg border text-sm font-medium transition",
              busy
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : selected
                  ? "border-[#22c58e] bg-[#22c58e] text-white"
                  : "border-border hover:border-[#22c58e] hover:text-[#22c58e]",
            ].join(" ")}
          >
            {s.time}
          </button>
        );
      })}
    </div>
  );
}
