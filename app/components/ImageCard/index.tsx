"use client";

import Image from "next/image";
import type { ImageCardProps } from "./types";

export function ImageCard({ title, copy, image, darkOverlay }: ImageCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-neutral-100 shadow-md">
      <div className="relative h-48 sm:h-56 md:h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="400px"
        />
        <div
          className={`absolute inset-0 ${
            darkOverlay
              ? "bg-gradient-to-t from-black/65 via-black/35 to-black/0"
              : "bg-gradient-to-t from-black/25 via-black/10 to-black/0"
          }`}
        />
      </div>
      <div className="relative p-6">
        <h3 className="text-lg font-semibold text-black tracking-[0.08em]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">{copy}</p>
      </div>
    </div>
  );
}
