"use client";

import type { TestimonialProps } from "./types";

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <div className="rounded-2xl bg-white/85 p-8 shadow-xl backdrop-blur-md max-w-4xl mx-auto text-center space-y-4">
      <p className="text-lg leading-relaxed text-neutral-800">&ldquo;{quote}&rdquo;</p>
      <div className="text-sm font-semibold text-[color:var(--brand-orange)]">
        {author}
      </div>
      <div className="text-sm text-neutral-600">{role}</div>
    </div>
  );
}
