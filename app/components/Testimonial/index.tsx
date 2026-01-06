"use client";

import type { TestimonialProps } from "./types";

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-4 px-8">
      <p className="text-xl sm:text-2xl leading-relaxed text-white">&ldquo;{quote}&rdquo;</p>
      <div className="text-sm font-bold text-black">
        {author}
      </div>
      <div className="text-sm text-black">{role}</div>
    </div>
  );
}
