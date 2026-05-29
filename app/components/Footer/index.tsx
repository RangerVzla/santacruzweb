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
        {/* Row 1: Logo */}
        {/* <Image
          src="/santacruz/logo-santacruz-white.png"
          alt="Santa Cruz O&G"
          width={220}
          height={80}
          className="h-auto w-[180px] sm:w-[220px]"
        /> */}

        {/* Row 2: White Horizontal Line */}
        <div className="flex-1 h-px bg-white" />

        {/* Contact Info (left) + Registration (right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div className="space-y-4 text-sm text-white/80">
            <div>
              <h3 className="text-sm uppercase tracking-[0.15em] text-white/80 mb-2 font-bold">
                Clínicas
              </h3>
              <p className="mb-1">
                <span className="text-white">Neuquén Capital:</span> El Topacio
                3275 - Parque Industrial Oeste, Neuquén
              </p>
              <p>
                <span className="text-white">Añelo (Vaca Muerta):</span> Av.
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
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="w-4 h-4 inline"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  299 476 5704
                </span>
              </a>
            </div>
          </div>

          {/* Right: Registration + Logos */}
          <div className="flex flex-col items-end gap-3">
            <p className="text-xs leading-relaxed text-white/80 text-right">
              <strong>SANTA CRUZ O&G</strong> es una marca nueva registrada por
              el Ministerio de Desarrollo Productivo de la República Argentina
              con el nº de registro: 3 632 625
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/santacruz/cert-iso.png"
                alt="Certificación ISO"
                width={180}
                height={96}
                className="h-[96px] w-auto"
              />
              <Image
                src="/santacruz/empresa-neuquina.png"
                alt="Empresa Neuquina"
                width={180}
                height={64}
                className="h-[64px] w-auto rounded-md"
              />
            </div>
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
