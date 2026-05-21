"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

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
        {/* <nav className="mb-24 flex flex-wrap gap-4 md:gap-8 text-xs uppercase tracking-[0.16em] text-white/80 [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] font-bold">
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
        </nav> */}

        {/* Row 4: Contact Info */}
        <div className="w-full md:w-2/3 space-y-4 text-sm text-white/80">
          <div>
            <h3 className="text-sm uppercase tracking-[0.15em] text-white/80 mb-2 font-bold">
              Clínicas
            </h3>
            <p className="mb-1">
              <strong className="text-white">Neuquén Capital:</strong> El
              Topacio 3275 - Parque Industrial Oeste, Neuquén
            </p>
            <p>
              <strong className="text-white">Añelo (Vaca Muerta):</strong> Av.
              Primeros Pobladores S/N, Los B1C, Añelo, Provincia de Neuquén
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.15em] text-white/80 mb-2 font-bold">
              Oficinas Comerciales
            </h3>
            <p>
              Teniente de Navío Eliana Krawczyk 685, Edificio Ámbar 2do Piso
              &quot;B&quot; - Isla 132, Neuquén, Capital
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:admin@santacruzoyg.com.ar"
              className="text-white/80 hover:text-brand transition-colors"
            >
              admin@santacruzoyg.com.ar
            </a>
            <a
              href="https://wa.me/5492994765704"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-brand transition-colors"
            >
              Whatsapp: 299 476 5704
            </a>
          </div>
        </div>

        {/* Row 5: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/santacruz.oyg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:opacity-80 transition-opacity"
          >
            <Facebook className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://www.instagram.com/santacruz.oyg/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/company/santacruzoyg/"
            target="_blank"
            rel="noopener noreferrer"
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
