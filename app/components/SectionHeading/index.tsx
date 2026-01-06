"use client";

import type { SectionHeadingProps } from "./types";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  align = "center",
  description,
  showDivider = false,
  dividerDotPosition = "right",
}: SectionHeadingProps) {
  const base = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-3 ${base}`}>
      {eyebrow ? (
        <span className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-orange)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-[0.08em] text-black">
        {title}{" "}
        {highlight ? (
          <span className="text-[color:var(--brand-orange)]">{highlight}</span>
        ) : null}
      </h2>
      {showDivider ? (
        <div className={`flex items-center gap-2 w-full max-w-md ${dividerDotPosition === "left" ? "flex-row-reverse" : ""}`}>
          <div className="flex-1 h-[2px] bg-brand" />
          <div className="w-3 h-3 rounded-full bg-brand" />
        </div>
      ) : null}
      {description ? (
        <div className="text-base leading-relaxed text-neutral-700 max-w-3xl">
          {description}
        </div>
      ) : null}
    </div>
  );
}
