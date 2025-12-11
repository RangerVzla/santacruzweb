"use client";

import Image from "next/image";
import { SectionHeading, TestimonialCarousel, ClientLogosGrid, SectorCard } from "../components/blocks";
import { testimonials } from "../data/testimonials";

const sectores = [
  { icon: "oil" as const, title: "Petróleo y Gas" },
  { icon: "construction" as const, title: "Construcción e Infraestructura" },
  { icon: "industrial" as const, title: "Servicios Industriales" },
  { icon: "international" as const, title: "Servicios Internacionales" },
  { icon: "mining" as const, title: "Servicios Mineros" },
];

export default function Testimonios() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <Image
          src="/santacruz/rectangle-243.jpg"
          alt="Testimonios"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full min-h-[60vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-24 sm:px-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-[0.08em] text-white uppercase">
              Testimonios
            </h1>
            <p className="text-sm sm:text-base uppercase tracking-[0.18em] text-white/90">
              Lo que dicen nuestros clientes sobre nosotros
            </p>
          </div>
        </div>
      </section>

      {/* Sectores Atendidos */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] text-black text-center uppercase">
            Sectores Atendidos:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {sectores.map((sector) => (
              <SectorCard key={sector.title} icon={sector.icon} title={sector.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-12">
          <SectionHeading
            title="Nuestros clientes"
            highlight="nos avalan"
            description={
              <p>
                La confianza de cientos de empresas respalda nuestra trayectoria
                y compromiso con la excelencia.
              </p>
            }
          />
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Testimonio + Logos (Unified) */}
      <section className="relative overflow-hidden">
        {/* Dark background section */}
        <div className="relative pt-16 pb-32 sm:pb-40">
          <div className="absolute inset-0">
            <Image
              src="/santacruz/rectangle-234.jpg"
              alt="Clientes"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/35 to-black/65" />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-8 space-y-8 text-white">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-sm uppercase tracking-[0.18em] text-white/80">
                Nos avalan
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-[0.12em]">
                Nuestros mejores clientes
              </h3>
            </div>
          </div>
        </div>

        {/* Testimonial Card - Positioned to bridge sections */}
        <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-8 -mt-16 sm:-mt-20">
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        {/* Light background section with logos */}
        <div className="bg-neutral-50 pt-32 sm:pt-36 pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-10">
            <SectionHeading
              title="Nuestros mejores clientes"
              highlight="nos avalan"
              description={
                <p>
                  Aliados en distintos países confían en nuestra capacidad de respuesta y
                  flexibilidad operacional.
                </p>
              }
            />
            <ClientLogosGrid />
          </div>
        </div>
      </section>
    </main>
  );
}
