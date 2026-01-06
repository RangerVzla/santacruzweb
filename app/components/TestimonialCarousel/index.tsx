"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial } from "../Testimonial";
import type { TestimonialCarouselProps } from "./types";

export function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance effect
  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length, autoPlayInterval]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    trackMouse: true,
    trackTouch: true,
    preventScrollOnSwipe: true,
    delta: 50,
  });

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <div
      {...swipeHandlers}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative cursor-grab active:cursor-grabbing py-12 px-4 sm:px-8 bg-linear-to-b from-[#4D4D4D]/50 to-[#d4966a]/80"
    >
      {/* Avatar image */}
      {current.image && (
        <div className="flex justify-center mb-6">
          <Image
            src={current.image}
            alt={current.author}
            width={94}
            height={94}
            className="rounded-full border-2 border-neutral-600 transition-opacity duration-500"
          />
        </div>
      )}

      <div className="transition-opacity duration-500 ease-in-out">
        <Testimonial quote={current.quote} author={current.author} role={current.role} />
      </div>

      {/* Arrow buttons - centered below content */}
      {testimonials.length > 1 && (
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={goToPrevious}
            className="p-3 rounded-full border-2 border-white hover:bg-white/10 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="p-3 rounded-full border-2 border-white hover:bg-white/10 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
