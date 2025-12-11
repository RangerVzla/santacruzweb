"use client";

import type { SectionHeadingProps } from "./types";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  align = "center",
  description,
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
      {description ? (
        <div className="text-base leading-relaxed text-neutral-700 max-w-3xl">
          {description}
        </div>
      ) : null}
    </div>
  );
}
