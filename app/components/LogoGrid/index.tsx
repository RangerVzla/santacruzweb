"use client";

import Image from "next/image";
import type { LogoGridProps } from "./types";

export function LogoGrid({ logos }: LogoGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 items-center">
      {logos.map((logo) => (
        <div key={logo.src} className="flex items-center justify-center py-4">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={80}
            className="h-auto max-h-16 w-auto object-contain grayscale opacity-80"
          />
        </div>
      ))}
    </div>
  );
}
