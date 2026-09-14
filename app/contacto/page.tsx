"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import type { Location } from "../components/LocationMap/types";

const JIRA_PORTAL_URL =
  "https://santacruzoyg.atlassian.net/servicedesk/customer/portal/2/create/10017";

// Dynamic import for Leaflet (requires window object)
const LocationMap = dynamic(
  () => import("../components/LocationMap").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[400px] bg-neutral-200 rounded-lg flex items-center justify-center">
        <span className="text-neutral-500 text-sm">Cargando mapa...</span>
      </div>
    ),
  },
);

const clinicas = [
  {
    id: "neuquen",
    name: "Neuquén Capital",
    address: "El Topacio 3275 - Parque Industrial Oeste, Neuquén",
    phoneLabel: "Cel Clínica Neuquén",
    phone: "+54 299 456 8069",
    coordinates: [-38.9516, -68.0591] as [number, number],
  },
  {
    id: "anelo",
    name: "Añelo (Vaca Muerta)",
    address:
      "Av. Primeros Pobladores S/N, Lote B1C, Añelo, Provincia de Neuquén",
    phoneLabel: "Cel Clínica Añelo",
    phone: "+54 299 457 3405",
    coordinates: [-38.3489, -68.7872] as [number, number],
  },
];

const oficinaComercial = {
  address:
    'Teniente de Navío Eliana Krawczyk 685, Edificio Ámbar 2do "B" - Isla 132, Neuquén, Capital',
  email: "admin@santacruzoyg.com.ar",
  phoneLabel: "Cel comercial",
  phone: "299 476 5704",
  whatsapp: "5492994765704",
  coordinates: [-38.978044, -68.050751] as [number, number],
};

// Locations for the interactive map (clinics + commercial office)
const locations: Location[] = [
  ...clinicas.map((clinica) => ({
    name: `Clínica Santa Cruz O&G — ${clinica.name}`,
    city: clinica.name,
    address: clinica.address,
    phone: clinica.phone,
    coordinates: clinica.coordinates,
  })),
  {
    name: "Oficinas Comerciales",
    city: "Neuquén Capital",
    address: oficinaComercial.address,
    phone: oficinaComercial.phone,
    coordinates: oficinaComercial.coordinates,
  },
];

export default function ContactoPage() {
  return (
    <main className="bg-white text-black overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[70vh]">
        <Image
          src="/santacruz/hero-contact.png"
          alt="Contacto"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto flex h-full min-h-[70vh] max-w-7xl flex-col justify-center px-6 sm:px-12">
          <div className="space-y-4 max-w-xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight tracking-[0.08em] text-white uppercase">
              ¿Listo para transformar tu medicina Empresarial?
            </h1>
            <p className="text-sm sm:text-base text-white/90">
              Contáctanos hoy y descubre cómo podemos hacer tu empresa más
              eficiente
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/santacruz/bg-techno.jpg"
        >
          <source src="/santacruz/fondo_footer.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-8">
          <div className="mx-auto max-w-md rounded-2xl border border-white/20 bg-[color:var(--brand-dark)] p-8 text-center space-y-4">
            <h3 className="text-lg font-semibold text-white">
              ¿Tenés una queja o solicitud?
            </h3>
            <p className="text-sm text-white/80">
              Contanos tu experiencia y te vamos a responder a la brevedad.
            </p>
            <a
              href={JIRA_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm uppercase tracking-[0.16em] font-medium bg-brand text-white transition-colors hover:bg-[color:var(--brand-dark)]"
            >
              Enviar solicitud
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2">
            {/* Left Column - Contact Info */}
            <div className="space-y-12">
              {/* Clínicas */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold uppercase tracking-[0.12em] text-black">
                    Clínicas
                  </h3>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex-1 h-[2px] bg-[color:var(--brand-orange)]" />
                    <div className="w-3 h-3 rounded-full bg-[color:var(--brand-orange)]" />
                  </div>
                </div>
                {clinicas.map((clinica) => (
                  <div key={clinica.id} className="space-y-1">
                    <p className="text-[color:var(--brand-orange)] font-medium uppercase tracking-[0.08em]">
                      {clinica.name}
                    </p>
                    <p className="text-neutral-700">{clinica.address}</p>
                    <p className="text-neutral-700">
                      {clinica.phoneLabel}:{" "}
                      <a
                        href={`tel:${clinica.phone.replace(/\s/g, "")}`}
                        className="hover:text-[color:var(--brand-orange)]"
                      >
                        {clinica.phone}
                      </a>
                    </p>
                  </div>
                ))}
              </div>

              {/* Oficinas Comerciales */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold uppercase tracking-[0.12em] text-black">
                    Oficinas Comerciales
                  </h3>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex-1 h-[2px] bg-[color:var(--brand-orange)]" />
                    <div className="w-3 h-3 rounded-full bg-[color:var(--brand-orange)]" />
                  </div>
                </div>
                <div className="space-y-2 text-neutral-700 mt-2">
                  <p className="text-[color:var(--brand-orange)] font-medium uppercase tracking-[0.08em]">
                    PASEO DE LA COSTA
                  </p>
                  <p>{oficinaComercial.address}</p>
                  <p>
                    <a
                      href={`mailto:${oficinaComercial.email}`}
                      className="hover:text-[color:var(--brand-orange)]"
                    >
                      {oficinaComercial.email}
                    </a>
                  </p>
                  <p>
                    {oficinaComercial.phoneLabel}:{" "}
                    <a
                      href={`https://wa.me/${oficinaComercial.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[color:var(--brand-orange)]"
                    >
                      {oficinaComercial.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="w-full h-[350px] sm:h-[400px] md:h-[500px]">
              <LocationMap locations={locations} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
