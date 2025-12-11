"use client";

import Link from "next/link";
import type { CTAButtonProps } from "./types";

export function CTAButton({ href = "#", label, variant = "primary" }: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-colors";
  const variantStyles =
    variant === "primary"
      ? "bg-white text-black hover:bg-neutral-100"
      : "border border-black text-black hover:bg-black hover:text-white";
  const classes = `${base} ${variantStyles}`;
  return href.startsWith("http") ? (
    <a href={href} className={classes}>
      {label}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
