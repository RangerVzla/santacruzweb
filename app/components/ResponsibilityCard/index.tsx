"use client";

import { Package, Users, Handshake, Leaf } from "lucide-react";
import type { ResponsibilityCardProps } from "./types";

const iconMap = {
  solidarity: Package,
  community: Users,
  ethics: Handshake,
  environment: Leaf,
};

export function ResponsibilityCard({ icon, title }: ResponsibilityCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-b from-orange-900/30 to-orange-800/20 backdrop-blur-sm rounded-lg border border-white/10">
      <div className="p-3 sm:p-4 bg-orange-700/40 rounded-lg">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
      <h3 className="text-sm uppercase tracking-[0.16em] text-white text-center font-medium">
        {title}
      </h3>
    </div>
  );
}
