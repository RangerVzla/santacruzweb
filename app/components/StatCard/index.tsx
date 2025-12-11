"use client";

import Image from "next/image";
import type { StatCardProps } from "./types";

export function StatCard({ value, label, image }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-black/60 text-white shadow-lg backdrop-blur-sm">
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover opacity-70"
        sizes="200px"
      />
      <div className="relative flex min-h-[140px] sm:min-h-[160px] md:min-h-[180px] flex-col justify-end gap-2 p-4 sm:p-6 bg-gradient-to-t from-black/70 via-black/20 to-black/0">
        <div className="text-2xl font-semibold text-[color:var(--brand-orange)]">
          {value}
        </div>
        <p className="text-sm uppercase tracking-[0.16em]">{label}</p>
      </div>
    </div>
  );
}
