"use client";

import { TrendingUp, HeartHandshake, Handshake, Globe, CalendarClock, Target, Award, Users } from "lucide-react";
import type { ValueCardProps } from "./types";

const iconMap = {
  efficiency: TrendingUp,
  transparency: HeartHandshake,
  flexibility: Handshake,
  innovation: Globe,
  availability: CalendarClock,
  personalized: Target,
  pioneer: Award,
  alliances: Users,
};

export function ValueCard({ icon, title, description }: ValueCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="relative flex flex-col items-center justify-center p-6 text-center min-h-[200px]">
      <div className="absolute inset-0 bg-linear-to-b from-[#4D4D4D] to-[#DF5600] opacity-60" />
      <Icon className="relative w-10 h-10 sm:w-12 sm:h-12 text-white mb-4" strokeWidth={1.5} />
      <h3 className="relative text-sm sm:text-base font-semibold uppercase tracking-wider text-white mb-2">
        {title}:
      </h3>
      <p className="relative text-xs sm:text-sm text-white/90 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
