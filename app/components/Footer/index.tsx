"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/santacruz/bg-techno.jpg"
          alt="Conexiones"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/70 to-black/90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 py-12 space-y-8 text-white">
        {/* Row 1: Logo + Registration Text */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Image
            src="/santacruz/logo-santacruz-white.png"
            alt="Santa Cruz O&G"
            width={220}
            height={80}
            className="h-auto w-[180px] sm:w-[220px]"
          />
          <p className="text-xs leading-relaxed text-white/80 md:max-w-md md:text-right">
            SANTA CRUZ O&G es una marca nueva registrada por el Ministerio de
            Desarrollo Productivo de la República Argentina con el nº de
            registro: 3 632 625
          </p>
        </div>

        {/* Row 2: Orange Horizontal Line */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-white" />
        </div>

        {/* Row 3: Navigation Links */}
        <nav className="mb-24 flex flex-wrap gap-4 md:gap-8 text-xs uppercase tracking-[0.16em] text-white/80 [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] font-bold">
          <Link
            href="/quienes-somos"
            className="hover:text-white transition-colors"
          >
            Quiénes somos
          </Link>
          <Link
            href="/servicios"
            className="hover:text-white transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/como-trabajamos"
            className="hover:text-white transition-colors"
          >
            Cómo trabajamos
          </Link>
          <Link href="/contacto" className="hover:text-white transition-colors">
            Contacto
          </Link>
          <a
            href="mailto:rrhh@santacruzoyg.com.ar?subject=Postulación%20%E2%80%93%20Sitio%20web&body=Hola%20equipo%20de%20RRHH%2C%0A%0AMe%20gustar%C3%ADa%20postularme%20para%20trabajar%20con%20ellos.%0AAdjunto%20mi%20CV.%0A%0ASaludos%2C"
            className="hover:text-white transition-colors"
          >
            Sumate a nuestro equipo
          </a>
          <Link
            href="https://clientes.santacruzoyg.com.ar/"
            className="text-[#FF6600] hover:text-[#FF6600]/80 transition-colors"
          >
            Acceso clientes
          </Link>
        </nav>

        {/* Row 4: H2 Title */}
        <h2 className=" w-1/2 text-xl sm:text-2xl font-semibold tracking-[0.08em] text-white uppercase">
          Implementa el servicio de medicina laboral más eficiente para tu
          empresa
        </h2>

        {/* Row 5: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition-opacity"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>

      {/* Row 6: Black Ribbon with Legal Links */}
      <div className="relative z-10 bg-black py-4">
        <div className="flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-[0.12em] text-white/60">
          <span className="hover:text-white/80 cursor-pointer transition-colors">
            Política de privacidad
          </span>
          <span className="hover:text-white/80 cursor-pointer transition-colors">
            Aviso legal
          </span>
          <span className="hover:text-white/80 cursor-pointer transition-colors">
            Política de cookies
          </span>
        </div>
      </div>
    </footer>
  );
}
