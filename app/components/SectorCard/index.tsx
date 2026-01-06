"use client";

import Image from "next/image";
import type { SectorCardProps } from "./types";

const sectorIconMap = {
  oil: "/icons/oil-rig.png",
  construction: "/icons/worker.png",
  industrial: "/icons/building.png",
  international: "/icons/world.png",
  mining: "/icons/miner.png",
};

export function SectorCard({ icon, title }: SectorCardProps) {
  const iconSrc = sectorIconMap[icon];

  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 sm:p-6 aspect-square bg-linear-to-b from-neutral-400/80 to-[#c27840] rounded-lg shadow-md">
      <div className="p-3 sm:p-4 border-2 border-white/40 rounded-lg">
        <Image
          src={iconSrc}
          alt={title}
          width={40}
          height={40}
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
        />
      </div>
      <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.12em] text-white text-center font-medium leading-tight">
        {title}
      </h3>
    </div>
  );
}
