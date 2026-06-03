"use client";

import Link from "next/link";
import { useEffect } from "react";
import { X, Instagram, Linkedin } from "lucide-react";
import type { MenuDrawerProps } from "./types";

export function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const TO = "rrhh@santacruzoyg.com.ar";
  const SUBJECT = encodeURIComponent("Postulación – Sitio web");
  const BODY = encodeURIComponent(
    "Hola equipo de RRHH,\n\n" +
      "Me gustaría postularme para trabajar con ustedes.\n" +
      "Adjunto mi CV.\n\n" +
      "Saludos,",
  );
  const menuItems = [
    { label: "QUIÉNES SOMOS", href: "/quienes-somos" },
    { label: "SERVICIOS", href: "/servicios" },
    { label: "SERVICIOS INTERIOR", href: "/servicios-interior" },
    { label: "CÓMO TRABAJAMOS", href: "/como-trabajamos" },
    { label: "CONTACTO", href: "/contacto" },
    {
      label: "SUMATE A NUESTRO EQUIPO",
      href: `mailto:${TO}?subject=${SUBJECT}&body=${BODY}`,
    },
    { label: "ACCESO CLIENTES", href: "https://clientes.santacruzoyg.com.ar/" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#1a1a1a]/95 backdrop-blur-md z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">
              Menú
            </span>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-brand transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1 flex flex-col justify-center px-8 py-12 space-y-6 [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] font-bold">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`text-sm uppercase tracking-[0.18em] transition-colors ${
                  item.label === "ACCESO CLIENTES"
                    ? "text-[#FF6600] hover:text-[#FF6600]/80"
                    : "text-white hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="mx-8 h-px bg-white/10" />

          {/* Social icons */}
          <div className="flex justify-between items-center px-8 py-8">
            <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">
              Seguinos
            </span>
            <div className="flex gap-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/70 hover:text-brand transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white/70 hover:text-brand transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
