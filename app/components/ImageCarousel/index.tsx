"use client";

import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import type { ImageCarouselProps } from "./types";

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    trackMouse: true,
    trackTouch: true,
    preventScrollOnSwipe: true,
    delta: 50,
  });

  return (
    <div {...swipeHandlers} className="relative flex items-center justify-center gap-10 px-4 cursor-grab active:cursor-grabbing">
      {/* Left peek image */}
      {images.length > 1 && (
        <button
          onClick={goToPrevious}
          className="hidden lg:block relative h-[450px] w-[300px] overflow-hidden rounded-xl opacity-50 hover:opacity-70 transition-all duration-300 hover:scale-105 shadow-lg"
          aria-label="Previous image"
        >
          <Image
            src={images[(currentIndex - 1 + images.length) % images.length].src}
            alt="Previous"
            fill
            className="object-cover"
            sizes="300px"
          />
          <div className="absolute inset-0 bg-black/20" />
        </button>
      )}

      {/* Main image */}
      <div className="relative h-[450px] md:h-[550px] w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-opacity duration-500 ease-in-out"
          sizes="(min-width: 768px) 1200px, 100vw"
          priority
        />
      </div>

      {/* Right peek image */}
      {images.length > 1 && (
        <button
          onClick={goToNext}
          className="hidden lg:block relative h-[450px] w-[300px] overflow-hidden rounded-xl opacity-50 hover:opacity-70 transition-all duration-300 hover:scale-105 shadow-lg"
          aria-label="Next image"
        >
          <Image
            src={images[(currentIndex + 1) % images.length].src}
            alt="Next"
            fill
            className="object-cover"
            sizes="300px"
          />
          <div className="absolute inset-0 bg-black/20" />
        </button>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning || index === currentIndex) return;
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[color:var(--brand-orange)] scale-125" : "bg-neutral-400 hover:bg-neutral-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
