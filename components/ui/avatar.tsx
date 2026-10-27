import Image from "next/image";

type AvatarProps = {
  src?: string;
  name: string;
  size?: number;
};

/** AvatarSoftGradient — photo or gradient pseudonym fallback */
export default function Avatar({ src, name, size = 40 }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (!src) {
    return (
      <div
        aria-label={name}
        className="rounded-[0.75rem] bg-gradient-to-br from-[#22c58e] to-[#f59e0b] flex items-center justify-center text-white font-semibold"
        style={{ width: size, height: size, fontSize: size * 0.4 }}
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      width={size}
      height={size}
      className="rounded-[0.75rem] object-cover border-2 border-white"
    />
  );
}
