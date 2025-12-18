"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X, Instagram, Linkedin } from "lucide-react";
import type { MenuDrawerProps } from "./types";

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
    { label: "SERVICIOS INTERIOR", href: "/servicios-interior" },
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
