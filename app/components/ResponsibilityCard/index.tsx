"use client";

import { Package, Users, Handshake, Leaf } from "lucide-react";
import type { ResponsibilityCardProps } from "./types";

const iconMap = {
  solidarity: Package,
  community: Users,
  ethics: Handshake,
  environment: Leaf,
};

export function ResponsibilityCard({ icon }: Omit<ResponsibilityCardProps, "title">) {
  const Icon = iconMap[icon];

  return (
    <div className="aspect-square w-full max-w-[100px] sm:max-w-[140px] md:max-w-[160px] flex items-center justify-center bg-gradient-to-t from-[#df5600]/60 to-transparent backdrop-blur-md rounded-lg">
      <Icon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
    </div>
  );
}
