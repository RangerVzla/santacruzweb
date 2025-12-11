"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Package, Users, Handshake, Leaf, X, Instagram, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { clientLogos } from "../data/clientLogos";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  align?: "left" | "center";
  description?: ReactNode;
};

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

type StatCardProps = {
  value: string;
  label: string;
  image: string;
};

export function StatCard({ value, label, image }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-black/60 text-white shadow-lg backdrop-blur-sm">
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover opacity-70"
        sizes="200px"
      />
      <div className="relative flex min-h-[180px] flex-col justify-end gap-2 p-6 bg-gradient-to-t from-black/70 via-black/20 to-black/0">
        <div className="text-2xl font-semibold text-[color:var(--brand-orange)]">
          {value}
        </div>
        <p className="text-sm uppercase tracking-[0.16em]">{label}</p>
      </div>
    </div>
  );
}

type ImageCardProps = {
  title: string;
  copy: string;
  image: string;
  darkOverlay?: boolean;
};

export function ImageCard({ title, copy, image, darkOverlay }: ImageCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-neutral-100 shadow-md">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="400px"
        />
        <div
          className={`absolute inset-0 ${
            darkOverlay
              ? "bg-gradient-to-t from-black/65 via-black/35 to-black/0"
              : "bg-gradient-to-t from-black/25 via-black/10 to-black/0"
          }`}
        />
      </div>
      <div className="relative p-6">
        <h3 className="text-lg font-semibold text-black tracking-[0.08em]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">{copy}</p>
      </div>
    </div>
  );
}

type LogoGridProps = {
  logos: { src: string; alt: string }[];
};

export function LogoGrid({ logos }: LogoGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 items-center">
      {logos.map((logo) => (
        <div key={logo.src} className="flex items-center justify-center py-4">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={80}
            className="h-auto max-h-16 w-auto object-contain grayscale opacity-80"
          />
        </div>
      ))}
    </div>
  );
}

export function ClientLogosGrid() {
  return <LogoGrid logos={clientLogos} />;
}

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

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

type TestimonialCarouselProps = {
  testimonials: { quote: string; author: string; role: string; image?: string }[];
  autoPlayInterval?: number;
};

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

type CTAButtonProps = {
  href?: string;
  label: string;
  variant?: "primary" | "outline";
};

export function CTAButton({ href = "#", label, variant = "primary" }: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-colors";
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

type ImageCarouselProps = {
  images: { src: string; alt: string }[];
};

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

type ResponsibilityCardProps = {
  icon: "solidarity" | "community" | "ethics" | "environment";
  title: string;
};

const iconMap = {
  solidarity: Package,
  community: Users,
  ethics: Handshake,
  environment: Leaf,
};

export function ResponsibilityCard({ icon, title }: ResponsibilityCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gradient-to-b from-orange-900/30 to-orange-800/20 backdrop-blur-sm rounded-lg border border-white/10">
      <div className="p-4 bg-orange-700/40 rounded-lg">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-sm uppercase tracking-[0.16em] text-white text-center font-medium">
        {title}
      </h3>
    </div>
  );
}

type SectorCardProps = {
  icon: "oil" | "construction" | "industrial" | "international" | "mining";
  title: string;
};

const sectorIconMap = {
  oil: "/icons/oil-rig.png",
  construction: "/icons/worker.png",
  industrial: "/icons/building.png",
  international: "/icons/world.png",
  mining: "/icons/miner.png",
};

export function SectorCard({ icon, title }: SectorCardProps) {
  const iconSrc = sectorIconMap[icon];

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 aspect-square bg-linear-to-b from-neutral-400/80 to-[#c27840] rounded-lg shadow-md">
      <div className="p-4 border-2 border-white/40 rounded-lg">
        <Image
          src={iconSrc}
          alt={title}
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </div>
      <h3 className="text-xs uppercase tracking-[0.12em] text-white text-center font-medium leading-tight">
        {title}
      </h3>
    </div>
  );
}

type MenuDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const menuItems = [
    { label: "CÓMO TRABAJAMOS", href: "/como-trabajamos" },
    { label: "QUIENES SOMOS", href: "/quienes-somos" },
    { label: "SERVICIOS", href: "/servicios" },
    { label: "TESTIMONIOS", href: "/testimonios" },
    { label: "CONTACTO", href: "/contacto" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white/10 backdrop-blur-xl border-l border-white/20 z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1 flex flex-col items-end px-12 py-8 space-y-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="text-white text-sm uppercase tracking-[0.18em] hover:text-[color:var(--brand-orange)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex justify-end gap-4 px-12 pb-12">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-[color:var(--brand-orange)] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white hover:text-[color:var(--brand-orange)] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

