"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";
import { MenuDrawer } from "../MenuDrawer";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 pt-6">
          <div className="flex items-center justify-between border-b border-white/20 pb-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/santacruz/logo-santacruz-white.png"
                alt="Santa Cruz O&G"
                width={200}
                height={70}
                className="h-auto w-[180px] sm:w-[220px]"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-white uppercase text-xs tracking-[0.18em] hover:text-white/80 transition-colors"
              aria-label="Toggle menu"
            >
              <span>MENU</span>
              <X className={`w-5 h-5 transition-transform ${isMenuOpen ? 'rotate-0' : 'rotate-45'}`} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
