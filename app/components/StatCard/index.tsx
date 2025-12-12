"use client";

import Image from "next/image";
import type { StatCardProps } from "./types";

export function StatCard({ value, label, image }: StatCardProps) {
  return (
    <div className="flex flex-col">
      {/* Image container */}
      <div className="relative aspect-3/4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover grayscale"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        />
        {/* Orange gradient overlay from bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-[#df5600]/40 to-transparent" />
      </div>

      {/* Line + dot + stats text */}
      <div className="relative mt-4">
        {/* Vertical line ending at dot */}
        <div className="absolute left-[3px] top-0 w-px h-6 bg-brand" />

        {/* Dot + text row */}
        <div className="flex items-start gap-3 mt-6">
          <div className="h-2 w-2 rounded-full bg-brand shrink-0 mt-1" />
          <div className="space-y-0.5">
            <div className="text-lg font-semibold text-brand">
              {value}
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-700">
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
