"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { MenuDrawer } from "../MenuDrawer";

const menuLinks = [
  { label: "QUIÉNES SOMOS", href: "/quienes-somos" },
  { label: "SERVICIOS", href: "/servicios" },
  { label: "SERVICIOS INTERIOR", href: "/servicios-interior" },
  { label: "CÓMO TRABAJAMOS", href: "/como-trabajamos" },
  { label: "CONTACTO", href: "/contacto" },
  {
    label: "SUMATE A NUESTRO EQUIPO",
    href: "mailto:rrhh@santacruzoyg.com.ar?subject=Postulación%20%E2%80%93%20Sitio%20web&body=Hola%20equipo%20de%20RRHH%2C%0A%0AMe%20gustar%C3%ADa%20postularme%20para%20trabajar%20con%20ellos.%0AAdjunto%20mi%20CV.%0A%0ASaludos%2C",
  },
  { label: "ACCESO CLIENTES", href: "https://clientes.santacruzoyg.com.ar/" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-500 ${
          scrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        {/* Top bar: logo + desktop nav / mobile hamburger */}
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="flex items-center justify-between py-4 sm:py-5">
            {/* Logo - unchanged */}
            <Link href="/" className="shrink-0">
              <Image
                src="/santacruz/logo-santacruz-white.png"
                alt="Santa Cruz O&G"
                width={200}
                height={70}
                className="h-auto w-[180px] sm:w-[220px] lg:w-[260px] xl:w-[220px]"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6 lg:gap-7 xl:gap-6 [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] antialiased font-bold">
              {menuLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[11px] lg:text-[13px] xl:text-xs uppercase tracking-[0.18em] transition-colors ${
                    link.label === "ACCESO CLIENTES"
                      ? "text-[#FF6600] hover:text-[#FF6600]/80"
                      : `hover:text-brand ${
                          scrolled ? "text-white" : "text-white/90"
                        }`
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden flex items-center gap-2 uppercase text-[11px] tracking-[0.18em] hover:text-brand transition-colors ${
                scrolled ? "text-white" : "text-white/90"
              }`}
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
              <span>MENU</span>
            </button>
          </div>
        </div>

        {/* Divider line */}
        <div
          className={`border-t transition-colors duration-500 ${
            scrolled ? "border-white/10" : "border-white/20"
          }`}
        />
      </header>
    </>
  );
}
