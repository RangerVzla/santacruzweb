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
      className="relative cursor-grab active:cursor-grabbing"
    >
      {/* Avatar image */}
      {current.image && (
        <div className="flex justify-center mb-6">
          <Image
            src={current.image}
            alt={current.author}
            width={94}
            height={94}
            className="rounded-full border border-white/40 bg-white/10 p-1 transition-opacity duration-500"
          />
        </div>
      )}

      <div className="transition-opacity duration-500 ease-in-out">
        <Testimonial quote={current.quote} author={current.author} role={current.role} />
      </div>

      {/* Arrow buttons */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-700" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-neutral-700" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[color:var(--brand-orange)] scale-125"
                  : "bg-neutral-400 hover:bg-neutral-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
